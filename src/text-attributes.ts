/**
 * An implementation of WhatsApp text formatting.
 * https://faq.whatsapp.com/general/chats/how-to-format-your-messages/
 *
 * Valid tokens:
 *  - *bold*
 *  - _italic_
 *  - ~strikethrough~
 * - ```monospace```
 */

import emojiRegex from 'emoji-regex'
import type { TextEntity } from '@textshq/platform-sdk'

// Punctuation range: https://stackoverflow.com/a/25575009
const RE_SEP = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/
const RE_EMOJI = emojiRegex()

const isStartSep = (c: string) => RE_SEP.test(c)

const isEndSep = (c: string) => RE_EMOJI.test(c) || RE_SEP.test(c)

const findClosingIndex = (input: string[], curToken: string) => {
  const tokenLen = curToken.length
  let closingIndex = input.indexOf(curToken[0])
  while (closingIndex > -1) {
    let tokenMatched = true
    for (let i = 1; i < tokenLen; i++) {
      if (input[closingIndex + i] !== curToken[i]) {
        tokenMatched = false
        break
      }
    }
    if (!tokenMatched) {
      closingIndex = input.indexOf(curToken, closingIndex + 1)
      continue
    } else if (tokenLen > 1) {
      // For code block, the prev and next char doesn't matter.
      return closingIndex
    }
    const prevChar = input[closingIndex - 1]
    const nextChar = input[closingIndex + tokenLen]
    if (
      /[^\s]/.test(prevChar)
        && (nextChar === undefined || isEndSep(nextChar))
    ) {
      break
    }
    closingIndex = input.indexOf(curToken, closingIndex + 1)
  }
  return closingIndex
}

const offsetEntities = (entities: TextEntity[], offset: number) => entities.map(entity => ({
  ...entity,
  from: entity.from + offset,
  to: entity.to + offset,
}))

export function mapTextAttributes(src: string) {
  const entities: TextEntity[] = []
  let output = ''
  let prevToken: string = null
  let curToken: string = null
  let input = Array.from(src)
  while (input.length) {
    const c1 = input[0]
    if (c1 === prevToken) {
      output += c1
      input = input.slice(1)
      continue
    } else if (isStartSep(c1)) {
      prevToken = null
    }
    const lastChar = output.slice(-1)
    if ((lastChar === '' || isStartSep(lastChar)) && '*_~`'.includes(c1)) {
      if (c1 === '`') {
        if (input[1] === '`' && input[2] === '`') {
          curToken = '```'
        } else {
          curToken = null
        }
      } else {
        curToken = c1
      }
    } else {
      curToken = null
    }
    if (curToken) {
      prevToken = curToken
      input = input.slice(curToken.length)
      const closingIndex = findClosingIndex(input, curToken)
      if (closingIndex > 0) {
        const content = input.slice(0, closingIndex).join('')
        const nestedAttributes = mapTextAttributes(content)
        const from = Array.from(output).length
        let to = from + closingIndex
        if (nestedAttributes.textAttributes) {
          to = from + nestedAttributes.text.length
          entities.push(
            ...offsetEntities(nestedAttributes.textAttributes.entities, from)
          )
          output += nestedAttributes.text
        } else {
          output += content
        }
        input = input.slice(closingIndex + curToken.length)
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
