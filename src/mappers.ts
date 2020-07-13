import { WAContact, WAMessage, MessageType, WAChat, WAMessageProto, WAMessageContent, MessageInfo } from '@adiwajshing/baileys'
import { Participant, Message, Thread, MessageAttachment, MessageAttachmentType, Action, ThreadActionType, MessagePreview, ThreadType, MessageLink } from '@textshq/platform-sdk'
import { homedir } from 'os'
import info from './info'

const MESSAGE_STUB_TYPES = WAMessageProto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STUBTYPE
const MESSAGE_STATUS_TYPES = WAMessageProto.proto.WebMessageInfo.WEB_MESSAGE_INFO_STATUS
const PRE_DEFINED_MESSAGES: {[k: number]: string} = {
  [MESSAGE_STUB_TYPES.E2E_ENCRYPTED]: '🔒 Messages you send to this chat and calls are secured with end-to-end encryption.',
  [MESSAGE_STUB_TYPES.E2E_IDENTITY_CHANGED]: '{{{{0}}}}\'s security code changed',
  // This chat is with the official business account of "X". Click for more info.
  // [AFTER CLICK] WhatsApp has verified that this is the official business account of "X".
  [MESSAGE_STUB_TYPES.BIZ_INTRO_BOTTOM]: 'This chat is with an official business account.',
  [MESSAGE_STUB_TYPES.BIZ_INTRO_TOP]: 'This chat is with an official business account.',
  // This chat is with the official business account of "X". Click for more info. 
  [MESSAGE_STUB_TYPES.BIZ_TWO_TIER_MIGRATION_TOP]: 'This chat is with an official business account.',
  // X registered as a business account, but WhatsApp hasn’t verified their name yet.
  [MESSAGE_STUB_TYPES.BIZ_TWO_TIER_MIGRATION_BOTTOM]: 'This chat is with a business account.',
  // This account was previously a business account but has now registered as a standard account and may no longer belong to the business.
  [MESSAGE_STUB_TYPES.BIZ_MOVE_TO_CONSUMER_APP]: 'This business account has now registered as a standard account.',
  [MESSAGE_STUB_TYPES.INDIVIDUAL_CHANGE_NUMBER]: '{{sender}} changed their phone number to a new number {{0}}',
  // This chat is with the verified business account for "X". Click for more info.
  // [AFTER CLICK] WhatsApp has made changes to the business account types. "Verified Business" will now be labeled as "Official Business Account".
  [MESSAGE_STUB_TYPES.VERIFIED_HIGH]: 'This chat is with a verified business account.',
  [MESSAGE_STUB_TYPES.CALL_MISSED_VIDEO]: 'Missed video call',
  [MESSAGE_STUB_TYPES.CALL_MISSED_VOICE]: 'Missed voice call',
  [MESSAGE_STUB_TYPES.GROUP_CHANGE_DESCRIPTION]: '{{sender}} changed the group description',
  [MESSAGE_STUB_TYPES.GROUP_CHANGE_SUBJECT]: '{{sender}} changed the group subject to {{0}}',
  [MESSAGE_STUB_TYPES.GROUP_CHANGE_ICON]: "{{sender}} changed this group's icon",
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_LEAVE]: '{{sender}} left',
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_REMOVE]: '{{sender}} was removed',
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_CHANGE_NUMBER]: '{{sender}} changed their phone number to a new number {{0}}',
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_INVITE]: "{{sender}} joined using this group's invite link",
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_PROMOTE]: '{{sender}} was made an admin',
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_DEMOTE]: '{{sender}} was demoted',
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_ADD]: '{{sender}} was added to this group',
  [MESSAGE_STUB_TYPES.GROUP_CREATE]: '{{sender}} created this group',
  [MESSAGE_STUB_TYPES.GROUP_CHANGE_RESTRICT]: '{{sender}} restricted the group\'s sending capabilities',
  [MESSAGE_STUB_TYPES.GROUP_CHANGE_ANNOUNCE]: '{{sender}} changed this group\'s settings to allow all participants to edit the group\'s info: {{0}}'
}
const ATTACHMENT_MAP = {
  [MessageType.audio]: MessageAttachmentType.AUDIO,
  [MessageType.image]: MessageAttachmentType.IMG,
  [MessageType.sticker]: MessageAttachmentType.IMG,
  [MessageType.video]: MessageAttachmentType.VIDEO,
}
const MESSAGE_TYPE_MAP = {
  [MESSAGE_STUB_TYPES.GROUP_CREATE]: ThreadActionType.GROUP_THREAD_CREATED,
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_ADD]: ThreadActionType.THREAD_PARTICIPANTS_ADDED,
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_INVITE]: ThreadActionType.THREAD_PARTICIPANTS_ADDED,
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: ThreadActionType.THREAD_PARTICIPANTS_ADDED,
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_REMOVE]: ThreadActionType.THREAD_PARTICIPANTS_REMOVED,
  [MESSAGE_STUB_TYPES.GROUP_PARTICIPANT_LEAVE]: ThreadActionType.THREAD_PARTICIPANTS_REMOVED,
  [MESSAGE_STUB_TYPES.GROUP_CHANGE_DESCRIPTION]: ThreadActionType.THREAD_TITLE_UPDATED,
}
export interface WACompleteMessage extends WAMessage {
  info?: MessageInfo
}
export interface WACompleteChat extends WAChat {
  participants: WACompleteContact[]
  title?: string
  description?: string
  imgURL: string
  creationDate?: Date
}
export interface WACompleteContact extends WAContact {
  imgURL?: string
}
export function whatsappID(jid: string) {
  return jid.replace('@s.whatsapp.net', '@c.us')
}
export function isGroupID(jid: string) {
  return jid.endsWith('@g.us')
}
export function isBroadcastID(jid: string) {
  return jid.endsWith('@broadcast')
}
function numberFromJid(jid: string) {
  return '+' + whatsappID(jid).replace('@c.us', '')
}
function jidType(jid: string): ThreadType {
  return isGroupID (jid) ? 'group' : isBroadcastID (jid) ? 'broadcast' : 'single'
}


