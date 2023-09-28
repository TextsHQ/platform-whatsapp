import { LastMessageList, toNumber } from '@textshq/baileys'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'

/**
 * fetches the last messages of a thread. Required for chat updates + reading chats
 * The function also ensures that the earliest message returned in the list must be from the other party in the chat (I don't know why, ask WA)
*/
const getLastMessagesOfThread = async (db: Connection | EntityManager, threadID: string): Promise<LastMessageList> => (
  db.transaction(
    async em => {
      const repo = em.getRepository(DBMessage)
      let allMsgs: DBMessage[]
      // find the latest message from the other party in the chat
      const lastMsgFromOther = await repo.findOne({
        where: {
          threadID,
          isAction: false,
          isSender: false,
        },
        order: { orderKey: 'DESC' },
        transaction: false,
      })
      // if we have a message from the other party in the database
      if (lastMsgFromOther) {
        const lastMsgsAfter = await repo
          .createQueryBuilder('msg')
          .where('thread_id = :chatId', { chatId: threadID })
          .andWhere('NOT msg.is_action')
          .andWhere('msg.order_key > :orderKey', { orderKey: lastMsgFromOther.orderKey })
          .orderBy('order_key', 'ASC')
          .useTransaction(false)
          .getMany()

        allMsgs = [
          ...lastMsgsAfter.reverse(),
          lastMsgFromOther,
        ]
      } else { // if no message from the other party is there, find last message by us
        allMsgs = await repo
          .createQueryBuilder('msg')
          .where('thread_id = :chatId', { chatId: threadID })
          .andWhere('NOT msg.is_action')
          .orderBy('order_key', 'DESC')
          .useTransaction(false)
          .limit(1)
          .getMany()
        if (!allMsgs.length) {
          allMsgs = await repo
            .createQueryBuilder('msg')
            .where('thread_id = :chatId', { chatId: threadID })
            .orderBy('order_key', 'DESC')
            .useTransaction(false)
            .limit(1)
            .getMany()

          if (allMsgs.length) {
            const lastMessageTimestamp = toNumber(
              allMsgs[0].original.message.messageTimestamp,
            )
            return { lastMessageTimestamp }
          }
        }
      }

      return allMsgs.map(msg => {
        const { key, messageTimestamp, participant } = msg.original.message
        if (!key.participant && participant) {
          key.participant = participant
        }
        return {
          key,
          messageTimestamp: toNumber(messageTimestamp),
        }
      })
    },
  )
)

export default getLastMessagesOfThread
