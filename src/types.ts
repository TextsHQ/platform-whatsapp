import { WAContact, WAMessage, WAChat, MessageInfo } from '@adiwajshing/baileys'

export interface WACompleteMessage extends WAMessage {
  info?: MessageInfo
}

export interface WACompleteChat extends WAChat {
  participants: WACompleteContact[]
  admins?: Set<string>
  title?: string
  description?: string
  imgURL: string
  creationDate?: Date
}

export interface WACompleteContact extends WAContact {
  imgURL?: string
}
