import fsp from 'fs/promises'
import { AccountSettings, AnyMediaMessageContent, AnyMessageContent, AnyRegularMessageContent, jidDecode, MiscMessageGenerationOptions, WAMessage } from 'baileys'
import { parseVCard } from '@textshq/platform-sdk/dist/vcard'
import type { MessageContent, MessageSendOptions } from '@textshq/platform-sdk'
import type { Connection, EntityManager } from 'typeorm'

import generateMessageID from './generate-message-id'
import DBMessage from '../entities/DBMessage'
import getEphemeralOptions from './get-ephemeral-options'

const getMessageCompose = async (
  db: Connection | EntityManager,
  threadID: string,
  msgContent: MessageContent,
  defaultMode: AccountSettings['defaultDisappearingMode'],
  options?: MessageSendOptions,
) => {
  let content: AnyRegularMessageContent
  let { text, mimeType } = msgContent
  let sendAdditionalTextMessage = false

  if (msgContent.mentionedUserIDs) {
    for (const mention of msgContent.mentionedUserIDs) {
      const { user } = jidDecode(mention)!
      // @+14151231234 => @14151231234
      text = text!.replace('@+' + user, '@' + user)
    }
  }

  const buffer = msgContent.fileBuffer || (msgContent.filePath ? { url: msgContent.filePath! } : undefined)

  if (buffer) {
    if (mimeType?.endsWith('/x-vcard') || mimeType?.endsWith('/vcf')) {
      const vcardStr = Buffer.isBuffer(buffer) ? buffer.toString('utf-8') : await fsp.readFile(buffer.url, 'utf-8')
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
      if (msgContent.stickerID && mimeType?.endsWith('/webp')) media = { sticker: buffer, ...(msgContent.size || {}) }
      else if (mimeType?.includes('video/mp4')) media = { video: buffer, caption: text, gifPlayback: msgContent.isGif, ...(msgContent.size || {}) }
      else if (mimeType?.includes('image/') && !['image/gif', 'image/heic'].includes(mimeType) && !mimeType.includes('photoshop')) media = { image: buffer, caption: text, ...(msgContent.size || {}) }
      else if (mimeType?.includes('audio/')) media = { audio: buffer, ptt: mimeType === 'audio/ogg', seconds: msgContent.audioDurationSeconds }
      else media = { document: buffer, fileName: msgContent.fileName, mimetype: '' }

      if (mimeType?.endsWith('/ogg')) {
        mimeType = 'audio/ogg; codecs=opus'
      }

      media.mimetype = mimeType || 'application/octet-stream'

      if (!('audio' in media) && !('sticker' in media) && !('document' in media)) {
        media.mentions = msgContent.mentionedUserIDs
      }

      content = media
      if (!!text && !('caption' in media) && !('mentions' in media)) {
        sendAdditionalTextMessage = true
      }
    }
  } else {
    content = {
      text: text!,
      mentions: msgContent.mentionedUserIDs,
      linkPreview: msgContent.links?.some(l => !l.includePreview) ? null : undefined,
    }
  }

  let quotedMsg: WAMessage | undefined
  if (options?.quotedMessageID) {
    const msg = await db.getRepository(DBMessage).findOneByOrFail({
      id: options!.quotedMessageID,
      threadID: options!.quotedMessageThreadID || threadID,
    })
    if (msg) {
      quotedMsg = msg.original.message
    } else {
      throw new Error('could not find message to quote')
    }
  }

  const ephemeralOpts = await getEphemeralOptions(db, threadID)
  const composes: { compose: AnyMessageContent, options: MiscMessageGenerationOptions }[] = []
  const messageId = options?.pendingMessageID?.includes('-')
    ? generateMessageID() // for ios
    : options?.pendingMessageID
  const opts: MiscMessageGenerationOptions = ephemeralOpts || { }

  // if the thread doesn't exist
  // hence ephemeral opts are undefined
  // we fire a message to set disappearing mode if that was the user's preference
  if (!ephemeralOpts && defaultMode?.ephemeralExpiration) {
    opts.ephemeralExpiration = defaultMode.ephemeralExpiration
    composes.push({
      compose: { disappearingMessagesInChat: defaultMode?.ephemeralExpiration },
      options: { },
    })
  }

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
