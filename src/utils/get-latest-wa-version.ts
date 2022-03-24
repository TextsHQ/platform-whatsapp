import { texts } from '@textshq/platform-sdk'

async function getLatestWAVersion(version: string) {
  const latestWAVersion = await texts.fetch!(`https://web.whatsapp.com/check-update?version=${version}&platform=web`)
  const json: {
    isBroken: boolean
    isBelowSoft: boolean
    isBelowHard: boolean
    hardUpdateTime: number | null
    beta: boolean | null
    currentVersion: string
  } = JSON.parse(latestWAVersion.body.toString('utf-8'))
  return {
    version: json.currentVersion,
    isExpired: json.isBelowHard || json.isBelowSoft,
  }
}

export default getLatestWAVersion
