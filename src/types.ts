import type { WAContact, WAMessage, WAChat, MessageInfo } from 'baileys'

export interface WACompleteMessage extends WAMessage {
  info?: MessageInfo
}

export interface WACompleteChat extends WAChat {
  participants: WAContact[]
  admins?: Set<string>
  description?: string
  creationEpoch?: number
  isActive?: boolean
}
