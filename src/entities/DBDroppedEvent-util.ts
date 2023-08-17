import { serialize, deserialize } from 'v8'
import { BaileysEventMap } from '@adiwajshing/baileys'
import { ValueTransformer } from 'typeorm'

export const DroppedEventTransformer: ValueTransformer = {
  from(blob: Buffer) {
    return deserialize(blob)
  },
  to(event: BaileysEventMap[keyof BaileysEventMap]) {
    return serialize(event)
  },
}
