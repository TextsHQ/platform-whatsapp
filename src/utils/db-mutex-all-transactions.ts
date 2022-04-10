import type { Connection } from 'typeorm'
import { makeMutex } from './generics'
import MAIN_LOGGER from './logger'

/**
 * sqlite cannot run multiple transactions at the same time
 * if you try to do so, it throws an error
 *
 * to prevent that, we queue each transaction with this wrapper
*/
const dbMutexAllTransactions = (db: Connection) => {
  const logger = MAIN_LOGGER.child({ class: 'transactions' })

  const { mutex } = makeMutex()
  const { transaction } = db
  // eslint-disable-next-line no-param-reassign
  db.transaction = async (...args) => mutex(async () => {
    logger.trace({ }, 'starting transaction')
    try {
      const result = await transaction.apply(db, args)
      return result
    } catch (error) {
      logger.error({ error }, 'error in transaction')
      throw error
    } finally {
      logger.trace({ }, 'ended transaction')
    }
  })
}

export default dbMutexAllTransactions
