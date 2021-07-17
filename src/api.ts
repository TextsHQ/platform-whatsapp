import bluebird from 'bluebird'
import matchSorter from 'match-sorter'
import { promises as fs } from 'fs'
import makeConnection, { Chat as WAChat, SocketConfig, makeInMemoryStore, AnyAuthenticationCredentials, BaileysEventEmitter, base64EncodedAuthenticationCredentials, Browsers, DisconnectReason, isGroupID, UNAUTHORIZED_CODES, WAMessage, AnyRegularMessageContent, AnyMediaMessageContent, promiseTimeout, BaileysEventMap, unixTimestampSeconds, ChatModification, GroupMetadata } from '@adiwajshing/baileys'
import { texts, PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, ConnectionState, ConnectionStatus, ServerEventType, OnConnStateChangeCallback, ReAuthError, CurrentUser, MessageContent, ConnectionError, PaginationArg, AccountInfo, ActivityType, LoginCreds, Thread, Paginated, User, PhoneNumber, ServerEvent } from '@textshq/platform-sdk'

import P from 'pino'
import mappers from './mappers'
import { hasUrl, isBroadcastID, numberFromJid, textsWAKey, removeServer, CONNECTION_STATE_MAP, PARTICIPANT_ACTION_MAP, whatsappID, PRESENCE_MAP } from './util'
import type { WACompleteMessage } from './types'

const MESSAGE_PAGE_SIZE = 15
const THREAD_PAGE_SIZE = 15
const CHAT_MUTE_DURATION_S = 64092211200
const DELAY_CONN_STATUS_CHANGE = 20_000
const ATTACHMENT_UPDATE_WAIT_TIME_MS = 20_000

const AUTO_RECONNECT_CODES = new Set([
  DisconnectReason.badSession,
  DisconnectReason.connectionClosed,
  DisconnectReason.connectionLost,
  DisconnectReason.timedOut,
])

const config: Partial<SocketConfig> = {
  version: [2, 2126, 11],
  logger: P().child({ class: 'texts-baileys', level: texts.IS_DEV ? 'debug' : 'silent' }),
  browser: Browsers.appropriate('Chrome'),
  connectTimeoutMs: 90_000,
  phoneResponseTimeMs: 90_000,
}

export default class WhatsAppAPI implements PlatformAPI {
  private accountID: string

  private client?: ReturnType<typeof makeConnection> // TODO: make type

  private readonly store = makeInMemoryStore({
    logger: config.logger!.child({ class: 'texts-baileys-store' }),
    chatKey: textsWAKey,
  })

  private readonly mappers = mappers(this.store)

  private session?: AnyAuthenticationCredentials

  private evCallback: OnServerEventCallback = () => {}

  private connCallback: OnConnStateChangeCallback = () => {}

  private connStatusTimeout: NodeJS.Timeout = null

  private lastConnStatus: ConnectionStatus = null

  private hasSomeChats = false

  init = async (session: AnyAuthenticationCredentials, { accountID }: AccountInfo) => {
    this.accountID = accountID
    this.session = session

    if (session) {
      await this.connect()
    }
  }

  dispose = () => {
    this.client?.end(undefined)
    clearTimeout(this.connStatusTimeout)
  }

  private setConnStatus = (state: ConnectionState, immediate = false) => {
    clearTimeout(this.connStatusTimeout)
    const delay = (
      immediate
      || [ConnectionStatus.CONNECTED, ConnectionStatus.CONFLICT].includes(state.status)
      || [ConnectionStatus.DISCONNECTED, ConnectionStatus.CONFLICT].includes(this.lastConnStatus)
    ) ? 0 : DELAY_CONN_STATUS_CHANGE
    this.connStatusTimeout = setTimeout(() => {
      this.lastConnStatus = state.status
      this.connCallback({ ...state, canRetry: state.status === ConnectionStatus.DISCONNECTED })
    }, delay)
  }

