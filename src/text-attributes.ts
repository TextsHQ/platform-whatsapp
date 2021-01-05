
export function mapTextAttributes(text: string) {
  const entities = []
  const match = /[*_~]/.exec(text)
  if (match && match[0]) {
    const token = match[0]
    const from = match.index
    text = text.slice(from + 1)
    const match2 = new RegExp(`\\w+[${token}]`).exec(text)
    if (match2 && match2[0]) {
      const to = from + match2[0].length
      entities.push({
        from,
        to,
        italic: true,
      })
    }
  }
  return {
    entities
  }
}
