import { BaileysEventMap } from '@adiwajshing/baileys'
import { mkdir, readdir, writeFile, readFile, rm } from 'fs/promises'
import { serialize, deserialize } from 'v8'
import { join } from 'path'

const MAXIMUM_ATTEMPTS = 3
const DROPPED_EVENTS_REGISTRY_FOLDER_NAME = 'dropped_events'

export interface TrackedEventCluster {
  identifier: string
  events: Partial<BaileysEventMap>
  attempts: number
  timestamp: number
}

interface Options {
  dataDirPath: string
}

const getDroppedEventsRegistryFolder = (
  dataDirPath: string,
) => join(dataDirPath, DROPPED_EVENTS_REGISTRY_FOLDER_NAME)

export const makeDroppedEventsRegistryFolder = async ({ dataDirPath }: Options) => {
  const droppedEventsRegistryFolder = getDroppedEventsRegistryFolder(dataDirPath)
  await mkdir(droppedEventsRegistryFolder, { recursive: true })
}

export const saveDroppedEvents = async (
  events: Partial<BaileysEventMap>,
  { dataDirPath }: Options,
) => {
  const timestamp = Date.now()

  const droppedEventsRegistryFolder = getDroppedEventsRegistryFolder(dataDirPath)
  const identifier = `events-${timestamp.toString()}`
  const eventCluster: TrackedEventCluster = { identifier, events, attempts: 0, timestamp }
  const serializedEventCluster = serialize(eventCluster)

  const filePath = join(droppedEventsRegistryFolder, `${identifier}.bin`)
  writeFile(filePath, serializedEventCluster)
}

export const getDroppedEvents = async ({ dataDirPath }: Options) => {
  const droppedEventsRegistryFolder = getDroppedEventsRegistryFolder(dataDirPath)

  const eventsToRetry: TrackedEventCluster[] = []

  const files = await readdir(droppedEventsRegistryFolder, { withFileTypes: true })
  const filteredFiles = files.filter(value => value.isFile() && value.name.startsWith('events-'))

  for (const file of filteredFiles) {
    const filePath = join(droppedEventsRegistryFolder, file.name)

    const serialized = await readFile(filePath)
    const deserialized = deserialize(serialized)

    if (
      'events' in deserialized
      && 'attempts' in deserialized
      && 'timestamp' in deserialized
      && 'identifier' in deserialized
    ) {
      eventsToRetry.push(deserialized)
    }
  }

  return eventsToRetry
}

export const acknowledgeDroppedEventsRetry = async (
  eventCluster: TrackedEventCluster,
  success: boolean,
  { dataDirPath }: Options,
) => {
  const droppedEventsRegistryFolder = getDroppedEventsRegistryFolder(dataDirPath)
  const filePath = join(droppedEventsRegistryFolder, eventCluster.identifier + '.bin')
  const serialized = await readFile(filePath)
  const deserialized = deserialize(serialized)

  deserialized.attempts++

  if (deserialized.attempts >= MAXIMUM_ATTEMPTS || success) {
    await rm(filePath)
  } else {
    const reserialized = serialize(deserialized)
    await writeFile(filePath, reserialized)
  }
}
