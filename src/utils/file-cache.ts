import type { Asset, GetAssetOptions, PlatformAPI } from '@textshq/platform-sdk'
import type { Logger } from 'pino'
import { Readable, PassThrough } from 'stream'
import { createWriteStream, createReadStream } from 'fs'
import { stat, rm, mkdir } from 'fs/promises'
import { pathToFileURL } from 'url'
import { join } from 'path'
import { getHttpStream, toReadable } from '@adiwajshing/baileys'

type GetAssetFunction = Exclude<PlatformAPI['getAsset'], undefined>

/** cache attachments/files */
export const makeFileCache = (folderPath: string, logger: Logger) => {
  function getKeyPath(key: string) {
    return join(folderPath, key)
  }

  function getFileInfo(file: string) {
    return stat(file).catch(() => undefined)
  }

  async function getAsset(
    opts: GetAssetOptions | undefined,
    pathParams: string[],
    getAssetFromSource: GetAssetFunction,
  ) {
    const key = pathParams.join('-')
    const path = getKeyPath(key)
    const info = await getFileInfo(path)
    if (info) {
      logger.trace({ key, range: opts?.range }, 'cache hit')
      if (opts?.range) {
        const { start, end } = opts.range
        const rs = await createReadStream(path, { start, end })
        return {
          data: rs,
          contentLength: info.size,
        }
      }

      return {
        data: pathToFileURL(path).toString(),
        contentLength: info.size,
      }
    }

    if (opts?.range) {
      logger.trace({ key }, 'cache miss, but range requested')
      return getAssetFromSource(opts, ...pathParams)
    }

    let readable: Readable | undefined
    let existingAsset: Asset | undefined
    const fetchResult = await getAssetFromSource(opts, ...pathParams)
    if (typeof fetchResult === 'object' && 'data' in fetchResult) {
      existingAsset = fetchResult
      readable = fetchResult.data as Readable
    }

    if (typeof fetchResult === 'string') {
      if (fetchResult) {
        readable = await getHttpStream(fetchResult, { isStream: true })
      } else {
        readable = toReadable(Buffer.alloc(0))
      }
    } else if (typeof readable === 'undefined') {
      readable = fetchResult as Readable
    }

    // I don't know why axios sometimes returns a string
    // this is just to handle that case
    if (typeof readable === 'string' || Buffer.isBuffer(readable)) {
      readable = toReadable(readable)
      logger.debug(
        { bytes: (readable as any).length },
        'converted to readable',
      )
    }

    if (!(readable instanceof Readable)) {
      throw new Error('readable is not a readable stream')
    }

    const destPath = getKeyPath(key)
    if (!await stat(folderPath).catch(() => false)) {
      await mkdir(folderPath)
      logger.debug('init directory')
    }

    const result = new PassThrough()
    readable.pipe(result)

    const writeStream = createWriteStream(destPath)
    readable.pipe(writeStream)

    readable.on('end', () => {
      logger.debug({ key }, 'wrote to cache')
      writeStream.end()
      result.end()
    })

    return {
      ...existingAsset || { },
      data: result,
    }
  }

  return {
    async clear(pathParams: string[]) {
      const key = pathParams.join('-')
      logger.trace({ key }, 'clearing cache')
      const path = getKeyPath(key)
      if (await getFileInfo(path)) {
        await rm(path)
        logger.info({ key }, 'cleared cache')
      }
    },
    getAsset,
    makeGetAssetWithCache(fn: GetAssetFunction): GetAssetFunction {
      return (opts, ...pathParams) => (
        getAsset(opts, pathParams, fn)
          .catch(err => {
            console.error('err in asset get', pathParams, err)
            throw err
          })
      )
    },
  }
}
export type FileCache = ReturnType<typeof makeFileCache>
