import type { AuthenticationCreds, Chat, Contact, GroupMetadata, GroupParticipant, LegacyAuthenticationCreds, WAMessage } from '@adiwajshing/baileys'
import type { texts } from '@textshq/platform-sdk'
import type { Logger } from 'pino'
import type { Connection, EntityManager } from 'typeorm'

export type FullBaileysChat = {
  chat: Partial<Chat>
  metadata: GroupMetadata | undefined | null
  lastMetadataFetchDate?: Date | string
}

export type FullBaileysMessage = {
  message: WAMessage
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

export type MappingContextWithDB = MappingContext & { db: Connection | EntityManager }

export type AnyAuthenticationCreds = AuthenticationCreds | LegacyAuthenticationCreds

export type Transaction = ReturnType<typeof texts.Sentry.startTransaction>

export type LoginCallback = (data: { qr: string | undefined, isOpen: boolean, error?: string }) => void

export type Receivable = 'messages' | 'contacts' | 'chats'

export type ButtonCallbackType = 'plain' | 'template'
