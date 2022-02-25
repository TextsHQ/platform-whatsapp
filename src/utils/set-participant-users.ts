import { Connection, EntityManager, In } from 'typeorm'
import type DBParticipant from '../entities/DBParticipant'
import DBUser from '../entities/DBUser'

const setParticipantUsers = async (db: Connection | EntityManager, participants: DBParticipant[]) => {
  const users = await db.getRepository(DBUser).find({ id: In(participants.map(p => p.id)) })
  const userMap = users.reduce(
    (dict, user) => {
      dict[user.id] = user
      return dict
    }, { } as { [_: string]: DBUser },
  )

  for (const participant of participants) {
    participant.user = userMap[participant.id]
  }
}

export default setParticipantUsers
