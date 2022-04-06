import type { AnyWASocket } from '@adiwajshing/baileys'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBThread from '../entities/DBThread'
import type { MappingContext } from '../types'
import getLastMessagesOfThread from './get-last-messages-of-thread'

/**
 * utility function to mark a chat read
 */
const readChat = async (db: Connection | EntityManager, sock: AnyWASocket, ctx: MappingContext, threadID: string, messageID?: string) => {
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
          select: ['original'],
        })

      const msgIndex = messageID ? msgs.findIndex(m => m.id === messageID) : -1
      if (msgIndex >= 0) {
        msgs = msgs.slice(msgIndex)
      }
      if (msgs.length) {
        const keys = msgs.map(m => m.original.message.key)
        if (sock.type === 'md') {
          await sock.readMessages(keys)
        } else {
          const [key] = keys
          await sock.chatRead(key, msgs.length)
        }
      }

      item.update({ unreadCount: 0 }, ctx)
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

export default readChat
