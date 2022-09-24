import type { Repository } from 'typeorm'
import type DBMessage from '../entities/DBMessage'
import { CURRENT_MAPPING_VERSION } from '../config.json'
import type { MappingContext } from '../types'
import { shouldMapMessage } from './generics'

export async function remapMessagesAndSave(
  repo: Repository<DBMessage>,
  messages: DBMessage[],
  ctx: MappingContext,
) {
  const msgsToSave: DBMessage[] = []
  for (const msg of messages) {
    if (
      msg.original
      && (
        (msg.original.lastMappedVersion || 0) < CURRENT_MAPPING_VERSION
        || shouldMapMessage(msg)
      )
    ) {
      msg.mapFromOriginal(ctx)
      msg.shouldFireEvent = false

      ctx.logger.trace({ id: msg.id }, 'remapped message')
      msgsToSave.push(msg)
    }
  }

  await repo.save(msgsToSave)
}
