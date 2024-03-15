import { texts } from '@textshq/platform-sdk'
import type { Logger } from 'pino'
import { DataSource, DataSourceOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import entities from '../entities'
import dbMutexAllTransactions from './db-mutex-all-transactions'

const logSql = process.env.LOG_SQL === '1'

const getDataSource = async (name: string, sqlitePath: string, logger: Logger) => {
  const dataSource = new DataSource(
    {
      name,
      database: sqlitePath,
      type: 'better-sqlite3',
      synchronize: true,
      enableWAL: true,
      logging: logSql ? true : (texts?.isLoggingEnabled ? ['error'] : false),
      entities,
      migrations: [],
      cli: { migrationsDir: 'src/migrations' },
      namingStrategy: new SnakeNamingStrategy(),
    } as DataSourceOptions,
  )
  await dataSource.initialize()
  dbMutexAllTransactions(dataSource, logger)
  return dataSource
}
export default getDataSource
