import { WAMessage, MessageType, Presence, WAMessageStatus, WAMessageProto, WAMessageContent, whatsappID, isGroupID, WAMessageStubType, PresenceData, Chat as WAChat, Contact as WAContact, GroupParticipant as WAGroupParticipant, WAContextInfo, makeInMemoryStore, toNumber, STORIES_JID, WAMessageKey, extractMessageContent } from '@adiwajshing/baileys'
import { PartialWithID, ServerEventType, ServerEvent, Participant, Message, Thread, MessageAttachment, MessageAttachmentType, MessagePreview, ThreadType, MessageLink, MessageActionType, MessageAction, UNKNOWN_DATE, Paginated, MessageButton, ActivityType, MessageSeen, texts } from '@textshq/platform-sdk'
import { getDataURIFromBuffer, isBroadcastID, numberFromJid, removeServer, safeJSONStringify } from './util'
import { mapTextAttributes } from './text-attributes'
import { TEN_YEARS_IN_SECONDS } from './constants'

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

const PRE_DEFINED_MESSAGES: { [k: number]: string | ((m: WAMessage) => string) } = {
  [WAMessageStubType.CIPHERTEXT]: '⌛️ Waiting for this message. This may take a while.',

  [WAMessageStubType.E2E_ENCRYPTED]: '🔒 Messages you send to this chat and calls are secured with end-to-end encryption.',
  // This chat is with the official business account of "X". Click for more info.
  // [AFTER CLICK] WhatsApp has verified that this is the official business account of "X".
  [WAMessageStubType.BIZ_INTRO_BOTTOM]: 'This chat is with an official business account.',
  [WAMessageStubType.BIZ_INTRO_TOP]: 'This chat is with an official business account.',
  // This chat is with the official business account of "X". Click for more info.
  [WAMessageStubType.BIZ_TWO_TIER_MIGRATION_TOP]: 'This chat is with an official business account.',
  // X registered as a business account, but WhatsApp hasn’t verified their name yet.
  [WAMessageStubType.BIZ_TWO_TIER_MIGRATION_BOTTOM]: 'This chat is with a business account.',
  [WAMessageStubType.BLUE_MSG_SELF_PREMISE_UNVERIFIED]: 'This chat is with a business account.',
  // This account was previously a business account but has now registered as a standard account and may no longer belong to the business.
  [WAMessageStubType.BIZ_MOVE_TO_CONSUMER_APP]: 'This business account has now registered as a standard account.',
  // This chat is with the verified business account for "X". Click for more info.
  // [AFTER CLICK] WhatsApp has made changes to the business account types. "Verified Business" will now be labeled as "Official Business Account".
  [WAMessageStubType.VERIFIED_HIGH]: 'This chat is with a verified business account.',

  [WAMessageStubType.CALL_MISSED_VIDEO]: 'Missed video call',
  [WAMessageStubType.CALL_MISSED_VOICE]: 'Missed voice call',
  [WAMessageStubType.CALL_MISSED_GROUP_VIDEO]: 'Missed group video call',
  [WAMessageStubType.CALL_MISSED_GROUP_VOICE]: 'Missed group voice call',

  [WAMessageStubType.GROUP_PARTICIPANT_PROMOTE]: "You're now an admin",
  [WAMessageStubType.GROUP_PARTICIPANT_DEMOTE]: "You're no longer an admin",

  // todo: recheck if {{sender}} is accurate. we've had to replace sender with message.participant for a bunch of messages
  [WAMessageStubType.GROUP_CREATE]: '{{sender}} created this group',
  [WAMessageStubType.GROUP_CHANGE_INVITE_LINK]: '{{sender}} revoked this group\'s invite link',
  [WAMessageStubType.BROADCAST_CREATE]: '{{sender}} created this broadcast list',
  [WAMessageStubType.BROADCAST_REMOVE]: '{{sender}} was removed from this broadcast list',
  [WAMessageStubType.BROADCAST_ADD]: '{{sender}} was added to this broadcast list',
  // /end todo

  [WAMessageStubType.E2E_IDENTITY_CHANGED]: '{{{{0}}}}\'s security code changed',
  [WAMessageStubType.E2E_DEVICE_CHANGED]: '{{{{0}}}}\'s security code changed',
  [WAMessageStubType.GENERIC_NOTIFICATION]: '{{0}}',

  [WAMessageStubType.GROUP_PARTICIPANT_ADD]: participantAdded,
  [WAMessageStubType.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: participantAdded,

  [WAMessageStubType.PAYMENT_ACTION_SEND_PAYMENT_INVITATION]: 'You notified {{{{0}}}} that you are trying to send a payment.',
  // todo: [WAMessageStubType.PAYMENT_ACTION_SEND_PAYMENT_REMINDER]: unknown

  [WAMessageStubType.INDIVIDUAL_CHANGE_NUMBER]: message => `{{${whatsappID(message.participant)}}} changed their phone number to a new number {{{{0}}}}`,
  [WAMessageStubType.GROUP_PARTICIPANT_CHANGE_NUMBER]: message => `{{${whatsappID(message.participant)}}} changed their phone number to a new number {{{{0}}}}`,
  [WAMessageStubType.CHANGE_EPHEMERAL_SETTING]: message => getEphemeralMessageSettingChangedText(+message.messageStubParameters[0], message.messageStubParameters[1]),

  [WAMessageStubType.GROUP_CHANGE_DESCRIPTION]: message => `{{${whatsappID(message.participant)}}} changed the group description`,
  [WAMessageStubType.GROUP_PARTICIPANT_REMOVE]: message => `{{${whatsappID(message.participant)}}} removed {{{{0}}}} from this group`,
  [WAMessageStubType.GROUP_CHANGE_SUBJECT]: message => `{{${whatsappID(message.participant)}}} changed the group subject to "{{0}}"`,
  [WAMessageStubType.GROUP_CHANGE_ICON]: message => `{{${whatsappID(message.participant)}}} changed this group's icon`,
  [WAMessageStubType.GROUP_PARTICIPANT_INVITE]: message => `{{${whatsappID(message.participant)}}} joined using this group's invite link`,

  [WAMessageStubType.GROUP_PARTICIPANT_LEAVE]: message =>
    `${message.messageStubParameters.map(p => `{{${whatsappID(p)}}}`).join(', ')} left`,
  [WAMessageStubType.GROUP_CHANGE_RESTRICT]: message => {
    const actor = whatsappID(message.participant)
    if (message.messageStubParameters[0] === 'on') return `{{${actor}}} changed this group's settings to allow only admins to edit this group's info`
    return `{{${actor}}} changed this group's settings to allow all participants to edit this group's info`
  },
  [WAMessageStubType.GROUP_CHANGE_ANNOUNCE]: message => {
    const actor = whatsappID(message.participant)
    if (message.messageStubParameters[0] === 'on') return `📢 {{${actor}}} changed this group's settings to allow only admins to send messages to this group`
    return `📢 {{${actor}}} changed this group's settings to allow all participants to send messages to this group`
  },
}

const NOTIFYING_STUB_TYPES = new Set(
  [
    WAMessageStubType.GROUP_PARTICIPANT_ADD,
  ],
)

const ATTACHMENT_MAP = {
  audioMessage: MessageAttachmentType.AUDIO,
  imageMessage: MessageAttachmentType.IMG,
  stickerMessage: MessageAttachmentType.IMG,
  videoMessage: MessageAttachmentType.VIDEO,
} as { [T in MessageType]: MessageAttachmentType }

const MESSAGE_ACTION_MAP = {
  [WAMessageStubType.GROUP_PARTICIPANT_ADD]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WAMessageStubType.GROUP_PARTICIPANT_INVITE]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WAMessageStubType.GROUP_PARTICIPANT_ADD_REQUEST_JOIN]: MessageActionType.THREAD_PARTICIPANTS_ADDED,
  [WAMessageStubType.GROUP_PARTICIPANT_REMOVE]: MessageActionType.THREAD_PARTICIPANTS_REMOVED,
  [WAMessageStubType.GROUP_PARTICIPANT_LEAVE]: MessageActionType.THREAD_PARTICIPANTS_REMOVED,
  [WAMessageStubType.GROUP_CREATE]: MessageActionType.GROUP_THREAD_CREATED,
  // [WAMessageStubType.GROUP_CHANGE_DESCRIPTION]: ,
  [WAMessageStubType.GROUP_CHANGE_SUBJECT]: MessageActionType.THREAD_TITLE_UPDATED,
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

