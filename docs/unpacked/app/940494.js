var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WatchedSocketMD = undefined;
exports.open = function (e) {
  let t;
  try {
    t = new h(e);
  } catch (e) {
    __LOG__(3)`WatchedSocketMD error constructing: ${e}`;
    return u.default.reject(e);
  }
  return new u.default(t, function (e, t) {
    h.numSocketsAttempted++;
    this.id = h.numSocketsAttempted;
    __LOG__(2)`WatchedSocketMD opening socket ${this.id}`;
    const n = (0, f.openSocket)(this.url);
    n.binaryType = "arraybuffer";
    n.onopen = e;
    n.onclose = n.onerror = function (e) {
      t(new p.SocketError(e));
    };
    this.socket = n;
  }).cancellable().catch(function (e) {
    __LOG__(2)`WatchedSocketMD error on open of ${this.id}: ${e}`;
    if (this.socket) {
      const e = this.socket;
      switch (e.readyState) {
        case WebSocket.CONNECTING:
          e.onopen = null;
        case WebSocket.OPEN:
          e.onerror = null;
          e.onclose = null;
          e.close();
          break;
        case WebSocket.CLOSING:
        case WebSocket.CLOSED:
          e.onerror = null;
          e.onclose = null;
      }
    }
    throw e;
  }).then(function () {
    __LOG__(2)`WatchedSocketMD opened socket ${this.id}`;
    const e = this.socket;
    e.onmessage = this._handleMessage.bind(this);
    e.onerror = this._handleCloseOrError.bind(this, true);
    e.onclose = this._handleCloseOrError.bind(this, false);
    this._offlineListenerAbortController = new r();
    this._offlineListener = (0, c.default)(this._offlineListenerAbortController.signal).then(this.close.bind(this, false, "offline")).catch((0, a.catchAbort)(() => {}));
    this.state = _.WATCHED_SOCKET_STATE.OPEN;
    return this;
  });
};
var a = require("./898817.js");
var o = require("./904704.js");
var s = require("./685639.js");
var l = require("./14361.js");
var u = i(require("./10750.js"));
var c = i(require("./655386.js"));
var d = require("./150204.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./288057.js"));
var f = require("./925031.js");
var _ = require("./226562.js");
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = 180000;
class h {
  constructor(e) {
    this.onError = null;
    this.dataToSend = new o.Binary();
    this.url = e;
    this._killTimer = new s.ShiftTimer(() => this._killSocket());
    d.jsHaltDetector.on(l.JS_HALT_EVENT, this._handleJsHalt, this);
  }
  _handleJsHalt(e) {
    if (e > m) {
      __LOG__(2)`js halt longer than ${m} ms detected, killing socket`;
      this._killTimer.cancel();
      this._killTimer.onOrBefore(0);
    }
  }
  _killSocket() {
    __LOG__(3)`WatchedSocketMD ${this.id} Timeout!`;
    this.close(true, "stale");
  }
  close() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    let t = arguments.length > 1 ? arguments[1] : undefined;
    const n = this.socket;
    let r;
    this._handleCloseOrError(e, t || "unspecified");
    if (n && (r = n.readyState, r === WebSocket.CONNECTING || r === WebSocket.OPEN)) {
      try {
        n.close();
      } catch (e) {
        __LOG__(3)`WatchedSocketMD:exception closing: ${e}\n${e.stack}`;
      }
    }
  }
  requestSend() {
    if (this.state !== _.WATCHED_SOCKET_STATE.OPEN) {
      throw new p.SocketNotOpen(this.state);
    }
    if (this.dataToSend.size()) {
      try {
        this.socket.send(this.dataToSend.readByteArray());
      } catch (e) {
        __LOG__(3)`exception sending: ${e}\n${e.stack}`;
        this.close(true, e);
      }
    }
  }
  _handleMessage(e) {
    if (!(e.data instanceof ArrayBuffer)) {
      throw new TypeError("expected ArrayBuffer from the socket");
    }
    if (this.onData) {
      (0, this.onData)(new Uint8Array(e.data));
    }
  }
  _handleCloseOrError(e, t) {
    if (this.state !== _.WATCHED_SOCKET_STATE.CLOSED) {
      if (this.socket) {
        this.socket.onclose = y;
        this.socket.onerror = y;
        this.socket.onmessage = y;
      }
      if (this._offlineListenerAbortController) {
        this._offlineListenerAbortController.abort();
      }
      __LOG__(3)`Socket ${this.id} closing: ${t.toString()}`;
      d.jsHaltDetector.off(l.JS_HALT_EVENT, this._handleJsHalt, this);
      this._killTimer.cancel();
      this.state = _.WATCHED_SOCKET_STATE.CLOSED;
      this.error = e ? t : undefined;
      if (this.onClose != null) {
        this.onClose();
      }
    }
  }
}
function y() {}
exports.WatchedSocketMD = h;
h.numSocketsAttempted = 0;