import type { Connection, EntityManager } from 'typeorm'
import DBThread from '../entities/DBThread'

const getGroupParticipantsFromDB = async (db: Connection | EntityManager, id: string) => {
  const repo = db.getRepository(DBThread)
  const item = await repo.findOne({ id })
  return item?.original.metadata!
}

export default getGroupParticipantsFromDB
