import { areJidsSameUser, extractMessageContent, getChatId, getContentType, jidNormalizedUser, MessageUserReceipt, normalizeMessageContent, STORIES_JID, toNumber, updateMessageWithReaction, updateMessageWithReceipt, WAMessage, WAMessageStatus, WAMessageStubType, WAProto } from '@adiwajshing/baileys'
import { Message, MessageAction, Attachment, MessageBehavior, MessageButton, MessageLink, MessagePreview, MessageReaction, MessagePollVote, TextAttributes } from '@textshq/platform-sdk'
import { Column, Entity, Index, PrimaryColumn, ValueTransformer } from 'typeorm'
import { serialize, deserialize } from 'v8'
import type { FullBaileysMessage, MappingContext } from '../types'
import { isHiddenMessage, mapMessageID, sortKeyToString, safeJSONStringify } from '../utils/generics'
import { mapTextAttributes } from '../utils/text-attributes'
import BufferJSONEncodedColumn from './BufferJSONEncodedColumn'
import { isPaymentMessage, getNotificationType, mapMessageQuoted, messageAction, messageAttachments, messageButtons, messageHeading, messageLink, messageStatus, messageStubText, messageText, mapMessageSeen, mapMessageReactions, messageFooter } from './DBMessage-util'
import { CURRENT_MAPPING_VERSION } from '../config.json'

const MessageTransformer: ValueTransformer = {
  from: (buff: Buffer | null) => {
    const result = buff ? deserialize(buff) : undefined
    if (result) {
      result.message = WAProto.WebMessageInfo.decode(result.message)
    }

    return result
  },
  to: (item: FullBaileysMessage | null) => {
    if (item) {
      return serialize({ ...item, message: WAProto.WebMessageInfo.encode(item.message).finish() })
    }
    return null
  },
}

@Entity()
@Index('fetch_idx', ['threadID', 'orderKey'])
export default class DBMessage implements Message {
  @PrimaryColumn({ type: 'varchar', length: 64 })
    threadID: string

  @PrimaryColumn({ type: 'varchar', length: 64 })
    id: string

  @Column({ type: 'datetime', nullable: false })
    timestamp: Date

  @Column({ type: 'int', unsigned: true, nullable: true })
    expiresInSeconds?: number

  @Column({ type: 'int', unsigned: true, nullable: true })
    forwardedCount?: number

  @Column({ type: 'varchar', length: 64 })
    senderID: 'none' | '$thread' | string

  @Column({ type: 'boolean', nullable: false })
    isSender: boolean

  @Column({ type: 'text', nullable: true })
    text?: string

  @Column({ type: 'text', nullable: true })
    textHeading?: string

  @Column({ ...BufferJSONEncodedColumn, nullable: false, default: '[]' })
    attachments: Attachment[]

  @Column({ type: 'simple-json', nullable: false, default: '[]' })
    links: MessageLink[]

  @Column({ type: 'simple-json', nullable: false, default: 'false' })
    seen?: { [_: string]: Date } | boolean

  @Column({ type: 'boolean', nullable: false })
    isDeleted: boolean

  @Column({ type: 'simple-json', nullable: false, default: '[]' })
    buttons: MessageButton[]

  @Column({ type: 'boolean', nullable: false, default: false })
    parseTemplate: boolean

  @Column({ type: 'simple-json', nullable: true })
    linkedMessage?: MessagePreview

  @Column({ type: 'simple-json', nullable: true })
    action?: MessageAction

  @Column({ type: 'simple-json', nullable: true })
    reactions?: MessageReaction[]

  @Column({ type: 'simple-json', nullable: true })
    votes?: MessagePollVote[]

  @Column({ type: 'boolean', nullable: false, default: false })
    isAction: boolean

  @Column({ type: 'blob', transformer: MessageTransformer })
    original: FullBaileysMessage

  @Column({ type: 'int', nullable: false, unique: true })
    orderKey: number

