import { WAMessage, whatsappID, WAGenericMediaMessage } from '@adiwajshing/baileys'
import { WACompleteChat } from './types'

export const textsWAKey = {
  key: (c: WACompleteChat) => c.t.toString(16).padStart(8, '0') + c.jid,
  compare: (k1: string, k2: string) => k2.localeCompare(k1),
}

export const isBroadcastID = (jid: string) =>
  jid.endsWith('@broadcast')

export const numberFromJid = (jid: string) =>
  '+' + whatsappID(jid).replace('@s.whatsapp.net', '')

export const removeServer = (jid: string) =>
  jid.split('@').shift()

export const getDataURIFromBuffer = (buff: Buffer, mimeType: string = '') =>
  `data:${mimeType};base64,${buff.toString('base64')}`

export const hasUrl = (msg: WAMessage) => {
  const content = (msg.message.ephemeralMessage || msg)?.message
  if (!content) return false

  const key = Object.keys(content)[0]
  const message = content[key] as WAGenericMediaMessage
  return !!message?.url
}

export function safeJSONStringify(obj: any) {
  try {
    return JSON.stringify(obj)
  } catch (err) {
    // swalloe
  }
}
