import type { Connection } from 'typeorm'
import { makeMutex } from './generics'

/**
 * sqlite cannot run multiple transactions at the same time
 * if you try to do so, it throws an error
 *
 * to prevent that, we queue each transaction with this wrapper
*/
export default (db: Connection) => {
  const { mutex } = makeMutex()
  const { transaction } = db
  db.transaction = async (...args) => {
    const result = await mutex(() => transaction.apply(db, args))
    return result
  }
}
