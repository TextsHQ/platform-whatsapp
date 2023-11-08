var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoiseSocket = undefined;
var i = r(require("../vendor/311504.js"));
var a = require("./652204.js");
const o = Promise.reject("UNINITIALIZED HANDSHAKE");
const s = new Uint8Array(0);
o.catch(() => {});
function l(e) {
  const t = new ArrayBuffer(12);
  new DataView(t).setUint32(8, e);
  return new Uint8Array(t);
}
exports.NoiseSocket = class {
  constructor(e, t, n) {
    this._incoming = [];
    this._readQueue = new a.PromiseQueue();
    this._sendQueue = new a.PromiseQueue();
    this._readCounter = 0;
    this._writeCounter = 0;
    this._draining = false;
    this._sendCiphertextFrame = e => {
      if (this._socket.closed) {
        __LOG__(2)`NoiseSocket socket closed while encrypting frame`;
      } else {
        this._socket.sendFrame(e);
      }
    };
    this._handleCiphertext = e => {
      const t = this._readCounter++;
      this._readQueue.enqueueHandlers(function (e, t, n, r) {
        return self.crypto.subtle.decrypt({
          name: "AES-GCM",
          iv: l(t),
          additionalData: n ? new Uint8Array(n) : s
        }, e, r);
      }(this._readKey, t, undefined, e), this._handlePlaintext);
    };
    this._handleOnClose = () => {
      this._draining = true;
      this._readQueue.wait().then(() => {
        this._draining = false;
        const e = this._onClose;
        if (e) {
          e();
        }
      });
    };
    this._handlePlaintext = e => {
      if (this._onFrame) {
        this._onFrame(e);
      } else {
        this._incoming.push(e);
      }
    };
    this._socket = e;
    this._writeKey = t;
    this._readKey = n;
    e.onFrame = this._handleCiphertext;
    this._socket.onClose = this._handleOnClose;
    e.convertBufferedToFrames();
  }
  sendFrameAsync(e) {
    var t = this;
    return (0, i.default)(function* () {
      return yield t.sendFrame(e);
    })();
  }
  sendFrame(e) {
    if (this._draining) {
      return Promise.resolve();
    }
    this._socket.throwIfClosed();
    const t = this._writeCounter++;
    return this._sendQueue.enqueueHandlers((n = this._writeKey, r = t, i = undefined, a = e, self.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: l(r),
      additionalData: i ? new Uint8Array(i) : s
    }, n, a)), this._sendCiphertextFrame);
    var n;
    var r;
    var i;
    var a;
  }
  setOnFrame(e) {
    this._onFrame = e;
  }
  setOnClose(e) {
    this._onClose = e;
  }
  close() {
    this._socket.close();
  }
};