  login = async ({ jsCodeResult }: LoginCreds): Promise<LoginResult> => {
    if (!jsCodeResult) {
      return { type: 'error', errorMessage: "Didn't get any data from login page" }
    }

    const ls = JSON.parse(jsCodeResult)
    if (!ls || !('WASecretBundle' in ls)) {
      return { type: 'error', errorMessage: 'Unable to retrieve authentication token' }
    }

    this.session = ls
    await this.connect()
    return { type: 'success' }
  }

  logout = async () => {
    await this.client.logout()
  }

  private connect = async () => {
    try {
      this.connectInternal()

      await this.client!.waitForConnection()
      // this.setConnStatus({ status: ConnectionStatus.CONNECTED })
    } catch (error) {
      texts.log('connect failed:', error)
      const statusCode: number = error.output?.statusCode
      if (statusCode) {
        if (UNAUTHORIZED_CODES.includes(statusCode)) throw new ReAuthError(error.message)
        else if (error.message === DisconnectReason.timedOut) throw new ConnectionError('Timed out. Make sure your phone is connected to the internet')
      }
      throw error
    }
    texts.log('connected successfully')
  }

  private connectInternal = () => {
    if (!!this.client && this.client.getState().connection !== 'close') {
      throw new Error('already connecting!')
    }
    this.client = makeConnection({ ...config, credentials: this.session })
    this.store.listen(this.client!.ev)
    this.registerCallbacks(this.client!.ev)
  }

  getCurrentUser = (): CurrentUser => {
    const { user } = this.client?.getState() || {}
    if (!user) {
      throw new Error('user is not available')
    }
    return {
      id: user.jid,
      isSelf: true,
      fullName: user.name,
      displayText: numberFromJid(user.jid),
      phoneNumber: numberFromJid(user.jid),
      imgURL: this.ppUrl(user.jid),
    }
  }

  serializeSession = () => (
    base64EncodedAuthenticationCredentials(this.session)
  )

  subscribeToEvents = (onEvent: OnServerEventCallback) => {
    this.evCallback = onEvent
  }

  onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => {
    this.connCallback = onEvent
  }

