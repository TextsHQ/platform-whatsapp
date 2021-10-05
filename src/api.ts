import makeSocket, { AnyMediaMessageContent, AnyRegularMessageContent, AuthenticationCreds, BaileysEventEmitter, Browsers, ChatModification, ConnectionState, delay, DisconnectReason, downloadContentFromMessage, extractMessageContent, generateMessageID, initAuthState, MiscMessageGenerationOptions, SocketConfig, UNAUTHORIZED_CODES, WAMessage, areJidsSameUser, jidNormalizedUser, Contact, WAProto, WAMessageUpdate } from '@adiwajshing/baileys-md'
import { texts, PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, OnConnStateChangeCallback, ReAuthError, CurrentUser, MessageContent, ConnectionError, PaginationArg, AccountInfo, ActivityType, Thread, Paginated, User, PhoneNumber, ServerEvent, ServerEventType } from '@textshq/platform-sdk'
import P from 'pino'
import { writeFileSync, readFileSync } from 'fs'
import { Brackets, Connection, In } from 'typeorm'
import { isJidBroadcast, isJidGroup } from '@adiwajshing/baileys-md/lib/WABinary'
import getConnection from './utils/get-connection'
import DBUser from './entities/DBUser'
import { canReconnect, CONNECTION_STATE_MAP, makeMutex, mapMessageID, numberFromJid, PARTICIPANT_ACTION_MAP, PRESENCE_MAP, unmapMessageID, updateItems } from './utils/generics'
import DBMessage from './entities/DBMessage'
import { CHAT_MUTE_DURATION_S } from './constants'
import DBThread from './entities/DBThread'
import AccountCredentials from './entities/AccountCredentials'
import { makeDBKeyStore } from './utils/db-key-store'
import DBParticipant from './entities/DBParticipant'
import { DBEventsPublisher } from './utils/db-events-publisher'
import mapPresenceUpdate from './utils/map-presence-update'

type Transaction = ReturnType<typeof texts.Sentry.startTransaction>

const MESSAGE_PAGE_SIZE = 15
const THREAD_PAGE_SIZE = 15
const DELAY_CONN_STATUS_CHANGE = 20_000

const config: Partial<SocketConfig> = {
  logger: P().child({ class: 'texts-baileys', level: texts.IS_DEV ? 'debug' : 'silent' }),
  browser: Browsers.appropriate('Chrome'),
  connectTimeoutMs: 120_000,
}

export default class WhatsAppAPI implements PlatformAPI {
  private client?: ReturnType<typeof makeSocket> // TODO: make type

  private evCallback: OnServerEventCallback = () => {}

  private connCallback: OnConnStateChangeCallback = () => {}

  private loginCallback?: (data: { qr: string | undefined, isOpen: boolean }) => void

  private readonly mutex = makeMutex()

  private connectionLifetimeTransaction: Transaction | undefined = undefined

  private connectionTransaction: Transaction | undefined = undefined

  private connState: ConnectionState = { connection: 'close' }

  private pendingEvents: ServerEvent[] = []

  private eventPushInterval: NodeJS.Timeout

  accountID: string

  db: Connection

  get auth(): AuthenticationCreds | undefined { return this.client?.authState?.creds }

  init = async (session: { }, { accountID }: AccountInfo) => {
    const dbPath = `/Users/adhirajsingh/${accountID}-db.sqlite`
    texts.log(`init with DB path: ${dbPath}`)

    this.db = await getConnection(accountID, dbPath)
    this.registerDBEvents()
    this.eventPushInterval = setInterval(() => {
      if (this.pendingEvents.length) {
        texts.log(`pushing ${this.pendingEvents.length} events`)
        this.evCallback(this.pendingEvents)
        this.pendingEvents = []
      }
    }, 200)

    this.accountID = accountID

    const connectPromise = this.connect()
    if (session) await connectPromise
  }

  dispose = async () => {
    if (this.client) {
      await this.db.close()
      this.client.ev.removeAllListeners('connection.update')
      this.client.end(undefined as any)
      clearInterval(this.eventPushInterval)
    }
  }

