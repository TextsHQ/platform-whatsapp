import type { BaileysEvent, BaileysEventMap } from '@adiwajshing/baileys'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { DroppedEventTransformer } from './DBDroppedEvent-util'

const MAX_ATTEMPTS = 3

type SomeBaileysEvent = BaileysEventMap[BaileysEvent]

@Entity()
export default class DBDroppedEvent {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'varchar', length: 64 })
    eventName: string

  @Column({ type: 'blob', transformer: DroppedEventTransformer })
    eventData: SomeBaileysEvent

  @Column({ type: 'int', default: 0 })
    attempts: number

  @Column({ type: 'int' })
    timestamp: number

  /**
   * Run this whenever the event is attempted. It will
   * indicate whether this event has been attempted more
   * times than the `MAX_ATTEMPTS`.
   */
  public acknowledgeAttempt() {
    const exceededMaxAttempts = ++this.attempts >= MAX_ATTEMPTS
    return { exceededMaxAttempts }
  }

  public set(eventName: keyof BaileysEventMap, event: SomeBaileysEvent) {
    this.eventName = eventName
    this.eventData = event
    this.timestamp = Date.now()
  }
}
