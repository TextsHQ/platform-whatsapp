import AVL from 'avl'

export default class ChatDB<T> {
  private avl: AVL<number, T>

  private dict: { [key: string]: T }

  key: (v: T) => number

  idGetter: (v: T) => string

  constructor(key: (v: T) => number, id: (v: T) => string) {
    this.key = key
    this.idGetter = id
    this.dict = {}
    this.avl = new AVL((a, b) => b - a, true)
  }

  insert(value: T) {
    this.avl.insert(this.key(value), value)
    this.dict[this.idGetter(value)] = value
  }

  delete(value: T) {
    this.avl.remove(this.key(value))
    delete this.dict[this.idGetter(value)]
  }

  clear() {
    this.avl.clear()
    this.dict = {}
  }

  get(id: string) {
    return this.dict[id]
  }

  all() {
    return this.avl.values()
  }

  updatedKey(previousKey: number) {
    const { data } = this.avl.find(previousKey)
    if (data) {
      this.avl.remove(previousKey)
      this.insert(data)
      return true
    }
    return false
  }

  chatsAfter(cursor: number, limit: number) {
    if (!cursor) return this.avl.values().slice(0, limit)

    const chats: T[] = []

    this.avl.range(cursor - 1, -2, visited => {
      if (chats.length >= limit) return true
      chats.push(visited.data)
    })
    return chats
  }
}
type SampleChat = {
  timestamp: number
  id: string
}
function testChatDB() {
  const db = new ChatDB<SampleChat>(c => c.timestamp, v => v.id)

  const arr = [...Array(1000)]
  arr.forEach(() => {
    const timestamp = Math.round(Math.random() * 1000000)
    const id = 'name-' + timestamp
    db.insert({ timestamp, id })
  })

  const item = db.all()[10]
  const oldKey = item.timestamp

  // item.timestamp = 99294929
  if (!db.updatedKey(oldKey)) console.log('bccc')

  let prevChats = db.chatsAfter(0, 20)
  while (prevChats.length > 0) {
    const nChats = db.chatsAfter(prevChats.slice(-1)[0].timestamp, 20)
    prevChats = nChats
  }
}
testChatDB()
