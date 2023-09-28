/**
 * This whole cache mechanism exists as a workaround
 * because during the initial sync, Texts calls dispose in the middle of sync
 * causing the session to be lost or incorrectly saved
 */
import { AuthenticationCreds, BufferJSON } from '@textshq/baileys'
import type { Logger } from 'pino'

const SESSION_CREDS_CACHE: { [id: string]: AuthenticationCreds } = { }

export const decodeSerializedSession = (sess: string, logger: Logger) => {
  const auth = (
    typeof sess === 'string'
      ? JSON.parse(sess, BufferJSON.reviver)
      : sess
  ) as AuthenticationCreds

  const userId = auth.me?.id

  if (userId) {
    if (SESSION_CREDS_CACHE[userId]) {
      logger.info({ userId }, 'session cache hit')
      return SESSION_CREDS_CACHE[userId]
    }
  }

  return auth
}

export const encodeSerializedSession = (auth: AuthenticationCreds) => {
  const userId = auth.me?.id
  if (userId) {
    SESSION_CREDS_CACHE[userId] = auth
  }

  return JSON.stringify(auth, BufferJSON.replacer)
}