export function mapContact(contact: WACompleteContact): Participant {
  if (isGroupID(contact.jid)) {
    throw new Error('a group cannot be a contact')
  }
  return {
    id: contact.jid,
    fullName: contact.name || contact.notify || numberFromJid(contact.jid),
    phoneNumber: numberFromJid(contact.jid),
    imgURL: contact.imgURL
  }
}
export const defaultWorkingDirectory = homedir() + '/texts-baileys'
export const defaultAttachmentsDirectory = defaultWorkingDirectory + '/attachments'
export function filenameForMessageAttachment(messageID: string) {
  return `${defaultAttachmentsDirectory}/attach_${messageID}`
}
/*function messageAction (message: WAMessage): Action {
  const actionType = MESSAGE_TYPE_MAP[message.messageStubType]
  if (!actionType) return null
  return {
    type: actionType,
    title: message.messageStubParameters[0],
    actorParticipantID: message.key.participant
  }
}*/
function messageAttachments(message: WAMessageContent, id: string): {attachments: MessageAttachment[], media: boolean} {
  const response = { attachments: [] as MessageAttachment[], media: false }
  if (!message) {

  } else if (message.contactMessage || message.contactsArrayMessage) {
    const contacts = message.contactsArrayMessage?.contacts || [message.contactMessage]
    response.attachments = contacts.map(c => ({
      id: `${id}_${c.displayName}`,
      type: MessageAttachmentType.UNKNOWN,
      data: Buffer.from(c.vcard, 'utf-8'),
      fileName: `${c.displayName}.vcf`,
    }))
  } else {
    if (message.audioMessage || message.imageMessage || message.documentMessage || message.videoMessage || message.stickerMessage) {
      const messageType = Object.keys(message)[0]
      const caption = null//(message.videoMessage || message.imageMessage)?.caption
      const jpegThumbnail = (message.videoMessage || message.imageMessage)?.jpegThumbnail

      response.attachments = [
        {
          id,
          type: ATTACHMENT_MAP[messageType] || MessageAttachmentType.UNKNOWN,
          isGif: message.videoMessage?.gifPlayback,
          caption,
          mimeType: message[messageType].mimetype,
          posterImg: jpegThumbnail ? Buffer.from(jpegThumbnail) : null,
        },
      ]
      response.media = true
    } else if (message.productMessage?.product?.productImage) {
      const img = message.productMessage?.product?.productImage
      response.attachments = [
        {
          id,
          type: MessageAttachmentType.IMG,
          mimeType: img.mimetype,
          posterImg: img.jpegThumbnail ? Buffer.from(img.jpegThumbnail) : null,
        },
      ]
      response.media = true
    }
  }
  return response
}
function linkedMessage(message: WAMessageContent): MessagePreview {
  if (!message) {
    return null
  }
  const m = message.videoMessage || 
            message.audioMessage || 
            message.contactMessage || 
            message.imageMessage || 
            message.extendedTextMessage || 
            message.documentMessage ||
            message.productMessage
  const contextInfo = m?.contextInfo
  const quoted = contextInfo?.quotedMessage
  if (!quoted) {
    return null
  }
  return {
    senderID: whatsappID(contextInfo.participant || contextInfo.remoteJid),
    text: messageText (contextInfo.quotedMessage),
    id: contextInfo.stanzaId
  }
}
function messageHeading(message: WAMessage) {
  if (message.broadcast) return 'Broadcast'
  const m = message.message
  if (m) {
    if (m.locationMessage) return '📍 Location'
    if (m.liveLocationMessage) return '📍 Live Location'
    if (m.productMessage?.product) return '📦 Product'
    const inner = m[Object.keys(m)[0]]
    if (inner.contextInfo?.isForwarded) return 'Forwarded'
  }
}
function messageText(message: WAMessageContent) {
  const loc = message?.locationMessage || message?.liveLocationMessage
  if (loc) {
    return `https://www.google.com/maps?q=${loc.degreesLatitude},${loc.degreesLongitude}\n${ message?.locationMessage?.address || '' }`
  }
  const product = message?.productMessage?.product
  if (product) {
    const price = typeof product.priceAmount1000 === 'number' ? +product.priceAmount1000 : product.priceAmount1000.low
    return [
      product.title, 
      product.description, 
      `${product.currencyCode} ${(price/1000)}`,
      product.productId
    ]
    .filter(Boolean)
    .join ('\n')
  }
  const extendedText = message?.extendedTextMessage
  if (extendedText) {
    let text = extendedText.text
    const mentionedJids = extendedText?.contextInfo?.mentionedJid
    if (mentionedJids) {
      mentionedJids.forEach (jid => text = text.replace (`@${whatsappID(jid).replace('@c.us', '')}`, `@{{${whatsappID(jid)}}}`))
    }
    return text
  }
  return message?.conversation || (message?.videoMessage || message?.imageMessage)?.caption
}
function messageLink(message: WAMessageContent): MessageLink {
  const mess = message?.extendedTextMessage
  if (mess && mess.canonicalUrl) {
    return {
      url: mess.matchedText,
      img: new Buffer(mess.jpegThumbnail).toString('base64'),
      title: mess.title,
      summary: mess.description
    }
  }
  return null
}
function messageStubText (message: WAMessage) {
  let txt = PRE_DEFINED_MESSAGES[message.messageStubType] || null
  if (txt) {
    message.messageStubParameters.forEach ((p,i) => txt = txt.replace (`{{${i}}}`, whatsappID(p)))
  } else if (message.messageStubType) {
    txt = Object.keys (MESSAGE_STUB_TYPES).filter (key => MESSAGE_STUB_TYPES[key] === message.messageStubType)[0]
  }
  return txt
}
function messageReadBy (message: WACompleteMessage): { [id: string]: Date } | boolean {
  if (message.info) {
    const dict: { [id: string]: Date } = {}
    message.info.reads.forEach (info => dict[info.jid] = new Date(parseInt(info.t)*1000))
    return dict
  }
  return message.status >= 4
}
function messageStatus (status: number | string) {
  if (typeof status === 'string') {
    const key = Object.keys (MESSAGE_STATUS_TYPES).find (key => key === status)
    return MESSAGE_STATUS_TYPES[key]
  }
  return status
}
export function mapMessage(message: WACompleteMessage): Message {
  const sender = whatsappID(message.key.participant || message.key.remoteJid)
  const stubBasedMessage = messageStubText (message)
  const { attachments, media } = messageAttachments(message.message, message.key.id)
  const timestamp = typeof message.messageTimestamp === 'number' ? +message.messageTimestamp : message.messageTimestamp.low
  const linked = linkedMessage(message.message)
  const mLink = messageLink (message.message)
  return {
    _original: message,
    cursor: JSON.stringify(message.key),
    id: message.key.id,
    textHeading: messageHeading(message),
    text: messageText(message.message) || stubBasedMessage,
    timestamp: new Date(timestamp * 1000),
    senderID: sender,
    isSender: message.key.fromMe,
    isDeleted: message.messageStubType === MESSAGE_STUB_TYPES.REVOKE,
    attachments,
    reactions: [],
    isDelivered: message.key.fromMe ? messageStatus(message.status) >= MESSAGE_STATUS_TYPES.SERVER_ACK : true,
    isDynamicMessage: media,
    seen: messageReadBy(message),
    sender: { id: sender },
    linkedMessage: linked,
    link: mLink,
    parseTemplate: !!stubBasedMessage || !!(message.message.extendedTextMessage?.contextInfo?.mentionedJid),
    isAction: !!stubBasedMessage && message.messageStubType !== MESSAGE_STUB_TYPES.REVOKE // prevent deleted messages from becoming an action
  }
}
export function mapMessages(message: WAMessage[]): Message[] {
  return message.map(m => mapMessage(m))
}

export function mapThread(t: WACompleteChat): Thread {
  return {
    _original: t,
    id: t.jid,
    title: t.title,
    description: t.description,
    imgURL: t.imgURL,
    isUnread: (t.count as unknown as number) != 0,
    isReadOnly: t.read_only === 'true',
    messages: mapMessages(t.messages),
    participants: t.participants.map(c => mapContact(c)),
    timestamp: new Date(+t.t * 1000),
    type: jidType (t.jid),
    createdAt: t.creationDate
  }
}
export function mapThreads(threads: WACompleteChat[]): Thread[] {
  return threads.map(t => mapThread(t))
}
