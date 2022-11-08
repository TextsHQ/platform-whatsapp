import { WASocket, BaileysEvent, BaileysEventMap, Chat, Contact, GroupMetadata, isJidGroup, isJidUser, jidNormalizedUser, toNumber, unixTimestampSeconds, WAMessageKey, WAMessageStubType, WAMessageStatus, isJidStatusBroadcast } from '@adiwajshing/baileys'
import { Awaitable, MessageBehavior, ServerEvent, ServerEventType, texts } from '@textshq/platform-sdk'
import { Brackets, Connection, EntityManager, EntityTarget, In, IsNull, MoreThan } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBParticipant from '../entities/DBParticipant'
import DBThread from '../entities/DBThread'
import DBUser from '../entities/DBUser'
import type { MappingContextWithDB } from '../types'
import chunkedWrite from './chunked-write'
import dbGetEarliestMsgOrderKey from './db-get-earliest-msg-order-key'
import dbGetLatestMsgOrderKey from './db-get-latest-msg-order-key'
import { shouldExcludeMessage, mapMessageID, profilePictureUrl } from './generics'
import mapPresenceUpdate from './map-presence-update'
import registerDBSubscribers from './register-db-subscribers'
import { CURRENT_MAPPING_VERSION } from '../config.json'

const DEFAULT_CHUNK_SIZE = 250

const makeTextsBaileysStore = (
  publishEvent: (event: ServerEvent) => void,
  getGroupMetadata: WASocket['groupMetadata'],
  mappingCtx: MappingContextWithDB,
) => {
  registerDBSubscribers(publishEvent, mappingCtx)

  const excludeEvent = false

  async function processEvents(
    events: Partial<BaileysEventMap>,
    ctx: MappingContextWithDB,
  ) {
    let didSyncHistory = false
    mappingCtx.logger.trace({ events }, 'recv event')

    if (events['creds.update']) {
      const { me } = events['creds.update']
      if (me) {
        await saveMeUser(me, ctx)
      }
    }

    if (events['messaging-history.set']) {
      const {
        messages,
        chats,
        contacts,
        isLatest,
      } = events['messaging-history.set']

      ctx.logger.info({
        msgs: messages.length,
        chats: chats.length,
        contacts: contacts.length,
      }, 'recv msg history')

      await handleChatsSync({ chats }, ctx)
      await handleContactsSync({ contacts, isLatest }, ctx)
      await handleMessagesSync({ messages }, ctx)

      if (chats.length) {
        didSyncHistory = true
      }
    }

    const updatedChats = [
      ...(events['chats.upsert'] || []),
      ...(events['chats.update'] || []),
    ]

    if (events['messages.upsert']) {
      await handleMessagesUpsert(
        events['messages.upsert'],
        updatedChats,
        excludeEvent,
        ctx,
      )
    }

    if (updatedChats.length) {
      await handleChatsUpsert(updatedChats, excludeEvent, getGroupMetadata, ctx)
    }

    if (events['contacts.upsert'] || events['contacts.update']) {
      const updated = [
        ...(events['contacts.upsert'] || []),
        ...(events['contacts.update'] || []),
      ]

      await handleContactsUpsert(updated, excludeEvent, ctx)
    }

    if (events['chats.delete']) {
      await handleChatsDelete(events['chats.delete'], excludeEvent, ctx)
    }

    if (events['group-participants.update']) {
      await handleGroupParticipantsUpdate(events['group-participants.update'], excludeEvent, ctx)
    }

    if (events['presence.update'] && !excludeEvent) {
      const { id, presences } = events['presence.update']
      const presenceEvents = mapPresenceUpdate(id, presences)
      for (const event of presenceEvents) {
        publishEvent(event)
      }
    }

    if (events['messages.update']) {
      await updateMessages(
        events['messages.update'],
        excludeEvent,
        (msg, { update }) => msg.update(update, ctx),
        ctx,
      )
    }

    if (events['message-receipt.update']) {
      await updateMessages(
        events['message-receipt.update'],
        excludeEvent,
        (msg, { receipt }) => msg.updateFromReceipt(receipt, ctx),
        ctx,
      )
    }

    if (events['messages.reaction']) {
      await updateMessages(
        events['messages.reaction'],
        excludeEvent,
        (msg, update) => msg.updateWithReaction(update.reaction, ctx),
        ctx,
      )
    }

    if (events['messages.delete']) {
      await handleMessagesDelete(events['messages.delete'], excludeEvent, ctx)
    }

    if (events['groups.update']) {
      await handleGroupsUpdate(events['groups.update'], excludeEvent, getGroupMetadata, ctx)
    }

    return { didSyncHistory }
  }

  return {
    async process(events: Partial<BaileysEventMap>) {
      if (hasDBEvent(events)) {
        const result = await mappingCtx.db.transaction(
          db => (
            processEvents(
              events,
              {
                db,
                meID: mappingCtx.meID,
                logger: mappingCtx.logger,
                accountID: mappingCtx.accountID,
              },
            )
          ),
        )
          .catch(
            err => {
              mappingCtx.logger.error(
                { trace: err.stack, events },
                'error in processing events',
              )
              texts.Sentry.captureException(err)
              texts.Sentry.captureMessage(`Dropped WhatsApp Events: "${err.message}"`)

              publishEvent({
                type: ServerEventType.TOAST,
                toast: {
                  text: `Dropped WhatsApp Events due to error: "${err.message}"`,
                  timeoutMs: -1,
                },
              })
            },
          )
        return result
      }

      return undefined
    },
  }
}

