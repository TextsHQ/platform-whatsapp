var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    contextInfo: t,
    json: n,
    mediaMetadata: r = {}
  } = e;
  const u = n.mimetype || r.mimetype;
  let c;
  let d;
  if (n.type !== s.MSG_TYPE.INTERACTIVE) {
    c = n.caption;
    if ((0, o.documentWithCaptionsSendEnabled)()) {
      d = n.caption;
      c = r.filename;
    }
  }
  const p = {
    url: r.url,
    mimetype: u,
    title: c,
    caption: d,
    directPath: r.directPath,
    fileSha256: (0, a.encodeBytes)(r.filehash),
    fileEncSha256: (0, a.encodeBytes)(r.encFilehash),
    fileName: r.filename,
    fileLength: (0, i.isNumber)(n.size) ? n.size : undefined,
    mediaKey: (0, a.encodeBytes)(r.mediaKey),
    mediaKeyTimestamp: (0, i.isNumber)(r.mediaKeyTimestamp) ? r.mediaKeyTimestamp : undefined,
    jpegThumbnail: (0, a.encodeBytes)(n.body),
    contextInfo: t,
    contactVcard: n.isVcardOverMmsDocument,
    thumbnailDirectPath: r.thumbnailDirectPath,
    thumbnailSha256: (0, a.encodeBytes)(r.thumbnailSha256),
    thumbnailEncSha256: (0, a.encodeBytes)(r.thumbnailEncSha256),
    thumbnailHeight: r.thumbnailHeight,
    thumbnailWidth: r.thumbnailWidth
  };
  if (Number.isFinite(n.pageCount) && !Number.isNaN(n.pageCount)) {
    p.pageCount = n.pageCount;
  }
  (0, a.validateOutgoingRequiredMediaProperties)(n.type, p, l.default.isNewsletter(n.to));
  return {
    documentMessage: p
  };
};
var i = require("./724976.js");
var a = require("./974637.js");
var o = require("./97858.js");
var s = require("./373070.js");
var l = r(require("./124928.js"));