  private registerCallbacks = async (ev: BaileysEventEmitter) => {
    const chatUpdateEvents = async (updates: (Partial<WAChat> | WAChat)[], type: 'upsert' | 'update' = 'update') => {
      // console.log(updates)
      const list = await Promise.all(
        updates.map(async update => {
          update = { ...update }
          const list: ServerEvent[] = []
          if (update.jid !== 'status@broadcast') {
            if (update.presences) {
              const mapped = this.mappers.mapPresenceUpdate(update.jid, update.presences)
              // texts.log(update.presences, mapped)
              list.push(...mapped)
              delete update.presences
            }
            // load in the chat if it's new
            if (type === 'upsert') {
              await this.loadChat(update.jid)
            }
            if (Object.keys(update).length > 1) { // more keys than just "jid"
              list.push(
                {
                  type: ServerEventType.STATE_SYNC,
                  objectName: 'thread',
                  objectIDs: { threadID: update.jid },
                  mutationType: type,
                  entries: type === 'update' ? [this.mappers.mapChatPartial(update)] : this.mappers.mapChats([update as WAChat]),
                },
              )
            }
          }
          return list
        }),
      )
      !!list.length && this.evCallback(list.flat())
    }
    const messageUpdateEvents = (updates: Partial<WAMessage>[], type: 'upsert' | 'update' = 'update') => {
      const list = updates.map(
        msg => {
          const ev: ServerEvent = { type: ServerEventType.THREAD_MESSAGES_REFRESH, threadID: msg.key.remoteJid }
          return ev
        },
      )
      !!list.length && this.evCallback(list)
    }

    ev.on('connection.update', update => {
      if (update.connection) {
        let isReplaced = false
        if (update.connection === 'close') {
          // @ts-ignore
          const statusCode = update.lastDisconnect!.error?.output?.statusCode || 500
          const isReconnecting = AUTO_RECONNECT_CODES.has(statusCode)
          isReplaced = statusCode === DisconnectReason.connectionReplaced
          texts.log('disconnected, reconnecting: ', isReconnecting)
          // auto reconnect logic
          if (isReconnecting) {
            update.connection = 'connecting'
            this.connectInternal()
          }
        }
        this.setConnStatus({ status: isReplaced ? ConnectionStatus.CONFLICT : CONNECTION_STATE_MAP[update.connection] })
      }

      if (typeof update.phoneConnected !== 'undefined') {
        texts.log(`phone connected: ${update.phoneConnected}`)
        this.setConnStatus({ status: update.phoneConnected ? ConnectionStatus.CONNECTED : ConnectionStatus.DISCONNECTED })
      }
    })

    ev.on('chats.upsert', ({ chats, type }) => {
      if (type === 'set') {
        this.hasSomeChats = true
        return
      }
      chatUpdateEvents(chats, 'upsert')
    })

    ev.on('contacts.upsert', ({ contacts, type }) => {
      if (type === 'set' && this.hasSomeChats) {
        const events = contacts.map(
          c => (
            {
              type: ServerEventType.STATE_SYNC,
              objectName: 'thread',
              objectIDs: { threadID: c.jid },
              mutationType: 'update',
              entries: [{ id: c.jid, title: this.mappers.contactName(c) }],
            }
          ) as ServerEvent,
        )
        this.evCallback(events)
      }
    })

    ev.on('chats.update', chatUpdateEvents)

    ev.on('chats.delete', entries => {
      this.evCallback([
        {
          type: ServerEventType.STATE_SYNC,
          mutationType: 'delete',
          objectIDs: { },
          objectName: 'thread',
          entries,
        },
      ])
    })

    ev.on('messages.update', messageUpdateEvents)
    ev.on('messages.upsert', ({ messages, type }) => {
      if (type === 'notify' || type === 'append') {
        messageUpdateEvents(messages, 'upsert')
      } else if (type === 'last') {
        const list = messages.map(
          msg => {
            const ev: ServerEvent = {
              type: ServerEventType.STATE_SYNC,
              mutationType: 'upsert',
              objectIDs: {
                threadID: msg.key.remoteJid,
              },
              objectName: 'message',
              entries: this.mappers.mapMessages([msg]),
            }
            return ev
          },
        )
        !!list.length && this.evCallback(list)
      }
    })

    ev.on('messages.delete', ({ jid }) => {
      this.evCallback([
        { type: ServerEventType.THREAD_MESSAGES_REFRESH, threadID: jid },
      ])
    })
  }

  searchUsers = (typed: string) => {
    const contacts = Object.values(this.store.contacts).filter(c => c && !(isGroupID(c.jid) || isBroadcastID(c.jid)))
    const sorted = matchSorter(contacts, typed, { keys: ['name', 'notify', 'jid'] })
    return this.mappers.mapContacts(sorted)
  }

  private loadChat = async (jid: string) => {
    const isGroup = isGroupID(jid)
    await Promise.all([
      (async () => {
        let contact = this.store.contacts[jid]
        if (!contact) {
          contact = { jid }
          this.store.contacts[jid] = contact
        }
        if (!contact.imgUrl) {
          if (isGroup || isBroadcastID(jid)) {
            // we're not using asset:// here because Texts cannot yet display the fallback group placeholder on asset 404
            await this.store.fetchImageUrl(jid, this.client).catch(() => null)
          } else {
            contact.imgUrl = this.ppUrl(jid)
          }
        }
      })(),
      (async () => {
        let meta: GroupMetadata
        if (isGroup) {
          meta = await this.store.fetchGroupMetadata(jid, this.client)
        } else if (isBroadcastID(jid)) {
          meta = await this.store.fetchBroadcastListInfo(jid, this.client)
        } else {
          return
        }

        const chat = this.store.chats.get(jid)
        if (!!chat && !chat.read_only) {
          const isSelfAdmin = meta.participants.find(({ jid }) => jid === this.store.state.user?.jid)?.isAdmin
          chat.read_only = (meta.announce !== 'true' || isSelfAdmin) ? 'false' : 'true'
        }
      })(),
    ])
  }

