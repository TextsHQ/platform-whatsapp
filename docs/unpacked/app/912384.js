var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENC_IV_SIZE = undefined;
exports.decryptMediaRetryNotification = function () {
  return f.apply(this, arguments);
};
exports.encryptServerErrorReceipt = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./904704.js");
var o = require("./122048.js");
var s = require("./562075.js");
var l = require("./229479.js");
var u = require("./394629.js");
var c = require("./385914.js");
function d(e) {
  __LOG__(2)`encodeServerErrorReceipt`;
  const t = new a.Binary();
  (0, c.encodeProtobuf)(l.ServerErrorReceiptSpec, e, t);
  return t.readByteArray();
}
function p() {
  return (p = (0, i.default)(function* (e, t, n) {
    const r = yield _(e);
    const i = (n == null ? undefined : n.slice()) || g();
    const a = d({
      stanzaId: t
    });
    return {
      ciphertext: yield (0, o.gcmEncrypt)(r, i, a, t),
      iv: i
    };
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t, n, r) {
    const i = yield _(e);
    const a = yield (0, o.gcmDecrypt)(i, n, r, t);
    return (0, u.decodeProtobuf)(l.MediaRetryNotificationSpec, a);
  })).apply(this, arguments);
}
exports.ENC_IV_SIZE = 12;
function _(e) {
  return (0, s.extractAndExpand)(e, "WhatsApp Media Retry Notification", 32);
}
function g() {
  const e = new Uint8Array(12);
  self.crypto.getRandomValues(e);
  return e;
}