  login = async (): Promise<LoginResult> => ({ type: 'success' })

  logout = async () => {
    await this.client?.logout()
  }

  onLoginEvent = callback => {
    this.loginCallback = callback
  }

  private connect = async () => {
    try {
      await this.connectInternal()

      const start = Date.now()
      while ((Date.now() - start) < config.connectTimeoutMs!) {
        await delay(500)
        const { connection, lastDisconnect } = this.connState
        if (connection === 'open') {
          break
        }
        if (connection === 'close' && !canReconnect(lastDisconnect?.error).isReconnecting) {
          break
        }
      }
      if (this.connState.connection === 'close') {
        throw this.connState.lastDisconnect?.error || new ConnectionError('failed to open')
      }
    } catch (error) {
      texts.log('connect failed:', error)
      const statusCode: number = error.output?.statusCode
      if (statusCode) {
        if (UNAUTHORIZED_CODES.includes(statusCode)) throw new ReAuthError(error.message)
      }
      // ensure cleanup
      // @ts-expect-error
      this.client!.end(undefined)
      throw error
    }

    texts.log('connected successfully')
  }

  private connectInternal = async (delayMs?: number) => {
    if (!!this.client && this.connState.connection !== 'close') {
      throw new Error('already connecting!')
    }

    delayMs && await delay(delayMs)
    const creds = await this.db.getRepository(AccountCredentials).findOne({
      accountID: this.accountID,
    })
    const auth = {
      creds: creds?.credentials || initAuthState().creds,
      keys: makeDBKeyStore(this.db),
    }
    this.client = makeSocket({
      ...config,
      auth,
    })
    this.registerCallbacks(this.client!.ev)

    /* const history = readFileSync('/Users/adhirajsingh/history.json', { encoding: 'utf-8' })
    const msgs = JSON.parse(history).messages.map(m => DBMessage.fromOriginal(m, this))
    console.log(msgs)
    await this.db.getRepository(DBMessage).save(msgs) */
  }

  getCurrentUser = async (): Promise<CurrentUser> => {
    let user = await this.db.getRepository(DBUser).findOne({ isSelf: true })
    if (!user) {
      const u = this.client!.authState!.creds!.me!
      if (!u) {
        throw new Error('user is not available')
      }
      user = DBUser.fromOriginal(u, this)
    }
    return {
      ...user,
      displayText: user.phoneNumber!,
    }
  }

  serializeSession = () => (
    { }
  )

  subscribeToEvents = (onEvent: OnServerEventCallback) => {
    this.evCallback = onEvent
  }

  onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => {
    this.connCallback = onEvent
  }

  private registerDBEvents = () => {
    this.db.subscribers.push(
      new DBEventsPublisher(DBThread, {
        publish: (event, item) => {
          switch (event) {
            case 'delete':
              const { id } = item as DBThread
              this.publishEvent({
                type: ServerEventType.STATE_SYNC,
                objectName: 'thread',
                objectIDs: { threadID: id },
                mutationType: 'delete',
                entries: [id],
              })
              break
            case 'insert':
              const dbItem = item as DBThread
              this.publishEvent({
                type: ServerEventType.STATE_SYNC,
                objectName: 'thread',
                objectIDs: { threadID: dbItem.id },
                mutationType: 'upsert',
                entries: [dbItem],
              })
              break
            case 'update':
              const { key, update } = item as any
              this.publishEvent({
                type: ServerEventType.STATE_SYNC,
                objectName: 'thread',
                objectIDs: { threadID: key.threadID, messageID: key.id },
                mutationType: 'update',
                entries: [{ ...update, ...key }],
              })
              break
          }
        },
      }),
    )

    this.db.subscribers.push(
      new DBEventsPublisher(DBMessage, {
        publish: (event, item) => {
          switch (event) {
            case 'delete':
              const id = (item as Partial<DBMessage>)
              this.publishEvent({
                type: ServerEventType.STATE_SYNC,
                objectName: 'message',
                objectIDs: { threadID: id.threadID },
                mutationType: 'delete',
                entries: [id.id!],
              })
              break
            case 'insert':
              const dbItem = item as DBMessage
              this.publishEvent({
                type: ServerEventType.STATE_SYNC,
                objectName: 'message',
                objectIDs: { threadID: dbItem.id },
                mutationType: 'upsert',
                entries: [dbItem],
              })
              break
            case 'update':
              const { key, update } = item as any
              this.publishEvent({
                type: ServerEventType.STATE_SYNC,
                objectName: 'message',
                objectIDs: { threadID: key.threadID, messageID: key.id },
                mutationType: 'update',
                entries: [{ ...key, ...update }],
              })
              break
          }
        },
      }),
    )
  }

