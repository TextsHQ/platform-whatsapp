import type { EntityMetadata, EntitySubscriberInterface, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm'

const getValue = (obj: any, path: string[]) => (
  path.reduce((a, b) => (typeof a === 'object' ? a[b] : undefined), obj)
)

const setValue = (obj: any, path: string[], value: any) => (
  path.reduce((a, b, idx) => {
    if (idx === path.length - 1) {
      a[b] = value
    } else {
      a[b] = a[b] || {}
    }
    return a[b]
  }, obj)
)

type EventMap<T> = {
  'insert': T
  'update': { key: Partial<T>, update: Partial<T> }
  'delete': Partial<T>
}

export type DBEventListener<T> = {
  publish<E extends keyof EventMap<T>>(event: E, data: EventMap<T>[E]): void
}

/**
 * listens for TypeORM events and generates events for them that we can use to update the state
 */
export class DBEventsPublisher<T extends { shouldFireEvent?: boolean }> implements EntitySubscriberInterface<T> {
  entity: new () => T

  eventPublish: DBEventListener<T>['publish']

  constructor(entity: new () => T, { publish }: DBEventListener<T>) {
    this.entity = entity
    this.eventPublish = publish
  }

  listenTo() {
    return this.entity
  }

  getId(e: T, metadata: EntityMetadata): Partial<T> {
    const p: Partial<T> = {}
    for (const column of metadata.primaryColumns) {
      const path = column.propertyPath.split('.')
      const value = getValue(e, path)
      setValue(p, path, value)
    }
    return p
  }

  shouldPublish(entity: T | undefined) {
    return entity?.shouldFireEvent !== false
  }

  afterInsert(event: InsertEvent<T>) {
    this.shouldPublish(event.entity) && this.eventPublish('insert', event.entity)
  }

  afterUpdate(event: UpdateEvent<T>) {
    if (!event.entity || !this.shouldPublish(event.entity as T)) return

    const key = this.getId(event.entity as T, event.metadata)
    const update: Partial<T> = {}
    for (const column of event.updatedColumns) {
      const name = column.propertyName
      update[name] = event.entity[name]
    }
    this.eventPublish('update', { key, update })
  }

  afterRemove(event: RemoveEvent<T>) {
    if (!event.entity && !event.databaseEntity) return

    const entity = event.databaseEntity || event.entity
    if (this.shouldPublish(entity)) {
      const deleteItem = this.getId(entity, event.metadata)
      this.eventPublish('delete', deleteItem)
    }
  }
}
