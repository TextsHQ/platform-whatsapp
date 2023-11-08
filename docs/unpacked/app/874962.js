var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageStreamer = exports.EOI_TAG = undefined;
exports.getProgressiveMediaCacheKey = T;
var i = r(require("../vendor/348926.js"));
var a = require("./713713.js");
var o = require("./145335.js");
var s = require("./459617.js");
var l = require("./54518.js");
var u = require("./285867.js");
var c = require("./301055.js");
var d = require("./31549.js");
var p = require("./477689.js");
var f = r(require("./670983.js"));
var _ = require("./652204.js");
var g = require("./786702.js");
var m = require("./196127.js");
class h extends (0, p.customError)("ChunkValidationError") {
  constructor(e) {
    super(`Chunk ${e} does not match sidecar`);
  }
}
const y = 16;
const E = new Uint8Array([2, 2]);
const S = new Uint8Array([255, 217]);
exports.EOI_TAG = S;
function v() {
  return (v = (0, i.default)(function* (e, t) {
    const {
      encKey: n
    } = t;
    return (yield (0, u.aesCbcEncrypt)(n, E, new Uint8Array(e.slice(-16)))).slice(-16);
  })).apply(this, arguments);
}
function T(e, t) {
  return `${e}-progressive-${t}`;
}
exports.ImageStreamer = class {
  constructor(e) {
    var t;
    this._alignedScanLengths = [];
    this._increasingScanLengths = [];
    this._lastDecryptedChunk = 0;
    this._promiseQueue = new _.PromiseQueue();
    this._downloadedBytes = new ArrayBuffer(0);
    const {
      cryptoKeys: n,
      scanLengths: r,
      scansSidecar: i,
      filehash: a,
      mimetype: o,
      debugString: s,
      onProgressiveUpdate: l
    } = e;
    this._cryptoKeys = n;
    this._scanLengths = r;
    this._scansSideCar = i;
    this._filehash = a;
    this._mimetype = o;
    this._nextChunkIV = (t = this._cryptoKeys) === null || t === undefined ? undefined : t.iv;
    this._decryptedChunks = new Array(r.length);
    this._onProgressiveUpdate = l;
    this._debugString = s;
  }
  setCryptoKeys(e) {
    this._cryptoKeys = e;
    this._nextChunkIV = e.iv;
  }
  _validateSidecar(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      if (t === 0) {
        r._nextChunkIV = n.iv;
      }
      const {
        macKey: i
      } = n;
      const a = r._scansSideCar.slice(t * 10, t * 10 + 10);
      const o = (0, f.default)(r._nextChunkIV, "_this._nextChunkIV");
      r._nextChunkIV = e.slice(-16);
      const s = (0, g.concatTypedArrays)(Uint8Array, [new Uint8Array(o), new Uint8Array(e)]);
      const l = yield (0, c.hmacSha256)(i, s, 10);
      if (!(0, d.arrayBuffersEqual)(l, a)) {
        throw new h(t);
      }
    })();
  }
  _cleanupCipherTextAndIV(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      let i = e;
      const a = i.byteLength % y == 0;
      let o;
      if (t === 0) {
        o = n.iv;
      } else {
        const e = r._increasingScanLengths[t - 1];
        o = r._downloadedBytes.slice(e - y, e);
      }
      if (!a) {
        i = i.slice(0, i.byteLength - 10);
      }
      if (a) {
        const e = yield function () {
          return v.apply(this, arguments);
        }(i, n);
        return {
          cipherText: (0, g.concatTypedArrays)(Uint8Array, [new Uint8Array(i), new Uint8Array(e)]),
          iv: o
        };
      }
      return {
        cipherText: i,
        iv: o
      };
    })();
  }
  _getLastFullyLoadedChunkIndex(e) {
    let t = 0;
    for (let n = 0; n < this._alignedScanLengths.length; n++) {
      t += this._alignedScanLengths[n];
      if (e < t) {
        return n;
      }
    }
    return this._alignedScanLengths.length;
  }
  _handleChunk(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      yield r._validateSidecar(e, t, n);
      const {
        cipherText: i,
        iv: a
      } = yield r._cleanupCipherTextAndIV(e, t, n);
      const o = yield (0, u.aesCbcDecrypt)(n.encKey, a, i);
      const s = yield (0, l.removeEncryptedPadding)(o, E.buffer);
      __LOG__(2)`ImageStreamer: [${r._debugString}] Successfully decrypted chunk ${t + 1} of ${r._scanLengths.length} total`;
      return s;
    })();
  }
  _generateBlobFromFullyLoadedChunks(e) {
    var t = this;
    return (0, i.default)(function* () {
      var n;
      const r = yield Promise.all(t._decryptedChunks.slice(0, e));
      const i = t._scanLengths.slice(0, e).reduce((e, t) => e + t, 0);
      const a = (0, g.concatTypedArrays)(Uint8Array, r.map(e => new Uint8Array(e))).slice(0, i);
      const o = (0, d.arrayBuffersEqual)(S.buffer, a.slice(-S.length).buffer) ? a : (0, g.concatTypedArrays)(Uint8Array, [a, S]);
      const s = [o];
      const l = t._mimetype ? new Blob(s, {
        type: t._mimetype
      }) : new Blob(s);
      const u = T(t._filehash, e);
      m.InMemoryMediaBlobCache.put(u, l);
      __LOG__(2)`ImageStreamer: [${t._debugString}] Generated progressive image using ${e} chunks of ${t._scanLengths.length} total`;
      if (!((n = t._onProgressiveUpdate) === null || n === undefined)) {
        n.call(t, e);
      }
      t._lastDecryptedChunk = e;
      return o.buffer;
    })();
  }
  _decryptFullyLoadedChunks(e, t, n) {
    var r = this;
    return (0, i.default)(function* () {
      for (let i = 0; i < t; i++) {
        if (!r._decryptedChunks[i]) {
          const t = i === 0 ? 0 : r._increasingScanLengths[i - 1];
          const a = e.slice(t, t + r._alignedScanLengths[i]);
          yield Promise.all(r._decryptedChunks);
          if (!r._decryptedChunks[i]) {
            r._decryptedChunks[i] = r._handleChunk(a, i, n);
          }
        }
      }
    })();
  }
  handleProgress(e, t) {
    var n = this;
    return this._promiseQueue.enqueue((0, i.default)(function* () {
      if (!n._alignedScanLengths.length) {
        n._alignedScanLengths = (0, a.alignChunkLengthsToMultipleOfAesBlockSize)(n._scanLengths, e);
        for (let e = 0; e < n._alignedScanLengths.length; e++) {
          const t = n._alignedScanLengths[e];
          const r = e === 0 ? t : n._increasingScanLengths[e - 1] + t;
          n._increasingScanLengths.push(r);
        }
      }
      const r = typeof t == "string" ? t.length : t.byteLength + n._downloadedBytes.byteLength;
      const i = n._getLastFullyLoadedChunkIndex(r);
      const l = n._cryptoKeys;
      if (i <= n._lastDecryptedChunk || l == null) {
        __LOG__(2)`ImageStreamer:handleProgress not ready to decrypt yet, appending and exiting`;
        n._downloadedBytes = (0, o.concatArrayBuffers)(n._downloadedBytes, typeof t == "string" ? yield (0, s.largeStringToArrayBuffer)(t.slice(n._downloadedBytes.byteLength)) : t);
        return null;
      }
      try {
        const e = typeof t == "string" ? yield (0, s.largeStringToArrayBuffer)(t.slice(n._downloadedBytes.byteLength)) : t;
        n._downloadedBytes = (0, o.concatArrayBuffers)(n._downloadedBytes, e);
        yield n._decryptFullyLoadedChunks(n._downloadedBytes, i, l);
        return yield n._generateBlobFromFullyLoadedChunks(i);
      } catch (e) {
        __LOG__(3)`ImageStreamer:handleProgress error: ${e}`;
        const t = `${e.message}, [${n._debugString}]scanLengths length: ${n._scanLengths.length}, scansSidecar byteLength: ${n._scansSideCar.byteLength}.`;
        if (e instanceof h) {
          __LOG__(2)`ImageStreamer:chunk validation error: ${t}`;
          __LOG__(4, undefined, new Error(), true, ["non-sad"])`ImageStreamer:chunk validation error`;
          SEND_LOGS("ImageStreamer:chunk validation error", 0.001, "non-sad");
        } else {
          __LOG__(2)`ImageStreamer:handleProgress error: ${t}`;
          __LOG__(4, undefined, new Error(), true)`ImageStreamer:handleProgress error`;
          SEND_LOGS("ImageStreamer:handleProgress error");
        }
      }
    }));
  }
};