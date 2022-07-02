import { BaileysEventEmitter, delay, generateMessageID, unixTimestampSeconds, WAMessageStubType, WAProto } from '@adiwajshing/baileys'
import { unlink, stat } from 'fs/promises'
import type { Connection } from 'typeorm'
import { EventEmitter } from 'typeorm/platform/PlatformTools'
import DBMessage from '../entities/DBMessage'
import DBThread from '../entities/DBThread'
import type { MappingContext } from '../types'
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

  const mappingCtx: MappingContext = { logger: logger.child({ level: 'debug' }), accountID: '1234', meID: '911724345330@s.whatsapp.net' }

  beforeAll(async () => {
    const exists = await stat(DB_PATH).then(() => true).catch(() => false)
    if (exists) {
      logger.info('removing existing DB')
      await unlink(DB_PATH)
    }
    db = await getConnection('default', DB_PATH, logger)
    store = makeTextsBaileysStore(
      db,
      mappingCtx,
      () => { },
    )
  })

  it('should insert new CIPHERTEXT message & make new thread', async () => {
    const ev = new EventEmitter() as BaileysEventEmitter
    store.bind(ev, { type: 'md', groupMetadata: async () => { throw new Error('not supported') } })

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
})
