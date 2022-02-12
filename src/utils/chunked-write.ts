import { chunk } from 'lodash'
import type { Repository } from 'typeorm'

async function chunkedWrite<T>(repo: Repository<T>, items: T[], size: number) {
  const chunks = chunk(items, size)
  for (const itemChunk of chunks) {
    await repo
      .createQueryBuilder()
      .insert()
      .values(itemChunk)
      .orIgnore()
      .execute()
  }
}

export default chunkedWrite
