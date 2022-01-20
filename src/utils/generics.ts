import { ActivityType, ConnectionStatus, ThreadType } from '@textshq/platform-sdk'
import { DisconnectReason, extractMessageContent, WAPresence, WAConnectionState, WAGenericMediaMessage, WAMessage, WAMessageKey, jidNormalizedUser, jidDecode, WAProto, isJidBroadcast, BufferJSON } from '@adiwajshing/baileys'
import { In, Repository } from 'typeorm'
import type { AnyAuthenticationCreds, MappingContext } from '../types'

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

export const getDataURIFromBuffer = (buff: Buffer, mimeType: string = '') =>
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

export const canReconnect = (error?: Error) => {
  // @ts-expect-error
  const statusCode: number = error?.output?.statusCode || 0
  const isReconnecting = statusCode !== DisconnectReason.loggedOut && statusCode !== 403
  return {
    isReconnecting,
    statusCode,
  }
}

export const makeMutex = () => {
  let task = Promise.resolve() as Promise<any>
  return {
    mutex<T>(code: () => Promise<T>):Promise<T> {
      task = (async () => {
        // wait for the previous task to complete
        // if there is an error, we swallow so as to not block the queue
        try { await task } catch { }
        // execute the current task
        return code()
      })()
      // we replace the existing task, appending the new piece of execution to it
      // so the next task will have to wait for this one to finish
      return task
    },
  }
}

export const profilePictureUrl = (accountID: string, jid: string) =>
  `asset://${accountID}/profile-picture/${encodeURIComponent(jid)}`

export const attachmentUrl = (accountID: string | undefined, jid: string, messageId: string, fileId: string) =>
  `asset://${accountID || '$accountID'}/attachment/${encodeURIComponent(jid)}/${encodeURIComponent(messageId)}/${encodeURIComponent(fileId)}`

export function threadType(jid: string): ThreadType | undefined {
  const { server } = jidDecode(jid)
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
  >(updates: Partial<T>[], repo: Repository<D>, ctx: MappingContext, upsert?: (update: Partial<T>) => D | Promise<D>) {
  const map: { [jid: string]: D } = { }
  const jids = updates.map(c => jidNormalizedUser(c.id!))
  const dbItems = await repo.find({
    where: { id: In(jids) },
  })

  for (const dbItem of dbItems) {
    map[dbItem.id] = dbItem
  }

  for (const update of updates) {
    const dbItem = map[update.id!]
    if (dbItem) {
      dbItem.update(update, ctx)
    } else if (upsert) {
      dbItems.push(await upsert(update))
    }
  }

  await repo.save(dbItems as any[])

  return dbItems
}

export const shouldExcludeMessage = (msg: WAMessage) =>
  msg.message?.protocolMessage?.type === WAProto.ProtocolMessage.ProtocolMessageType.REVOKE
    || isJidBroadcast(msg.key.remoteJid || '')

export const decodeSerializedSession = (sess: string) => {
  const parsed: AnyAuthenticationCreds = JSON.parse(sess, BufferJSON.reviver)
  if ('encKey' in parsed) {
    if (typeof parsed.encKey === 'string') {
      parsed.encKey = Buffer.from(parsed.encKey, 'base64')
      // @ts-expect-error
      parsed.macKey = Buffer.from(parsed.macKey, 'base64')
    }
  }
  return parsed
}
