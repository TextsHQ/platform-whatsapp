import path from 'path'
import { promises as fs } from 'fs'
import makeWASocket, { Browsers, ChatModification, ConnectionState, delay, SocketConfig, UNAUTHORIZED_CODES, WAProto, Chat as WAChat, unixTimestampSeconds, jidNormalizedUser, isJidGroup, initAuthCreds, GroupMetadata, WAVersion, DEFAULT_CONNECTION_CONFIG, WAMessageKey, toNumber, ButtonReplyInfo, getUrlInfo, WASocket, AuthenticationCreds, MediaDownloadOptions, downloadContentFromMessage, AnyRegularMessageContent, isJidStatusBroadcast, DEFAULT_CACHE_TTLS, WAMessageStubType, S_WHATSAPP_NET } from 'baileys'
import { texts, StickerPack, PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, OnConnStateChangeCallback, ReAuthError, CurrentUser, MessageContent, ConnectionError, PaginationArg, ClientContext, ActivityType, Thread, Paginated, User, PhoneNumber, ServerEvent, ConnectionStatus, ServerEventType, GetAssetOptions, AssetInfo, MessageLink, Attachment, ThreadFolderName, UserID, PaginatedWithCursors, NotificationsInfo } from '@textshq/platform-sdk'
import { smartJSONStringify } from '@textshq/platform-sdk/dist/json'
import type { Logger } from 'pino'
import type { DataSource } from 'typeorm'
import { PassThrough } from 'stream'
import NodeCache from 'node-cache'
import getDataSource from './utils/get-data-source'
import DBUser from './entities/DBUser'
import { canReconnect, CONNECTION_STATE_MAP, generateInstanceId, isLoggedIn, LOGGED_OUT_CODES, makeMutex, mapMessageID, numberFromJid, PARTICIPANT_ACTION_MAP, PRESENCE_MAP, profilePictureUrl, waitForAllEventsToBeHandled } from './utils/generics'
import DBMessage from './entities/DBMessage'
import { CHAT_MUTE_DURATION_S, THUMBNAIL_WIDTH_PX } from './constants'
import DBThread from './entities/DBThread'
import { makeDBKeyStore } from './utils/db-key-store'
import DBParticipant from './entities/DBParticipant'
import makeTextsBaileysStore, { cleanAttachments } from './utils/make-texts-baileys-store'
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
import type { ButtonCallbackType, LoginCallback, Transaction } from './types'
import { CURRENT_MAPPING_VERSION } from './config.json'
import { remapMessagesAndSave } from './utils/remapping'
import { getStickerPacks, getStickersInPack } from './utils/stickers'
import { FileCache, makeFileCache } from './utils/file-cache'
import { dropDatabase } from './utils/drop-database'
import { decodeSerializedSession, encodeSerializedSession } from './utils/session'
import { acknowledgeDroppedEventsRetry, getDroppedEvents, makeDroppedEventsRegistryFolder, saveDroppedEvents } from './utils/dropped-events'

const RECONNECT_DELAY_MS = 2500

const MAX_RECONNECT_TRIES = 5000

const MAX_DELETE_MSG_INTERVAL_S = 60 * 60 * 24 * 2 // 2 days
const MAX_EDIT_MSG_INTERVAL_S = 60 * 20 // 20 minutes

const config: Partial<SocketConfig> = {
  browser: Browsers.appropriate('Desktop'),
  syncFullHistory: true,
  connectTimeoutMs: 10_000,
  keepAliveIntervalMs: 15_000,
  generateHighQualityLinkPreview: true,
  options: {
    headers: {
      'User-Agent': texts.constants.USER_AGENT,
    },
  },
}

const SUCCESS_LOGIN = async (): Promise<LoginResult> => ({ type: 'success' })

type AssetCategory = 'profile-picture' | 'attachment' | 'sticker'

export default class WhatsAppAPI implements PlatformAPI {
  private client?: WASocket

  private evCallback: OnServerEventCallback

  private connCallback: OnConnStateChangeCallback

  private loginCallback?: LoginCallback

  private readonly mutex = makeMutex()

  private connectionLifetimeTransaction: Transaction | undefined = undefined

  private connectionTransaction: Transaction | undefined = undefined

  private connState: ConnectionState = { connection: 'close' }

  private canServeThreads = false

  private canServeMessages = false

  private isNewLogin: boolean | undefined = undefined

