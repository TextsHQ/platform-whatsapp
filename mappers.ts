import { WAContact, WAMessage } from '@adiwajshing/baileys'
import { Participant, Message, Thread } from '@texts/platform-sdk'

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
export function mapMessage (message: WAMessage): Message {
    return null
}
export function mapMessages (message: WAMessage[]): Message[] {
    return message.map (m => mapMessage(m))
}

export function mapThread (t: any, contacts: WAContact[], selfParticipant: Participant): Thread {
    return null
}
export function mapThreads (threads: any[], contacts: any[]): Thread[] {
    return null
}