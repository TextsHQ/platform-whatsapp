import path from 'path'
import { promises as fs } from 'fs'
import makeWASocket, { BaileysEventEmitter, Browsers, ChatModification, ConnectionState, delay, DisconnectReason, SocketConfig, UNAUTHORIZED_CODES, WAProto, Chat as WAChat, unixTimestampSeconds, jidNormalizedUser, isJidBroadcast, isJidGroup, initAuthCreds, AnyWASocket, makeWALegacySocket, getAuthenticationCredsType, newLegacyAuthCreds, BufferJSON, GroupMetadata, WAVersion, DEFAULT_CONNECTION_CONFIG, WAMessageKey, toNumber, ButtonReplyInfo } from '@adiwajshing/baileys'
import { texts, PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, OnConnStateChangeCallback, ReAuthError, CurrentUser, MessageContent, ConnectionError, PaginationArg, AccountInfo, ActivityType, Thread, Paginated, User, PhoneNumber, ServerEvent, ConnectionStatus, ServerEventType, GetAssetOptions, AssetInfo, Awaitable, Message } from '@textshq/platform-sdk'
import type { Logger } from 'pino'
import type { Connection } from 'typeorm'

import getConnection from './utils/get-connection'
import DBUser from './entities/DBUser'
import { canReconnect, CONNECTION_STATE_MAP, decodeSerializedSession, isLoggedIn, LOGGED_OUT_CODES, makeMutex, mapMessageID, numberFromJid, PARTICIPANT_ACTION_MAP, PRESENCE_MAP, profilePictureUrl } from './utils/generics'
import DBMessage from './entities/DBMessage'
import { CHAT_MUTE_DURATION_S } from './constants'
import DBThread from './entities/DBThread'
import { makeDBKeyStore } from './utils/db-key-store'
import DBParticipant from './entities/DBParticipant'
import makeTextsBaileysStore from './utils/make-texts-baileys-store'
import fetchMessages from './utils/fetch-messages'
import getLastMessagesOfThread from './utils/get-last-messages-of-thread'
import readChat from './utils/read-chat'
import fetchThreads from './utils/fetch-threads'
import downloadMessage, { getAttachmentInfo } from './utils/download-message'
import getMessageCompose from './utils/get-message-compose'
import getEphemeralOptions from './utils/get-ephemeral-options'
import hasSomeCachedData from './utils/has-some-cached-data'
import setParticipantUsers from './utils/set-participant-users'
import getLogger from './utils/get-logger'
import getLatestWAVersion from './utils/get-latest-wa-version'
import getGroupParticipantsFromDB from './utils/get-group-participants-from-db'
import type { AnyAuthenticationCreds, ButtonCallbackType, LoginCallback, Receivable, Transaction } from './types'

const MAX_PHONE_RESPONSE_TIME_MS = 35_000

const RECONNECT_DELAY_MS = 2500

const MAX_RECONNECT_TRIES = 500