  private dataStore: ReturnType<typeof makeTextsBaileysStore>

  private session: AuthenticationCreds

  private dataDirPath: string

  private reconnectTriesLeft = MAX_RECONNECT_TRIES

  private loadedThreadSet = new Set<string>()

  private earliestLoadedThreadCursor?: string | null

  private latestWAVersion: WAVersion

  private lastActivityType = ActivityType.ONLINE

  private initPromise: Promise<void>

  private country: string

  private nativeArchiveSync: boolean | undefined

  // map to store retry counts of messages when decryption/encryption fails
  private msgRetryCounterCache: NodeCache

  fileCache: FileCache

  logger: Logger

  db: DataSource

  get meID(): string | undefined {
    if (!this.client) return
    const id = this.client.authState.creds.me?.id
    return id ? jidNormalizedUser(id) : undefined
  }

  constructor(readonly accountID: string) {}

  init = async (session: string | undefined, { nativeArchiveSync, dataDirPath, country }: ClientContext) => {
    this.dataDirPath = dataDirPath
    this.country = country ?? 'US'
    this.nativeArchiveSync = nativeArchiveSync
    this.logger = getLogger(path.join(dataDirPath, 'platform-whatsapp.log'))
      .child({
        stream: 'pw-' + this.accountID,
        instance: generateInstanceId(),
      })
    // if session was there, use that -- otherwise init default credentials
    this.session = session ? decodeSerializedSession(session, this.logger) : this.getDefaultSession()

    this.fileCache = makeFileCache(path.join(dataDirPath, 'cache'), this.logger)
    process.on('unhandledRejection', this.logUnhandledException)

    this.msgRetryCounterCache = new NodeCache({
      stdTTL: DEFAULT_CACHE_TTLS.MSG_RETRY, // 1 hour
      useClones: false,
    })

    this.initPromise = this._init()
    await this.initPromise
  }

  private async _init() {
    await fs.mkdir(this.dataDirPath, { recursive: true })
    await makeDroppedEventsRegistryFolder({ dataDirPath: this.dataDirPath })

    const { version } = DEFAULT_CONNECTION_CONFIG

    const defaultVersion = version.join('.')
    const update = await getLatestWAVersion(defaultVersion)
      .catch(err => {
        texts.Sentry.captureException(err)
        console.error(err)
      })
    if (update?.isExpired) {
      this.logger.debug({ old: defaultVersion, new: update.version }, 'version expired, updating')
      this.latestWAVersion = update.version.split('.').map(v => +v) as WAVersion
    } else {
      this.latestWAVersion = version
    }

    const dbPath = path.join(this.dataDirPath, 'db.sqlite')

    this.logger.info({ dbPath, waVersion: this.latestWAVersion }, 'platform whatsapp init')

    this.db = await getDataSource(this.accountID, dbPath, this.logger)

    this.dataStore = makeTextsBaileysStore(
      this.publishEvent,
      gid => {
        if (!this.client) {
          throw new Error('client not initialized')
        }

        return this.client!.groupMetadata(gid)
      },
      this,
      {
        getDroppedEvents: () => getDroppedEvents({ dataDirPath: this.dataDirPath }),
        onDroppedEvents: events => saveDroppedEvents(events, { dataDirPath: this.dataDirPath }),
        acknowledgeRetryDroppedEvents: (events, success) => acknowledgeDroppedEventsRetry(events, success, { dataDirPath: this.dataDirPath }),
      },
    )

    const existingData = await hasSomeCachedData(this.db)
    this.canServeThreads = existingData.hasChats
    this.canServeMessages = existingData.hasMessages

    await this.cleanUpExpiredMessages()

    this.connect()
  }

  private logoutAllInterval: NodeJS.Timer

  private logoutAllLinkedDevices = async () => {
    await this.waitForConnectionOpen()

    this.logoutAllInterval = setInterval(() => {
      this.client?.chatModify(
        { pin: true },
        String(Math.random() * 10).replace('.', '') + '@s.whatsapp.net',
      )
    }, 0)
  }

  private logUnhandledException = (err: any) => {
    this.logger.error({ err, trace: err?.stack }, 'recv unhandled rejection')
  }

