import DBMessage from '../entities/DBMessage'
import type DBThread from '../entities/DBThread'
import type { MappingContextWithDB } from '../types'
import { remapMessagesAndSave } from './remapping'

const addLastMessageToThreads = async (
  chats: DBThread[],
  mappingCtx: MappingContextWithDB,
) => {
  const { db, accountID } = mappingCtx
  const messageRepo = db.getRepository(DBMessage)
  const messages = await messageRepo
    .createQueryBuilder()
    .where(
      `(thread_id, order_key) IN (
          SELECT thread_id, MAX(order_key) from db_message
          WHERE thread_id IN (:...chats) AND parse_template IS FALSE
          GROUP BY thread_id
        )`,
      { chats: chats.map(c => c.id) },
    )
    .getMany()
  await remapMessagesAndSave(messageRepo, messages, mappingCtx)

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
    } else {
      chat.messages = {
        // in case we're syncing
        // and more messages arrive in the meantime
        // hasMore will allow Texts to load them
        // when the thread is opened
        hasMore: true,
        items: [],
        oldestCursor: null,
      }
    }
  }
}

export default addLastMessageToThreads
