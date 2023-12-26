import { Not, type DataSource, type EntityManager, IsNull } from 'typeorm'
import DBMessage from '../entities/DBMessage'

export default async (db: EntityManager | DataSource) => {
  const msg = await db.getRepository(DBMessage)
    .findOne({ where: { id: Not(IsNull()) }, order: { orderKey: 'ASC' }, select: ['orderKey'] })
  return msg?.orderKey
}