  private publishEvent(...events: ServerEvent[]) {
    this.pendingEvents.push(...events)
  }

  private registerCallbacks = async (ev: BaileysEventEmitter) => {
    ev.on('auth-state.update', ({ creds }) => {
      const repo = this.db.getRepository(AccountCredentials)
      repo.save(
        repo.create({
          accountID: this.accountID,
          credentials: creds,
        }),
      )
      if (creds.me) {
        const meUser = DBUser.fromOriginal(creds.me!, this)
        meUser.isSelf = true
        meUser.imgURL = this.ppUrl(meUser.id)

        this.db.getRepository(DBUser).save(meUser)
      }
    })

    ev.on('connection.update', update => {
      Object.assign(this.connState, update)

      texts.log('connection update:', update)
      const { connection, lastDisconnect, qr } = update

      if (qr) {
        this.loginCallback && this.loginCallback({ qr, isOpen: false })
      }

      if (connection) {
        // transactions
        switch (connection) {
          case 'open':
            this.connectionLifetimeTransaction = texts.Sentry.startTransaction({
              name: 'Lifetime',
            })
            if (this.connectionTransaction) {
              texts.log('finished connect transaction')
              this.connectionTransaction!.data = { }
              this.connectionTransaction!.finish()
            }
            this.loginCallback && this.loginCallback({ qr: undefined, isOpen: true })
            break
          case 'connecting':
            texts.log('connect transaction started')
            this.connectionTransaction = texts.Sentry.startTransaction({
              name: 'Connect',
            })
            break
          case 'close':
            if (this.connectionLifetimeTransaction) {
              this.connectionLifetimeTransaction!.data = {
                reason: lastDisconnect,
              }
              this.connectionLifetimeTransaction!.finish()
            }
            this.loginCallback && this.loginCallback({ qr: undefined, isOpen: false })
            break
        }

        if (connection === 'close') {
          const { isReconnecting, statusCode } = canReconnect(lastDisconnect?.error)
          texts.log('disconnected, reconnecting: ', isReconnecting)
          // auto reconnect logic
          if (isReconnecting) {
            update.connection = 'connecting'
            this.connectInternal(2000)
          } else if (statusCode === DisconnectReason.loggedOut) {
            makeDBKeyStore(this.db).clear()
            this.db.getRepository(AccountCredentials).delete({ accountID: this.accountID })
          }
        }

        this.connCallback({ status: CONNECTION_STATE_MAP[connection] })
      }
    })

    ev.on('chats.set', async ({ messages, chats }) => {
      texts.log('got history')

      const metadatas = await this.client!.groupFetchAllParticipating()
      const items = chats.map(chat => DBThread.fromOriginal({ chat, metadata: metadatas[chat.id] }, this))
      await this.db.getRepository(DBThread).save(items, { chunk: 500 })
      await this.db.getRepository(DBParticipant).save(items.flatMap(item => item.participantsList || []), { chunk: 500 })

      texts.log('saved chats history')

      const dbMessages = messages.map(m => DBMessage.fromOriginal(m, this))
      await this.db.getRepository(DBMessage).save(dbMessages, { chunk: 500 })

      texts.log('saved message history')
    })

    ev.on('contacts.upsert', async contacts => {
      texts.log('got contact history')

      const items = contacts.map(item => DBUser.fromOriginal(item, this))
      await this.db.getRepository(DBUser).save(items, { chunk: 500 })
    })

    ev.on('chats.update', async updates => {
      const updated = await updateItems(updates, this.db.getRepository(DBThread))
      texts.log(`updating ${updated.length}/${updates.length} chats`)
    })

    ev.on('chats.delete', async ids => {
      const repo = this.db.getRepository(DBThread)
      const chats = await repo.find({ id: In(ids) })
      await repo.remove(chats, { chunk: 500 })
    })

    ev.on('contacts.update', async updates => {
      const updated = await updateItems(updates, this.db.getRepository(DBUser))
      texts.log(`updating ${updated.length}/${updates.length} contacts`)
    })

    ev.on('messages.upsert', async ({ messages }) => {
      const mapped: DBMessage[] = []
      for (const msg of messages) {
        if (msg.message?.protocolMessage?.type !== WAProto.ProtocolMessage.ProtocolMessageType.REVOKE) {
          mapped.push(DBMessage.fromOriginal(msg, this))
        }
      }
      await this.db.getRepository(DBMessage).save(mapped, { chunk: 500 })
    })

    ev.on('messages.update', async updates => {
      const repo = this.db.getRepository(DBMessage)

      const map: { [id: string]: WAMessageUpdate } = { }
      for (const update of updates) {
        const msgId = mapMessageID(update.key)
        const id = `${update.key.remoteJid!},${msgId}`
        map[id] = update
      }

      const qb = repo
        .createQueryBuilder()
        .where(new Brackets(
          qb => {
            for (const { key } of updates) {
              const msgId = mapMessageID(key)
              qb = qb.orWhere(`(thread_id='${key.remoteJid!}' AND id='${msgId}')`)
            }
            return qb
          },
        ))
      const dbItems = await qb.getMany()

      for (const item of dbItems) {
        const id = `${item.threadID},${item.id!}`
        item.update(map[id].update)
      }
      console.log(dbItems)

      await repo.save(dbItems as any[])
      texts.log(`updating ${dbItems.length}/${updates.length} messages`)
    })

    ev.on('messages.delete', item => {
      const repo = this.db.getRepository(DBMessage)
      if ('all' in item) {

      } else {

      }
    })

    ev.on('presence.update', ({ id, presences }) => {
      const events = mapPresenceUpdate(id, presences)
      this.publishEvent(...events)
    })
  }

