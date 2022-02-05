import { AnyWASocket, areJidsSameUser } from '@adiwajshing/baileys'
import type { PaginationArg } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBParticipant from '../entities/DBParticipant'
import DBThread from '../entities/DBThread'
import DBUser from '../entities/DBUser'
import type { MappingContext } from '../types'
import chunkedWrite from './chunked-write'
import { numberFromJid } from './generics'

const THREAD_PAGE_SIZE = 15

export default async (db: Connection | EntityManager, sock: AnyWASocket, mappingCtx: MappingContext, pagination?: PaginationArg) => {
  const repo = db.getRepository(DBThread)
  const cursor = (() => {
    if (pagination?.cursor) {
      const [date, id] = pagination?.cursor.split(',')
      return [new Date(date), id] as const
    }
  })()
  const cursorClause = cursor ? `(timestamp, id) < (datetime(${cursor[0].getTime() / 1000}, 'unixepoch', 'localtime'), '${cursor[1]}')` : undefined
  const selectClause = `(SELECT id FROM db_thread ${cursorClause ? `WHERE ${cursorClause}` : ''} ORDER BY timestamp DESC LIMIT ${THREAD_PAGE_SIZE})`
  const items = await repo
    .createQueryBuilder('thread')
    .leftJoinAndSelect('thread.participantsList', 'participant')
    .leftJoinAndSelect('participant.user', 'user')
    .innerJoin(selectClause, 't2', 't2.id = thread.id', { cursorStamp: cursor?.[0]?.getTime(), cursorId: cursor?.[1] })
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
              if (item.type === 'group' && item.requiresMapWithMetadata) {
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
        (async () => {
          const messageRepo = db.getRepository(DBMessage)
          const messages = await messageRepo
            .createQueryBuilder()
            .where(
              `(thread_id, order_key) IN (
                  SELECT thread_id, MAX(order_key) from db_message
                  WHERE thread_id IN (:...chats)
                  GROUP BY thread_id
                )`,
              { chats: items.map(c => c.id) },
            )
            .getMany()

          const messageMap = messages.reduce((dict, message) => {
            dict[message.threadID] = message
            return dict
          }, { } as { [_: string]: DBMessage })

          for (const chat of items) {
            let msg = messageMap[chat.id]
            if (msg) {
              msg = DBMessage.prepareForSending(msg, mappingCtx.accountID)
              chat.messages = {
                hasMore: true,
                items: [msg],
                oldestCursor: msg.orderKey.toString(),
              }
            }
          }
        })(),
      ],
    )
  }

  const oldestCursor = items.length ? `${items[items.length - 1].timestamp?.toJSON()},${items[items.length - 1].id}` : undefined
  const processedItems = items.map(
    item => {
      const result = DBThread.prepareForSending(item, mappingCtx.accountID)
      for (const participant of result.participants.items) {
        DBUser.prepareForSending(participant, mappingCtx.accountID)
      }
      if (result.type === 'single' && !result.title) {
        const otherParticipant = result.participants.items.find(p => areJidsSameUser(p.id, item.id))
        item.title = otherParticipant?.fullName || numberFromJid(item.title) || item.title
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
