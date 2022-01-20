import { debounce } from 'lodash'

function makeDebouncedStream<T>(debounceIntervalMs: number, callback: (events: T[]) => void) {
  let events: T[] = []

  const pushEvents = debounce(() => {
    if (events) {
      callback(events)
      events = []
    }
  }, debounceIntervalMs)

  return (ev: T) => {
    events.push(ev)
    pushEvents()
  }
}

export default makeDebouncedStream
