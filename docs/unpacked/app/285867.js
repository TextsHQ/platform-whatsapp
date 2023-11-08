var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AesCbcStream = exports.AES_CBC_BLOCK_SIZE = undefined;
exports.aesCbcDecrypt = g;
exports.aesCbcDecryptSplit = function (e, t) {
  return Promise.resolve().then(() => {
    const n = t.slice(0, 16);
    const r = t.slice(16);
    return g(e, n, r);
  });
};
exports.aesCbcEncrypt = function (e, t, n) {
  return Promise.resolve().then(() => {
    const r = f(n);
    const i = d(r);
    return Promise.resolve(p(e)).then(e => self.crypto.subtle.encrypt(i, e, t)).then(e => (0, l.concatTypedArrays)(Uint8Array, [r, new Uint8Array(e)]).buffer);
  });
};
exports.aesCbcEncryptChunk = h;
exports.aesCbcEncryptWithChunking = function () {
  return m.apply(this, arguments);
};
exports.getIv = f;
exports.importRawKey = p;
var i = r(require("../vendor/311504.js"));
var a = require("./904704.js");
var o = r(require("./415227.js"));
var s = require("./691015.js");
var l = require("./786702.js");
const u = 16;
exports.AES_CBC_BLOCK_SIZE = u;
const c = 16777216;
function d(e) {
  return {
    name: "AES-CBC",
    iv: (0, s.castTypedArrays)(Uint8Array, e)
  };
}
function p(e) {
  return self.crypto.subtle.importKey("raw", (0, s.castTypedArrays)(Uint8Array, e), "AES-CBC", false, ["encrypt"]);
}
function f(e) {
  if (e) {
    return (0, s.castTypedArrays)(Uint8Array, e);
  }
  const t = new Uint8Array(16);
  self.crypto.getRandomValues(t);
  return t;
}
function _(e) {
  const t = e.byteLength;
  const n = u - t % u;
  if (Number.isNaN(n)) {
    return t;
  } else {
    return t + n;
  }
}
function g(e, t, n) {
  const r = d(t);
  return Promise.resolve(self.crypto.subtle.importKey("raw", (0, s.castTypedArrays)(Uint8Array, e), "AES-CBC", false, ["decrypt"])).then(e => self.crypto.subtle.decrypt(r, e, n));
}
function m() {
  return (m = (0, i.default)(function* (e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : c;
    if (r % u != 0) {
      throw (0, o.default)(`chunkSize must be a multiple of 16, ${r} received`);
    }
    const i = yield p(e);
    const a = new Uint8Array(t);
    const s = Math.ceil(a.byteLength / r);
    const l = f(n);
    const d = new Uint8Array(_(a) + l.byteLength);
    d.set(l);
    for (let e, t = 0, n = l; t < s; t++) {
      const o = t === s - 1;
      const u = t * r;
      e = a.subarray(u, u + r);
      const {
        encryptedChunk: c,
        nextIv: p
      } = yield h(o, e, n, i);
      d.set(c, l.byteLength + t * r);
      n = p;
    }
    return d.buffer;
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t, n, r) {
    const i = yield self.crypto.subtle.encrypt(d(n), r, t).then(t => e ? new Uint8Array(t) : new Uint8Array(t).subarray(0, -16));
    const a = i.slice(-16);
    return {
      encryptedChunk: i,
      nextIv: a
    };
  })).apply(this, arguments);
}
exports.AesCbcStream = class {
  constructor(e, t, n, r) {
    this._input = null;
    this._finished = false;
    this._output = e;
    this._type = t;
    this._rawKey = n;
    const i = {
      name: "AES-CBC",
      iv: r
    };
    this._promise = self.crypto.subtle.importKey("raw", n, "AES-CBC", false, [t]).then(e => ({
      algo: i,
      key: e
    }));
  }
  append(e) {
    let t;
    this._throwIfFinished("append");
    const n = this._input;
    if (n) {
      n.writeByteArray(e);
      if (n.size() > 1024) {
        const e = n.size() % u;
        t = n.readByteArray(n.size() - e);
        if (!n.size()) {
          this._input = null;
        }
      } else {
        t = null;
      }
    } else if (e.length > 1024) {
      const n = e.length % u;
      if (n) {
        this._input = new a.Binary(e);
        t = this._input.readByteArray(e.length - n);
      } else {
        t = e;
      }
    } else {
      this._input = new a.Binary(e);
      t = null;
    }
    const r = t;
    if (r) {
      this._promise = this._promise.then(e => {
        let {
          key: t,
          algo: n
        } = e;
        if (this._type === "encrypt") {
          return self.crypto.subtle.encrypt(n, t, r).then(e => {
            this._output.writeByteArray(new Uint8Array(e, 0, e.byteLength - u));
            return new Uint8Array(e, e.byteLength - 32, u);
          });
        }
        {
          const e = r.slice(-16);
          return self.crypto.subtle.decrypt(n, t, r).then(t => {
            this._output.writeBuffer(t);
            return e;
          });
        }
      }).then(e => {
        const t = {
          name: "AES-CBC",
          iv: e
        };
        return self.crypto.subtle.importKey("raw", this._rawKey, "AES-CBC", false, [this._type]).then(e => ({
          algo: t,
          key: e
        }));
      });
    }
    return this._promise.then(() => {});
  }
  finalize(e) {
    let t;
    this._throwIfFinished("finalize");
    if (this._input) {
      const n = this._input;
      if (e) {
        n.writeByteArray(e);
      }
      t = n.readByteArray();
      this._input = null;
    } else if (e) {
      t = e;
    }
    if (t) {
      const e = t;
      return this._promise.then(t => {
        let {
          algo: n,
          key: r
        } = t;
        if (this._type === "encrypt") {
          return self.crypto.subtle.encrypt(n, r, e);
        } else {
          return self.crypto.subtle.decrypt(n, r, e);
        }
      }).then(e => {
        this._output.writeBuffer(e);
      });
    }
    return this._promise.then(() => {});
  }
  _throwIfFinished(e) {
    if (this._finished) {
      throw (0, o.default)(`AesCbcStream.${e} called after finalize`);
    }
  }
};