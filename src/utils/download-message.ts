import { WASocket, downloadMediaMessage, MediaDownloadOptions } from '@textshq/baileys'
import type { Asset } from '@textshq/platform-sdk'
import type { Logger } from 'pino'
import type { Connection } from 'typeorm'
import DBMessage from '../entities/DBMessage'

const downloadMessage = async (
  db: Connection,
  sock: WASocket,
  threadID: string,
  messageID: string,
  opts: MediaDownloadOptions,
  logger: Logger,
): Promise<Asset> => {
  const m = await db.getRepository(DBMessage).findOneOrFail({
    id: messageID,
    threadID,
  })

  const result = await downloadMediaMessage(
    m.original.message,
    'stream',
    opts,
    {
      logger,
      reuploadRequest: sock.updateMediaMessage,
    },
  )

  return {
    contentLength: m.attachments?.[0]?.fileSize,
    data: result,
  }
}
export const getAttachmentInfo = async (db: Connection, threadID: string, messageID: string): Promise<Partial<Asset>> => {
  const m = await db.getRepository(DBMessage).findOneOrFail({
    id: messageID,
    threadID,
  })
  return {
    contentType: m.attachments?.[0]?.mimeType,
    contentLength: m.attachments?.[0]?.fileSize,
  }
}

export default downloadMessage
