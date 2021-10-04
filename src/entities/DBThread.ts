import { Chat, jidNormalizedUser, STORIES_JID, toNumber } from '@adiwajshing/baileys-md'
import { Message, Paginated, Participant, texts, Thread, ThreadType } from '@textshq/platform-sdk'
import { AfterLoad, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { CHAT_MUTE_DURATION_S, TEN_YEARS_IN_SECONDS } from '../constants'
import type { FullBaileysChat, MappingContext } from '../types'
import { profilePictureUrl, safeJSONStringify, threadType } from '../utils/generics'
import DBParticipant from './DBParticipant'

@Entity()
export default class DBThread implements Thread {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  id: string

  @Column({ type: 'varchar', length: 255, nullable: false, default: '' })
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
  timestamp: Date

  @Column({ type: 'varchar', length: 255, nullable: true, default: null })
  imgURL?: string

  @Column({ type: 'datetime', nullable: true, default: null })
  createdAt?: Date

  @Column({ type: 'varchar', length: 1024, nullable: true, default: null })
  description?: string

  @Column({ type: 'int', unsigned: true, nullable: true, default: null })
  messageExpirySeconds?: number

  @Column({ type: 'text' })
  _original?: string

  isUnread: boolean

  messages: Paginated<Message>

  participants: Paginated<Participant>

  @OneToMany(() => DBParticipant, ({ thread }) => thread)
  participantsList?: DBParticipant[]

  @AfterLoad()
  computeProperties() {
    this.isUnread = !!this.unreadCount
    this.participants = {
      items: this.participantsList?.map(p => p.toParticipant()) || [],
      hasMore: false,
    }
    this.messages = { items: [], hasMore: true }
  }

  update(chat: Partial<Chat>) {
    if (typeof chat.unreadCount !== 'undefined') { this.isUnread = !!chat.unreadCount }
    if (typeof chat.archive !== 'undefined') { this.isArchived = chat.archive }
    if (typeof chat.readOnly !== 'undefined') { this.isReadOnly = !!chat.readOnly }
    if (typeof chat.conversationTimestamp !== 'undefined') {
      this.timestamp = new Date(toNumber(chat.conversationTimestamp!) * 1000)
    }
    if (typeof chat.ephemeralExpiration !== 'undefined') {
      this.messageExpirySeconds = chat.ephemeralExpiration!
    }
    if ('mute' in chat) {
      if (chat.mute) {
        if (chat.mute > TEN_YEARS_IN_SECONDS || chat.mute < 0) this.mutedUntil = new Date(CHAT_MUTE_DURATION_S)
        else this.mutedUntil = new Date(+chat.mute * 1000)
      } else {
        this.mutedUntil = undefined
      }
    }
  }

  static fromOriginal = (raw: FullBaileysChat, ctx: MappingContext): DBThread => {
    const { chat, metadata } = raw
    const threadID = jidNormalizedUser(chat.id)
    if (!chat.conversationTimestamp) {
      chat.conversationTimestamp = 0
    }
    if (chat.id === STORIES_JID) {
      texts.Sentry.captureException(new Error('stories thread being mapped'))
    }
    const type = threadType(chat.id)!
    const baileysParticipants = type === 'single' ? [chat, ctx.auth!.me!] : (metadata?.participants || [])

    const participants: DBParticipant[] = []
    const participantSet = new Set<string>()

    for (const item of baileysParticipants) {
      const id = jidNormalizedUser(item.id)
      if (!participantSet.has(id)) {
        participants.push(DBParticipant.fromOriginal({ threadID, item }))
        participantSet.add(id)
      }
    }

    const item = new DBThread()
    const partial: Partial<DBThread> = {
      id: threadID,
      title: chat.name || '',
      _original: safeJSONStringify(raw),
      type,
      createdAt: metadata ? new Date(metadata.creation * 1000) : undefined,
      participantsList: participants,
      imgURL: profilePictureUrl(ctx.accountID, threadID),
    }
    Object.assign(item, partial)
    item.update(chat)
    item.computeProperties()

    return item
  }
}
