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

import { emojiRegex } from '@textshq/platform-sdk/dist/emoji'
import type { TextEntity } from '@textshq/platform-sdk'

// Punctuation range: https://stackoverflow.com/a/25575009
const RE_SEP = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/

export const MENTION_START_TOKEN = '@{{'
export const MENTION_END_TOKEN = '}}'

const isStartSep = (c: string) => RE_SEP.test(c)

const isEndSep = (c: string) => emojiRegex.test(c) || RE_SEP.test(c)

const getClosingToken = (token: string): string => (token === MENTION_START_TOKEN ? MENTION_END_TOKEN : token)

/**
 * Try to find the closing index for curToken.
 *
 * An example: say curToken is *, and we find the next * at index 10.
 *
 * 1. Test the prevChar (input[9]) and nextChar (input[11])
 * 2. If they are both valid separators, return 10.
 * 3. Otherwise, find the next * after index 10, and repeat 1-3.
 */
const findClosingIndex = (input: string[], curToken: string) => {
  const closingToken = getClosingToken(curToken)
  const tokenLen = closingToken.length
  let closingIndex = input.indexOf(closingToken[0])
  while (closingIndex > -1) {
    let tokenMatched = true
    for (let i = 1; i < tokenLen; i++) {
      // When token has more than one char, make sure the chars after the
      // closingIndex fully match token.
      if (input[closingIndex + i] !== closingToken[i]) {
        tokenMatched = false
        break
      }
    }
    if (!tokenMatched) {
      // If not fully matched, find the next closingIndex
      closingIndex = input.indexOf(closingToken, closingIndex + 1)
      continue
    } else if (tokenLen > 1) {
      // For code block, the prev and next char doesn't matter.
      return closingIndex
    }
    // Test prevChar and nextChar are both valid separators.
    const prevChar = input[closingIndex - 1]
    const nextChar = input[closingIndex + tokenLen]
    if (
      /[^\s]/.test(prevChar)
        && (nextChar === undefined || isEndSep(nextChar))
    ) {
      break
    }
    // If prevChar or nextChar is invalid, find the next closingIndex.
    closingIndex = input.indexOf(closingToken, closingIndex + 1)
  }
  return closingIndex
}

export function mapTextAttributes(src: string, contactUsername: (id: string) => string | undefined) {
  const entities: TextEntity[] = []
  let output = ''
  let prevToken: string | null = null
  let curToken: string | null = null
  let input = Array.from(src)

  // Parse the input sequentially.
  while (input.length) {
    // Always start from the first char.
    const c1 = input[0]
    if (c1 === prevToken) {
      // Somehow, WhatsApp treat a token char immediately after the same valid token as plain text.
      // Example: *bold**not bold*, the third * is not treated as a token.
      output += c1
      input = input.slice(1)
      continue
    } else if (isStartSep(c1)) {
      prevToken = null
    }

    // c1 is a token if lastChar is a separator and current char is one of *_~`.
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
    } else if (c1 === '@' && input[1] === '{' && input[2] === '{') {
      curToken = MENTION_START_TOKEN
    } else {
      curToken = null
    }

    if (curToken) {
      prevToken = curToken
      input = input.slice(curToken.length)
      const closingIndex = findClosingIndex(input, curToken)
      if (closingIndex > 0) {
        // A valid closingIndex is found, it's a valid token!
        const content = input.slice(0, closingIndex).join('')
        // See if we can find nested entities.
        let nestedAttributes = { text: '', textAttributes: undefined } as ReturnType<typeof mapTextAttributes>
        if (curToken !== '```') {
          nestedAttributes = mapTextAttributes(content, contactUsername)
        }
        const from = Array.from(output).length
        let to = from + closingIndex
        if (nestedAttributes!.textAttributes) {
          // Nested entities change the output, so update the range.
          to = from + nestedAttributes!.text.length
          // Offset the range of child entities.
          const childEntities = nestedAttributes!.textAttributes!.entities.map(entity => ({
            ...entity,
            from: entity.from + from,
            to: entity.to + from,
          }))
          entities.push(...childEntities)
          output += nestedAttributes!.text
        } else if (curToken !== MENTION_START_TOKEN) {
          output += content
        }
        // Construct the entity of the current token.
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
          case MENTION_START_TOKEN: {
            const username = contactUsername(content)
            const text = username || content
            output += `@${text}`
            entity.to = from + text.length + 1
            entity.mentionedUser = { id: content }
            break
          }
        }
        entities.push(entity)
        // Set input to start from the char after the closing token.
        input = input.slice(closingIndex + getClosingToken(curToken).length)
      } else {
        // Unable to find a valid closingIndex, curToken is plain text!
        output += curToken
      }
    } else {
      // c1 is plain text!
      output += c1
      input = input.slice(1)
    }
  }
  return {
    text: output,
    textAttributes: entities.length ? { entities } : undefined,
  }
}
