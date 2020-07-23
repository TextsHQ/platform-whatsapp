import path from 'path'
import bluebird from 'bluebird'
import { promises as fs } from 'fs'
import { WAClient, MessageType, MessageOptions, Mimetype, Presence, WAChat, Browsers, ChatModification, decodeMediaMessageBuffer, WAMessage, WAMessageProto, WATextMessage, MessageLogLevel, UserMetaData, WAContact } from '@adiwajshing/baileys'
import { texts, PlatformAPI, Message, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, ConnectionStatus, ServerEventType, Participant, OnConnStateChangeCallback, ReAuthError, CurrentUser, ServerEvent } from '@textshq/platform-sdk'

import { mapMessages, mapContact, mapThreads, mapThread, mapMessage } from './mappers'
import { whatsappID, isGroupID, isBroadcastID, numberFromJid, normalizeThreadID, stringHasLink } from './util'
import { WACompleteMessage, WACompleteChat, WACompleteContact } from './types'

const MESSAGE_PAGE_SIZE = 15
const THREAD_PAGE_SIZE = 20

const { WEB_MESSAGE_INFO_STUBTYPE, WEB_MESSAGE_INFO_STATUS } = WAMessageProto.proto.WebMessageInfo

export default class WhatsAppAPI implements PlatformAPI {
  client = new WAClient()

  evCallback: OnServerEventCallback = () => {}

  connCallback: OnConnStateChangeCallback = () => {}

  loginCallback: Function = () => {}

  chats: WAChat[] = []

  chatMap: {[k: string]: WAChat} = {}

  contacts: WACompleteContact[] = []

  contactMap: {[k: string]: WACompleteContact} = {}

  meContact?: WACompleteContact

  isActive = true

  init = async (session?: any) => {
    this.client.logLevel = texts.IS_DEV ? MessageLogLevel.unhandled : MessageLogLevel.none
    this.client.browserDescription = Browsers.appropriate('Chrome')
    this.isActive = true

    this.restoreSession(session)
    this.registerCallbacks()

    if (session) {
      try {
        await this.connect()
      } catch (error) {
        texts.log(`failed connect: ${error}`)
        if (error.toString() !== 'Disposed') throw new ReAuthError(error)
      }
    } else this.connect()
  }

  restoreSession = (session?: any) => {
    if (!session) return

    if (session.WABrowserId) {
      texts.log('restoring session from browser')
      this.client.loadAuthInfoFromBrowser(session)
    } else if (session.clientToken) {
      texts.log('restoring session from base64')
      this.client.loadAuthInfoFromBase64(session)
    }
  }

  dispose = () => {
    this.isActive = false
    this.client.close()
  }

  login = async (): Promise<LoginResult> => ({ type: 'success' })

  logout = async () => { await this.client.logout() }

  connect = async () => {
    texts.log('began connect')

    const [user, chats, contacts] = await this.connectClient()

    this.chats = chats
    this.contacts = contacts
    contacts.forEach(c => {
      this.contactMap[whatsappID(c.jid)] = c
    })
    chats.forEach(c => {
      this.chatMap[c.jid] = c
      c.messages = c.messages.reverse()
    })
    this.chats = this.chats.sort((a, b) => (+b.t) - (+a.t))

    this.meContact = { jid: whatsappID(user.id), name: user.name }
    this.meContact.imgURL = await this.safelyGetProfilePicture(this.meContact.jid)
    this.contactMap[this.meContact.jid] = this.meContact

    texts.log('connected successfully')

    this.loginCallback({ name: 'ready' })
    // if (this.connCallback) this.connCallback ({status: ConnectionStatus.CONNECTED})
  }

  private connectClient = () => {
    const loop = () => {
      if (!this.isActive) throw new Error('Disposed')
      return this.client.connect(null, 25000).catch(err => {
        if (err.toString().toLowerCase() === 'timed out') {
          texts.log('connect timed out, reconnecting...')
          return loop()
        }
        throw err
      })
    }
    return loop() as Promise<[UserMetaData, WAChat[], WAContact[]]>
  }

