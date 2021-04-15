import { WAMessage, MessageType, Presence, WA_MESSAGE_STATUS_TYPE, WAMessageProto, WAMessageContent, whatsappID, isGroupID, WA_MESSAGE_STUB_TYPE, WAPresenceData, WAChat, WAContact, WAGroupParticipant, WAMessageKey, WAContextInfo } from 'baileys'
import { ServerEventType, ServerEvent, Participant, Message, Thread, MessageAttachment, MessageAttachmentType, MessagePreview, ThreadType, MessageLink, MessageActionType, MessageAction, UNKNOWN_DATE, Paginated, MessageButton } from '@textshq/platform-sdk'

import { getDataURIFromBuffer, isBroadcastID, numberFromJid, removeServer, safeJSONStringify } from './util'
import { mapTextAttributes } from './text-attributes'
import type { WACompleteMessage } from './types'

const participantAdded = (message: WAMessage) =>
  (message.participant
    ? `{{${whatsappID(message.participant)}}} added ${message.messageStubParameters.map(p => `{{${whatsappID(p)}}}`).join(', ')} to this group`
    : `${message.messageStubParameters.map(p => `{{${whatsappID(p)}}}`).join(', ')} was added to this group`)

const numberToBigInt = (number: Number | Long.Long) => BigInt(number.toString())

const isPaymentMessage = (m: WAMessageProto.IMessage) =>
  !!(m?.sendPaymentMessage || m?.requestPaymentMessage || m?.cancelPaymentRequestMessage || m?.declinePaymentRequestMessage)

const getEphemeralMessageSettingChangedText = (exp: number, actor: string) => {
  if (exp) {
    const expDays = Math.floor(exp / (60 * 60 * 24))
    return actor
      ? `{{${actor}}} has turned on disappearing messages. New messages will disappear from this chat after ${expDays} days.`
      : `Disappearing messages were turned on. New messages will disappear from this chat after ${expDays} days.`
  }
  return actor
    ? `{{${actor}}} turned off disappearing messages.`
    : 'Disappearing messages were turned off.'
}

