import path from 'path'
import { promises as fs } from 'fs'
import { WAClient, MessageType, MessageOptions, Mimetype, Presence, WAChat, WAContact, Browsers, ChatModification, decodeMediaMessageBuffer, WAMessage, WAMessageProto, WATextMessage } from '@adiwajshing/baileys'
import { PlatformAPI, Message, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, ConnectionStatus, ServerEventType, Participant, OnConnStateChangeCallback, ReAuthError } from '@textshq/platform-sdk'
import { mapMessages, mapContact, WACompleteChat, mapThreads, mapThread, filenameForMessageAttachment, defaultWorkingDirectory, defaultAttachmentsDirectory, mapMessage, isGroupID, whatsappID, WACompleteMessage, isBroadcastID, WACompleteContact } from './mappers'

const MESSAGE_PAGE_SIZE = 15
const THREAD_PAGE_SIZE = 20
const MESSAGE_INFO_STATUS = WAMessageProto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS
const MIMETYPE_MAP = {
  [Mimetype.gif]: MessageType.video,
  [Mimetype.jpeg]: MessageType.image,
  [Mimetype.png]: MessageType.image,
  [Mimetype.mp4]: MessageType.video,
  [Mimetype.webp]: MessageType.sticker,
  [Mimetype.ogg]: MessageType.audio,
  [Mimetype.pdf]: MessageType.document,
}
const URL_REGEX = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
const DEBUG_MODE = true

export default class WhatsAppAPI implements PlatformAPI {
  client = new WAClient()

  evCallback: OnServerEventCallback = null

  connCallback: OnConnStateChangeCallback = null

  loginCallback: Function = () => { }

  chats: WAChat[] = []

  contacts: WAContact[] = []

  contactMap: Record<string, WAContact> = {}

  chatMap: Record<string, WAChat> = {}

  meContact?: WACompleteContact

  init = async (session?: any) => {
    if (DEBUG_MODE) {
      try {
        await fs.mkdir(defaultWorkingDirectory)
      } catch { }
    }
    this.client.browserDescription = Browsers.appropriate('Chrome')
    this.restoreSession(session)
    this.registerCallbacks()

    if (session) {
      try {
        await this.connect()
      } catch (error) {
        this.log('failed connect: ' + error)
        throw new ReAuthError(error)
      }
    } else this.connect()
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

    this.chatMap = {}
    this.contactMap = {}

    this.chats = chats
    this.contacts = contacts
    this.contacts.forEach(c => this.contactMap[whatsappID(c.jid)] = c)
    this.chats.forEach(c => {
      this.chatMap[c.jid] = c
      c.messages = c.messages.reverse()
    })
    this.chats = this.chats.sort((a, b) => (+b.t) - (+a.t))

    this.meContact = this.contactMap[user.id] || { jid: whatsappID(user.id), name: user.name }
    this.meContact.imgURL = await this.safelyGetProfilePicture(this.meContact.jid)
    this.contactMap[whatsappID(user.id)] = this.meContact

    this.log('connected successfully')

    this.contacts.forEach(c => c.jid.includes('@g.us') && this.log(c))

    if (this.loginCallback) this.loginCallback({ name: 'ready' })
    // if (this.connCallback) this.connCallback ({status: ConnectionStatus.CONNECTED})
  }