  createThread = async (userIDs: string[], name: string) => {
    let chat: WAChat
    if (userIDs.length > 1) {
      const meta = await this.client.groupCreate(name, userIDs)
      chat = this.getChat(meta.id)
    } else if (userIDs.length === 1) {
      const jid = whatsappID(userIDs[0])
      chat = this.getChat(jid)
      if (!chat) {
        chat = {
          name,
          jid,
          t: unixTimestampSeconds(),
          count: 0,
        }
      }
    } else throw new Error('no users provided')

    return this.mappers.mapChats([chat])[0]
  }

  deleteThread = async (threadID: string) => {
    await this.client.modifyChat(threadID, { delete: true })
  }

  getThreads = async (inboxName: InboxName, pagination: PaginationArg): Promise<Paginated<Thread>> => {
    if (inboxName !== InboxName.NORMAL) return { items: [], hasMore: false }
    const { cursor } = pagination || { cursor: null, direction: null }

    if (!this.hasSomeChats) {
      await new Promise(resolve => {
        this.client!.ev.on('chats.upsert', () => {
          resolve(undefined)
        })
      })
    }

    const { chats } = this.store
    const result = chats.paginated(cursor || undefined, THREAD_PAGE_SIZE)
    await bluebird.map(result, chat => this.loadChat(chat.jid))

    const items = this.mappers.mapChats(result)

    return {
      items,
      hasMore: chats.length >= THREAD_PAGE_SIZE,
      oldestCursor: result.length ? textsWAKey.key(result.slice(-1)[0]) : undefined,
    }
  }

  // searchMessages = async (typed: string, pagination: PaginationArg, threadID?: string) => {
  //   if (!typed) return { items: [], hasMore: false, oldestCursor: '0' }
  //   const page = cursor ? (+cursor || 1) : 1
  //   const nextPage = (page + 1).toString()
  //   texts.log(`searching for ${typed} in ${threadID}, page: ${page}`)
  //   const response = await this.client.searchMessages(typed, threadID || null, 10, page)
  //   return {
  //     items: mapMessages(response.messages, this.client.user.jid),
  //     hasMore: !response.last,
  //     oldestCursor: nextPage,
  //   }
  // }

  private lazyLoadReadReceipts = async (messages: WAMessage[], threadID: string) => {
    const updatedMessages = await bluebird.map(messages, async (m: WACompleteMessage) => {
      if (m.key.fromMe && !m.info) {
        m.info = await this.client.messageInfo(m.key.remoteJid, m.key.id)
          .catch(() => ({ reads: [], deliveries: [] }))

        return this.mappers.mapMessagePartial(m)
      }
    })
    const entries = updatedMessages.filter(Boolean)
    if (entries.length) {
      this.evCallback([{
        type: ServerEventType.STATE_SYNC,
        mutationType: 'update',
        objectIDs: {
          threadID,
        },
        objectName: 'message',
        entries,
      }])
    }
  }

  getMessages = async (threadID: string, pagination: PaginationArg) => {
    const { cursor } = pagination || { cursor: null, direction: null }
    const getCursor = () => {
      if (!cursor) return undefined
      const [id, fromMe] = cursor.split('_')
      return {
        id,
        fromMe: !!+fromMe,
      }
    }
    const messageStore = this.store.messages[threadID]
    const messageLen = Math.max(
      !!cursor || !messageStore ? MESSAGE_PAGE_SIZE : messageStore?.array.length,
      1,
    )
    const messages = await this.store.loadMessages(threadID, messageLen, { before: getCursor() }, this.client)

    if (isGroupID(threadID)) {
      this.lazyLoadReadReceipts(messages, threadID)
    }

    return {
      items: this.mappers.mapMessages(messages),
      hasMore: messages.length >= MESSAGE_PAGE_SIZE || !cursor || cursor === null,
    }
  }

