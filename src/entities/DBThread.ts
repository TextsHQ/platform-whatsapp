import { areJidsSameUser, Chat, GroupMetadata, isJidGroup, isJidUser, STORIES_JID, toNumber, WAProto } from '@textshq/baileys'
import { Message, Paginated, Participant, texts, Thread, ThreadType, User } from '@textshq/platform-sdk'
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm'
import { CHAT_MUTE_DURATION_S } from '../constants'
import type { FullBaileysChat, MappingContext } from '../types'
import { numberFromJid, profilePictureUrl, safeJSONStringify, threadType } from '../utils/generics'
import BinaryEncodedColumn from './BinaryEncodedColumn'
import DBParticipant from './DBParticipant'
import DBUser from './DBUser'

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

  @OneToMany(() => DBParticipant, ({ thread }) => thread, { cascade: false, persistence: false })
    participantsList?: DBParticipant[]

  @OneToOne(() => DBUser, { createForeignKeyConstraints: false, cascade: false, persistence: false })
  @JoinColumn({ name: 'id', referencedColumnName: 'id' })
    user?: DBUser | null

  shouldFireEvent?: boolean

  updateWithDecrementingUnreadCount(read: number, ctx: MappingContext) {
    if (read > 0) {
      this.original.chat.unreadCount = 0
      this.mapFromOriginal(ctx)
    }
  }

  update(update: Partial<Chat>, ctx: MappingContext) {
    if (update.unreadCount && update.unreadCount > 0) {
      update = { ...update }
      update.unreadCount! += Math.max(this.original.chat.unreadCount || 0, 0)
    }
    if (update.conversationTimestamp && this.original.chat.conversationTimestamp) {
      const newStamp = +toNumber(update.conversationTimestamp)
      if (newStamp < +toNumber(this.original.chat.conversationTimestamp)) {
        update = { ...update }
        delete update.conversationTimestamp
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

    // use participant list for groups
    if (isJidGroup(item.id || '')) {
      if (!item.messages) {
        item.messages = { items: [], hasMore: true }
      }

      item.participants = {
        items: item.participantsList?.map(p => p.toParticipant()) || [],
        hasMore: false,
      }
    // use "user" for single threads
    } else if (isJidUser(item.id || '') && typeof item.user !== 'undefined') {
      if (!item.messages) {
        item.messages = { items: [], hasMore: true }
      }
      // if user is truthy
      if (item.user) {
        DBUser.prepareForSending(item.user, accountID)
        item.participants = {
          items: [item.user],
          hasMore: false,
        }
      // if user is null
      } else {
        const user: User = {
          id: item.id!,
          phoneNumber: numberFromJid(item.id!),
          fullName: item.title,
        }
        DBUser.prepareForSending(user, accountID)
        item.participants = {
          items: [user],
          hasMore: false,
        }
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

    if (typeof item.title !== 'undefined') {
      item.title = item.title || undefined
    }

    delete item.participantsList
    delete item.unreadCount
    delete item.original
    delete item._original
    delete item.requiresMapWithMetadata
    delete item.hasMoreMessageHistory
    delete item.user

    return item
  }

  mapFromOriginal(ctx: MappingContext) {
    const { chat, metadata } = this.original
    const threadID = chat.id!
    if (!chat.conversationTimestamp) {
      chat.conversationTimestamp = 0
    }
    if (chat.id === STORIES_JID) {
      texts?.Sentry.captureException(new Error('stories thread being mapped'))
    }
    const type = threadType(threadID) || 'single'

    let participants: DBParticipant[]
    // we only store participants for groups
    // for single users, we store the 'user' property as the participant
    if (metadata?.participants) {
      participants = []
      for (const item of metadata.participants) {
        const participant = DBParticipant.fromOriginal({ threadID, item })
        participant.shouldFireEvent = this.shouldFireEvent
        participants.push(participant)
      }
    }

    let mute: DBThread['mutedUntil'] | null = null

    const muteEndTime = toNumber(chat?.muteEndTime) || toNumber(chat?.mute)
    if (muteEndTime) {
      mute = muteEndTime < 0 ? new Date(CHAT_MUTE_DURATION_S) : new Date(muteEndTime)
    }
    const createDate = metadata ? new Date(metadata.creation! * 1000) : undefined
    const stamp = +toNumber(chat.conversationTimestamp || chat.lastMsgTimestamp || 0)
    const partial: Partial<DBThread> = {
      // if it's a group and we do not have metadata
      requiresMapWithMetadata: type !== 'single' && typeof metadata === 'undefined',
      id: threadID,
      title: chat.name || metadata?.subject || '',
      description: metadata?.desc,
      unreadCount: chat.unreadCount || 0,
      type,
      createdAt: createDate,
      participantsList: participants!,
      isArchived: 'archived' in chat ? !!chat.archived : !!chat.archive,
      isReadOnly: metadata && ctx.meID
        ? !canWriteToGroup(metadata, ctx.meID)
        : false,
      timestamp: (stamp > 0 ? new Date(stamp * 1000) : createDate) || new Date(0),
      // @ts-expect-error
      messageExpirySeconds: chat.ephemeralExpiration! || metadata?.ephemeralDuration || null,
      hasMoreMessageHistory: typeof chat.endOfHistoryTransferType !== 'undefined'
        && chat.endOfHistoryTransferType !== WAProto.Conversation.EndOfHistoryTransferType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY,
      // @ts-expect-error
      mutedUntil: mute,
    }
    Object.assign(this, partial)
  }
}

/** can the group be written messages to */
function canWriteToGroup(metadata: GroupMetadata, meID: string) {
  // to write to the group, user must be a participant
  let participant = metadata?.participants.find(p => areJidsSameUser(meID, p.id))
  // if the group is restricted to only admins
  // check user is an admin
  if (metadata.announce) {
    if (!participant?.admin) {
      participant = undefined
    }
  }

  return !!participant
}
