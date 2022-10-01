import { Attachment, AttachmentType, StickerPack, texts } from '@textshq/platform-sdk'

const STICKER_API_URL = 'https://static.whatsapp.net/sticker'

const http = texts.createHttpClient!()

const headers = {
  accept: 'application/json',
  // 'accept-language': 'en',
  // 'sec-ch-ua': '"Chromium";v="105", "Google Chrome";v="105", "Not;A=Brand";v="99"',
  // 'sec-ch-ua-mobile': '?0',
  // 'sec-ch-ua-platform': '"macOS"',
  // 'sec-fetch-dest': 'empty',
  // 'sec-fetch-mode': 'cors',
  // 'sec-fetch-site': 'cross-site',
  'user-agent': 'axios/1.2.3', // can be anything that's unpopular and not chrome otherwise fb html error page is sent more frequently by the server
}

export async function getStickerPacks(country: string) {
  const res = await http.requestAsString(STICKER_API_URL, {
    headers,
    searchParams: {
      cat: 'sticker_store_data',
      id: 'all',
      lg: 'en',
      country,
    },
  })
  const data = JSON.parse(res.body) as any[]
  return data.map(mapStickerPack)
}

export async function getStickersInPack(id: string, accountID: string) {
  const res = await http.requestAsString(STICKER_API_URL, {
    headers,
    searchParams: {
      cat: 'sticker_pack_data',
      id,
      lg: 'en',
    },
  })
  const data = JSON.parse(res.body) as { stickers: any[] }
  return data[0].stickers.map(s => mapSticker(s, accountID))
}

function mapStickerPack(pack: any): StickerPack {
  return {
    id: pack['sticker-pack-id'],
    preview: {
      id: pack['tray-image-id'],
      type: AttachmentType.IMG,
      srcURL: getStickerPreviewURL(pack['tray-image-preview']),
    },
    name: pack.name,
    publisher: pack.publisher,
    description: pack.description,
    stickers: {
      items: [],
      hasMore: true,
    },
  }
}

function mapSticker(sticker: any, accountID: string): Attachment {
  return {
    id: sticker.handle,
    srcURL: getStickerURL(sticker, accountID),
    type: AttachmentType.IMG,
    size: {
      width: sticker.width,
      height: sticker.height,
    },
    mimeType: sticker.mimetype,
    // emojis: sticker.emojis,
  }
}

const getStickerURL = (sticker: any, accountID: string) =>
  `asset://${accountID}/sticker/${encodeURIComponent(sticker['direct-path'])}/${encodeURIComponent(sticker['media-key'])}}`

const getStickerPreviewURL = (id: string) =>
  `https://static.whatsapp.net/sticker?cat=sticker_preview_png&id=${id}`
