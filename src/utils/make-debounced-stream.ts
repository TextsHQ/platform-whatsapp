import { debounce } from 'lodash'

function makeDebouncedStream<T>(
  debounceIntervalMs: number,
  callback: (events: T[]) => void,
) {
  let events: T[] = []

  let isBuffering = false

  const pushEvents = debounce(() => {
    if (events.length && !isBuffering) {
      callback(events)
      events = []
    }
  }, debounceIntervalMs)

  return {
    push(...evs: T[]) {
      events.push(...evs)
      pushEvents()
    },
    buffer() {
      if (!isBuffering) {
        isBuffering = true
        return true
      }

      return false
    },
    flush() {
      if (!isBuffering) {
        return
      }

      isBuffering = false
      callback(events)
    },
  }
}

export default makeDebouncedStream
