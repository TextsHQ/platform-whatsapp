import { areJidsSameUser, Chat, Contact, jidNormalizedUser } from '@adiwajshing/baileys-md'
import type { User } from '@textshq/platform-sdk'
import { Column, Entity, PrimaryColumn } from 'typeorm'
import type { MappingContext } from '../types'
import { numberFromJid, profilePictureUrl } from '../utils/generics'

@Entity()
export default class DBUser implements User {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  id: string

  @Column({ type: 'varchar', length: 48, nullable: false })
  phoneNumber: string

  @Column({ type: 'varchar', length: 255, nullable: false })
  fullName: string

  @Column({ type: 'boolean', nullable: false })
  isSelf: boolean

  @Column({ type: 'boolean', nullable: false })
  isVerified: boolean

  @Column({ type: 'varchar', length: 512, nullable: true })
  imgURL?: string

  static fromOriginal = (item: Contact | Chat, ctx: MappingContext): DBUser => {
    const user = new DBUser()
    user.id = jidNormalizedUser(item.id)
    user.fullName = item.name || ('notify' in item ? item.notify || item.verifiedName : undefined) || ''
    user.phoneNumber = numberFromJid(user.id)!
    user.isVerified = 'verifiedName' in item ? !!item.verifiedName : false
    user.isSelf = areJidsSameUser(item.id, ctx.auth!.me!.id)
    user.imgURL = profilePictureUrl(ctx.accountID, user.id)
    return user
  }

  update(partial: Partial<Contact>) {
    if (partial.name) this.fullName = partial.name
    if (partial.imgUrl) this.imgURL = partial.imgUrl
  }
}