const PRE_DEFINED_MESSAGES: {[k: number]: string | ((m: WAMessage) => string)} = {
  [WA_MESSAGE_STUB_TYPE.CIPHERTEXT]: '⌛️ Waiting for this message. This may take a while.',

  [WA_MESSAGE_STUB_TYPE.E2E_ENCRYPTED]: '🔒 Messages you send to this chat and calls are secured with end-to-end encryption.',
  // This chat is with the official business account of "X". Click for more info.
  // [AFTER CLICK] WhatsApp has verified that this is the official business account of "X".
  [WA_MESSAGE_STUB_TYPE.BIZ_INTRO_BOTTOM]: 'This chat is with an official business account.',
  [WA_MESSAGE_STUB_TYPE.BIZ_INTRO_TOP]: 'This chat is with an official business account.',
  // This chat is with the official business account of "X". Click for more info.
  [WA_MESSAGE_STUB_TYPE.BIZ_TWO_TIER_MIGRATION_TOP]: 'This chat is with an official business account.',
  // X registered as a business account, but WhatsApp hasn’t verified their name yet.
  [WA_MESSAGE_STUB_TYPE.BIZ_TWO_TIER_MIGRATION_BOTTOM]: 'This chat is with a business account.',
  [WA_MESSAGE_STUB_TYPE.BLUE_MSG_SELF_PREMISE_UNVERIFIED]: 'This chat is with a business account.',
  // This account was previously a business account but has now registered as a standard account and may no longer belong to the business.
  [WA_MESSAGE_STUB_TYPE.BIZ_MOVE_TO_CONSUMER_APP]: 'This business account has now registered as a standard account.',
  // This chat is with the verified business account for "X". Click for more info.
  // [AFTER CLICK] WhatsApp has made changes to the business account types. "Verified Business" will now be labeled as "Official Business Account".
  [WA_MESSAGE_STUB_TYPE.VERIFIED_HIGH]: 'This chat is with a verified business account.',

  [WA_MESSAGE_STUB_TYPE.CALL_MISSED_VIDEO]: 'Missed video call',
  [WA_MESSAGE_STUB_TYPE.CALL_MISSED_VOICE]: 'Missed voice call',
  [WA_MESSAGE_STUB_TYPE.CALL_MISSED_GROUP_VIDEO]: 'Missed group video call',
  [WA_MESSAGE_STUB_TYPE.CALL_MISSED_GROUP_VOICE]: 'Missed group voice call',

  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_PROMOTE]: "You're now an admin",
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_DEMOTE]: "You're no longer an admin",

  // todo: recheck if {{sender}} is accurate. we've had to replace sender with message.participant for a bunch of messages
  [WA_MESSAGE_STUB_TYPE.GROUP_CREATE]: '{{sender}} created this group',
  [WA_MESSAGE_STUB_TYPE.GROUP_CHANGE_INVITE_LINK]: '{{sender}} revoked this group\'s invite link',
  [WA_MESSAGE_STUB_TYPE.BROADCAST_CREATE]: '{{sender}} created this broadcast list',
  [WA_MESSAGE_STUB_TYPE.BROADCAST_REMOVE]: '{{sender}} was removed from this broadcast list',
  [WA_MESSAGE_STUB_TYPE.BROADCAST_ADD]: '{{sender}} was added to this broadcast list',
  // /end todo

  [WA_MESSAGE_STUB_TYPE.E2E_IDENTITY_CHANGED]: '{{{{0}}}}\'s security code changed',
  [WA_MESSAGE_STUB_TYPE.GENERIC_NOTIFICATION]: '{{0}}',

  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_ADD]: participantAdded,
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: participantAdded,

  [WA_MESSAGE_STUB_TYPE.PAYMENT_ACTION_SEND_PAYMENT_INVITATION]: 'You notified {{{{0}}}} that you are trying to send a payment.',
  // todo: [WA_MESSAGE_STUB_TYPE.PAYMENT_ACTION_SEND_PAYMENT_REMINDER]: unknown

  [WA_MESSAGE_STUB_TYPE.INDIVIDUAL_CHANGE_NUMBER]: message => `{{${whatsappID(message.participant)}}} changed their phone number to a new number {{{{0}}}}`,
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_CHANGE_NUMBER]: message => `{{${whatsappID(message.participant)}}} changed their phone number to a new number {{{{0}}}}`,
  [WA_MESSAGE_STUB_TYPE.CHANGE_EPHEMERAL_SETTING]: message => getEphemeralMessageSettingChangedText(+message.messageStubParameters[0], message.messageStubParameters[1]),

  [WA_MESSAGE_STUB_TYPE.GROUP_CHANGE_DESCRIPTION]: message => `{{${whatsappID(message.participant)}}} changed the group description`,
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_REMOVE]: message => `{{${whatsappID(message.participant)}}} removed {{{{0}}}} from this group`,
  [WA_MESSAGE_STUB_TYPE.GROUP_CHANGE_SUBJECT]: message => `{{${whatsappID(message.participant)}}} changed the group subject to "{{0}}"`,
  [WA_MESSAGE_STUB_TYPE.GROUP_CHANGE_ICON]: message => `{{${whatsappID(message.participant)}}} changed this group's icon`,
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_INVITE]: message => `{{${whatsappID(message.participant)}}} joined using this group's invite link`,

  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_LEAVE]: message =>
    `${message.messageStubParameters.map(p => `{{${whatsappID(p)}}}`).join(', ')} left`,
  [WA_MESSAGE_STUB_TYPE.GROUP_CHANGE_RESTRICT]: message => {
    const actor = whatsappID(message.participant)
    if (message.messageStubParameters[0] === 'on') return `{{${actor}}} changed this group's settings to allow only admins to edit this group's info`
    return `{{${actor}}} changed this group's settings to allow all participants to edit this group's info`
  },
  [WA_MESSAGE_STUB_TYPE.GROUP_CHANGE_ANNOUNCE]: message => {
    const actor = whatsappID(message.participant)
    if (message.messageStubParameters[0] === 'on') return `📢 {{${actor}}} changed this group's settings to allow only admins to send messages to this group`
    return `📢 {{${actor}}} changed this group's settings to allow all participants to send messages to this group`
  },
}

