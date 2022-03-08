import type { AnyWASocket } from '@adiwajshing/baileys'
import type { PaginationArg } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'
import DBParticipant from '../entities/DBParticipant'
import DBThread from '../entities/DBThread'
import DBUser from '../entities/DBUser'
import type { MappingContext } from '../types'
import addLastMessageToThreads from './add-last-message-to-threads'
import chunkedWrite from './chunked-write'
import { numberFromJid } from './generics'

const THREAD_PAGE_SIZE = 15

const fetchThreads = async (db: Connection | EntityManager, sock: AnyWASocket | undefined, mappingCtx: MappingContext, pagination?: PaginationArg, tillCursor?: string) => {
  const repo = db.getRepository(DBThread)
  const cursor = (() => {
    if (pagination?.cursor) {
      const [date, id] = pagination?.cursor.split(',')
      return [new Date(date), id] as const
    }
  })()

  const whereClauses: string[] = []
  if (cursor) {
    whereClauses.push(`(timestamp, id) < (datetime(${cursor[0].getTime() / 1000}, 'unixepoch', 'utc'), '${cursor[1]}')`)
  }

  if (tillCursor) {
    const [date] = tillCursor.split(',')
    const till = new Date(date)
    whereClauses.push(`timestamp > datetime(${till.getTime() / 1000}, 'unixepoch', 'utc')`)
  }

  const selectClause = `(SELECT id FROM db_thread ${whereClauses.length ? `WHERE ${whereClauses.join(' AND ')}` : ''} ORDER BY timestamp DESC ${tillCursor ? '' : ` LIMIT ${THREAD_PAGE_SIZE}`})`
  const items = await repo
    .createQueryBuilder('thread')
    .leftJoinAndSelect('thread.participantsList', 'participant')
    .leftJoinAndSelect('participant.user', 'user')
    .innerJoin(selectClause, 't2', 't2.id = thread.id')
    .orderBy('timestamp', 'DESC')
    .addOrderBy('user.is_self', 'ASC')
    .getMany()

  if (items.length) {
    await Promise.all(
      [
        (async () => {
          const itemsToSave: DBThread[] = []
          const participantsToSave: DBParticipant[] = []
          await Promise.all(
            items.map(async item => {
              if (item.type === 'group' && item.requiresMapWithMetadata && sock) {
                const metadata = await (
                  sock.groupMetadata(item.id, item.isReadOnly)
                    .catch(error => {
                      mappingCtx.logger.error({ trace: error.stack, id: item.id }, 'error in fetching group meta')
                      return null
                    })
                )
                item.original = { ...item.original, metadata }
                item.shouldFireEvent = false
                item.mapFromOriginal(mappingCtx)
                itemsToSave.push(item)
                participantsToSave.push(...item.participantsList!)
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
        addLastMessageToThreads(db, items, mappingCtx.accountID),
      ],
    )
  }

  let oldestCursor: string | undefined
  if (items.length >= THREAD_PAGE_SIZE) {
    let stamp = items[items.length - 1].timestamp
    if (!stamp?.toJSON()) {
      stamp = new Date()
    }
    oldestCursor = `${stamp.toJSON()},${items[items.length - 1].id}`
  }

  const processedItems = items.map(
    item => {
      const result = DBThread.prepareForSending(item, mappingCtx.accountID)
      for (const participant of result.participants.items) {
        DBUser.prepareForSending(participant, mappingCtx.accountID)
      }
      return result
    },
  )

  return {
    items: processedItems,
    oldestCursor,
    hasMore: items.length >= THREAD_PAGE_SIZE,
  }
}

export default fetchThreads
