import type { Sticker, StickerPack } from '@textshq/platform-sdk'
import axios from 'axios'

const STICKER_PACK_URL = 'https://static.whatsapp.net/sticker?cat=sticker_store_data&id=all&lg=en&country={{region}}'
const STICKERS_IN_PACK_URL = 'https://static.whatsapp.net/sticker?cat=sticker_pack_data&id={{id}}&lg=en'

export async function getStickerPacks() {
  const url = STICKER_PACK_URL.replace('{{region}}', 'IN')
  const { data } = await axios.get<any[]>(url, { responseType: 'json' })
  return data.map(mapStickerPack)
}

export async function getStickersInPack(id: string) {
  const url = STICKERS_IN_PACK_URL.replace('{{id}}', id)
  const { data } = await axios.get<{ stickers: any[] }[]>(url, { responseType: 'json' })
  return data[0].stickers.map(mapSticker)
}

function mapStickerPack(pack: any): StickerPack {
  return {
    id: pack['sticker-pack-id'],
    imgURL: getStickerPreviewURL(pack['tray-image-preview']),
    name: pack.name,
    publisher: pack.publisher,
    description: pack.description,
    stickers: {
      items: [],
      hasMore: true,
    },
  }
}

function mapSticker(sticker: any): Sticker {
  return {
    id: sticker.handle,
    url: getStickerURL(sticker),
    type: 'img',
    size: {
      width: sticker.width,
      height: sticker.height,
    },
    mimeType: sticker.mimetype,
    emojis: sticker.emojis,
  }
}

function getStickerURL(sticker: any) {
  return `asset://$accountID/sticker/${encodeURIComponent(sticker['direct-path'])}/${encodeURIComponent(sticker['media-key'])}}`
}

function getStickerPreviewURL(id: string) {
  return `https://static.whatsapp.net/sticker?cat=sticker_preview_png&id=${id}`
}
