import bluebird from 'bluebird'
import matchSorter from 'match-sorter'
import { promises as fs } from 'fs'
import { WAContact, WAConnection, WA_MESSAGE_STATUS_TYPE, STORIES_JID, MessageType, MessageOptions, Mimetype, Presence, Browsers, ChatModification, WATextMessage, BaileysError, isGroupID, whatsappID, ReconnectMode, unixTimestampSeconds, UNAUTHORIZED_CODES, promiseTimeout, WAChat, WAChatUpdate, WA_MESSAGE_ID } from 'baileys'
import { texts, Paginated, Thread, PlatformAPI, OnServerEventCallback, MessageSendOptions, ActivityType, InboxName, LoginResult, ConnectionState, ConnectionStatus, ServerEventType, OnConnStateChangeCallback, ReAuthError, CurrentUser, ServerEvent, MessageContent, ConnectionError, PaginationArg, AccountInfo, User, LoginCreds, PhoneNumber } from '@textshq/platform-sdk'

import { mapMessage, mapMessages, mapContact, mapThreads, mapThread, mapThreadProps, mapPresenceUpdate } from './mappers'
import { hasUrl, isBroadcastID, numberFromJid, textsWAKey, removeServer } from './util'
import type { WACompleteMessage, WACompleteChat } from './types'

const MESSAGE_PAGE_SIZE = 20
const THREAD_PAGE_SIZE = 20

const CONNECT_TIMEOUT_MS = 90_000
const DELAY_CONN_STATUS_CHANGE = 20_000
const ATTACHMENT_UPDATE_WAIT_TIME_MS = 20_000

export default class WhatsAppAPI implements PlatformAPI {
  private accountID: string

  private client = new WAConnection()

  private evCallback: OnServerEventCallback = () => {}

  private connCallback: OnConnStateChangeCallback = () => {}

  private connStatusTimeout: NodeJS.Timeout = null

  private lastConnStatus: ConnectionStatus = null

  private meContact: WAContact

  constructor() {
    this.client.version = [2, 2126, 10]
    this.client.logger.level = texts.IS_DEV ? 'debug' : 'silent'
    this.client.browserDescription = Browsers.appropriate('Chrome')
    this.client.autoReconnect = ReconnectMode.onConnectionLost
    this.client.connectOptions.maxIdleTimeMs = CONNECT_TIMEOUT_MS
    this.client.connectOptions.maxRetries = 5
    this.client.shouldLogMessages = texts.IS_DEV
    this.client.loadProfilePicturesForChatsAutomatically = false
    this.client.chatOrderingKey = textsWAKey
  }

