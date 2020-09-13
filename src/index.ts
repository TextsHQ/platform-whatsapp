import bluebird from 'bluebird'
import { promises as fs } from 'fs'
import { WAConnection, WA_MESSAGE_STATUS_TYPE, STORIES_JID, MessageType, MessageOptions, Mimetype, Presence, Browsers, ChatModification, WAMessage, WATextMessage, MessageLogLevel, BaileysError, isGroupID, whatsappID, ReconnectMode, unixTimestampSeconds, WAChat, UNAUTHORIZED_CODES } from '@adiwajshing/baileys'
import { texts, PlatformAPI, Message, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, ConnectionState, ConnectionStatus, ServerEventType, Participant, OnConnStateChangeCallback, ReAuthError, CurrentUser, ServerEvent, MessageContent, ConnectionError } from '@textshq/platform-sdk'

import { mapMessage, mapMessages, mapContact, mapThreads, mapThread, mapThreadProps, mapPresenceUpdate } from './mappers'
import { isBroadcastID, numberFromJid, stringHasLink } from './util'
import { WACompleteMessage, WACompleteChat, WACompleteContact } from './types'

const MESSAGE_PAGE_SIZE = 20
const THREAD_PAGE_SIZE = 30

const CONNECT_TIMEOUT_MS = 25_000
const DELAY_CONN_STATUS_CHANGE = 15_000

export default class WhatsAppAPI implements PlatformAPI {
  private client = new WAConnection()

  private evCallback: OnServerEventCallback = () => {}

  private connCallback: OnConnStateChangeCallback = () => {}

  loginCallback: Function

