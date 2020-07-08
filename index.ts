import { WAClient, MessageType, MessageOptions, Mimetype, Presence, AuthenticationCredentialsBase64, WAChat, WAContact } from '@adiwajshing/baileys'
import { PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName, LoginResult } from '@texts/platform-sdk'
import path from 'path'
import fs from 'fs'
import { mapMessages, mapContact, WACompleteChat, mapThreads } from './mappers'
import { Participant, OnConnStateChangeCallback } from '../platform-sdk/platform-types'

export default class WhatsAppAPI implements PlatformAPI {
    client = new WAClient ()
    evCallback: OnServerEventCallback = null
    connCallback: OnConnStateChangeCallback = null

    chats: WAChat[] = []
    contacts: WAContact[] = []
    contactMap: Record<string, WAContact> = {}
    init (session: any) {
        this.client.loadAuthInfoFromBase64 (session as AuthenticationCredentialsBase64)
    }
    dispose () {
        this.client.close ()
    }
    async login () {
        this.client.onReadyForPhoneAuthentication = ([ref, publicKey, clientID]) => {
            //this.evCallback ()
        }
        const [user, chats, contacts, unread] = await this.client.connect ()
        this.chats = chats
        this.contacts = contacts 
        this.contacts.forEach (c => this.contactMap[c.jid] = c)
        return { type: 'success' } as LoginResult
    }
    async logout () { return this.client.logout () }
    async getCurrentUser () {
        const user = this.client.userMetaData
        const pp = await this.client.getProfilePicture (user.id)
        return {id: user.id, displayText: user.name, imgURL: pp}
    }
    serializeSession = () => this.client.base64EncodedAuthInfo ()
    subscribeToEvents = (onEvent: OnServerEventCallback) => { this.evCallback = onEvent }
    onConnectionStateChange = (onEvent: OnConnStateChangeCallback) => { this.connCallback = onEvent }
    unsubscribeToEvents = () => this.evCallback = null

    async searchUsers (typed: string) {
        let results: Participant[] = []
        this.contacts.forEach (c => {
            if (c.name.toLowerCase().includes(typed) || c.notify.toLowerCase().includes(typed)) {
                results.push( mapContact (c) )
            }
        })
        return results
    }
    async createThread (userIDs: string[], title: string) {
        return null
    }
    async getThreads (inboxName: InboxName) {
        if (inboxName === InboxName.REQUESTS) {
            throw new Error ('No request Inbox')
        }
        let chats: WACompleteChat[] = []
        for (var i in this.chats) {
            let chat = this.chats[i] as any
            if (chat.jid.includes('@g.us')) { // is a group
                const metadata = await this.client.groupMetadata (chat.jid)
                chat.title = metadata.subject
                chat.participants = metadata.participants.map (p => this.contacts[p.id] || {jid: p.id})
            }
            chats.push (chat)
        }
        return mapThreads (chats)
    }
    async searchMessages (typed: string, beforeCursor?: string, threadID?: string) {
        if (threadID) {
            throw 'local search in thread not supported yet'
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
        return {items: mapMessages (messages), hasMore: messages.length >= 25, oldestCursor: oldestCursor && JSON.stringify(oldestCursor) }
    }
    async sendTextMessage (threadID: string, text: string, options?: MessageSendOptions) {
        const op: MessageOptions = {}
        if (options.quotedMessageID) {
            const list = await this.client.loadConversation (threadID, 1, {id: threadID, fromMe: false})
            if (list.length === 0) {
                throw new Error (`Message ID '${options.quotedMessageID}' does not exist`)
            }
            op.quoted = list[0]
        }
        const _ = await this.client.sendMessage (threadID, text, MessageType.text, op)
        return true
    }
    async sendFileFromFilePath (threadID: string, filePath: string, mimeType: string) {
        const { base: fileName } = path.parse(filePath)
        const buffer = await fs.readFileSync(filePath)
        return this.sendFileFromBuffer(threadID, buffer, mimeType, fileName)
    }
    async sendFileFromBuffer (threadID: string, fileBuffer: Buffer, mimeType: string, fileName: string) {
        const mimetypeMap = {
            [Mimetype.gif]: MessageType.video,
            [Mimetype.jpeg]: MessageType.image,
            [Mimetype.mp4]: MessageType.video,
            [Mimetype.webp]: MessageType.sticker,
            [Mimetype.ogg]: MessageType.audio,
            [Mimetype.pdf]: MessageType.document
        }
        const messageType = mimetypeMap[mimeType] || MessageType.document
        await this.client.sendMessage (threadID, fileBuffer, messageType)
        return true
    }
    async deleteMessage (threadID: string, messageID: string, forEveryone: boolean) {
        if (!forEveryone) {
            throw new Error ('Cannot handle not forEveryone RN')
        }
        await this.client.deleteMessage (threadID, {id: messageID, fromMe: true, remoteJid: this.client.userMetaData.id})
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
}
