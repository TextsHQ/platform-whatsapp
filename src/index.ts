import { WAClient, MessageType, MessageOptions, Mimetype, Presence, AuthenticationCredentialsBase64, WAChat, WAContact, ChatModification, Browsers } from '@adiwajshing/baileys'
import { PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult, ConnectionStatus, ServerEventType, Participant, OnConnStateChangeCallback } from '@textshq/platform-sdk'
import path from 'path'
import fs from 'fs'
import { mapMessages, mapContact, WACompleteChat, mapThreads, mapThread } from './mappers'

export default class WhatsAppAPI implements PlatformAPI {
    client = new WAClient ()
    evCallback: OnServerEventCallback = null
    connCallback: OnConnStateChangeCallback = null
    loginCallback: Function = () => { }
    chats: WAChat[] = []
    contacts: WAContact[] = []
    contactMap: Record<string, WAContact> = {}
    chatMap: Record<string, WAChat> = {}
    meContact?: WAContact

    init = (session?: any) => {
        this.client.browserDescription = Browsers.ubuntu ('Chromium') // set to Chromium on Ubuntu 18.04
        this.restoreRession (session)
        this.registerCallbacks ()
        this.connect ()
    }
    restoreRession (session?: any) {
        if (!session) { return }

        if (session.WABrowserId) {
            this.client.loadAuthInfoFromBrowser (session)
        } else if (session.clientToken) {
            this.client.loadAuthInfoFromBase64 (session)
        }
    }
    dispose () { this.client.close () }
    async login () {
        return {type: 'success'} as LoginResult
    }
    logout = async () => { await this.client.logout () }
    connect = async () => {
        const [user, chats, contacts] = await this.client.connect ()
        
        this.chats = chats
        this.contacts = contacts 
        this.contacts.forEach (c => this.contactMap[c.jid] = c)
        this.chats.forEach (c => this.chatMap[c.jid] = c)
        this.meContact = this.contactMap[user.id] || {jid: user.id, name: user.name}

        this.loginCallback ({name: 'ready'})
        this.connCallback ({status: ConnectionStatus.CONNECTED})
    }
    getCurrentUser = async () => {
        const user = this.client.userMetaData
        const pp = await this.client.getProfilePicture (user.id)
        return {id: user.id, displayText: user.name, imgURL: pp}
    }
    serializeSession = () => this.client.base64EncodedAuthInfo ()
    subscribeToEvents = (onEvent: OnServerEventCallback) => { this.evCallback = onEvent }
    onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => { this.connCallback = onEvent }
    unsubscribeToEvents = () => this.evCallback = null
    onLoginEvent = (onEvent: Function) => { this.loginCallback = onEvent }

    registerCallbacks () {
        this.client.onReadyForPhoneAuthentication = keys => {
            const str = keys.join (',')
            this.loginCallback({ name: 'qr', qr: str })
        }
        this.client.setOnMessageStatusChange (update => {
            this.evCallback ([  ])
        })
        this.client.setOnUnreadMessage (true, message => {

        })
        this.client.setOnPresenceUpdate (update => {
            let participantID = update.participant
            if (!participantID && !update.id.includes('@g.us')) {
                participantID = update.id
            }
            const updateType = update.type === Presence.composing ? ServerEventType.PARTICIPANT_TYPING : ServerEventType.PARTICIPANT_STOPPED_TYPING
            this.evCallback ([
                {
                    type: updateType,
                    threadID: update.id,
                    participantID: participantID,
                    durationMs: 1000
                }
            ])
        })
    }