const NON_DB_EVENTS = new Set<BaileysEvent>(['connection.update'])

function hasDBEvent(map: Partial<BaileysEventMap>) {
  for (const key in map) {
    if (!NON_DB_EVENTS.has(key as BaileysEvent)) {
      return true
    }
  }

  return false
}

async function handleGroupsUpdate(
  updates: BaileysEventMap['groups.update'],
  excludeEvent: boolean,
  groupMetadata: WASocket['groupMetadata'],
  ctx: MappingContextWithDB,
) {
  return handleItemsUpsert(DBThread, updates, excludeEvent, mapGroup, ctx)

  async function mapGroup(metadata: Partial<GroupMetadata>, dbChat: DBThread | undefined) {
    if (dbChat && isJidGroup(dbChat.id)) {
      if (!dbChat.original.metadata) {
        dbChat.original.metadata = await groupMetadata(dbChat.id)
          .catch(() => undefined)
      }

      if (dbChat.original.metadata) {
        Object.assign(dbChat.original.metadata, metadata)
        dbChat.mapFromOriginal(ctx)
        return dbChat
      }

      ctx.logger.warn({ id: dbChat.id, update: metadata }, 'failed to get group metadata')
    }
  }
}

async function handleMessagesUpsert(
  { messages, type }: BaileysEventMap['messages.upsert'],
  chatUpdates: Partial<Chat>[],
  excludeEvent: boolean,
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx

  logger.info({ messages: messages.map(m => m.key) }, 'messages recv')
  messages = messages.filter(u => u.key.remoteJid && !isJidStatusBroadcast(u.key.remoteJid))
  if (!messages.length) {
    return
  }

  let key = (await dbGetLatestMsgOrderKey(db)) || 0

  const threadRepo = db.getRepository(DBThread)
  const msgRepo = db.getRepository(DBMessage)

  const existingMessageMap: { [id: string]: DBMessage } = { }
  // we use this map to avoid incorrectly updating conversation timestamps
  const chatUpdateMap: { [id: string]: Partial<Chat> } = { }
  const chatsRequiringTimestampCorrection: string[] = []
  const missingThreadMap: { [id: string]: { timestamp: number } } = { }

  for (const update of chatUpdates) {
    chatUpdateMap[update.id!] = update
  }

  const msgs = await fetchMessagesInDB(db, messages)
  for (const msg of msgs) {
    existingMessageMap[`${msg.threadID},${msg.id}`] = msg
  }

  const mapped: DBMessage[] = []
  for (const msg of messages) {
    const uqId = `${msg.key.remoteJid},${mapMessageID(msg.key)}`
    const mappedMsg = existingMessageMap[uqId] || new DBMessage()

    // not a new message
    // so this chat may require timestamp correction
    if (mappedMsg.id) {
      // if the message already existed, as a non-CIPHERTEXT message
      // and we received a new copy of the message
      const chat = chatUpdateMap[mappedMsg.threadID]
      if (
        chat
        && chat.unreadCount
        && mappedMsg.original.message.messageStubType !== WAMessageStubType.CIPHERTEXT
      ) {
        chat.unreadCount -= 1
        if (chat.unreadCount === 0) {
          delete chat.unreadCount
        }

        logger.warn(
          { chatId: chat.id, msgId: mappedMsg.id },
          'recv new copy of non-ciphertext message, correcting unread count',
        )
      }

      chatsRequiringTimestampCorrection.push(mappedMsg.threadID)
    }

    if (shouldExcludeMessage(msg)) {
      if (mappedMsg.id) {
        logger.info({ key: msg.key }, 'existing msg got excluded, removing from DB...')
        await msgRepo.remove(mappedMsg)
      }
      continue
    }

    if (mappedMsg.original) {
      // if a CIPHERTEXT message is replacing an existing message
      // then ignore it and move on
      if (msg.messageStubType === WAMessageStubType.CIPHERTEXT) {
        continue
      }
      // replace message timestamp with the timestamp from the original
      msg.messageTimestamp = mappedMsg.original.message.messageTimestamp
      mappedMsg.original.message = msg
    } else {
      mappedMsg.original = {
        message: msg,
        lastMappedVersion: CURRENT_MAPPING_VERSION,
      }
    }

    mappedMsg.original.seenByMe = !msg.key.fromMe
      && (msg.status === WAMessageStatus.READ || msg.status === WAMessageStatus.PLAYED)

    if (!mappedMsg.orderKey) {
      key += 1
      mappedMsg.orderKey = key
    }

    mappedMsg.mapFromOriginal(ctx)

    // if this message's decryption failed
    // we check if it's the first message in the thread
    // which means the thread doesn't exist
    // in that case, we create the thread
    if (msg.messageStubType === WAMessageStubType.CIPHERTEXT) {
      const threadExists = await threadRepo.count({
        where: { id: mappedMsg.threadID },
        take: 1,
      })
      if (!threadExists) {
        missingThreadMap[mappedMsg.threadID] = { timestamp: toNumber(msg.messageTimestamp!) }
      }
    }

    if (type !== 'notify' && !mappedMsg.behavior) {
      mappedMsg.behavior = MessageBehavior.DONT_NOTIFY
    }

    if (excludeEvent) {
      mappedMsg.shouldFireEvent = false
    }

    mapped.push(mappedMsg)
  }

  for (const chatId of chatsRequiringTimestampCorrection) {
    const chat = chatUpdateMap[chatId]
    if (chat?.conversationTimestamp) {
      const lastMsg = await msgRepo.findOne({
        // find the latest message that should update the conversation timestamp
        where: { threadID: chatId, behavior: IsNull() },
        order: { orderKey: 'DESC' },
        select: ['timestamp'],
      })
      if (lastMsg) {
        const conversationTimestamp = unixTimestampSeconds(lastMsg.timestamp)
        logger.debug(
          { old: chat.conversationTimestamp, new: conversationTimestamp },
          'fixing conversation timestamp of chat',
        )
        chat.conversationTimestamp = conversationTimestamp
      }
    }
  }

  await msgRepo.save(mapped, { chunk: DEFAULT_CHUNK_SIZE })

  const missingThreadIds = Object.keys(missingThreadMap)

  if (missingThreadIds.length) {
    logger.info({ missingThreadIds }, 'creating missing threads')

    const missingThreads = missingThreadIds.map(
      id => {
        const chat: Chat = {
          id,
          conversationTimestamp: missingThreadMap[id].timestamp,
          unreadCount: 0,
        }
        const thread = new DBThread()
        thread.original = { chat, metadata: undefined }
        thread.mapFromOriginal(ctx)

        return thread
      },
    )

    await threadRepo
      .createQueryBuilder()
      .insert()
      .values(missingThreads)
      .orIgnore()
      .execute()
  }
}

