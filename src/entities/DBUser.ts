import { areJidsSameUser, Chat, Contact, jidNormalizedUser } from '@textshq/baileys'
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

  @Column({ type: 'text', nullable: true })
    fullName: string | undefined

  @Column({ type: 'boolean', nullable: false })
    isSelf: boolean

  @Column({ type: 'boolean', nullable: false })
    isVerified: boolean

  imgURL?: string

  shouldFireEvent?: boolean

  static fromOriginal = (item: Contact | Chat, ctx: MappingContext): DBUser => {
    const user = new DBUser()
    user.id = jidNormalizedUser(item.id)
    user.fullName = item.name || ('notify' in item ? item.verifiedName || item.notify : undefined) || (null as any)
    user.phoneNumber = numberFromJid(user.id)!
    user.isVerified = 'verifiedName' in item ? !!item.verifiedName : false
    user.isSelf = areJidsSameUser(item.id, ctx.meID || '')
    return user
  }

  static prepareForSending(item: DBUser | User, accountID: string) {
    item.imgURL = profilePictureUrl(accountID, item.id)
  }
}
