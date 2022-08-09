import { ServerEvent, ServerEventType } from '@textshq/platform-sdk'
import type { Connection } from 'typeorm'
import DBMessage from '../entities/DBMessage'
import DBParticipant from '../entities/DBParticipant'
import DBThread from '../entities/DBThread'
import DBUser from '../entities/DBUser'
import type { MappingContextWithDB } from '../types'
import { DBEventsPublisher } from './db-events-publisher'

// redundant keys for threads
const THREAD_REDUNDANT_KEYS: Set<string> = new Set(['id', 'timestamp'])
const MSG_REDUNDANT_KEYS: Set<string> = new Set(['id', 'threadID'])

const registerDBSubscribers = (
  publishEvent: (event: ServerEvent) => void,
  ctx: MappingContextWithDB,
) => {
  const db = ctx.db as Connection
  db.subscribers.push(
    new DBEventsPublisher(DBThread, {
      publish: (event, item) => {
        switch (event) {
          case 'delete':
            const { id } = item as DBThread
            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'thread',
              objectIDs: {},
              mutationType: 'delete',
              entries: [id],
            })
            break
          case 'insert':
            const dbItem = DBThread.prepareForSending(item as DBThread, ctx.accountID)
            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'thread',
              objectIDs: {},
              mutationType: 'upsert',
              entries: [dbItem],
            })
            break
          case 'update':
            const { key, update } = item as any
            const processedUpdate = DBThread.prepareForSending<Partial<DBThread>>(update, ctx.accountID)

            if (!processedUpdate.messages?.items?.length) {
              delete processedUpdate.messages
            }

            // Texts will handle this update -- this update is called when a message has come in
            if(processedUpdate.isUnread && processedUpdate.timestamp) {
              delete processedUpdate.isUnread
            }

            // if the update has more data than just the "id" & "_original" keys
            const isValidUpdate = !!Object.keys(processedUpdate).filter(
              k => !THREAD_REDUNDANT_KEYS.has(k),
            ).length

            if (isValidUpdate) {
              publishEvent({
                type: ServerEventType.STATE_SYNC,
                objectName: 'thread',
                objectIDs: {},
                mutationType: 'update',
                entries: [{ ...processedUpdate, ...key }],
              })
            }
            break
        }
      },
    }),
    new DBEventsPublisher(DBUser, {
      publish(event, item) {
        switch (event) {
          case 'insert':
            const participant = item as DBUser
            DBUser.prepareForSending(participant, ctx.accountID)

            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'participant',
              objectIDs: { threadID: participant.id },
              mutationType: 'upsert',
              entries: [participant],
            })
            break
          case 'update':
            const { key, update } = item as any
            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'participant',
              objectIDs: { threadID: key.id },
              mutationType: 'update',
              entries: [{ ...update, ...key }],
            })
            break
        }
      },
    }),
    new DBEventsPublisher(DBParticipant, {
      publish: (event, item) => {
        switch (event) {
          case 'delete':
            const { id } = item as DBParticipant
            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'participant',
              objectIDs: { threadID: id },
              mutationType: 'delete',
              entries: [id],
            })
            break
          case 'insert':
            const participant = (item as DBParticipant).toParticipant()
            DBUser.prepareForSending(participant, ctx.accountID)

            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'participant',
              objectIDs: { threadID: participant.id },
              mutationType: 'upsert',
              entries: [participant],
            })
            break
          case 'update':
            const { key, update } = item as any
            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'participant',
              objectIDs: { threadID: key.threadID },
              mutationType: 'update',
              entries: [{ ...update, ...key }],
            })
            break
        }
      },
    }),
    new DBEventsPublisher(DBMessage, {
      publish: (event, item) => {
        switch (event) {
          case 'delete':
            const id = (item as Partial<DBMessage>)
            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'message',
              objectIDs: { threadID: id.threadID },
              mutationType: 'delete',
              entries: [id.id!],
            })
            break
          case 'insert':
            const dbItem = DBMessage.prepareForSending(item as DBMessage, ctx.accountID)

            publishEvent({
              type: ServerEventType.STATE_SYNC,
              objectName: 'message',
              objectIDs: { threadID: dbItem.threadID },
              mutationType: 'upsert',
              entries: [dbItem],
            })
            break
          case 'update':
            const { key, update } = item as any
            const processedUpdate = DBMessage.prepareForSending(update as Partial<DBMessage>, ctx.accountID)

            const VALID_MSG_KEYS_UPDATED = Object.keys(processedUpdate).filter(
              k => !MSG_REDUNDANT_KEYS.has(k),
            )

            if (VALID_MSG_KEYS_UPDATED.length) {
              publishEvent({
                type: ServerEventType.STATE_SYNC,
                objectName: 'message',
                objectIDs: { threadID: key.threadID },
                mutationType: 'update',
                entries: [{ ...key, ...processedUpdate }],
              })
            }

            break
        }
      },
    }),
  )
}

export default registerDBSubscribers