    async searchUsers (typed: string) {
        let results: Participant[] = []
        this.contacts.forEach (c => {
            if (c.name?.toLowerCase().includes(typed) || c.notify?.toLowerCase().includes(typed)) {
                results.push( mapContact (c) )
            }
        })
        return results
    }
    async createThread (userIDs: string[], title: string) {
        let chat: WACompleteChat = {
            jid: '',
            count: 0,
            participants: [],
            imgURL: '',
            t: new Date().getTime().toString(),
            spam: 'false',
            modify_tag: '',
            messages: [],
            title: title
        }
        if (userIDs.length > 1) {
            const meta = await this.client.groupCreate (title, userIDs)
            const participants = Object.keys (meta.participants).map (p => this.contactMap[p] || {jid: p})
            chat.jid = meta.gid
            chat.participants = [this.meContact, ...participants]
        } else if (userIDs.length === 1) {
            chat.jid = userIDs[0]
            chat.participants = [ this.meContact, ...userIDs.map(id => this.contactMap[id] || {jid: id}) ]
            try {
                chat.imgURL = await this.client.getProfilePicture (chat.jid)
            } catch (error) {
                console.log ('error in getting profile pic: ' + error)
            }
        } else {
            throw new Error ('no users provided')
        }
        this.chatMap[chat.jid] = chat
        this.chats.splice (0, 0, chat)
        return mapThread (chat)
    }
    async getThreads (inboxName: InboxName, beforeCursor?: string) {
        if (inboxName === InboxName.REQUESTS) {
            return {items: [], hasMore: false} 
        }
        const page = parseInt (beforeCursor || '0')
        const batchSize = 50
        const lastItem = Math.min ((page+1)*batchSize, this.chats.length)
        
        let chats: WACompleteChat[] = []
        for (let i = page*batchSize; i < lastItem;i++) {
            let chat = this.chats[i] as any
            if (chat.jid.includes('@g.us')) { // is a group
                const metadata = await this.client.groupMetadata (chat.jid)
                chat.title = metadata.subject
                chat.participants = metadata.participants.map (p => this.contacts[p.id] || {jid: p.id})
            } else {
                chat.participants = [ this.contactMap[chat.jid] || {jid: chat.jid} ]
            }
            chat.participants.push (this.meContact)
            chat.imgURL = await this.client.getProfilePicture (chat.jid)
            chats.push (chat)
        }
        return {
            items: mapThreads (chats), 
            hasMore: chats.length >= batchSize, 
            oldestCursor: (page+1).toString() 
        } 
    }
    async searchMessages (typed: string, beforeCursor?: string, threadID?: string) {
        if (threadID) {
            throw new Error('local search in thread not supported yet')
        }
        const page = beforeCursor ? parseInt(beforeCursor) : 0
        const response = await this.client.searchMessages (typed, 25, page)
        return {
            items: mapMessages (response.messages),
            hasMore: !response.last,
            oldestCursor: (page+1).toString()
        }
    }
    async getMessages (threadID: string, cursor: string) {
        const messages = await this.client.loadConversation (threadID, 25, cursor && JSON.parse(cursor))
        const oldestCursor = messages[messages.length-1]?.key
        return {
            items: mapMessages (messages), 
            hasMore: messages.length >= 25, 
            oldestCursor: oldestCursor && JSON.stringify(oldestCursor) 
        }
    }
    async sendTextMessage (threadID: string, text: string, options?: MessageSendOptions) {
        return this.sendMessage (threadID, text, null, options)
    }
    async sendFileFromFilePath (threadID: string, filePath: string, mimeType: string, options?: MessageSendOptions) {
        const { base: fileName } = path.parse(filePath)
        const buffer = await fs.readFileSync(filePath)
        return this.sendFileFromBuffer(threadID, buffer, mimeType, fileName)
    }
    async sendFileFromBuffer (threadID: string, fileBuffer: Buffer, mimeType: string, fileName?: string, options?: MessageSendOptions) {
        return this.sendMessage (threadID, fileBuffer, mimeType, options)
    }
    async sendMessage (threadID: string, content: string | Buffer, mimeType?: string, options?: MessageSendOptions) {
        let chat = this.chatMap[threadID]
        if (!chat) {
            if (threadID.includes('@g.us')) {
                throw new Error (`group ${threadID} not found!`)
            }
            await this.createThread ([threadID], null)
            chat = this.chatMap[threadID]
        }
        const op: MessageOptions = {}
        let messageType: MessageType = MessageType.text
        if (options.quotedMessageID) {
            const list = await this.client.loadConversation (threadID, 1, {id: threadID, fromMe: false})
            if (list.length === 0) {
                throw new Error (`Message ID '${options.quotedMessageID}' does not exist`)
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
                [Mimetype.pdf]: MessageType.document
            }
            messageType = mimetypeMap[mimeType] || MessageType.document
            op.mimetype = mimeType as Mimetype
        }
        const resp = await this.client.sendMessage (threadID.replace ('@c.us', '@s.whatsapp.net'), content, messageType, op)
        const sentMessage = await this.client.loadConversation (threadID, 1, {id: resp.messageID, fromMe: true})
        
        chat.messages.splice (0, 0, sentMessage[0])
        
        return true
    }

    async deleteMessage (threadID: string, messageID: string, forEveryone: boolean) {
        const key = {id: messageID, fromMe: true, remoteJid: this.client.userMetaData.id}
        if (forEveryone) {
            await this.client.deleteMessage (threadID, key)
        } else {
            await this.client.clearMessage (key)
        }
        return true
    }
    async markAsUnread (threadID: string) {
        await this.client.markChatUnread (threadID)
    }
    async sendTypingIndicator (threadID: string, typing: boolean) {
        await this.client.updatePresence (threadID, typing ? Presence.composing : Presence.available)
    }
    async sendReadReceipt (threadID: string, messageID: string) {
        await this.client.sendReadReceipt (threadID, messageID)
    }
    async changeThreadTitle (threadID: string, newTitle: string) {
        await this.client.groupUpdateSubject (threadID, newTitle)
        return true
    }
    async pinThread (threadID: string, pinned: boolean) {
        return this.modThread (threadID, pinned, 'pin')
    }
    async muteThread (threadID: string, muted: boolean) {
        return this.modThread (threadID, muted, 'mute')
    }
    async archiveThread (threadID: string, archived: boolean) {
        return this.modThread (threadID, archived, 'archive')
    }
    protected async modThread (threadID: string, value: boolean, key: 'pin' | 'mute' | 'archive') {
        const chat = this.chatMap[threadID]
        if (!chat) {
            throw new Error ('thread not found')
        }
        if ((key in chat) === value) {
            return // already done, nothing to do
        }
        if (value) {
            const resp = await this.client.modifyChat (threadID, key as ChatModification)
            if (key === 'archive') chat[key] = value ? 'true' : 'false'
            else chat[key] = resp.stamp
        } else {
            await this.client.modifyChat (threadID, ('un' + key) as ChatModification)
            delete chat[key]
        }
    }
}
