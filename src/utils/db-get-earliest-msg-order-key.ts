import type { Connection, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'

export default async (db: EntityManager | Connection) => {
  const msg = await db.getRepository(DBMessage)
    .findOne({ order: { orderKey: 'ASC' }, select: ['orderKey'] })
  return msg?.orderKey
}