  init = async (session: any) => {
    this.client.logLevel = texts.IS_DEV ? MessageLogLevel.unhandled : MessageLogLevel.none
    this.client.browserDescription = Browsers.appropriate('Chrome')
    this.client.autoReconnect = ReconnectMode.onConnectionLost
    this.client.connectOptions.maxRetries = Infinity
    this.client.connectOptions.timeoutMs = CONNECT_TIMEOUT_MS

    // prevent logging of phone numbers
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

  private connStatusTimeout: NodeJS.Timeout = null

  private lastConnStatus: ConnectionStatus = null

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
      this.connCallback(state)
    }, delay)
  }

  login = async ({ jsCodeResult }): Promise<LoginResult> => {
    texts.log('jsCodeResult', jsCodeResult)
    if (!jsCodeResult) return { type: 'error', errorMessage: "Didn't get any data from login page" }

    const ls = JSON.parse(jsCodeResult)
    if (!('WASecretBundle' in ls)) return { type: 'error', errorMessage: 'Unable to retrieve authentication token' }

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
        if (UNAUTHORIZED_CODES.includes(error.status)) throw new ReAuthError(error.message)
        else if (error.message === 'timed out') throw new ConnectionError('Connection timed out. Make sure your phone is connected to the internet')
      }
      throw error
    }

    this.client.contacts[this.client.user.jid] = this.client.user
    texts.log('connected successfully')
  }

  getCurrentUser = async (): Promise<CurrentUser> => {
    texts.log('requested user data')
    let meContact = this.meContact() as WACompleteContact
    if (!meContact) console.log(`unexpectedly called when state is ${this.client.state}`)
    let attemptsRemaining = 20
    while (!meContact?.jid) {
      await bluebird.delay(50)
      meContact = this.meContact() as WACompleteContact
      if (--attemptsRemaining === 0 && !meContact.jid) {
        throw new Error('unable to get me contact')
      }
    }

    return {
      id: meContact.jid,
      fullName: meContact.name,
      displayText: numberFromJid(meContact.jid),
      phoneNumber: numberFromJid(meContact.jid),
      imgURL: meContact.imgUrl,
    }
  }

  meContact = () => this.client.user

  serializeSession = () => this.client.base64EncodedAuthInfo()

  subscribeToEvents = (onEvent: OnServerEventCallback) => {
    this.evCallback = onEvent
  }

  onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => {
    this.connCallback = onEvent
  }

  private registerCallbacks = async () => {
    this.client
      .on('close', ({ reason, isReconnecting }) => {
        texts.log(`got disconnected: ${reason}`)

        if (reason === 'replaced') return this.setConnStatus({ status: ConnectionStatus.CONFLICT })
        this.setConnStatus({ status: isReconnecting ? ConnectionStatus.CONNECTING : ConnectionStatus.DISCONNECTED })
      })
      .on('connecting', () => {
        this.setConnStatus({ status: ConnectionStatus.CONNECTING })
      })
      .on('open', ({ updatedChats }) => {
        this.setConnStatus({ status: ConnectionStatus.CONNECTED })

        // if this is a reconnect, update the chats
        if (updatedChats) {
          const updates = Object.keys(updatedChats)
            .map<ServerEvent>(threadID => ({ type: ServerEventType.THREAD_MESSAGES_UPDATED, threadID }))

          texts.log(`got ${updates.length} new chats while disconnected`)
          this.evCallback(updates)
        }
      })
      .on('connection-phone-change', ({ connected }) => {
        texts.log(`phone connected: ${connected}`)
        this.setConnStatus({ status: connected ? ConnectionStatus.CONNECTED : ConnectionStatus.DISCONNECTED })
      })
      .on('message-new', async message => {
        const jid = whatsappID(message.key.remoteJid)
        texts.log('received message: ' + jid)
        if (jid === 'status@broadcast') return

        this.evCallback([{ type: ServerEventType.THREAD_MESSAGES_UPDATED, threadID: jid }])
      })
      .on('message-status-update', async update => {
        texts.log(`got update: ${JSON.stringify(update)}`)
        const chat = this.getChat(whatsappID(update.to))
        if (!chat) return

        if (isGroupID(chat.jid)) {
          chat.messages.forEach(msg => {
            if (update.ids.includes(msg.key.id)) {
              const status = update.type
              const cChat = msg as WACompleteMessage

              if (!cChat.info) cChat.info = { reads: [], deliveries: [] }

              const person = { jid: update.participant, t: (Date.now() / 1000).toString() }

              if (status >= WA_MESSAGE_STATUS_TYPE.READ) cChat.info.reads.push(person)
              else if (status >= WA_MESSAGE_STATUS_TYPE.DELIVERY_ACK) cChat.info.deliveries.push(person)

              cChat.status = WA_MESSAGE_STATUS_TYPE.SERVER_ACK
            }
          })
        }
        this.evCallback([{ type: ServerEventType.THREAD_MESSAGES_UPDATED, threadID: chat.jid }])
      })
      .on('user-presence-update', update => {
        texts.log('presence update: ' + JSON.stringify(update))
        if (isBroadcastID(update.id)) return

        const chat = this.getChat(whatsappID(update.id))
        if (!chat) return

        let lastActive = new Date()
        if (!isGroupID(update.id)) {
          if (update.type === Presence.available) chat.isActive = true
          else if (chat.isActive && update.type === Presence.unavailable) chat.isActive = false
          else if (update.t) lastActive = new Date((+update.t) * 1000)
          else lastActive = null
        }

        this.evCallback(mapPresenceUpdate(update, chat, lastActive))
      })
      .on('chat-update', async update => {
        texts.log(`received chat update: ${JSON.stringify(update)}`)
        const chat = await this.loadThread(update.jid)
        this.evCallback([{ type: ServerEventType.THREAD_PROPS_UPDATED, threadID: update.jid, props: mapThreadProps(chat) }])
      })
      .on('message-update', (message: WACompleteMessage) => {
        const jid = whatsappID(message.key.remoteJid)
        if (!this.getChat(jid)) return
        this.evCallback([{ type: ServerEventType.THREAD_MESSAGES_UPDATED, threadID: jid }])
      })
  }

  searchUsers = async (typed: string) => {
    texts.log('searching users ' + typed)
    const typedLower = typed.toLowerCase()
    const results: Participant[] = []
    await bluebird.map(Object.values(this.client.contacts), async (c: WACompleteContact) => {
      if (isGroupID(c.jid) || isBroadcastID(c.jid)) return
      if (!c.name?.toLowerCase().includes(typedLower) && !c.notify?.toLowerCase().includes(typedLower)) return

      if (!c.imgUrl) c.imgUrl = await this.client.getProfilePicture(c.jid).catch(() => '')
      results.push(mapContact(c))
    })
    return results
  }

  loadThread = async (jid: string) => {
    const chat = this.getChat(jid) as WACompleteChat

    if (isGroupID(jid)) {
      await this.setGroupChatProperties(chat)
    } else if (isBroadcastID(jid)) {
      try {
        const meta = await this.client.getBroadcastListInfo(jid)
        chat.participants = await bluebird.map(meta.recipients, p => this.contactForJid(p.id))
      } catch (error) {
        texts.log(`failed to get broadcast info for ${jid}: ${error}`)
      }
    } else chat.participants = [await this.contactForJid(jid), this.meContact()]

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
      messages: [],
      name,
    }

    if (userIDs.length > 1) {
      const meta = await this.client.groupCreate(name, userIDs)
      chat.jid = meta.gid
      await this.setGroupChatProperties(chat)
    } else if (userIDs.length === 1) {
      chat = this.getChat(whatsappID(userIDs[0])) || chat
      chat.jid = whatsappID(userIDs[0])
      chat.participants = [await this.contactForJid(userIDs[0]), this.meContact()]
      chat.imgUrl = chat.participants[0].imgUrl
    } else throw new Error('no users provided')

    return mapThread(chat, this.meContact().jid)
  }

  getThreads = async (inboxName: InboxName, beforeCursor?: string) => {
    if (inboxName !== InboxName.NORMAL) return { items: [], hasMore: false }

    texts.log('requested thread data, page: ' + beforeCursor)

    let { chats, cursor } = await this.client.loadChats(THREAD_PAGE_SIZE, +beforeCursor)
    chats = await bluebird.map(chats, chat => this.loadThread(chat.jid))
    chats = chats.filter(c => c.jid !== STORIES_JID)

    const items = mapThreads(chats as WACompleteChat[], this.meContact().jid)

    return {
      items,
      hasMore: chats.length >= THREAD_PAGE_SIZE,
      oldestCursor: cursor?.toString(),
    }
  }

  searchMessages = async (typed: string, beforeCursor?: string, threadID?: string) => {
    if (!typed) return { items: [], hasMore: false, oldestCursor: '0' }

    const page = beforeCursor ? (+beforeCursor || 1) : 1
    const nextPage = (page + 1).toString()

    texts.log(`searching for ${typed} in ${threadID}, page: ${page}`)

    const response = await this.client.searchMessages(typed, threadID || null, 10, page)
    return {
      items: mapMessages(response.messages, this.meContact().jid),
      hasMore: !response.last,
      oldestCursor: nextPage,
    }
  }

  getMessages = async (threadID: string, bCursor?: string) => {
    texts.log(`loading messages of ${threadID} -- ${bCursor}`)

    const mCursor = bCursor && JSON.parse(bCursor)
    const { messages, cursor } = await this.client.loadMessages(threadID, MESSAGE_PAGE_SIZE, mCursor)

    if (isGroupID(threadID)) {
      await bluebird.map(messages, async (m: WACompleteMessage) => {
        if (m.key.fromMe && !m.info) {
          m.info = await this.client.messageInfo(m.key.remoteJid, m.key.id)
            .catch(() => ({ reads: [], deliveries: [] }))
        }
      })
    }
    // texts.log (`loading messages: ${JSON.stringify(messages.map (m => m.key.id))}`)
    return {
      items: mapMessages(messages, this.meContact().jid),
      hasMore: messages.length >= MESSAGE_PAGE_SIZE || !cursor,
      oldestCursor: cursor && JSON.stringify(cursor),
    }
  }

  sendMessage = async (threadID: string, mContent: MessageContent, options?: MessageSendOptions) => {
    const { mimeType } = mContent
    let content: WATextMessage | Buffer
    if (mContent.fileBuffer || mContent.filePath) {
      content = mContent.fileBuffer || await fs.readFile(mContent.filePath)
    } else if (stringHasLink(mContent.text)) {
      try {
        content = await this.client.generateLinkPreview(mContent.text)
      } catch (error) {
        texts.log('failed to get link preview: ' + error)
        content = { text: mContent.text } as WATextMessage
      }
    } else content = { text: mContent.text } as WATextMessage

    texts.log(`sending message to ${threadID}, options: ${JSON.stringify(options)}`)

    const ops: MessageOptions = {
      filename: mContent.fileName,
      caption: mContent.text,
    }

    let messageType: MessageType = MessageType.text
    if (options?.quotedMessageID) {
      const message = await this.client.loadMessage(threadID, options.quotedMessageID)
      ops.quoted = message
    }

    if (Buffer.isBuffer(content)) {
      if (mimeType === Mimetype.webp) messageType = MessageType.sticker
      else if (mimeType?.includes('image/')) messageType = MessageType.image
      else if (mimeType?.includes('video/')) messageType = MessageType.video
      else if (mimeType?.includes('audio/')) messageType = MessageType.audio
      else messageType = MessageType.document
    }
    if (messageType === MessageType.document) {
      ops.mimetype = mimeType || 'application/octet-stream'
    }

    const sentMessage = await this.client.sendMessage(threadID, content, messageType, ops)
    if (whatsappID(threadID) === whatsappID(this.meContact().jid)) {
      sentMessage.status = WA_MESSAGE_STATUS_TYPE.READ
    }
    return [
      mapMessage(sentMessage, this.meContact().jid),
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

  sendTypingIndicator = async (threadID: string, typing: boolean) => {
    texts.log('send typing:', typing, 'to', threadID, typing)
    await this.client.updatePresence(threadID, typing ? Presence.composing : Presence.paused)
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

  changeParticipantRole? = async (threadID: string, participantID: string, role: 'admin' | 'regular') => {
    if (role === 'admin') await this.client.groupMakeAdmin(threadID, [participantID])
    else if (role === 'regular') await this.client.groupDemoteAdmin(threadID, [participantID])
    return true
  }

  loadDynamicMessage = async (message: Message) => {
    const m = message?._original?.[0] as WAMessage
    if (!m) return message

    const mID = m.key.id
    const content: Partial<Message> = {}
    if (m.message?.videoMessage && !m.message?.videoMessage?.url) {
      texts.log('video url not present yet for ' + mID)
      return content
    }
    texts.log('downloading media: ' + mID)

    try {
      content.attachments = [
        {
          ...message.attachments[0],
          data: await this.client.downloadMediaMessage(m),
        },
      ]
      texts.log('downloaded media: ' + mID)
    } catch (error) {
      texts.log('error in downloading media of ' + mID + ': ' + error)
    }
    return content
  }

  onThreadSelected = async (threadID: string) => {
    if (!threadID) {
      texts.log('set unavailable')
      return
    }
    const jid = threadID
    texts.log(`thread selected: ${jid}`)
    await this.client.updatePresence(jid, Presence.available)
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
    if (!chat) throw new Error(`thread '${threadID}' not found`)

    if ((key in chat) === value) return // already done, nothing to do
    const mod = (value ? key : ('un' + key)) as ChatModification
    await this.client.modifyChat(threadID, mod, 8 * 60 * 60 * 1000)
  }

  private contactForJid = async (jid: string) => {
    jid = whatsappID(jid)
    const contact = (this.client.contacts[jid] || { jid }) as WACompleteContact
    if (!contact.imgUrl) contact.imgUrl = await this.client.getProfilePicture(jid).catch(() => '')
    return contact
  }

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

      chat.participants = await bluebird.map(meta.participants, p => this.contactForJid(p.id))
      chat.admins = new Set(meta.participants.filter(p => p.isAdmin || p.isSuperAdmin).map(p => whatsappID(p.id)))
      chat.creationDate = new Date(+meta.creation * 1000)
      chat.name = meta.subject || chat.name

      if (!chat.read_only) {
        // texts.log (`restrict: ${!meta['restrict'] || chat.admins.has (this.meContact.jid)}`)
        chat.read_only = (!(meta as any).announce || chat.admins.has(this.meContact().jid)) ? 'false' : 'true'
      }
    } catch (error) {
      texts.log(`failed to get group info for ${jid}: ${error}`)
    }
  }
}