  searchUsers = async (typed: string) => {
    const users = await this.db.getRepository(DBUser)
      .createQueryBuilder()
      .where('full_name LIKE :typed', { typed: `%${typed}%` })
      .orderBy('full_name')
      .addOrderBy('id')
      .getMany()
    return users
  }

  createThread = async (userIDs: string[], name: string) => {
    throw new Error('')
  }

  deleteThread = async (threadID: string) => {
    // thread deletes are local on WA multi-device
    const repo = this.db.getRepository(DBThread)
    const item = await repo.findOne({ id: threadID })
    if (item) {
      await this.db.getRepository(DBThread).remove(item)
    }
  }

  getThreads = async (inboxName: InboxName, pagination?: PaginationArg): Promise<Paginated<Thread>> => {
    if (inboxName !== InboxName.NORMAL) return { items: [], hasMore: false }

    if (!this.connState.receivedPendingNotifications) {
      await this.client!.waitForConnectionUpdate(u => !!u.receivedPendingNotifications)
    }

    const repo = this.db.getRepository(DBThread)
    const cursor = (() => {
      if (pagination?.cursor) {
        const [date, id] = pagination?.cursor.split(',')
        return [new Date(date), id] as const
      }
    })()
    let qb = await repo
      .createQueryBuilder('thread')
      .leftJoinAndSelect('thread.participantsList', 'participants')
      .leftJoinAndSelect('participants.user', 'user')
      .orderBy('timestamp', 'DESC')
      .limit(THREAD_PAGE_SIZE)
    if (cursor) {
      qb = qb.andWhere(`(thread.timestamp, thread.id) < ('${cursor[0].toJSON()}', '${cursor[1]}')`)
    }
    const items = await qb.getMany()

    if (items.length) {
      const messageRepo = this.db.getRepository(DBMessage)
      const messages = await messageRepo
        .createQueryBuilder()
        .where(
          `(thread_id, timestamp) IN (
            SELECT thread_id, MAX(timestamp) from db_message 
            WHERE thread_id IN (:...chats)
            GROUP BY thread_id  
          )`,
          { chats: items.map(c => c.id) },
        )
        .getMany()

      const messageMap = messages.reduce((dict, message) => {
        dict[message.threadID] = message
        return dict
      }, { } as { [_: string]: DBMessage })

      for (const chat of items) {
        const msg = messageMap[chat.id]
        if (msg) {
          chat.messages = {
            hasMore: true,
            items: [msg],
            oldestCursor: msg.cursor,
          }
        }
      }
    }

    const oldestCursor = items.length ? `${items[items.length - 1].timestamp.toJSON()},${items[items.length - 1].id}` : undefined

    for (const item of items) {
      delete item.participantsList
      // @ts-ignore
      delete item.unreadCount
      if (item.type === 'single' && !item.title) {
        const otherParticipant = item.participants.items.find(p => areJidsSameUser(p.id, item.id))
        item.title = otherParticipant?.fullName || numberFromJid(item.title) || item.title
      }
    }

    return {
      items,
      oldestCursor,
      hasMore: items.length >= THREAD_PAGE_SIZE,
    }
  }

