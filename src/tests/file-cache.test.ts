import { Readable } from 'stream'
import { stat, readFile } from 'fs/promises'
import { delay } from 'baileys'
import { pathToFileURL } from 'url'
import type { Asset } from '@textshq/platform-sdk'
import { makeFileCache } from '../utils/file-cache'
import getLogger from '../utils/get-logger'

const PATH = './test-data/cache'

describe('File Cache Tests', () => {
  const logger = getLogger(undefined)
  logger.level = 'trace'

  const cache = makeFileCache(PATH, logger)

  it('should save from a stream', async () => {
    const key = `test-stream-${Date.now()}`
    const stream = new Readable()
    stream.push('hello world')
    stream.push(null)

    for (let i = 0; i < 5; i++) {
      const result = await cache.getAsset(undefined, [key], async () => {
        // should only be called the first time when the asset isn't cached
        if (i === 0) {
          return stream
        }

        throw new Error('should have been cached')
      })

      expect(result).toHaveProperty('data')
      const { data } = (result as Asset)

      if (data instanceof Readable) {
        let buff = Buffer.concat([])
        for await (const chunk of data as Readable) {
          buff = Buffer.concat([buff, chunk])
        }

        const str = buff.toString()
        expect(str).toBe('hello world')
      } else {
        expect(data).toEqual(pathToFileURL(`${PATH}/${key}`).toString())
        const path = (data as string).replace('file://', '')
        const newStr = await readFile(path, { encoding: 'utf-8' })
        expect(newStr).toBe('hello world')
      }

      await delay(100)
    }
  })

  it('should gracefully handle erros', async () => {
    const key = `test-stream-${Date.now()}`
    const stream = new Readable()
    stream.push('hello world')
    stream.destroy(new Error('test error'))

    await cache.getAsset(undefined, [key], async () => stream)
    await delay(100)

    // now actually save the asset
    const stream2 = new Readable()
    stream2.push('hello world')
    stream2.push(null)

    await cache.getAsset(undefined, [key], async () => stream)
    await delay(100)

    // check read correctly
    const cached = await cache.getAsset(undefined, [key], async () => stream)
    const path = (cached as any).data.replace('file://', '')
    const cachedData = await readFile(path, { encoding: 'utf-8' })
    expect(cachedData).toEqual('hello world')
  })

  it('should cache a remote URL', async () => {
    const url = 'https://www.meme-arsenal.com/memes/56a042220a511f15928ab35908b6255c.jpg'
    const key = `tom-${Date.now()}.jpeg`
    const result = await cache.getAsset(undefined, [key], async () => url)

    expect(result).toHaveProperty('data')
    const { data } = (result as Asset)

    let buff = Buffer.concat([])
    for await (const chunk of data as Readable) {
      buff = Buffer.concat([buff, chunk])
    }

    expect(buff.length).toBeGreaterThan(0)

    await delay(500)

    const result2 = await cache.getAsset(undefined, [key], async () => {
      throw new Error('should not be called')
    })

    const path = (result2 as any).data.replace('file://', '')
    const cachedData = await readFile(path)
    expect(cachedData).toEqual(buff)
  })

  it('should clear something from the cache', async () => {
    const key = `test-${Date.now()}`
    await cache.clear([key]) // do nothing

    const stream = new Readable()
    stream.push('hello world')
    stream.push(null)

    await cache.getAsset(undefined, [key], async () => stream)
    await delay(100)

    await cache.clear([key])
    // file should be gone
    expect(await stat(`${PATH}/${key}`).catch(() => false)).toBe(false)
  })

  it('should return a range from cache', async () => {
    const key = `testing-${Date.now()}`

    const stream = new Readable()
    stream.push('hello world')
    stream.push(null)

    await cache.getAsset(undefined, [key], async () => stream)
    await delay(100)

    const result = await cache.getAsset(
      { range: { start: 1, end: 6 } },
      [key],
      async () => { throw new Error('should not be called') },
    )

    const readable = (result as Asset)?.data as Readable
    let buff = Buffer.concat([])
    for await (const chunk of readable) {
      buff = Buffer.concat([buff, chunk])
    }

    expect(buff.toString()).toBe('ello w')
  })
})
