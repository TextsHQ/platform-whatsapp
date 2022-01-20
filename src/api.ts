import path from 'path'
import { promises as fs } from 'fs'
import makeSocket, { AnyMediaMessageContent, AnyRegularMessageContent, BaileysEventEmitter, Browsers, ChatModification, ConnectionState, delay, DisconnectReason, generateMessageID, MiscMessageGenerationOptions, SocketConfig, UNAUTHORIZED_CODES, WAMessage, WAProto, Chat as WAChat, unixTimestampSeconds, jidNormalizedUser, isJidBroadcast, isJidGroup, initAuthCreds, jidDecode, AnyWASocket, makeWALegacySocket, getAuthenticationCredsType, newLegacyAuthCreds, BufferJSON, GroupMetadata } from '@adiwajshing/baileys'
import { texts, PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, OnConnStateChangeCallback, ReAuthError, CurrentUser, MessageContent, ConnectionError, PaginationArg, AccountInfo, ActivityType, Thread, Paginated, User, PhoneNumber, ServerEvent, ConnectionStatus } from '@textshq/platform-sdk'
import P from 'pino'
import type { Connection } from 'typeorm'
import getConnection from './utils/get-connection'
import DBUser from './entities/DBUser'
import { canReconnect, CONNECTION_STATE_MAP, decodeSerializedSession, makeMutex, mapMessageID, numberFromJid, PARTICIPANT_ACTION_MAP, PRESENCE_MAP, profilePictureUrl, unmapMessageID } from './utils/generics'
import DBMessage from './entities/DBMessage'
import { CHAT_MUTE_DURATION_S } from './constants'
import DBThread from './entities/DBThread'
import { makeDBKeyStore } from './utils/db-key-store'
import DBParticipant from './entities/DBParticipant'
import makeDebouncedStream from './utils/make-debounced-stream'
import makeTextsBaileysStore from './utils/make-texts-baileys-store'
import type { AnyAuthenticationCreds } from './types'
import fetchMessages from './utils/fetch-messages'
import getLastMessagesOfThread from './utils/get-last-messages-of-thread'
import readChat from './utils/read-chat'
import fetchThreads from './utils/fetch-threads'
import downloadMessage from './utils/download-message'

type Transaction = ReturnType<typeof texts.Sentry.startTransaction>

type LoginCallback = (data: { qr: string | undefined, isOpen: boolean, error?: string }) => void

const MAX_PHONE_RESPONSE_TIME_MS = 35_000

const config: Partial<SocketConfig> = {
  logger: P().child({ class: 'texts-baileys' }),
  browser: Browsers.appropriate('Chrome'),
  connectTimeoutMs: 120_000,
}

config.logger!.level = texts.IS_DEV ? 'debug' : 'silent'

export default class WhatsAppAPI implements PlatformAPI {
  private client?: AnyWASocket

  private evCallback: OnServerEventCallback = () => {}

  private connCallback: OnConnStateChangeCallback = () => {}

  private loginCallback?: LoginCallback

  private readonly mutex = makeMutex()

  private connectionLifetimeTransaction: Transaction | undefined = undefined

  private connectionTransaction: Transaction | undefined = undefined

  private connState: ConnectionState = { connection: 'close' }

  private canServeThreads = false

  private canServeMessages = false

  private isNewLogin: boolean | undefined = undefined

  private profilePictureUrlCache: { [id: string]: Promise<string> } = {}

  private dataStore: ReturnType<typeof makeTextsBaileysStore>

  private session?: AnyAuthenticationCreds

  private dataDirPath: string

  accountID: string

  db: Connection

  get meID(): string | undefined {
    if (this.client) {
      if (this.client.type === 'md') {
        const id = this.client.authState.creds.me?.id
        return id ? jidNormalizedUser(id) : undefined
      } return this.client.state?.legacy?.user?.id
    }
  }

  get connectionType() {
    if (this.client) return this.client.type
    if (this.session) return getAuthenticationCredsType(this.session)
  }

