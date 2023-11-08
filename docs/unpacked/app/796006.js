var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeBroadcastEphemeralSetting = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./904704.js");
var s = require("./632157.js");
var l = require("./199931.js");
var u = require("./394629.js");
var c = r(require("./556869.js"));
const d = new Uint8Array(32);
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = yield self.crypto.subtle.importKey("raw", e, "HKDF", false, ["deriveKey"]);
    const r = yield self.crypto.subtle.deriveKey({
      name: "HKDF",
      hash: "SHA-256",
      salt: d,
      info: t
    }, n, {
      name: "HMAC",
      hash: "SHA-256"
    }, true, ["verify"]);
    return self.crypto.subtle.exportKey("raw", r);
  })).apply(this, arguments);
}
function _() {
  return g.apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t, n) {
    const r = e.slice(0, 12);
    const i = e.slice(12, 44);
    const a = yield self.crypto.subtle.importKey("raw", i, "AES-GCM", false, ["decrypt"]);
    return self.crypto.subtle.decrypt({
      name: "AES-GCM",
      iv: new Uint8Array(r),
      additionalData: n
    }, a, t);
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e, t, n, r, i) {
    const d = e.toString({
      legacy: true
    });
    const f = t.toString({
      legacy: true
    });
    const g = n.toString({
      legacy: true
    });
    const m = o.Binary.build(`Ephemeral ${f} ${d}`).readByteArray();
    const h = new Uint8Array(i);
    const y = (0, a.decodeB64)(r);
    const E = o.Binary.build(g).readBuffer();
    const S = yield p(h, m);
    const v = yield _(S, y, E);
    const {
      duration: T,
      timestamp: M
    } = (0, u.decodeProtobuf)(l.EphemeralSettingSpec, v);
    if (T == null || M == null) {
      throw (0, c.default)("ephSetting decoded into malformed proto");
    }
    return {
      ephemeralDuration: T,
      ephemeralSettingTimestamp: (0, s.castLongIntToUnixTime)(M)
    };
  })).apply(this, arguments);
}