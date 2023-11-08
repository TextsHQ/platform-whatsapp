var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadProgressiveJpegThumbnail = function () {
  return p.apply(this, arguments);
};
var a = i(require("../vendor/348926.js"));
var o = require("./898817.js");
var s = i(require("./670983.js"));
var l = require("./941555.js");
var u = i(require("./756680.js"));
var c = require("./708761.js");
var d = i(require("./281007.js"));
function p() {
  return (p = (0, a.default)(function* (e) {
    const {
      msg: t,
      chat: n,
      isPreload: i,
      signal: a
    } = e;
    __LOG__(2)`media.downloadProgressiveJpegThumbnail: start`;
    try {
      const e = (0, s.default)(t.scanLengths, "msg.scanLengths");
      const o = (0, s.default)(t.scansSidecar, "msg.scansSidecar");
      const d = (0, s.default)(t.mediaObject, "msg.mediaObject");
      const p = (0, s.default)(d.filehash, "mediaObject.filehash");
      const {
        encFilehash: f,
        directPath: _
      } = t;
      const g = yield l.downloadManager.downloadAndMaybeDecrypt({
        directPath: _,
        encFilehash: f,
        filehash: p,
        mediaKey: t.mediaKey,
        mediaKeyTimestamp: t.mediaKeyTimestamp,
        type: c.MEDIA_TYPES.IMAGE,
        signal: a || new r().signal,
        userDownloadAttemptCount: 0,
        progressiveJpegOpts: {
          mimetype: "image/jpeg",
          scansSidecar: o,
          scanLengths: e,
          scanCount: 1
        },
        isPreload: i,
        chatWid: n == null ? undefined : n.id
      });
      d.consolidate({
        fullPreviewData: yield u.default.createFromData(g, "image/jpeg")
      });
      __LOG__(2)`media.downloadProgressiveJpegThumbnail: success`;
    } catch (e) {
      if (e.name === o.ABORT_ERROR) {
        return void __LOG__(2)`media.downloadProgressiveJpegThumbnail aborted`;
      }
      __LOG__(3, undefined, undefined, true)`media.downloadProgressiveJpegThumbnail: error\n${(0, d.default)(e)}`;
      SEND_LOGS("download-pjpeg-thumbnail-failed");
    }
  })).apply(this, arguments);
}