  getUser = async ({ phoneNumber }: { phoneNumber: PhoneNumber }): Promise<User> => {
    if (!phoneNumber) return
    const jid = phoneNumber.replace(/[^0-9]/g, '') + '@c.us'
    const exists = await this.client.isOnWhatsApp(jid)
    if (exists) return { id: jid, phoneNumber }
    return null
  }

  sendMessage = async (threadID: string, msgContent: MessageContent, options?: MessageSendOptions) => {
    let content: AnyRegularMessageContent
    let { text, mimeType } = msgContent

    msgContent.mentionedUserIDs?.forEach(userID => {
      const phoneNumber = removeServer(userID)
      // @+14151231234 => @14151231234
      text = text.replace('@+' + phoneNumber, '@' + phoneNumber)
    })
    const buffer = msgContent.fileBuffer || (msgContent.filePath ? await fs.readFile(msgContent.filePath) : undefined)

    if (buffer) {
      let media: AnyMediaMessageContent
      if (mimeType?.endsWith('/webp')) media = { sticker: buffer }
      else if (mimeType?.includes('video/')) media = { video: buffer, caption: text, gifPlayback: msgContent.isGif }
      else if (mimeType?.includes('image/')) media = { image: buffer, caption: text }
      else if (mimeType?.includes('audio/')) media = { audio: buffer, pttAudio: mimeType === 'audio/ogg', seconds: msgContent.audioDurationSeconds }
      else media = { document: buffer, fileName: msgContent.fileName, mimetype: '' }

      media.mimetype = mimeType || 'application/octet-stream'
      content = media
    } else {
      content = {
        text,
        mentions: msgContent.mentionedUserIDs,
      }
    }
    const chat = this.getChat(threadID)
    const sentMessage = await this.client.sendWAMessage(
      threadID,
      content,
      {
        quoted: options?.quotedMessageID
          ? await this.store.loadMessage(options.quotedMessageThreadID || threadID, options.quotedMessageID, this.client)
          : undefined,
        ephemeralOptions: chat.ephemeral ? { expiration: chat.ephemeral, eph_setting_ts: chat.eph_setting_ts } : undefined,
        waitForAck: true,
      },
    )
    return this.mappers.mapMessages([sentMessage])
  }

  forwardMessage = async (threadID: string, messageID: string, threadIDs?: string[], userIDs?: string[]) => {
    const forward = await this.store.loadMessage(threadID, messageID, this.client)
    await bluebird.map(
      threadIDs,
      tid => (
        this.client.sendWAMessage(tid, { forward }, { })
      ),
    )
    return true
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone: boolean) => {
    const message = await this.store.loadMessage(threadID, messageID, this.client)
    if (forEveryone) {
      await this.client.sendWAMessage(threadID, { delete: message.key }, {})
    } else {
      await this.client.modifyChat(
        threadID,
        {
          clear: { messages: [{ id: messageID, fromMe: message.key.fromMe }] },
        },
      )
    }
    return true
  }

  markAsUnread = async (threadID: string) => {
    const msg = await this.store.mostRecentMessage(threadID, this.client)
    await this.client.chatRead(msg!.key, -1)
  }

  sendReadReceipt = async (threadID: string, messageID?: string) => {
    const chat = this.store.chats.get(threadID)
    const msg = await (
      messageID
        ? this.store.loadMessage(threadID, messageID, this.client)
        : this.store.mostRecentMessage(threadID, this.client!)
    )
    if (chat) {
      await this.client.chatRead(msg!.key, chat.count)
    }
  }

  sendActivityIndicator = async (type: ActivityType, threadID: string) => {
    if (this.client.getState().connection !== 'open') return
    await this.client.updatePresence(threadID, PRESENCE_MAP[type])
  }

  updateThread = async (threadID: string, updates: Partial<Thread>) => {
    if ('title' in updates) {
      if (!isGroupID(threadID)) throw new Error('cannot change title of a individual chat')
      await this.client.groupUpdateSubject(threadID, updates.title)
    }
    if ('messageExpirySeconds' in updates) {
      await this.client.sendWAMessage(
        threadID,
        { disappearingMessagesInChat: updates.messageExpirySeconds },
        { },
      )
    }
    return true
  }

