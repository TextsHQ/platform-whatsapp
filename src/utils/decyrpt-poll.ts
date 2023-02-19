// original code: https://gist.github.com/PurpShell/44433d21631ff0aefbea57f7b5e31139
import { webcrypto } from 'node:crypto'

import { jidNormalizedUser, WAProto } from '@adiwajshing/baileys'

const { sign, importKey, decrypt, digest } = webcrypto.subtle

/**
 * Compare the SHA-256 hashes of the poll options from the update to find the original choices
 * @param options Options from the poll creation message
 * @param pollOptionHashes hash from `decryptPollMessageRaw()`
 * @return {Promise<string[]>} the original option, can be empty when none are currently selected
 */
export const comparePollMessage = async (options: string[], pollOptionHashes: string[]): Promise<string[]> => {
  const selectedOptions: string[] = []
  for (const option of options) {
    const hash = Buffer
      .from(
        await digest(
          'SHA-256',
          (new TextEncoder()).encode(option),
        ),
      )
      .toString('hex').toUpperCase()

    if (pollOptionHashes.findIndex(h => h === hash) > -1) {
      selectedOptions.push(option)
    }
  }

  return selectedOptions
}

/**
 * Raw method to decrypt the message after gathering all information
 * @description Use `decryptPollMessage()` instead, only use this if you know what you are doing
 * @param encPayload Encryption payload/contents want to decrypt, you can get it from `pollUpdateMessage.vote.encPayload`
 * @param encIv Encryption iv (used to decrypt the payload), you can get it from `pollUpdateMessage.vote.encIv`
 * @param additionalData poll Additional data to decrypt poll message
 * @param decryptionKey Generated decryption key to decrypt the poll message
 * @return {Promise<Uint8Array>}
 */
const decryptPollMessageInternal = async (
  encPayload: Uint8Array,
  encIv: Uint8Array,
  additionalData: Uint8Array,
  decryptionKey: Uint8Array,
): Promise<Uint8Array> => {
  const tagSize_multiplier = 16
  const encoded = encPayload
  const key = await importKey('raw', decryptionKey, 'AES-GCM', false, ['encrypt', 'decrypt'])
  const decrypted = await decrypt({
    name: 'AES-GCM',
    iv: encIv,
    additionalData,
    tagLength: 8 * tagSize_multiplier,
  }, key, encoded)
  return new Uint8Array(decrypted).slice(2) // remove 2 bytes (OA20)(space+newline)
}

/**
 * Decode the message from `decryptPollMessageInternal()`
 * @param decryptedMessage the message from `decrpytPollMessageInternal()`
 * @return {string}
 */
export const decodePollMessage = (decryptedMessage: Uint8Array): string => {
  const n = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70]
  const outarr: number[] = []

  for (let i = 0; i < decryptedMessage.length; i++) {
    const val = decryptedMessage[i]
    outarr.push(n[val >> 4], n[15 & val])
  }

  return String.fromCharCode(...outarr)
}

/**
 * raw function to decrypt a poll message update
 * @param encPayload Encryption payload/contents want to decrypt, you can get it from `pollUpdateMessage.vote.encPayload`
 * @param encIv Encryption iv (used to decrypt the payload), you can get it from `pollUpdateMessage.vote.encIv`
 * @param encKey Encryption key (used to decrypt the payload), you need to store/save the encKey. If you want get the encKey, you could get it from `Message.messageContextInfo.messageSecret`, only available on poll creation message.
 * @param pollMsgSender sender The sender's jid of poll message, you can use `pollUpdateMessage.pollCreationMessageKey.participant` (Note: you need to normalize the jid first)
 * @param pollMsgId The ID of poll message, you can use `pollUpdateMessage.pollMessageCreationKey.id`
 * @param voteMsgSender The poll voter's jid, you can use `Message.key.remoteJid`, `Message.key.participant`, or `Message.participant`. (Note: you need to normalize the jid first)
 * @return {Promise<string[]>} The option or empty array if something went wrong OR everything was unticked
 */
