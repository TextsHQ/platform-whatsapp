import { WAProto } from '@adiwajshing/baileys'
import { unlink, stat } from 'fs/promises'
import type { Connection } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import type { MappingContext } from '../types'
import getConnection from '../utils/get-connection'
import getLogger from '../utils/get-logger'

const TEST_DATA_PATH = './test-data'
const DB_PATH = `${TEST_DATA_PATH}/test-db-m.sqlite`
const logger = getLogger(undefined)
logger.level = 'trace'

describe('Message Mapping Tests', () => {
  let db: Connection
  const mappingCtx: MappingContext = {
    logger: logger.child({ level: 'debug' }),
    accountID: '1234',
    meID: '911724345330@s.whatsapp.net',
  }

  beforeAll(async () => {
    const exists = await stat(DB_PATH).then(() => true).catch(() => false)
    if (exists) {
      logger.info('removing existing DB')
      await unlink(DB_PATH)
    }
    db = await getConnection('default', DB_PATH, logger)
  })

  it('should map a senderKeyDistributionMessage', () => {
    const message = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: '1234@g.us',
        fromMe: true,
        id: '3A12103AEC7806C647FF',
        participant: '911724345330@s.whatsapp.net',
      },
      message: {
        senderKeyDistributionMessage: {
          groupId: '1234@g.us',
          axolotlSenderKeyDistributionMessage: '',
        },
        messageContextInfo: {
          deviceListMetadata: {
            senderKeyHash: 'VGEyIyhMF6bkPA==',
            senderTimestamp: '1655455264',
          },
          deviceListMetadataVersion: 2,
        },
      },
      messageTimestamp: '1655803322',
      status: 'SERVER_ACK',
      pushName: 'Kishan Bagaria',
      userReceipt: [
        {
          userJid: '1234@s.whatsapp.net',
          receiptTimestamp: '1655803322',
        },
      ],
    })
    const dbmsg = new DBMessage()
    dbmsg.original = { message }
    dbmsg.mapFromOriginal(mappingCtx)

    expect(dbmsg.isHidden).toEqual(true)
  })
})
