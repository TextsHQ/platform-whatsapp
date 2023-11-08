Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocketClosed = exports.FrameSocket = undefined;
var r = require("./904704.js");
var i = require("./34113.js");
class a extends Error {
  constructor(e) {
    const t = "SocketClosed";
    super(e != null ? e : t);
    this.name = t;
  }
}
exports.SocketClosed = a;
function o(e) {
  if (e.size() < 3) {
    return false;
  }
  return s(e) <= e.size();
}
function s(e) {
  return e.readUint8() << 16 | e.readUint16();
}
exports.FrameSocket = class {
  constructor(e, t) {
    this._incoming = new r.Binary();
    this.closed = false;
    this._draining = false;
    this.onFrame = null;
    this.onClose = null;
    this._handleData = e => {
      this._incoming.writeByteArray(e);
      this.convertBufferedToFrames();
    };
    this._handleClose = () => {
      if (this._incoming.peek(o)) {
        __LOG__(2)`FrameSocket closed, waiting for pending processing`;
        return void (this._draining = true);
      }
      this._doClose();
    };
    this._handleError = () => {};
    this._introToSend = t;
    this._socket = e;
    e.onData = this._handleData;
    e.onClose = this._handleClose;
    e.onError = this._handleError;
  }
  sendFrame(e) {
    if (this._draining) {
      return;
    }
    this.throwIfClosed();
    const t = this._introToSend;
    const n = e.byteLength;
    const r = this._socket.dataToSend;
    if (t) {
      this._introToSend = null;
      r.ensureAdditionalCapacity(t.length + 3 + n);
      r.writeByteArray(t);
    } else {
      r.ensureAdditionalCapacity(3 + n);
    }
    this._assertMaxPayloadSize(n);
    r.writeUint8(n >> 16);
    r.writeUint16(n & 65535);
    r.write(e);
    this._socket.requestSend();
  }
  _doClose() {
    if (this.closed) {
      return;
    }
    __LOG__(2)`FrameSocket closed`;
    this._draining = false;
    this.closed = true;
    const e = this.onClose;
    if (e) {
      e();
    }
  }
  _assertMaxPayloadSize(e) {
    if (e >= 1 << 24) {
      __LOG__(3)`Buffer to send: ${e}`;
      throw new i.BufferTooLargeError(`Buffer too large: ${e}`);
    }
  }
  convertBufferedToFrames() {
    const e = this._incoming;
    let t = this.onFrame;
    for (; t && e.peek(o);) {
      const n = s(e);
      t(e.readByteArray(n));
      t = this.onFrame;
    }
    if (this._draining && !e.peek(o)) {
      this._doClose();
    }
    if (t && e.size()) {
      __LOG__(2)`FrameSocket: queueing partial frame of ${e.size()} bytes`;
    }
  }
  throwIfClosed() {
    if (this.closed) {
      throw new a();
    }
  }
  close() {
    this._socket.close();
  }
};