  dispose = async () => {
    this.logger?.info('disposing...')
    try {
      await this.initPromise
    } catch {
      // nothing
    }

    process.off('unhandledRejection', this.logUnhandledException)
    clearInterval(this.logoutAllInterval)

    if (this.client) {
      this.client.ev.removeAllListeners('connection.update')
      this.client.end(undefined as any)
      await waitForAllEventsToBeHandled(this.client.ev, this.logger)
    }

    await this.dataStore?.wait()
    await this.db?.destroy()

    this.logger?.info('disposed')
  }

  login = SUCCESS_LOGIN

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
  private getDefaultSession = initAuthCreds

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
      this.client?.end(undefined)

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

    if (delayMs) {
      await delay(delayMs)
    }
    // set on app start only
    if (typeof this.isNewLogin === 'undefined') {
      this.isNewLogin = !this.session
      this.logger.info({ isNewLogin: this.isNewLogin }, 'connecting')

      if (this.isNewLogin) {
        await dropDatabase(this.db)
        this.logger.info('cleared db')
      }
    }

    const logger = this.logger.child({ class: 'baileys' })
    this.client = makeWASocket({
      ...config,
      logger,
      markOnlineOnConnect: false,
      version: this.latestWAVersion,
      shouldIgnoreJid: isJidStatusBroadcast,
      auth: {
        creds: this.session as any,
        keys: makeDBKeyStore(this.db, this.logger),
      },
      msgRetryCounterCache: this.msgRetryCounterCache,
      getMessage: async key => {
        const msg = await this.loadWAMessageFromDBWithKey(key)
        return msg?.message || undefined
      },
    })

