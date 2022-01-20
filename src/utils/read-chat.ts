import { AnyWASocket, isJidGroup, WAMessageKey } from '@adiwajshing/baileys'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBThread from '../entities/DBThread'
import { unmapMessageID } from './generics'
import getLastMessagesOfThread from './get-last-messages-of-thread'

/**
 * utility function to mark a chat read
 */
export default async (db: Connection | EntityManager, sock: AnyWASocket, threadID: string, messageID?: string) => {
  const repo = db.getRepository(DBThread)
  const item = await repo.findOne({ id: threadID })

  if (item) {
    if (item.unreadCount > 0) {
      let msgs = await db.getRepository(DBMessage)
        .find({
          where: {
            threadID,
            isSender: false,
          },
          order: { timestamp: 'DESC' },
          take: item.unreadCount,
          select: ['id', 'senderID'],
        })

      const msgIndex = messageID ? msgs.findIndex(m => m.id === messageID) : -1
      if (msgIndex >= 0) {
        msgs = msgs.slice(msgIndex)
      }
      if (msgs.length) {
        if (sock.type === 'md') {
          const isGroup = isJidGroup(threadID)
          const participant = isGroup ? msgs[0].senderID : undefined
          await sock.sendReadReceipt(threadID, participant!, msgs.map(m => unmapMessageID(m.id).id))
        } else {
          const key: WAMessageKey = {
            remoteJid: threadID,
            ...unmapMessageID(msgs[0].id),
          }
          sock.chatRead(key, msgs.length)
        }
      }

      item.unreadCount = 0
      await repo.save(item)
    } else if (item.unreadCount < 0) {
      // if the chat was unread
      // there are no messages to "read" as the chat has already been read by the user
      // and the unread state is just a notional "dot" to show in the UI
      await sock.chatModify(
        { markRead: true, lastMessages: await getLastMessagesOfThread(db, threadID) },
        threadID,
        {},
      )
    }
  }
}
