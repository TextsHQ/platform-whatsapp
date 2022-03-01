import { AnyWASocket, downloadContentFromMessage, extractMessageContent, getContentType } from '@adiwajshing/baileys'
import type { Connection } from 'typeorm'
import DBMessage from '../entities/DBMessage'

const downloadMessage = async (db: Connection, sock: AnyWASocket, threadID: string, messageID: string) => {
  const m = await db.getRepository(DBMessage).findOneOrFail({
    id: messageID,
    threadID,
  })

  if (sock.type === 'legacy') {
    const result = await sock.downloadMediaMessage(m.original.message, 'stream')
    return result
  }

  const content = extractMessageContent(m.original.message.message)
  if (content) {
    const key = getContentType(content)
    const stream = await downloadContentFromMessage(content[key] as any, key.replace('Message', '') as any)
    return stream
  }

  throw new Error('invalid message')
}

export default downloadMessage
