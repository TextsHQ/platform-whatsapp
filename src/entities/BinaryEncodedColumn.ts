import type { ColumnOptions } from 'typeorm'
import { serialize, deserialize } from 'v8'

const BinaryEncodedColumn: ColumnOptions = {
  type: 'blob',
  transformer: {
    from: (buff: Buffer | null) => (buff ? deserialize(buff) : buff),
    to: (item: any | null) => (item ? serialize(item) : null),
  },
}
export default BinaryEncodedColumn
