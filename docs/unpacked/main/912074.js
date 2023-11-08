var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HmacValidationError = exports.HMAC_LENGTH = undefined;
exports.computeMediaKeys = function (e, t) {
  const n = (0, p.getMediaHkdfInfo)(t);
  return v(e, n);
};
exports.computeMediaKeysForPreview = function (e) {
  const t = (0, p.getPreviewMediaHkdfInfo)();
  return v(e, t);
};
exports.convertServerMediaTypeToPreviewMediaType = function (e) {
  switch (e) {
    case "image":
    case "video":
      return e;
    default:
      throw (0, d.default)(`Unsupported PreviewMediaType: ${e}`);
  }
};
exports.downloadAndDecrypt = function () {
  return S.apply(this, arguments);
};
exports.encryptAndHmac = function () {
  return y.apply(this, arguments);
};
exports.hmacAndDecrypt = C;
var r = a(require("../vendor/311504.js"));
var o = require("../app/417405.js");
var l = require("../app/904704.js");
var i = require("../app/285867.js");
var u = require("../app/562075.js");
var s = require("../app/301055.js");
var c = require("../app/477689.js");
var d = a(require("../app/415227.js"));
var f = require("./74793.js");
var p = require("./772671.js");
var m = require("./839595.js");
var h = require("../app/489783.js");
var g = require("../app/947339.js");
const E = (0, c.customError)("HmacValidationError", false);
function v(e, t) {
  return (0, u.extractAndExpand)(new Uint8Array(e), t, 112).then(e => ({
    iv: new Uint8Array(e, 0, 16),
    cipherKey: new Uint8Array(e, 16, 32),
    hmacKey: new Uint8Array(e, 48, 32),
    refKey: new Uint8Array(e, 80, 32)
  }));
}
exports.HmacValidationError = E;
exports.HMAC_LENGTH = 10;
const _ = 65536;
function y() {
  return (y = (0, r.default)(function* (e, t, n, a, r) {
    const o = new l.Binary();
    o.ensureCapacity(16 + a.size + 16 + 10);
    o.writeByteArray(t);
    const u = new i.AesCbcStream(o, "encrypt", e, t);
    let c = 0;
    let d = c + _;
    for (; d < a.size;) {
      const e = a.slice(c, d);
      const t = yield (0, m.blobToArrayBuffer)(e);
      yield u.append(new Uint8Array(t));
      c = d;
      d += _;
    }
    const p = yield (0, m.blobToArrayBuffer)(a.slice(c));
    yield u.finalize(new Uint8Array(p));
    const h = o.peek(e => e.readByteArray());
    const g = yield (0, s.encodeKeySha256)(n);
    const E = yield (0, s.sign)(g, h);
    o.writeByteArray(new Uint8Array(E, 0, 10));
    const v = o.readByteArray();
    const y = v.subarray(16);
    const [C, b] = yield Promise.all([self.crypto.subtle.digest("SHA-256", y), (0, f.shouldHaveStreamingSidecar)(r) ? (0, f.calculateStreamingSidecar)(g, v) : undefined]);
    return {
      ciphertext: y,
      ciphertextHash: C,
      sidecar: b
    };
  })).apply(this, arguments);
}
function C() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, r.default)(function* (e, t, n, a, r) {
    if (!(r.length >= 10 && r.length <= 32)) {
      throw new E(`Bad hmac size ${r.length}`);
    }
    const u = l.Binary.build(t, n).readByteArray();
    if (!M((yield (0, s.hmacSha256)(a, u).then(e => new Uint8Array(e))).slice(0, r.length), r)) {
      throw new E("hmacAndDecrypt hmac mismatch");
    }
    const c = yield (0, i.aesCbcDecrypt)(e, t, n);
    const d = yield self.crypto.subtle.digest("SHA-256", c);
    return {
      plaintextHash: (0, o.encodeB64UrlSafe)(new Uint8Array(d)),
      plaintext: c
    };
  })).apply(this, arguments);
}
function M(e, t) {
  if (e.length !== t.length) {
    return false;
  }
  let n = 1;
  const a = e.length;
  for (let r = 0; r < a; r++) {
    n &= e[r] === t[r] ? 1 : 0;
  }
  return n !== 0;
}
function S() {
  return (S = (0, r.default)(function* (e, t, n, a, r, l, i) {
    const u = (0, g.startMetric)(h.PRE_METRIC.DOWNLOAD_AND_DECRYPT);
    let s;
    try {
      u.addPoint("download_start");
      s = yield fetch(e);
      u.addPoint("download_end");
    } catch (e) {
      u.addPoint("download_end");
      u.endFail("download_error");
      throw (0, d.default)("download_error");
    }
    if (s.status !== 200) {
      u.endFail(`http_status_${s.status}`);
      throw (0, d.default)(`http_status=${s.status}`);
    }
    u.endSuccess();
    const c = yield s.arrayBuffer();
    if (c.byteLength < r + l) {
      u.endFail("bad_ciphertext_size");
      throw (0, d.default)("bad_ciphertext_size");
    }
    const f = c.byteLength - l;
    const p = new Uint8Array(c, f);
    const m = p.slice(0, l);
    const E = new Uint8Array(c, 0, f);
    const {
      plaintext: v,
      plaintextHash: _
    } = yield C(n, t, E, a, p);
    i(new Uint8Array(v));
    const y = new Uint8Array((0, o.decodeB64UrlSafe)(_));
    return Promise.resolve({
      tail: m,
      plaintextHash: y,
      hmac: p
    });
  })).apply(this, arguments);
}