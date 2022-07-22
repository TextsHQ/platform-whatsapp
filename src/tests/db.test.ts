import { delay, generateMessageID, makeEventBuffer, unixTimestampSeconds, WAMessageStatus, WAMessageStubType, WAProto } from '@adiwajshing/baileys'
import { unlink, stat } from 'fs/promises'
import type { Connection } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBThread from '../entities/DBThread'
import type { MappingContextWithDB } from '../types'
import { mapMessageID } from '../utils/generics'
import getConnection from '../utils/get-connection'
import getLogger from '../utils/get-logger'
import makeTextsBaileysStore from '../utils/make-texts-baileys-store'

const TEST_DATA_PATH = './test-data'
const DB_PATH = `${TEST_DATA_PATH}/test-db.sqlite`
const logger = getLogger(undefined)
logger.level = 'trace'

jest.setTimeout(30_000)

describe('Database Sync Tests', () => {
  let db: Connection
  let store: ReturnType<typeof makeTextsBaileysStore>

  const mappingCtx: MappingContextWithDB = {
    logger: logger.child({ level: 'debug' }),
    accountID: '1234',
    meID: '911724345330@s.whatsapp.net',
    db: undefined as any,
  }

  const ev = makeEventBuffer(logger)

  beforeAll(async () => {
    const exists = await stat(DB_PATH).then(() => true).catch(() => false)
    if (exists) {
      logger.info('removing existing DB')
      await unlink(DB_PATH)
    }
    db = await getConnection('default', DB_PATH, logger)
    mappingCtx.db = db
    store = makeTextsBaileysStore(() => { }, mappingCtx)
    store.bind({ ev, groupMetadata: async () => { throw new Error('not supported') } })
  })

  it('should insert new CIPHERTEXT message & make new thread', async () => {
    const msg = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: '911724345330@s.whatsapp.net',
        fromMe: false,
        id: generateMessageID(),
      },
      messageTimestamp: unixTimestampSeconds(),
      messageStubType: WAMessageStubType.CIPHERTEXT,
    })

    ev.emit('messages.upsert', {
      messages: [msg],
      type: 'notify',
    })

    await delay(500)

    expect(
      await db.getRepository(DBThread).findOne({
        id: msg.key.remoteJid!,
      }),
    ).toBeTruthy()

    expect(
      await db.getRepository(DBMessage).findOne({
        id: mapMessageID(msg.key),
      }),
    ).toBeTruthy()
  })

  it('should keep a chat unread', async () => {
    const jid = '912212122@s.whatsapp.net'

    const msg1 = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: jid,
        fromMe: false,
        id: generateMessageID(),
      },
      message: { conversation: 'hello' },
      messageTimestamp: unixTimestampSeconds(),
    })

    const msg2 = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: jid,
        fromMe: false,
        id: generateMessageID(),
      },
      message: { conversation: 'hello 2' },
      messageTimestamp: unixTimestampSeconds(),
    })

    ev.emit('messages.upsert', { messages: [msg1], type: 'notify' })

    await delay(200)

    ev.buffer()
    ev.emit('chats.update', [{ id: jid, unreadCount: 2, conversationTimestamp: unixTimestampSeconds() }])
    ev.emit('messages.update', [{ key: msg1.key, update: { status: WAMessageStatus.READ } }])
    ev.emit('messages.upsert', { messages: [msg2], type: 'notify' })

    await ev.flush()

    await delay(200)

    expect(
      await db.getRepository(DBThread).findOne({
        id: jid,
      }),
    ).toHaveProperty('unreadCount', 1)
  })
})
