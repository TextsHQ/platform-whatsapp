/* eslint-disable no-param-reassign */
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
  logger = logger.child({ class: 'transactions' })

  const { mutex } = makeMutex()
  const { transaction, close } = db

  db.transaction = (...args: any) => {
    if (logger.level === 'trace') logger.trace('called transaction')
    return mutex(async () => {
      try {
        const result = await transaction.apply(db, args)
        return result
      } catch (error) {
        logger.error({ trace: error?.stack }, `error in transaction: ${error}`)
        throw error
      } finally {
        logger.trace('ended transaction')
      }
    })
  }

  db.close = async () => {
    await mutex(() => close.apply(db))
  }
}

export default dbMutexAllTransactions
