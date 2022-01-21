import { AnyWASocket, isJidGroup, WAMessageKey } from '@adiwajshing/baileys'
import type { PaginationArg } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import type { MappingContext } from '../types'
import { unmapMessageID } from './generics'

const MESSAGE_PAGE_SIZE = 20
const WA_MSG_FETCH_SIZE = 50

export default async (
  db: Connection | EntityManager,
  conn: AnyWASocket,
  mappingCtx: MappingContext,
  threadID: string,
  pagination?: PaginationArg,
) => {
  let qb = await db.getRepository(DBMessage)
    .createQueryBuilder()
    .where('thread_id = :threadID', { threadID })
    .orderBy('cursor', 'DESC')
    .limit(MESSAGE_PAGE_SIZE)
  if (pagination?.cursor) {
    qb = qb.andWhere(`cursor < '${pagination.cursor}'`)
  }
  const items = (await qb.getMany()).reverse()

  if (conn.type === 'legacy') {
    if (items.length < MESSAGE_PAGE_SIZE) {
      const cursorToFetch = items[0]?.cursor || pagination?.cursor
      let beforeKey: WAMessageKey | undefined
      if (cursorToFetch) {
        const [, id] = cursorToFetch.split(',')
        beforeKey = { ...unmapMessageID(id), remoteJid: threadID }
      }
      const msgs = await conn.fetchMessagesFromWA(threadID, WA_MSG_FETCH_SIZE, beforeKey ? { before: beforeKey } : undefined)
      const dbMessages = msgs.map(m => {
        const mappedMsg = new DBMessage()
        mappedMsg.original = { message: m }
        mappedMsg.mapFromOriginal(mappingCtx)
        mappedMsg.shouldFireEvent = false
        return mappedMsg
      })
      await db.getRepository(DBMessage).save(dbMessages, { transaction: false })

      const missingMessageCount = MESSAGE_PAGE_SIZE - items.length
      items.splice(0, 0, ...dbMessages.slice(-missingMessageCount))
    }

    if (isJidGroup(threadID)) {
      const messagesToSave: DBMessage[] = []
      await Promise.all(
        items.map(
          async message => {
            if (message.original.message.key.fromMe && !message.original.info) {
              try {
                message.original.info = await conn.messageInfo(threadID, message.original.message.key.id!)
                message.mapFromOriginal(mappingCtx)
                messagesToSave.push(message)
              } catch {

              }
            }
          },
        ),
      )

      await db.getRepository(DBMessage).save(messagesToSave, { transaction: false })
    }
  }

  return {
    items: items.map(item => DBMessage.prepareForSending(item, mappingCtx.accountID)),
    hasMore: items.length >= MESSAGE_PAGE_SIZE,
    oldestCursor: items[items.length - 1]?.cursor,
  }
}