  @Column({ type: 'varchar', length: 64, nullable: true, default: null })
    behavior?: MessageBehavior

  @Column({ type: 'boolean', default: false, nullable: false })
    isHistoryMessage: boolean

  @Column({ type: 'boolean', default: false, nullable: false })
    isHidden?: boolean | undefined

  @Column({ type: 'varchar', length: 64, nullable: true })
    linkedMessageThreadID?: string

  @Column({ type: 'varchar', length: 64, nullable: true })
    linkedMessageID?: string

  @Column({ type: 'text', nullable: true })
    textFooter?: string

  @Column({ type: 'boolean', default: false, nullable: false })
    isDelivered?: boolean

  cursor?: string

  // derived from orderKey
  sortKey?: number

  _original?: string

  textAttributes?: TextAttributes

  shouldFireEvent?: boolean

  static prepareForSending<T extends Partial<DBMessage>>(item: T, accountID: string): T {
    item = { ...item }
    if (item.text) {
      const { text, textAttributes } = mapTextAttributes(
        item.text,
        // add parenthesis so Texts can map id => name
        id => (id.startsWith('{{') ? id : `{{${id}}}`),
      )!
      if (textAttributes) {
        item.text = text
        item.textAttributes = textAttributes
      }
    }
    if (item.original) {
      item._original = JSON.stringify(item.original)
    }

    if (typeof item.seen === 'object' && item.seen) {
      for (const key in item.seen) {
        if (typeof item.seen[key] === 'string') {
          item.seen[key] = new Date(item.seen[key])
        }
      }
    }

    if (typeof item.orderKey !== 'undefined') {
      item.cursor = sortKeyToString(item.orderKey)
      item.sortKey = item.orderKey
    }

    delete item.original
    delete item._original
    delete item.isHistoryMessage
    delete item.shouldFireEvent

    return item
  }

  update(partial: Partial<WAMessage>, ctx: MappingContext) {
    if (!this.isSender && partial.status === WAMessageStatus.READ) {
      this.original.seenByMe = true
    }
    // we do not want to update timestamps
    // when messages are decrypted after failures
    if (partial.messageTimestamp && this.original.message.messageStubType === WAMessageStubType.CIPHERTEXT) {
      partial = { ...partial }
      delete partial.messageTimestamp
    }

    // handle case where message is already read
    // and we receive a delivery receipt from another device of the user
    if (
      partial.status
      && this.original.message.status
      && this.original.message.status > partial.status
    ) {
      partial = { ...partial }
      delete partial.status
    }

    Object.assign(this.original.message, partial)
    this.mapFromOriginal(ctx)
  }

  updateFromReceipt(receipt: MessageUserReceipt, ctx: MappingContext) {
    updateMessageWithReceipt(this.original.message, receipt)

    if (!this.isSender && areJidsSameUser(receipt.userJid, ctx.meID || '') && receipt.readTimestamp) {
      this.original.seenByMe = true
    }

    this.mapFromOriginal(ctx)
  }

  updateWithReaction(reaction: WAProto.IReaction, ctx: MappingContext) {
    updateMessageWithReaction(this.original.message, reaction)

    this.mapFromOriginal(ctx)
  }

  updateWithVote(pollUpdate: WAProto.IPollUpdate, ctx: MappingContext) {
    updateMessageWithReaction(this.original.message, pollUpdate.vote?.selectedOptions)

    this.mapFromOriginal(ctx)
  }