  init = async (session: string | undefined, { accountID, dataDirPath }: AccountInfo) => {
    this.dataDirPath = dataDirPath
    this.session = session ? decodeSerializedSession(session) : undefined
    this.accountID = accountID

    const dbPath = path.join(dataDirPath, 'db.sqlite')
    texts.log(`init with DB path: ${dbPath}`)

    this.db = await getConnection(accountID, dbPath)
    this.dataStore = makeTextsBaileysStore(
      this.db,
      config.logger!.child({ stream: 'store' }),
      this,
      this.publishEvent,
    )

    const connectPromise = this.connect()
    if (session) await connectPromise
  }

  dispose = async () => {
    if (this.client) {
      await this.db.close()
      this.client.ev.removeAllListeners('connection.update')
      this.client.end(undefined as any)
    }
  }

  login = async (): Promise<LoginResult> => ({ type: 'success' })

  logout = async () => {
    await this.client?.logout()
    await fs.rm(this.dataDirPath, { recursive: true })
  }

  onLoginEvent = (callback: LoginCallback) => {
    this.loginCallback = callback
  }

  private connect = async () => {
    await this.connectInternal()

    try {
      const start = Date.now()
      while ((Date.now() - start) < config.connectTimeoutMs!) {
        await delay(250)
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
      if (UNAUTHORIZED_CODES.includes(statusCode)) throw new ReAuthError(error.message)
      // ensure cleanup
      // @ts-expect-error
      this.client!.end(undefined)
      throw error
    }

    texts.log('connected successfully')
  }

  private connectInternal = async (delayMs?: number) => {
    if (this.client) {
      throw new Error('connection already exists!')
    }
    if (this.connState.connection !== 'close') {
      throw new Error('already connecting')
    }

    delayMs && await delay(delayMs)
    // set on app start only
    if (typeof this.isNewLogin === 'undefined') {
      this.isNewLogin = !this.session
      texts.log('connecting, new login: ' + this.isNewLogin)
    }

    if (this.connectionType === 'md') {
      this.client = makeSocket({
        ...config,
        auth: {
          creds: (this.session as any) || initAuthCreds(),
          keys: makeDBKeyStore(this.db),
        },
        getMessage: async key => {
          const msg = await this.loadWAMessageFromDB(key)
          return msg?.message || undefined
        },
      })
    } else {
      this.client = makeWALegacySocket({
        ...config,
        auth: this.session as any,
        phoneResponseTimeMs: MAX_PHONE_RESPONSE_TIME_MS,
      })
    }

    this.registerCallbacks(this.client!.ev)
  }

  getCurrentUser = async (): Promise<CurrentUser> => {
    let user: User | undefined = await this.db.getRepository(DBUser).findOne({ where: { isSelf: true } })
    if (!user) {
      const id = this.meID
      if (!id) {
        throw new Error('user is not available')
      }
      user = {
        id,
        imgURL: profilePictureUrl(this.accountID, id),
        phoneNumber: numberFromJid(id),
      }
    }
    return {
      ...user,
      displayText: user.phoneNumber!,
    }
  }

  serializeSession = () => {
    let auth: AnyAuthenticationCreds | undefined
    if (this.client?.type === 'md') {
      auth = this.client.authState.creds
    } else {
      auth = this.client?.authInfo
    }

    if (auth) {
      return JSON.stringify(auth, BufferJSON.replacer)
    }
  }

  subscribeToEvents = (onEvent: OnServerEventCallback) => {
    this.evCallback = onEvent
  }

  onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => {
    this.connCallback = onEvent
  }

  private loadWAMessageFromDB = async (key: WAProto.IMessageKey) => {
    const jid = jidNormalizedUser(key.remoteJid!)
    const id = mapMessageID(key)

    const repo = await this.db.getRepository(DBMessage)
    const dbmsg = await repo.findOneOrFail({ id, threadID: jid })

    return dbmsg.original.message
  }

  private publishEvent = makeDebouncedStream(
    250,
    (events: ServerEvent[]) => {
      texts.log(`pushing ${events.length} events`)
      this.evCallback(events)
    },
  )

  private registerCallbacks = async (ev: BaileysEventEmitter) => {
    this.dataStore.bind(ev, this.client!)

    ev.on('connection.update', update => {
      Object.assign(this.connState, update)

      texts.log('connection update:', update)
      const { connection, lastDisconnect, qr, receivedPendingNotifications } = update

      if (qr) {
        this.loginCallback && this.loginCallback({ qr, isOpen: false })
      }

      if (receivedPendingNotifications && !this.isNewLogin) {
        this.canServeMessages = true
        this.canServeThreads = true
      }

      if (connection) {
        // transactions
        switch (connection) {
          case 'open':
            this.connectionLifetimeTransaction = texts.Sentry.startTransaction?.({
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
            this.connectionTransaction = texts.Sentry.startTransaction?.({
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
          // magic of switching between multi-device
          if (statusCode === DisconnectReason.multideviceMismatch) {
            const newType = this.connectionType === 'md' ? 'legacy' : 'md'
            if (newType === 'md') this.session = initAuthCreds()
            else if (newType === 'legacy') this.session = newLegacyAuthCreds()

            texts.log(`multi-device mismatch (switching to "${newType}")`)
          }
          texts.log('disconnected, reconnecting: ', isReconnecting)
          // auto reconnect logic
          if (isReconnecting) {
            update.connection = 'connecting'
            this.client = undefined
            this.connectInternal(2000)
          } else if (statusCode === DisconnectReason.loggedOut || statusCode === 403) {
            makeDBKeyStore(this.db).clear()
            this.connCallback({ status: ConnectionStatus.UNAUTHORIZED })
            this.isNewLogin = true
            return
          }
        }

        this.connCallback({ status: CONNECTION_STATE_MAP[connection] })
      }
    })

    ev.on('chats.set', () => {
      this.canServeThreads = true
    })

    ev.on('messages.set', () => {
      this.canServeMessages = true
    })
  }

  searchUsers = async (typed: string) => {
    const users = await this.db.getRepository(DBUser)
      .createQueryBuilder()
      .where('full_name LIKE :typed', { typed: `%${typed}%` })
      .orderBy('full_name')
      .addOrderBy('id')
      .useTransaction(false)
      .getMany()
    return users
  }

  createThread = async (userIDs: string[], name: string) => {
    let chat: WAChat
    let metadata: GroupMetadata | undefined
    if (userIDs.length > 1) {
      metadata = await this.client!.groupCreate(name, userIDs)
      chat = {
        id: metadata.id,
        conversationTimestamp: unixTimestampSeconds(),
        unreadCount: 0,
      }
    } else if (userIDs.length === 1) {
      const id = jidNormalizedUser(userIDs[0])
      chat = {
        name,
        id,
        conversationTimestamp: unixTimestampSeconds(),
        unreadCount: 0,
      }
    } else throw new Error('no users provided')

    const thread = new DBThread()
    thread.original = { chat, metadata }
    thread.shouldFireEvent = false
    thread.mapFromOriginal(this)
    DBThread.prepareForSending(thread, this.accountID)

    if (thread.type === 'group') {
      await this.db.getRepository(DBThread).save(thread)
      await this.db.getRepository(DBParticipant).save(thread.participantsList!)
    }

    return thread
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

    while (!this.canServeThreads) {
      await delay(50)
    }

    const result = await fetchThreads(this.db, this.client!, this, pagination)
    return result
  }

  getMessages = async (threadID: string, pagination?: PaginationArg) => {
    while (!this.canServeMessages) {
      await delay(50)
    }

    const result = await fetchMessages(this.db, this.client!, this, threadID, pagination)
    return result
  }

  getUser = async ({ phoneNumber }: { phoneNumber: PhoneNumber }) => {
    if (phoneNumber) {
      const jid = phoneNumber.replace(/[^0-9]/g, '') + '@c.us'
      const result = await this.client!.onWhatsApp(jid)

      let fetchedJid: string | undefined
      // MD returns a list of jids as it supports fetching multiple contacts at once
      if (Array.isArray(result)) {
        const [item] = result
        if (item?.exists) {
          fetchedJid = item.jid
        }
      } else if (result && result.exists) {
        fetchedJid = result.jid
      }

      if (fetchedJid) {
        return {
          id: fetchedJid,
          phoneNumber: numberFromJid(fetchedJid),
        }
      }
    }
  }

  ephemeralOptions = async (threadID: string): Promise<Partial<MiscMessageGenerationOptions>> => {
    const item = await this.db.getRepository(DBThread).findOne({ id: threadID })
    return { ephemeralExpiration: item?.messageExpirySeconds }
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

      if (msgContent.mentionedUserIDs) {
        for (const mention of msgContent.mentionedUserIDs) {
          const { user } = jidDecode(mention)
          // @+14151231234 => @14151231234
          text = text!.replace('@+' + user, '@' + user)
        }
      }

      const buffer = msgContent.fileBuffer || (msgContent.filePath ? { url: msgContent.filePath! } : undefined)

      if (buffer) {
        let media: AnyMediaMessageContent
        if (mimeType?.endsWith('/webp')) media = { sticker: buffer, ...(msgContent.size || {}) }
        else if (mimeType?.includes('video/')) media = { video: buffer, caption: text, gifPlayback: msgContent.isGif, ...(msgContent.size || {}) }
        else if (mimeType?.includes('image/')) media = { image: buffer, caption: text, ...(msgContent.size || {}) }
        else if (mimeType?.includes('audio/')) media = { audio: buffer, ptt: mimeType === 'audio/ogg', seconds: msgContent.audioDurationSeconds }
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
          quotedMsg = msg.original.message
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

      return messages.map(message => {
        const mappedMsg = new DBMessage()
        mappedMsg.original = { message, info: { reads: {}, deliveries: {} } }
        mappedMsg.mapFromOriginal(this)
        return mappedMsg
      })
    })
  )

  forwardMessage = async (threadID: string, messageID: string, threadIDs: string[]) => {
    const forwardMsg = await this.db.getRepository(DBMessage).findOneOrFail({
      id: messageID,
      threadID,
    })
    const forward = forwardMsg.original.message
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
    const key = { ...unmapMessageID(messageID), remoteJid: threadID }
    if (forEveryone) {
      await this.client!.sendMessage(threadID, { delete: key })
    } else {
      await this.client!.chatModify({ clear: { messages: [key] } }, threadID, { })
    }
  }

  markAsUnread = async (threadID: string) => {
    await this.modThread(threadID, true, 'isUnread')
  }

  sendReadReceipt = async (threadID: string, messageID?: string) => {
    if (this.connState.connection === 'open') {
      await readChat(this.db, this.client!, threadID, messageID)
    }
  }

  sendActivityIndicator = async (type: ActivityType, threadID: string) => {
    if (this.connState.connection === 'open') {
      await this.client!.sendPresenceUpdate(PRESENCE_MAP[type], threadID)
    }
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
      await this.modThread(threadID, updates.mutedUntil === 'forever', 'mutedUntil')
    }
    return true
  }

  changeThreadImage = async (threadID: string, imageBuffer: Buffer, mimeType: string) => {
    await this.client!.updateProfilePicture(threadID, imageBuffer)
  }

  archiveThread = (threadID: string, archived: boolean) =>
    this.modThread(threadID, archived, 'isArchived')

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
        if (typeof this.profilePictureUrlCache[jid] === 'undefined') {
          this.profilePictureUrlCache[jid] = this.client!.profilePictureUrl(jid).catch(() => '')
        }
        const url = await this.profilePictureUrlCache[jid]
        return url
      }
      case 'attachment': {
        const result = await downloadMessage(this.db, this.client!, jid, msgID)
        return result
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

  private async modThread(threadID: string, value: boolean, key: 'pin' | 'mutedUntil' | 'isArchived' | 'isUnread') {
    const chat = await this.getChat(threadID)
    if (!chat) throw new Error('modThread: thread not found')

    const getLastMessages = async () => {
      const msgs = await getLastMessagesOfThread(this.db, threadID)
      if (this.connectionType === 'legacy') {
        return msgs.slice(0, 1)
      }
      return msgs
    }

    if (!!chat[key] === value) {
      // already done, nothing to do
      texts.log(`ignoring patch as already done ${key}:${value} on ${threadID}`)
      return
    }

    let mod: ChatModification
    switch (key) {
      case 'isArchived':
        mod = { archive: value, lastMessages: await getLastMessages() }
        break
      case 'pin':
        mod = { pin: value }
      case 'mutedUntil':
        mod = { mute: value ? CHAT_MUTE_DURATION_S + Date.now() : null }
        break
      case 'isUnread':
        mod = { markRead: !value, lastMessages: await getLastMessages() }
        break
    }
    await this.client!.chatModify(mod, threadID, chat?.original.chat || { })
  }

  private getChat = (threadID: string) => {
    const repo = this.db.getRepository(DBThread)
    return repo.findOne({ id: threadID })
  }
}
