import { WAContact, WAMessage, getNotificationType, MessageType, WAChat, WAMessageProto } from '@adiwajshing/baileys'
import { Participant, Message, Thread, MessageAttachment, MessageAttachmentType } from '@textshq/platform-sdk'
import { homedir } from 'os'

const MESSAGE_STUB_TYPES = WAMessageProto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE
const PRE_DEFINED_MESSAGES: {[k: number]: string} = {
  [MESSAGE_STUB_TYPES.E2E_ENCRYPTED]: '🔒 Messages you send to this chat and calls are secured with end-to-end encryption.',
  // This chat is with the official business account of "X". Click for more info.
  // [AFTER CLICK] WhatsApp has verified that this is the official business account of "X".
  [MESSAGE_STUB_TYPES.BIZ_INTRO_TOP]: 'This chat is with an official business account.',
  // This chat is with the official business account of "X". Click for more info.
  [MESSAGE_STUB_TYPES.BIZ_TWO_TIER_MIGRATION_TOP]: 'This chat is with an official business account.',
  // X registered as a business account, but WhatsApp hasn’t verified their name yet.
  [MESSAGE_STUB_TYPES.BIZ_TWO_TIER_MIGRATION_BOTTOM]: 'This chat is with a business account.',
  // This account was previously a business account but has now registered as a standard account and may no longer belong to the business.
  [MESSAGE_STUB_TYPES.BIZ_MOVE_TO_CONSUMER_APP]: 'This business account has now registered as a standard account.',
  // This chat is with the verified business account for "X". Click for more info.
  // [AFTER CLICK] WhatsApp has made changes to the business account types. "Verified Business" will now be labeled as "Official Business Account".
  [MESSAGE_STUB_TYPES.VERIFIED_HIGH]: 'This chat is with a verified business account.',
  [MESSAGE_STUB_TYPES.CALL_MISSED_VIDEO]: 'Missed video call',
  [MESSAGE_STUB_TYPES.CALL_MISSED_VOICE]: 'Missed voice call',
  [MESSAGE_STUB_TYPES.GROUP_CHANGE_DESCRIPTION]: '{{sender}} changed the group description',
  [MESSAGE_STUB_TYPES.GROUP_CHANGE_ICON]: "{{sender}} changed this group's icon",
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_LEAVE]: '{{sender}} left',
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_CHANGE_NUMBER]: '{{sender}} changed their phone number to a new number',
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_INVITE]: "{{sender}} joined using this group's invite link",

  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_ADD]: '{{sender}} was added to this group',
}
const ATTACHMENT_MAP = {
  [MessageType.audio]: MessageAttachmentType.AUDIO,
  [MessageType.image]: MessageAttachmentType.IMG,
  [MessageType.sticker]: MessageAttachmentType.IMG,
  [MessageType.video]: MessageAttachmentType.VIDEO,
}

export interface WACompleteChat extends WAChat {
  participants: WAContact[]
  title?: string
  description?: string
  imgURL: string
}

function numberFromJid(jid: string) {
  return '+' + jid.replace('@s.whatsapp.net', '').replace('@c.us', '')
}

export function mapContact(contact: WAContact): Participant {
  if (contact.jid.includes('@g.us')) {
    throw new Error('a group cannot be a contact')
  }
  return {
    id: contact.jid,
    fullName: contact.name || contact.notify || numberFromJid(contact.jid),
    phoneNumber: numberFromJid(contact.jid),
  }
}
export const defaultWorkingDirectory = homedir() + '/texts-baileys'
export const defaultAttachmentsDirectory = defaultWorkingDirectory + '/attachments'
export function filenameForMessageAttachment(message: WAMessage) {
  return `${defaultAttachmentsDirectory}/attach_${message.key.id}`
}
export function mapMessage(message: WAMessage): Message {
  const sender = (message.key.participant || message.key.remoteJid).replace('@s.whatsapp.net', '@c.us')
  const backupMessage = PRE_DEFINED_MESSAGES[message.messageStubType]?.replace('{{sender}}', numberFromJid(message.key.participant || message.key.remoteJid))

  let attachment: MessageAttachment = null
  const [_, messageType] = getNotificationType(message) as [string, MessageType]
  if (messageType === MessageType.audio
        || messageType === MessageType.image
        || messageType === MessageType.video
        || messageType === MessageType.document
        || messageType === MessageType.sticker) {
    const filename = filenameForMessageAttachment(message)
    const { caption } = message.message[messageType]
    const thumb = message.message[messageType].jpegThumbnail
    attachment = {
      id: message.key.id,
      type: ATTACHMENT_MAP[messageType] || MessageAttachmentType.UNKNOWN,
      isGif: message.message?.videoMessage?.gifPlayback,
      caption,
      fileName: filename,
      mimeType: message.message[messageType].mimetype,
      posterImg: thumb ? Buffer.from(thumb) : null,
    }
  }
  return {
    _original: message,
    cursor: JSON.stringify(message.key),
    id: message.key.id,
    textHeading: message.broadcast ? 'Broadcast' : null,
    text: message.message?.conversation || message.message?.extendedTextMessage?.text || backupMessage,
    timestamp: new Date((typeof message.messageTimestamp === 'number' ? message.messageTimestamp : message.messageTimestamp.toNumber()) * 1000),
    senderID: message.key.remoteJid,
    isSender: message.key.fromMe,
    isDeleted: message.messageStubType === MESSAGE_STUB_TYPES.REVOKE,
    attachments: attachment ? [attachment] : [],
    reactions: [],
    isDelivered: message.key.fromMe ? message.status >= 3 : true,
    isDynamicMessage: attachment !== null,
    seen: message.status >= 4,
    sender: { id: message.key.participant || message.key.remoteJid },
  }
}
export function mapMessages(message: WAMessage[]): Message[] {
  return message.map(m => mapMessage(m))
}

export function mapThread(t: WACompleteChat): Thread {
  const isGroup = t.jid.endsWith('@g.us')
  return {
    _original: t,
    id: t.jid,
    title: t.title,
    description: t.description,
    imgURL: t.imgURL,
    isUnread: (t.count as unknown as number) != 0,
    // isArchived: t.archive === 'true',
    isReadOnly: t.read_only === 'true',
    messages: mapMessages(t.messages),
    participants: t.participants.map(c => mapContact(c)),
    timestamp: new Date(+t.t * 1000),
    type: isGroup ? 'group' : 'single',
  }
}
export function mapThreads(threads: WACompleteChat[]): Thread[] {
  return threads.map(t => mapThread(t))
}
