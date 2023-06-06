import { texts } from '@textshq/platform-sdk'
import { ExpectedJSONGotHTMLError } from '@textshq/platform-sdk/dist/json'

async function getLatestWAVersion(version: string) {
  const latestWAVersionRes = await texts.fetch!(`https://web.whatsapp.com/check-update?version=${version}&platform=web`)
  const body = latestWAVersionRes.body.toString('utf-8')
  if (body[0] === '<') {
    texts.log(latestWAVersionRes.statusCode, latestWAVersionRes.body)
    throw new ExpectedJSONGotHTMLError(latestWAVersionRes.statusCode, body)
  }
  const json: {
    isBroken: boolean
    isBelowSoft: boolean
    isBelowHard: boolean
    hardUpdateTime: number | null
    beta: boolean | null
    currentVersion: string
  } = JSON.parse(body)
  return {
    version: json.currentVersion,
    isExpired: json.isBelowHard || json.isBelowSoft,
  }
}

export default getLatestWAVersion
