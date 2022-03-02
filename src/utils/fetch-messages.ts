import { AnyWASocket, isJidGroup, WAProto } from '@adiwajshing/baileys'
import type { PaginationArg } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import type { MappingContext } from '../types'
import dbGetEarliestMsgOrderKey from './db-get-earliest-msg-order-key'
import getEotMessage from './get-eot-message'

const MESSAGE_PAGE_SIZE = 20
const WA_MSG_FETCH_SIZE = MESSAGE_PAGE_SIZE * 2.5

const fetchMessages = async (
  db: Connection | EntityManager,
  conn: AnyWASocket,
  mappingCtx: MappingContext,
  threadID: string,
  waitForConnectionOpen: () => Promise<void>,
  pagination?: PaginationArg,
) => {
  let qb = await db.getRepository(DBMessage)
    .createQueryBuilder()
    .where('thread_id = :threadID', { threadID })
    .orderBy('order_key', 'DESC')
    .limit(MESSAGE_PAGE_SIZE + (pagination?.cursor ? 1 : 0))
  if (pagination?.cursor) {
    qb = qb.andWhere(`order_key <= '${pagination.cursor}'`)
  }
  let items = (await qb.getMany()).reverse()

  let hasMore = false

  let cursorItem: DBMessage | undefined
  if (pagination?.cursor) {
    // get the item of the cursor, so we can use extra info to fetch info from legacy connection
    cursorItem = items[0]
    items = items.slice(0, -1)
  }

  if (conn?.type === 'legacy') {
    if (items.length < MESSAGE_PAGE_SIZE && cursorItem) {
      const beforeKey = cursorItem.original.message.key

      await waitForConnectionOpen()

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
      // console.log(beforeKey, dbMessages.map(m => ({ text: m.text, stamp: m.timestamp })))
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
                await waitForConnectionOpen()

                message.original.message.userReceipt = await conn.messageInfo(threadID, message.original.message.key.id!)
                message.original.downloadedReceipts = true
                message.shouldFireEvent = false
                message.mapFromOriginal(mappingCtx)
                messagesToSave.push(message)
              } catch {
                // empty
              }
            }
          },
        ),
      )

      await db.getRepository(DBMessage).save(messagesToSave, { transaction: false })
    }
  } else if (!conn) {
    // if we do not have an active connection right now -- set hasMore to true
    // so Texts can fetch messages again
    hasMore = true
  }

  hasMore = hasMore || items.length >= MESSAGE_PAGE_SIZE
  if (conn?.type === 'md' && !hasMore) {
    items.unshift(getEotMessage(threadID, items[0]?.orderKey || 0, items[0]?.timestamp))
  }

  return {
    items: items.map(item => DBMessage.prepareForSending(item, mappingCtx.accountID)),
    hasMore,
    oldestCursor: items[0]?.orderKey?.toString(),
  }
}

export default fetchMessages
