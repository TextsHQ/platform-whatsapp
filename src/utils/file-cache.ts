import type { Asset, GetAssetOptions, PlatformAPI } from '@textshq/platform-sdk'
import type { Logger } from 'pino'
import { Readable, PassThrough } from 'stream'
import { createWriteStream, createReadStream, renameSync } from 'fs'
import { stat, rm, mkdir } from 'fs/promises'
import { pathToFileURL } from 'url'
import { join } from 'path'
import sanitizeFilename from 'sanitize-filename'
import { getHttpStream, toReadable } from '@textshq/baileys'

type GetAssetFunction = Exclude<PlatformAPI['getAsset'], undefined>

/** cache attachments/files */
export const makeFileCache = (folderPath: string, logger: Logger) => {
  function getKey(path: string[]) {
    return path.join('-')
  }

  function getKeyPath(key: string) {
    return join(folderPath, sanitizeFilename(key))
  }

  function getFileInfo(file: string) {
    return stat(file).catch(() => undefined)
  }

  function getFileURLForPathParams(pathParams: string[]) {
    return pathToFileURL(getKeyPath(getKey(pathParams))).toString()
  }

  async function getAsset(
    opts: GetAssetOptions | undefined,
    pathParams: string[],
    getAssetFromSource: GetAssetFunction,
  ) {
    const key = getKey(pathParams)
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
        data: getFileURLForPathParams(pathParams),
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
    // we move to a temp file first, then rename it to the final file
    // this is to accommodate for the case where the process is killed
    // or any other error occurs while writing the file
    const tmpDestPath = destPath + '.tmp'
    if (!await stat(folderPath).catch(() => false)) {
      await mkdir(folderPath)
      logger.debug('init directory')
    }

    const result = new PassThrough()
    readable.pipe(result)
    const writeStream = createWriteStream(tmpDestPath)

    readable.pipe(writeStream)
    readable.once('error', error => {
      logger.error({ err: error.stack, key }, 'error while reading stream')
    })
    readable.once('end', () => {
      writeStream.end()
      result.end()

      logger.debug({ key }, 'wrote to cache')
    })

    writeStream.once('finish', () => {
      logger.trace('renamed file')
      renameSync(tmpDestPath, destPath)
    })

    return {
      ...existingAsset || { },
      data: result,
    }
  }

  return {
    async clear(pathParams: string[]) {
      const key = getKey(pathParams)
      logger.trace({ key }, 'clearing cache')
      const path = getKeyPath(key)
      if (await getFileInfo(path)) {
        await rm(path)
        logger.info({ key }, 'cleared cache')
      }
    },
    getFileURLForPathParams,
    getAsset,
    makeGetAssetWithCache(fn: GetAssetFunction): GetAssetFunction {
      return (opts, ...pathParams) => (
        getAsset(opts, pathParams, fn)
          .catch(err => {
            logger.error({ err, pathParams }, 'err in asset get')
            throw err
          })
      )
    },
  }
}
export type FileCache = ReturnType<typeof makeFileCache>
