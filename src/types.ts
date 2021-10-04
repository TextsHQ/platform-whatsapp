import type { AuthenticationCreds, Chat, Contact, GroupMetadata, GroupParticipant } from '@adiwajshing/baileys-md'
import type { Connection, EntityManager } from 'typeorm'

export type FullBaileysChat = {
  chat: Chat
  metadata: GroupMetadata | undefined
}

export type FullChatParticipant = {
  item: Chat | GroupParticipant | Contact
  threadID: string
}

export type MappingContext = {
  accountID: string
  db: Connection | EntityManager
  readonly auth: AuthenticationCreds | undefined
}
