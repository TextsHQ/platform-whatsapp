import type { WASocket } from 'baileys'
import type { PaginationArg } from '@textshq/platform-sdk'

import DBParticipant from '../entities/DBParticipant'
import DBThread from '../entities/DBThread'
import DBUser from '../entities/DBUser'
import addLastMessageToThreads from './add-last-message-to-threads'
import chunkedWrite from './chunked-write'
import { shouldFetchGroupMetadata } from './generics'
import type { MappingContextWithDB } from '../types'
import setParticipantUsers from './set-participant-users'

const THREAD_PAGE_SIZE = 15

const fetchThreads = async (
  sock: WASocket | undefined,
  mappingCtx: MappingContextWithDB,
  pagination?: PaginationArg,
  tillCursor?: string,
  threadID?: string,
  q?: string,
) => {
  const { db } = mappingCtx
  const repo = db.getRepository(DBThread)
  const cursor = (() => {
    const cursorStr = pagination?.cursor
    if (cursorStr) {
      const [date, id] = cursorStr.split(',')
      return [date, id] as const
    }
  })()

  const whereClauses: string[] = []
  if (cursor) {
    whereClauses.push(`(timestamp, id) < ('${cursor[0]}', '${cursor[1]}')`)
  }

  if (threadID) {
    whereClauses.push(`id = '${threadID}'`)
  }

  if (q) {
    whereClauses.push(`(
      title LIKE '%${q}%'
      OR thread_user.full_name LIKE '%${q}%'
      OR thread_user.phone_number LIKE '%${q}%'
    )`)
  }

  if (tillCursor) {
    const [date] = tillCursor.split(',')
    const till = new Date(date)
    whereClauses.push(`timestamp > '${till.toJSON()}'`)
  }

  const selectClause = `(SELECT id FROM db_thread ${whereClauses.length ? `WHERE ${whereClauses.join(' AND ')}` : ''} ORDER BY timestamp DESC, id DESC ${tillCursor ? '' : ` LIMIT ${THREAD_PAGE_SIZE}`})`
  const items = await repo
    .createQueryBuilder('thread')
    .innerJoin(selectClause, 't2', 't2.id = thread.id')
    .leftJoinAndSelect('thread.user', 'thread_user')
    // only load participants for group threads (quicker fetch due to lesser data)
    .leftJoinAndSelect('thread.participantsList', 'participant', 'thread.type = \'group\'')
    .leftJoinAndSelect('participant.user', 'user')
    .orderBy('timestamp', 'DESC')
    .addOrderBy('thread.id', 'DESC')
    .getMany()

  if (items.length) {
    await Promise.all(
      [
        (async () => {
          const itemsToSave: DBThread[] = []
          const participantsToSave: DBParticipant[] = []
          await Promise.all(
            items.map(async item => {
              if (shouldFetchGroupMetadata(item) && sock) {
                try {
                  const metadata = await sock.groupMetadata(item.id)
                  item.original = { ...item.original, metadata, lastMetadataFetchDate: new Date() }
                  item.shouldFireEvent = false
                  item.mapFromOriginal(mappingCtx)
                  delete item.user

                  itemsToSave.push(item)

                  for (const participant of item.participantsList!) {
                    participant.shouldFireEvent = false
                    participantsToSave.push(participant)
                  }
                } catch (error) {
                  mappingCtx.logger.error({ trace: error.stack, id: item.id }, 'error in fetching group meta')
                }

                await setParticipantUsers(db, item.participantsList!)
              }
            }),
          )

          if (itemsToSave.length) {
            await Promise.all([
              db.getRepository(DBThread).save(itemsToSave),
              chunkedWrite(db.getRepository(DBParticipant), participantsToSave, 100),
            ])
            mappingCtx.logger.info({ chats: itemsToSave.length }, 'updated metadatas')
          }
        })(),
        addLastMessageToThreads(items, mappingCtx),
      ],
    )
  }

  let oldestCursor: string | undefined
  if (items.length >= THREAD_PAGE_SIZE) {
    let stamp = items[items.length - 1].timestamp
    if (!stamp?.toJSON()) {
      stamp = new Date()
    }
    oldestCursor = `${toSqliteFormattedDateTimeString(stamp)},${items[items.length - 1].id}`
  }

  const processedItems = items.map(
    item => {
      item.user = item.user || null
      const result = DBThread.prepareForSending(item, mappingCtx.accountID)
      if (result.participants) {
        for (const participant of result.participants.items) {
          DBUser.prepareForSending(participant, mappingCtx.accountID)
        }
      } else {
        mappingCtx.logger.warn({ item }, 'participants unexpectedly empty')
        result.participants = { items: [], hasMore: false }
      }
      return result
    },
  )

  const hasMore = items.length >= THREAD_PAGE_SIZE

  return {
    items: processedItems,
    oldestCursor,
    hasMore,
  }
}

function toSqliteFormattedDateTimeString(date: Date) {
  return date.toISOString().replace('T', ' ').replace('Z', '')
}

export default fetchThreads
