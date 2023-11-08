var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StreamingEncryptor = undefined;
exports.createStreamingEncryptor = function () {
  return m.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/285867.js");
var l = require("../app/301055.js");
var i = require("../app/815612.js");
var u = require("./912074.js");
var s = require("../app/786702.js");
var c = a(require("../app/904219.js"));
var d = require("../app/708761.js");
var f = a(require("../app/556869.js"));
class p {
  constructor(e) {
    let {
      mediaKeys: t,
      encKey: n,
      onChunkEncrypted: a,
      onEncryptionCompleted: r
    } = e;
    this._encryptingQueue = Promise.resolve();
    this._keys = t;
    this._encKey = n;
    this._iv = (0, o.getIv)(this._keys.iv);
    this._encryptedData = [this._iv];
    this._bytesToEncrypt = new Uint8Array([]);
    this._handleChunkEncrypted = a;
    this._handleEncryptionCompleted = r;
    this._isEncryptionFinished = false;
  }
  getMediaKeys() {
    return this._keys;
  }
  encryptChunk(e, t) {
    var n = this;
    if (this._isEncryptionFinished) {
      throw (0, f.default)("Encryption was already finalized");
    }
    if (t) {
      this._isEncryptionFinished = true;
    }
    const a = this._getChunkFromNewData(e, t);
    if (a != null) {
      this._encryptingQueue = this._encryptingQueue.then((0, r.default)(function* () {
        var e;
        const r = yield (0, o.aesCbcEncryptChunk)(t, a, n._iv, n._encKey);
        if (!((e = n._handleChunkEncrypted) === null || e === undefined)) {
          e.call(n, r.encryptedChunk);
        }
        n._handleEncryptionResult(r, t);
      }));
    }
  }
  _handleEncryptionResult(e, t) {
    var n = this;
    return (0, r.default)(function* () {
      var a;
      n._encryptedData.push(e.encryptedChunk);
      n._iv = e.nextIv;
      if (!t) {
        return;
      }
      const r = (0, s.concatTypedArrays)(Uint8Array, n._encryptedData, u.HMAC_LENGTH);
      const o = n._encryptedData[0].byteLength;
      const c = r.byteLength - u.HMAC_LENGTH;
      const d = r.subarray(0, c);
      const f = yield (0, l.hmacSha256)(n._keys.macKey, d, u.HMAC_LENGTH);
      r.set(new Uint8Array(f), c);
      const p = r.subarray(o);
      const m = yield (0, i.calculateFilehash)(p);
      if (!((a = n._handleEncryptionCompleted) === null || a === undefined)) {
        a.call(n, f, m);
      }
    })();
  }
  _getChunkFromNewData(e, t) {
    this._bytesToEncrypt = (0, s.concatTypedArrays)(Uint8Array, [this._bytesToEncrypt, e]);
    if (this._bytesToEncrypt.length >= o.AES_CBC_BLOCK_SIZE || t) {
      const e = t ? this._bytesToEncrypt.length : Math.floor(this._bytesToEncrypt.length - this._bytesToEncrypt.length % o.AES_CBC_BLOCK_SIZE);
      const n = this._bytesToEncrypt.slice(0, e);
      n.subarray();
      const a = new Uint8Array(this._bytesToEncrypt.length - e);
      a.set(this._bytesToEncrypt.slice(e, this._bytesToEncrypt.length));
      this._bytesToEncrypt = a;
      return n;
    }
  }
}
function m() {
  return (m = (0, r.default)(function* (e) {
    const t = yield (0, c.default)(d.MEDIA_TYPES.PTT, e.mediaKey);
    const n = yield (0, o.importRawKey)(t.encKey);
    return new p({
      mediaKeys: t,
      encKey: n,
      onChunkEncrypted: e.onChunkEncrypted,
      onEncryptionCompleted: e.onEncryptionCompleted
    });
  })).apply(this, arguments);
}
exports.StreamingEncryptor = p;