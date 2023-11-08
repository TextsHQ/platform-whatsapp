Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPLOAD_STAGE = exports.TYPE = exports.OUTWARD_TYPES = exports.MSG_TO_MEDIA = exports.MSG_SPECIFIC_FIELDS = exports.MEDIA_TO_MSG = exports.MEDIA_MSG_PROPS = exports.MEDIA_DATA_STAGE = exports.MAPPED_STICKER_PROPS = exports.MAPPED_MSG_PROPS = exports.FIELDS = exports.DOWNLOAD_STAGE = undefined;
const r = Object.freeze({
  preview: "body",
  mediaKey: "mediaKey",
  mediaKeyTimestamp: "mediaKeyTimestamp",
  size: "size",
  filehash: "filehash",
  mimetype: "mimetype",
  duration: "duration",
  pageCount: "pageCount",
  fullHeight: "height",
  fullWidth: "width",
  type: "type",
  filename: "filename",
  caption: "caption",
  isGif: "isGif",
  gifAttribution: "gifAttribution",
  sidecar: "streamingSidecar",
  subtype: "subtype",
  firstFrameLength: "firstFrameLength",
  firstFrameSidecar: "firstFrameSidecar",
  isAnimated: "isAnimated",
  isVcardOverMmsDocument: "isVcardOverMmsDocument",
  isViewOnce: "isViewOnce",
  waveform: "waveform",
  staticUrl: "staticUrl"
});
exports.MEDIA_TO_MSG = r;
const i = Object.freeze({
  body: "preview",
  directPath: "directPath",
  mediaKey: "mediaKey",
  mediaKeyTimestamp: "mediaKeyTimestamp",
  size: "size",
  filehash: "filehash",
  mimetype: "mimetype",
  duration: "duration",
  pageCount: "pageCount",
  height: "fullHeight",
  width: "fullWidth",
  type: "type",
  filename: "filename",
  caption: "caption",
  isGif: "isGif",
  gifAttribution: "gifAttribution",
  streamingSidecar: "sidecar",
  subtype: "subtype",
  firstFrameLength: "firstFrameLength",
  firstFrameSidecar: "firstFrameSidecar",
  isAnimated: "isAnimated",
  isVcardOverMmsDocument: "isVcardOverMmsDocument",
  isViewOnce: "isViewOnce",
  waveform: "waveform",
  staticUrl: "staticUrl",
  stickerPackId: "stickerPackId",
  stickerPackName: "stickerPackName",
  stickerPackPublisher: "stickerPackPublisher"
});
exports.MSG_TO_MEDIA = i;
const a = Object.keys(i);
exports.MAPPED_MSG_PROPS = a;
exports.MAPPED_STICKER_PROPS = ["filehash", "height", "mimetype", "size", "type", "width", "stickerPackId", "stickerPackName", "stickerPackPublisher"];
const o = [...a, "deprecatedMms3Url", "encFilehash", "streamable"];
exports.MEDIA_MSG_PROPS = o;
const s = Object.freeze({
  VIDEO: Object.freeze(["aspectRatio", "fullWidth", "fullHeight", "preview", "duration", "durationFloat", "isViewOnce", "fullPreviewData", "staticUrl"]),
  PTV: Object.freeze(["aspectRatio", "fullWidth", "fullHeight", "preview", "duration", "durationFloat", "isViewOnce", "fullPreviewData", "staticUrl"]),
  AUDIO: Object.freeze(["duration", "waveform"]),
  IMAGE: Object.freeze(["aspectRatio", "fullWidth", "fullHeight", "preview", "isViewOnce", "fullPreviewData", "staticUrl"]),
  PRODUCT: Object.freeze(["aspectRatio", "fullWidth", "fullHeight", "preview"]),
  STICKER: Object.freeze(["animationDuration", "singleLoopDuration", "emojis", "firstFrameLength", "firstFrameSidecar", "isAnimated", "isAvatar", "isAiSticker", "isFirstParty", "isFromStickerMaker", "stickerPackId", "stickerPackName", "stickerPackPublisher", "fullWidth", "fullHeight", "preview", "rgbaBuffer", "rgbaWidth", "rgbaHeight", "aspectRatio"]),
  STICKER_PACK: Object.freeze([]),
  DOCUMENT: Object.freeze(["aspectRatio", "pageCount", "preview", "isVcardOverMmsDocument", "parsedVcards", "fullPreviewData", "fullPreviewSize"]),
  RAW: Object.freeze(["mediaBlob", "size", "loadedSize", "filehash", "progressiveStage"]),
  BIZ_COVER_PHOTO: Object.freeze([])
});
exports.FIELDS = s;
exports.MSG_SPECIFIC_FIELDS = ["type", "filename", "caption", "isGif", "gifAttribution", "mimetype", "pageCount", "sidecar", "subtype", "isViewOnce"];
const l = require("../vendor/76672.js").Mirrored(["INIT", "EXISTS", "PREPARING", "REUPLOADING", "FETCHING", "PROCESSING", "NEED_POKE", "ERROR_MISSING", "ERROR_UNSUPPORTED", "PROGRESSIVE_READY", "RESOLVED"]);
exports.DOWNLOAD_STAGE = l;
const u = require("../vendor/76672.js").Mirrored(["INIT", "PREPARING", "UPLOADING", "FINALIZING", "NEED_UPLOAD", "ERROR_FILE_NOT_READABLE", "ERROR_MISSING", "ERROR_TOO_LARGE", "UPLOADED"]);
exports.UPLOAD_STAGE = u;
const c = require("../vendor/76672.js").Mirrored(["INIT", "EXISTS", "PREPARING", "UPLOADING", "FINALIZING", "SENDING", "REUPLOADING", "FETCHING", "DECRYPTING", "RESOLVED", "NEED_POKE", "NEED_UPLOAD", "ERROR_FILE_NOT_READABLE", "ERROR_MISSING", "ERROR_TOO_LARGE", "ERROR_UNSUPPORTED", "PROGRESSIVE_READY", "REMOTE_UPLOADING", "REMOTE_NEED_UPLOAD"]);
exports.MEDIA_DATA_STAGE = c;
exports.OUTWARD_TYPES = {
  IMAGE: "image",
  VIDEO: "video",
  PTV: "ptv",
  AUDIO: "audio",
  PTT: "ptt",
  STICKER: "sticker",
  DOCUMENT: "document",
  PRODUCT: "product",
  BIZ_COVER_PHOTO: "biz-cover-photo",
  UNKNOWN: "unknown"
};
const d = Object.freeze({
  VIDEO: "VIDEO",
  PTV: "PTV",
  IMAGE: "IMAGE",
  AUDIO: "AUDIO",
  STICKER: "STICKER",
  DOCUMENT: "DOCUMENT",
  PRODUCT: "PRODUCT",
  BIZ_COVER_PHOTO: "BIZ_COVER_PHOTO"
});
exports.TYPE = d;