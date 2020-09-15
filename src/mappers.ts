import { WAMessage, MessageType, Presence, WAMessageProto, WAMessageContent, PresenceUpdate, whatsappID, isGroupID } from '@adiwajshing/baileys'
import { ServerEventType, ServerEvent, Participant, Message, Thread, MessageAttachment, MessageAttachmentType, MessagePreview, ThreadType, MessageLink, ThreadActionType, Action } from '@textshq/platform-sdk'

import { WACompleteMessage, WACompleteChat, WACompleteContact } from './types'
import { getDataURIFromBuffer, isBroadcastID, numberFromJid, removeServer } from './util'

const { WEB_MESSAGE_INFO_STUBTYPE, WEB_MESSAGE_INFO_STATUS } = WAMessageProto.WebMessageInfo

const participantAdded = message =>
  (message.participant
    ? `{{${whatsappID(message.participant)}}} added ${message.messageStubParameters.map(p => `{{${whatsappID(p)}}}`).join(', ')} to this group`
    : `${message.messageStubParameters.map(p => `{{${whatsappID(p)}}}`).join(', ')} was added to this group`)

const PRE_DEFINED_MESSAGES: {[k: number]: string | ((m: WAMessage) => string)} = {
  [WEB_MESSAGE_INFO_STUBTYPE.E2E_ENCRYPTED]: '🔒 Messages you send to this chat and calls are secured with end-to-end encryption.',
  [WEB_MESSAGE_INFO_STUBTYPE.E2E_IDENTITY_CHANGED]: '{{{{0}}}}\'s security code changed',
  // This chat is with the official business account of "X". Click for more info.
  // [AFTER CLICK] WhatsApp has verified that this is the official business account of "X".
  [WEB_MESSAGE_INFO_STUBTYPE.BIZ_INTRO_BOTTOM]: 'This chat is with an official business account.',
  [WEB_MESSAGE_INFO_STUBTYPE.BIZ_INTRO_TOP]: 'This chat is with an official business account.',
  // This chat is with the official business account of "X". Click for more info.
  [WEB_MESSAGE_INFO_STUBTYPE.BIZ_TWO_TIER_MIGRATION_TOP]: 'This chat is with an official business account.',
  // X registered as a business account, but WhatsApp hasn’t verified their name yet.
  [WEB_MESSAGE_INFO_STUBTYPE.BIZ_TWO_TIER_MIGRATION_BOTTOM]: 'This chat is with a business account.',
  // This account was previously a business account but has now registered as a standard account and may no longer belong to the business.
  [WEB_MESSAGE_INFO_STUBTYPE.BIZ_MOVE_TO_CONSUMER_APP]: 'This business account has now registered as a standard account.',
  [WEB_MESSAGE_INFO_STUBTYPE.INDIVIDUAL_CHANGE_NUMBER]: '{{sender}} changed their phone number to a new number {{0}}',
  // This chat is with the verified business account for "X". Click for more info.
  // [AFTER CLICK] WhatsApp has made changes to the business account types. "Verified Business" will now be labeled as "Official Business Account".
  [WEB_MESSAGE_INFO_STUBTYPE.VERIFIED_HIGH]: 'This chat is with a verified business account.',
  [WEB_MESSAGE_INFO_STUBTYPE.CALL_MISSED_VIDEO]: 'Missed video call',
  [WEB_MESSAGE_INFO_STUBTYPE.CALL_MISSED_VOICE]: 'Missed voice call',
  [WEB_MESSAGE_INFO_STUBTYPE.CALL_MISSED_GROUP_VIDEO]: 'Missed group video call',
  [WEB_MESSAGE_INFO_STUBTYPE.CALL_MISSED_GROUP_VOICE]: 'Missed group voice call',
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CHANGE_DESCRIPTION]: '{{sender}} changed the group description',
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CHANGE_SUBJECT]: '{{sender}} changed the group subject to {{0}}',
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CHANGE_ICON]: "{{sender}} changed this group's icon",
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_LEAVE]: message =>
    `${message.messageStubParameters.map(p => `{{${whatsappID(p)}}}`).join(', ')} left`,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_REMOVE]: message => `{{${whatsappID(message.participant)}}} removed {{sender}} from this group`,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_CHANGE_NUMBER]: '{{sender}} changed their phone number to a new number {{0}}',
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_INVITE]: "{{sender}} joined using this group's invite link",
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_PROMOTE]: '{{sender}} was made an admin',
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_DEMOTE]: '{{sender}} was demoted',
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_ADD]: participantAdded,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: participantAdded,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CREATE]: '{{sender}} created this group',
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CHANGE_RESTRICT]: message => {
    if (message.messageStubParameters[0] === 'on') return '{{sender}} changed this group\'s settings to allow only admins to edit this group\'s info'
    return '{{sender}} changed this group\'s settings to allow all participants to edit this group\'s info'
  },
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CHANGE_ANNOUNCE]: message => {
    if (message.messageStubParameters[0] === 'on') return '📢 {{sender}} changed this group\'s settings to allow only admins to send messages to this group'
    return '📢 {{sender}} changed this group\'s settings to allow all participants to send messages to this group'
  },
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CHANGE_INVITE_LINK]: '{{sender}} revoked this group\'s invite link',
  [WEB_MESSAGE_INFO_STUBTYPE.BROADCAST_CREATE]: '{{sender}} created this broadcast list',
  [WEB_MESSAGE_INFO_STUBTYPE.BROADCAST_REMOVE]: '{{sender}} was removed from this broadcast list',
  [WEB_MESSAGE_INFO_STUBTYPE.BROADCAST_ADD]: '{{sender}} was added to this broadcast list',

  [WEB_MESSAGE_INFO_STUBTYPE.GENERIC_NOTIFICATION]: '{{0}}',
}
const NOTIFYING_STUB_TYPES = new Set(
  [
    WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_ADD,
  ],
)
const ATTACHMENT_MAP = {
  [MessageType.audio]: MessageAttachmentType.AUDIO,
  [MessageType.image]: MessageAttachmentType.IMG,
  [MessageType.sticker]: MessageAttachmentType.IMG,
  [MessageType.video]: MessageAttachmentType.VIDEO,
}
const MESSAGE_ACTION_MAP = {
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_ADD]: ThreadActionType.THREAD_PARTICIPANTS_ADDED,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_INVITE]: ThreadActionType.THREAD_PARTICIPANTS_ADDED,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: ThreadActionType.THREAD_PARTICIPANTS_ADDED,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_REMOVE]: ThreadActionType.THREAD_PARTICIPANTS_REMOVED,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_PARTICIPANT_LEAVE]: ThreadActionType.THREAD_PARTICIPANTS_REMOVED,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CREATE]: ThreadActionType.GROUP_THREAD_CREATED,
  // [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CHANGE_DESCRIPTION]: ,
  [WEB_MESSAGE_INFO_STUBTYPE.GROUP_CHANGE_SUBJECT]: ThreadActionType.THREAD_TITLE_UPDATED,
}