  getMessages = async (threadID: string, pagination: PaginationArg) => {
    const repo = this.db.getRepository(DBMessage)
    const cursor = (() => {
      if (pagination?.cursor) {
        const [date, id] = pagination.cursor.split(',')
        return [new Date(+date), id] as const
      }
    })()

    let qb = await repo
      .createQueryBuilder()
      .where('thread_id = :threadID', { threadID })
      .orderBy('timestamp', 'DESC')
      .addOrderBy('id', 'DESC')
      .limit(MESSAGE_PAGE_SIZE)
    if (cursor) {
      qb = qb.andWhere(`(timestamp, id) < ('${cursor[0].toJSON()}', '${cursor[1]}')`)
    }
    const items = (await qb.getMany()).reverse()

    return {
      items,
      hasMore: items.length < MESSAGE_PAGE_SIZE,
      oldestCursor: items[items.length - 1]?.cursor,
    }
  }

  getUser = async ({ phoneNumber }: { phoneNumber: PhoneNumber }) => {
    if (phoneNumber) {
      const jid = phoneNumber.replace(/[^0-9]/g, '') + '@c.us'
      const [exists] = await this.client!.onWhatsApp(jid)
      if (exists?.exists) return { id: exists.jid, phoneNumber } as User
    }
  }

  ephemeralOptions = async (threadID: string): Promise<Partial<MiscMessageGenerationOptions>> => {
    const item = await this.db.getRepository(DBThread).findOne({
      id: threadID,
    })
    return {
      ephemeralExpiration: item?.messageExpirySeconds,
    }
  }

