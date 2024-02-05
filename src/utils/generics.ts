import { ActivityType, Awaitable, ConnectionStatus, Message, ThreadType, texts } from '@textshq/platform-sdk'
import { makeEventBuffer, DisconnectReason, extractMessageContent, WAPresence, WAConnectionState, WAGenericMediaMessage, WAMessage, WAMessageKey, jidNormalizedUser, jidDecode, WAProto, isJidBroadcast, normalizeMessageContent, isJidGroup, getContentType, AuthenticationCreds, WAMessageStubType, delay } from 'baileys'
import { randomBytes } from 'crypto'
import { FindOptionsWhere, In, Repository } from 'typeorm'
import type { Logger } from 'pino'
import mimeDb from 'mime-db'
import type { MappingContext } from '../types'
import type DBThread from '../entities/DBThread'
import { MAX_EVENT_BUFFER_WAIT } from '../config.json'

export const LOGGED_OUT_CODES = [
  DisconnectReason.loggedOut,
  419,
  403,
]

const NOT_RECONNECT_CODES = [
  ...LOGGED_OUT_CODES,
  500,
]

const GROUP_META_EXPIRY_INTERVAL_S = 24 * 60 * 60

export const CONNECTION_STATE_MAP: { [K in WAConnectionState]: ConnectionStatus } = {
  open: ConnectionStatus.CONNECTED,
  close: ConnectionStatus.DISCONNECTED,
  connecting: ConnectionStatus.CONNECTING,
}

export const PARTICIPANT_ACTION_MAP = {
  admin: 'promote',
  regular: 'demote',
} as const

export const PRESENCE_MAP: { [T in ActivityType]: WAPresence } = {
  [ActivityType.NONE]: 'paused',
  [ActivityType.TYPING]: 'composing',
  [ActivityType.RECORDING_VOICE]: 'recording',
  [ActivityType.RECORDING_VIDEO]: 'recording',
  [ActivityType.CUSTOM]: 'available',
  [ActivityType.OFFLINE]: 'unavailable',
  [ActivityType.ONLINE]: 'available',
}

export const numberFromJid = (jid: string) => {
  const result = jidDecode(jid)
  if (result?.server === 's.whatsapp.net' || result?.server === 'c.us') {
    return '+' + result.user
  }
}

export const getDataURIFromBuffer = (buff: Buffer, mimeType = '') =>
  `data:${mimeType};base64,${buff.toString('base64')}`

export const hasUrl = (msg: WAMessage) => {
  const content = extractMessageContent(msg.message)
  if (!content) return false

  const key = Object.keys(content)[0]
  const message = content[key] as WAGenericMediaMessage
  return !!message?.url
}

export function safeJSONStringify(obj: any) {
  try {
    return JSON.stringify(obj)
  } catch (err) {
    // swallow
  }
}

export const canReconnect = (error: Error | undefined, retriesLeft: number) => {
  // @ts-expect-error
  const statusCode: number = error?.output?.statusCode || 0
  let isReconnecting = !NOT_RECONNECT_CODES.includes(statusCode) // can be reconnected
    && retriesLeft > 0 // some retries left
    && !!error // was not an intentional close
  // reconnect on all WebSocket errors
  isReconnecting = isReconnecting || !!error?.message.includes('WebSocket Error')
  if (statusCode === DisconnectReason.multideviceMismatch) {
    isReconnecting = false
  }

  if (!isReconnecting) {
    texts?.Sentry.captureMessage(`Whatsapp cannot reconnect. Error: ${error?.message}. Status code: ${statusCode}`, { extra: { retriesLeft } })
    if (error) texts?.Sentry.captureException(error)
  }

  return {
    isReconnecting,
    statusCode,
  }
}

export const makeMutex = () => {
  let task = Promise.resolve() as Promise<any>
  return {
    mutex<T>(code: () => Promise<T>): Promise<T> {
      task = (async () => {
        // wait for the previous task to complete
        // if there is an error, we swallow so as to not block the queue
        try {
          await task
        } catch {
          // do nothing
        }
        // execute the current task
        return code()
      })()
      // we replace the existing task, appending the new piece of execution to it
      // so the next task will have to wait for this one to finish
      return task
    },
  }
}

export const getExtFromMimeType = (mimeType: string) => {
  if (!mimeType) return
  const entry = mimeDb[mimeType]
  return entry?.extensions?.[0] || mimeType.split('/')?.[1].split(/\W/)[0]
}

export const profilePictureUrl = (accountID: string, jid: string) =>
  `asset://${accountID}/profile-picture/${encodeURIComponent(jid)}`

export const attachmentUrl = (accountID: string | undefined, jid: string, messageId: string, fileId: string) =>
  `asset://${accountID || '$accountID'}/attachment/${encodeURIComponent(jid)}/${encodeURIComponent(messageId)}/${encodeURIComponent(fileId)}`

export function threadType(jid: string): ThreadType | undefined {
  const { server } = jidDecode(jid)!
  if (server === 'g.us') return 'group'
  if (server === 'broadcast') return 'broadcast'
  if (server === 's.whatsapp.net' || server === 'c.us') return 'single'
}

// whatsapp allows two messages with the same ID to exist
// one that is from you and the other person
// to de-dupe, we add the fromMe flag to the message ID
export const mapMessageID = (key: WAMessageKey) => `${key!.id!}|${key?.fromMe ? 1 : 0}`

export const unmapMessageID = (id: string) => {
  const [_id, _fromMe] = id.split('|')
  return {
    id: _id,
    fromMe: _fromMe !== '0',
  }
}

