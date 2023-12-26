// eslint-disable-next-line import/order
import getDataSource from '../utils/get-data-source'

import { Chat, delay, generateMessageID, makeEventBuffer, unixTimestampSeconds, WAMessageStubType, WAProto } from 'baileys'
import { unlink, stat } from 'fs/promises'
import type { DataSource } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBThread from '../entities/DBThread'
import type { MappingContextWithDB } from '../types'
import { mapMessageID } from '../utils/generics'
import getLogger from '../utils/get-logger'
import makeTextsBaileysStore, { fetchMessagesInDB } from '../utils/make-texts-baileys-store'
import fetchThreads from '../utils/fetch-threads'

const TEST_DATA_PATH = './test-data'
const DB_PATH = `${TEST_DATA_PATH}/test-db.sqlite`
const logger = getLogger(undefined)
logger.level = 'trace'

jest.setTimeout(30_000)

describe('Database Sync Tests', () => {
  let db: DataSource
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
    db = await getDataSource('default', DB_PATH, logger)
    mappingCtx.db = db
    store = makeTextsBaileysStore(() => { }, () => { throw new Error('no') }, mappingCtx)
    ev.process(events => store.process(events).then(() => { }))
  })

  beforeEach(async () => {
    await db.getRepository(DBThread).clear()
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
      await db.getRepository(DBThread).findOneBy({
        id: msg.key.remoteJid!,
      }),
    ).toBeTruthy()

    expect(
      await db.getRepository(DBMessage).findOneBy({
        id: mapMessageID(msg.key),
      }),
    ).toBeTruthy()
  })

  it('should not update a thread timestamp and unread count', async () => {
    const phone = Math.random().toString().replace('.', '')
    const jid = phone + '@s.whatsapp.net'

    const ogTimstamp = unixTimestampSeconds() - 1000
    const msgId = generateMessageID()

    const msg1 = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: jid,
        fromMe: false,
        id: msgId,
      },
      // messageStubType: WAMessageStubType.CIPHERTEXT,
      message: { conversation: 'hello' },
      messageTimestamp: ogTimstamp,
    })

    const msg2 = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: jid,
        fromMe: false,
        id: msgId,
      },
      message: { conversation: 'hello 2' },
      messageTimestamp: unixTimestampSeconds(),
    })

    ev.buffer()
    ev.emit('chats.update', [{ id: jid, unreadCount: 1, conversationTimestamp: ogTimstamp }])
    ev.emit('messages.upsert', { messages: [msg1], type: 'notify' })

    await ev.flush()

    await delay(200)

    ev.buffer()
    ev.emit('chats.update', [{ id: jid, unreadCount: 1, conversationTimestamp: unixTimestampSeconds() }])
    ev.emit('messages.upsert', { messages: [msg2], type: 'notify' })

    await ev.flush()

    await delay(200)

    const repo = db.getRepository(DBThread)
    const thread = await repo.findOneBy({ id: jid })
    expect(thread?.unreadCount).toEqual(1)
    expect(thread?.timestamp).toEqual(new Date(ogTimstamp * 1000))
  })

  it('should start a chat with a toggle disappearing message', async () => {
    const phone = Math.random().toString().replace('.', '')
    const jid = phone + '@s.whatsapp.net'

    const timestamp = unixTimestampSeconds()

    const msg1 = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: jid,
        fromMe: false,
        id: generateMessageID(),
      },
      message: {
        protocolMessage: {
          type: WAProto.Message.ProtocolMessage.Type.EPHEMERAL_SETTING,
          ephemeralExpiration: 60 * 60 * 24,
        },
      },
      messageTimestamp: timestamp,
    })

    ev.buffer()
    ev.emit('chats.update', [{
      id: jid,
      ephemeralSettingTimestamp: timestamp,
      ephemeralExpiration: 60 * 60 * 24,
    }])
    ev.emit('messages.upsert', { messages: [msg1], type: 'notify' })

    await ev.flush()

    await delay(200)

    const repo = db.getRepository(DBThread)
    const thread = await repo.findOneBy({ id: jid })
    expect(thread?.original?.chat?.ephemeralExpiration).toEqual(60 * 60 * 24)
  })

  it('should correctly fetch all threads', async () => {
    const chats: Chat[] = [...Array(123)].map((_, i) => {
      const phone = Math.random().toString().replace('.', '')
      const jid = phone + '@s.whatsapp.net'

      return {
        id: jid,
        name: 'test',
        conversationTimestamp: unixTimestampSeconds() - Math.floor(Math.random() * 1000 * i),
      }
    })

    ev.emit('chats.upsert', chats)

    await delay(200)

    const threads: DBThread[] = []

    let cursor: string | null = null
    do {
      const {
        items,
        oldestCursor,
      } = await fetchThreads(undefined, mappingCtx, cursor ? { cursor, direction: 'before' } : undefined)
      threads.push(...items)

      expect(cursor).not.toEqual(oldestCursor)

      cursor = oldestCursor

      await delay(50)
    } while (cursor)

    expect(threads).toHaveLength(chats.length)
  })

  it('should not drop a message on sync', async () => {
    const jid = '1234@s.whatsapp.net'
    const msgs = [...Array(3)].map(() =>
      WAProto.WebMessageInfo.fromObject({
        key: {
          remoteJid: jid,
          fromMe: false,
          id: generateMessageID(),
        },
        message: {
          conversation: 'hello g',
        },
        messageTimestamp: unixTimestampSeconds(),
      }))

    await store.process({
      'messaging-history.set': {
        messages: [msgs[0]],
        chats: [],
        contacts: [],
        isLatest: true,
      },
    })

    await store.process({
      'messaging-history.set': {
        messages: msgs.slice(1),
        chats: [],
        contacts: [],
        isLatest: false,
      },
    })

    const repo = db.getRepository(DBMessage)
    const messages = await repo.find({ where: { threadID: jid }})
    expect(messages).toHaveLength(3)
  })

  it('should not error on threadID change', async () => {
    const jid = '123456@s.whatsapp.net'
    const jid2 = ''
    const msg = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: jid,
        fromMe: false,
        id: generateMessageID(),
      },
      messageTimestamp: unixTimestampSeconds(),
      messageStubType: WAMessageStubType.CIPHERTEXT,
    })
    const msg2 = WAProto.WebMessageInfo.fromObject({
      ...msg.toJSON(),
    })
    msg2.key.remoteJid = jid2

    await store.process({
      'messages.upsert': {
        messages: [msg, msg2],
        type: 'append',
      },
    })

    msg.key.remoteJid = jid2
    msg.message = { conversation: 'test' }

    await store.process({
      'messages.upsert': {
        messages: [msg],
        type: 'append',
      },
    })
  })

  it('should not error at expression tree', async () => {
    await fetchMessagesInDB(
      db,
      [...Array(2000)].map(
        () => ({
          key: {
            remoteJid: '1234@s.whatsapp.net',
            id: generateMessageID(),
            fromMe: Math.random() < 0.5,
          },
        }),
      ),
    )

    await store.process(
      {
        'messages.upsert': {
          messages: [...Array(2000)].map(
            () => (
              WAProto.WebMessageInfo.fromObject({
                key: {
                  remoteJid: Math.random().toString().replace('.', '') + '@s.whatsapp.net',
                  fromMe: false,
                  id: generateMessageID(),
                },
                message: {
                  conversation: 'hello g',
                },
                messageTimestamp: unixTimestampSeconds(),
              })
            ),
          ),
          type: 'notify',
        },
      },
    )
  })

  it('should flush all pending mutations before closing', async () => {
    const jid = '24566@s.whatsapp.net'
    const msgs = [...Array(3)].map(() => (
      WAProto.WebMessageInfo.fromObject({
        key: {
          remoteJid: jid,
          fromMe: false,
          id: generateMessageID(),
        },
        message: {
          conversation: 'hello g',
        },
        messageTimestamp: unixTimestampSeconds(),
      })
    ))
    const tasks = Promise.all(
      msgs.map(msg => (
        store.process({
          'messages.upsert': {
            messages: [msg],
            type: 'append',
          },
        })
      )),
    )

    await store.wait()
    await db.destroy()
    await tasks

    await db.initialize()

    const repo = db.getRepository(DBMessage)
    const dbMessages = await repo.find({ where: { threadID: jid }})
    expect(dbMessages).toHaveLength(3)
  })
})
