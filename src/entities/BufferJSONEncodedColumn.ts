import type { ColumnOptions } from 'typeorm'
import { BufferJSON } from 'baileys'

const BufferJSONEncodedColumn: ColumnOptions = {
  type: 'text',
  transformer: {
    from: (buff: string | null) => (typeof buff === 'string' ? JSON.parse(buff, BufferJSON.reviver) : buff),
    to: (item: any | null) => (item ? JSON.stringify(item, BufferJSON.replacer) : null),
  },
}
export default BufferJSONEncodedColumn
