import { Column, Entity, PrimaryColumn } from 'typeorm'
import type { AuthenticationCreds } from '@adiwajshing/baileys'
import BinaryEncodedColumn from './BinaryEncodedColumn'

@Entity()
export default class AccountCredentials {
  @PrimaryColumn({ type: 'varchar', length: 128 })
  accountID: string

  @Column({ ...BinaryEncodedColumn })
  credentials: AuthenticationCreds
}
