import bluebird from 'bluebird'
import matchSorter from 'match-sorter'
import { promises as fs } from 'fs'
import { WAConnection, WA_MESSAGE_STATUS_TYPE, STORIES_JID, MessageType, MessageOptions, Mimetype, Presence, Browsers, ChatModification, WATextMessage, BaileysError, isGroupID, whatsappID, ReconnectMode, UNAUTHORIZED_CODES, promiseTimeout, WAChat, WAChatUpdate, WA_MESSAGE_ID, WAGroupMetadata, WAContact, WAMessageProto, WAMessageStatusUpdate } from 'baileys'
import { texts, PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, ConnectionState, ConnectionStatus, ServerEventType, OnConnStateChangeCallback, ReAuthError, CurrentUser, ServerEvent, MessageContent, ConnectionError, PaginationArg, AccountInfo, ActivityType } from '@textshq/platform-sdk'

import { mapMessage, mapMessages, mapContact, mapThreads, mapThread, mapThreadProps, mapPresenceUpdate, mapMessageUpdateProps } from './mappers'
import { hasUrl, isBroadcastID, numberFromJid, textsWAKey } from './util'
import { WACompleteMessage } from './types'

const MESSAGE_PAGE_SIZE = 20
const THREAD_PAGE_SIZE = 15

const CONNECT_TIMEOUT_MS = 15_000
const DELAY_CONN_STATUS_CHANGE = 15_000
const ATTACHMENT_UPDATE_WAIT_TIME_MS = 15_000

function updateReadReceipts(chat: WAChat, update: WAMessageStatusUpdate) {
  chat.messages.all().forEach(msg => {
    if (!update.ids.includes(msg.key.id)) return
    const status = update.type
    const waMsg = msg as WACompleteMessage

    if (!waMsg.info) waMsg.info = { reads: [], deliveries: [] }

    const person = { jid: update.participant, t: (Date.now() / 1000).toString() }
    if (status >= WA_MESSAGE_STATUS_TYPE.READ) waMsg.info.reads.push(person)
    else if (status >= WA_MESSAGE_STATUS_TYPE.DELIVERY_ACK) waMsg.info.deliveries.push(person)

    waMsg.status = WA_MESSAGE_STATUS_TYPE.SERVER_ACK
  })
}

export default class WhatsAppAPI implements PlatformAPI {
  private accountID: string

  private client = new WAConnection()

  private evCallback: OnServerEventCallback = () => {}

  private connCallback: OnConnStateChangeCallback = () => {}

  private connStatusTimeout: NodeJS.Timeout = null

  private lastConnStatus: ConnectionStatus = null

  private meContact: WAContact

  constructor() {
    this.client.logger.level = texts.IS_DEV ? 'debug' : 'silent'
    this.client.browserDescription = Browsers.appropriate('Chrome')
    this.client.autoReconnect = ReconnectMode.onConnectionLost
    this.client.connectOptions.maxIdleTimeMs = CONNECT_TIMEOUT_MS
    this.client.connectOptions.maxRetries = 1
    this.client.shouldLogMessages = texts.IS_DEV
    this.client.loadProfilePicturesForChatsAutomatically = false
    this.client.chatOrderingKey = textsWAKey
    this.client.maxCachedMessages = 125

    // prevent logging of phone numbers
    // @ts-expect-error
    this.client.assertChatGet = jid => {
      const chat = this.client.chats.get(jid)
      if (!chat) throw new Error('chat not found')
      return chat
    }
  }

  init = async (session: any, { accountID }: AccountInfo) => {
    this.accountID = accountID

    this.registerCallbacks()

    if (!session) return

    this.client.loadAuthInfo(session)
    await this.connect()
  }

