import { texts } from '@textshq/platform-sdk'
import { createWriteStream } from 'fs'
import P, { multistream } from 'pino'

const getLogger = (filename: string | undefined) => {
  const opts = {
    timestamp: () => `,"time":"${new Date().toJSON()}"`,
    level: texts?.isLoggingEnabled ? 'debug' : 'silent',
  }
  if (filename) {
    return P(
      opts,
      multistream([
        { stream: process.stdout },
        { stream: createWriteStream(filename, { flags: 'a' }) },
      ]),
    )
  }
  return P(opts)
}

export default getLogger