export const decryptPollMessageRaw = async (
  encKey: Uint8Array,
  encPayload: Uint8Array,
  encIv: Uint8Array,
  pollMsgSender: string,
  pollMsgId: string,
  voteMsgSender: string,
): Promise<string[]> => {
  const enc = new TextEncoder()
  const stanzaId = enc.encode(pollMsgId)
  const parentMsgOriginalSender = enc.encode(pollMsgSender)
  const modificationSender = enc.encode(voteMsgSender)
  const modificationType = enc.encode('Poll Vote')
  const pad = new Uint8Array([1])

  const signMe = new Uint8Array([...stanzaId, ...parentMsgOriginalSender, ...modificationSender, ...modificationType, pad] as any)

  const createSignKey = async (n: Uint8Array = new Uint8Array(32)) => (importKey(
    'raw',
    n,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  ))

  const _sign = async (n: Uint8Array, key: CryptoKey) => sign({ name: 'HMAC', hash: 'SHA-256' }, key, n)

  let key = await createSignKey()

  const temp = await _sign(encKey, key)
  key = await createSignKey(new Uint8Array(temp))
  const decryptionKey = new Uint8Array(await _sign(signMe, key))
  const additionalData = enc.encode(`${pollMsgId}\u0000${voteMsgSender}`)
  const decryptedMessage = await decryptPollMessageInternal(encPayload, encIv, additionalData, decryptionKey)
  const pollOptionHash = decodePollMessage(decryptedMessage)

  // '0A20' in hex represents unicode " " and "\n" thus declaring the end of one option
  // we want multiple hashes to make it easier to iterate and understand for your use cases
  return pollOptionHash.split('0A20') || []
}

/**
 * Decrypt/Get Poll Update Message Values
 * @param msg Full message info contains PollUpdateMessage, you can use `msg`
 * @param pollCreationData An object contains `encKey` (used to decrypt the poll message), `sender` (used to create decryption key), and `options` (you should fill it with poll options, e.g. Apple, Orange, etc...)
 * @param withSelectedOptions Get user's selected options condition, set it to true if you want get the results.
 * @return {Promise<{ hash: string[] } | { hash: string[], selectedOptions: string[] }>} Property `hash` is an array which contains selected options hash, you can use `comparePollMessage` to compare it with original values. Property `selectedOptions` is an array, and the results is from `comparePollMessage` function.
 */
export const getPollUpdateMessage = async (
  msg: WAProto.IWebMessageInfo,
  pollCreationData: { encKey: Uint8Array, sender: string, options: string[] },
  withSelectedOptions = false,
): Promise<{ hash: string[] } | { hash: string[], selectedOptions: string[] }> => {
  if (!msg.message?.pollUpdateMessage || !pollCreationData?.encKey) {
    throw new Error('Missing pollUpdateMessage, or encKey')
  }

  // eslint-disable-next-line no-param-reassign
  pollCreationData.sender = msg.message?.pollUpdateMessage?.pollCreationMessageKey?.participant || pollCreationData.sender
  if (!pollCreationData.sender?.length) {
    throw new Error('Missing sender')
  }

  let hash = await decryptPollMessageRaw(
    pollCreationData.encKey, // encKey
    msg.message?.pollUpdateMessage?.vote?.encPayload!, // enc payload
    msg.message?.pollUpdateMessage?.vote?.encIv!, // enc iv
    jidNormalizedUser(pollCreationData.sender), // sender
    msg.message?.pollUpdateMessage?.pollCreationMessageKey?.id!, // poll id
    jidNormalizedUser(
      msg.key.remoteJid?.endsWith('@g.us')
        ? (msg.key.participant || msg.participant)! : msg.key.remoteJid!,
    ), // voter
  )

  if (hash.length === 1 && !hash[0].length) {
    hash = []
  }

  return withSelectedOptions ? {
    hash,
    selectedOptions: await comparePollMessage(
      pollCreationData.options || [],
      hash,
    ),
  } : { hash }
}
