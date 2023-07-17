import type { PaginationArg } from '@textshq/platform-sdk'
import DBMessage from '../entities/DBMessage'
import DBThread from '../entities/DBThread'
import type { MappingContextWithDB } from '../types'
import { stringToSortKey } from './generics'
import getEotMessage from './get-eot-message'
import { remapMessagesAndSave } from './remapping'

const MESSAGE_PAGE_SIZE = 20

const fetchMessages = async (
  mappingCtx: MappingContextWithDB,
  threadID: string,
  pagination?: PaginationArg,
) => {
  const { db } = mappingCtx
  const { direction = 'before', cursor } = pagination || {}
  const directionIsBefore = direction === 'before'

  const repo = db.getRepository(DBMessage)
  let qb = await repo
    .createQueryBuilder()
    .where('thread_id = :threadID', { threadID })
    .orderBy('order_key', directionIsBefore ? 'DESC' : 'ASC')
    .limit(MESSAGE_PAGE_SIZE + (cursor ? 1 : 0))
  if (cursor) {
    const numCursor = stringToSortKey(cursor)
    qb = qb.andWhere(`order_key ${directionIsBefore ? '<=' : '>='} '${numCursor}'`)
  }
  let items = await qb.getMany()
  if (directionIsBefore) items.reverse()

  let hasMore = false

  if (cursor) {
    items = directionIsBefore
      ? items.slice(0, -1)
      : items.slice(1)
  }

  hasMore = hasMore || items.length >= MESSAGE_PAGE_SIZE
  if (!hasMore) {
    const thread = await db.getRepository(DBThread).findOne({ id: threadID })
    if (thread?.hasMoreMessageHistory) {
      items.unshift(getEotMessage(threadID, items[0]?.orderKey || 0, items[0]?.timestamp))
    }
  }

  await remapMessagesAndSave(repo, items, mappingCtx)

  return {
    items: items.map(item => (
      DBMessage.prepareForSending(item, mappingCtx.accountID)
    )),
    hasMore,
    oldestCursor: items[0]?.orderKey?.toString(),
  }
}

export default fetchMessages
