import type { Connection } from 'typeorm'
import type { SignalKeyStore, SignalDataTypeMap } from '@adiwajshing/baileys'
import AccountKeyValue from '../entities/AccountKeyValue'

type DBKeyStore = SignalKeyStore & { clear: () => Promise<void> }

const KEY_MAP: { [T in keyof SignalDataTypeMap]: string } = {
  'pre-key': 'pre-key',
  session: 'session',
  'sender-key': 'sender-key',
  'app-state-sync-key': 'sync-key',
  'app-state-sync-version': 'sync-version',
  'sender-key-memory': 'sender-key-memory',
}

/**
 * Key store required for baileys.
 * Stores all keys in the sqlite database
 */
export const makeDBKeyStore = (db: Connection): DBKeyStore => {
  const repo = db.getRepository(AccountKeyValue)

  return {
    get: async (type, ids) => {
      const items = await db
        .createQueryBuilder(AccountKeyValue, 'acc')
        .where('category = :category AND id IN (:...ids)', {
          category: KEY_MAP[type],
          ids,
        })
        .getMany()
      return items.reduce(
        (dict, item) => {
          dict[item.id] = item.data
          return dict
        },
        {} as { [id: string]: SignalDataTypeMap[typeof type] },
      )
    },
    set: async data => {
      const updates: AccountKeyValue[] = []
      const deletions: Pick<AccountKeyValue, 'id' | 'category'>[] = []
      for (const key in data) {
        for (const id in data[key]) {
          const itemValue = data[key][id]
          const category = KEY_MAP[key]
          if (itemValue) {
            updates.push(repo.create({ id, category, data: itemValue }))
          } else {
            deletions.push({ id, category })
          }
        }
      }

      await db.transaction(
        async db => {
          const repo = db.getRepository(AccountKeyValue)

          if (updates.length) {
            await repo.save(updates, { transaction: false })
          }

          if (deletions.length) {
            await repo.createQueryBuilder()
              .delete()
              .where(deletions.map(d => `(id='${d.id}' AND category='${d.category}')`).join(' OR '))
              .useTransaction(false)
              .execute()
          }
        },
      )
    },
    clear: async () => {
      await repo.delete({})
    },
  }
}
