import { texts } from '@textshq/platform-sdk'
import P from 'pino'

const logger = P()
logger.level = texts.isLoggingEnabled ? 'debug' : 'silent'

export default logger
