import { delay, readAndEmitEventStream } from '@adiwajshing/baileys'
import { unlink, stat } from 'fs/promises'
import { join } from 'path'
import type { Connection } from 'typeorm'
import type { MappingContext } from '../types'
import fetchThreads from '../utils/fetch-threads'
import getConnection from '../utils/get-connection'
import logger from '../utils/logger'
import makeTextsBaileysStore from '../utils/make-texts-baileys-store'

const TEST_DATA_PATH = './test-data'
const DB_PATH = `${TEST_DATA_PATH}/test-db.sqlite`
const STREAMS_FOLDER = join(TEST_DATA_PATH, 'baileys-streams')

const getStreamFile = (name: string) => join(STREAMS_FOLDER, `${name}.log`)

jest.setTimeout(30_000)

describe('Database Sync Tests', () => {
  let db: Connection
  let store: ReturnType<typeof makeTextsBaileysStore>
  let synced = false

  const mappingCtx: MappingContext = { logger: logger.child({ level: 'debug' }), accountID: '1234', meID: '911724345330@s.whatsapp.net' }

  beforeAll(async () => {
    const exists = await stat(DB_PATH).then(() => true).catch(() => false)
    if (exists) {
      logger.info('removing existing DB')
      await unlink(DB_PATH)
    }
    db = await getConnection('default', DB_PATH)
    store = makeTextsBaileysStore(
      db,
      mappingCtx,
      () => { },
    )
  })

  const doSync = async () => {
    if (synced) {
      return
    }
    const { ev } = readAndEmitEventStream(getStreamFile('landline-sync'))
    store.bind(ev, { type: 'md', groupMetadata: async () => { throw new Error('not supported') } })

    while (
      !store.syncState().lastSyncMsgRecv
      // it's been a few seconds since the last sync was received
      || (Date.now() - store.syncState().lastSyncMsgRecv!.getTime() < 5000)
    ) {
      await delay(100)
    }

    synced = true
  }

  it('should sync data', async () => {
    await doSync()
  })

  it('should fetch chats', async () => {
    await doSync()
    const threads = await fetchThreads(db, undefined, mappingCtx)
    console.log(threads)
  })
})
