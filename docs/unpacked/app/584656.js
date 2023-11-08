var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    mediaKey: t,
    plaintext: n,
    type: r
  } = e;
  return new Promise((e, i) => {
    t.slice(0, 10);
    __LOG__(2)`encryptMedia: start`;
    if (!r) {
      throw new _.MediaEncryptionError("encryptMedia: missing \"type\"");
    }
    if (!t) {
      throw new _.MediaEncryptionError("encryptMedia: missing \"mediaKey\"");
    }
    (0, f.default)(r, t).then(e => (0, m.isPerformanceExperimentEnabled)() ? function () {
      return v.apply(this, arguments);
    }(n, r, e) : function () {
      return y.apply(this, arguments);
    }(n, r, e)).then(t => {
      __LOG__(2)`encryptMedia: success`;
      e(t);
    }).catch(e => {
      __LOG__(3)`encryptMedia: error`;
      if (e instanceof _.MediaEncryptionError) {
        throw e;
      }
      throw new _.MediaEncryptionError(`encryption error: ${String(e)}; stack: ${e.stack}`);
    }).catch(i);
  });
};
var i = r(require("../vendor/348926.js"));
var a = require("./145335.js");
var o = require("./285867.js");
var s = require("./301055.js");
var l = require("./815612.js");
var u = require("./423660.js");
var c = require("./786702.js");
var d = r(require("./794219.js"));
var p = require("./186884.js");
var f = r(require("./904219.js"));
var _ = require("./288057.js");
var g = require("./708761.js");
var m = require("./245598.js");
var h = require("./724743.js");
function y() {
  return (y = (0, i.default)(function* (e, t, n) {
    let {
      iv: r,
      encKey: i,
      macKey: c
    } = n;
    const f = yield (0, o.aesCbcEncrypt)(i, e, r);
    const _ = f.slice(r.byteLength);
    const m = yield (0, s.hmacSha256)(c, f, 10);
    let y = Promise.resolve();
    if (t === g.MEDIA_TYPES.VIDEO || t === g.MEDIA_TYPES.AUDIO) {
      const e = (0, a.concatArrayBuffers)(f, m);
      y = (0, p.calculateStreamingSidecar)(e, c);
    }
    let E = Promise.resolve();
    if (t === g.MEDIA_TYPES.STICKER) {
      const {
        firstFrameLength: t
      } = (0, h.parseWebp)(e);
      if (t != null) {
        const e = (0, a.concatArrayBuffers)(f, m);
        E = (0, d.default)(t, e, c);
      }
    }
    const S = (0, a.concatArrayBuffers)(_, m);
    return (0, u.promiseProps)({
      ciphertextHmac: S,
      hash: (0, l.calculateFilehash)(S),
      sidecar: y,
      firstFrameSidecar: E
    });
  })).apply(this, arguments);
}
function E(e) {
  let {
    ivCiphertext: t,
    signature: n,
    macKey: r
  } = e;
  const i = (0, a.concatArrayBuffers)(t, n);
  return {
    sidecar: (0, p.calculateStreamingSidecar)(i, r),
    firstFrameSidecar: Promise.resolve()
  };
}
const S = new Map([[g.MEDIA_TYPES.VIDEO, E], [g.MEDIA_TYPES.AUDIO, E], [g.MEDIA_TYPES.STICKER, function (e) {
  let {
    plaintext: t,
    ivCiphertext: n,
    signature: r,
    macKey: i
  } = e;
  const {
    firstFrameLength: o
  } = (0, h.parseWebp)(t);
  return {
    sidecar: Promise.resolve(),
    firstFrameSidecar: o != null ? (0, d.default)(o, (0, a.concatArrayBuffers)(n, r), i) : Promise.resolve()
  };
}]]);
function v() {
  return (v = (0, i.default)(function* (e, t, n) {
    var r;
    var i;
    let {
      iv: a,
      encKey: d,
      macKey: p
    } = n;
    const f = (0, m.shouldEncryptInChunks)(e.byteLength) ? yield (0, o.aesCbcEncryptWithChunking)(d, e, a) : yield (0, o.aesCbcEncrypt)(d, e, a);
    const _ = new Uint8Array(f).subarray(a.byteLength);
    const g = yield (0, s.hmacSha256)(p, f, 10);
    const {
      sidecar: h = Promise.resolve(),
      firstFrameSidecar: y = Promise.resolve()
    } = (r = (i = S.get(t)) === null || i === undefined ? undefined : i({
      plaintext: e,
      ivCiphertext: f,
      signature: g,
      macKey: p
    })) !== null && r !== undefined ? r : {};
    const E = (0, c.concatTypedArrays)(Uint8Array, [_, new Uint8Array(g)]).buffer;
    return (0, u.promiseProps)({
      ciphertextHmac: E,
      hash: (0, l.calculateFilehash)(E),
      sidecar: h,
      firstFrameSidecar: y
    });
  })).apply(this, arguments);
}