  sendMessage = (threadID: string, msgContent: MessageContent, options?: MessageSendOptions) => (
    this.mutex.mutex(async () => {
      if (this.connState.connection !== 'open') {
        await this.client!.waitForConnectionUpdate(u => u.connection === 'open', 30_000)
      }

      let content: AnyRegularMessageContent
      let { text, mimeType } = msgContent
      let sendAdditionalTextMessage = false

      const opts: MiscMessageGenerationOptions = await this.ephemeralOptions(threadID)

      msgContent.mentionedUserIDs?.forEach(userID => {
        const phoneNumber = numberFromJid(userID)
        // @+14151231234 => @14151231234
        text = text!.replace('@+' + phoneNumber, '@' + phoneNumber)
      })
      const buffer = msgContent.fileBuffer || (msgContent.filePath ? { url: msgContent.filePath! } : undefined)

      if (buffer) {
        let media: AnyMediaMessageContent
        if (mimeType?.endsWith('/webp')) media = { sticker: buffer, ...(msgContent.size || {}) }
        else if (mimeType?.includes('video/')) media = { video: buffer, caption: text, gifPlayback: msgContent.isGif, ...(msgContent.size || {}) }
        else if (mimeType?.includes('image/')) media = { image: buffer, caption: text, ...(msgContent.size || {}) }
        else if (mimeType?.includes('audio/')) media = { audio: buffer, pttAudio: mimeType === 'audio/ogg', seconds: msgContent.audioDurationSeconds }
        else media = { document: buffer, fileName: msgContent.fileName, mimetype: '' }

        if (mimeType?.endsWith('/ogg')) {
          mimeType = 'audio/ogg; codecs=opus'
        }

        media.mimetype = mimeType || 'application/octet-stream'
        content = media
        if (!!text && !('caption' in media)) {
          sendAdditionalTextMessage = true
        }
      } else {
        content = {
          text: text!,
          mentions: msgContent.mentionedUserIDs,
        }
      }
      const messages: WAMessage[] = []
      const firstMessageID = generateMessageID()

      let quotedMsg: WAMessage | undefined
      if (options?.quotedMessageID) {
        const msg = await this.db.getRepository(DBMessage).findOneOrFail({
          id: options!.quotedMessageID,
          threadID: options!.quotedMessageThreadID,
        })
        if (msg) {
          quotedMsg = JSON.parse(msg._original!)
        } else {
          throw new Error('could not find message to quote')
        }
      }

      messages.push(
        await this.client!.sendMessage(
          threadID,
          content,
          {
            messageId: firstMessageID,
            quoted: quotedMsg,
            ...opts,
          },
        ),
      )

      if (sendAdditionalTextMessage) {
        const secondMessageID = generateMessageID()
        messages.push(
          await this.client!.sendMessage(threadID, { text: text! }, {
            messageId: secondMessageID,
            ...opts,
          }),
        )
      }

      return messages.map(m => DBMessage.fromOriginal(m, this))
    })
  )

  forwardMessage = async (threadID: string, messageID: string, threadIDs: string[]) => {
    const forwardMsg = await this.db.getRepository(DBMessage).findOneOrFail({
      id: messageID,
      threadID,
    })
    const forward: WAMessage = JSON.parse(forwardMsg._original!)
    await Promise.all(
      threadIDs!.map(
        async tid => (
          this.client!.sendMessage(
            tid,
            { forward },
            { ...(await this.ephemeralOptions(threadID)) },
          )
        ),
      ),
    )
    return true
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone: boolean) => {
    const key = {
      ...unmapMessageID(messageID),
      remoteJid: threadID,
    }
    if (forEveryone) {
      await this.client!.sendMessage(threadID, { delete: key })
    } else {
      await this.client!.chatModify({ clear: { message: key } }, threadID, [])
    }
  }

  markAsUnread = async (threadID: string) => {
    await this.modThread(threadID, true, 'isUnread')
  }

  sendReadReceipt = async (threadID: string, messageID?: string) => {
    const repo = this.db.getRepository(DBThread)
    const item = await repo.findOne({
      id: threadID,
    })
    if (item) {
      if (item.unreadCount > 0) {
        let msgs = await this.db.getRepository(DBMessage)
          .find({
            where: {
              threadID,
              isSender: false,
            },
            order: { timestamp: 'DESC' },
            take: item.unreadCount,
            select: ['id', 'senderID'],
          })
        if (!msgs.length) {
          throw new Error('no messages to read. Resync required')
        }
        const msgIndex = messageID ? msgs.findIndex(m => m.id === messageID) : -1
        if (msgIndex >= 0) {
          msgs = msgs.slice(msgIndex)
        }
        const isGroup = isJidGroup(threadID)
        const participant = isGroup ? msgs[0].senderID : undefined

        await this.client!.sendReadReceipt(threadID, participant!, msgs.map(m => m.id.split('|')[0]))

        item.unreadCount = 0
        await repo.save(item)
      } else if (item.unreadCount < 0) {
        await this.modThread(threadID, false, 'isUnread')
      }
    }
  }

  sendActivityIndicator = async (type: ActivityType, threadID: string) => {
    if (this.connState.connection !== 'open') return
    await this.client!.sendPresenceUpdate(PRESENCE_MAP[type], threadID)
  }

