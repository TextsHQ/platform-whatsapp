import type { AuthenticationCreds, Chat, Contact, GroupMetadata, GroupParticipant, LegacyAuthenticationCreds, MessageInfo, WAMessage } from '@adiwajshing/baileys'

export type FullBaileysChat = {
  chat: Partial<Chat>
  metadata: GroupMetadata | undefined
}

export type FullBaileysMessage = {
  message: WAMessage
  info?: MessageInfo
  seenByMe?: boolean
}

export type FullChatParticipant = {
  item: Partial<Chat | GroupParticipant | Contact>
  threadID: string
}

export type MappingContext = {
  accountID: string
  meID: string | undefined
}

export type AnyAuthenticationCreds = AuthenticationCreds | LegacyAuthenticationCreds
