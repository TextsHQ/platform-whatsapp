import { isJidGroup, unixTimestampSeconds, WAMessage } from '@adiwajshing/baileys'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import { unmapMessageID } from './generics'

/**
 * fetches the last messages of a thread. Required for chat updates + reading chats
 * The function also ensures that the earliest message returned in the list must be from the other party in the chat (I don't know why, ask WA)
*/
export default async (db: Connection | EntityManager, threadID: string) => {
  const lastMsgs: Pick<WAMessage, 'key' | 'messageTimestamp'>[] = []

  const lastMsgFromOther = await db.getRepository(DBMessage).findOne({
    where: {
      threadID,
      isAction: false,
      isSender: false,
    },
    order: { cursor: 'DESC' },
    transaction: false,
  })

  if (!lastMsgFromOther) {
    throw new Error('Cannot execute action without message from other party')
  }

  const lastMsgsAfter = await db.getRepository(DBMessage)
    .createQueryBuilder('msg')
    .where('thread_id = :chatId', { chatId: threadID })
    .andWhere('NOT msg.is_action')
    .andWhere('msg.cursor > :cursor', { cursor: lastMsgFromOther.cursor })
    .orderBy('cursor', 'ASC')
    .useTransaction(false)
    .getMany()

  const allMsgs = [
    ...lastMsgsAfter.reverse(),
    lastMsgFromOther,
  ]

  for (const msg of allMsgs) {
    const key = unmapMessageID(msg.id)
    lastMsgs.push({
      key: {
        remoteJid: threadID,
        fromMe: key.fromMe,
        id: key.id,
        participant: isJidGroup(threadID) ? msg.senderID : undefined,
      },
      messageTimestamp: unixTimestampSeconds(msg.timestamp),
    })
  }

  return lastMsgs
}
