import { ConnectionOptions, createConnection } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import entities from '../entities'

const getConnection = async (name: string, sqlitePath: string, dbKey: string) => {
  const connection = await createConnection(
    {
      name,
      database: sqlitePath,
      type: 'better-sqlite3',
      synchronize: true,
      logging: false,
      entities,
      migrations: [],
      cli: { migrationsDir: 'src/migrations' },
      namingStrategy: new SnakeNamingStrategy(),
      key: `x'${dbKey}'`,
    } as ConnectionOptions,
  )
  return connection
}
export default getConnection
