const URL_REGEX = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi

export const stringHasLink = (str: string) =>
  URL_REGEX.test(str)

export const whatsappID = (jid: string) =>
  jid.replace('@s.whatsapp.net', '@c.us')

export const isGroupID = (jid: string) =>
  jid.endsWith('@g.us')

export const isBroadcastID = (jid: string) =>
  jid.endsWith('@broadcast')

export const numberFromJid = (jid: string) =>
  '+' + whatsappID(jid).replace('@c.us', '')

export const normalizeThreadID = (jid: string) =>
  jid.replace('@c.us', '@s.whatsapp.net')

export const removeServer = (jid: string) =>
  jid.split('@').shift()
