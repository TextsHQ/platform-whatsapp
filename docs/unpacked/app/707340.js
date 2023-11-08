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
    stickerMessage: d
  } = t;
  if (d == null) {
    return;
  }
  const {
    mediaKey: p,
    fileSha256: f,
    fileEncSha256: _,
    url: g
  } = (0, u.getValidatedMediaMessageProperties)(d, n, r, c.MSG_TYPE.STICKER);
  const m = (0, i.default)((0, i.default)({}, n), {}, {
    type: c.MSG_TYPE.STICKER,
    deprecatedMms3Url: (0, l.decodeUrl)(g),
    directPath: d.directPath || "",
    mimetype: d.mimetype || "",
    filehash: (0, l.decodeBytes)(f),
    encFilehash: (0, l.decodeBytes)(_),
    mediaKey: (0, a.default)((0, l.decodeBytes)(p)),
    mediaKeyTimestamp: d.mediaKeyTimestamp != null ? (0, o.numberOrThrowIfTooLarge)(d.mediaKeyTimestamp) : (0, s.unixTime)(),
    height: d.height || 0,
    width: d.width || 0,
    firstFrameLength: d.firstFrameLength,
    firstFrameSidecar: d.firstFrameSidecar,
    isAnimated: d.isAnimated,
    stickerSentTs: (0, o.maybeNumberOrThrowIfTooLarge)(d.stickerSentTs),
    isAvatar: d.isAvatar
  });
  (0, l.validateRequiredMediaProperties)(m, d);
  return {
    msgData: m,
    contextInfo: d.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./82236.js"));
var o = require("./229079.js");
var s = require("./632157.js");
var l = require("./21094.js");
var u = require("./942175.js");
var c = require("./373070.js");