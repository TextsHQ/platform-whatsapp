import type { DataSource, EntityManager } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBThread from '../entities/DBThread'

export default async (db: DataSource | EntityManager) => ({
  hasChats: !!(await db.getRepository(DBThread).count({ take: 1 })),
  hasMessages: !!(await db.getRepository(DBMessage).count({ take: 1 })),
})
