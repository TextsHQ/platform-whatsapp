import type { WASocket } from '@adiwajshing/baileys'
import { texts } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'

/// runs history sync using the stored history messages in the DB
/// only for dev usage
const resyncHistory = async (db: Connection | EntityManager, client: WASocket) => {
  const repo = db.getRepository(DBMessage)
  const msgs = await repo.find({
    where: {
      isHistoryMessage: true,
    },
    order: {
      timestamp: 'ASC',
    },
  })

  texts.log(`using ${msgs.length} history messages`)

  for (const msg of msgs) {
    await client.processMessage(msg.original.message, {})
  }

  await db.getRepository(DBMessage).save(msgs)
}

export default resyncHistory
