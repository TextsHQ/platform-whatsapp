import type { ColumnOptions } from 'typeorm'
import { BufferJSON } from '@adiwajshing/baileys-md'

const BufferJSONEncodedColumn: ColumnOptions = {
  type: 'text',
  transformer: {
    from: (buff: string | null) => (buff ? JSON.parse(buff, BufferJSON.reviver) : buff),
    to: (item: any | null) => (item ? JSON.stringify(item, BufferJSON.replacer) : null),
  },
}
export default BufferJSONEncodedColumn
