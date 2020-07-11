import path from 'path'
import { promises as fs } from 'fs'
import { WAClient, MessageType, MessageOptions, Mimetype, Presence, WAChat, WAContact, ChatModification, Browsers, decodeMediaMessage, getNotificationType, WAMessage, WAMessageProto } from '@adiwajshing/baileys'
import { PlatformAPI, Message, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, ConnectionStatus, ServerEventType, Participant, OnConnStateChangeCallback } from '@textshq/platform-sdk'
import { mapMessages, mapContact, WACompleteChat, mapThreads, mapThread, filenameForMessageAttachment, defaultWorkingDirectory, defaultAttachmentsDirectory, mapMessage, isGroupID, whatsappID } from './mappers'

const MESSAGE_PAGE_SIZE = 15
const THREAD_PAGE_SIZE = 20
const MESSAGE_INFO_STATUS = WAMessageProto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS
const MESSAGE_STATUS_MAP = {
  sent: MESSAGE_INFO_STATUS.SERVER_ACK,
  received: MESSAGE_INFO_STATUS.DELIVERY_ACK,
  read: MESSAGE_INFO_STATUS.READ,
  'unknown (4)': MESSAGE_INFO_STATUS.READ,
  'unknown (5)': MESSAGE_INFO_STATUS.PLAYED
}

export default class WhatsAppAPI implements PlatformAPI {
  client = new WAClient()

  evCallback: OnServerEventCallback = null

  connCallback: OnConnStateChangeCallback = null

  loginCallback: Function = () => { }

  chats: WAChat[] = []

  contacts: WAContact[] = []

  contactMap: Record<string, WAContact> = {}

  chatMap: Record<string, WAChat> = {}

  meContact?: WAContact

  init = async (session?: any) => {
    try {
      await fs.mkdir(defaultWorkingDirectory)
      await fs.mkdir(defaultAttachmentsDirectory, { recursive: true })
    } catch { }

    this.client.browserDescription = Browsers.ubuntu('Chrome') // set to Chrome on Ubuntu 18.04
    this.restoreSession(session)
    this.registerCallbacks()

    if (session) await this.connect()
    else this.connect()
  }

  restoreSession = (session?: any) => {
    if (!session) return

    if (session.WABrowserId) {
      this.log('restoring session from browser')
      this.client.loadAuthInfoFromBrowser(session)
    } else if (session.clientToken) {
      this.log('restoring session from base64')
      this.client.loadAuthInfoFromBase64(session)
    }
  }

  dispose = () => {
    this.client.close()
  }

  login = async (): Promise<LoginResult> => ({ type: 'success' })

  logout = async () => { await this.client.logout() }

  connect = async () => {
    this.log('began connect')
    const [user, chats, contacts] = await this.client.connect()

    this.chats = chats
    this.contacts = contacts
    this.contacts.forEach(c => { this.contactMap[c.jid] = c })
    this.chats.forEach(c => {
      this.chatMap[c.jid] = c
      c.messages = c.messages.reverse()
    })
    this.chats = this.chats.sort((a, b) => (+b.t) - (+a.t))
    this.meContact = this.contactMap[user.id] || { jid: whatsappID(user.id), name: user.name }
    this.contactMap[whatsappID(user.id)] = this.meContact
    this.log('connected successfully')

    if (this.loginCallback) this.loginCallback({ name: 'ready' })
    // if (this.connCallback) this.connCallback ({status: ConnectionStatus.CONNECTED})
  }

  getCurrentUser = async () => {
    this.log('requested user data')
    const user = this.client.userMetaData
    const pp = await this.safelyGetProfilePicture(user.id)
    return { id: user.id, displayText: user.name, imgURL: pp }
  }

  serializeSession = () => this.client.base64EncodedAuthInfo()

  subscribeToEvents = (onEvent: OnServerEventCallback) => {
    this.evCallback = onEvent
  }

  onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => {
    this.connCallback = onEvent
    if (this.meContact) this.connCallback({ status: ConnectionStatus.CONNECTED })
  }

