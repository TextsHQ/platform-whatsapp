var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    mediaMetadata: n,
    contextInfo: r
  } = e;
  if (n == null) {
    throw (0, s.default)("generateImageMessageProto: generating image protobuf without mediaMetadata");
  }
  const l = t.mimetype || n.mimetype;
  const u = {
    url: n.url,
    mimetype: l,
    caption: t.caption,
    directPath: n.directPath,
    fileSha256: (0, a.encodeBytes)(n.filehash),
    fileEncSha256: (0, a.encodeBytes)(n.encFilehash),
    height: n.height,
    width: n.width,
    fileLength: (0, i.isNumber)(t.size) ? t.size : undefined,
    mediaKey: (0, a.encodeBytes)(n.mediaKey),
    mediaKeyTimestamp: (0, i.isNumber)(n.mediaKeyTimestamp) ? n.mediaKeyTimestamp : undefined,
    jpegThumbnail: t.isViewOnce ? undefined : (0, a.encodeBytes)(t.body),
    contextInfo: r,
    viewOnce: t.isViewOnce
  };
  (0, a.validateOutgoingRequiredMediaProperties)(t.type, u, o.default.isNewsletter(t.to));
  return {
    imageMessage: u
  };
};
var i = require("./724976.js");
var a = require("./974637.js");
var o = r(require("./124928.js"));
var s = r(require("./556869.js"));