  mapFromOriginal(ctx: MappingContext) {
    const { message, seenByMe } = this.original

    const threadID = getChatId(message.key) || ''
    if (!threadID) {
      ctx.logger.warn({ key: message.key }, 'got msg with no thread')
    }

    const currentUserID = ctx.meID || ''
    let id = mapMessageID(message.key)
    // ensure we don't overwrite the ID ever
    if (id !== this.id && !!this.id) {
      id = this.id
    }

    const normalizedMessageContent = normalizeMessageContent(message.message)

    let messageContent = extractMessageContent(message.message)
    if (messageContent?.documentWithCaptionMessage) {
      messageContent = messageContent?.documentWithCaptionMessage?.message || undefined
    }

    const messageType = getContentType(messageContent)
    const messageInner = messageType && messageContent ? messageContent[messageType] : undefined

    const contextInfo = typeof messageInner === 'object' && messageInner && ('contextInfo' in messageInner) ? messageInner.contextInfo : undefined

    let senderID = message.key.fromMe ? currentUserID : (message.participant || message.key.participant || message.key.remoteJid!)
    senderID = senderID ? jidNormalizedUser(senderID) : senderID

    const stubBasedMessage = messageStubText(message)
    const threadId = getChatId(message.key)
    const { attachments } = messageAttachments(messageContent!, threadId, id)
    const timestamp = toNumber(message.messageTimestamp!) * 1000

    const linked = mapMessageQuoted(messageInner, threadId, currentUserID)
    const link = messageLink(message, normalizedMessageContent)
    const action = messageAction(message, normalizedMessageContent)
    const isDeleted = message.messageStubType === WAMessageStubType.REVOKE

    const protocolMessageType = (message?.message?.ephemeralMessage?.message || message?.message)?.protocolMessage?.type
    const isHistoryMessage = protocolMessageType === WAProto.Message.ProtocolMessage.Type.HISTORY_SYNC_NOTIFICATION
    const isPollUpdateMessage = !!message?.message?.pollUpdateMessage
    const isAction = !!(
      (
        stubBasedMessage
        && ![WAMessageStubType.REVOKE, WAMessageStubType.CIPHERTEXT].includes(message.messageStubType!)
      )
      || typeof protocolMessageType !== 'undefined'
      || isPollUpdateMessage
    )
    const msgText = messageText({ message: normalizedMessageContent, key: message.key })
      || stubBasedMessage
      || null

    const mapped: Message = {
      _original: safeJSONStringify(message),
      id,
      threadID,
      textHeading: [...messageHeading(message, normalizedMessageContent)].join('\n'),
      // @ts-expect-error
      text: isDeleted
        ? 'This message has been deleted.'
        : msgText,
      textFooter: messageFooter(message, normalizedMessageContent),
      timestamp: new Date(timestamp),
      forwardedCount: contextInfo?.forwardingScore || undefined,
      senderID,
      isSender: !!message.key.fromMe,
      isDeleted,
      attachments,
      buttons: message.message ? messageButtons(normalizedMessageContent!, message.key) : [],
      isDelivered: message.key.fromMe ? messageStatus(message.status!) >= WAMessageStatus.SERVER_ACK : true,
      // @ts-expect-error
      linkedMessage: linked || null,
      links: link ? [link] : [],
      parseTemplate: !!msgText && (
        isAction || !!(contextInfo?.mentionedJid) || isPaymentMessage(message.message!) || !!messageContent?.reactionMessage
      ),
      isAction,
      action,
      // @ts-expect-error
      behavior: seenByMe
        ? MessageBehavior.KEEP_READ
        : getNotificationType(message, normalizedMessageContent, currentUserID),
      expiresInSeconds: contextInfo?.expiration || undefined,
      seen: message.key.fromMe ? mapMessageSeen(message) : {},
      reactions: message.reactions ? mapMessageReactions(message.reactions, ctx.meID!) : undefined,
      isHidden: isHiddenMessage(message, normalizedMessageContent),
    }

    if (STORIES_JID !== linked?.threadID) {
      mapped.linkedMessageID = linked?.id
      mapped.linkedMessageThreadID = linked?.threadID
    }

    if (messageContent?.pollUpdateMessage?.pollCreationMessageKey) {
      mapped.linkedMessageID = mapMessageID(messageContent.pollUpdateMessage.pollCreationMessageKey)
    }

    Object.assign(this, mapped)
    this.original.lastMappedVersion = CURRENT_MAPPING_VERSION
    this.isHistoryMessage = isHistoryMessage
  }
}