  getCurrentUser = async () => {
    this.log('requested user data')
    return { id: this.meContact.jid, displayText: this.meContact.name, imgURL: this.meContact.imgURL }
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
    this.client.setOnUnexpectedDisconnect(kind => {
      this.log('disconnect, kind: ' + kind)
      this.connCallback({ status: kind === 'replaced' ? ConnectionStatus.CONFLICT : ConnectionStatus.DISCONNECTED })
    })
    this.client.setOnMessageStatusChange(async update => {
      const chat = this.chatMap[update.to] as WACompleteChat
      this.log(update)
      if (!chat) return
      chat.messages.forEach(chat => {
        if (update.ids.includes(chat.key.id)) {
          const status = update.type
          if (isGroupID(update.to)) {
            const cChat = chat as WACompleteMessage

            if (!cChat.info) cChat.info = { reads: [], deliveries: [] }

            const person = { jid: update.participant, t: (new Date().getTime() / 1000).toString() }

            if (status >= MESSAGE_INFO_STATUS.READ) cChat.info.reads.push(person)
            else if (status >= MESSAGE_INFO_STATUS.DELIVERY_ACK) cChat.info.deliveries.push(person)

            cChat.status = MESSAGE_INFO_STATUS.SERVER_ACK
          } else {
            chat.status = status
          }
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
      this.log('received message: ' + jid)
      let chat = this.chatMap[jid]
      if (!chat) {
        chat = await this.loadThread(jid)
        this.chatMap[chat.jid] = chat
        this.chats.splice(0, 0, chat)
      }
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
    this.log('searching users ' + typed)
    typed = typed.toLowerCase()
    const results: Participant[] = []
    for (const i in this.contacts) {
      const c = this.contacts[i] as WACompleteContact
      if (c.name?.toLowerCase().includes(typed) || c.notify?.toLowerCase().includes(typed)) {
        if (!isGroupID(c.jid)) {
          if (!c.imgURL) c.imgURL = await this.safelyGetProfilePicture(c.jid)
          results.push(mapContact(c))
        }
      }
    }
    return results
  }

  contactForJid = async (jid: string) => {
    const contact = this.contacts[whatsappID(jid)] || { jid }
    if (!contact.imgURL) contact.imgURL = await this.safelyGetProfilePicture(jid)
    return contact as WACompleteContact
  }

  loadThread = async (jid: string) => {
    let chat: WACompleteChat = this.chatMap[whatsappID(jid)] as WACompleteChat
    if (!chat) {
      chat = {
        jid,
        count: 0,
        participants: [],
        imgURL: '',
        t: (new Date().getTime() / 1000).toString(),
        spam: 'false',
        modify_tag: '',
        messages: [],
      }
    }
    if (isGroupID(jid)) {
      try {
        const meta = await this.client.groupCreatorAndParticipants(jid)
        chat.participants = await Promise.all(meta.participants.map(p => this.contactForJid(p.id)))
        chat.creationDate = new Date(+meta.creation * 1000)
      } catch (error) {
        this.log('failed to get group info: ' + error)
      }
      chat.imgURL = await this.safelyGetProfilePicture(chat.jid)
    } else if (isBroadcastID(jid)) {
      try {
        const meta = await this.client.getBroadcastListInfo(jid)
        chat.participants = await Promise.all(meta.recipients.map(p => this.contactForJid(p.id)))
      } catch (error) {
        this.log('failed to get broadcast info: ' + error)
      }
    } else {
      chat.participants = [await this.contactForJid(jid), this.meContact]
    }
    chat.title = this.contactMap[chat.jid]?.name || this.contactMap[chat.jid]?.notify

    return chat
  }

  createThread = async (userIDs: string[], title: string) => {
    let chat: WACompleteChat = {
      jid: '',
      count: 0,
      participants: [],
      imgURL: '',
      t: (new Date().getTime() / 1000).toString(),
      spam: 'false',
      modify_tag: '',
      messages: [],
      title,
    }
    if (userIDs.length > 1) {
      const meta = await this.client.groupCreate(title, userIDs)
      const tasks = Object.keys(meta.participants).map(p => this.contactForJid(p))
      const participants = await Promise.all(tasks)
      chat.jid = meta.gid
      chat.participants = [...participants, this.meContact]
    } else if (userIDs.length === 1) {
      if (this.chatMap[whatsappID(userIDs[0])]) {
        chat = this.chatMap[whatsappID(userIDs[0])] as WACompleteChat
      } else {
        chat.jid = userIDs[0]
      }
      chat.participants = [await this.contactForJid(userIDs[0]), this.meContact]
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

    const chatPromises = this.chats.slice(firstItem, lastItem).map(async (chat: any) => this.loadThread(chat.jid))
    const chats = await Promise.all(chatPromises)
    this.log('done with getting threads')
    return {
      items: mapThreads(chats),
      hasMore: chats.length >= batchSize,
      oldestCursor: (page + 1).toString(),
    }
  }

  searchMessages = async (typed: string, beforeCursor?: string, threadID?: string) => {
    if (!typed) return { items: [], hasMore: false, oldestCursor: '0' }

    const page = beforeCursor ? (parseInt(beforeCursor) || 1) : 1
    const nextPage = (page + 1).toString()

    this.log(`searching for ${typed} in ${threadID}, page: ${page}`)

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
    const messages = (cursor ? await this.client.loadConversation(threadID, batchSize, JSON.parse(cursor)) : this.chatMap[threadID].messages) as WACompleteMessage[]
    if (isGroupID(threadID)) {
      const tasks = messages.map(async m => {
        if (m.key.fromMe && !m.info) {
          try {
            m.info = await this.client.messageInfo(m.key.remoteJid, m.key.id)
          } catch (error) {
            m.info = { reads: [], deliveries: [] }
          }
        }
      })
      await Promise.all(tasks)
    }
    const oldestCursor = messages[messages.length - 1]?.key
    return {
      items: mapMessages(messages),
      hasMore: messages.length >= batchSize || !cursor,
      oldestCursor: oldestCursor && JSON.stringify(oldestCursor),
    }
  }

  sendTextMessage = async (threadID: string, text: string, options?: MessageSendOptions) => {
    let content = { text } as WATextMessage
    if (URL_REGEX.test(text)) {
      try {
        content = await this.client.generateLinkPreview(text)
      } catch (error) {
        this.log('failed to get link preview: ' + error)
      }
    }
    return this.sendMessage(threadID, content, null, options)
  }

  sendFileFromFilePath = async (threadID: string, filePath: string, mimeType: string, options?: MessageSendOptions) => {
    const { base: fileName } = path.parse(filePath)
    const buffer = await fs.readFile(filePath)
    return this.sendFileFromBuffer(threadID, buffer, mimeType, fileName)
  }

  sendFileFromBuffer = async (threadID: string, fileBuffer: Buffer, mimeType: string, fileName?: string, options?: MessageSendOptions) => this.sendMessage(threadID, fileBuffer, mimeType, options)

  sendMessage = async (threadID: string, content: WATextMessage | Buffer, mimeType?: string, options?: MessageSendOptions) => {
    this.log(`sending message to ${threadID}, options: ${JSON.stringify(options)}`)

    let chat = this.chatMap[threadID]
    if (!chat) {
      if (isGroupID(threadID)) throw new Error(`group ${threadID} not found!`)
      await this.createThread([threadID], null)
      chat = this.chatMap[threadID]
    }

    const op: MessageOptions = {}
    let messageType: MessageType = MessageType.text
    if (options?.quotedMessageID) {
      const message = await this.client.loadMessage(threadID, options.quotedMessageID)
      op.quoted = message
    }
    if (mimeType) {
      if (mimeType === Mimetype.webp) messageType = MessageType.sticker
      else if (mimeType.includes('image/')) messageType = MessageType.image
      else if (mimeType.includes('video/')) messageType = MessageType.video
      else if (mimeType.includes('audio/')) messageType = MessageType.audio
      else messageType = MessageType.document
    }

    threadID = threadID.replace('@c.us', '@s.whatsapp.net')
    const response = await this.client.sendMessage(threadID, content, messageType, op)
    const sentMessage = (await this.client.loadConversation(threadID, 1))[0]
    chat.messages.push(sentMessage)
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

  sendReadReceipt = async (threadID: string, messageID: string) => {
    await this.client.sendReadReceipt(threadID, null)
    this.chatMap[threadID].count = 0
  }

  sendTypingIndicator = async (threadID: string, typing: boolean) => {
    this.log('send typing: ' + typing)
    if (typing) {
      await this.client.updatePresence(threadID, Presence.available)
      await this.client.updatePresence(threadID, Presence.composing)
    } else {
      await this.client.updatePresence(threadID, Presence.paused)
    }
  }

  changeThreadTitle = async (threadID: string, newTitle: string) => {
    if (!isGroupID(threadID)) throw new Error('cannot change title of a individual chat')
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
      await this.client.modifyChat(threadID, ('un' + key) as ChatModification, { stamp: chat[key] })
      delete chat[key]
    }
  }

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

  loadDynamicMessage = async (message: Message) => {
    const m = message._original as WAMessage
    const mID = m.key.id
    const mapped = mapMessage(m)
    const downloadMedia = async () => mapped.attachments[0].data = await decodeMediaMessageBuffer(m.message)

    this.log('downloading media: ' + mID)
    try {
      await downloadMedia()
      this.log('downloaded media: ' + mID)
    } catch (error) {
      this.log('downloading media of ' + mID + ' failed, querying latest media')
      try {
        await this.client.updateMediaMessage(m)
        await downloadMedia()
      } catch (error) {
        this.log('error in downloading media of ' + mID + ': ' + error)
        throw error
      }
    }
    return mapped
  }

  takeoverConflict = async () => {
    this.log('taking over again')
    await this.connect()
    this.connCallback({ status: ConnectionStatus.CONNECTED })
    this.log('took over')
  }

  protected async safelyGetProfilePicture(jid: string): Promise<string> {
    return this.client.getProfilePicture(jid).catch(() => null)
  }

  async log(txt) {
    const content = new Date().toLocaleString() + '\t' + JSON.stringify(txt) + '\n'
    console.log(content)
    if (DEBUG_MODE) {
      const file = defaultWorkingDirectory + '/baileys-log.txt'
      await fs.appendFile(file, content)
    }
  }
}
