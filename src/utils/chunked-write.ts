import { chunk } from 'lodash'
import type { Repository } from 'typeorm'

async function chunkedWrite<T>(repo: Repository<T>, items: T[], size: number) {
  const threadChunks = chunk(items, size)
  for (const chunk of threadChunks) {
	  await repo
      .createQueryBuilder()
      .insert()
      .values(chunk)
      .orIgnore()
      .execute()
  }
}

export default chunkedWrite
