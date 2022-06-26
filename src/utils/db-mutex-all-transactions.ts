import type { Logger } from 'pino'
import type { Connection } from 'typeorm'
import { makeMutex } from './generics'

/**
 * sqlite cannot run multiple transactions at the same time
 * if you try to do so, it throws an error
 *
 * to prevent that, we queue each transaction with this wrapper
*/
const dbMutexAllTransactions = (db: Connection, logger: Logger) => {
  // eslint-disable-next-line no-param-reassign
  logger = logger.child({ class: 'transactions' })

  const { mutex } = makeMutex()
  const { transaction } = db
  // eslint-disable-next-line no-param-reassign
  db.transaction = (...args) => {
    if (logger.level === 'trace') logger.trace('called transaction')
    return mutex(async () => {
      try {
        const result = await transaction.apply(db, args)
        return result
      } catch (error) {
        logger.error({ error }, 'error in transaction')
        throw error
      } finally {
        logger.trace('ended transaction')
      }
    })
  }
}

export default dbMutexAllTransactions
