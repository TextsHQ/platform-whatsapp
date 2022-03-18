import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import type DBThread from '../entities/DBThread'

const addLastMessageToThreads = async (
  db: EntityManager | Connection,
  chats: DBThread[],
  accountID: string,
) => {
  const messageRepo = db.getRepository(DBMessage)
  const messages = await messageRepo
    .createQueryBuilder()
    .where(
      `(thread_id, order_key) IN (
          SELECT thread_id, MAX(order_key) from db_message
          WHERE thread_id IN (:...chats)
          GROUP BY thread_id
        )`,
      { chats: chats.map(c => c.id) },
    )
    .getMany()

  const messageMap = messages.reduce((dict, message) => {
    dict[message.threadID] = message
    return dict
  }, { } as { [_: string]: DBMessage })

  for (const chat of chats) {
    let msg = messageMap[chat.id]
    if (msg) {
      msg = DBMessage.prepareForSending(msg, accountID)
      chat.messages = {
        hasMore: true,
        items: [msg],
        oldestCursor: msg.orderKey.toString(),
      }
    }
  }
}

export default addLastMessageToThreads