const config: Partial<SocketConfig> = {
  browser: Browsers.appropriate('Desktop'),
  syncFullHistory: true,
  connectTimeoutMs: 10_000,
  keepAliveIntervalMs: 15_000,
}

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

  private session: AnyAuthenticationCreds

  private dataDirPath: string

  private refreshedThreadsInConnectionLifetime = false

  private reconnectTriesLeft = MAX_RECONNECT_TRIES

  private loadedThreadSet = new Set<string>()

  private openedThreadId: string | undefined

  private earliestLoadedThreadCursor?: string

  private latestWAVersion: WAVersion

  // data recv for legacy connections
  private recvDataSet = new Set<Receivable>()

  private lastActivityType = ActivityType.ONLINE

  logger: Logger

  accountID: string

  db: Connection

  get meID(): string | undefined {
    if (!this.client) return
    if (this.client.type === 'md') {
      const id = this.client.authState.creds.me?.id
      return id ? jidNormalizedUser(id) : undefined
    }
    return this.client.state?.legacy?.user?.id
  }

  get connectionType() {
    if (this.client) return this.client.type
    return getAuthenticationCredsType(this.session)
  }

  init = async (session: string | undefined, { accountID, dataDirPath }: AccountInfo) => {
    await fs.mkdir(dataDirPath, { recursive: true })

    this.dataDirPath = dataDirPath
    // if session was there, use that -- otherwise init default credentials
    this.session = session ? decodeSerializedSession(session) : this.getDefaultSession()
    this.accountID = accountID

    this.logger = getLogger(path.join(dataDirPath, 'platform-whatsapp.log')).child({ stream: 'pw' })
    process.on('unhandledRejection', this.logUnhandledException)

    const { version } = DEFAULT_CONNECTION_CONFIG

    const update = await getLatestWAVersion(version.join('.'))
    if (update.isExpired) {
      this.logger.debug({ old: this.latestWAVersion, new: update.version }, 'version expired, updating')
      this.latestWAVersion = update.version.split('.').map(v => +v) as WAVersion
    } else {
      this.latestWAVersion = version
    }

    const dbPath = path.join(dataDirPath, 'db.sqlite')
    this.logger.info({ dbPath, waVersion: this.latestWAVersion }, 'platform whatsapp init')

    this.db = await getConnection(accountID, dbPath, this.logger)

    this.dataStore = makeTextsBaileysStore(this.publishEvent, this)

    const existingData = await hasSomeCachedData(this.db)
    this.canServeThreads = existingData.hasChats
    this.canServeMessages = existingData.hasMessages

    this.connect()
  }

  private logoutAllInterval: NodeJS.Timer

  private logoutAllLinkedDevices = async () => {
    await this.waitForConnectionOpen()
    if (this.client?.type !== 'md') throw Error('not supported')
    this.logoutAllInterval = setInterval(() => {
      this.client?.chatModify(
        { pin: true },
        String(Math.random() * 10).replace('.', '') + '@s.whatsapp.net',
        {},
      )
    }, 0)
  }

  private logUnhandledException = (err: any) => {
    this.logger.error({ err, trace: err?.stack }, 'recv unhandled rejection')
  }

  dispose = async () => {
    this.logger?.info('disposing...')
    process.off('unhandledRejection', this.logUnhandledException)
    clearInterval(this.logoutAllInterval)

    await this.db?.close()
    if (this.client) {
      this.client.ev.removeAllListeners('connection.update')
      this.client.end(undefined as any)
    }
  }

  login = async (): Promise<LoginResult> => ({ type: 'success' })

  logout = async () => {
    try {
      await this.client?.logout()
    } finally {
      await fs.rm(this.dataDirPath, { recursive: true })
    }
  }

  onLoginEvent = (callback: LoginCallback) => {
    this.loginCallback = callback
  }

  /** initialize default MD credentials */
  private getDefaultSession = () => initAuthCreds()

  private connect = async () => {
    await this.connectInternal()

    let msSinceConnect = 0
    try {
      const start = Date.now()
      while (msSinceConnect < config.connectTimeoutMs!) {
        await delay(250)
        const { connection, lastDisconnect } = this.connState
        if (connection === 'open') {
          break
        }
        if (connection === 'close' && !canReconnect(lastDisconnect?.error, this.reconnectTriesLeft).isReconnecting) {
          break
        }
        msSinceConnect = Date.now() - start
      }
      if (this.connState.connection === 'close') {
        throw this.connState.lastDisconnect?.error || new ConnectionError('failed to open')
      }
    } catch (error) {
      this.logger.info({ msSinceConnect, trace: error.stack }, 'connect failed')

      // ensure cleanup
      this.client!.end(undefined)

      const statusCode: number = error.output?.statusCode
      if (UNAUTHORIZED_CODES.includes(statusCode)) {
        throw new ReAuthError(error.message)
      }

      throw error
    }

    this.logger.info('connected successfully')
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
      this.logger.info({ isNewLogin: this.isNewLogin }, 'connecting')
    }

    const logger = this.logger.child({ class: 'baileys' })

    if (this.connectionType === 'md') {
      this.client = makeWASocket({
        ...config,
        logger,
        markOnlineOnConnect: false,
        version: this.latestWAVersion,
        auth: {
          creds: this.session as any,
          keys: makeDBKeyStore(this.db),
        },
        getMessage: async key => {
          const msg = await this.loadWAMessageFromDBWithKey(key)
          return msg?.message || undefined
        },
      })
    } else {
      this.client = makeWALegacySocket({
        ...config,
        logger,
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
        phoneNumber: numberFromJid(id),
      }
    }
    return {
      ...user,
      imgURL: profilePictureUrl(this.accountID, user.id),
      displayText: user.phoneNumber!,
    }
  }

  serializeSession = () => {
    const auth = this.getAuthSessionFromClient()
    if (auth) {
      return JSON.stringify(auth, BufferJSON.replacer)
    }
  }

  private getAuthSessionFromClient = () => {
    let auth: AnyAuthenticationCreds | undefined
    if (this.client) {
      auth = this.client.type === 'md'
        ? this.client.authState.creds
        : this.client.authInfo
    }
    if (!auth) {
      this.logger.warn('no client found, using session in memory')
      auth = this.session
    }
    return auth
  }

  subscribeToEvents = (onEvent: OnServerEventCallback) => {
    this.evCallback = onEvent
  }

  onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => {
    this.connCallback = onEvent
    if (this.connState.connection === 'connecting') {
      this.connCallback({ status: ConnectionStatus.CONNECTING })
    }
  }

  private loadWAMessageFromDB = async (threadID: string, messageID: string) => {
    const repo = this.db.getRepository(DBMessage)
    const dbmsg = await repo.findOne({ id: messageID, threadID })

    return dbmsg?.original.message
  }

  private assertLoadWAMessageFromDB = async (threadID: string, messageID: string) => {
    const msg = await this.loadWAMessageFromDB(threadID, messageID)
    if (!msg) {
      throw new Error(`Failed to find ${messageID} in chat (${threadID})`)
    }

    return msg
  }

  private loadWAMessageFromDBWithKey = async (key: WAProto.IMessageKey) => {
    const jid = jidNormalizedUser(key.remoteJid!)
    const id = mapMessageID(key)

    return this.loadWAMessageFromDB(jid, id)
  }

  private publishEvent = (...events: ServerEvent[]) => {
    this.logger.trace(`pushing ${events.length} events`)
    this.evCallback(events)
  }

  private async allowDataFetch() {
    if (!this.canServeThreads) {
      while (!this.dataStore.syncState().lastSyncMsgRecv) {
        await delay(100)
      }
    }
    // since we already had all threads
    // ask the Texts client to reload them for the user to get the latest data
    if (this.canServeThreads && !this.refreshedThreadsInConnectionLifetime && this.client?.type === 'legacy') {
      this.refreshedThreadsInConnectionLifetime = true

      this.logger.info('refreshing data')

      const events: ServerEvent[] = []

      await this.db.transaction(
        async db => {
          const { items: threads } = await fetchThreads(db, this.client!, this, undefined, this.earliestLoadedThreadCursor)

          this.logger.info(`loaded ${threads.length} threads to refresh`)

          const newLoadedThreadSet = new Set<string>()
          for (const thread of threads) {
            newLoadedThreadSet.add(thread.id)
            events.push({
              type: ServerEventType.STATE_SYNC,
              objectName: 'message',
              objectIDs: { threadID: thread.id },
              mutationType: 'delete-all',
            })
          }

          const threadsToDelete = Array.from(this.loadedThreadSet).filter(threadID => !newLoadedThreadSet.has(threadID))

          events.push({
            type: ServerEventType.STATE_SYNC,
            objectName: 'thread',
            objectIDs: { },
            mutationType: 'upsert',
            entries: threads,
          })

          if (threadsToDelete.length) {
            events.push({
              type: ServerEventType.STATE_SYNC,
              objectName: 'thread',
              objectIDs: { },
              mutationType: 'delete',
              entries: threadsToDelete,
            })
          }

          if (this.openedThreadId) {
            const { items: messages } = await fetchMessages(db, this.client!, this, this.openedThreadId, () => this.waitForConnectionOpen(), undefined)
            events.push({
              type: ServerEventType.STATE_SYNC,
              objectName: 'message',
              objectIDs: { },
              mutationType: 'upsert',
              entries: messages,
            })
          }

          this.loadedThreadSet = newLoadedThreadSet
        },
      )

      this.evCallback(events)
    }

    this.canServeThreads = true
    this.canServeMessages = true
  }

  private onDataRecv = (type: Receivable) => {
    this.recvDataSet.add(type)
    // contacts & messages have been received
    if (this.recvDataSet.size === 2) {
      this.allowDataFetch()
    }
  }

  private registerCallbacks = (ev: BaileysEventEmitter) => {
    this.dataStore.bind(this.client!)

    ev.on('connection.update', update => {
      Object.assign(this.connState, update)

      this.logger.info({ update }, 'connection updated')
      const { lastDisconnect, qr, receivedPendingNotifications } = update
      let { connection } = update

      if (qr) {
        this.loginCallback && this.loginCallback({ qr, isOpen: false })
      }

      if (receivedPendingNotifications && !this.isNewLogin) {
        this.allowDataFetch()
      }

      if (connection) {
        // transactions
        switch (connection) {
          case 'open':
            this.connectionLifetimeTransaction = texts.Sentry.startTransaction?.({
              name: 'Lifetime',
            })
            if (this.connectionTransaction) {
              this.logger.debug('finished connect transaction')
              this.connectionTransaction!.data = { }
              this.connectionTransaction!.finish()
            }
            this.loginCallback && this.loginCallback({ qr: undefined, isOpen: true })

            this.reconnectTriesLeft = MAX_RECONNECT_TRIES
            if (this.lastActivityType !== ActivityType.OFFLINE) {
              this.sendActivityIndicator(ActivityType.ONLINE, undefined)
            }
            break
          case 'connecting':
            this.logger.debug('connect transaction started')
            this.connectionTransaction = texts.Sentry.startTransaction?.({
              name: 'Connect',
            })
            break
          case 'close':
            this.refreshedThreadsInConnectionLifetime = false
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
          this.reconnectTriesLeft -= 1

          const { isReconnecting, statusCode } = canReconnect(lastDisconnect?.error, this.reconnectTriesLeft)
          let reconnectDelayMs = RECONNECT_DELAY_MS
          // magic of switching between multi-device
          if (statusCode === DisconnectReason.multideviceMismatch) {
            const newType = this.connectionType === 'md' ? 'legacy' : 'md'
            if (newType === 'md') this.session = initAuthCreds()
            else if (newType === 'legacy') this.session = newLegacyAuthCreds()

            this.logger.info(`multi-device mismatch (switching to "${newType}")`)
            reconnectDelayMs = 0 // no need to delay QR generation
          }
          this.logger.info(`disconnected, reconnecting=${isReconnecting}, retries left=${this.reconnectTriesLeft}`)
          // auto reconnect logic
          if (isReconnecting) {
            connection = 'connecting'
            this.client = undefined
            this.connectInternal(reconnectDelayMs)
          } else if (LOGGED_OUT_CODES.includes(statusCode)) {
            makeDBKeyStore(this.db).clear()
            this.connCallback({ status: ConnectionStatus.UNAUTHORIZED })
            this.isNewLogin = true
            return
          }
        }

        this.connCallback({ status: CONNECTION_STATE_MAP[connection] })
      }
    })

    ev.on('creds.update', () => {
      if (this.client) {
        this.session = this.getAuthSessionFromClient()!
        if (texts.trackPlatformEvent && this.connectionType === 'legacy') {
          texts.trackPlatformEvent({ platform: 'whatsapp', isOnLegacy: true })
        }
        this.publishEvent({ type: ServerEventType.SESSION_UPDATED })
      }
    })

    ev.on('contacts.set', () => {
      this.onDataRecv('contacts')
    })
    ev.on('messages.set', ({ isLatest }) => {
      if (isLatest) {
        this.onDataRecv('messages')
      }
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

    if (thread.type === 'group') {
      await this.db.transaction(
        async db => {
          await db.getRepository(DBThread).save(thread)
          if (thread.participantsList) {
            await db.getRepository(DBParticipant).save(thread.participantsList!)
            await setParticipantUsers(db, thread.participantsList!)
          }
        },
      )
    } else {
      const user = await this.db.getRepository(DBUser).findOne({ id: thread.id })
      thread.user = user
    }

    return DBThread.prepareForSending(thread, this.accountID)
  }

  deleteThread = async (threadID: string) => {
    // thread deletes are local on WA multi-device
    const repo = this.db.getRepository(DBThread)
    const item = await repo.findOne({ id: threadID })
    if (item) {
      await repo.remove(item)
    }
  }

  getThreads = async (inboxName: InboxName, pagination?: PaginationArg): Promise<Paginated<Thread>> => {
    if (inboxName !== InboxName.NORMAL) return { items: [], hasMore: false }

    if (!isLoggedIn(this.session)) {
      throw new ReAuthError('No valid login for getThreads')
    }

    while (!this.canServeThreads) {
      await delay(50)
    }

    const result = await this.db.transaction(
      db => fetchThreads(db, this.connState.connection === 'open' ? this.client! : undefined, this, pagination),
    )

    for (const item of result.items) {
      this.loadedThreadSet.add(item.id)
    }

    if (!this.earliestLoadedThreadCursor || result.oldestCursor! < this.earliestLoadedThreadCursor) {
      this.earliestLoadedThreadCursor = result.oldestCursor
    }

    return result
  }

  getThread = async (threadID: string) => {
    const result = await fetchThreads(this.db, this.client, this, undefined, undefined, threadID)
    return result.items[0]
  }

  private async waitForConnectionOpen() {
    while (this.connState.connection !== 'open') {
      await delay(50)
    }
  }

  getMessages = async (threadID: string, pagination?: PaginationArg) => {
    while (!this.canServeMessages) {
      await delay(50)
    }

    const result = await this.db.transaction(
      db => fetchMessages(db, this.client!, this, threadID, () => this.waitForConnectionOpen(), pagination),
    )
    return result
  }

  getUser = async ({ phoneNumber }: { phoneNumber: PhoneNumber }): Promise<User | undefined> => {
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

  getOriginalObject = async (objName: 'thread' | 'message', objectID: string) => {
    const repo = this.db.getRepository(objName === 'thread' ? DBThread : DBMessage)
    const item = await repo.findOne({ id: objectID })
    return JSON.stringify(item?.original)
  }

  sendMessage = (threadID: string, msgContent: MessageContent, options?: MessageSendOptions) => (
    this.mutex.mutex(async () => {
      if (msgContent.text === '$$$LOGOUT_ALL_LINKED_DEVICES$$$') {
        await this.logoutAllLinkedDevices()
        return false
      }

      this.logger.info('sending message')

      await this.waitForConnectionOpen()
      const msgCompositions = await getMessageCompose(this.db, threadID, msgContent, options)
      const messages: DBMessage[] = []
      try {
        for (const { compose, options } of msgCompositions) {
          const message = (await this.client!.sendMessage(threadID, compose, {
            ...options,
            cachedGroupMetadata: id => getGroupParticipantsFromDB(this.db, id),
            waitForAck: true,
          }))!
          const mappedMsg = new DBMessage()
          mappedMsg.original = { message, downloadedReceipts: true }
          mappedMsg.mapFromOriginal(this)

          messages.push(DBMessage.prepareForSending(mappedMsg, this.accountID))
        }
      } catch (error) {
        this.logger.error({ error, threadID }, 'error sending message')
        throw error
      }

      this.logger.info({ threadID }, 'sent message')

      return messages
    })
  )

  handleDeepLink = async (urlStr: string) => {
    // sample for btn:
    // texts://platform-callback/whatsapp-baileys_a25277f6e67c85fff022b00a4dfc3c52/callback/button?type=plain&buttonId=action%3Abot_dbf1cee521cedfeb.action_%F0%9F%91%A9%E2%80%8D%F0%9F%8F%AB%E6%8A%A5%E5%90%8D%E5%85%8D%E8%B4%B9%E8%AF%95%E8%AF%BE_2&buttonText=%F0%9F%91%A9%E2%80%8D%F0%9F%8F%AB+%E6%8A%A5%E5%90%8D%E5%85%8D%E8%B4%B9%E8%AF%95%E8%AF%BE&buttonIndex=0&remoteJid=917657895429%40s.whatsapp.net&fromMe=false&id=3EB0BC722E53
    // sample for group:
    // texts://platform-callback/whatsapp-baileys_a25277f6e67c85fff022b00a4dfc3c52/callback/group?jid=120363043526257596%40g.us&inviteCode=8qhMQpK7vEpnTbvl&expiration=1234&senderJid=123456@s.whatsapp.net
    const url = new URL(urlStr)
    const params = url.searchParams
    if (url.pathname.endsWith('button')) {
      const type = params.get('type') as ButtonCallbackType
      const key: WAMessageKey = {
        remoteJid: params.get('remoteJid'),
        fromMe: params.get('fromMe') === 'true',
        id: params.get('id'),
      }
      const buttonReply: ButtonReplyInfo = {
        id: params.get('buttonId')!,
        displayText: params.get('buttonDisplayText')!,
        index: +params.get('buttonIndex')!,
      }
      const threadID = key.remoteJid!
      const quoted = await this.loadWAMessageFromDBWithKey(key)
      if (!quoted) {
        throw new Error('Cannot reply to message not in database')
      }

      const compose = {
        buttonReply,
        type,
      }

      await this.client!.sendMessage(key.remoteJid!, compose, {
        ...(await getEphemeralOptions(this.db, threadID) || {}),
        cachedGroupMetadata: id => getGroupParticipantsFromDB(this.db, id),
        quoted,
      })
    } else if (url.pathname.endsWith('group')) {
      const senderJid = params.get('senderJid')!
      const groupJid = params.get('jid')!
      const inviteCode = params.get('inviteCode')!
      const inviteExpiration = +params.get('expiration')!

      this.logger.info({ inviteCode }, 'joining group')

      const sock = this.client!
      if (sock.type === 'md') {
        await sock.groupAcceptInviteV4(senderJid, { groupJid, inviteCode, inviteExpiration })
      }
    }
  }

  getMessage = async (threadID: string, messageID: string) => {
    const repo = this.db.getRepository(DBMessage)
    const msg = await repo.findOne({ threadID, id: messageID })
    return msg
      ? DBMessage.prepareForSending(msg, this.accountID)
      : undefined
  }

  addReaction = (threadID: string, messageID: string, reactionKey: string) => this.setReaction(threadID, messageID, reactionKey)

  removeReaction = async (threadID: string, messageID: string, reactionKey: string) => this.setReaction(threadID, messageID, null)

  private setReaction = async (threadID: string, messageID: string, reactionKey: string | null) => {
    await this.waitForConnectionOpen()

    const msg = await this.assertLoadWAMessageFromDB(threadID, messageID)

    const opts = await getEphemeralOptions(this.db, threadID)
    await this.client!.sendMessage(threadID, {
      react: {
        key: msg.key,
        text: reactionKey,
        senderTimestampMs: unixTimestampSeconds(),
      },
    }, {
      waitForAck: true,
      ...opts,
    })
  }

  forwardMessage = async (threadID: string, messageID: string, threadIDs: string[]) => {
    await this.waitForConnectionOpen()
    const { original: { message } } = await this.db.getRepository(DBMessage).findOneOrFail({
      id: messageID,
      threadID,
    })
    await Promise.all(
      threadIDs!.map(
        async tid => (
          this.client!.sendMessage(
            tid,
            { forward: message },
            { ...(await getEphemeralOptions(this.db, tid)) },
          )
        ),
      ),
    )
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone: boolean) => {
    const msg = await this.loadWAMessageFromDB(threadID, messageID)
    if (!msg) {
      throw new Error('Message not found')
    }
    if (forEveryone) {
      await this.client!.sendMessage(threadID, { delete: msg.key })
    } else {
      await this.client!.chatModify({
        clear: {
          messages: [
            { id: msg.key.id!, fromMe: msg.key.fromMe!, timestamp: toNumber(msg.messageTimestamp!) },
          ],
        },
      }, threadID, { })
    }
  }

  markAsUnread = async (threadID: string) => {
    await this.modThread(threadID, true, 'isUnread')
  }

  sendReadReceipt = async (threadID: string, messageID?: string) => {
    await this.waitForConnectionOpen()
    await readChat(this.db, this.client!, this, threadID, messageID)
  }

  sendActivityIndicator = async (type: ActivityType, threadID: string | undefined) => {
    this.lastActivityType = type
    await this.waitForConnectionOpen()
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
      await this.modThread(threadID, updates.mutedUntil === 'forever', 'mutedUntil')
    }
  }

  changeThreadImage = async (threadID: string, imageBuffer: Buffer, mimeType: string) => {
    await this.client!.updateProfilePicture(threadID, imageBuffer)
  }

  archiveThread = (threadID: string, archived: boolean) =>
    this.modThread(threadID, archived, 'isArchived')

  addParticipant = async (threadID: string, participantID: string) => {
    if (!isJidGroup(threadID)) throw new Error('cannot add more participants to a single chat')
    await this.client!.groupParticipantsUpdate(threadID, [participantID], 'add')
  }

  removeParticipant = async (threadID: string, participantID: string) => {
    if (!isJidGroup(threadID)) throw new Error('cannot remove participants from a single chat')
    await this.client!.groupParticipantsUpdate(threadID, [participantID], 'remove')
  }

  changeParticipantRole = async (threadID: string, participantID: string, role: 'admin' | 'regular') => {
    await this.client!.groupParticipantsUpdate(threadID, [participantID], PARTICIPANT_ACTION_MAP[role])
  }

  getAsset = async (opts: GetAssetOptions, category: 'profile-picture' | 'attachment', jid: string, msgID: string) => {
    jid = decodeURIComponent(jid)
    msgID = msgID ? decodeURIComponent(msgID) : msgID
    switch (category) {
      case 'profile-picture': {
        await this.waitForConnectionOpen()

        if (typeof this.profilePictureUrlCache[jid] === 'undefined') {
          this.profilePictureUrlCache[jid] = this.client!.profilePictureUrl(jid)
            .catch(() => '')
            .then(url => url || '')
        }
        const url = await this.profilePictureUrlCache[jid]
        return url
      }
      case 'attachment': {
        const endByte = opts.range?.end ? opts.range?.end + 1 : opts.range?.end
        const result = await downloadMessage(this.db, this.client!, jid, msgID, { startByte: opts.range?.start, endByte }, this.logger)
        return result
      }
      default:
        throw new Error('Unexpected attachment: ' + category)
    }
  }

  getAssetInfo = async (_: GetAssetOptions, category: 'profile-picture' | 'attachment', jid: string, msgID: string): Promise<AssetInfo> => {
    jid = decodeURIComponent(jid)
    msgID = msgID ? decodeURIComponent(msgID) : msgID
    switch (category) {
      case 'attachment': {
        const result = await getAttachmentInfo(this.db, jid, msgID)
        return result
      }
      default:
        throw new Error('Unexpected attachment: ' + category)
    }
  }

  onThreadSelected = async (threadID: string) => {
    this.openedThreadId = threadID

    if (!threadID) {
      return
    }
    const jid = threadID
    // await this.client.updatePresence(jid, Presence.available)
    // update presence when clicking through
    if (!isJidBroadcast(jid)) {
      await this.waitForConnectionOpen()
      await this.client!.presenceSubscribe(jid)
        .catch(err => console.error(`error in presence: ${err}`))
    }
  }

  private async modThread(threadID: string, value: boolean, key: 'pin' | 'mutedUntil' | 'isArchived' | 'isUnread') {
    const chat = await this.getChat(threadID)
    if (!chat) throw new Error('modThread: thread not found')

    const getLastMessages = async () => {
      const msgs = await getLastMessagesOfThread(this.db, threadID)
      if (this.connectionType === 'legacy' && Array.isArray(msgs)) {
        return msgs.slice(0, 1)
      }
      return msgs
    }

    if (!!chat[key] === value) {
      // already done, nothing to do
      this.logger.info(`ignoring patch as already done ${key}:${value} on ${threadID}`)
      return
    }

    let mod: ChatModification
    switch (key) {
      case 'isArchived':
        mod = { archive: value, lastMessages: await getLastMessages() }
        break
      case 'pin':
        mod = { pin: value }
        break
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
