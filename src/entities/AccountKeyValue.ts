import { Column, Entity, PrimaryColumn } from 'typeorm'
import BinaryEncodedColumn from './BinaryEncodedColumn'

@Entity()
export default class AccountKeyValue {
  @PrimaryColumn({ type: 'varchar', length: 32, nullable: false })
    category: string

  @PrimaryColumn({ type: 'varchar', length: 128 })
    id: string

  @Column({ ...BinaryEncodedColumn })
    data: any
}