async function handleMessagesDelete(
  item: BaileysEventMap['messages.delete'],
  excludeEvent: boolean,
  { db, logger }: MappingContextWithDB,
) {
  const repo = db.getRepository(DBMessage)
  if ('all' in item) {
    // isn't supported yet
  } else {
    const msgs = await repo.find({ id: In(item.keys.map(mapMessageID)) })
    if (excludeEvent) {
      for (const msg of msgs) {
        msg.shouldFireEvent = false
      }
    }

    logger.info(
      { msgs: msgs.map(m => m.original.message.key) },
      'deleting messages',
    )
    await repo.remove(msgs)
  }
}

async function handleChatsSync(
  { chats }: Pick<BaileysEventMap['messaging-history.set'], 'chats'>,
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx

  const items = chats.map(chat => {
    const mapped = new DBThread()
    mapped.original = { chat, metadata: undefined }
    mapped.shouldFireEvent = false
    mapped.mapFromOriginal(ctx)

    return mapped
  })

  await chunkedWrite(db.getRepository(DBThread), items, DEFAULT_CHUNK_SIZE)

  logger.info(
    { chats: items.length },
    'synced chats',
  )

  return { chats }
}

async function updateMessages<T extends { key: WAMessageKey }>(
  updates: T[],
  excludeEvent: boolean,
  applyUpdate: (msg: DBMessage, update: T) => void,
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx
  updates = updates.filter(u => u.key.remoteJid && !isJidStatusBroadcast(u.key.remoteJid))
  if (!updates.length) {
    return
  }

  // create a map for which thread ID has number of read messages
  const readMsgsUpdateMap: { [threadId: string]: number } = {}
  // map for messageId => update for easy access
  const map: { [id: string]: T } = {}
  for (const update of updates) {
    const msgId = mapMessageID(update.key)
    const threadId = jidNormalizedUser(update.key.remoteJid || '')
    const id = `${threadId},${msgId}`
    map[id] = update
  }

  const repo = db.getRepository(DBMessage)
  const chatRepo = db.getRepository(DBThread)
  // find all the messages to be updated
  const dbItems = await fetchMessagesInDB(db, updates)
  // update each message & save
  for (const item of dbItems) {
    const id = `${item.threadID},${item.id!}`
    const wasSeenEarlier = item.original.seenByMe
    applyUpdate(item, map[id])
    // if the message was just marked seen
    // and it's not from the user themselves
    // add to the thread read counter
    if (!wasSeenEarlier && item.original.seenByMe) {
      readMsgsUpdateMap[item.threadID] = readMsgsUpdateMap[item.threadID] || 0
      readMsgsUpdateMap[item.threadID] += 1
    }

    if (excludeEvent) {
      item.shouldFireEvent = false
    }
  }
  await repo.save(dbItems as any[], { chunk: DEFAULT_CHUNK_SIZE })
  logger.info({ updates }, `updating ${dbItems.length}/${updates.length} messages`)
  // after messages are saved, if there are any updates to thread read counters
  // execute those updates
  const threadIds = Object.keys(readMsgsUpdateMap)
  if (threadIds.length) {
    const chats = await chatRepo.find({ id: In(threadIds), unreadCount: MoreThan(0) })
    for (const chat of chats) {
      // if the chat had unread messages
      chat.updateWithDecrementingUnreadCount(readMsgsUpdateMap[chat.id], ctx)
      logger.info({ id: chat.id, unreadCount: chat.unreadCount }, 'marked chat unread')
    }
    await chatRepo.save(chats, { chunk: DEFAULT_CHUNK_SIZE })
  }
}

