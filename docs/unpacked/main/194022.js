var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUPPORTED_MIME_TYPE = undefined;
exports.downloadPaymentBackgroundImage = function () {
  return p.apply(this, arguments);
};
var o = r(require("../vendor/348926.js"));
var l = require("../app/898817.js");
var i = require("../app/417405.js");
var u = require("../app/941555.js");
var s = require("../app/708761.js");
var c = require("../app/533494.js");
var d = r(require("../app/281007.js"));
const f = "image/webp";
function p() {
  return (p = (0, o.default)(function* (e) {
    const {
      paymentBackground: t,
      isPreload: n,
      signal: r,
      chatWid: o
    } = e;
    const {
      mediaData: p,
      type: m,
      mimetype: h
    } = t;
    if (h !== f || m === c.PaymentBackground$Type.UNKNOWN) {
      __LOG__(2)`media.downloadAndGetPaymentBackgroundImage: mimetype or payment background type is not supported`;
      return null;
    }
    if (p == null) {
      __LOG__(4, undefined, new Error(), true)`media.downloadAndGetPaymentBackgroundImage: mediaData is null`;
      SEND_LOGS("media.downloadAndGetPaymentBackgroundImage: mediaData is null");
      return null;
    }
    const {
      fileEncSha256: g,
      fileSha256: E,
      mediaKey: v
    } = p;
    if (g == null || E == null || v == null) {
      return null;
    }
    __LOG__(2)`media.downloadAndGetPaymentBackgroundImage: start`;
    try {
      const e = yield u.downloadManager.downloadAndMaybeDecrypt({
        directPath: p.directPath,
        encFilehash: (0, i.encodeB64)(g),
        filehash: (0, i.encodeB64)(E),
        mediaKey: (0, i.encodeB64)(v),
        mediaKeyTimestamp: parseInt(p.mediaKeyTimestamp, 10),
        type: s.MEDIA_TYPES.PAYMENT_BG_IMAGE,
        signal: r || new a().signal,
        userDownloadAttemptCount: 0,
        isPreload: n,
        chatWid: o
      });
      __LOG__(2)`media.downloadAndGetPaymentBackgroundImage: success`;
      return e;
    } catch (e) {
      if (e.name === l.ABORT_ERROR) {
        return void __LOG__(2)`media.downloadAndGetPaymentBackgroundImage aborted`;
      }
      __LOG__(3, true)`media.downloadAndGetPaymentBackgroundImage: error\n${(0, d.default)(e)}`;
    }
  })).apply(this, arguments);
}
exports.SUPPORTED_MIME_TYPE = f;