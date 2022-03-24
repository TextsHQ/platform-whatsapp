import { DEFAULT_CONNECTION_CONFIG } from '@adiwajshing/baileys'
import { texts } from '@textshq/platform-sdk'

const { logger } = DEFAULT_CONNECTION_CONFIG
logger.level = texts.isLoggingEnabled ? 'debug' : 'silent'

export default logger
