import { TextEntity } from '@textshq/platform-sdk'
import emojiRegex from 'emoji-regex'

// Punctuation range: https://stackoverflow.com/a/25575009
const RE_SEP = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/
const RE_EMOJI = emojiRegex()

const isStartSep = c => RE_SEP.test(c)

const isEndSep = c => RE_EMOJI.test(c) || RE_SEP.test(c)

export function mapTextAttributes(src: string) {
  const entities : TextEntity[] = []
  let output = ''
  let prevToken : string = null
  let curToken: string = null
  let input = Array.from(src)
  while (input.length) {
    const c1 = input[0]
    if (c1 === prevToken) {
      output += c1
      input = input.slice(1)
      continue
    } else if (RE_SEP.test(c1)) {
      prevToken = null
    }
    const lastChar = output.slice(-1)
    if ((lastChar === '' || isStartSep(lastChar)) && '*_~'.includes(c1)) {
      curToken = c1
      prevToken = curToken
    } else {
      curToken = null
    }
    if (curToken) {
      input = input.slice(curToken.length)
      let closingIndex = input.indexOf(curToken)
      while (closingIndex > -1) {
        const prevChar = input[closingIndex - 1]
        const nextChar = input[closingIndex + 1]
        if (
          /[^\s]/.test(prevChar)
          && (nextChar === undefined || isEndSep(nextChar))
        ) {
          break
        }
        closingIndex = input.indexOf(curToken, closingIndex + 1)
      }
      if (closingIndex > 0) {
        const from = output.length
        const to = from + closingIndex
        output += input.slice(0, closingIndex).join('')
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
    textAttributes: entities.length ? { entities } : undefined,
  }
}
