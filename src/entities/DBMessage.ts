import { extractMessageContent, isJidGroup, jidNormalizedUser, toNumber, WAMessage, WAMessageStatus, WAMessageStubType, WAProto } from '@adiwajshing/baileys-md'
import { Message, MessageAction, MessageAttachment, MessageBehavior, MessageButton, MessageLink, MessagePreview, TextAttributes } from '@textshq/platform-sdk'
import { AfterLoad, Column, Entity, Index, PrimaryColumn } from 'typeorm'
import { READ_STATUS } from '../constants'
import type { MappingContext } from '../types'
import { mapMessageID, safeJSONStringify } from '../utils/generics'
import { mapTextAttributes } from '../utils/text-attributes'
import BufferJSONEncodedColumn from './BufferJSONEncodedColumn'
import { isPaymentMessage, isNotifyingMessage, mapMessageQuoted, messageAction, messageAttachments, messageButtons, messageHeading, messageLink, messageStatus, messageStubText, messageText } from './DBMessage-util'

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

  @Column({ type: 'text' })
  _original?: string

  @Column({ type: 'varchar', length: 64 })
  cursor?: string

  @Column({ type: 'varchar', length: 64, nullable: true, default: null })
  behavior?: MessageBehavior

  textAttributes?: TextAttributes

  linkedMessageThreadID?: string

  linkedMessageID?: string

  textFooter?: string

  shouldFireEvent?: boolean

  @AfterLoad()
  computeProperties() {
    if (this.text) {
      const { text, textAttributes } = mapTextAttributes(this.text, () => undefined)!
      if (textAttributes) {
        this.text = text
        this.textAttributes = textAttributes
      }
    }
  }

  update(partial: Partial<WAMessage>) {
    const update: Partial<DBMessage> = { }
    if (partial.status) {
      if (partial.key!.fromMe) {
        if (isJidGroup(partial.key!.remoteJid!)) {
          if (typeof this.seen === 'object') {
            const p = jidNormalizedUser(partial.participant!)
            this.seen[p] = new Date()
          } else {
            // cannot unambigously determine seen
          }
        } else {
          update.seen = READ_STATUS.includes(partial.status)
        }
      } else if (partial.status === WAProto.WebMessageInfo.WebMessageInfoStatus.READ && !update.seen) {
        update.seen = true
      }
    }

    if (partial.messageStubType) {
      update.text = ''
      update.attachments = []
      update.isDeleted = true
    }

    Object.assign(this, update)

    return update
  }

  static fromOriginal = (message: WAMessage, ctx: MappingContext) => {
    const currentUserID = ctx.auth!.me!.id
    const id = mapMessageID(message.key)
    const messageContent = extractMessageContent(message.message)
    const messageInner = messageContent ? Object.values(messageContent)[0] : undefined

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
      forwardedCount: messageInner?.contextInfo?.forwardingScore,
      senderID,
      isSender: !!message.key.fromMe,
      isDeleted,
      attachments,
      buttons: messageButtons(messageContent!),
      isDelivered: message.key.fromMe ? messageStatus(message.status!) >= WAMessageStatus.SERVER_ACK : true,
      linkedMessage: linked,
      links: link ? [link] : undefined,
      parseTemplate: isAction || !!(messageInner?.contextInfo?.mentionedJid) || isPaymentMessage(message.message!),
      isAction,
      action,
      // todo: review logic, this is incorrect:
      // isErrored: !isAction && message.key.fromMe && message.status === 0,
      behavior: !isNotifyingMessage(message, currentUserID) ? MessageBehavior.SILENT : undefined,
      expiresInSeconds: messageInner?.contextInfo?.expiration,
    }

    const dbMsg = new DBMessage()
    Object.assign(dbMsg, mapped)

    return dbMsg
  }
}
