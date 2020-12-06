import { WAMessage, MessageInfo } from '@adiwajshing/baileys'

export interface WACompleteMessage extends WAMessage {
  info?: MessageInfo
}
