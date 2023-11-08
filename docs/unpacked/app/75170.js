var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./285867.js");
var o = require("./301055.js");
var s = require("./31549.js");
var l = require("./815612.js");
var u = require("./691015.js");
var c = require("./786702.js");
var d = require("./288057.js");
var p = require("./245598.js");
const f = 10;
function _() {
  return (_ = (0, i.default)(function* (e) {
    let {
      mediaKeys: t,
      ciphertextHmac: n,
      expectedPlaintextHash: r,
      debugString: _
    } = e;
    yield Promise.resolve();
    __LOG__(2)`decryptMedia: [${_}] start`;
    if (n.byteLength < f) {
      throw new d.MediaDecryptionError(`ciphertext too short: ${n.byteLength}`);
    }
    const {
      iv: g,
      encKey: m,
      macKey: h
    } = t;
    const y = (0, u.castTypedArrays)(Uint8Array, n);
    try {
      return yield (0, o.hmacSha256)(h, (0, c.concatTypedArrays)(Uint8Array, [new Uint8Array(g), (0, p.isPerformanceExperimentEnabled)() ? y.subarray(0, -10) : y.slice(0, -10)]), f).then(e => {
        const t = y.buffer.slice(-10);
        if (!(0, s.arrayBuffersEqual)(e, t)) {
          throw new d.MediaDecryptionError("decryptMedia: hmac mismatch");
        }
        return (0, a.aesCbcDecrypt)(m, g, y.subarray(0, -10));
      }).then(function () {
        var e = (0, i.default)(function* (e) {
          if (r == null) {
            return e;
          }
          if ((yield (0, l.calculateFilehash)(e)) !== r) {
            throw new d.MediaDecryptionError("decryptMedia: plaintext hash mismatch");
          }
          __LOG__(2)`decryptMedia: [${_}] success`;
          return e;
        });
        return function () {
          return e.apply(this, arguments);
        };
      }());
    } catch (e) {
      __LOG__(3)`decryptMedia: [${_}] error`;
      if (e instanceof d.MediaDecryptionError) {
        throw e;
      }
      throw new d.MediaDecryptionError(`decryption error: ${String(e)}; stack: ${e.stack}`);
    }
  })).apply(this, arguments);
}