  updateThread = async (threadID: string, updates: Partial<Thread>) => {
    if ('title' in updates) {
      if (!isJidGroup(threadID)) throw new Error('cannot change title of a individual chat')
      await this.client!.groupUpdateSubject(threadID, updates.title!)
    }
    if (typeof updates.messageExpirySeconds !== 'undefined') {
      await this.client!.sendMessage(
        threadID,
        { disappearingMessagesInChat: updates.messageExpirySeconds },
        { },
      )
    }
    if ('mutedUntil' in updates) {
      await this.modThread(threadID, updates.mutedUntil === 'forever', 'mute')
    }
    return true
  }

  changeThreadImage = async (threadID: string, imageBuffer: Buffer, mimeType: string) => {
    await this.client!.updateProfilePicture(threadID, imageBuffer)
  }

  archiveThread = (threadID: string, archived: boolean) =>
    this.modThread(threadID, archived, 'archive')

  addParticipant = async (threadID: string, participantID: string) => {
    if (!isJidGroup(threadID)) throw new Error('cannot add more participants to a single chat')
    await this.client!.groupParticipantsUpdate(threadID, [participantID], 'add')
    return true
  }

  removeParticipant = async (threadID: string, participantID: string) => {
    if (!isJidGroup(threadID)) throw new Error('cannot remove participants from a single chat')
    await this.client!.groupParticipantsUpdate(threadID, [participantID], 'remove')
    return true
  }

  changeParticipantRole = async (threadID: string, participantID: string, role: 'admin' | 'regular') => {
    await this.client!.groupParticipantsUpdate(threadID, [participantID], PARTICIPANT_ACTION_MAP[role])
    return true
  }

  getAsset = async (category: 'profile-picture' | 'attachment', jid: string, msgID: string) => {
    jid = decodeURIComponent(jid)
    msgID = msgID ? decodeURIComponent(msgID) : msgID
    switch (category) {
      case 'profile-picture': {
        const repo = this.db.getRepository(DBUser)
        const item = await repo.findOne({ id: jid })
        let url = item?.imgURL
        if (!url || url?.startsWith('asset://')) {
          url = await this.client!.profilePictureUrl(jid).catch(() => '')
          // update user
          await repo.update({ id: jid }, { imgURL: url })
        }
        return url
      }
      case 'attachment': {
        const m = await this.db.getRepository(DBMessage).findOne({
          id: msgID,
          threadID: jid,
        })
        const og: WAMessage = JSON.parse(m?._original!)
        const content = extractMessageContent(og.message)
        if (content) {
          const [key] = Object.keys(content!)
          const stream = await downloadContentFromMessage(content[key], key.replace('Message', '') as any)
          return stream
        }
      }
      default:
        throw new Error('Unexpected attachment: ' + category)
    }
  }

  onThreadSelected = async (threadID: string) => {
    if (!threadID) {
      return
    }
    const jid = threadID
    // await this.client.updatePresence(jid, Presence.available)
    // update presence when clicking through
    if (!isJidBroadcast(jid)) {
      await this.client!.presenceSubscribe(jid)
        .catch(err => console.error(`error in presence: ${err}`))
    }
  }

  private async modThread(threadID: string, value: boolean, key: 'pin' | 'mute' | 'archive' | 'isUnread') {
    const chat = await this.getChat(threadID)
    if (!chat) throw new Error('modThread: thread not found')

    if (!!chat[key] === value) return // already done, nothing to do
    let mod: ChatModification
    switch (key) {
      case 'archive':
        mod = { archive: value }
        break
      case 'pin':
        mod = { pin: value ? Date.now() : null }
        break
      case 'mute':
        mod = { mute: value ? CHAT_MUTE_DURATION_S : null }
        break
      case 'isUnread':
        mod = { markRead: !value }
        break
    }
    await this.client!.chatModify(mod, threadID, []) // todo
  }

  private ppUrl = (jid: string) => `asset://${this.accountID}/profile-picture/${jid}`

  private getChat = (threadID: string) => {
    const repo = this.db.getRepository(DBThread)
    return repo.findOne({ id: threadID })
  }
}