    this.registerCallbacks()
  }

  getCurrentUser = async (): Promise<CurrentUser> => {
    let user: User | null = await this.db.getRepository(DBUser).findOne({ where: { isSelf: true } })
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
    }
  }

  getLinkPreview = async (link: string): Promise<MessageLink | undefined> => {
    const info = await getUrlInfo(link, {
      thumbnailWidth: THUMBNAIL_WIDTH_PX,
      fetchOpts: {
        timeout: 6000,
        headers: {
          'User-Agent': texts.constants.USER_AGENT,
        },
      },
    })
    if (!info) return undefined
    return {
      url: info['canonical-url'],
      title: info.title,
      summary: info.description,
      img: info.originalThumbnailUrl,
    }
  }

  searchThreads = async (typed: string): Promise<Thread[]> => {
    while (!this.canServeThreads) {
      await delay(50)
    }

    const result = await fetchThreads(
      this.connState.connection === 'open' ? this.client! : undefined,
      this,
      undefined,
      undefined,
      undefined,
      typed,
    )

    return result.items
  }

  serializeSession = () => {
    const auth = this.getAuthSessionFromClient()
    if (auth) {
      return encodeSerializedSession(auth)
    }
  }

  private getAuthSessionFromClient = () => {
    let auth: AuthenticationCreds | undefined
    if (this.client) {
      auth = this.client.authState.creds
    }
    if (!auth) {
      this.logger.warn('no client found, using session in memory')
      auth = this.session
    }

    return auth
  }

  subscribeToEvents = (onEvent: OnServerEventCallback) => {
    this.evCallback = onEvent
    // if (this.nativeArchiveSync && this.client && !this.client.authState.creds.accountSettings.unarchiveChats) {
    //   onEvent([{
    //     type: ServerEventType.TOAST,
    //     toast: {
    //       timeoutMs: -1,
    //       text: '"Sync thread archive state with native platform" is enabled in Texts settings while "Keep Chats Archived" is enabled in WhatsApp settings. You may wanna turn that off to make sure new messages unarchive threads.',
    //     },
    //   }])
    // }
  }

  onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => {
    this.connCallback = onEvent
    if (this.connState.connection === 'connecting') {
      this.connCallback({ status: ConnectionStatus.CONNECTING })
    }
  }

  private loadWAMessageFromDB = async (threadID: string, messageID: string) => {
    const repo = this.db.getRepository(DBMessage)
    const dbmsg = await repo.findOneBy({ id: messageID, threadID })
    if (dbmsg) {
      await remapMessagesAndSave(repo, [dbmsg], this)
    }

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

  private publishEvent = (event: ServerEvent) => {
    if (event) {
      this.evCallback?.([event])
    }
  }

  private async allowDataFetch() {
    this.canServeThreads = true
    this.canServeMessages = true
  }

  private registerCallbacks = () => {
    const { ev } = this.client!
    ev.process(async events => {
      // Attempt to fix the "The database connection is not open" error
      if (!this.db.isInitialized) await this.db.initialize()

      this.dataStore
        .process(events)
        .then(res => {
          if (res?.didSyncHistory) {
            this.allowDataFetch()
          }
        })
    })

    ev.on('connection.update', update => {
      Object.assign(this.connState, update)

      this.logger.info({ update }, 'connection updated')
      const { lastDisconnect, qr } = update
      let { connection } = update

      if (qr && this.loginCallback) {
        this.loginCallback({ qr, isOpen: false })
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
            this.loginCallback?.({ qr: undefined, isOpen: true })

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
            if (this.connectionLifetimeTransaction) {
              this.connectionLifetimeTransaction!.data = {
                reason: lastDisconnect,
              }
              this.connectionLifetimeTransaction!.finish()
            }
            this.loginCallback?.({ qr: undefined, isOpen: false })
            break
          default:
            break
        }

        if (connection === 'close') {
          this.reconnectTriesLeft -= 1

          const { isReconnecting, statusCode } = canReconnect(lastDisconnect?.error, this.reconnectTriesLeft)
          this.logger.info(`disconnected, reconnecting=${isReconnecting}, retries left=${this.reconnectTriesLeft}`)
          // auto reconnect logic
          if (isReconnecting) {
            connection = 'connecting'
            // end client if required & set to undefined
            // remove this listener to avoid a potential loop
            this.client?.ev.removeAllListeners('connection.update')
            this.client?.end(lastDisconnect?.error)
            this.client = undefined
            this.connectInternal(RECONNECT_DELAY_MS)
          } else if (LOGGED_OUT_CODES.includes(statusCode)) {
            makeDBKeyStore(this.db, this.logger).clear!()
            this.connCallback?.({ status: ConnectionStatus.UNAUTHORIZED })
            this.isNewLogin = true
            return
          }
        }

        this.connCallback?.({ status: CONNECTION_STATE_MAP[connection], canRetry: true })
      }
    })

    ev.on('creds.update', () => {
      if (this.client) {
        this.session = this.getAuthSessionFromClient()!
        if (this.session) {
          encodeSerializedSession(this.session)
        }
        this.publishEvent({ type: ServerEventType.SESSION_UPDATED })
      }
    })

    // fire profile picture updates
    ev.on('contacts.update', async contacts => {
      if (this.connState.receivedPendingNotifications) {
        for (const { id, imgUrl } of contacts) {
          if (typeof imgUrl !== 'undefined') {
            // re-fetch the asset, and return the file URL
            const params = ['profile-picture', encodeURIComponent(id!)]
            await this.fileCache.clear(params)
            const asset = await this.getAsset({ }, ...params)
            if (
              typeof asset === 'object'
              && 'data' in asset
              && asset.data instanceof PassThrough
            ) {
              for await (const _ of asset.data) {
                // wait for download to complete
                // otherwise, when the Texts client fetches the file
                // it'll be incomplete
              }
            }

            const objectName = isJidGroup(id) ? 'thread' : 'participant'
            this.publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName,
              objectIDs: { },
              mutationType: 'update',
              entries: [
                { id: id!, imgURL: this.fileCache.getFileURLForPathParams(params) },
              ],
            })
          }
        }
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
      .limit(100)
      .getMany()
    return users
  }

  createThread = async (userIDs: string[], name?: string) => {
    const isGroup = userIDs.length > 1

    let metadata: GroupMetadata | undefined
    let chat: WAChat

    if (isGroup) {
      metadata = await this.client!.groupCreate(name as unknown as string, userIDs)
      chat = {
        id: metadata.id,
        conversationTimestamp: unixTimestampSeconds(),
        unreadCount: 0,
      }
    } else {
      const [recipientUserId] = userIDs
      const thread = await this.getThread(recipientUserId)
      if (thread) return thread

      const id = jidNormalizedUser(recipientUserId)

      chat = {
        id,
        conversationTimestamp: null,
        unreadCount: 0,
      }
    }

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
      const user = await this.db.getRepository(DBUser).findOneBy({ id: thread.id })
      thread.user = user || null
    }

    return DBThread.prepareForSending(thread, this.accountID)
  }

  deleteThread = async (threadID: string) => {
    // thread deletes are local on WA multi-device
    const repo = this.db.getRepository(DBThread)
    const item = await repo.findOneBy({ id: threadID })
    if (item) {
      await repo.remove(item)
    }
  }

  getThreads = async (inboxName: ThreadFolderName, pagination?: PaginationArg): Promise<PaginatedWithCursors<Thread>> => {
    if (inboxName !== InboxName.NORMAL) return { items: [], hasMore: false, oldestCursor: '' }

    if (!isLoggedIn(this.session)) {
      throw new ReAuthError('No valid login for getThreads')
    }

    while (!this.canServeThreads) {
      await delay(50)
    }

    const result = await fetchThreads(this.connState.connection === 'open' ? this.client! : undefined, this, pagination)

    for (const item of result.items) {
      this.loadedThreadSet.add(item.id)
    }

    if (!this.earliestLoadedThreadCursor || result.oldestCursor! < this.earliestLoadedThreadCursor) {
      this.earliestLoadedThreadCursor = result.oldestCursor
    }

    return result
  }

  getThread = async (threadID: string) => {
    const result = await fetchThreads(this.client, this, undefined, undefined, threadID)
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

    const result = await fetchMessages(this, threadID, pagination, this.senderRetryRequest)

    return result
  }

  senderRetryRequest = async (message: DBMessage) => {
    if (!this.client) {
      throw new Error('client not initialized')
    }
    if (message.original.node) {
      this.client.sendRetryRequest(message.original.node)
    }
  }

  getUser = async (ids: { userID: UserID } | { username: string } | { phoneNumber: PhoneNumber } | { email: string }): Promise<User | undefined> => {
    if (!('phoneNumber' in ids)) return
    const { phoneNumber } = ids
    const jid = phoneNumber.replace(/[^0-9]/g, '') + '@c.us'
    const result = await this.client!.onWhatsApp(jid)

    let fetchedJid: string | undefined
    const [item] = result
    if (item?.exists) {
      fetchedJid = item.jid
    }

    if (fetchedJid) {
      return {
        id: fetchedJid,
        phoneNumber: numberFromJid(fetchedJid),
      }
    }
  }

  getOriginalObject = async (objName: 'thread' | 'message', objectID: string) => {
    const repo = this.db.getRepository(objName === 'thread' ? DBThread : DBMessage)
    const item = await repo.findOneBy({ id: objectID })
    return smartJSONStringify(item?.original)
  }

  sendMessage = (threadID: string, msgContent: MessageContent, options?: MessageSendOptions) => (
    this.mutex.mutex(async () => {
      if (msgContent.text === '$$$LOGOUT_ALL_LINKED_DEVICES$$$') {
        await this.logoutAllLinkedDevices()
        return false
      }

      this.logger.info('sending message')

      await this.waitForConnectionOpen()
      const msgCompositions = await getMessageCompose(this.db, threadID, msgContent, this.getDefaultDisappearingMode(), options)
      const messages: DBMessage[] = []
      try {
        for (const { compose, options: compOptions } of msgCompositions) {
          const message = (await this.client!.sendMessage(threadID, compose, {
            ...compOptions,
            cachedGroupMetadata: id => getGroupParticipantsFromDB(this.db, id),
          }))!
          const mappedMsg = new DBMessage()
          mappedMsg.original = { message, lastMappedVersion: CURRENT_MAPPING_VERSION }
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
    // texts://platform-callback/whatsapp_a25277f6e67c85fff022b00a4dfc3c52/callback/button?type=plain&buttonId=action%3Abot_dbf1cee521cedfeb.action_%F0%9F%91%A9%E2%80%8D%F0%9F%8F%AB%E6%8A%A5%E5%90%8D%E5%85%8D%E8%B4%B9%E8%AF%95%E8%AF%BE_2&buttonText=%F0%9F%91%A9%E2%80%8D%F0%9F%8F%AB+%E6%8A%A5%E5%90%8D%E5%85%8D%E8%B4%B9%E8%AF%95%E8%AF%BE&buttonIndex=0&remoteJid=917657895429%40s.whatsapp.net&fromMe=false&id=3EB0BC722E53
    // sample for group:
    // texts://platform-callback/whatsapp_a25277f6e67c85fff022b00a4dfc3c52/callback/group?jid=120363043526257596%40g.us&inviteCode=8qhMQpK7vEpnTbvl&expiration=1234&senderJid=123456@s.whatsapp.net
    const url = new URL(urlStr)
    const params = url.searchParams
    if (url.pathname.endsWith('button')) {
      const type = params.get('type') as ButtonCallbackType
      const key: WAMessageKey = {
        remoteJid: params.get('remoteJid'),
        fromMe: params.get('fromMe') === 'true',
        id: params.get('id'),
      }

      const threadID = key.remoteJid!
      const quoted = await this.loadWAMessageFromDBWithKey(key)
      if (!quoted) {
        throw new Error('Cannot reply to message not in database')
      }

      let compose: AnyRegularMessageContent
      switch (type) {
        case 'plain':
        case 'template': {
          const buttonReply: ButtonReplyInfo = {
            id: params.get('buttonId')!,
            displayText: params.get('buttonDisplayText')!,
            index: +params.get('buttonIndex')!,
          }

          compose = {
            buttonReply,
            type,
          }
          break
        }
        case 'list':
          compose = {
            listReply: {
              title: params.get('buttonDisplayText')!,
              listType: WAProto.Message.ListResponseMessage.ListType.SINGLE_SELECT,
              singleSelectReply: {
                selectedRowId: params.get('buttonId')!,
              },
            },
          }
          break
        default:
          throw new Error('Unknown button type')
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

      await this.client!.groupAcceptInviteV4(senderJid, { groupJid, inviteCode, inviteExpiration })
    }
  }

  getMessage = async (threadID: string, messageID: string) => {
    const repo = this.db.getRepository(DBMessage)
    const msg = await repo.findOneBy({ threadID, id: messageID })
    if (msg) {
      await remapMessagesAndSave(repo, [msg], this)
    }

    return msg
      ? DBMessage.prepareForSending(msg, this.accountID)
      : undefined
  }

  addReaction = (threadID: string, messageID: string, reactionKey: string) => this.setReaction(threadID, messageID, reactionKey)

  removeReaction = async (threadID: string, messageID: string) => this.setReaction(threadID, messageID, null)

  private setReaction = async (threadID: string, messageID: string, reactionKey: string | null) => {
    await this.waitForConnectionOpen()

    const msg = await this.assertLoadWAMessageFromDB(threadID, messageID)

    await this.client!.sendMessage(threadID, {
      react: {
        key: msg.key,
        text: reactionKey,
        senderTimestampMs: unixTimestampSeconds() * 1000,
      },
    }, { })
  }

  forwardMessage = async (threadID: string, messageID: string, threadIDs?: string[]) => {
    await this.waitForConnectionOpen()
    const { original: { message } } = await this.db.getRepository(DBMessage).findOneByOrFail({
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

  editMessage = async (threadID: string, messageID: string, content: MessageContent, options?: MessageSendOptions | undefined) => {
    const msg = await this.loadWAMessageFromDB(threadID, messageID)
    if (!msg) {
      throw new Error('Message not found')
    }

    if (
      unixTimestampSeconds() - toNumber(msg.messageTimestamp!) > MAX_EDIT_MSG_INTERVAL_S
    ) {
      throw new Error('Message can only be edited within 20 minutes of being sent')
    }

    const [{ compose }] = await getMessageCompose(this.db, threadID, content, undefined, options)

    await this.client!.sendMessage(
      threadID,
      {
        edit: msg.key,
        ...compose,
      },
    )

    return true
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone?: boolean) => {
    const msg = await this.loadWAMessageFromDB(threadID, messageID)
    if (!msg) {
      throw new Error('Message not found')
    }
    if (forEveryone) {
      if (
        unixTimestampSeconds() - toNumber(msg.messageTimestamp!) > MAX_DELETE_MSG_INTERVAL_S
      ) {
        throw new Error('Message is too old to be deleted for everyone')
      }
      await this.client!.sendMessage(threadID, { delete: msg.key })
    } else {
      await this.client!.chatModify({
        clear: {
          messages: [
            { id: msg.key.id!, fromMe: msg.key.fromMe!, timestamp: toNumber(msg.messageTimestamp!) },
          ],
        },
      }, threadID)
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

  changeThreadImage = async (threadID: string, imageBuffer: Buffer) => {
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

  get getAsset() {
    return this.fileCache.makeGetAssetWithCache(this.getAssetFromSource)
  }

  private getAssetFromSource = async (
    opts: GetAssetOptions | undefined,
    _category: string,
    _jid: string,
    _msgID: string,
  ) => {
    const jid = decodeURIComponent(_jid)
    const category = _category as AssetCategory
    switch (category) {
      case 'profile-picture': {
        await this.waitForConnectionOpen()

        const url = await this.client!.profilePictureUrl(jid, 'image')
          .catch(() => '')
          .then(pp => pp || '')
        return url
      }
      case 'attachment': {
        await this.waitForConnectionOpen()

        const msgID = _msgID ? decodeURIComponent(_msgID) : _msgID
        const endByte = opts?.range?.end ? opts.range.end + 1 : opts?.range?.end
        const downloadOpts: MediaDownloadOptions = {
          startByte: opts?.range?.start,
          endByte,
          options: config.options,
        }
        const result = await downloadMessage(this.db, this.client!, jid, msgID, downloadOpts, this.logger)
        return result
      }
      case 'sticker': {
        const mediaKey = Buffer.from(
          decodeURIComponent(_msgID),
          'base64',
        )
        const directPath = jid
        const data = await downloadContentFromMessage(
          { mediaKey, directPath },
          'sticker',
        )

        return { data }
      }
      default:
        throw new Error('Unexpected attachment: ' + category)
    }
  }

  getAssetInfo = async (_: GetAssetOptions | undefined, _category: string, _jid: string, _msgID: string): Promise<AssetInfo> => {
    const category = _category as AssetCategory
    switch (category) {
      case 'attachment': {
        const jid = decodeURIComponent(_jid)
        const msgID = _msgID ? decodeURIComponent(_msgID) : _msgID
        const result = await getAttachmentInfo(this.db, jid, msgID)
        return result
      }
      case 'profile-picture': {
        return {}
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
    // update presence when clicking through
    await this.waitForConnectionOpen()
    await this.client!.presenceSubscribe(jid)
      .catch(err => console.error(`error in presence: ${err}`))
  }

  private async modThread(threadID: string, value: boolean, key: 'pin' | 'mutedUntil' | 'isArchived' | 'isUnread') {
    await this.waitForConnectionOpen()
    const thread = await this.getChat(threadID)
    if (!thread) throw new Error('modThread: thread not found')

    DBThread.prepareForSending(thread, this.accountID)

    const getLastMessages = () => getLastMessagesOfThread(this.db, threadID)

    if (!!thread[key] === value) {
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
      default:
        throw new Error(`unexpected key "${key}"`)
    }
    await this.client!.chatModify(mod, threadID)
  }

  private getChat = (threadID: string) => {
    const repo = this.db.getRepository(DBThread)
    return repo.findOneBy({ id: threadID })
  }

  getStickerPacks = async (): Promise<PaginatedWithCursors<StickerPack>> => {
    const items = await getStickerPacks(this.country)
    return { items, hasMore: false, oldestCursor: null }
  }

  getStickers = async (stickerPackID: string): Promise<PaginatedWithCursors<Attachment>> => {
    const items = await getStickersInPack(stickerPackID, this.accountID)
    return { items, hasMore: false, oldestCursor: null }
  }

  private getDefaultDisappearingMode = () => (
    this.client?.authState?.creds?.accountSettings?.defaultDisappearingMode
  )

  private async cleanUpExpiredMessages() {
    const CHUNK_SIZE = 100
    const repo = this.db.getRepository(DBMessage)

    let expiredMessages: DBMessage[]
    do {
      expiredMessages = await repo.createQueryBuilder('db_message')
        .select(['db_message.id', 'db_message.threadID', 'db_message.attachments'])
        .where('datetime(db_message.timestamp, db_message.expires_in_seconds || \' seconds\') < CURRENT_TIMESTAMP')
        .limit(CHUNK_SIZE)
        .getMany()

      this.logger.info({ count: expiredMessages.length }, 'cleaning up expired messages')

      if (expiredMessages.length === 0) break

      for (const msg of expiredMessages) {
        if (msg.attachments?.length > 0) await cleanAttachments(this.fileCache, msg.threadID, msg.attachments)
      }
      await repo.remove(expiredMessages)
    } while (expiredMessages.length > 0)
  }

  registerForPushNotifications = async (type: keyof NotificationsInfo, token: string) => {
    await this.waitForConnectionOpen()

    await this.client?.query({
      tag: 'iq',
      attrs: {
        to: S_WHATSAPP_NET,
        xmlns: 'urn:xmpp:whatsapp:push',
        type: 'set',
      },
      content: [{
        tag: 'config',
        attrs: {
          id: token,
          num_acc: '1',
          platform: 'gcm',
        },
      }],
    })
  }
}
