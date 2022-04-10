import { texts } from '@textshq/platform-sdk'
import P, { destination } from 'pino'

const getLogger = (filename: string | undefined) => {
  const opts = {
    timestamp: () => `,"time":"${new Date().toJSON()}"`,
    level: texts?.isLoggingEnabled ? 'debug' : 'silent',
  }
  if (filename) {
    return P(opts, destination(filename))
  }
  return P(opts)
}

export default getLogger
