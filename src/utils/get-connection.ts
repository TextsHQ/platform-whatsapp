import { ConnectionOptions, createConnection } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import entities from '../entities'

const getConnection = async (name: string, sqlitePath: string) => {
  const connection = await createConnection(
    {
      name,
      database: sqlitePath,
      type: 'sqlite',
      synchronize: true,
      logging: false,
      entities,
      migrations: [],
      cli: { migrationsDir: 'src/migrations' },
      namingStrategy: new SnakeNamingStrategy(),
    } as ConnectionOptions,
  )
  return connection
}
export default getConnection
