import { AnyWASocket, downloadContentFromMessage, extractMessageContent, getContentType, MediaType } from '@adiwajshing/baileys'
import type { Asset } from '@textshq/platform-sdk'
import type { Connection } from 'typeorm'
import DBMessage from '../entities/DBMessage'

const downloadMessage = async (db: Connection, sock: AnyWASocket, threadID: string, messageID: string, { startByte, endByte }: { startByte?: number, endByte?: number }): Promise<Asset> => {
  const m = await db.getRepository(DBMessage).findOneOrFail({
    id: messageID,
    threadID,
  })

  if (sock.type === 'legacy') {
    const result = await sock.downloadMediaMessage(m.original.message, 'stream')
    return {
      contentLength: m.attachments[0].fileSize,
      data: result,
    }
  }

  const content = extractMessageContent(m.original.message.message)
  if (content) {
    const key = getContentType(content)
    const stream = await downloadContentFromMessage(content[key] as any, key.replace('Message', '') as MediaType, { startByte, endByte })
    return {
      contentLength: m.attachments[0].fileSize,
      data: stream,
    }
  }

  throw new Error('invalid message')
}
export const getAttachmentInfo = async (db: Connection, threadID: string, messageID: string): Promise<Partial<Asset>> => {
  const m = await db.getRepository(DBMessage).findOneOrFail({
    id: messageID,
    threadID,
  })
  return {
    contentType: m.attachments[0].mimeType,
    contentLength: m.attachments[0].fileSize,
  }
}

export default downloadMessage
