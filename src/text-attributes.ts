import { TextEntity } from '@textshq/platform-sdk'

export function mapTextAttributes(text: string) {
  const entities = []
  const match = /[*_~]/.exec(text)
  let out = ''
  if (match && match[0]) {
    const token = match[0]
    const from = match.index
    out += text.slice(0, from)
    text = text.slice(from + 1)
    console.log('out1', out, from, token, text)
    const match2 = new RegExp(`\\w+[${token}]`).exec(text)
    if (match2 && match2[0]) {
      out += text.slice(0, match2[0].length - 1)
      console.log('out2', out)
      const to = from + match2[0].length - 1
      let entity: TextEntity = {
        from,
        to,
      }
      switch (token) {
        case '*':
          entity.bold = true
          break
        case '_':
          entity.italic = true
          break
        case '~':
          entity.strikethrough = true
          break
        case '```':
          entity.code = true
          break
      }
      entities.push(entity)
    }
  }
  return {
    text: out,
    textAttributes: entities.length ? { entities } : null,
  }
}
