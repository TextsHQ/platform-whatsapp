import { AnyWASocket, isJidGroup, WAMessageKey, WAProto } from '@adiwajshing/baileys'
import type { PaginationArg } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import type { MappingContext } from '../types'
import dbGetEarliestMsgOrderKey from './db-get-earliest-msg-order-key'
import { unmapMessageID } from './generics'

const MESSAGE_PAGE_SIZE = 20
const WA_MSG_FETCH_SIZE = MESSAGE_PAGE_SIZE * 2.5

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
    .orderBy('order_key', 'DESC')
    .limit(MESSAGE_PAGE_SIZE)
  if (pagination?.cursor) {
    qb = qb.andWhere(`order_key < '${pagination.cursor}'`)
  }
  const items = (await qb.getMany()).reverse()

  if (conn.type === 'legacy') {
    if (items.length < MESSAGE_PAGE_SIZE && items[0]) {
      const beforeKey = items[0].original.message.key

      const msgs = await conn.fetchMessagesFromWA(threadID, WA_MSG_FETCH_SIZE, beforeKey ? { before: beforeKey } : undefined)
      let key = (await dbGetEarliestMsgOrderKey(db))! - msgs.length

      const dbMessages = msgs.map(m => {
        const mappedMsg = new DBMessage()
        mappedMsg.original = { message: m }
        mappedMsg.mapFromOriginal(mappingCtx)
        mappedMsg.shouldFireEvent = false
        mappedMsg.orderKey = key
        key += 1
        return mappedMsg
      })
      await db.getRepository(DBMessage).save(dbMessages, { transaction: false })
      console.log(beforeKey, dbMessages.map(m => ({ text: m.text, stamp: m.timestamp })))
      const missingMessageCount = MESSAGE_PAGE_SIZE - items.length
      items.splice(0, 0, ...dbMessages.slice(-missingMessageCount))
    }

    if (isJidGroup(threadID)) {
      const messagesToSave: DBMessage[] = []
      await Promise.all(
        items.map(
          async message => {
            if (
              message.original.message.key.fromMe
              && !message.original.downloadedReceipts
              && message.original.message.status! < WAProto.WebMessageInfo.WebMessageInfoStatus.READ
            ) {
              try {
                message.original.message.userReceipt = await conn.messageInfo(threadID, message.original.message.key.id!)
                message.original.downloadedReceipts = true
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
    oldestCursor: items[0]?.orderKey.toString(),
  }
}
