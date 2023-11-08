var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptAndMac = function (e, t, n) {
  return (0, s.aesCbcEncrypt)(e, new Uint8Array(n)).then(e => (0, l.hmacSha256)(t, e).then(t => o.Binary.build(t, e).readBuffer()));
};
exports.macAndDecrypt = function (e, t, n) {
  return Promise.resolve(new Uint8Array(n)).then(n => {
    const r = (0, a.encodeB64)(n.subarray(0, 32));
    const i = n.subarray(32);
    return (0, l.hmacSha256)(t, i).then(t => {
      const n = (0, a.encodeB64)(t);
      if (r !== n) {
        __LOG__(3)`crypto:macAndDecrypt HMAC don't match ${r} vs. ${n}`;
        throw (0, u.default)("macAndDecrypt HMAC mismatch");
      }
      return (0, s.aesCbcDecryptSplit)(e, i);
    });
  });
};
exports.removeEncryptedPadding = function (e, t) {
  const n = e.slice(-t.byteLength);
  if ((0, i.arrayBuffersEqualUNSAFE)(n, t)) {
    return e.slice(0, e.byteLength - t.byteLength);
  }
  return e;
};
var i = require("./459617.js");
var a = require("./417405.js");
var o = require("./904704.js");
var s = require("./285867.js");
var l = require("./301055.js");
var u = r(require("./415227.js"));