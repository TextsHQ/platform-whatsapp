import { WAContact, WAMessage, getNotificationType, MessageType, WAChat, decodeMediaMessage } from '@adiwajshing/baileys'
import { Participant, Message, Thread, MessageAttachment, MessageAttachmentType } from '@textshq/platform-sdk'

export interface WACompleteChat extends WAChat {
    participants: WAContact[]
    title?: string
    description?: string
    imgURL: string
}

function numberFromJid (jid: string) {
    return '+' + jid.replace ('@s.whatsapp.net', '').replace ('@c.us', '')
}

export function mapContact (contact: WAContact): Participant {
    if (contact.jid.includes ('@g.us')) {
        throw new Error(`a group cannot be a contact`)
    }
    return {
        id: contact.jid,
        fullName: contact.name || contact.notify || numberFromJid (contact.jid),
        phoneNumber: numberFromJid (contact.jid)
    }
}
export function filenameForMessageAttachment (message: WAMessage) {
    return `./attachments/attach_${message.key.id}`
}
export function mapMessage (message: WAMessage): Message {
    const attachmentMap = {
        [MessageType.audio]: MessageAttachmentType.AUDIO,
        [MessageType.image]: MessageAttachmentType.IMG,
        [MessageType.sticker]: MessageAttachmentType.IMG,
        [MessageType.video]: MessageAttachmentType.VIDEO
    }

    let attachment: MessageAttachment = null
    const [_, messageType] = getNotificationType (message) as [string, MessageType]
    if (messageType === MessageType.audio || 
        messageType === MessageType.image || 
        messageType === MessageType.video || 
        messageType === MessageType.document ||
        messageType === MessageType.sticker) {
            const filename = filenameForMessageAttachment (message)
            const caption = message.message[messageType]['caption']
            const thumb = message.message[messageType]['jpegThumbnail']
            attachment = {
                id: message.key.id,
                type: attachmentMap[messageType] || MessageAttachmentType.UNKNOWN,
                isGif: message.message?.videoMessage?.gifPlayback,
                caption: caption,
                fileName: filename,
                mimeType: message.message[messageType].mimetype,
                posterImg: thumb ? Buffer.from(thumb) : null
            }
    }
    return {
        _original: message,
        id: message.key.id,
        textHeading: message.broadcast ? 'Broadcast' : null,
        text: message.message?.conversation || message.message?.extendedTextMessage?.text,
        timestamp: new Date (typeof message.messageTimestamp === 'number' ? message.messageTimestamp : message.messageTimestamp.toNumber()),
        senderID: message.key.remoteJid,
        isSender: message.key.fromMe,
        attachments: attachment ? [attachment] : [],
        reactions: [],
        isDelivered: message.status >= 3, // is delivered
        seen: message.status >= 4,
        sender: {id: message.key.participant || message.key.remoteJid}
    }
}
export function mapMessages (message: WAMessage[]): Message[] {
    return message.map (m => mapMessage(m))
}

export function mapThread (t: WACompleteChat): Thread {
    return {
        _original: t,
        id: t.jid,
        title: t.title,
        description: t.description,
        imgURL: t.imgURL,
        isUnread: (t.count as unknown as number) > 0,
        isArchived: t.archive === 'true',
        isReadOnly: t.read_only === 'true',
        messages: mapMessages(t.messages),
        participants: t.participants.map(c => mapContact(c)),
        timestamp: new Date (parseInt(t.t)),
        type: t.jid.includes('@g.us') ? 'group' : t.jid.includes('@c.us') ? 'single' : 'broadcast'
    }
}
export function mapThreads (threads: WACompleteChat[]): Thread[] {
    return threads.map (t => mapThread(t))
}