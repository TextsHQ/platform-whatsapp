import type { DataSource } from 'typeorm'
import AccountKeyValue from '../entities/AccountKeyValue'
import DBMessage from '../entities/DBMessage'
import DBParticipant from '../entities/DBParticipant'
import DBThread from '../entities/DBThread'
import DBUser from '../entities/DBUser'

export async function dropDatabase(ds: DataSource) {
  await ds.transaction(async db => {
    await db.getRepository(DBThread).clear()
    await db.getRepository(DBParticipant).clear()
    await db.getRepository(DBUser).clear()
    await db.getRepository(DBMessage).clear()
    await db.getRepository(AccountKeyValue).clear()
  })
}
