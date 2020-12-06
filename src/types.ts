import { WAContact, WAMessage, MessageInfo } from '@adiwajshing/baileys'

export interface WACompleteMessage extends WAMessage {
  sender?: WACompleteContact
  info?: MessageInfo
}
export interface WACompleteContact extends WAContact {
  imgUrl?: string
  isAdmin?: boolean
}
