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
    documentMessage: f
  } = t;
  if (f == null) {
    return;
  }
  const {
    mediaKey: _,
    fileSha256: g,
    fileEncSha256: m,
    fileLength: h,
    url: y
  } = (0, c.getValidatedMediaMessageProperties)(f, n, r, d.MSG_TYPE.DOCUMENT);
  const E = (0, u.cleanIncomingFilename)(f.fileName || f.title);
  const S = f.caption != null && f.caption !== "";
  const v = S ? (0, l.convertToTextWithoutSpecialEmojis)(f.caption) : E;
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: d.MSG_TYPE.DOCUMENT,
      deprecatedMms3Url: (0, s.decodeUrl)(y),
      directPath: f.directPath,
      mimetype: f.mimetype,
      filehash: (0, s.decodeBytes)(g),
      encFilehash: (0, s.decodeBytes)(m),
      size: h,
      pageCount: f.pageCount || 0,
      mediaKey: (0, s.decodeBytes)(_),
      mediaKeyTimestamp: f.mediaKeyTimestamp != null ? (0, a.numberOrThrowIfTooLarge)(f.mediaKeyTimestamp) : (0, o.unixTime)(),
      filename: E,
      isCaptionByUser: S,
      caption: v,
      body: (0, s.decodeBytes)(f.jpegThumbnail) || "",
      isVcardOverMmsDocument: Boolean(f.contactVcard) && h <= p.VCARD_MAX_SIZE_KB * 1024,
      thumbnailDirectPath: f.thumbnailDirectPath,
      thumbnailSha256: (0, s.decodeBytes)(f.thumbnailSha256),
      thumbnailEncSha256: (0, s.decodeBytes)(f.thumbnailEncSha256),
      thumbnailHeight: f.thumbnailHeight,
      thumbnailWidth: f.thumbnailWidth
    }),
    contextInfo: f.contextInfo
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./632157.js");
var s = require("./21094.js");
var l = require("./974637.js");
var u = require("./920733.js");
var c = require("./942175.js");
var d = require("./373070.js");
var p = require("./962260.js");