import { WAMessageStubType } from 'baileys'
import DBMessage from '../entities/DBMessage'
import { PRE_DEFINED_MESSAGES } from '../entities/DBMessage-util'
import type DBThread from '../entities/DBThread'
import type { MappingContextWithDB } from '../types'
import { remapMessagesAndSave } from './remapping'

// Array of messages that should not be shown in the sidebar as last message in a thread
// eg: 'Messages you send to this chat and calls are secured with end-to-end encryption
const HIDDEN_LAST_MESSAGE_TEXTS = [
  PRE_DEFINED_MESSAGES[WAMessageStubType.E2E_ENCRYPTED],
  PRE_DEFINED_MESSAGES[WAMessageStubType.E2E_ENCRYPTED_NOW],
  PRE_DEFINED_MESSAGES[WAMessageStubType.BIZ_PRIVACY_MODE_INIT_BSP],
]
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
          WHERE thread_id IN (:...chats)
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
    if (msg && !(msg.parseTemplate && msg.text && HIDDEN_LAST_MESSAGE_TEXTS.includes(msg.text))) {
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
