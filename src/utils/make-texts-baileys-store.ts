import { AnyWASocket, BaileysEventMap, Chat, Contact, GroupMetadata, isJidGroup, isJidUser, toNumber, unixTimestampSeconds, WAMessageKey, WAMessageStubType } from '@adiwajshing/baileys'
import { Awaitable, MessageBehavior, ServerEvent } from '@textshq/platform-sdk'
import { Brackets, Connection, EntityManager, EntityTarget, In } from 'typeorm'
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

type StoreBindContext = Pick<AnyWASocket, 'ev' | 'groupMetadata'>

const DEFAULT_CHUNK_SIZE = 350

const makeTextsBaileysStore = (
  publishEvent: (event: ServerEvent) => void,
  mappingCtx: MappingContextWithDB,
) => {
  registerDBSubscribers(publishEvent, mappingCtx)

  let lastSyncMsgRecv: Date | undefined
  const excludeEvent = false

  function bind({ ev, groupMetadata }: StoreBindContext) {
    // reset values
    lastSyncMsgRecv = undefined

    async function processEvents(
      events: Partial<BaileysEventMap<any>>,
      ctx: MappingContextWithDB,
    ) {
      if (events['creds.update']) {
        const { me } = events['creds.update']
        if (me) {
          await saveMeUser(me, ctx)
        }
      }

      if (events['connection.update']) {
        const { legacy } = events['connection.update']
        if (legacy?.user) {
          await saveMeUser(legacy.user, ctx)
        }
      }

      if (events['chats.set']) {
        await handleChatsSync(events['chats.set'], ctx)
        lastSyncMsgRecv = new Date()
      }

      if (events['contacts.set']) {
        await handleContactsSync(events['contacts.set'], ctx)
        lastSyncMsgRecv = new Date()
      }

      if (events['messages.set']) {
        await handleMessagesSync(events['messages.set'], ctx)
        lastSyncMsgRecv = new Date()
      }

      if (events['chats.upsert'] || events['chats.update']) {
        const updated = [
          ...(events['chats.upsert'] || []),
          ...(events['chats.update'] || []),
        ]

        await handleChatsUpsert(updated, excludeEvent, groupMetadata, ctx)
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

      if (events['messages.upsert']) {
        await handleMessagesUpsert(events['messages.upsert'], excludeEvent, ctx)
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
        await handleGroupsUpdate(events['groups.update'], excludeEvent, groupMetadata, ctx)
      }
    }

    if ('process' in ev) {
      ev.process(events => (
        ev.processInBuffer(
          mappingCtx.db.transaction(
            async db => {
              await processEvents(
                events,
                {
                  db,
                  meID: mappingCtx.meID,
                  logger: mappingCtx.logger,
                  accountID: mappingCtx.accountID,
                },
              )
            },
          )
            .catch(
              err => mappingCtx.logger.error(
                { trace: err.stack, events },
                'error in processing events',
              ),
            ),
        )
      ))
    } else {
      // TODO
    }
  }

  return {
    syncState: () => ({ lastSyncMsgRecv }),
    bind,
  }
}

async function handleGroupsUpdate(
  updates: BaileysEventMap<any>['groups.update'],
  excludeEvent: boolean,
  groupMetadata: AnyWASocket['groupMetadata'],
  ctx: MappingContextWithDB,
) {
  return handleItemsUpsert(DBThread, updates, excludeEvent, mapGroup, ctx)

  async function mapGroup(metadata: Partial<GroupMetadata>, dbChat: DBThread | undefined) {
    if (dbChat && isJidGroup(dbChat.id)) {
      if (!dbChat.original.metadata) {
        dbChat.original.metadata = await groupMetadata(dbChat.id, true)
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
  { messages, type }: BaileysEventMap<any>['messages.upsert'],
  excludeEvent: boolean,
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx

  logger.info({ messages: messages.map(m => m.key) }, 'messages recv')

  let key = (await dbGetLatestMsgOrderKey(db)) || 0

  const threadRepo = db.getRepository(DBThread)

  const existingMessageMap: { [id: string]: DBMessage } = { }
  const missingThreadMap: { [id: string]: { timestamp: number } } = { }

  const msgs = await fetchMessagesInDB(db, messages)
  for (const msg of msgs) {
    existingMessageMap[`${msg.threadID},${msg.id}`] = msg
  }

  const mapped: DBMessage[] = []
  for (const msg of messages) {
    if (!shouldExcludeMessage(msg)) {
      const uqId = `${msg.key.remoteJid},${mapMessageID(msg.key)}`

      const mappedMsg = existingMessageMap[uqId] || new DBMessage()
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
        mappedMsg.original = { message: msg }
      }

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

      if (type !== 'notify') {
        mappedMsg.behavior = MessageBehavior.KEEP_READ
      }

      if (excludeEvent) {
        mappedMsg.shouldFireEvent = false
      }

      mapped.push(mappedMsg)
    }
  }

  await db.getRepository(DBMessage).save(mapped, { chunk: 500 })

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
  item: BaileysEventMap<any>['messages.delete'],
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
  { chats, isLatest }: BaileysEventMap<any>['chats.set'],
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx
  logger.info({ length: chats.length }, 'syncing chats')

  if (isLatest) {
    // remove everything as we've got a new latest set of chats
    const chatDeleteResult = await db.getRepository(DBThread).delete({})
    const participantDeleteResult = await db.getRepository(DBParticipant).delete({})
    logger.info(
      { chats: chatDeleteResult.affected, participants: participantDeleteResult.affected },
      'cleared existing chats',
    )
  }

  const totalParticipantList: DBParticipant[] = []
  const addedParticipants = new Set<string>()

  const items = chats.map(chat => {
    const mapped = new DBThread()
    mapped.original = { chat, metadata: undefined }
    mapped.shouldFireEvent = false
    mapped.mapFromOriginal(ctx)

    for (const item of mapped.participantsList!) {
      const id = `${item.threadID},${item.id}`
      if (!addedParticipants.has(id)) {
        // when a participant is inserted alongside a thread,
        // no need to fire the event for it
        item.shouldFireEvent = false
        totalParticipantList.push(item)
        addedParticipants.add(id)
      } else {
        logger.info({ threadID: chat.id, id }, 'duplicate participant')
      }
    }

    return mapped
  })

  await Promise.all([
    chunkedWrite(db.getRepository(DBThread), items, DEFAULT_CHUNK_SIZE),
    chunkedWrite(db.getRepository(DBParticipant), totalParticipantList, DEFAULT_CHUNK_SIZE),
  ])

  return {
    chats,
    participants: totalParticipantList,
  }
}

async function updateMessages<T extends { key: WAMessageKey }>(
  updates: T[],
  excludeEvent: boolean,
  applyUpdate: (msg: DBMessage, update: T) => void,
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx
  // create a map for which thread ID has number of read messages
  const readMsgsUpdateMap: { [threadId: string]: number } = {}
  // map for messageId => update for easy access
  const map: { [id: string]: T } = {}
  for (const update of updates) {
    const msgId = mapMessageID(update.key)
    const id = `${update.key.remoteJid!},${msgId}`
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
  await repo.save(dbItems as any[], { chunk: 50 })
  logger.info({ updates }, `updating ${dbItems.length}/${updates.length} messages`)
  // after messages are saved, if there are any updates to thread read counters
  // execute those updates
  const threadIds = Object.keys(readMsgsUpdateMap)
  if (threadIds.length) {
    const chats = await chatRepo.find({ id: In(threadIds) })
    for (const chat of chats) {
      // if the chat had unread messages
      if (chat.unreadCount > 0) {
        chat.update({ unreadCount: 0 }, ctx)
        logger.info({ id: chat.id }, 'marked chat unread')
      }
    }
    await chatRepo.save(chats, { chunk: 50 })
  }
}

async function handleContactsSync(
  { contacts, isLatest }: BaileysEventMap<any>['contacts.set'],
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx

  logger.info({ length: contacts.length, isLatest }, 'syncing contacts')

  if (isLatest) {
    // remove everything as we've got a new latest set of contacts
    const contactDeleteResult = await db.getRepository(DBUser).delete({})
    logger.info({ contacts: contactDeleteResult.affected }, 'cleared existing contacts')
  }

  const items: DBUser[] = []
  // only save individual contacts
  for (const item of contacts) {
    if (isJidUser(item.id)) {
      const mapped = DBUser.fromOriginal(item, ctx)
      mapped.shouldFireEvent = false
      items.push(mapped)
    }
  }

  await chunkedWrite(db.getRepository(DBUser), items, DEFAULT_CHUNK_SIZE)

  logger.info({ length: items.length }, 'synced contacts')
}

async function handleMessagesSync(
  { messages, isLatest }: BaileysEventMap<any>['messages.set'],
  ctx: MappingContextWithDB,
) {
  const { db, logger } = ctx
  logger.info({ length: messages.length, isLatest }, 'got messages history')

  let key = 0
  if (isLatest) {
    // remove everything
    const messageDeleteResult = await db.getRepository(DBMessage).delete({})
    logger.info({ messages: messageDeleteResult.affected }, 'cleared existing messages')
  } else {
    key = await dbGetEarliestMsgOrderKey(db) || 0
  }

  const dbMessages = messages.map(m => {
    const mappedMsg = new DBMessage()
    mappedMsg.original = { message: m }
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
      qb => {
        for (const { key } of keys) {
          const msgId = mapMessageID(key)
          qb = qb.orWhere(`(thread_id='${key.remoteJid!}' AND id='${msgId}')`)
        }
        return qb
      },
    ))
  const dbItems = await qb.getMany()
  return dbItems
}

async function handleGroupParticipantsUpdate(
  { participants, action, id: threadID }: BaileysEventMap<any>['group-participants.update'],
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
  ids: BaileysEventMap<any>['chats.delete'],
  excludeEvent: boolean,
  { db, logger }: MappingContextWithDB,
) {
  const repo = db.getRepository(DBThread)
  const chats = await repo.find({ id: In(ids) })
  if (excludeEvent) {
    for (const chat of chats) {
      chat.shouldFireEvent = false
    }
  }

  await repo.remove(chats, { chunk: 500 })

  logger.info({ ids }, 'deleted chats')
}

function handleChatsUpsert(
  chats: Partial<Chat>[],
  excludeEvent: boolean,
  groupMetadata: AnyWASocket['groupMetadata'],
  ctx: MappingContextWithDB,
) {
  return handleItemsUpsert(DBThread, chats, excludeEvent, mapChat, ctx)

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

    // upsert if conversationTimestamp has been incremented
    // or regular update if DB chat exists
    if (
      chat.conversationTimestamp
      || dbChat
    ) {
      if (!dbChat) {
        dbChat = new DBThread()

        const metadata = isJidGroup(chat.id!)
          ? await groupMetadata(chat.id!, true).catch(() => undefined)
          : undefined

        dbChat.original = { chat, metadata }
      }

      Object.assign(dbChat.original.chat, chat)
      dbChat.mapFromOriginal(ctx)

      return dbChat
    }
  }
}

function handleContactsUpsert(
  contacts: Partial<Contact>[],
  excludeEvent: boolean,
  ctx: MappingContextWithDB,
) {
  return handleItemsUpsert(DBUser, contacts, excludeEvent, mapContact, ctx)

  function mapContact(contact: Partial<Contact>, dbItem: DBUser | undefined) {
    if (dbItem) {
      if (
        contact.name !== dbItem.fullName
        || !dbItem.fullName
      ) {
        dbItem.fullName = contact.name
        return dbItem
      }
    } else if (contact.name || contact.verifiedName || contact.notify) {
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
  const repo = db.getRepository(entity)
  const dbItemsArr = await repo.find({ id: In(items.map(m => m.id!)) })

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
