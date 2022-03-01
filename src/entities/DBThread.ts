import { Chat, jidNormalizedUser, STORIES_JID, toNumber, WAProto } from '@adiwajshing/baileys'
import { Message, Paginated, Participant, texts, Thread, ThreadType } from '@textshq/platform-sdk'
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { CHAT_MUTE_DURATION_S } from '../constants'
import type { FullBaileysChat, MappingContext } from '../types'
import { profilePictureUrl, safeJSONStringify, threadType } from '../utils/generics'
import BinaryEncodedColumn from './BinaryEncodedColumn'
import DBParticipant from './DBParticipant'

@Entity()
export default class DBThread implements Thread {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  id: string

  @Column({ type: 'text', nullable: false, default: '' })
  title: string

  @Column({ type: 'int', unsigned: false, nullable: false, default: 0 })
  unreadCount: number

  @Column({ type: 'boolean', nullable: false, default: false })
  isReadOnly: boolean

  @Column({ type: 'boolean', nullable: false, default: false })
  isArchived: boolean

  @Column({ type: 'datetime', nullable: true, default: null })
  mutedUntil?: Date

  @Column({ type: 'varchar', length: 64, nullable: false })
  type: ThreadType

  @Column({ type: 'datetime', nullable: false })
  timestamp?: Date

  @Column({ type: 'datetime', nullable: true, default: null })
  createdAt?: Date

  @Column({ type: 'text', nullable: true, default: null })
  description?: string

  @Column({ type: 'int', unsigned: true, nullable: true, default: null })
  messageExpirySeconds?: number

  @Column({ type: 'boolean', nullable: false, default: false })
  /// for groups, we need the metadata to fully map description & participants
  requiresMapWithMetadata: boolean

  @Column({ type: 'boolean', nullable: false, default: true })
  /// primarily for MD, if we have message history on the primary device
  hasMoreMessageHistory: boolean

  @Column({ ...BinaryEncodedColumn, nullable: false })
  original: FullBaileysChat

  _original?: string

  imgURL?: string

  isUnread: boolean

  messages: Paginated<Message>

  participants: Paginated<Participant>

  @OneToMany(() => DBParticipant, ({ thread }) => thread)
  participantsList?: DBParticipant[]

  shouldFireEvent?: boolean

  update(update: Partial<Chat>, ctx: MappingContext) {
    if (update.unreadCount && update.unreadCount > 0) {
      if (this.original.chat.unreadCount && this.original.chat.unreadCount > 0) {
        update = { ...update }
        update.unreadCount! += this.original.chat.unreadCount
      }
    }
    Object.assign(this.original.chat, update)

    this.mapFromOriginal(ctx)
  }

  static prepareForSending<T extends Partial<DBThread>>(item: T, accountID: string): T {
    item = { ...item }
    if (typeof item.unreadCount !== 'undefined') {
      item.isUnread = !!item.unreadCount
    }
    if (typeof item.mutedUntil !== 'undefined') {
      // @ts-expect-error
      item.mutedUntil = item.mutedUntil ? 'forever' : null
    }
    if (item.original) {
      item._original = safeJSONStringify(item.original)
    }
    if (typeof item.participantsList !== 'undefined') {
      if (!item.messages) {
        item.messages = { items: [], hasMore: true }
      }
      item.participants = {
        items: item.participantsList.map(p => p.toParticipant()) || [],
        hasMore: false,
      }
    }
    if (item.id && item.type !== 'single') {
      item.imgURL = profilePictureUrl(accountID, item.id!)
    }

    if (item.timestamp) {
      const time = item.timestamp.getTime()
      if (Number.isNaN(time) || time === 0) {
        item.timestamp = undefined
      }
    }

    delete item.participantsList
    delete item.unreadCount
    delete item.original
    return item
  }

  mapFromOriginal(ctx: MappingContext) {
    const { chat, metadata } = this.original
    const threadID = jidNormalizedUser(chat.id!)
    if (!chat.conversationTimestamp) {
      chat.conversationTimestamp = 0
    }
    if (chat.id === STORIES_JID) {
      texts.Sentry.captureException(new Error('stories thread being mapped'))
    }
    const type = threadType(threadID)!
    const baileysParticipants = type === 'single' ? [chat, { id: ctx.meID }] : (metadata?.participants || [])

    const participants: DBParticipant[] = []
    const participantSet = new Set<string>()

    for (const item of baileysParticipants) {
      const id = jidNormalizedUser(item.id!)
      if (!participantSet.has(id)) {
        const participant = DBParticipant.fromOriginal({ threadID, item })
        participant.shouldFireEvent = this.shouldFireEvent
        participants.push(participant)
        participantSet.add(id)
      }
    }

    let mute: DBThread['mutedUntil'] | null = null
    if (chat.mute) {
      mute = chat.mute < 0 ? new Date(CHAT_MUTE_DURATION_S) : new Date(+chat.mute)
    }
    const createDate = metadata ? new Date(metadata.creation * 1000) : undefined
    const partial: Partial<DBThread> = {
      // if it's a group and we do not have metadata
      requiresMapWithMetadata: type !== 'single' && typeof metadata === 'undefined',
      id: threadID,
      title: chat.name || metadata?.subject || '',
      unreadCount: chat.unreadCount || 0,
      type,
      createdAt: createDate,
      participantsList: participants,
      isArchived: !!chat.archive,
      isReadOnly: !!chat.readOnly,
      timestamp: (chat.conversationTimestamp ? new Date(toNumber(chat.conversationTimestamp) * 1000) : createDate) || new Date(0),
      messageExpirySeconds: chat.ephemeralExpiration! || metadata?.ephemeralDuration,
      hasMoreMessageHistory: chat.endOfHistoryTransferType !== WAProto.Conversation.ConversationEndOfHistoryTransferType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY,
      // @ts-expect-error
      mutedUntil: mute,
    }
    Object.assign(this, partial)
  }
}