const NOTIFYING_STUB_TYPES = new Set(
  [
    WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_ADD,
  ],
)
const ATTACHMENT_MAP = {
  [MessageType.audio]: MessageAttachmentType.AUDIO,
  [MessageType.image]: MessageAttachmentType.IMG,
  [MessageType.sticker]: MessageAttachmentType.IMG,
  [MessageType.video]: MessageAttachmentType.VIDEO,
}
const MESSAGE_ACTION_MAP = {
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_ADD]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_INVITE]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_REMOVE]: MessageActionType.THREAD_PARTICIPANTS_REMOVED,
  [WA_MESSAGE_STUB_TYPE.GROUP_PARTICIPANT_LEAVE]: MessageActionType.THREAD_PARTICIPANTS_REMOVED,
  [WA_MESSAGE_STUB_TYPE.GROUP_CREATE]: MessageActionType.GROUP_THREAD_CREATED,
  // [WA_MESSAGE_STUB_TYPE.GROUP_CHANGE_DESCRIPTION]: ,
  [WA_MESSAGE_STUB_TYPE.GROUP_CHANGE_SUBJECT]: MessageActionType.THREAD_TITLE_UPDATED,
}

const PAYMENT_STATUS_MAP = {
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.UNKNOWN_STATUS]: 'Unknown status',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.PROCESSING]: 'Processing',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.SENT]: 'Sent',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.NEED_TO_ACCEPT]: 'Needs to accept',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.COMPLETE]: 'Completed',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.COULD_NOT_COMPLETE]: 'Could not complete',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.REFUNDED]: 'Refunded',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.EXPIRED]: 'Expired',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.REJECTED]: 'Rejected',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.CANCELLED]: 'Cancelled',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.WAITING_FOR_PAYER]: 'Waiting for payer',
  [WAMessageProto.PaymentInfo.PaymentInfoStatus.WAITING]: 'Waiting',
}

function threadType(jid: string): ThreadType {
  if (isGroupID(jid)) return 'group'
  if (isBroadcastID(jid)) return 'broadcast'
  return 'single'
}

