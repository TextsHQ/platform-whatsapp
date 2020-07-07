import { WAClient, MessageType, MessageOptions, Mimetype, Presence } from '@adiwajshing/baileys'
import { PlatformAPI, OnServerEventCallback, MessageSendOptions, InboxName } from '@texts/platform-sdk'
import path from 'path'
import fs from 'fs'

export default class WhatsAppAPI implements PlatformAPI {
    client = new WAClient ()
    evCallback: OnServerEventCallback = null
    init () {

    }
    dispose () {
        this.client.close ()
    }
    async login () {
        return null
    }
    async logout () { return this.client.logout () }
    async getCurrentUser () {
        const user = this.client.userMetaData
        const pp = await this.client.getProfilePicture (user.id)
        return {
            id: user.id,
            displayText: user.name,
            imgURL: pp
        }
    }
    serializeSession = () => this.client.base64EncodedAuthInfo ()
    subscribeToEvents = (onEvent: OnServerEventCallback) => { this.evCallback = onEvent }
    unsubscribeToEvents = () => this.evCallback = null

    async waitForContacts () {

    }
    async searchUsers (typed: string) {
        return []
    }
    async createThread (userIDs: string[], title: string) {
        return null
    }
    async getThreads (inboxName: InboxName) {
        return null 
    }
    async getMessages (threadID: string, cursor: string) {
        return null
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
        const messageType = mimetypeMap[mimeType]
        if (!messageType) {
            throw new Error (`Unsupported mime type: ${mimeType}, supported types: ${Object.keys(mimetypeMap)}`)
        }
        await this.client.sendMessage (threadID, fileBuffer, messageType)
        return true
    }
    async deleteMessage (threadID: string, messageID: string, forEveryone: boolean) {
        return false
    }
    async markAsUnread (threadID: string) {
        // to do
    }
    async sendTypingIndicator (threadID: string, typing: boolean) {
        await this.client.updatePresence (threadID, typing ? Presence.composing : Presence.available)
    }
    async sendReadReceipt (threadID: string, messageID: string) {
        await this.client.sendReadReceipt (threadID, messageID)
    }
}