  unsubscribeToEvents = () => {
    this.evCallback = null
  }

  onLoginEvent = (onEvent: Function) => {
    this.loginCallback = onEvent
  }

  registerCallbacks = async () => {
    this.client.onReadyForPhoneAuthentication = keys => {
      const str = keys.join(',')
      this.loginCallback({ name: 'qr', qr: str })
    }
    this.client.setOnMessageStatusChange(update => {
      const chat = this.chatMap[update.to]
      this.log(update)
      if (!chat) return
      chat.messages.forEach(chat => {
        if (update.ids.includes(chat.key.id)) {
          chat.status = MESSAGE_STATUS_MAP[update.type] || chat.status
        }
      })
      this.evCallback([
        {
          type: ServerEventType.THREAD_UPDATED,
          threadID: update.to, // todo: test it works when other person sends message in single thread
        },
      ])
    })
    this.client.setOnUnreadMessage(true, async message => {
      const jid = whatsappID(message.key.remoteJid)
      let chat = this.chatMap[jid]
      if (!chat) chat = await this.loadThread(jid)

      chat.messages.push(message)
      this.evCallback([
        {
          type: ServerEventType.THREAD_UPDATED,
          threadID: jid, // todo: test it works when other person sends message in single thread
        },
      ])
    })
    this.client.setOnPresenceUpdate(update => {
      this.log(update)
      let participantID = update.participant
      if (!participantID && !isGroupID(update.id)) {
        participantID = update.id
      }

      const updateType = update.type === Presence.composing ? ServerEventType.PARTICIPANT_TYPING : ServerEventType.PARTICIPANT_STOPPED_TYPING
      this.evCallback([
        {
          type: updateType,
          threadID: update.id,
          participantID,
          durationMs: 1000,
        },
      ])
    })
  }

  searchUsers = async (typed: string) => {
    return this.contacts.map(c => {
      if (c.name?.toLowerCase().includes(typed) || c.notify?.toLowerCase().includes(typed)) {
        if (!isGroupID(c.jid)) return mapContact(c)
      }
    }).filter(Boolean)
  }

  loadThread = async (jid: string) => {
    const chat: WACompleteChat = {
      jid,
      count: 0,
      participants: [],
      imgURL: '',
      t: (new Date().getTime()/1000).toString(),
      spam: 'false',
      modify_tag: '',
      messages: [],
    }
    if (isGroupID(jid)) {
      const meta = await this.client.groupMetadata(jid)
      const participants = Object.keys(meta.participants).map(p => this.contactMap[p] || { jid: p })
      chat.title = meta.subject
      chat.participants = [...participants, this.meContact]
    } else if (jid.includes('@c.us')) {
      chat.participants = [this.contactMap[jid] || { jid }, this.meContact]
      chat.imgURL = await this.safelyGetProfilePicture(chat.jid)
    } else {
      throw new Error('unsupported JID: ' + jid)
    }

    this.chatMap[chat.jid] = chat
    this.chats.splice(0, 0, chat)
    return chat
  }
  createThread = async (userIDs: string[], title: string) => {
    const chat: WACompleteChat = {
      jid: '',
      count: 0,
      participants: [],
      imgURL: '',
      t: (new Date().getTime()/1000).toString(),
      spam: 'false',
      modify_tag: '',
      messages: [],
      title,
    }
    if (userIDs.length > 1) {
      const meta = await this.client.groupCreate(title, userIDs)
      const participants = Object.keys(meta.participants).map(p => this.contactMap[p] || { jid: p })
      chat.jid = meta.gid
      chat.participants = [...participants, this.meContact]
    } else if (userIDs.length === 1) {
      chat.jid = userIDs[0]
      chat.participants = [...userIDs.map(id => this.contactMap[id] || { jid: id }), this.meContact]
      chat.imgURL = await this.safelyGetProfilePicture(chat.jid)
    } else {
      throw new Error('no users provided')
    }
    this.chatMap[chat.jid] = chat
    this.chats.splice(0, 0, chat)
    return mapThread(chat)
  }