function messageAction(message: WAMessage): MessageAction | undefined {
  const actionType = MESSAGE_ACTION_MAP[message.messageStubType]
  if (!actionType) return
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
      title: message.messageStubParameters[0],
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
    response.attachments = contacts.map<MessageAttachment>(c => ({
      id: `${id}_${c!.displayName}`,
      type: MessageAttachmentType.UNKNOWN,
      data: Buffer.from(c!.vcard!, 'utf-8'),
      fileName: `${c!.displayName}.vcf`,
    }))
  } else if (message.audioMessage || message.imageMessage || message.documentMessage || message.videoMessage || message.stickerMessage) {
    const messageType = Object.keys(message)[0]
    const jpegThumbnail = (message.videoMessage || message.imageMessage)?.jpegThumbnail
    const fileName = message.documentMessage?.fileName

    const size = message.stickerMessage ? { width: 100, height: 100 } : { width: messageInner?.width, height: messageInner?.height }
    response.attachments = [{
      id,
      size: (size.width && size.height) ? size : undefined,
      type: ATTACHMENT_MAP[messageType] || MessageAttachmentType.UNKNOWN,
      isGif: !!message.videoMessage?.gifPlayback,
      isSticker: message.stickerMessage ? true : undefined,
      mimeType: messageInner.mimetype,
      posterImg: jpegThumbnail ? `data:;base64,${Buffer.from(jpegThumbnail).toString('base64')}` : undefined,
      srcURL: `asset://$accountID/attachment/${jid}/${id}/${fileName || ''}`,
      fileName: fileName || undefined,
    }]
    response.media = true
  } else if (message.productMessage?.product?.productImage) {
    const img = message.productMessage?.product?.productImage
    response.attachments = [
      {
        id,
        type: MessageAttachmentType.IMG,
        mimeType: img.mimetype!,
        posterImg: img.jpegThumbnail ? Buffer.from(img.jpegThumbnail) : undefined,
      },
    ]
    response.media = true
  }
  return response
}
function* messageHeading(message: WAMessage) {
  if (message.broadcast) yield 'Broadcast'
  const m = message.message
  if (m) {
    if (isPaymentMessage(m)) {
      const paymentInfo = message.paymentInfo!
      const amount = `${paymentInfo.currency} ${numberToBigInt(paymentInfo.amount1000!) / BigInt(1000)}`
      const status = PAYMENT_STATUS_MAP[paymentInfo.status!]
      if (m.sendPaymentMessage) {
        yield `💵 Payment to {{${paymentInfo.receiverJid}}} | ${amount} | ${status}`
      }
      if (m.requestPaymentMessage) {
        yield `💵 Payment requested from {{${m.requestPaymentMessage.requestFrom}}} | ${amount} | ${status}`
      }
      if (m.declinePaymentRequestMessage) {
        yield `💵 Payment requested from {{${m.requestPaymentMessage!.requestFrom}}} declined ${amount} | ${status}`
      }
      if (m.cancelPaymentRequestMessage) {
        yield `💵 Payment requested from {{${m.requestPaymentMessage!.requestFrom}}} canceled ${amount} | ${status}`
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
          label: button.callButton.displayText!,
          linkURL: 'tel:' + button.callButton.phoneNumber,
        })
      }
      if (button.quickReplyButton) {
        buttons.push({
          label: button.quickReplyButton.displayText!,
          linkURL: 'texts://fill-textarea?text=' + encodeURIComponent(button.quickReplyButton.displayText!),
        })
      }
      if (button.urlButton) {
        buttons.push({
          label: button.urlButton.displayText!,
          linkURL: button.urlButton.url!,
        })
      }
    })
  }
  return buttons.length === 0 ? undefined : buttons
}