async function handleContactsSync(
  { contacts, isLatest }: Pick<BaileysEventMap['messaging-history.set'], 'contacts' | 'isLatest'>,
  ctx: MappingContextWithDB,
) {
  // no need to fire events if it's the latest piece of history we're getting
  // otherwise, we'd need to update the names loaded on Texts
  const excludeEvent = isLatest
  await handleContactsUpsert(contacts, excludeEvent, ctx)
}

async function handleMessagesSync(
  { messages }: Pick<BaileysEventMap['messaging-history.set'], 'messages'>,
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx

  let key = await dbGetEarliestMsgOrderKey(db) || 0

  const dbMessages = messages.map(m => {
    const mappedMsg = new DBMessage()
    mappedMsg.original = {
      message: m,
      lastMappedVersion: CURRENT_MAPPING_VERSION,
    }
    mappedMsg.mapFromOriginal(ctx)
    mappedMsg.shouldFireEvent = false
    mappedMsg.orderKey = key

    key -= 1

    return mappedMsg
  })

  await chunkedWrite(db.getRepository(DBMessage), dbMessages, DEFAULT_CHUNK_SIZE)

  logger.info({ messages: dbMessages.length }, 'saved message history')
}

const fetchMessagesInDB = async (db: Connection | EntityManager, keys: { key: WAMessageKey }[]) => {
  const repo = db.getRepository(DBMessage)
  // find all the messages to be updated
  const qb = repo
    .createQueryBuilder()
    .where(new Brackets(
      brackets => {
        for (const { key } of keys) {
          const msgId = mapMessageID(key)
          const threadId = jidNormalizedUser(key.remoteJid || '')
          brackets = brackets.orWhere(`(thread_id='${threadId}' AND id='${msgId}')`)
        }
        return brackets
      },
    ))
  const dbItems = await qb.getMany()
  return dbItems
}

