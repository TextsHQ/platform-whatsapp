import type { PresenceData } from '@adiwajshing/baileys-md'
import { ActivityType, ServerEvent, ServerEventType } from '@textshq/platform-sdk'

export default function mapPresenceUpdate(threadID: string, presenceUpdates: { [_: string]: PresenceData }) {
  const [participantID] = Object.keys(presenceUpdates)
  const presence = presenceUpdates[participantID]
  const lastActive = presence.lastSeen ? new Date(presence.lastSeen * 1000) : undefined
  const events: ServerEvent[] = []
  if (['available', 'unavailable'].includes(presence.lastKnownPresence!)) {
    events.push({
      type: ServerEventType.USER_PRESENCE_UPDATED,
      presence: {
        userID: participantID,
        status: presence.lastKnownPresence === 'available' ? 'online' : 'offline',
        lastActive,
      },
    })
  } else if (presence.lastKnownPresence === 'composing') {
    events.push({
      type: ServerEventType.USER_ACTIVITY,
      activityType: ActivityType.TYPING,
      threadID,
      participantID,
      durationMs: 120_000,
    })
  } else if (presence.lastKnownPresence === 'recording') {
    events.push({
      type: ServerEventType.USER_ACTIVITY,
      activityType: ActivityType.RECORDING_VOICE,
      threadID,
      participantID,
      durationMs: 120_000,
    })
  }
  if (['available', 'unavailable', 'paused'].includes(presence.lastKnownPresence!)) {
    events.push({ type: ServerEventType.USER_ACTIVITY, activityType: ActivityType.NONE, threadID, participantID })
  }
  return events
}
