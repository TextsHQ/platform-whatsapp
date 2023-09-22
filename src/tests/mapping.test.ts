import { WAProto } from '@whiskeysockets/baileys'
import DBMessage from '../entities/DBMessage'
import type { MappingContext } from '../types'
import getLogger from '../utils/get-logger'

const logger = getLogger(undefined)
logger.level = 'trace'

describe('Message Mapping Tests', () => {
  const mappingCtx: MappingContext = {
    logger: logger.child({ level: 'debug' }),
    accountID: '1234',
    meID: '911724345330@s.whatsapp.net',
  }

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
    dbmsg.original = { message, lastMappedVersion: 0 }
    dbmsg.mapFromOriginal(mappingCtx)

    expect(dbmsg.isHidden).toEqual(true)
  })

  it('should map a documentWithCaption message', () => {
    const message = WAProto.WebMessageInfo.fromObject({
      key: {
        remoteJid: '123456@s.whatsapp.net',
        fromMe: false,
        id: 'BAE589BFDFD16FFD',
      },
      message: {
        ephemeralMessage: {
          message: {
            documentWithCaptionMessage: {
              message: {
                documentMessage: {
                  url: 'https://mmg.whatsapp.net/d/f/1234.enc',
                  mimetype: 'application/pdf',
                  title: 'RB__190221.pdf',
                  fileSha256: 'q/EW1vbHUxZq4LwH2SjAH4qGvl+qdD/r1DPCWEYYHe0=',
                  fileLength: '26558757',
                  pageCount: 126,
                  mediaKey: '2n+20OWnexYRcmWk1FmW27MherXlQHlz5A8hafxVemA=',
                  fileName: 'RB__190221.pdf',
                  fileEncSha256: 'ZWBrCO8hCOK7LBPRgFvSgO41eQaB6QvHs+8iu0+5GVE=',
                  directPath: '/v/1234',
                  mediaKeyTimestamp: '1666172747',
                  contactVcard: false,
                  thumbnailDirectPath: '/v/1234',
                  thumbnailSha256: 'kqnaT3TZNngMwct+CAtjMUDXd8Ydn+ij/55Kq57cUtc=',
                  thumbnailEncSha256: 'VT4ZpcpNaTxpWZ1CiXNszLIT/MY1zdbAboq5qpjd+NE=',
                  jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIAGAARAMBIgACEQEDEQH/xAAxAAACAwEBAQAAAAAAAAAAAAADBQACBAYBBwEBAQEBAQAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAOInWEzeQr2ScSn36VUR3WE8dyxxQl5cvI92tXmOpExxfBa91iGZJnffDID0cfcujPjebOyCzbM4SGuappqXbkyHUAmdu7citufqKHjxn0ifP5YzwKYM7LyjJXoqYNM9DTJAZhlPJXwpS9DSGxQcPD//xAAzEAACAgEDAgMECAcAAAAAAAABAgADEQQSIQUxIkFREzJhcgYQFDNCgYKxJENSY3GRof/aAAgBAQABPwDb/bMwv9JmE8wYibnwJWm5sT2E9hBp59nlOnKPkDsDGp8B7AFTz8Ce0sV8uSF98f8AS023G0opq438/N6xFbVWVMWUMFyR83O6GghiMRNNuB9fKDTEE7h2g0waPqdEF4uXdBrek7U9pknjdBrejA5IcjaOJcVOouZT4SWxOngnV1CCkSipS6BuRzgia/Q3lhaGAGQEGe5M04PsKyGAyMnd3zB9G0873g+jmm83eHoWkqHrnwzUdBoTtbKNAlJBCDI7GLV+3nFUrt8P4uwmp1IqULsZ3PKrL9N1QPmvkMN2ABhfhNoihSzTUbRUT6EGOi2AEcy2sL5QIWPaV1unlwJu9pcPRXXH+4tZZV/P95iVt42GZq8ChszTWhlCnuJdKvfEbitvlMpPi/UsoA2H5jCeJS38QROq3immdMp1V9Vup9sd2/wKe0F7WDDVOrD3ie0qzvEbmtvlMrYBv1LNO/hf5zCeINTTVqCzOJ1fVi8oE7ExOonTadKg6oAJf1dW7u7x+q3k+AbI/UdaGwuqtH6jBrtWP5zROr9QQECyX9QLDx2s0Orsf7usmbNVb79m0fCLo6u7ZY/GCiofgE11GwhlHExzn1i1gCLS5GQhxDZ6QXWDsxi6u4fig19g7gRdf6pL9UttZGMCVUqw3FuAIdQB92n5tyYbLGOS5JlaZJzjse8NSDsU7TZX6pNlfPKSwhTgAf5EJyplL4qYeq/UEYyt9jZAn2lsYxDc5OQcQ2ue5jlnOWOTCvBiDwY+EVQPq//EAB4RAAMAAgEFAAAAAAAAAAAAAAABEQISQRAhMDFR/9oACAECAQE/AKJ0bhsbGrJKZVs4NcvvRuZDXckIPg9tkGvJ/8QAHREAAwACAgMAAAAAAAAAAAAAAAERAhASIDBRUv/aAAgBAwEBPwAaEqTVR6ZjEWOnPH50lcX1sSGxeT//2Q==',
                  contextInfo: {
                    forwardingScore: 4,
                    isForwarded: true,
                    expiration: 7776000,
                    disappearingMode: {
                      initiator: 'CHANGED_IN_CHAT',
                    },
                  },
                  thumbnailHeight: 480,
                  thumbnailWidth: 339,
                },
              },
            },
          },
        },
      },
      messageTimestamp: '1666173291',
    })
    const dbmsg = new DBMessage()
    dbmsg.original = { message, lastMappedVersion: 0 }
    dbmsg.mapFromOriginal(mappingCtx)

    expect(dbmsg.attachments).toHaveLength(1)
  })
})
