var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseVideoOrPtvMessageProto = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    type: r
  } = e;
  const {
    ptvMessage: c,
    videoMessage: d
  } = t;
  const p = d || c;
  if (p == null) {
    return;
  }
  if (r === u.MSG_TYPE.VIDEO && d == null) {
    return;
  }
  if (r === u.MSG_TYPE.PTV && c == null) {
    return;
  }
  const {
    url: f,
    directPath: _,
    staticUrl: g,
    mimetype: m,
    caption: h,
    fileSha256: y,
    fileEncSha256: E,
    fileLength: S,
    height: v,
    width: T,
    mediaKey: M,
    mediaKeyTimestamp: A,
    jpegThumbnail: b,
    interactiveAnnotations: C,
    viewOnce: P,
    thumbnailDirectPath: O,
    thumbnailSha256: I,
    thumbnailEncSha256: R,
    contextInfo: N,
    gifPlayback: D,
    gifAttribution: w,
    seconds: L,
    streamingSidecar: k
  } = p;
  const G = (0, i.default)((0, i.default)({}, n), {}, {
    type: r,
    deprecatedMms3Url: (0, s.decodeUrl)(f),
    directPath: _,
    staticUrl: g || "",
    mimetype: m,
    caption: (0, l.convertToTextWithoutSpecialEmojis)(h),
    filehash: (0, s.decodeBytes)(y),
    encFilehash: (0, s.decodeBytes)(E),
    size: (0, a.numberOrThrowIfTooLarge)(S || 0),
    height: v,
    width: T,
    mediaKey: (0, s.decodeBytes)(M),
    mediaKeyTimestamp: A != null ? (0, a.numberOrThrowIfTooLarge)(A) : (0, o.unixTime)(),
    duration: `${L || 0}`,
    body: (0, s.decodeBytes)(b) || "",
    interactiveAnnotations: C,
    isViewOnce: P === true,
    thumbnailDirectPath: O,
    thumbnailSha256: (0, s.decodeBytes)(I),
    thumbnailEncSha256: (0, s.decodeBytes)(R),
    isGif: D,
    gifAttribution: w,
    streamingSidecar: k
  });
  (0, s.validateRequiredMediaProperties)(G, p);
  return {
    msgData: G,
    contextInfo: N
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./632157.js");
var s = require("./21094.js");
var l = require("./974637.js");
var u = require("./373070.js");