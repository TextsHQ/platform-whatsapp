var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return h.apply(this, arguments);
};
var a = i(require("../vendor/348926.js"));
var o = require("./898817.js");
var s = require("./417405.js");
var l = i(require("./670983.js"));
var u = require("./941555.js");
var c = require("./163755.js");
var d = require("./86595.js");
var p = i(require("./104120.js"));
var f = i(require("./756680.js"));
var _ = require("./708761.js");
var g = require("./373070.js");
var m = i(require("./281007.js"));
function h() {
  return (h = (0, a.default)(function* (e) {
    const {
      msg: t,
      chat: n,
      isPreload: i,
      signal: a
    } = e;
    const {
      thumbnailSha256: h,
      thumbnailEncSha256: y,
      thumbnailDirectPath: E,
      mediaKey: S,
      mediaKeyTimestamp: v
    } = t;
    if (E == null || h == null) {
      return;
    }
    if ((0, d.isMediaCryptoExpectedForMsg)(t) && (y == null || S == null || v == null)) {
      return;
    }
    if (!(t.type !== g.MSG_TYPE.DOCUMENT && t.type !== g.MSG_TYPE.INTERACTIVE || (0, _.getMsgMediaType)(t) !== _.MEDIA_TYPES.DOCUMENT || t.thumbnailHeight != null && t.thumbnailWidth != null)) {
      return;
    }
    const T = (0, c.getAsUrl)(t.unsafe());
    if (!T || T.thumbnailHeight != null && T.thumbnailWidth != null) {
      __LOG__(2)`media.downloadMmsThumbnail: start`;
      try {
        const e = yield u.downloadManager.downloadAndMaybeDecrypt({
          directPath: E,
          encFilehash: y,
          filehash: h,
          mediaKey: S,
          mediaKeyTimestamp: v,
          type: (0, p.default)(t),
          signal: a || new r().signal,
          userDownloadAttemptCount: 0,
          isPreload: i,
          chatWid: n == null ? undefined : n.id
        });
        if (T) {
          T.thumbnailHQ = (0, s.encodeB64)(e);
        } else {
          const n = (0, l.default)(t.mediaObject, "mediaObject cannot be null for thumbnail download");
          const r = {
            fullPreviewData: yield f.default.createFromData(e, "image/jpeg")
          };
          if (t.type === g.MSG_TYPE.DOCUMENT) {
            r.fullPreviewSize = {
              height: (0, l.default)(t.thumbnailHeight, "msg.thumbnailHeight"),
              width: (0, l.default)(t.thumbnailWidth, "msg.thumbnailWidth")
            };
          }
          n.consolidate(r);
        }
        __LOG__(2)`media.downloadMmsThumbnail: success`;
      } catch (e) {
        if (e.name === o.ABORT_ERROR) {
          return void __LOG__(2)`media.downloadMmsThumbnail aborted`;
        }
        __LOG__(3, true)`media.downloadMmsThumbnail: error\n${(0, m.default)(e)}`;
      }
    }
  })).apply(this, arguments);
}