  dispose = () => {
    this.client.close()
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

  login = async ({ jsCodeResult }): Promise<LoginResult> => {
    texts.log('jsCodeResult', jsCodeResult)
    if (!jsCodeResult) return { type: 'error', errorMessage: "Didn't get any data from login page" }

    const ls = JSON.parse(jsCodeResult)
    if (!ls || !('WASecretBundle' in ls)) return { type: 'error', errorMessage: 'Unable to retrieve authentication token' }

    this.client.loadAuthInfo(ls)
    await this.connect()
    return { type: 'success' }
  }

  logout = async () => {
    await this.client.logout()
  }

  private connect = async () => {
    texts.log('began connect')

    try {
      await this.client.connect()
      this.setConnStatus({ status: ConnectionStatus.CONNECTED })
    } catch (error) {
      texts.log('connect failed:', error)
      if (error instanceof BaileysError) {
        console.error(error.message)
        if (UNAUTHORIZED_CODES.includes(error.status)) throw new ReAuthError(error.message)
        else if (error.message === 'timed out') throw new ConnectionError('Timed out. Make sure your phone is connected to the internet')
      }
      throw error
    }
    this.client.contacts[this.client.user.jid] = this.client.user
    texts.log('connected successfully')
  }

  getCurrentUser = async (): Promise<CurrentUser> => {
    texts.log('requested user data')
    const { meContact } = this
    return {
      id: meContact.jid,
      isSelf: true,
      fullName: meContact.name,
      displayText: numberFromJid(meContact.jid),
      phoneNumber: numberFromJid(meContact.jid),
      imgURL: `asset://${this.accountID}/profile-picture/${meContact.jid}`,
    }
  }

  serializeSession = () => this.client.base64EncodedAuthInfo()

  subscribeToEvents = (onEvent: OnServerEventCallback) => {
    this.evCallback = onEvent
  }

  onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => {
    this.connCallback = onEvent
  }

  private registerCallbacks = async () => {
    // const saveLog = async () => {
    //   const logPath = os.homedir() + `/baileys-${new Date().toISOString()}.json`
    //   await fs.writeFile(logPath, JSON.stringify(this.client.messageLog, null, '\t'))
    //   texts.log(`saved Baileys log to ${logPath}`)
    // }
    const onChatsUpdate = async (updates: Partial<WAChatUpdate>[]) => {
      // texts.log('received chat update:', updates)
      const callbacks = await Promise.all(
        updates.map(async update => {
          const list: ServerEvent[] = []
          if (update.jid === 'status@broadcast') return list
          const chat = await this.loadThread(update.jid)
          if (!chat) return list

          const keys = new Set(Object.keys(update))
          keys.delete('messages')
          keys.delete('jid')
          if (keys.size > 0) {
            list.push(
              {
                type: ServerEventType.STATE_SYNC,
                objectName: 'thread',
                objectIDs: { threadID: chat.jid },
                mutationType: 'update',
                entries: [mapThreadProps(chat)],
              },
            )
          }
          if (update.messages) {
            // const mapped = update.messages.all().map(msg => mapMessage(msg, this.client.user.jid))
            // list.push({
            //   type: ServerEventType.STATE_SYNC,
            //   mutationType: 'upsert',
            //   objectIDs: {
            //     threadID: update.jid,
            //   },
            //   objectName: 'message',
            //   entries: mapped,
            // })
            this.evCallback([{ type: ServerEventType.THREAD_MESSAGES_REFRESH, threadID: chat.jid }])
          }
          if (update.presences) {
            const mapped = mapPresenceUpdate(update.jid, update.presences)
            texts.log(update.presences, mapped)
            list.push(...mapped)
          }
          return list
        }),
      )
      const flattenedCallbacks = callbacks.flat()
      if (flattenedCallbacks.length > 0) this.evCallback(flattenedCallbacks)
    }

    this.client
      .on('connection-validated', user => { this.meContact = user })
      .on('ws-close', async () => {
        texts.log('ws-close')
        // if (texts.IS_DEV) saveLog()
      })
      .on('close', ({ reason, isReconnecting }) => {
        texts.log(`got disconnected: ${reason}`)
        if (reason === 'replaced') return this.setConnStatus({ status: ConnectionStatus.CONFLICT })
        this.setConnStatus({ status: isReconnecting ? ConnectionStatus.CONNECTING : ConnectionStatus.DISCONNECTED })
      })
      .on('connecting', () => {
        this.setConnStatus({ status: ConnectionStatus.CONNECTING })
      })
      .on('open', () => {
        this.setConnStatus({ status: ConnectionStatus.CONNECTED })
      })
      .on('connection-phone-change', ({ connected }) => {
        texts.log(`phone connected: ${connected}`)
        this.setConnStatus({ status: connected ? ConnectionStatus.CONNECTED : ConnectionStatus.DISCONNECTED })
      })
      .on('message-status-update', async update => {
        texts.log('got update:', update)
        const chat = this.getChat(whatsappID(update.to))
        if (!chat) return

        if (isGroupID(chat.jid)) updateReadReceipts(chat, update)

        const mapped = chat.messages.all()
          .filter(msg => update.ids.includes(msg.key.id))
          .map(msg => mapMessage(msg, this.client.user.jid))
        // this.evCallback([{
        //   type: ServerEventType.STATE_SYNC,
        //   mutationType: 'upsert',
        //   objectIDs: {
        //     threadID: chat.jid,
        //   },
        //   objectName: 'message',
        //   entries: mapped,
        // }])
        this.evCallback([{ type: ServerEventType.THREAD_MESSAGES_REFRESH, threadID: chat.jid }])
      })
      .on('chat-update', update => onChatsUpdate([update]))
      .on('chats-update', onChatsUpdate)
  }

  searchUsers = (typed: string) => {
    texts.log('searching users ' + typed)
    const contacts = Object.values(this.client.contacts)
      .filter(c => c && !(isGroupID(c.jid) || isBroadcastID(c.jid)))
    return matchSorter(contacts, typed, { keys: ['name', 'notify', 'jid'] })
      .map(c => mapContact(c, c.jid === this.client.user.jid))
  }

  private loadThread = async (jid: string) => {
    const chat = this.getChat(jid)
    if (isGroupID(jid) || isBroadcastID(jid)) {
      await this.extendGroupChat(chat)
      if (!chat.imgUrl) chat.imgUrl = await this.client.getProfilePicture(jid).catch(() => null)
      // we're not using asset:// here because Texts cannot yet display the fallback group placeholder on asset 404
    } else if (!chat.imgUrl) {
      chat.imgUrl = this.ppUrl(jid)
    }
    return chat
  }

  createThread = async (userIDs: string[], name: string) => {
    let chat: WAChat
    if (userIDs.length > 1) {
      const meta = await this.client.groupCreate(name, userIDs)
      chat = this.getChat(meta.gid)
    } else if (userIDs.length === 1) {
      chat = this.getChat(whatsappID(userIDs[0]))
      if (!chat) {
        // @ts-expect-error
        chat = await this.client.chatAdd(userIDs[0], name)
        this.client.chats.delete(chat)
      }
      chat.imgUrl = this.ppUrl(chat.jid)
    } else throw new Error('no users provided')

    return mapThread(chat, this.meContact)
  }

  getThreads = async (inboxName: InboxName, { cursor, direction }: PaginationArg = { cursor: null, direction: null }) => {
    if (inboxName !== InboxName.NORMAL) return { items: [], hasMore: false }

    texts.log('requested thread data, page: ' + cursor)

    if (!this.client.lastChatsReceived) {
      await new Promise(resolve => {
        const interval = setInterval(() => this.client.getChats(), 20_000)
        this.client.once('chats-received', () => {
          clearInterval(interval)
          resolve(undefined)
        })
      })
    }

    const loadChatsResult = await this.client.loadChats(THREAD_PAGE_SIZE, cursor, { loadProfilePicture: false })

    texts.log('loaded threads')

    const loaded = await bluebird.map(loadChatsResult.chats, chat => this.loadThread(chat.jid))
    const chats = loaded.filter(c => c.jid !== STORIES_JID && !!c)

    const items = mapThreads(chats, this.meContact)

    return {
      items,
      hasMore: chats.length >= THREAD_PAGE_SIZE,
      oldestCursor: loadChatsResult.cursor?.toString(),
    }
  }

  // searchMessages = async (typed: string, { cursor, direction }: PaginationArg = { cursor: null, direction: null }, threadID?: string) => {
  //   if (!typed) return { items: [], hasMore: false, oldestCursor: '0' }
  //   const page = cursor ? (+cursor || 1) : 1
  //   const nextPage = (page + 1).toString()
  //   texts.log(`searching for ${typed} in ${threadID}, page: ${page}`)
  //   const response = await this.client.searchMessages(typed, threadID || null, 10, page)
  //   return {
  //     items: mapMessages(response.messages, this.meContact.jid),
  //     hasMore: !response.last,
  //     oldestCursor: nextPage,
  //   }
  // }

  private lazyLoadReadReceipts = async (messages: WAMessageProto.WebMessageInfo[], threadID: string) => {
    const updatedMessages = await bluebird.map(messages, async (m: WACompleteMessage) => {
      if (m.key.fromMe && !m.info) {
        m.info = await this.client.messageInfo(m.key.remoteJid, m.key.id)
          .catch(() => ({ reads: [], deliveries: [] }))
        return m
      }
    })
    const entries = updatedMessages.filter(Boolean).map(mapMessageUpdateProps)
    if (entries.length < 1) return
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

  getMessages = async (threadID: string, { cursor, direction }: PaginationArg = { cursor: null, direction: null }) => {
    const getCursor = () => {
      const [id, fromMe] = cursor.split('_')
      return {
        id,
        fromMe: !!+fromMe,
      }
    }
    const chat = this.getChat(threadID)
    const messageLen = Math.max(
      !!cursor || !chat ? MESSAGE_PAGE_SIZE : chat?.messages.length,
      1,
    )
    texts.log(`loading ${messageLen} messages of ${threadID} -- ${cursor}`)
    const { messages } = await this.client.loadMessages(threadID, messageLen, cursor && getCursor())
    const items = mapMessages(messages, this.meContact.jid)

    if (isGroupID(threadID)) {
      this.lazyLoadReadReceipts(messages, threadID)
    }

    return {
      items,
      hasMore: messages.length >= MESSAGE_PAGE_SIZE || !cursor || cursor === null,
    }
  }

  sendMessage = async (threadID: string, msgContent: MessageContent, options?: MessageSendOptions) => {
    const { mimeType } = msgContent
    const txt = { text: msgContent.text } as WATextMessage
    const buffer = msgContent.fileBuffer || (msgContent.filePath ? await fs.readFile(msgContent.filePath) : undefined)

    const ops: MessageOptions = {
      filename: msgContent.fileName,
      caption: msgContent.text,
      ptt: msgContent.isRecordedAudio,
      duration: msgContent.audioDurationSeconds,
    }

    if (options?.quotedMessageID) {
      const message = await this.client.loadMessage(threadID, options.quotedMessageID)
      ops.quoted = message
    }

    let messageType = MessageType.text
    if (buffer) {
      if (mimeType === Mimetype.webp) messageType = MessageType.sticker
      else if (mimeType?.includes('video/')) messageType = MessageType.video
      else if (mimeType?.includes('image/')) messageType = MessageType.image
      else if (mimeType?.includes('audio/')) messageType = MessageType.audio
      else messageType = MessageType.document
    }
    if (messageType === MessageType.document) {
      ops.mimetype = mimeType || 'application/octet-stream'
    }
    if (msgContent.isGif) {
      ops.mimetype = 'video/gif'
    }
    // temp measure
    if (messageType === MessageType.video) {
      ops.thumbnail = null
    }
    if (mimeType === 'audio/ogg') ops.ptt = true

    const sentMessage = await this.client.sendMessage(threadID, buffer || txt, messageType, ops)
    if (whatsappID(threadID) === whatsappID(this.meContact.jid)) {
      sentMessage.status = WA_MESSAGE_STATUS_TYPE.READ
    }
    return [
      mapMessage(sentMessage, this.meContact.jid),
    ]
  }

  forwardMessage = async (threadID: string, messageID: string, threadIDs?: string[], userIDs?: string[]) => {
    const loaded = await this.client.loadMessage(threadID, messageID)
    await bluebird.map(threadIDs, tid => this.client.forwardMessage(whatsappID(tid), loaded))
    return true
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone: boolean) => {
    texts.log(`deleting message: ${messageID} in ${threadID}`)

    const message = await this.client.loadMessage(threadID, messageID)
    if (forEveryone) await this.client.deleteMessage(threadID, message.key)
    else await this.client.clearMessage(message.key)

    return true
  }

  markAsUnread = async (threadID: string) => {
    await this.client.chatRead(threadID, 'unread')
  }

  sendReadReceipt = async (threadID: string) => {
    await this.client.chatRead(threadID, 'read')
  }

  sendActivityIndicator = async (type: ActivityType, threadID: string) => {
    if (this.client.state !== 'open') return
    const presence = {
      [ActivityType.NONE]: Presence.paused,
      [ActivityType.TYPING]: Presence.composing,
      [ActivityType.RECORDING_VOICE]: Presence.recording,
    }[type]
    await this.client.updatePresence(threadID, presence)
  }

  changeThreadTitle = async (threadID: string, newTitle: string) => {
    if (!isGroupID(threadID)) throw new Error('cannot change title of a individual chat')
    await this.client.groupUpdateSubject(threadID, newTitle)
    return true
  }

  changeThreadImage = async (threadID: string, imageBuffer: Buffer, mimeType: string) => {
    texts.log('changing profile picture of ' + threadID)

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
    await this.client.groupAdd(threadID, [participantID])
    return true
  }

  removeParticipant = async (threadID: string, participantID: string) => {
    if (!isGroupID(threadID)) throw new Error('cannot remove participants from a single chat')
    await this.client.groupRemove(threadID, [participantID])
    return true
  }

  changeParticipantRole = async (threadID: string, participantID: string, role: 'admin' | 'regular') => {
    if (role === 'admin') await this.client.groupMakeAdmin(threadID, [participantID])
    else if (role === 'regular') await this.client.groupDemoteAdmin(threadID, [participantID])
    return true
  }

  getAsset = async (category: string, jid: string, msgID: string) => {
    if (category === 'profile-picture') {
      const item = this.client.contacts[jid] || this.client.chats.get(jid)
      if (item?.imgUrl == null || item.imgUrl?.startsWith('asset://')) {
        const url = await this.client.getProfilePicture(jid).catch(() => null)
        if (item) item.imgUrl = url
        return url
      }
      return item?.imgUrl
    }

    if (category === 'attachment') {
      let m = await this.client.loadMessage(jid, msgID)
      const mID = WA_MESSAGE_ID(m)

      if (!hasUrl(m)) {
        texts.log('url not present yet for ' + mID + ', waiting...')
        await promiseTimeout(ATTACHMENT_UPDATE_WAIT_TIME_MS, resolve => {
          const update = (chatUpdate: Partial<WAChat>) => {
            const message = chatUpdate.messages?.get(mID)
            if (message) {
              m = message
              resolve()
              this.client.off('chat-update', update)
            }
          }
          this.client.on('chat-update', update)
        })
      }
      const buffer = await this.client.downloadMediaMessage(m)
      return buffer
    }
  }

  onThreadSelected = async (threadID: string) => {
    if (!threadID) {
      texts.log('set unavailable')
      return
    }
    const jid = threadID
    texts.log(`thread selected: ${jid}`)
    // await this.client.updatePresence(jid, Presence.available)
    // update presence when clicking through
    if (!isGroupID(jid) && !isBroadcastID(jid)) {
      await this.client.requestPresenceUpdate(jid)
        .catch(err => console.error(`error in presence: ${err}`))
    }
  }

  takeoverConflict = async () => {
    texts.log('taking over again')
    this.setConnStatus({ status: ConnectionStatus.CONNECTING })
    await this.connect()
    texts.log('took over')
  }

  private async modThread(threadID: string, value: boolean, key: 'pin' | 'mute' | 'archive') {
    texts.log(`modifying thread ${threadID} ${key}: ${value}`)

    threadID = whatsappID(threadID)
    const chat = this.client.chats.get(threadID)
    if (!chat) throw new Error('modThread: thread not found')

    if ((key in chat) === value) return // already done, nothing to do
    const mod = (value ? key : ('un' + key)) as ChatModification
    // @ts-expect-error
    await this.client.modifyChat(threadID, mod, 8 * 60 * 60 * 1000)
  }

  private contactForJid = (jid: string) => {
    jid = whatsappID(jid)
    const contact = (this.client.contacts[jid] || { jid })
    if (!contact.imgUrl) contact.imgUrl = this.ppUrl(jid)
    return contact
  }

  private ppUrl = (jid: string) => `asset://${this.accountID}/profile-picture/${jid}`

  private getChat = (jid: string) => this.client.chats.get(jid)

  private extendGroupChat = async (chat: WAChat) => {
    if (chat.metadata) return

    let meta: WAGroupMetadata

    if (isGroupID(chat.jid)) {
      meta = await this.client.groupMetadata(chat.jid) // .catch(() => { }) || { participants: [] } as WAGroupMetadata // swallow error
    } else if (isBroadcastID(chat.jid)) {
      const broadcastMeta = await this.client.getBroadcastListInfo(chat.jid).catch(() => { })
      if (broadcastMeta) {
        meta = { participants: broadcastMeta.recipients.map(({ id }) => ({ jid: id })) } as WAGroupMetadata
        chat.metadata = meta
      }
    }
    if (!meta) return

    meta.participants.forEach(p => {
      const contact = this.contactForJid(p.jid)
      if (contact) p.imgUrl = contact.imgUrl
    })

    if (!chat.read_only) {
      const isSelfAdmin = meta.participants.find(({ jid }) => jid === this.meContact.jid)?.isAdmin
      chat.read_only = (!(meta.announce === 'true') || isSelfAdmin) ? 'false' : 'true'
    }
  }
}
