import { AnyWASocket, areJidsSameUser } from '@adiwajshing/baileys'
import type { PaginationArg } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBParticipant from '../entities/DBParticipant'
import DBThread from '../entities/DBThread'
import DBUser from '../entities/DBUser'
import type { MappingContext } from '../types'
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
  const cursorClause = cursor
    ? `(timestamp, id) < ('${cursor[0].toJSON()}', '${cursor[1]}')`
    : undefined
  const selectClause = `(SELECT id FROM db_thread ${cursorClause ? `WHERE ${cursorClause}` : ''} ORDER BY timestamp DESC LIMIT ${THREAD_PAGE_SIZE})`
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
              if (item.type === 'group' && item.requiresMapWithMetadata) {
                const metadata = await (
                  sock.groupMetadata(item.id, item.isReadOnly)
                    .catch(() => null)
                )
                item.original.metadata = metadata
                item.shouldFireEvent = false
                item.mapFromOriginal(mappingCtx)
                itemsToSave.push(item)
                participantsToSave.push(...item.participantsList!)
              }
            }),
          )

          await Promise.all([
            db.getRepository(DBThread).save(itemsToSave, { transaction: false }),
            db.getRepository(DBParticipant).save(participantsToSave, { transaction: false }),
          ])
        })(),
        (async () => {
          const messageRepo = db.getRepository(DBMessage)
          const messages = await messageRepo
            .createQueryBuilder()
            .where(
              `(thread_id, timestamp) IN (
                  SELECT thread_id, MAX(timestamp) from db_message
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
            const msg = messageMap[chat.id]
            if (msg) {
              chat.messages = {
                hasMore: true,
                items: [msg],
                oldestCursor: msg.cursor,
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
