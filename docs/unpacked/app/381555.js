var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    contextInfo: t,
    json: n,
    mediaMetadata: r
  } = e;
  (0, u.default)(r != null, "Sticker missing media data");
  if (r.mimetype !== "image/webp") {
    __LOG__(3)`invalid sticker mimetype: ${r.mimetype}`;
    throw (0, l.default)("invalid sticker mimetype");
  }
  const c = {
    url: r.url,
    mimetype: r.mimetype,
    directPath: r.directPath,
    fileSha256: (0, a.encodeBytes)(r.filehash),
    fileEncSha256: (0, a.encodeBytes)(r.encFilehash),
    mediaKey: (0, a.encodeBytes)(r.mediaKey),
    mediaKeyTimestamp: (0, i.isNumber)(r.mediaKeyTimestamp) ? r.mediaKeyTimestamp : undefined,
    fileLength: (0, i.isNumber)(n.size) ? n.size : undefined,
    height: n.height,
    width: n.width,
    firstFrameLength: r.firstFrameLength,
    firstFrameSidecar: n.firstFrameSidecar || undefined,
    isAnimated: r.isAnimated,
    stickerSentTs: n.stickerSentTs,
    contextInfo: t
  };
  (0, a.validateOutgoingRequiredMediaProperties)(o.MSG_TYPE.STICKER, c, s.default.isNewsletter(n.to));
  return {
    stickerMessage: c
  };
};
var i = require("./724976.js");
var a = require("./974637.js");
var o = require("./373070.js");
var s = r(require("./124928.js"));
var l = r(require("./556869.js"));
var u = r(require("../vendor/441143.js"));