  init = async (session: any, { accountID }: AccountInfo) => {
    this.accountID = accountID

    // prevent logging of phone numbers
    // @ts-expect-error
    this.client.assertChatGet = jid => {
      const chat = this.client.chats.get(jid)
      if (!chat) throw new Error('chat not found')
      return chat
    }

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

  login = async ({ jsCodeResult }: LoginCreds): Promise<LoginResult> => {
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
    try {
      await this.client.connect()
      this.setConnStatus({ status: ConnectionStatus.CONNECTED })
    } catch (error) {
      texts.log('connect failed:', error)
      if (error instanceof BaileysError) {
        if (UNAUTHORIZED_CODES.includes(error.status)) throw new ReAuthError(error.message)
        else if (error.message === 'timed out') throw new ConnectionError('Timed out. Make sure your phone is connected to the internet')
      }
      throw error
    }
    this.client.connectOptions.maxRetries = Infinity
    this.client.contacts[this.client.user.jid] = this.client.user
    texts.log('connected successfully')
  }

  getCurrentUser = async (): Promise<CurrentUser> => {
    /* let { meContact } = this
    if (!meContact) texts.log(`unexpectedly called when state is ${this.client.state}`)
    let attemptsRemaining = 20
    while (!meContact?.jid) {
      await bluebird.delay(50)
      meContact = this.meContact
      if (--attemptsRemaining === 0 && !meContact.jid) {
        throw new Error('unable to get me contact')
      }
    } */
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
                objectIDs: {},
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
      .on('connection-validated', user => this.meContact = user)
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

        if (isGroupID(chat.jid)) {
          chat.messages?.all().forEach(msg => {
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
        // const mapped = chat.messages.all()
        //   .filter(msg => update.ids.includes(msg.key.id))
        //   .map(msg => mapMessage(msg, this.client.user.jid))
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
    const contacts = Object.values(this.client.contacts)
      .filter((c: WAContact) => c && !(isGroupID(c.jid) || isBroadcastID(c.jid)))
    return matchSorter(contacts, typed, { keys: ['name', 'notify', 'jid'] })
      .map(c => mapContact(c, c.jid === this.client.user.jid))
  }

  loadThread = async (jid: string) => {
    const chat = this.getChat(jid) as WACompleteChat
    if (isGroupID(jid)) {
      if (!chat.imgUrl) chat.imgUrl = await this.client.getProfilePicture(jid).catch(() => null)
      // we're not using asset:// here because Texts cannot yet display the fallback group placeholder on asset 404
      // chat.imgUrl = this.ppUrl(jid)
      await this.setGroupChatProperties(chat)
    } else if (isBroadcastID(jid)) {
      try {
        const meta = await this.client.getBroadcastListInfo(jid)
        chat.participants = meta.recipients.map(p => this.contactForJid(p.id))
      } catch (error) {
        texts.log(`failed to get broadcast info for ${jid}: ${error}`)
      }
    } else chat.participants = [this.contactForJid(jid), this.meContact]

    return chat
  }

  createThread = async (userIDs: string[], name: string) => {
    let chat: WACompleteChat = {
      jid: '',
      count: 0,
      participants: [],
      imgUrl: '',
      t: unixTimestampSeconds(),
      spam: 'false',
      modify_tag: '',
      messages: undefined,
      name,
    }

    if (userIDs.length > 1) {
      const meta = await this.client.groupCreate(name, userIDs)
      chat.jid = meta.gid
      await this.setGroupChatProperties(chat)
    } else if (userIDs.length === 1) {
      chat = this.getChat(whatsappID(userIDs[0])) || chat
      chat.jid = whatsappID(userIDs[0])
      chat.participants = [this.contactForJid(userIDs[0]), this.meContact]
      chat.imgUrl = chat.participants[0].imgUrl
    } else throw new Error('no users provided')

    return mapThread(chat, this.meContact, this.client.contacts)
  }

  deleteThread = async (threadID: string) => {
    await this.client.modifyChat(threadID, 'delete')
  }

  getThreads = async (inboxName: InboxName, pagination: PaginationArg): Promise<Paginated<Thread>> => {
    if (inboxName !== InboxName.NORMAL) return { items: [], hasMore: false }
    const { cursor } = pagination || { cursor: null, direction: null }

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

    const loaded = await bluebird.map(loadChatsResult.chats, chat => this.loadThread(chat.jid))
    const chats = loaded.filter(c => c.jid !== STORIES_JID && !!c)

    const items = mapThreads(chats as WACompleteChat[], this.meContact, this.client.contacts)

    return {
      items,
      hasMore: chats.length >= THREAD_PAGE_SIZE,
      oldestCursor: loadChatsResult.cursor?.toString(),
    }
  }

  // searchMessages = async (typed: string, pagination: PaginationArg, threadID?: string) => {
  //   if (!typed) return { items: [], hasMore: false, oldestCursor: '0' }
  //   const page = cursor ? (+cursor || 1) : 1
  //   const nextPage = (page + 1).toString()
  //   const response = await this.client.searchMessages(typed, threadID || null, 10, page)
  //   return {
  //     items: mapMessages(response.messages, this.meContact.jid),
  //     hasMore: !response.last,
  //     oldestCursor: nextPage,
  //   }
  // }

  getMessages = async (threadID: string, pagination: PaginationArg) => {
    const { cursor } = pagination || { cursor: null, direction: null }
    const getCursor = () => {
      const [id, fromMe] = cursor.split('_')
      return {
        id,
        fromMe: !!+fromMe,
      }
    }

    const loadMessagesResult = await this.client.loadMessages(threadID, MESSAGE_PAGE_SIZE, cursor && getCursor())

    if (isGroupID(threadID)) {
      await bluebird.map(loadMessagesResult.messages, async (m: WACompleteMessage) => {
        if (m.key.fromMe && !m.info) {
          m.info = await this.client.messageInfo(m.key.remoteJid, m.key.id)
            .catch(() => ({ reads: [], deliveries: [] }))
        }
      })
    }

    const items = mapMessages(loadMessagesResult.messages, this.meContact.jid, this.client.contacts)
    return {
      items,
      hasMore: loadMessagesResult.messages.length >= MESSAGE_PAGE_SIZE || !cursor,
    }
  }

  getUser = async ({ phoneNumber }: { phoneNumber: PhoneNumber }): Promise<User> => {
    if (!phoneNumber) return
    const jid = phoneNumber.slice(1) + '@c.us'
    const exists = await this.client.isOnWhatsApp(jid)
    if (exists) return { id: jid, phoneNumber }
    return null
  }

  sendMessage = async (threadID: string, msgContent: MessageContent, options?: MessageSendOptions) => {
    const { mimeType } = msgContent
    let { text } = msgContent
    msgContent.mentionedUserIDs?.forEach(userID => {
      const phoneNumber = removeServer(userID)
      // @+14151231234 => @14151231234
      text = text.replace('@+' + phoneNumber, '@' + phoneNumber)
    })
    const txt = { text } as WATextMessage
    const buffer = msgContent.fileBuffer || (msgContent.filePath ? await fs.readFile(msgContent.filePath) : undefined)

    const chat = this.getChat(threadID)
    const expiration = +chat?.ephemeral
    const commonOps: MessageOptions = {
      sendEphemeral: !!expiration,
      expiration,
      contextInfo: {
        mentionedJid: msgContent.mentionedUserIDs?.map(u => whatsappID(u)),
      },
    }
    const ops: MessageOptions = {
      ...commonOps,
      filename: msgContent.fileName,
      caption: msgContent.text,
      ptt: msgContent.isRecordedAudio,
      duration: msgContent.audioDurationSeconds,
    }

    if (options?.quotedMessageID) {
      const message = await this.client.loadMessage(options.quotedMessageThreadID || threadID, options.quotedMessageID)
      if (message) ops.quoted = message
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
    ops.thumbnail = null
    if (mimeType === 'audio/ogg') ops.ptt = true

    const [
      sentMessage,
      sentMessageCaption,
    ] = await Promise.all([
      this.client.sendMessage(threadID, buffer || txt, messageType, ops),
      messageType === MessageType.document && msgContent.text && this.client.sendMessage(threadID, msgContent.text, MessageType.text, commonOps),
    ])

    if (threadID === whatsappID(this.meContact.jid)) {
      sentMessage.status = WA_MESSAGE_STATUS_TYPE.READ
      if (sentMessageCaption) sentMessageCaption.status = WA_MESSAGE_STATUS_TYPE.READ
    }
    const sent = [mapMessage(sentMessage, this.meContact.jid, this.client.contacts)]
    if (sentMessageCaption) sent.push(mapMessage(sentMessageCaption, this.meContact.jid, this.client.contacts))
    return sent
  }

  forwardMessage = async (threadID: string, messageID: string, threadIDs?: string[], userIDs?: string[]) => {
    const loaded = await this.client.loadMessage(threadID, messageID)
    await bluebird.map(threadIDs, tid => this.client.forwardMessage(tid, loaded))
    return true
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone: boolean) => {
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

  updateThread = async (threadID: string, updates: Partial<Thread>) => {
    if ('title' in updates) {
      if (!isGroupID(threadID)) throw new Error('cannot change title of a individual chat')
      await this.client.groupUpdateSubject(threadID, updates.title)
    }
    if ('messageExpirySeconds' in updates) {
      // await this.client.toggleDisappearingMessages(threadID, updates.messageExpirySeconds)
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
    const chat = this.client.chats.get(threadID)
    if (!chat) throw new Error('modThread: thread not found')

    if ((key in chat) === value) return // already done, nothing to do
    const mod = (value ? key : ('un' + key)) as ChatModification
    await this.client.modifyChat(threadID, mod, 8 * 60 * 60 * 1000)
  }

  private contactForJid = (_jid: string) => {
    const jid = whatsappID(_jid)
    const contact = (this.client.contacts[jid] || { jid }) as WAContact
    if (!contact.imgUrl) contact.imgUrl = this.ppUrl(jid)
    return contact
  }

  private ppUrl = (jid: string) => `asset://${this.accountID}/profile-picture/${jid}`

  private getChat = (jid: string) => this.client.chats.get(jid) as WACompleteChat

  private setGroupChatProperties = async (chat: WACompleteChat) => {
    const { jid } = chat
    try {
      const getGroupData = () => (chat.read_only === 'true' ? this.client.groupMetadataMinimal(jid) : this.client.groupMetadata(jid))
      const meta = await getGroupData()
        .catch(async err => {
          if (!chat.read_only) {
            texts.log('unexpectedly couldn\'t load group, retrying...')
            await bluebird.delay(2500)
            return getGroupData()
          }
          throw err
        })

      chat.ephemeral = (meta as any).ephemeralDuration
      chat.participants = meta.participants.map(p => this.contactForJid(p.id))
      chat.admins = new Set(meta.participants.filter(p => p.isAdmin || p.isSuperAdmin).map(p => whatsappID(p.id)))
      chat.creationEpoch = +meta.creation * 1000
      chat.name = meta.subject || chat.name

      if (!chat.read_only) {
        chat.read_only = (!(meta as any).announce || chat.admins.has(this.meContact.jid)) ? 'false' : 'true'
      }
    } catch (error) {
      texts.log(`failed to get group info for ${jid}: ${error}`)
    }
  }
}
