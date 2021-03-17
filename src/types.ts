import type { WAMessage, MessageInfo } from 'baileys'

export interface WACompleteMessage extends WAMessage {
  info?: MessageInfo
}
