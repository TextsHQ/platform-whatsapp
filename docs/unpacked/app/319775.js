var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    msgContext: r
  } = e;
  const {
    videoMessage: d
  } = t;
  if (d == null) {
    return;
  }
  const {
    directPath: p,
    staticUrl: f,
    mimetype: _,
    caption: g,
    height: m,
    width: h,
    mediaKeyTimestamp: y,
    jpegThumbnail: E,
    interactiveAnnotations: S,
    viewOnce: v,
    thumbnailDirectPath: T,
    thumbnailSha256: M,
    thumbnailEncSha256: A,
    contextInfo: b,
    gifPlayback: C,
    gifAttribution: P,
    seconds: O,
    streamingSidecar: I
  } = d;
  const {
    mediaKey: R,
    fileSha256: N,
    fileEncSha256: D,
    fileLength: w,
    url: L
  } = (0, u.getValidatedMediaMessageProperties)(d, n, r, c.MSG_TYPE.VIDEO);
  const k = (0, i.default)((0, i.default)({}, n), {}, {
    type: c.MSG_TYPE.VIDEO,
    deprecatedMms3Url: (0, s.decodeUrl)(L),
    directPath: p,
    staticUrl: f || "",
    mimetype: _,
    caption: (0, l.convertToTextWithoutSpecialEmojis)(g),
    filehash: (0, s.decodeBytes)(N),
    encFilehash: (0, s.decodeBytes)(D),
    size: w,
    height: m,
    width: h,
    mediaKey: (0, s.decodeBytes)(R),
    mediaKeyTimestamp: y != null ? (0, a.numberOrThrowIfTooLarge)(y) : (0, o.unixTime)(),
    duration: `${O || 0}`,
    body: (0, s.decodeBytes)(E) || "",
    interactiveAnnotations: S,
    isViewOnce: v === true,
    thumbnailDirectPath: T,
    thumbnailSha256: (0, s.decodeBytes)(M),
    thumbnailEncSha256: (0, s.decodeBytes)(A),
    isGif: C,
    gifAttribution: P,
    streamingSidecar: I
  });
  (0, s.validateRequiredMediaProperties)(k, d);
  return {
    msgData: k,
    contextInfo: b
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./632157.js");
var s = require("./21094.js");
var l = require("./974637.js");
var u = require("./942175.js");
var c = require("./373070.js");