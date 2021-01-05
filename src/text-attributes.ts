import { TextEntity } from '@textshq/platform-sdk'

export function mapTextAttributes(input: string) {
  const entities = []
  let output = ''
  let match1
  while ((match1 = /[*_~]/.exec(input))) {
    // console.log('match1', input, match1, match1[0])
    const token = match1[0]
    const from = output.length + match1.index
    output += input.slice(0, match1.index)
    input = input.slice(match1.index + 1)
    const match2 = new RegExp(`.+[${token}]`).exec(input)
    if (match2 && match2[0]) {
      // console.log('match2', input, match2, match2[0])
      output += input.slice(0, match2[0].length - 1)
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

      input = input.slice(match2[0].length)
    }
  }
  output += input
  return {
    text: output,
    textAttributes: entities.length ? { entities } : null,
  }
}