export async function updateItems<
  T extends { id: string },
  D extends { id: string, update: (t: Partial<T>, ctx: MappingContext) => void },
  >(updates: Partial<T>[], repo: Repository<D>, ctx: MappingContext, upsert?: (update: Partial<T>) => Awaitable<D | undefined>) {
  const map: { [jid: string]: D } = { }
  const jids = updates.map(c => jidNormalizedUser(c.id!))
  const dbItems = await repo.find({
    where: { id: In(jids) } as FindOptionsWhere<D>,
  })

  for (const dbItem of dbItems) {
    map[dbItem.id] = dbItem
  }

  for (const update of updates) {
    const dbItem = map[update.id!]
    if (dbItem) {
      dbItem.update(update, ctx)
    } else if (upsert) {
      const upserted = await upsert(update)
      if (upserted) {
        dbItems.push(upserted)
      }
    }
  }

  await repo.save(dbItems as any[])

  return dbItems
}

export const shouldExcludeMessage = (msg: WAMessage) => {
  if (
    isJidBroadcast(msg.key.remoteJid || '')
    && msg.key.fromMe
  ) return true
  const content = msg.message ? normalizeMessageContent(msg.message) : msg.message
  return content?.protocolMessage?.type === WAProto.Message.ProtocolMessage.Type.REVOKE
}

const HIDDEN_PROTOCOL_MESSAGE_TYPES = [
  WAProto.Message.ProtocolMessage.Type.HISTORY_SYNC_NOTIFICATION,
  WAProto.Message.ProtocolMessage.Type.APP_STATE_SYNC_KEY_SHARE,
  WAProto.Message.ProtocolMessage.Type.APP_STATE_SYNC_KEY_REQUEST,
  WAProto.Message.ProtocolMessage.Type.MESSAGE_EDIT,
  WAProto.Message.ProtocolMessage.Type.EPHEMERAL_SYNC_RESPONSE,
]

export const isHiddenProtocolMessage = (normalizedMessageContent: WAProto.IMessage | null | undefined) =>
  (normalizedMessageContent?.protocolMessage?.type ? HIDDEN_PROTOCOL_MESSAGE_TYPES.includes(normalizedMessageContent.protocolMessage.type) : false)

export const isHiddenGroupParticipantMessage = (msg: WAMessage) => (msg.messageStubParameters?.[0]?.includes('lid')
  && (msg.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD || msg.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE)) || false

/** Is the message supposed to be hidden */
export const isHiddenMessage = (msg: WAMessage, normalizedMessageContent: WAProto.IMessage | undefined) => {
  const contentType = normalizedMessageContent ? getContentType(normalizedMessageContent) : undefined
  // reaction messages should be hidden
  return contentType === 'reactionMessage'
    || contentType === 'keepInChatMessage'
    || contentType === 'pinInChatMessage'
    || contentType === 'encReactionMessage'
    // if there is no content or stub type -- should not show the message
    || (!contentType && !msg.messageStubType)
    || msg.messageStubType === WAMessageStubType.E2E_DEVICE_FETCH_FAILED
    || msg.messageStubType === WAMessageStubType.COMMUNITY_LINK_SUB_GROUP // Not rendered in the native client
    || msg.messageStubType === WAMessageStubType.COMMUNITY_UNLINK_SUB_GROUP // Not rendered in the native client
    || isHiddenProtocolMessage(normalizedMessageContent)
    || isHiddenGroupParticipantMessage(msg)
}

export const shouldFetchGroupMetadata = ({ requiresMapWithMetadata, original: { chat, metadata, lastMetadataFetchDate } }: DBThread) => {
  if (isJidGroup(chat.id || '')) {
    const date = new Date(lastMetadataFetchDate || 0)
    const secondsSinceFetch = (Date.now() - date.getTime()) / 1000
    if (secondsSinceFetch > GROUP_META_EXPIRY_INTERVAL_S || requiresMapWithMetadata || !metadata) {
      return true
    }
  }
}

export const isLoggedIn = (creds: AuthenticationCreds) => !!creds.me?.id

export const shouldMapMessage = (m: Message) =>
  !m.attachments?.length
  && !m.text
  && !m.textHeading
  && !m.isDeleted
  && !m.links?.length
  && !m.tweets?.length

export function sortKeyToString(num: number) {
  return num.toString(16)
}

export function stringToSortKey(str: string) {
  return parseInt(str, 16)
}

export async function waitForAllEventsToBeHandled(
  ev: ReturnType<typeof makeEventBuffer>,
  logger: Logger,
) {
  const start = Date.now()
  if (ev.isBuffering()) {
    logger.debug('waiting for event buffer to flush...')
  }

  while (ev.isBuffering() && !didTimeout()) {
    await delay(100)
  }

  if (didTimeout()) {
    logger.warn('timed out while releasing buffer')
    // flush any events that can be flushed
    ev.flush(true)
  }

  logger.debug('event buffer flushed')

  function didTimeout() {
    return Date.now() - start > MAX_EVENT_BUFFER_WAIT
  }
}

export function generateInstanceId() {
  return randomBytes(2).toString('hex')
}

/**
 * recursively removes all undefined values from an object
 * @param obj obj to remove from
 * @param visited set of visited objects to avoid circular references
 */
export function clearUndefineds<T>(obj: T, visited = new WeakSet()) {
  if (!obj) {
    return
  }

  if (typeof obj === 'object' && obj !== null) {
    if (visited.has(obj)) {
      return
    }
    visited.add(obj)

    for (const key in obj) {
      if (obj[key] === undefined) {
        delete obj[key]
      } else {
        clearUndefineds(obj[key], visited)
      }
    }
  }

  return obj
}

export function getPhoneNumberFromId(id: string) {
  const result = jidDecode(id)
  if (result?.server !== 's.whatsapp.net') return
  return result.user
}
