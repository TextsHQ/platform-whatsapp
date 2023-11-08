Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoiseHandshake = undefined;
var r = require("./904704.js");
var i = require("./562075.js");
var a = require("./517301.js");
var o = require("./34113.js");
var s = require("./865190.js");
var l = require("./950376.js");
const u = Promise.reject("UNINITIALIZED HANDSHAKE");
const c = new Uint8Array(0);
u.catch(() => {});
function d(e) {
  const t = new ArrayBuffer(12);
  new DataView(t).setUint32(8, e);
  return new Uint8Array(t);
}
function p(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ["encrypt", "decrypt"];
  return self.crypto.subtle.importKey("raw", new Uint8Array(e), "AES-GCM", false, t);
}
function f(e, t) {
  return (0, i.extractWithSaltAndExpand)(t, new Uint8Array(e), "", 64).then(e => [e.slice(0, 32), e.slice(32)]);
}
function _(e) {
  e.catch(() => {});
}
exports.NoiseHandshake = class {
  constructor(e) {
    this._hash = u;
    this._salt = u;
    this._cryptoKey = u;
    this._counter = 0;
    this._socket = e;
    this._rejectOnClose = new l.Resolvable();
    e.onClose = () => {
      this._rejectOnClose.reject(new o.Disconnected("NoiseHandshake: SocketClosed"));
    };
    _(this._rejectOnClose.promise);
  }
  start(e, t) {
    const n = r.Binary.build(e).readBuffer();
    const i = n.byteLength === 32 ? Promise.resolve(n) : (0, a.sha256)(n);
    this._hash = i;
    this._salt = i;
    this._cryptoKey = i.then(p);
    this.authenticate(t);
  }
  sendAndReceive(e) {
    const t = this._socket;
    const n = new Promise(n => {
      t.onFrame = e => {
        t.onFrame = null;
        n(e);
      };
      t.sendFrame(e);
    });
    return this._orRejectOnClose(n);
  }
  send(e) {
    this._socket.sendFrame(e);
  }
  authenticate(e) {
    this._hash = Promise.all([this._hash, e]).then(e => {
      let [t, n] = e;
      const i = r.Binary.build(t, n).readByteArray();
      return (0, a.sha256)(i);
    });
  }
  encrypt(e) {
    const t = this._counter++;
    const n = Promise.all([this._cryptoKey, this._hash, e]).then(e => {
      let [n, r, i] = e;
      return function (e, t, n, r) {
        return self.crypto.subtle.encrypt({
          name: "AES-GCM",
          iv: d(t),
          additionalData: n ? new Uint8Array(n) : c
        }, e, r);
      }(n, t, r, i);
    });
    this.authenticate(n);
    return this._orRejectOnClose(n);
  }
  decrypt(e) {
    const t = this._counter++;
    const n = Promise.all([this._cryptoKey, this._hash]).then(n => {
      let [r, i] = n;
      return function (e, t, n, r) {
        return self.crypto.subtle.decrypt({
          name: "AES-GCM",
          iv: d(t),
          additionalData: n ? new Uint8Array(n) : c
        }, e, r);
      }(r, t, i, e);
    });
    this.authenticate(e);
    return this._orRejectOnClose(n);
  }
  finish() {
    const e = this._salt.then(e => f(e, new Uint8Array(0))).then(e => {
      let [t, n] = e;
      return Promise.all([p(t, ["encrypt"]), p(n, ["decrypt"])]);
    }).then(e => {
      let [t, n] = e;
      return new s.NoiseSocket(this._socket, t, n);
    });
    return this._orRejectOnClose(e);
  }
  mixIntoKey(e) {
    this._counter = 0;
    const t = Promise.all([this._salt, e]).then(e => {
      let [t, n] = e;
      return f(t, new Uint8Array(n));
    });
    this._salt = t.then(e => e[0]);
    this._cryptoKey = t.then(e => p(e[1]));
    _(this._salt);
    _(this._cryptoKey);
  }
  _orRejectOnClose(e) {
    return Promise.race([e, this._rejectOnClose.promise]).then(e => this._rejectOnClose.resolveWasCalled() ? this._rejectOnClose.promise : e);
  }
};