export function mapContact(contact: WAContact | WAGroupParticipant, isSelf: boolean = false): Participant {
  if (isGroupID(contact.jid)) {
    throw new Error('mapContact: cannot map a group')
  }
  if (isBroadcastID(contact.jid)) {
    throw new Error('mapContact: cannot map a broadcast list')
  }
  return {
    id: whatsappID(contact.jid),
    isSelf,
    fullName: contact.name || contact.notify || contact.vname,
    phoneNumber: numberFromJid(contact.jid),
    isVerified: contact.verify === '2',
    imgURL: contact.imgUrl,
    isAdmin: (contact as WAGroupParticipant).isAdmin,
  }
}
function messageAction(message: WAMessage): MessageAction {
  const actionType = MESSAGE_ACTION_MAP[message.messageStubType]
  if (!actionType) return null
  if (actionType === MessageActionType.THREAD_TITLE_UPDATED) {
    return {
      type: actionType,
      title: message.messageStubParameters[0],
      actorParticipantID: message.participant,
    }
  }
  if (actionType === MessageActionType.GROUP_THREAD_CREATED) {
    return {
      type: actionType,
      actorParticipantID: message.participant,
    }
  }
  return {
    type: actionType,
    participantIDs: message.messageStubParameters ? message.messageStubParameters.map(p => whatsappID(p)) : [message.participant],
    actorParticipantID: message.participant,
  }
}
function messageAttachments(message: WAMessageContent, messageInner: any, jid: string, id: string): { attachments: MessageAttachment[], media: boolean } {
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
    const fileName = message.documentMessage?.fileName

    response.attachments = [
      {
        id,
        size: { width: messageInner?.width, height: messageInner?.height },
        type: ATTACHMENT_MAP[messageType] || MessageAttachmentType.UNKNOWN,
        isGif: message.videoMessage?.gifPlayback,
        isSticker: message.stickerMessage ? true : undefined,
        mimeType: messageInner.mimetype,
        posterImg: jpegThumbnail ? `data:;base64,${Buffer.from(jpegThumbnail).toString('base64')}` : undefined,
        srcURL: `asset://$accountID/attachment/${jid}/${id}/${fileName || ''}`,
        fileName,
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
function messageQuoted(messageInner: any): MessagePreview {
  if (!messageInner) return

  const contextInfo = messageInner?.contextInfo as WAContextInfo
  const quoted = contextInfo?.quotedMessage
  if (!quoted) return null

  return {
    id: contextInfo.stanzaId,
    threadID: whatsappID(contextInfo.remoteJid),
    senderID: whatsappID(contextInfo.participant || contextInfo.remoteJid),
    text: messageText(contextInfo.quotedMessage, Object.values(contextInfo.quotedMessage)[0]),
  }
}
function* messageHeading(message: WAMessage, messageInner: any) {
  if (message.broadcast) yield 'Broadcast'
  const m = message.message
  if (m) {
    if (isPaymentMessage(m)) {
      const amount = `${message.paymentInfo.currency} ${numberToBigInt(message.paymentInfo.amount1000) / BigInt(1000)}`
      const status = PAYMENT_STATUS_MAP[message.paymentInfo.status]
      if (m.sendPaymentMessage) {
        yield `💵 Payment to {{${message.paymentInfo.receiverJid}}} | ${amount} | ${status}`
      }
      if (m.requestPaymentMessage) {
        yield `💵 Payment requested from {{${m.requestPaymentMessage.requestFrom}}} | ${amount} | ${status}`
      }
      if (m.declinePaymentRequestMessage) {
        yield `💵 Payment requested from {{${m.requestPaymentMessage.requestFrom}}} declined ${amount} | ${status}`
      }
      if (m.cancelPaymentRequestMessage) {
        yield `💵 Payment requested from {{${m.requestPaymentMessage.requestFrom}}} canceled ${amount} | ${status}`
      }
    }
    if (m.groupInviteMessage) yield `${m.groupInviteMessage.groupName} | WhatsApp Group Invite | View in app`
    if (m.locationMessage) yield '📍 Location'
    if (m.liveLocationMessage) yield '📍 Live Location'
    if (m.productMessage?.product) yield '📦 Product'
  }
}

const replaceJids = (jids: string[], text: string) => {
  if (!jids) return text
  return jids.reduce((txt, jid) => txt.replace(`@${removeServer(jid)}`, `@{{${whatsappID(jid)}}}`), text)
}

function messageButtons(message: WAMessageContent) {
  const buttons: MessageButton[] = []
  if (message?.templateMessage) {
    const template = message.templateMessage.hydratedTemplate || message.templateMessage.hydratedFourRowTemplate
    template?.hydratedButtons?.forEach(button => {
      if (button.callButton) {
        buttons.push({
          label: button.callButton.displayText,
          linkURL: 'tel:' + button.callButton.phoneNumber,
        })
      }
      if (button.quickReplyButton) {
        buttons.push({
          label: button.quickReplyButton.displayText,
          linkURL: 'texts://fill-textarea?text=' + encodeURIComponent(button.quickReplyButton.displayText),
        })
      }
      if (button.urlButton) {
        buttons.push({
          label: button.urlButton.displayText,
          linkURL: button.urlButton.url,
        })
      }
    })
  }
  return buttons.length === 0 ? undefined : buttons
}

function messageText(message: WAMessageContent, messageInner: any) {
  if (message?.protocolMessage?.type === WAMessageProto.ProtocolMessage.ProtocolMessageType.EPHEMERAL_SETTING) {
    const exp = message.protocolMessage.ephemeralExpiration
    return getEphemeralMessageSettingChangedText(exp, 'sender')
  }
  const paymentMessage = message?.sendPaymentMessage || message?.requestPaymentMessage || message?.cancelPaymentRequestMessage || message?.declinePaymentRequestMessage
  if (paymentMessage) {
    if ('noteMessage' in paymentMessage) {
      const etm = paymentMessage?.noteMessage?.extendedTextMessage
      const note = etm?.text
      const jids = etm?.contextInfo?.mentionedJid
      if (note) return replaceJids(jids, note)
    }
  }
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
  const text = messageInner?.text ?? messageInner?.caption
  if (text) {
    return replaceJids(messageInner?.contextInfo?.mentionedJid, text)
  }
  if (message?.templateMessage) {
    const txt = message.templateMessage.hydratedTemplate?.hydratedContentText || message.templateMessage.hydratedFourRowTemplate?.hydratedContentText
    if (txt) return txt
  }
  return message?.conversation
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
function messageSeen(message: Partial<WACompleteMessage>): { [id: string]: Date } {
  const seenMap: { [id: string]: Date } = {}
  if (message.info) {
    message.info.reads.forEach(info => {
      seenMap[whatsappID(info.jid)] = new Date(+info.t * 1000)
    })
  } else if (message.status === WA_MESSAGE_STATUS_TYPE.READ) {
    const pid = whatsappID(message.key.remoteJid)
    if (!isGroupID(pid)) seenMap[pid] = UNKNOWN_DATE
  }
  return seenMap
}
function messageStatus(status: number | string) {
  if (typeof status === 'string') {
    const key = Object.keys(WA_MESSAGE_STATUS_TYPE).find(k => k === status)
    return WA_MESSAGE_STATUS_TYPE[key]
  }
  return status
}

const toNumber = (t: Long | number) => (typeof t === 'number' ? t : (t.low || t))

export function mapMessage(message: WACompleteMessage, currentUserID: string): Message {
  const isEphemeral = !!message.message?.ephemeralMessage
  const messageContent = isEphemeral ? message.message?.ephemeralMessage?.message : message.message
  const messageInner = messageContent ? Object.values(messageContent)[0] : undefined

  const senderID = message.key.fromMe ? currentUserID : whatsappID(message.key.participant || message.participant || message.key.remoteJid)
  const stubBasedMessage = messageStubText(message)
  const { attachments } = messageAttachments(messageContent, messageInner, message.key.remoteJid, message.key.id)
  const timestamp = typeof message.messageTimestamp === 'number' ? +message.messageTimestamp : message.messageTimestamp.low
  const linked = messageQuoted(messageInner)
  const link = messageLink(messageContent)
  const action = messageAction(message)
  const isDeleted = message.messageStubType === WA_MESSAGE_STUB_TYPE.REVOKE

  const isEphemeralSetting = message?.message?.ephemeralMessage?.message?.protocolMessage?.type === WAMessageProto.ProtocolMessage.ProtocolMessageType.EPHEMERAL_SETTING
  const isAction = (!!stubBasedMessage && ![WA_MESSAGE_STUB_TYPE.REVOKE, WA_MESSAGE_STUB_TYPE.CIPHERTEXT].includes(message.messageStubType)) || isEphemeralSetting

  const mapped: Message = {
    _original: safeJSONStringify([message, currentUserID]),
    id: message.key.id,
    cursor: message.key.id + '_' + Number(message.key.fromMe),
    threadID: message.key.remoteJid,
    textHeading: [...messageHeading(message, messageInner)].join('\n'),
    text: isDeleted ? 'This message has been deleted.' : (messageText(messageContent, messageInner) ?? stubBasedMessage),
    textFooter: message.status === WA_MESSAGE_STATUS_TYPE.PLAYED ? 'Played' : undefined,
    timestamp: new Date(timestamp * 1000),
    forwardedCount: messageInner?.contextInfo?.forwardingScore,
    senderID,
    isSender: message.key.fromMe,
    isDeleted,
    attachments,
    buttons: messageButtons(messageContent),
    isDelivered: message.key.fromMe ? messageStatus(message.status) >= WA_MESSAGE_STATUS_TYPE.SERVER_ACK : true,
    seen: messageSeen(message),
    linkedMessage: linked,
    links: link ? [link] : undefined,
    parseTemplate: isAction || !!(messageInner?.contextInfo?.mentionedJid) || isPaymentMessage(message.message),
    isAction,
    action,
    // todo: review logic, this is incorrect:
    // isErrored: !isAction && message.key.fromMe && message.status === 0,
    silent: message.broadcast || !(!!message.message || (NOTIFYING_STUB_TYPES.has(message.messageStubType) && !!message.messageStubParameters.find(w => whatsappID(w) === currentUserID))),
    expiresInSeconds: messageInner?.contextInfo?.expiration,
    sortKey: (5000 + ((message as any).epoch || 0)).toString(16) + toNumber(message.messageTimestamp).toString(16).padStart(8, '0'),
  }
  if (mapped.text) {
    const { text, textAttributes } = mapTextAttributes(mapped.text)
    if (textAttributes) {
      mapped.text = text
      mapped.textAttributes = textAttributes
    }
  }
  return mapped
}
export function mapMessageUpdateProps(message: Partial<WACompleteMessage> & { key: WAMessageKey }): Partial<Message> {
  return {
    id: message.key.id,
    seen: (message.info || message.status) ? messageSeen(message) : undefined,
  }
}
export function mapMessages(message: WAMessage[], currentUserID: string): Message[] {
  return message.map(m => mapMessage(m, currentUserID))
}

function mapThreadParticipants(chat: WAChat, meContact: WAContact): Paginated<Participant> {
  let participants: Participant[]
  if (chat.metadata) {
    participants = chat.metadata.participants.map(c => (
      mapContact(c, meContact.jid === c.jid)
    ))
  } else if (!isGroupID(chat.jid) && !isBroadcastID(chat.jid)) {
    participants = [
      mapContact({ jid: chat.jid, name: chat.name, imgUrl: chat.imgUrl }, meContact.jid === chat.jid),
    ]
    participants?.push(mapContact(meContact, true))
  }
  return {
    items: participants || [],
    hasMore: !participants,
  }
}

export function mapThreadProps(chat: WAChat): Partial<Thread> {
  return {
    id: whatsappID(chat.jid),
    title: chat.name,
    description: chat.metadata?.desc,
    imgURL: isGroupID(chat.jid) ? chat.imgUrl : undefined,
    isUnread: !!chat.count,
    isArchived: chat.archive === 'true',
    isReadOnly: chat.read_only === 'true',
  }
}

export function mapThread(chat: WAChat, meContact: WAContact): Thread {
  return {
    _original: safeJSONStringify(chat),
    messages: {
      items: mapMessages(chat.messages.all(), meContact.jid),
      hasMore: true,
    },
    participants: mapThreadParticipants(chat, meContact),
    timestamp: new Date(+chat.t * 1000),
    type: threadType(chat.jid),
    createdAt: chat.metadata?.creation ? new Date(chat.metadata?.creation * 1000) : undefined,
    ...mapThreadProps(chat) as Thread,
  }
}

export function mapThreads(threads: WAChat[], meContact: WAContact): Thread[] {
  return threads.map(t => mapThread(t, meContact))
}

export function mapPresenceUpdate(threadID: string, presenceUpdates: { [_: string]: WAPresenceData }): ServerEvent[] {
  const [participantID] = Object.keys(presenceUpdates)
  const presence = presenceUpdates[participantID]
  const lastActive = presence.lastSeen && new Date(presence.lastSeen * 1000)
  const events: ServerEvent[] = []
  if ([Presence.available, Presence.unavailable].includes(presence.lastKnownPresence)) {
    events.push(
      {
        type: ServerEventType.USER_PRESENCE_UPDATED,
        presence: {
          userID: participantID,
          isActive: presence.lastKnownPresence === Presence.available,
          lastActive,
        },
      },
    )
  } else if ([Presence.composing, Presence.recording].includes(presence.lastKnownPresence)) {
    events.push(
      {
        type: ServerEventType.PARTICIPANT_TYPING,
        typing: true,
        threadID,
        participantID,
        durationMs: 120_000,
      },
    )
  }
  if ([Presence.available, Presence.unavailable, Presence.paused].includes(presence.lastKnownPresence)) {
    events.push({ type: ServerEventType.PARTICIPANT_TYPING, typing: false, threadID, participantID })
  }
  return events
}
