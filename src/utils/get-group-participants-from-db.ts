import type { DataSource, EntityManager } from 'typeorm'
import DBThread from '../entities/DBThread'

const getGroupParticipantsFromDB = async (db: DataSource | EntityManager, id: string) => {
  const repo = db.getRepository(DBThread)
  const item = await repo.findOne({ id })
  return item?.original.metadata!
}

export default getGroupParticipantsFromDB