function threadType(jid: string): ThreadType {
  if (isGroupID(jid)) return 'group'
  if (isBroadcastID(jid)) return 'broadcast'
  return 'single'
}

export function mapContact(contact: WACompleteContact): Participant {
  if (isGroupID(contact.jid) || isBroadcastID(contact.jid)) {
    throw new Error('a group or broadcast list cannot be a contact')
  }
  return {
    id: whatsappID(contact.jid),
    fullName: contact.name || contact.notify,
    phoneNumber: numberFromJid(contact.jid),
    imgURL: contact.imgUrl,
  }
}
function messageAction(message: WAMessage): Action {
  const actionType = MESSAGE_ACTION_MAP[message.messageStubType]
  if (!actionType) return null
  if (actionType === ThreadActionType.THREAD_TITLE_UPDATED) {
    return {
      type: actionType,
      title: message.messageStubParameters[0],
    }
  }
  return {
    type: actionType,
    participantIDs: message.messageStubParameters ? message.messageStubParameters.map(p => whatsappID(p)) : [message.participant],
  }
}
function messageAttachments(message: WAMessageContent, id: string): { attachments: MessageAttachment[], media: boolean } {
  const response = { attachments: [] as MessageAttachment[], media: false }
  if (!message) return response

  if (message.contactMessage || message.contactsArrayMessage) {
    const contacts = message.contactsArrayMessage?.contacts || [message.contactMessage]
    response.attachments = contacts.map(c => ({
      id: `${id}_${c.displayName}`,
      type: MessageAttachmentType.UNKNOWN,
      data: Buffer.from(c.vcard, 'utf-8'),
      fileName: `${c.displayName}.vcf`,
    }))
  } else if (message.audioMessage || message.imageMessage || message.documentMessage || message.videoMessage || message.stickerMessage) {
    const messageType = Object.keys(message)[0]
    const jpegThumbnail = (message.videoMessage || message.imageMessage)?.jpegThumbnail

    response.attachments = [
      {
        id,
        size: { width: message[messageType]?.width, height: message[messageType]?.height },
        type: ATTACHMENT_MAP[messageType] || MessageAttachmentType.UNKNOWN,
        isGif: message.videoMessage?.gifPlayback,
        mimeType: message[messageType].mimetype,
        posterImg: jpegThumbnail ? Buffer.from(jpegThumbnail) : null,
        fileName: message.documentMessage?.fileName,
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
  return response
}
function messageQuoted(message: WAMessageContent): MessagePreview {
  if (!message) return null

  const m = message.videoMessage
            || message.audioMessage
            || message.contactMessage
            || message.imageMessage
            || message.extendedTextMessage
            || message.documentMessage
            || message.productMessage
  const contextInfo = m?.contextInfo
  const quoted = contextInfo?.quotedMessage
  if (!quoted) return null

  return {
    senderID: whatsappID(contextInfo.participant || contextInfo.remoteJid),
    text: messageText(contextInfo.quotedMessage),
    id: contextInfo.stanzaId,
  }
}
function messageHeading(message: WAMessage) {
  if (message.broadcast) return 'Broadcast'
  const m = message.message
  if (m) {
    if (m.groupInviteMessage) return `${m.groupInviteMessage.groupName} | WhatsApp Group Invite | View in app`
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
    return `https://www.google.com/maps?q=${loc.degreesLatitude},${loc.degreesLongitude}\n${message?.locationMessage?.address || ''}`
  }
  const product = message?.productMessage?.product
  if (product) {
    const price = typeof product.priceAmount1000 === 'number' ? +product.priceAmount1000 : product.priceAmount1000.low
    return [
      product.title,
      product.description,
      `${product.currencyCode} ${(price / 1000)}`,
      product.productId,
    ]
      .filter(Boolean)
      .join('\n')
  }
  const extendedText = message?.extendedTextMessage
  if (extendedText) {
    let { text } = extendedText
    const mentionedJids = extendedText?.contextInfo?.mentionedJid
    if (mentionedJids) {
      mentionedJids.forEach(jid => {
        text = text.replace(`@${removeServer(jid)}`, `@{{${whatsappID(jid)}}}`)
      })
    }
    return text
  }
  return (message?.videoMessage || message?.imageMessage || message?.groupInviteMessage)?.caption || message?.conversation
}

function messageLink(message: WAMessageContent): MessageLink {
  const mess = message?.extendedTextMessage
  if (!mess?.matchedText) return null
  const jpgThumb = mess.jpegThumbnail && Buffer.from(mess.jpegThumbnail)
  return {
    url: mess.matchedText,
    img: jpgThumb && jpgThumb.length > 0 ? getDataURIFromBuffer(jpgThumb, 'image/jpeg') : undefined,
    imgSize: {
      width: 90,
      height: 90,
    },
    title: mess.title,
    summary: mess.description,
  }
}
function messageStubText(message: WAMessage) {
  const mapped = PRE_DEFINED_MESSAGES[message.messageStubType] || null

  let txt: string = typeof mapped === 'function' ? mapped(message) : mapped

  if (txt) {
    message.messageStubParameters.forEach((p, i) => {
      txt = txt.replace(`{{${i}}}`, whatsappID(p))
    })
  }
  return txt
}
function messageSeen(message: WACompleteMessage): { [id: string]: Date } | boolean {
  if (message.info) {
    const dict: { [id: string]: Date } = {}
    message.info.reads.forEach(info => {
      dict[whatsappID(info.jid)] = new Date(+info.t * 1000)
    })
    return dict
  }
  return message.status >= 4
}
function messageStatus(status: number | string) {
  if (typeof status === 'string') {
    const key = Object.keys(WEB_MESSAGE_INFO_STATUS).find(k => k === status)
    return WEB_MESSAGE_INFO_STATUS[key]
  }
  return status
}

export function mapMessage(message: WACompleteMessage, currentUserID: string): Message {
  const sender = message.key.fromMe ? currentUserID : whatsappID(message.key.participant || message.participant || message.key.remoteJid)
  const stubBasedMessage = messageStubText(message)
  const { attachments, media } = messageAttachments(message.message, message.key.id)
  const timestamp = typeof message.messageTimestamp === 'number' ? +message.messageTimestamp : message.messageTimestamp.low
  const linked = messageQuoted(message.message)
  const mLink = messageLink(message.message)
  const action = messageAction(message)
  const isDeleted = message.messageStubType === WEB_MESSAGE_INFO_STUBTYPE.REVOKE
  const isAction = !!stubBasedMessage && message.messageStubType !== WEB_MESSAGE_INFO_STUBTYPE.REVOKE
  return {
    _original: [message, currentUserID],
    id: message.key.id,
    textHeading: messageHeading(message),
    text: isDeleted ? 'This message has been deleted.' : (messageText(message.message) ?? stubBasedMessage),
    timestamp: new Date(timestamp * 1000),
    senderID: sender,
    isSender: message.key.fromMe,
    isDeleted,
    attachments,
    reactions: [],
    isDelivered: message.key.fromMe ? messageStatus(message.status) >= WEB_MESSAGE_INFO_STATUS.SERVER_ACK : true,
    isDynamicMessage: media && (!message.message?.videoMessage || !!message.message?.videoMessage?.url),
    seen: messageSeen(message),
    linkedMessage: linked,
    link: mLink,
    parseTemplate: !!stubBasedMessage || !!(message.message?.extendedTextMessage?.contextInfo?.mentionedJid),
    isAction,
    action,
    isErrored: !isAction && message.key.fromMe && message.status === 0,
    shouldNotify: !!message.message || (NOTIFYING_STUB_TYPES.has(message.messageStubType) && !!message.messageStubParameters.find(w => whatsappID(w) === currentUserID)),
  }
}
export function mapMessages(message: WAMessage[], currentUserID: string): Message[] {
  return message.map(m => mapMessage(m, currentUserID))
}

export function mapThread(t: WACompleteChat, currentUserID: string): Thread {
  const participants = t.participants?.map(c => {
    const participant = mapContact(c)
    participant.isAdmin = t.admins?.has(participant.id) || false
    return participant
  }) || []
  return {
    _original: t,
    id: whatsappID(t.jid),
    title: t.name,
    description: t.description,
    imgURL: t.imgUrl,
    isUnread: !!t.count,
    isArchived: t.archive === 'true',
    isReadOnly: t.read_only === 'true',
    messages: {
      items: t.messages ? mapMessages(t.messages, currentUserID) : [],
      hasMore: true,
      oldestCursor: JSON.stringify(t.messages?.[0] ? { id: t.messages[0].key.id, fromMe: t.messages[0].key.fromMe } : undefined),
    },
    participants: {
      items: participants,
      hasMore: false,
    },
    timestamp: new Date(+t.t * 1000),
    type: threadType(t.jid),
    createdAt: t.creationDate,
  }
}

export function mapThreadProps(t: WACompleteChat): Partial<Thread> {
  const thread = mapThread(t, null)
  delete thread.id
  delete thread._original
  delete thread.timestamp
  delete thread.type
  return thread
}

export function mapThreads(threads: WACompleteChat[], currentUserID: string): Thread[] {
  return threads.map(t => mapThread(t, currentUserID))
}

export function mapPresenceUpdate(update: PresenceUpdate, chat: WACompleteChat, lastActive: Date): ServerEvent[] {
  const threadID = whatsappID(update.id)
  const participantID = update.participant ? whatsappID(update.participant) : threadID
  if ([Presence.available, Presence.unavailable].includes(update.type)) {
    return [{
      type: ServerEventType.USER_PRESENCE_UPDATED,
      presence: {
        userID: participantID,
        isActive: chat.isActive,
        lastActive,
      },
    }, { type: ServerEventType.PARTICIPANT_STOPPED_TYPING, threadID, participantID }]
  }
  if ([Presence.composing, Presence.recording].includes(update.type)) {
    return [{
      type: ServerEventType.PARTICIPANT_TYPING,
      threadID,
      participantID,
      durationMs: 120_000,
    }]
  }
  if (update.type === Presence.paused) {
    return [{ type: ServerEventType.PARTICIPANT_STOPPED_TYPING, threadID, participantID }]
  }
}
