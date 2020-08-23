import { WAContact, WAMessage, WAChat, MessageInfo } from '@adiwajshing/baileys'

export interface WACompleteMessage extends WAMessage {
  info?: MessageInfo
}

export interface WACompleteChat extends WAChat {
  participants: WACompleteContact[]
  admins?: Set<string>
  description?: string
  creationDate?: Date
  isActive?: boolean
}

export interface WACompleteContact extends WAContact {
  imgURL?: string
}
