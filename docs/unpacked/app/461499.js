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
  const l = n == null ? undefined : n.duration;
  const u = l != null && (0, i.isString)(l) ? parseInt(l, 10) : l;
  const c = t.caption;
  const d = t.mimetype || (n == null ? undefined : n.mimetype);
  const p = {
    url: n == null ? undefined : n.url,
    mimetype: d,
    directPath: n == null ? undefined : n.directPath,
    fileSha256: (0, a.encodeBytes)(n == null ? undefined : n.filehash),
    fileEncSha256: (0, a.encodeBytes)(n == null ? undefined : n.encFilehash),
    height: n == null ? undefined : n.height,
    width: n == null ? undefined : n.width,
    seconds: u,
    caption: c,
    fileLength: (0, i.isNumber)(t.size) ? t.size : undefined,
    mediaKey: (0, a.encodeBytes)(n == null ? undefined : n.mediaKey),
    mediaKeyTimestamp: (0, i.isNumber)(n == null ? undefined : n.mediaKeyTimestamp) ? n.mediaKeyTimestamp : undefined,
    jpegThumbnail: t.isViewOnce ? undefined : (0, a.encodeBytes)(t.body),
    gifPlayback: t.isGif,
    gifAttribution: t.gifAttribution,
    contextInfo: r,
    streamingSidecar: t.streamingSidecar,
    viewOnce: t.isViewOnce
  };
  (0, a.validateOutgoingRequiredMediaProperties)(t.type, p, s.default.isNewsletter(t.to));
  if (t.type === o.MSG_TYPE.PTV) {
    return {
      ptvMessage: p
    };
  } else {
    return {
      videoMessage: p
    };
  }
};
var i = require("./724976.js");
var a = require("./974637.js");
var o = require("./373070.js");
var s = r(require("./124928.js"));