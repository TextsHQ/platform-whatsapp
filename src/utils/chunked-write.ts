import type { ObjectLiteral, Repository } from 'typeorm'

function chunkArray<T extends ObjectLiteral>(array: T[], chunkSize: number) {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(
      array.slice(i, i + chunkSize),
    )
  }
  return chunks
}

async function chunkedWrite<T extends ObjectLiteral>(repo: Repository<T>, items: T[], size: number) {
  const chunks = chunkArray(items, size)
  await Promise.all(chunks.map(async itemChunk => {
    await repo
      .createQueryBuilder()
      .insert()
      .values(itemChunk)
      .orIgnore()
      .execute()
  }))
}

export default chunkedWrite