  changeThreadImage = async (threadID: string, imageBuffer: Buffer, mimeType: string) => {
    const chat = this.getChat(threadID)
    if (!chat) new Error('chat not present')

    await this.client.updateProfilePicture(threadID, imageBuffer)
  }

  pinThread = (threadID: string, pinned: boolean) =>
    this.modThread(threadID, pinned, 'pin')

  muteThread = (threadID: string, muted: boolean) =>
    this.modThread(threadID, muted, 'mute')

  archiveThread = (threadID: string, archived: boolean) =>
    this.modThread(threadID, archived, 'archive')

  addParticipant = async (threadID: string, participantID: string) => {
    if (!isGroupID(threadID)) throw new Error('cannot add more participants to a single chat')
    await this.client.groupParticipantsUpdate(threadID, [participantID], 'add')
    return true
  }

  removeParticipant = async (threadID: string, participantID: string) => {
    if (!isGroupID(threadID)) throw new Error('cannot remove participants from a single chat')
    await this.client.groupParticipantsUpdate(threadID, [participantID], 'remove')
    return true
  }

  changeParticipantRole = async (threadID: string, participantID: string, role: 'admin' | 'regular') => {
    await this.client.groupParticipantsUpdate(threadID, [participantID], PARTICIPANT_ACTION_MAP[role])
    return true
  }

  getAsset = async (category: 'profile-picture' | 'attachment', jid: string, msgID: string) => {
    let update: (messages: BaileysEventMap['messages.update']) => void
    switch (category) {
      case 'profile-picture':
        let url: string
        const item = this.store.contacts[jid]
        if (!item?.imgUrl || item.imgUrl?.startsWith('asset://')) {
          delete item?.imgUrl
          url = await this.store.fetchImageUrl(jid, this.client).catch(() => null)
        }
        return url
      case 'attachment':
        const m = await this.store.loadMessage(jid, msgID, this.client)
        if (!hasUrl(m)) {
          texts.log('url not present yet for ', m.key, ', waiting...')
          await promiseTimeout(ATTACHMENT_UPDATE_WAIT_TIME_MS, resolve => {
            update = (messages: BaileysEventMap['messages.update']) => {
              for (const message of messages) {
                if (message.key.id === m.key.id) {
                  Object.assign(m, message)
                  resolve()
                }
              }
            }
            this.client.ev.on('messages.update', update)
          })
            .finally(() => {
              this.client.ev.off('messages.update', update)
            })
        }
        const stream = await this.client.downloadMediaMessage(m, 'stream')
        return stream
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
    if (!isGroupID(jid) && !isBroadcastID(jid)) {
      await this.client.requestPresenceUpdate(jid)
        .catch(err => console.error(`error in presence: ${err}`))
    }
  }

  takeoverConflict = async () => {
    this.setConnStatus({ status: ConnectionStatus.CONNECTING })
    await this.connect()
  }

  private async modThread(_threadID: string, value: boolean, key: 'pin' | 'mute' | 'archive') {
    const threadID = whatsappID(_threadID)
    const chat = this.getChat(threadID)
    if (!chat) throw new Error('modThread: thread not found')

    if ((key in chat) === value) return // already done, nothing to do
    let mod: ChatModification
    switch (key) {
      case 'archive':
        mod = { archive: value }
        break
      case 'pin':
        mod = { pin: value ? true : { remove: +chat.pin } }
        break
      case 'mute':
        mod = { mute: value ? CHAT_MUTE_DURATION_S : { remove: +chat.mute } }
        break
    }
    await this.client.modifyChat(threadID, mod)
  }

  private ppUrl = (jid: string) => `asset://${this.accountID}/profile-picture/${jid}`

  private getChat = (jid: string) => this.store.chats.get(jid)
}
