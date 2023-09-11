import v8 from 'v8'
import crypto from 'crypto'
import { BaileysEventMap } from '@adiwajshing/baileys'
import { mkdir, readdir, writeFile, readFile, rm } from 'fs/promises'
import { join } from 'path'

const MAXIMUM_ATTEMPTS = 3
const DROPPED_EVENTS_REGISTRY_FOLDER_NAME = 'dropped_events'

interface TrackedEventCluster {
  identifier: string
  events: Partial<BaileysEventMap>
  attempts: number
  timestamp: number
}

export interface DroppedEventHandlerOptions {
  onDroppedEvents?(events: Partial<BaileysEventMap>): void | Promise<void>
  getDroppedEvents?(): Promise<TrackedEventCluster[]>
  acknowledgeRetryDroppedEvents?(events: TrackedEventCluster, success: boolean): Promise<{ exceededMaximumAttempts: boolean }>
}

interface Options {
  dataDirPath: string
}

const getRegistryFolderPath = (
  dataDirPath: string,
  ...internalPaths: string[]
) => join(dataDirPath, DROPPED_EVENTS_REGISTRY_FOLDER_NAME, ...internalPaths)

export const makeDroppedEventsRegistryFolder = async ({ dataDirPath }: Options) => {
  const droppedEventsRegistryFolder = getRegistryFolderPath(dataDirPath)
  await mkdir(droppedEventsRegistryFolder, { recursive: true })
}

export const saveDroppedEvents = async (
  events: Partial<BaileysEventMap>,
  { dataDirPath }: Options,
) => {
  const timestamp = Date.now()

  const identifier = `events-${timestamp}-${crypto.randomUUID()}`
  const eventCluster: TrackedEventCluster = { identifier, events, attempts: 0, timestamp }
  const serializedEventCluster = v8.serialize(eventCluster)
  const filePath = getRegistryFolderPath(dataDirPath, `${identifier}.bin`)

  return writeFile(filePath, serializedEventCluster)
}

export const getDroppedEvents = async ({ dataDirPath }: Options) => {
  const droppedEventsRegistryFolder = getRegistryFolderPath(dataDirPath)

  const eventsToRetry: TrackedEventCluster[] = []

  const files = await readdir(droppedEventsRegistryFolder, { withFileTypes: true })
    .catch(async (error: NodeJS.ErrnoException) => {
      if (error.code !== 'ENOENT') throw Error('Unexpected issue from reading dropped events registry', error)
      await makeDroppedEventsRegistryFolder({ dataDirPath })
      return readdir(droppedEventsRegistryFolder, { withFileTypes: true })
    })

  const filteredFiles = files.filter(value => value.isFile() && value.name.startsWith('events-'))

  const pendingSerializedMap: Promise<Buffer>[] = []
  for (const file of filteredFiles) {
    const filePath = join(droppedEventsRegistryFolder, file.name)
    const serialized = readFile(filePath)
    pendingSerializedMap.push(serialized)
  }

  const serializedMap = await Promise.all(pendingSerializedMap)

  for (const serialized of serializedMap) {
    const deserialized: TrackedEventCluster = v8.deserialize(serialized)

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
  const filePath = getRegistryFolderPath(dataDirPath, eventCluster.identifier + '.bin')
  const serialized = await readFile(filePath)
  const deserialized: TrackedEventCluster = v8.deserialize(serialized)

  deserialized.attempts++

  const exceededMaximumAttempts = deserialized.attempts >= MAXIMUM_ATTEMPTS

  if (exceededMaximumAttempts || success) {
    await rm(filePath)
  } else {
    const reserialized = v8.serialize(deserialized)
    await writeFile(filePath, reserialized)
  }

  return { exceededMaximumAttempts }
}
