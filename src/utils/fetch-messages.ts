import type { WASocket } from '@adiwajshing/baileys'
import type { PaginationArg } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBThread from '../entities/DBThread'
import type { MappingContext } from '../types'
import { stringToSortKey, shouldMapMessage } from './generics'
import getEotMessage from './get-eot-message'

const MESSAGE_PAGE_SIZE = 20

const fetchMessages = async (
  db: Connection | EntityManager,
  conn: WASocket,
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
    const numCursor = stringToSortKey(pagination.cursor)
    qb = qb.andWhere(`order_key <= '${numCursor}'`)
  }
  let items = (await qb.getMany()).reverse()

  let hasMore = false

  if (pagination?.cursor) {
    items = items.slice(0, -1)
  }

  hasMore = hasMore || items.length >= MESSAGE_PAGE_SIZE
  if (!hasMore) {
    const thread = await db.getRepository(DBThread).findOne({ id: threadID })
    if (thread?.hasMoreMessageHistory) {
      items.unshift(getEotMessage(threadID, items[0]?.orderKey || 0, items[0]?.timestamp))
    }
  }

  return {
    items: items.map(item => {
      // remap message if required
      if (shouldMapMessage(item)) {
        item.mapFromOriginal(mappingCtx)
      }
      return DBMessage.prepareForSending(item, mappingCtx.accountID)
    }),
    hasMore,
    oldestCursor: items[0]?.orderKey?.toString(),
  }
}

export default fetchMessages
