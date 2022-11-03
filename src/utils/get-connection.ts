import { texts } from '@textshq/platform-sdk'
import type { Logger } from 'pino'
import { ConnectionOptions, createConnection } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import entities from '../entities'
import dbMutexAllTransactions from './db-mutex-all-transactions'

const logSql = process.env.LOG_SQL === '1'

const getConnection = async (name: string, sqlitePath: string, logger: Logger) => {
  const connection = await createConnection(
    {
      name,
      database: sqlitePath,
      type: 'better-sqlite3',
      synchronize: true,
      logging: logSql ? true : (texts?.isLoggingEnabled ? ['error'] : false),
      entities,
      migrations: [],
      cli: { migrationsDir: 'src/migrations' },
      namingStrategy: new SnakeNamingStrategy(),
    } as ConnectionOptions,
  )
  dbMutexAllTransactions(connection, logger)
  return connection
}
export default getConnection
