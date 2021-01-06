import { TextEntity } from '@textshq/platform-sdk'

export function mapTextAttributes(input: string) {
  const entities = []
  let output = ''
  let match1
  let prevToken = null
  let curToken = null
  while (input) {
    console.log('-- input:', input)
    const c1 = input[0]
    if (c1 === prevToken) {
      output += c1
      input = input.slice(1)
      continue
    }
    const c2 = input[1]
    if ('*_~'.includes(c1)) {
      curToken = c1
      prevToken = curToken
    } else {
      curToken = null
    }
    if (curToken) {
      input = input.slice(curToken.length)
      let closingIndex = input.indexOf(curToken)
      while (closingIndex) {
        const prevChar = input[closingIndex - 1]
        const nextChar = input[closingIndex + 1]
        console.log(
          curToken,
          prevChar,
          nextChar,
          /[^\s]/.test(prevChar),
          nextChar == undefined || /[\s*_~]/.test(nextChar)
        )
        if (
          /[^\s]/.test(prevChar) &&
          (nextChar == undefined || /[\s*_~]/.test(nextChar))
        ) {
          break
        }
        closingIndex = input.indexOf(curToken, closingIndex + 1)
      }
      console.log(closingIndex, curToken)
      if (closingIndex > 0) {
        const from = output.length
        const to = from + closingIndex
        output += input.slice(0, closingIndex)
        input = input.slice(closingIndex + 1)
        const entity: TextEntity = {
          from,
          to,
        }
        switch (curToken) {
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
      } else {
        output += curToken
      }
    } else {
      output += c1
      input = input.slice(1)
    }
  }
  return {
    text: output,
    textAttributes: entities.length ? { entities } : null,
  }
}
