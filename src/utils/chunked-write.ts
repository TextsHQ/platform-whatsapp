import type { Repository } from 'typeorm'

async function chunkedWrite<T>(repo: Repository<T>, items: T[], size: number) {
  const chunks = chunkArray(items, size)
  for (const itemChunk of chunks) {
    await repo
      .createQueryBuilder()
      .insert()
      .values(itemChunk)
      .orIgnore()
      .execute()
  }
}

function chunkArray<T>(array: T[], chunkSize: number) {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(
      array.slice(i, i + chunkSize),
    )
  }
  return chunks
}

export default chunkedWrite
