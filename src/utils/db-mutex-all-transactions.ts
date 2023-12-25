/* eslint-disable no-param-reassign */
import type { Logger } from 'pino'
import type { DataSource } from 'typeorm'
import { makeMutex } from './generics'

/**
 * sqlite cannot run multiple transactions at the same time
 * if you try to do so, it throws an error
 *
 * to prevent that, we queue each transaction with this wrapper
*/
const dbMutexAllTransactions = (ds: DataSource, logger: Logger) => {
  logger = logger.child({ class: 'transactions' })

  const { mutex } = makeMutex()
  const { transaction, close } = ds

  ds.transaction = (...args: any) => {
    if (logger.level === 'trace') logger.trace('called transaction')
    return mutex(async () => {
      try {
        const result = await transaction.apply(ds, args)
        return result
      } catch (error) {
        logger.error({ trace: error?.stack }, `error in transaction: ${error}`)
        throw error
      } finally {
        logger.trace('ended transaction')
      }
    })
  }

  ds.close = async () => {
    await mutex(() => close.apply(ds))
  }
}

export default dbMutexAllTransactions
