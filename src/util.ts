import { whatsappID } from '@adiwajshing/baileys'

export const isBroadcastID = (jid: string) =>
  jid.endsWith('@broadcast')

export const numberFromJid = (jid: string) =>
  '+' + whatsappID(jid).replace('@s.whatsapp.net', '')

export const removeServer = (jid: string) =>
  jid.split('@').shift()

export const getDataURIFromBuffer = (buff: Buffer, mimeType: string = '') =>
  `data:${mimeType};base64,${buff.toString('base64')}`