  getCurrentUser = async (): Promise<CurrentUser> => {
    texts.log('requested user data')
    return {
      id: this.meContact.jid,
      fullName: this.meContact.name,
      displayText: numberFromJid(this.meContact.jid),
      imgURL: this.meContact.imgURL,
    }
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
    this.evCallback = () => {}
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
      texts.log('disconnect, kind: ' + kind)
      this.connCallback({ status: kind === 'replaced' ? ConnectionStatus.CONFLICT : ConnectionStatus.DISCONNECTED })
    })
    this.client.setOnMessageStatusChange(async update => {
      const chat = this.chatMap[update.to] as WACompleteChat
      if (!chat) return
      texts.log(`got update: ${JSON.stringify(update)}`)
      chat.messages.forEach(msg => {
        if (update.ids.includes(msg.key.id)) {
          const status = update.type
          if (isGroupID(update.to)) {
            const cChat = msg as WACompleteMessage

            if (!cChat.info) cChat.info = { reads: [], deliveries: [] }

            const person = { jid: update.participant, t: (Date.now() / 1000).toString() }

            if (status >= WEB_MESSAGE_INFO_STATUS.READ) cChat.info.reads.push(person)
            else if (status >= WEB_MESSAGE_INFO_STATUS.DELIVERY_ACK) cChat.info.deliveries.push(person)

            cChat.status = WEB_MESSAGE_INFO_STATUS.SERVER_ACK
          } else {
            msg.status = status
          }
        }
      })
      this.evCallback([{ type: ServerEventType.THREAD_UPDATED, threadID: update.to }])
    })
    this.client.setOnUnreadMessage(true, async message => {
      const jid = whatsappID(message.key.remoteJid)
      texts.log('received message: ' + jid)

      if (jid === 'status@broadcast') return

      let chat = this.chatMap[jid]
      if (!chat) {
        chat = await this.loadThread(jid, message)
        this.chats.unshift(chat)
      } else {
        if (chat.messages.find(m => m.key.id === message.key.id)) {
          texts.log('received duplicate message in onUnreadMessage: ' + JSON.stringify(message))
          return
        }
        await this.addMessage(message)
      }
      chat.messages = chat.messages.slice(chat.messages.length - MESSAGE_PAGE_SIZE, chat.messages.length)

      this.evCallback([{ type: ServerEventType.THREAD_UPDATED, threadID: jid }])
    })
    this.client.setOnPresenceUpdate(update => {
      texts.log('presence update: ' + JSON.stringify(update))
      let participantID = update.participant
      if (!participantID && !isGroupID(update.id)) participantID = update.id

      const updateType = update.type === Presence.composing ? ServerEventType.PARTICIPANT_TYPING : ServerEventType.PARTICIPANT_STOPPED_TYPING
      this.evCallback([
        {
          type: updateType,
          threadID: update.id,
          participantID,
          durationMs: 3000,
        },
      ])
    })
    this.client.registerCallback(['action', 'add:update', 'message'], json => {
      const message: WAMessage = json[2][0][2]
      const jid = whatsappID(message.key.remoteJid)
      const chat = this.chatMap[jid]

      texts.log('received updated message for chat: ' + jid)

      if (!chat) return

      const messageIndex = chat.messages.findIndex(m => m.key.id === message.key.id)
      if (messageIndex >= 0) {
        chat.messages[messageIndex] = message
        this.evCallback([{ type: ServerEventType.THREAD_UPDATED, threadID: jid }])
      }
    })
    this.client.registerCallback(['action', null, 'chat'], json => {
      texts.log('chat action ' + JSON.stringify(json))
      json = json[2][0]

      const updateType = json[1].type
      const jid = json[1]?.jid
      const index = this.chats.findIndex(chat => chat.jid === jid)
      const chat = this.chatMap[jid]

      if (!chat) return

      switch (updateType) {
        case 'delete':
          delete this.chatMap[jid]
          if (index >= 0) delete this.chats[index]
          break
        case 'clear':
          json[2].forEach(item => chat.messages.filter(m => m.key.id !== item[1].index))
          break
        case 'archive':
          this.chatMap[jid].archive = 'true'
          break
        case 'unarchive':
          delete this.chatMap[jid].archive
          break
        case 'pin':
          this.chatMap[jid].pin = json[1].pin
          break
      }
      this.evCallback([{ type: ServerEventType.THREAD_UPDATED, threadID: jid }])
    })
    this.client.registerCallback(['Cmd', 'type:picture'], async json => {
      const jid = whatsappID(json[1].jid || '')
      const chat = this.chatMap[jid] as WACompleteChat

      if (!chat) return

      chat.imgURL = await this.safelyGetProfilePicture(jid)
      this.evCallback([{ type: ServerEventType.THREAD_UPDATED, threadID: jid }])
    })
  }

  searchUsers = async (typed: string) => {
    texts.log('searching users ' + typed)
    typed = typed.toLowerCase()
    const results: Participant[] = []

    await bluebird.map(this.contacts, async contact => {
      const c = contact as WACompleteContact
      if (c.name?.toLowerCase().includes(typed) || c.notify?.toLowerCase().includes(typed)) {
        if (!isGroupID(c.jid)) {
          if (!c.imgURL) c.imgURL = await this.safelyGetProfilePicture(c.jid)
          results.push(mapContact(c))
        }
      }
    })
    return results
  }

  private contactForJid = async (jid: string) => {
    jid = whatsappID(jid)
    const contact = this.contactMap[jid] || { jid }
    if (!contact.imgURL) contact.imgURL = await this.safelyGetProfilePicture(jid)
    return contact
  }

  loadThread = async (jid: string, addedMessage?: WAMessage) => {
    let chat: WACompleteChat = this.chatMap[whatsappID(jid)] as WACompleteChat
    if (chat) {
      chat.participants = []
    } else {
      chat = {
        jid,
        count: 0,
        participants: [],
        imgURL: '',
        t: (Date.now() / 1000).toString(),
        spam: 'false',
        modify_tag: '',
        messages: [],
      }
      this.chatMap[whatsappID(jid)] = chat
    }
    if (addedMessage) await this.addMessage(addedMessage)

    if (isGroupID(jid)) {
      await this.setGroupChatProperties(chat)
    } else if (isBroadcastID(jid)) {
      try {
        const meta = await this.client.getBroadcastListInfo(jid)
        chat.participants = await bluebird.map(meta.recipients, p => this.contactForJid(p.id))
      } catch (error) {
        texts.log(`failed to get broadcast info for ${jid}: ${error}`)
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
      t: (Date.now() / 1000).toString(),
      spam: 'false',
      modify_tag: '',
      messages: [],
      title,
    }
    if (userIDs.length > 1) {
      const meta = await this.client.groupCreate(title, userIDs)
      chat.jid = meta.gid
      await this.setGroupChatProperties(chat)
    } else if (userIDs.length === 1) {
      if (this.chatMap[whatsappID(userIDs[0])]) chat = this.chatMap[whatsappID(userIDs[0])] as WACompleteChat
      else chat.jid = userIDs[0]

      chat.participants = [await this.contactForJid(userIDs[0]), this.meContact]
      chat.imgURL = await this.safelyGetProfilePicture(chat.jid)
    } else {
      throw new Error('no users provided')
    }
    this.chatMap[chat.jid] = chat
    this.chats.unshift(chat)
    return mapThread(chat)
  }

  async setGroupChatProperties(chat: WACompleteChat) {
    const { jid } = chat
    try {
      const meta = await (chat.read_only === 'true' ? this.client.groupMetadataMinimal(jid) : this.client.groupMetadata(jid))
      chat.participants = await bluebird.map(meta.participants, p => this.contactForJid(p.id))
      chat.admins = new Set(meta.participants.filter(p => p.isAdmin).map(p => whatsappID(p.id)))
      chat.creationDate = new Date(+meta.creation * 1000)
    } catch (error) {
      texts.log(`failed to get group info for ${jid}: ${error}`)
    }
    chat.imgURL = await this.safelyGetProfilePicture(chat.jid)
  }

  getThreads = async (inboxName: InboxName, beforeCursor?: string) => {
    if (inboxName !== InboxName.NORMAL) return { items: [], hasMore: false }

    texts.log('requested thread data, page: ' + beforeCursor)

    const page = parseInt(beforeCursor || '0', 10)
    const batchSize = THREAD_PAGE_SIZE
    const firstItem = page * batchSize
    const lastItem = Math.min((page + 1) * batchSize, this.chats.length)

    const chats = await bluebird.map(this.chats.slice(firstItem, lastItem), chat => this.loadThread(chat.jid))
    texts.log('done with getting threads')
    return {
      items: mapThreads(chats),
      hasMore: chats.length >= batchSize,
      oldestCursor: (page + 1).toString(),
    }
  }

  searchMessages = async (typed: string, beforeCursor?: string, threadID?: string) => {
    if (!typed) return { items: [], hasMore: false, oldestCursor: '0' }

    const page = beforeCursor ? (+beforeCursor || 1) : 1
    const nextPage = (page + 1).toString()

    texts.log(`searching for ${typed} in ${threadID}, page: ${page}`)

    const response = await this.client.searchMessages(typed, threadID || null, 10, page)
    return {
      items: mapMessages(response.messages),
      hasMore: !response.last,
      oldestCursor: nextPage,
    }
  }

  getMessages = async (threadID: string, cursor?: string) => {
    texts.log(`loading messages of ${threadID} -- ${cursor}`)

    const batchSize = MESSAGE_PAGE_SIZE
    const messages = (cursor ? await this.client.loadConversation(threadID, batchSize, JSON.parse(cursor)) : this.chatMap[threadID].messages) as WACompleteMessage[]
    if (isGroupID(threadID)) {
      await bluebird.map(messages, async m => {
        if (m.key.fromMe && !m.info) {
          m.info = await this.client.messageInfo(m.key.remoteJid, m.key.id)
            .catch(() => ({ reads: [], deliveries: [] }))
        }
      })
    }
    // texts.log (`loading messages: ${JSON.stringify(messages.map (m => m.key.id))}`)
    const oldestCursor = messages[messages.length - 1]?.key
    return {
      items: mapMessages(messages),
      hasMore: messages.length >= batchSize || !cursor,
      oldestCursor: oldestCursor && JSON.stringify(oldestCursor),
    }
  }

  sendTextMessage = async (threadID: string, text: string, options?: MessageSendOptions) => {
    let content = { text } as WATextMessage
    if (stringHasLink(text)) {
      try {
        content = await this.client.generateLinkPreview(text)
      } catch (error) {
        texts.log('failed to get link preview: ' + error)
      }
    }
    return this.sendMessage(threadID, content, undefined, undefined, options)
  }

  sendFileFromFilePath = async (threadID: string, filePath: string, mimeType: string, options?: MessageSendOptions) => {
    const { base: fileName } = path.parse(filePath)
    const buffer = await fs.readFile(filePath)
    return this.sendFileFromBuffer(threadID, buffer, mimeType, fileName)
  }

  sendFileFromBuffer = async (threadID: string, fileBuffer: Buffer, mimeType: string, fileName?: string, options?: MessageSendOptions) =>
    this.sendMessage(threadID, fileBuffer, mimeType, fileName, options)

  sendMessage = async (threadID: string, content: WATextMessage | Buffer, mimeType?: string, fileName?: string, options?: MessageSendOptions) => {
    texts.log(`sending message to ${threadID}, options: ${JSON.stringify(options)}`)

    let chat = this.chatMap[threadID]
    if (!chat) {
      if (isGroupID(threadID)) throw new Error(`group ${threadID} not found!`)
      await this.createThread([threadID], null)
      chat = this.chatMap[threadID]
    }

    const ops: MessageOptions = {
      filename: fileName,
    }
    let messageType: MessageType = MessageType.text
    if (options?.quotedMessageID) {
      const message = await this.client.loadMessage(threadID, options.quotedMessageID)
      ops.quoted = message
    }
    if (mimeType) {
      if (mimeType === Mimetype.webp) messageType = MessageType.sticker
      else if (mimeType.includes('image/')) messageType = MessageType.image
      else if (mimeType.includes('video/')) messageType = MessageType.video
      else if (mimeType.includes('audio/')) messageType = MessageType.audio
      else messageType = MessageType.document
    }
    if (messageType === MessageType.document) {
      ops.mimetype = mimeType as Mimetype
    }

    threadID = normalizeThreadID(threadID)

    const response = await this.client.sendMessage(threadID, content, messageType, ops)
    const sentMessage = response.message// (await this.client.loadConversation(threadID, 1))[0]

    if (whatsappID(threadID) === whatsappID(this.meContact.jid)) {
      sentMessage.status = WEB_MESSAGE_INFO_STATUS.READ
    }
    this.addMessage(sentMessage)
    return true
  }

  deleteMessage = async (threadID: string, messageID: string, forEveryone: boolean) => {
    threadID = normalizeThreadID(threadID)

    texts.log(`deleting message: ${messageID} in ${threadID}`)

    const message = await this.client.loadMessage(threadID, messageID)
    if (forEveryone) await this.client.deleteMessage(threadID, message.key)
    else await this.client.clearMessage(message.key)

    return true
  }

  markAsUnread = async (threadID: string) => {
    await this.client.sendReadReceipt(threadID, null, 'unread')
    this.chatMap[threadID].count = -1
  }

  sendReadReceipt = async (threadID: string, messageID: string) => {
    await this.client.sendReadReceipt(threadID, messageID, 'read')
    this.chatMap[threadID].count = 0
  }

  sendTypingIndicator = async (threadID: string, typing: boolean) => {
    texts.log('send typing 2: ' + typing)
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

  changeThreadImage = async (threadID: string, imageBuffer: Buffer, mimeType: string) => {
    const chat = this.chatMap[threadID] as WACompleteChat
    texts.log('changing profile picture of ' + threadID)
    if (!chat) new Error(`chat ${threadID} not present`)

    const response = await this.client.updateProfilePicture(threadID, imageBuffer)
    chat.imgURL = response.eurl
  }

  pinThread = (threadID: string, pinned: boolean) =>
    this.modThread(threadID, pinned, 'pin')

  muteThread = (threadID: string, muted: boolean) =>
    this.modThread(threadID, muted, 'mute')

  archiveThread = (threadID: string, archived: boolean) =>
    this.modThread(threadID, archived, 'archive')

  private async modThread(threadID: string, value: boolean, key: 'pin' | 'mute' | 'archive') {
    texts.log(`modifying thread ${threadID} ${key}: ${value}`)
    const chat = this.chatMap[threadID]

    if (!chat) throw new Error('thread not found')
    if ((key in chat) === value) return // already done, nothing to do

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

  changeParticipantRole? = async (threadID: string, participantID: string, role: 'admin' | 'regular') => {
    if (role === 'admin') await this.client.groupMakeAdmin(threadID, [participantID])
    else if (role === 'regular') await this.client.groupDemoteAdmin(threadID, [participantID])
    return true
  }

  loadDynamicMessage = async (message: Message) => {
    const m = message?._original?.[0] as WAMessage
    if (!m) return message
    const mID = m.key.id
    const mapped = mapMessage(m)

    if (m.message?.videoMessage && !m.message?.videoMessage?.url) return mapped

    const downloadMedia = async () => {
      mapped.attachments[0].data = await decodeMediaMessageBuffer(m.message)
    }

    texts.log('downloading media: ' + mID)
    try {
      await downloadMedia()
      texts.log('downloaded media: ' + mID)
    } catch (error) {
      texts.log('downloading media of ' + mID + ' failed, querying latest media')
      try {
        await this.client.updateMediaMessage(m)
        await downloadMedia()
      } catch (error) {
        texts.log('error in downloading media of ' + mID + ': ' + error)
        throw error
      }
    }
    return mapped
  }

  takeoverConflict = async () => {
    texts.log('taking over again')
    const oldChats = this.chats
    await this.connect()
    this.connCallback({ status: ConnectionStatus.CONNECTED })
    texts.log('took over')

    const updates = oldChats.map<ServerEvent>(chat => {
      const chatNew = this.chatMap[chat.jid]
      const lastMessage = chat.messages.slice(-1)[0]
      const lastMessage2 = chatNew.messages?.slice(-1)[0]
      if (chat.modify_tag !== chatNew?.modify_tag || lastMessage.key.id !== lastMessage2.key.id) {
        return { type: ServerEventType.THREAD_UPDATED, threadID: chat.jid }
      }
      return null
    })
    this.evCallback(updates.filter(Boolean))
  }

  private async addMessage(message: WAMessage) {
    const chat = this.chatMap[whatsappID(message.key.remoteJid)] as WACompleteChat
    const protocolMessage = message.message?.protocolMessage
    if (protocolMessage) {
      if (protocolMessage.type === WAMessageProto.proto.ProtocolMessage.PROTOCOL_MESSAGE_TYPE.REVOKE) {
        const found = chat.messages.find(m => m.key.id === protocolMessage.key.id)
        if (found) {
          found.messageStubType = WEB_MESSAGE_INFO_STUBTYPE.REVOKE
          found.message = null
        }
      } else {
        texts.log('unimplemented', protocolMessage)
        // not implemented
      }
    } else if (!chat.messages.find(m => m.key.id === message.key.id)) chat.messages.push(message)

    if (message.messageStubParameters.length > 0) {
      const jid = whatsappID(message.messageStubParameters[0])

      switch (message.messageStubType) {
        case WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_ADD:
        case WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_INVITE:
          texts.log(`${jid} was added to ${chat.jid}`)
          chat.participants.push(await this.contactForJid(jid))
          break
        case WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_LEAVE:
        case WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_REMOVE:
          texts.log(`${jid} was removed from ${chat.jid}`)
          chat.participants = chat.participants.filter(p => p.jid !== jid)
          break
      }
    }
  }

  private async safelyGetProfilePicture(jid: string): Promise<string> {
    return this.client.getProfilePicture(jid).catch(() => null)
  }
}
