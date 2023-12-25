import type { DataSource, EntityManager } from 'typeorm'
import DBThread from '../entities/DBThread'

export default async (db: DataSource | EntityManager, threadID: string) => {
  const item = await db.getRepository(DBThread).findOne({ id: threadID })
  return item ? { ephemeralExpiration: item.messageExpirySeconds } : undefined
}
