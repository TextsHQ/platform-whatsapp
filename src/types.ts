import type { BinaryNode, Chat, Contact, GroupMetadata, GroupParticipant, WAMessage } from 'baileys'
import type { Logger } from 'pino'
import type { DataSource, EntityManager } from 'typeorm'
import { FileCache } from './utils/file-cache'

export type FullBaileysChat = {
  chat: Partial<Chat> & {
    // old baileys properties
    mute?: number
    archive?: number
  }
  metadata: GroupMetadata | undefined | null
  lastMetadataFetchDate?: Date | string
}

export type FullBaileysMessage = {
  message: WAMessage
  node?: BinaryNode
  seenByMe?: boolean
  // the last version of platform-whatsapp the message was mapped on
  lastMappedVersion: number | undefined
}

export type FullChatParticipant = {
  item: Partial<Chat | GroupParticipant | Contact>
  threadID: string
}

export type MappingContext = {
  accountID: string
  meID: string | undefined
  logger: Logger
}

export type MappingContextWithDB = MappingContext & { db: DataSource | EntityManager }
export type MappingContextWithDBAndFileCache = MappingContextWithDB & { fileCache: FileCache }

export type Transaction = any

export type LoginCallback = (data: { qr: string | undefined, isOpen: boolean, error?: string }) => void

export type Receivable = 'messages' | 'contacts' | 'chats'

export type ButtonCallbackType = 'plain' | 'template' | 'list'
