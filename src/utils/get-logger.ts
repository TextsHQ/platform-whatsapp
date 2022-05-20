import { texts } from '@textshq/platform-sdk'
import { createWriteStream } from 'fs'
import P, { multistream } from 'pino'

const getLogger = (filename: string | undefined) => {
  const opts = {
    timestamp: () => `,"time":"${new Date().toJSON()}"`,
    level: texts?.isLoggingEnabled ? 'debug' : 'fatal',
  } as const
  if (filename) {
    return P(
      opts,
      multistream([
        { stream: process.stdout, level: opts.level },
        { stream: createWriteStream(filename, { flags: 'a' }), level: opts.level },
      ]),
    )
  }
  return P(opts)
}

export default getLogger