async function handleGroupParticipantsUpdate(
  { participants, action, id: threadID }: BaileysEventMap['group-participants.update'],
  excludeEvent: boolean,
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx

  const threadRepo = db.getRepository(DBThread)
  const participantRepo = db.getRepository(DBParticipant)
  const thread = await threadRepo.findOne({ id: threadID })

  logger.debug({ threadID, participants, action }, 'updating participants')
  if (thread) {
    const { metadata } = thread.original
    const updatedParticipantSet = new Set(participants)
    if (metadata) {
      switch (action) {
        case 'add':
          for (const participant of participants) {
            if (!metadata.participants.find(p => p.id === participant)) {
              metadata.participants.push({ id: participant })
            }
          }
          break
        case 'remove':
          metadata.participants = metadata.participants.filter(
            p => !updatedParticipantSet.has(p.id),
          )
          break
        default:
          for (const participant of metadata.participants) {
            if (updatedParticipantSet.has(participant.id)) {
              participant.isAdmin = action === 'promote'
              if (action !== 'promote' && participant.isSuperAdmin) {
                participant.isSuperAdmin = false
              }
            }
          }
          break
      }
      thread.mapFromOriginal(ctx)

      if (excludeEvent) {
        thread.shouldFireEvent = false
      }

      await threadRepo.save(thread)
      // remove existing data and overwrite new participants
      await participantRepo.delete({ threadID: thread.id })
      await chunkedWrite(participantRepo, thread.participantsList!, DEFAULT_CHUNK_SIZE)
    } else {
      logger.info({ threadID }, 'received participants update, but metadata absent')
    }
  } else {
    logger.info({ threadID }, 'received participants update for unknown thread')
  }
}

async function handleChatsDelete(
  ids: BaileysEventMap['chats.delete'],
  excludeEvent: boolean,
  { db, logger }: MappingContextWithDB,
) {
  const repo = db.getRepository(DBThread)
  const msgRepo = db.getRepository(DBMessage)
  const chats = await repo.find({ id: In(ids) })
  if (excludeEvent) {
    for (const chat of chats) {
      chat.shouldFireEvent = false
    }
  }

  await repo.remove(chats, { chunk: 500 })
  await msgRepo.delete({ threadID: In(ids) })

  logger.info({ ids }, 'deleted chats')
}