function messageText(message: WAMessageContent, messageInner: any) {
  if (message?.protocolMessage?.type === WAMessageProto.ProtocolMessage.ProtocolMessageType.EPHEMERAL_SETTING) {
    const exp = message.protocolMessage.ephemeralExpiration
    return getEphemeralMessageSettingChangedText(exp!, 'sender')
  }
  const paymentMessage = message?.sendPaymentMessage || message?.requestPaymentMessage || message?.cancelPaymentRequestMessage || message?.declinePaymentRequestMessage
  if (paymentMessage) {
    if ('noteMessage' in paymentMessage) {
      const etm = paymentMessage?.noteMessage?.extendedTextMessage
      const note = etm?.text
      const jids = etm?.contextInfo?.mentionedJid
      if (note) return replaceJids(jids!, note)
    }
  }
  const loc = message?.locationMessage || message?.liveLocationMessage
  if (loc) {
    return `https://www.google.com/maps?q=${loc.degreesLatitude},${loc.degreesLongitude}\n${message?.locationMessage?.address || ''}`
  }
  const product = message?.productMessage?.product
  if (product) {
    const price = typeof product.priceAmount1000 === 'number' ? +product.priceAmount1000 : product.priceAmount1000!.low
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

function messageLink(message: WAMessageContent): MessageLink | undefined {
  const mess = message?.extendedTextMessage
  if (mess?.matchedText) {
    const jpgThumb = mess.jpegThumbnail && Buffer.from(mess.jpegThumbnail)
    return {
      url: mess.matchedText,
      img: jpgThumb && jpgThumb.length > 0 ? getDataURIFromBuffer(jpgThumb, 'image/jpeg') : undefined,
      imgSize: {
        width: 90,
        height: 90,
      },
      title: mess.title!,
      summary: mess.description!,
    }
  }
}
function messageStubText(message: WAMessage) {
  const mapped = PRE_DEFINED_MESSAGES[message.messageStubType]
  let txt = typeof mapped === 'function' ? mapped(message) : mapped
  if (txt) {
    message.messageStubParameters.forEach((p, i) => {
      txt = txt.replace(`{{${i}}}`, whatsappID(p))
    })
  }
  return txt
}

function messageStatus(status: number | string) {
  if (typeof status === 'string') {
    const key = Object.keys(WAMessageStatus).find(k => k === status)
    return WAMessageStatus[key!]
  }
  return status
}
// whatsapp allows two messages with the same ID to exist
// one that is from you and the other person
// to de-dupe, we add the fromMe flag to the message ID
export const mapMessageID = (key: WAMessageKey) => `${key!.id!}|${key?.fromMe ? 1 : 0}`

export const unmapMessageID = (id: string) => {
  const [_id, _fromMe] = id.split('|')
  return {
    id: _id,
    fromMe: _fromMe !== '0',
  }
}

export default function getMappers(store: ReturnType<typeof makeInMemoryStore>) {
  const meJid = () => store.state.user?.jid

  const contactName = (c: WAContact) => (
    c.name || c.notify || c.vname || c.short
  )
  const contactNameFromJid = (jid: string) => {
    const c = store.contacts[jid]
    if (c) return contactName(c)
  }

  const mapContacts = (contacts: (WAContact | WAGroupParticipant)[]): Participant[] => (
    contacts.map<Participant>(
      contact => {
        if (isGroupID(contact.jid)) {
          throw new Error('mapContact: cannot map a group')
        }
        if (isBroadcastID(contact.jid)) {
          throw new Error('mapContact: cannot map a broadcast list')
        }
        return {
          id: contact.jid,
          isSelf: contact.jid === meJid(),
          fullName: contactName(contact),
          phoneNumber: numberFromJid(contact.jid),
          isVerified: contact.verify === '2',
          imgURL: contact.imgUrl,
          isAdmin: (contact as WAGroupParticipant).isAdmin,
        }
      },
    )
  )

  function mapThreadParticipants(chat: Partial<WAChat>): Paginated<Participant> {
    let participants: Participant[]
    const jid = chat.jid!
    if (isGroupID(jid) || isBroadcastID(jid)) {
      const parts = store.groupMetadata[jid]?.participants || []
      participants = mapContacts(
        parts.map(p => ({ ...(store.contacts[p.jid] || {}), ...p })),
      )
    } else {
      const recipient = { jid, name: chat.name, imgUrl: store.contacts[jid]?.imgUrl }
      participants = mapContacts(store.state.user!.jid === jid
        ? [recipient]
        : [recipient, store.state.user!])
    }
    return {
      items: participants || [],
      hasMore: !participants,
    }
  }

  const mapMessagePartial = (message: Partial<WAMessage>): Pick<Message, 'id' | 'seen'> => {
    const seenMap: MessageSeen = {}
    const msgInfo = store.messageInfos[message.key!.id!]
    if (msgInfo) {
      for (const jid of Object.keys(msgInfo.reads)) {
        seenMap[jid] = msgInfo.reads[jid]
      }
    } else if (message.status === WAMessageStatus.READ) {
      const pid = whatsappID(message.key!.remoteJid!)
      if (!isGroupID(pid)) seenMap[pid] = UNKNOWN_DATE
    }
    return {
      id: mapMessageID(message.key!),
      seen: (msgInfo || message.status) ? seenMap : undefined,
    }
  }

  const mapMessageQuoted = (messageInner: any): MessagePreview | undefined => {
    if (messageInner) {
      const contextInfo = messageInner?.contextInfo as WAContextInfo
      const quoted = contextInfo?.quotedMessage
      if (quoted) {
        return {
          id: mapMessageID({ id: contextInfo.stanzaId!, fromMe: contextInfo.participant === meJid() }),
          threadID: whatsappID(contextInfo.remoteJid!),
          senderID: whatsappID(contextInfo.participant || contextInfo.remoteJid!),
          text: messageText(contextInfo.quotedMessage!, Object.values(contextInfo.quotedMessage!)[0]) || '',
        }
      }
    }
  }

  const mapMessage = (message: WAMessage) => {
    const currentUserID = meJid()!
    const messageContent = extractMessageContent(message.message)
    const messageInner = messageContent ? Object.values(messageContent)[0] : undefined

    const senderID = message.key.fromMe ? currentUserID : whatsappID(message.key.participant || message.participant || message.key.remoteJid!)
    const stubBasedMessage = messageStubText(message)
    const { attachments } = messageAttachments(messageContent!, messageInner, message.key.remoteJid!, message.key.id!)
    const timestamp = toNumber(message.messageTimestamp)
    const linked = mapMessageQuoted(messageInner)
    const link = messageLink(messageContent!)
    const action = messageAction(message)
    const isDeleted = message.messageStubType === WAMessageStubType.REVOKE

    const isEphemeralSetting = message?.message?.ephemeralMessage?.message?.protocolMessage?.type === WAMessageProto.ProtocolMessage.ProtocolMessageType.EPHEMERAL_SETTING
    const isAction = (!!stubBasedMessage && ![WAMessageStubType.REVOKE, WAMessageStubType.CIPHERTEXT].includes(message.messageStubType)) || isEphemeralSetting

    const mapped: Message = {
      _original: safeJSONStringify([message, currentUserID]),
      ...mapMessagePartial(message),
      cursor: message.key.id + '_' + Number(message.key.fromMe),
      threadID: message.key.remoteJid!,
      textHeading: [...messageHeading(message)].join('\n'),
      text: isDeleted ? 'This message has been deleted.' : (messageText(messageContent!, messageInner) ?? stubBasedMessage),
      textFooter: message.status === WAMessageStatus.PLAYED ? 'Played' : undefined,
      timestamp: new Date(timestamp * 1000),
      forwardedCount: messageInner?.contextInfo?.forwardingScore,
      senderID,
      isSender: !!message.key.fromMe,
      isDeleted,
      attachments,
      buttons: messageButtons(messageContent!),
      isDelivered: message.key.fromMe ? messageStatus(message.status) >= WAMessageStatus.SERVER_ACK : true,
      linkedMessage: linked,
      links: link ? [link] : undefined,
      parseTemplate: isAction || !!(messageInner?.contextInfo?.mentionedJid) || isPaymentMessage(message.message!),
      isAction,
      action,
      // todo: review logic, this is incorrect:
      // isErrored: !isAction && message.key.fromMe && message.status === 0,
      silent: message.broadcast || !(!!message.message || (NOTIFYING_STUB_TYPES.has(message.messageStubType) && !!message.messageStubParameters.find(w => whatsappID(w) === currentUserID))),
      expiresInSeconds: messageInner?.contextInfo?.expiration,
    }
    if (mapped.text) {
      const { text, textAttributes } = mapTextAttributes(mapped.text, store.contacts)!
      if (textAttributes) {
        mapped.text = text
        mapped.textAttributes = textAttributes
      }
    }
    return mapped
  }

  const mapMessages = (messages: WAMessage[]) =>
    messages.map(mapMessage)

  const mapChatPartial = (chat: Partial<WAChat>): PartialWithID<Thread> => {
    const mapped: PartialWithID<Thread> = {
      id: chat.jid!,
      title: chat.name || contactNameFromJid(chat.jid!),
      description: store.groupMetadata[chat.jid!]?.desc || '',
      imgURL: store.contacts[chat.jid!]?.imgUrl,
      isUnread: typeof chat.count !== 'undefined' ? !!chat.count : undefined,
      isArchived: typeof chat.archive !== 'undefined' ? chat.archive === 'true' : undefined,
      isReadOnly: typeof chat.read_only !== 'undefined' ? chat.read_only === 'true' : undefined,
      timestamp: chat.t ? new Date(+chat.t * 1000) : undefined,
      mutedUntil: undefined,
    }
    if (chat.mute) {
      if (+chat.mute > TEN_YEARS_IN_SECONDS || chat.mute === '-1') mapped.mutedUntil = 'forever'
      else mapped.mutedUntil = new Date(+chat.mute * 1000)
    }
    for (const key of Object.keys(mapped)) {
      if (key !== 'mutedUntil' && typeof mapped[key] === 'undefined') {
        delete mapped[key]
      }
    }
    return mapped
  }

  const mapChat = (chat: WAChat) => {
    if (chat.jid === STORIES_JID) {
      texts.Sentry.captureException(new Error('stories thread being mapped'))
    }
    return {
      _original: safeJSONStringify([chat, meJid()]),
      ...mapChatPartial(chat) as PartialWithID<Thread> & { isUnread: boolean, isReadOnly: boolean },
      type: threadType(chat.jid),
      createdAt: store.groupMetadata[chat.jid] ? new Date(store.groupMetadata[chat.jid].creation * 1000) : undefined,
      participants: mapThreadParticipants(chat),
      messages: {
        items: mapMessages(store.messages[chat.jid]?.array || []),
        hasMore: true,
      },
    }
  }

  const mapPresenceUpdate = (threadID: string, presenceUpdates: { [_: string]: PresenceData }) => {
    const [participantID] = Object.keys(presenceUpdates)
    const presence = presenceUpdates[participantID]
    const lastActive = presence.lastSeen ? new Date(presence.lastSeen * 1000) : undefined
    const events: ServerEvent[] = []
    if ([Presence.available, Presence.unavailable].includes(presence.lastKnownPresence!)) {
      events.push({
        type: ServerEventType.USER_PRESENCE_UPDATED,
        presence: {
          userID: participantID,
          isActive: presence.lastKnownPresence === Presence.available,
          lastActive,
        },
      })
    } else if (presence.lastKnownPresence === Presence.composing) {
      events.push({
        type: ServerEventType.USER_ACTIVITY,
        activityType: ActivityType.TYPING,
        threadID,
        participantID,
        durationMs: 120_000,
      })
    } else if (presence.lastKnownPresence === Presence.recording) {
      events.push({
        type: ServerEventType.USER_ACTIVITY,
        activityType: ActivityType.RECORDING_VOICE,
        threadID,
        participantID,
        durationMs: 120_000,
      })
    }
    if ([Presence.available, Presence.unavailable, Presence.paused].includes(presence.lastKnownPresence!)) {
      events.push({ type: ServerEventType.USER_ACTIVITY, activityType: ActivityType.NONE, threadID, participantID })
    }
    return events
  }

  return {
    contactName,
    contactNameFromJid,
    mapChatPartial,
    mapChats: (chats: WAChat[]) =>
      chats.map<Thread>(mapChat),
    mapMessagePartial,
    mapMessage,
    mapMessages,
    mapContacts,
    mapPresenceUpdate,
  }
}
