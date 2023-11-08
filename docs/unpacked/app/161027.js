var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mediaMetadata = function (e) {
  const t = e.mediaObject;
  if (!t) {
    __LOG__(4, undefined, new Error(), true)`id: ${e.id.toString()} type: ${e.type}`;
    SEND_LOGS("media-fault: mediaMetadata msg without mediaObject");
    throw (0, a.default)("msg.mediaMetadata with no mediaObject");
  }
  const n = (0, i.isMediaCryptoExpectedForMsg)(e) ? t.entries.getEntryByEncFilehash({
    encFilehash: e.encFilehash,
    deprecatedMms3Url: e.deprecatedMms3Url
  }) : t.entries.getUnencryptedEntry(e.filehash, e.directPath);
  if (!n) {
    __LOG__(4, undefined, new Error(), true)`id: ${e.id.toString()} type: ${e.type}`;
    SEND_LOGS("media-fault: mediaMetadata no entry");
    throw (0, a.default)("msg.mediaMetadata with entry mismatch");
  }
  const r = e.mediaData;
  return {
    url: (0, i.isMediaCryptoExpectedForMsg)(e) ? n.deprecatedMms3Url : null,
    directPath: n.directPath,
    encFilehash: n.getEncfilehash(),
    mediaKey: n.getMediaKey(),
    mediaKeyTimestamp: n.getMediaKeyTimestamp(),
    filehash: e.filehash,
    type: r.type,
    mimetype: r.mimetype,
    filename: r.filename,
    duration: r.duration,
    width: r.fullWidth,
    height: r.fullHeight,
    firstFrameLength: r.firstFrameLength,
    isAnimated: r.isAnimated,
    thumbnailDirectPath: e.thumbnailDirectPath,
    thumbnailSha256: e.thumbnailSha256,
    thumbnailEncSha256: e.thumbnailEncSha256,
    thumbnailHeight: e.thumbnailHeight,
    thumbnailWidth: e.thumbnailWidth,
    waveform: e.waveform,
    staticUrl: e.staticUrl
  };
};
var i = require("./86595.js");
var a = r(require("./556869.js"));