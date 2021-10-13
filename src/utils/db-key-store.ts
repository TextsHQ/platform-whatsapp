import type { Connection } from 'typeorm'
import type { SignalKeyStore } from '@adiwajshing/baileys-md'
import AccountKeyValue from '../entities/AccountKeyValue'
import { makeMutex } from './generics'

type DBKeyStore = SignalKeyStore & { clear: () => Promise<void> }

export const makeDBKeyStore = (db: Connection): DBKeyStore => {
  const repo = db.getRepository(AccountKeyValue)
  const mutex = makeMutex()
  const getItem = async (category: string, id: string | number) => {
    const item = await repo.findOne({
      category,
      id: id.toString(),
    })
    return item?.data
  }
  const setItem = async (category: string, id: string | number, item: any | null) => {
    await mutex.mutex(async () => {
      if (item) {
        await repo.save({
          category,
          id: id.toString(),
          data: item,
        }, { transaction: false })
      } else {
        await repo.delete({ category, id: id.toString() })
      }
    })
  }

  return {
    getPreKey: keyId => getItem('pre-key', keyId),
    setPreKey: (keyId, key) => setItem('pre-key', keyId, key),
    getSession: sessionId => getItem('session', sessionId),
    setSession: (sessionId, session) => setItem('session', sessionId, session),
    getSenderKey: id => getItem('sender-key', id),
    setSenderKey: (id, item) => setItem('sender-key', id, item),
    getAppStateSyncKey: id => getItem('sync-key', id),
    setAppStateSyncKey: (id, item) => setItem('sync-key', id, item),
    getAppStateSyncVersion: id => getItem('sync-version', id),
    setAppStateSyncVersion: (id, item) => setItem('sync-version', id, item),
    clear: async () => {
      await repo.delete({ })
    },
  }
}
