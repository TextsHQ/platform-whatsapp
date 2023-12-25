import type { DataSource, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'

export default async (db: EntityManager | DataSource) => {
  const msg = await db.getRepository(DBMessage)
    .findOne({ order: { orderKey: 'ASC' }, select: ['orderKey'] })
  return msg?.orderKey
}