  getThreads = async (inboxName: InboxName, beforeCursor?: string) => {
    if (inboxName !== InboxName.NORMAL) {
      return { items: [], hasMore: false }
    }
    this.log('requested thread data, page: ' + beforeCursor)

    const page = parseInt(beforeCursor || '0', 10)
    const batchSize = THREAD_PAGE_SIZE
    const firstItem = page * batchSize
    const lastItem = Math.min((page + 1) * batchSize, this.chats.length)

    const chatPromises = this.chats.slice(firstItem, lastItem).map(async _chat => {
      const chat = _chat as any
      if (isGroupID(chat.jid)) { // is a group
        try {
          const metadata = await this.client.groupMetadata(chat.jid)
          chat.title = metadata.subject
          chat.participants = metadata.participants.map(p => this.contactMap[p.id] || { jid: p.id })
        } catch (err) {
          chat.title = 'Unknown Title'
          chat.participants = []
          this.log(`error in getting group ${chat.jid}: ${err}`)
        }
      } else {
        chat.participants = [this.contactMap[chat.jid] || { jid: chat.jid }, this.meContact]
      }
      chat.imgURL = await this.safelyGetProfilePicture(chat.jid)
      return chat as WACompleteChat
    })
    const chats = await Promise.all(chatPromises)
    this.log('done with getting threads')
    return {
      items: mapThreads(chats),
      hasMore: chats.length >= batchSize,
      oldestCursor: (page + 1).toString(),
    }
  }

  searchMessages = async (typed: string, beforeCursor?: string, threadID?: string) => {
    if (!typed) return {items: [], hasMore: false, oldestCursor: '0'}

    const page = beforeCursor ? (parseInt(beforeCursor) || 1) : 1
    const nextPage = (page + 1).toString()
    this.log (`searching for ${typed} in ${threadID}, page: ${page}`)
    const response = await this.client.searchMessages(typed, threadID || null, 10, page)
    return {
      items: mapMessages(response.messages),
      hasMore: !response.last,
      oldestCursor: nextPage,
    }
  }

  getMessages = async (threadID: string, cursor?: string) => {
    this.log(`loading messages of ${threadID} ${cursor}`)
    const batchSize = MESSAGE_PAGE_SIZE
    const messages = cursor ? await this.client.loadConversation(threadID, batchSize, JSON.parse(cursor)) : this.chatMap[threadID].messages
    const oldestCursor = messages[messages.length - 1]?.key
    return {
      items: mapMessages(messages),
      hasMore: messages.length >= batchSize || !cursor,
      oldestCursor: oldestCursor && JSON.stringify(oldestCursor),
    }
  }

  sendTextMessage = async (threadID: string, text: string, options?: MessageSendOptions) => this.sendMessage(threadID, text, null, options)

  sendFileFromFilePath = async (threadID: string, filePath: string, mimeType: string, options?: MessageSendOptions) => {
    const { base: fileName } = path.parse(filePath)
    const buffer = await fs.readFile(filePath)
    return this.sendFileFromBuffer(threadID, buffer, mimeType, fileName)
  }

  sendFileFromBuffer = async (threadID: string, fileBuffer: Buffer, mimeType: string, fileName?: string, options?: MessageSendOptions) => this.sendMessage(threadID, fileBuffer, mimeType, options)

