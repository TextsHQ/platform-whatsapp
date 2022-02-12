import { texts } from '@textshq/platform-sdk'
import { ConnectionOptions, createConnection } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import entities from '../entities'

const getConnection = async (name: string, sqlitePath: string) => {
  const connection = await createConnection(
    {
      name,
      database: sqlitePath,
      type: 'better-sqlite3',
      synchronize: true,
      logging: texts.IS_DEV ? ['error'] : false,
      entities,
      migrations: [],
      cli: { migrationsDir: 'src/migrations' },
      namingStrategy: new SnakeNamingStrategy(),
    } as ConnectionOptions,
  )
  return connection
}
export default getConnection
