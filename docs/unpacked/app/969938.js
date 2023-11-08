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
    imageMessage: d
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
    scanLengths: v,
    scansSidecar: T,
    viewOnce: M,
    thumbnailDirectPath: A,
    thumbnailSha256: b,
    thumbnailEncSha256: C,
    contextInfo: P
  } = d;
  const {
    mediaKey: O,
    fileSha256: I,
    fileEncSha256: R,
    fileLength: N,
    url: D
  } = (0, u.getValidatedMediaMessageProperties)(d, n, r, c.MSG_TYPE.IMAGE);
  const w = (0, i.default)((0, i.default)({}, n), {}, {
    type: c.MSG_TYPE.IMAGE,
    deprecatedMms3Url: (0, s.decodeUrl)(D),
    directPath: p || "",
    staticUrl: f || "",
    mimetype: _ || "",
    caption: (0, l.convertToTextWithoutSpecialEmojis)(g),
    filehash: (0, s.decodeBytes)(I),
    encFilehash: (0, s.decodeBytes)(R),
    size: N,
    height: m || 0,
    width: h || 0,
    mediaKey: (0, s.decodeBytes)(O),
    mediaKeyTimestamp: y != null ? (0, a.numberOrThrowIfTooLarge)(y) : (0, o.unixTime)(),
    body: (0, s.decodeBytes)(E) || "",
    interactiveAnnotations: S,
    scanLengths: v,
    scansSidecar: T,
    isViewOnce: M === true,
    thumbnailDirectPath: A,
    thumbnailSha256: (0, s.decodeBytes)(b),
    thumbnailEncSha256: (0, s.decodeBytes)(C)
  });
  (0, s.validateRequiredMediaProperties)(w, d);
  return {
    msgData: w,
    contextInfo: P
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./632157.js");
var s = require("./21094.js");
var l = require("./974637.js");
var u = require("./942175.js");
var c = require("./373070.js");