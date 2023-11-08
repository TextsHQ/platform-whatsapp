var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resumeUploadMsg = function (e) {
  var t;
  const {
    mediaObject: r
  } = e;
  if (!r) {
    __LOG__(4, undefined, new Error(), true)`id: ${e.id.toString()} type: ${e.type}`;
    SEND_LOGS("media-fault: resumeUploadMsg msg without mediaObject");
    return Promise.resolve();
  }
  r.userUploadAttemptCount++;
  const {
    filehash: m
  } = r;
  const h = (0, u.shouldUseMediaKeyCache)() && m != null && (t = u.MediaKeyCache.get(m)) !== null && t !== undefined ? t : undefined;
  e.ack = a.ACK.CLOCK;
  const y = ((0, f.getIsNewsletterMsg)(e) ? c.uploadUnencryptedMedia : c.uploadMedia)({
    mimetype: e.mimetype,
    mediaObject: r,
    mediaKeyInfo: h,
    mediaType: (0, p.getMsgMediaType)(e),
    forwardedFromWeb: Boolean(e.forwardedFromWeb),
    uploadOrigin: (0, l.default)((0, o.getChat)(e)),
    isViewOnce: Boolean(e.isViewOnce)
  }).then(function () {
    var t = (0, i.default)(function* (t) {
      let {
        mediaEntry: n
      } = t;
      if ((0, u.shouldUseMediaKeyCache)() && m != null) {
        u.MediaKeyCache.delete(m);
      }
      if (!n) {
        throw (0, g.default)("upload failed: media entry was not created");
      }
      r.userUploadAttemptCount = 0;
      const i = {
        deprecatedMms3Url: n.deprecatedMms3Url,
        directPath: n.directPath,
        filehash: r.filehash,
        size: r.size,
        streamingSidecar: n.sidecar,
        firstFrameSidecar: n.firstFrameSidecar
      };
      if (n instanceof s.EncryptedMediaEntry) {
        i.mediaKey = n.mediaKey;
        i.mediaKeyTimestamp = n.mediaKeyTimestamp;
        i.encFilehash = n.encFilehash;
      } else if (n instanceof s.UnencryptedMediaEntry) {
        i.mediaHandle = n.handle;
      }
      yield (0, d.default)(e, i);
      return e;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
  return ((0, f.getIsNewsletterMsg)(e) ? require("./12074.js").sendNewsletterMediaMsg((0, o.getChat)(e), e, () => y) : (0, _.resendMsgToChat)((0, o.getChat)(e), y)).catch(() => {
    e.ack = a.ACK.FAILED;
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./402994.js");
var o = require("./163755.js");
var s = require("./509998.js");
var l = r(require("./842156.js"));
var u = require("./901959.js");
var c = require("./709089.js");
var d = r(require("./855118.js"));
var p = require("./708761.js");
var f = require("./787742.js");
var _ = require("./918602.js");
var g = r(require("./556869.js"));