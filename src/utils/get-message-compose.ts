import { AnyMediaMessageContent, AnyRegularMessageContent, jidDecode, MiscMessageGenerationOptions, WAMessage } from '@adiwajshing/baileys'
import { parseVCard } from '@textshq/platform-sdk/dist/vcard'
import type { MessageContent, MessageSendOptions } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'

import generateMessageID from './generate-message-id'
import DBMessage from '../entities/DBMessage'
import getEphemeralOptions from './get-ephemeral-options'

const getMessageCompose = async (db: Connection | EntityManager, threadID: string, msgContent: MessageContent, options?: MessageSendOptions) => {
  let content: AnyRegularMessageContent
  let { text, mimeType } = msgContent
  let sendAdditionalTextMessage = false

  const opts: MiscMessageGenerationOptions = await getEphemeralOptions(db, threadID) || {}

  if (msgContent.mentionedUserIDs) {
    for (const mention of msgContent.mentionedUserIDs) {
      const { user } = jidDecode(mention)
      // @+14151231234 => @14151231234
      text = text!.replace('@+' + user, '@' + user)
    }
  }

  const buffer = msgContent.fileBuffer || (msgContent.filePath ? { url: msgContent.filePath! } : undefined)

  if (buffer) {
    if (mimeType?.endsWith('/x-vcard') || mimeType?.endsWith('/vcf')) {
      const vcardStr = (buffer as Buffer).toString('utf-8')
      const parsed = parseVCard(vcardStr)
      let displayName = parsed.fn?.[0]?.value
      displayName = typeof displayName === 'string' ? displayName : displayName?.[0]
      content = {
        contacts: {
          displayName,
          contacts: [
            { vcard: vcardStr, displayName },
          ],
        },
      }

      if (text) {
        sendAdditionalTextMessage = true
      }
    } else {
      let media: AnyMediaMessageContent
      if (mimeType?.endsWith('/webp')) media = { sticker: buffer, ...(msgContent.size || {}) }
      else if (mimeType?.includes('video/')) media = { video: buffer, caption: text, gifPlayback: msgContent.isGif, ...(msgContent.size || {}) }
      else if (mimeType?.includes('image/')) media = { image: buffer, caption: text, ...(msgContent.size || {}) }
      else if (mimeType?.includes('audio/')) media = { audio: buffer, ptt: mimeType === 'audio/ogg', seconds: msgContent.audioDurationSeconds }
      else media = { document: buffer, fileName: msgContent.fileName, mimetype: '' }

      if (mimeType?.endsWith('/ogg')) {
        mimeType = 'audio/ogg; codecs=opus'
      }

      media.mimetype = mimeType || 'application/octet-stream'
      content = media
      if (!!text && !('caption' in media)) {
        sendAdditionalTextMessage = true
      }
    }
  } else {
    content = {
      text: text!,
      mentions: msgContent.mentionedUserIDs,
    }
  }

  let quotedMsg: WAMessage | undefined
  if (options?.quotedMessageID) {
    const msg = await db.getRepository(DBMessage).findOneOrFail({
      id: options!.quotedMessageID,
      threadID: options!.quotedMessageThreadID,
    })
    if (msg) {
      quotedMsg = msg.original.message
    } else {
      throw new Error('could not find message to quote')
    }
  }

  const composes: { compose: AnyRegularMessageContent, options: MiscMessageGenerationOptions }[] = []
  const messageId = options?.pendingMessageID?.includes('-')
    ? generateMessageID() // for ios
    : options?.pendingMessageID
  composes.push({
    compose: content,
    options: { messageId, quoted: quotedMsg, ...opts },
  })

  if (sendAdditionalTextMessage) {
    composes.push({
      compose: { text: text! },
      options: { messageId: generateMessageID(), ...opts },
    })
  }

  return composes
}

export default getMessageCompose
