import { extractMessageContent, getContentType, isJidGroup, jidNormalizedUser, toNumber, WAMessage, WAMessageStatus, WAMessageStubType, WAProto } from '@adiwajshing/baileys'
import { Message, MessageAction, MessageAttachment, MessageBehavior, MessageButton, MessageLink, MessagePreview, TextAttributes } from '@textshq/platform-sdk'
import { AfterLoad, Column, Entity, Index, PrimaryColumn } from 'typeorm'
import { serialize, deserialize } from 'v8'
import { READ_STATUS } from '../constants'
import type { FullBaileysMessage, MappingContext } from '../types'
import { mapMessageID, safeJSONStringify } from '../utils/generics'
import { mapTextAttributes } from '../utils/text-attributes'
import BufferJSONEncodedColumn from './BufferJSONEncodedColumn'
import { isPaymentMessage, isNotifyingMessage, mapMessageQuoted, messageAction, messageAttachments, messageButtons, messageHeading, messageLink, messageStatus, messageStubText, messageText, mapMessageSeen } from './DBMessage-util'

@Entity()
@Index('fetch_idx', ['threadID', 'cursor'])
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
  attachments: MessageAttachment[]

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

  @Column({ type: 'boolean', nullable: false, default: false })
  isAction: boolean

  @Column({
    type: 'blob',
    transformer: {
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
    },
  })
  original: FullBaileysMessage

  @Column({ type: 'varchar', length: 64 })
  cursor?: string

  @Column({ type: 'varchar', length: 64, nullable: true, default: null })
  behavior?: MessageBehavior

  _original?: string

  textAttributes?: TextAttributes

  linkedMessageThreadID?: string

  linkedMessageID?: string

  textFooter?: string

  shouldFireEvent?: boolean

  static prepareForSending<T extends Partial<DBMessage>>(item: T, accountID: string): T {
    item = { ...item }
    if (item.text) {
      const { text, textAttributes } = mapTextAttributes(item.text, () => undefined)!
      if (textAttributes) {
        item.text = text
        item.textAttributes = textAttributes
      }
    }
    if (item.original) {
      item._original = JSON.stringify(item.original)
    }

    delete item.original

    return item
  }

  update(partial: Partial<WAMessage>, ctx: MappingContext) {
    if (this.original.info && partial.status && partial.key?.fromMe) {
      const p = jidNormalizedUser(partial.participant!)
      if (partial.status === WAProto.WebMessageInfo.WebMessageInfoStatus.READ) {
        this.original.info.reads[p] = new Date()
      } else if (partial.status === WAProto.WebMessageInfo.WebMessageInfoStatus.DELIVERY_ACK) {
        this.original.info.deliveries[p] = new Date()
      }
    }

    if (!partial.key?.fromMe && partial.status === WAProto.WebMessageInfo.WebMessageInfoStatus.READ && !this.original.seenByMe) {
      this.original.seenByMe = true
    }

    Object.assign(this.original.message, partial)
    this.mapFromOriginal(ctx)
  }

  mapFromOriginal(ctx: MappingContext) {
    const { message, info } = this.original
    const currentUserID = ctx.meID || ''
    const id = mapMessageID(message.key)
    const messageContent = extractMessageContent(message.message)
    const messageType = getContentType(messageContent)
    const messageInner = messageType && messageContent ? messageContent[messageType] : undefined

    const contextInfo = typeof messageInner === 'object' && messageInner && ('contextInfo' in messageInner) ? messageInner.contextInfo : undefined

    let senderID = message.key.fromMe ? currentUserID : (message.key.participant || message.participant || message.key.remoteJid!)
    senderID = jidNormalizedUser(senderID)

    const stubBasedMessage = messageStubText(message)
    const { attachments } = messageAttachments(messageContent!, messageInner, message.key.remoteJid!, id)
    const timestamp = toNumber(message.messageTimestamp!) * 1000

    const linked = mapMessageQuoted(messageInner, message.key.remoteJid!, currentUserID)
    const link = messageLink(messageContent!)
    const action = messageAction(message)
    const isDeleted = message.messageStubType === WAMessageStubType.REVOKE

    const isEphemeralSetting = message?.message?.ephemeralMessage?.message?.protocolMessage?.type === WAProto.ProtocolMessage.ProtocolMessageType.EPHEMERAL_SETTING
    const isAction = !!((!!stubBasedMessage && ![WAMessageStubType.REVOKE, WAMessageStubType.CIPHERTEXT].includes(message.messageStubType!)) || isEphemeralSetting)

    const mapped: Message = {
      _original: safeJSONStringify(message),
      id,
      cursor: timestamp + ',' + id,
      threadID: message.key.remoteJid!,
      textHeading: [...messageHeading(message)].join('\n'),
      text: isDeleted ? 'This message has been deleted.' : (messageText(messageContent!, messageInner) ?? stubBasedMessage),
      textFooter: message.status === WAMessageStatus.PLAYED ? 'Played' : undefined,
      timestamp: new Date(timestamp),
      forwardedCount: contextInfo?.forwardingScore || undefined,
      senderID,
      isSender: !!message.key.fromMe,
      isDeleted,
      attachments,
      buttons: messageButtons(messageContent!),
      isDelivered: message.key.fromMe ? messageStatus(message.status!) >= WAMessageStatus.SERVER_ACK : true,
      linkedMessage: linked,
      links: link ? [link] : undefined,
      parseTemplate: isAction || !!(contextInfo?.mentionedJid) || isPaymentMessage(message.message!),
      isAction,
      action,
      // todo: review logic, this is incorrect:
      // isErrored: !isAction && message.key.fromMe && message.status === 0,
      behavior: !isNotifyingMessage(message, currentUserID) ? MessageBehavior.SILENT : undefined,
      expiresInSeconds: contextInfo?.expiration || undefined,
      seen: mapMessageSeen(message, info),
    }

    Object.assign(this, mapped)
  }
}
