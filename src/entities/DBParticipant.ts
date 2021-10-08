import { jidNormalizedUser } from '@adiwajshing/baileys-md'
import type { Participant } from '@textshq/platform-sdk'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import type { FullChatParticipant } from '../types'
import { numberFromJid } from '../utils/generics'
import DBThread from './DBThread'
import DBUser from './DBUser'

@Entity()
export default class DBParticipant {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  threadID: string

  @PrimaryColumn({ type: 'varchar', length: 64 })
  id: string

  @Column({ type: 'boolean', nullable: false, default: false })
  isAdmin: boolean

  @Column({ type: 'boolean', nullable: false, default: false })
  isSuperAdmin: boolean

  @Column({ type: 'boolean', nullable: false, default: false })
  hasExited?: boolean

  @ManyToOne(() => DBUser, { createForeignKeyConstraints: false })
  @JoinColumn({
    name: 'id',
    referencedColumnName: 'id',
  })
  user?: DBUser

  @ManyToOne(() => DBThread, { createForeignKeyConstraints: false })
  @JoinColumn({
    name: 'thread_id',
    referencedColumnName: 'id',
  })
  thread?: DBThread

  static fromOriginal = ({ threadID, item }: FullChatParticipant): DBParticipant => {
    const p = new DBParticipant()
    Object.assign(p, {
      threadID,
      id: jidNormalizedUser(item.id),
      isAdmin: 'admin' in item ? !!item.admin : false,
      isSuperAdmin: 'admin' in item ? item.admin === 'superadmin' : false,
    })
    return p
  }

  toParticipant(): Participant {
    const participant: Participant = {
      id: this.id,
      isAdmin: this.isAdmin,
    }
    if (this.user) {
      const u = { ...this.user }
      // @ts-expect-error
      delete u.prototype
      Object.assign(participant, u)
    } else {
      participant.phoneNumber = numberFromJid(this.id)
    }
    return participant
  }
}