  sendMessage = async (threadID: string, content: string | Buffer, mimeType?: string, options?: MessageSendOptions) => {
    this.log(`sending message to ${threadID}`)
    let chat = this.chatMap[threadID]
    if (!chat) {
      if (isGroupID(threadID)) {
        throw new Error(`group ${threadID} not found!`)
      }
      await this.createThread([threadID], null)
      chat = this.chatMap[threadID]
    }
    const op: MessageOptions = {}
    let messageType: MessageType = MessageType.text
    if (options?.quotedMessageID) {
      const list = await this.client.loadConversation(threadID, 1, { id: threadID, fromMe: false })
      if (list.length === 0) {
        throw new Error(`Message ID '${options.quotedMessageID}' does not exist`)
      }
      op.quoted = list[0]
    }
    if (mimeType) {
      const mimetypeMap = {
        [Mimetype.gif]: MessageType.video,
        [Mimetype.jpeg]: MessageType.image,
        [Mimetype.mp4]: MessageType.video,
        [Mimetype.webp]: MessageType.sticker,
        [Mimetype.ogg]: MessageType.audio,
        [Mimetype.pdf]: MessageType.document,
      }
      messageType = mimetypeMap[mimeType] || MessageType.document
      op.mimetype = mimeType as Mimetype
    }

    await this.client.sendMessage(threadID.replace('@c.us', '@s.whatsapp.net'), content, messageType, op)
    const sentMessage = await this.client.loadConversation(threadID, 1)

    chat.messages.push(sentMessage[0])
    return true
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone: boolean) => {
    const key = { id: messageID, fromMe: true, remoteJid: this.client.userMetaData.id }
    if (forEveryone) {
      await this.client.deleteMessage(threadID, key)
    } else {
      await this.client.clearMessage(key)
    }
    return true
  }

  markAsUnread = async (threadID: string) => {
    await this.client.sendReadReceipt(threadID, null, 'unread')
    this.chatMap[threadID].count = -1
  }

  sendTypingIndicator = async (threadID: string, typing: boolean) => {
    // await this.client.updatePresence(threadID, Presence.available)
    if (typing) await this.client.updatePresence(threadID, Presence.composing)
  }

  sendReadReceipt = async (threadID: string, messageID: string) => {
    await this.client.sendReadReceipt(threadID, null)
    this.chatMap[threadID].count = 0
  }

  changeThreadTitle = async (threadID: string, newTitle: string) => {
    await this.client.groupUpdateSubject(threadID, newTitle)
    return true
  }

  pinThread = (threadID: string, pinned: boolean) =>
    this.modThread(threadID, pinned, 'pin')

  muteThread = (threadID: string, muted: boolean) =>
    this.modThread(threadID, muted, 'mute')

  archiveThread = (threadID: string, archived: boolean) =>
    this.modThread(threadID, archived, 'archive')

  protected async modThread(threadID: string, value: boolean, key: 'pin' | 'mute' | 'archive') {
    this.log(`modifying thread ${threadID} ${key}: ${value}`)
    const chat = this.chatMap[threadID]
    if (!chat) {
      throw new Error('thread not found')
    }
    if ((key in chat) === value) {
      return // already done, nothing to do
    }
    if (value) {
      const resp = await this.client.modifyChat(threadID, key as ChatModification)
      if (key === 'archive') chat[key] = value ? 'true' : 'false'
      else chat[key] = resp.stamp
    } else {
      await this.client.modifyChat(threadID, ('un' + key) as ChatModification)
      delete chat[key]
    }
  }

  loadDynamicMessage = async (message: Message) => {
    const m = message._original as WAMessage
    const filename = filenameForMessageAttachment(m.key.id)

    try {
      await fs.access(filename)
    } catch {
      this.log('downloading media: ' + filename)
      try {
        await decodeMediaMessage(m.message, filename, false)
        this.log('downloaded media: ' + filename)
      } catch (error) {
        this.log('error in downloading media of ' + filename + ': ' + error)
      }
    }
    const mapped = mapMessage(m)
    mapped.attachments[0].data = await fs.readFile(filename)
    return mapped
  }

  protected async safelyGetProfilePicture(jid: string): Promise<string> {
    return this.client.getProfilePicture(jid).catch(() => null)
  }

  async log(txt) {
    const content = new Date().toLocaleString() + '\t' + JSON.stringify(txt) + '\n'
    const file = defaultWorkingDirectory + '/baileys-log.txt'
    await fs.appendFile(file, content)
  }
}