async function handleChatsUpsert(
  chats: Partial<Chat>[],
  excludeEvent: boolean,
  groupMetadata: WASocket['groupMetadata'],
  ctx: MappingContextWithDB,
) {
  const participants: DBParticipant[] = []
  await handleItemsUpsert(DBThread, chats, excludeEvent, mapChat, ctx)

  const participantRepo = ctx.db.getRepository(DBParticipant)
  await chunkedWrite(participantRepo, participants, DEFAULT_CHUNK_SIZE)

  async function mapChat(chat: Partial<Chat>, dbChat: DBThread | undefined) {
    if (chat.unreadCount && chat.unreadCount > 0) {
      chat.unreadCount = Math.max(dbChat?.unreadCount || 0, 0) + chat.unreadCount
    }

    if (chat.conversationTimestamp && dbChat) {
      // if chat is marked newer
      // do not update the stamp
      const stamp = unixTimestampSeconds(dbChat.timestamp)
      if (stamp > chat.conversationTimestamp) {
        chat.conversationTimestamp = stamp
      }
    }

    let shouldSaveParticipants = false
    if (!dbChat) {
      if (!chat.conversationTimestamp) {
        chat.conversationTimestamp = unixTimestampSeconds()
      }

      dbChat = new DBThread()

      const metadata = isJidGroup(chat.id!)
        ? await groupMetadata(chat.id!).catch(() => undefined)
        : undefined

      dbChat.original = { chat, metadata }
      shouldSaveParticipants = true
    }

    Object.assign(dbChat.original.chat, chat)
    dbChat.mapFromOriginal(ctx)

    if (dbChat.participantsList && shouldSaveParticipants) {
      participants.push(...dbChat.participantsList!)
    }

    return dbChat
  }
}

function handleContactsUpsert(
  contacts: Partial<Contact>[],
  excludeEvent: boolean,
  ctx: MappingContextWithDB,
) {
  contacts = contacts.filter(c => isJidUser(c.id))
  return handleItemsUpsert(DBUser, contacts, excludeEvent, mapContact, ctx)

  function mapContact(contact: Partial<Contact>, dbItem: DBUser | undefined) {
    const anyName = contact.name || contact.verifiedName || contact.notify
    if (dbItem) {
      if (
        (
          contact.name !== dbItem.fullName
          && contact.name
        )
        || (
          !dbItem.fullName
          && anyName
        )
      ) {
        dbItem.fullName = anyName
        return dbItem
      }
    } else if (anyName) {
      return DBUser.fromOriginal(contact as any, ctx)
    }
  }
}

async function handleItemsUpsert<T extends { id: string, shouldFireEvent?: boolean }, K extends { id: string }>(
  entity: (new () => T) & EntityTarget<any>,
  items: Partial<K>[],
  excludeEvent: boolean,
  map: (k: Partial<K>, dbItem: T | undefined) => Awaitable<T | undefined>,
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx
  items = items.filter(i => !isJidStatusBroadcast(i.id!))
  if (!items.length) {
    return
  }

  const repo = db.getRepository(entity)
  const dbItemsArr = await repo
    .createQueryBuilder()
    .where(`id IN (${items.map(i => `'${i.id}'`).join(',')})`)
    .getMany()

  const itemsToSave: T[] = []

  const dbItemsMap = dbItemsArr.reduce((dict, item) => {
    dict[item.id] = item
    return dict
  }, { } as { [_: string]: T })

  for (const item of items) {
    // broadcast chats/contacts are not supported
    if (item.id?.endsWith('broadcast')) {
      continue
    }

    const id = item.id!
    const mapped = await map(item, dbItemsMap[id])
    if (mapped) {
      if (excludeEvent) {
        mapped.shouldFireEvent = false
      }
      itemsToSave.push(mapped)
    }
  }

  if (itemsToSave.length) {
    await repo.save(itemsToSave, { chunk: DEFAULT_CHUNK_SIZE })
    logger.info(
      { length: itemsToSave.length, excludeEvent },
      `upserted ${entity.name}`,
    )
  }
}

async function saveMeUser(me: Contact, ctx: MappingContextWithDB) {
  // this has to be done before we await since `this` can change after the context switch
  const meUser = DBUser.fromOriginal(me, ctx)
  meUser.isSelf = true
  meUser.imgURL = profilePictureUrl(ctx.accountID, meUser.id)
  await ctx.db.getRepository(DBUser).save(meUser)
}

export default makeTextsBaileysStore
