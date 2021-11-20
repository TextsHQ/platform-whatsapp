import { ActivityType, ConnectionStatus, ThreadType } from '@textshq/platform-sdk'
import { DisconnectReason, extractMessageContent, WAPresence, WAConnectionState, WAGenericMediaMessage, WAMessage, WAMessageKey, jidNormalizedUser, jidDecode, WAProto } from '@adiwajshing/baileys-md'
import { In, Repository } from 'typeorm'

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
  const isReconnecting = statusCode !== DisconnectReason.loggedOut && statusCode !== DisconnectReason.notJoinedBeta
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

export const profilePictureUrl = (accountID: string, jid: string) => `asset://${accountID}/profile-picture/${jid}`

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
  D extends { id: string, update: (t: Partial<T>) => void },
  >(updates: Partial<T>[], repo: Repository<D>) {
  const map: { [jid: string]: Partial<T> } = { }
  const jids = updates.map(c => {
    const id = jidNormalizedUser(c.id!)
    map[id] = c
    return id
  })
  const dbItems = await repo.find({
    where: { id: In(jids) },
  })
  for (const contact of dbItems) {
    contact.update(map[contact.id!])
  }
  await repo.save(dbItems as any[])

  return dbItems
}

export const shouldExcludeMessage = (msg: WAMessage) => msg.message?.protocolMessage?.type === WAProto.ProtocolMessage.ProtocolMessageType.REVOKE
    || !!msg.message?.senderKeyDistributionMessage
