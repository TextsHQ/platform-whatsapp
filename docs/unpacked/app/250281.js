var r = require("./530066.js").default;
var i = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_SOCKET_ID = undefined;
exports.cancelDeadSocketTimer = function () {
  if (T) {
    T.deadSocketTimer.cancel();
  }
};
exports.castSmaxStanza = R;
exports.closeSocket = function () {
  const e = D("closeSocket").socket;
  if (e) {
    __LOG__(2)`closeSocket called`;
    e.close();
  }
};
exports.closeSocketAndPreventRetry = function () {
  const e = D("closeSocketAndPreventRetry");
  e.socketLoop.endWithValue();
  if (e.socket) {
    __LOG__(2)`closeSocketAndPreventRetry called`;
    e.socket.close();
  }
};
exports.deprecatedCastStanza = function (e, t) {
  R(e, t);
};
exports.deprecatedSendIq = function (e, t) {
  return N(e, false).then(e => (0, p.parseIqResponse)(e, t));
};
exports.deprecatedSendIqErrorParser = function (e, t, n) {
  return N(e, false).then(e => (0, p.parseIqResponse)(e, t, n));
};
exports.deprecatedSendIqIfConnectedWithin = function (e, t, n) {
  return N(e, false, n).then(e => (0, p.parseIqResponse)(e, t));
};
exports.deprecatedSendIqWithoutRetry = function (e, t) {
  return N(e, true).then(e => (0, p.parseIqResponse)(e, t));
};
exports.deprecatedSendStanzaAndReturnAck = I;
exports.deprecatedSendStanzaAndWaitForAck = function (e, t) {
  return I(e, t).then(() => {});
};
exports.forceAbortSocketConnection = function () {
  var e;
  const t = D("socketAbortController");
  if (!((e = t.socketAbortController) === null || e === undefined)) {
    e.abort();
  }
};
exports.forceResetSocketLoop = function () {
  D("forceResetSocketLoop").socketLoop.reset();
};
exports.getComms = function () {
  return T;
};
exports.isActiveSocket = function (e) {
  return D("castStanza").socketId === e;
};
exports.isSocketConnected = P;
exports.maybeResetSocketLoop = function () {
  if (!P()) {
    D("maybeResetSocketLoop").socketLoop.reset();
  }
};
exports.onStreamErrorReceived = function () {
  D("onStreamErrorReceived").socketLoop.cancelReset();
};
exports.openSocketLoop = C;
exports.resetStateForTests = function () {
  T = null;
  M = new _.Resolvable();
  A = 1;
};
exports.sendPing = function () {
  return D("sendPing").sendPing();
};
exports.sendSmaxStanza = function (e, t) {
  var n;
  var r;
  var i;
  const a = (n = t == null ? undefined : t.withoutRetry) !== null && n !== undefined && n;
  const o = (r = t == null ? undefined : t.timeoutSeconds) !== null && r !== undefined ? r : 0;
  const s = (i = t == null ? undefined : t.signal) !== null && i !== undefined ? i : null;
  return N(e, a, o, s, "smax");
};
exports.singletonOrThrowIfUninitialized = D;
exports.socketLoopIteration = O;
exports.startComms = function (e, t, n) {
  if (T) {
    return;
  }
  T = new b(e, t, n);
  setTimeout(C, 0);
};
exports.startHandlingRequests = function () {
  return D("startHandlingRequests").startHandlingRequests();
};
exports.stopComms = function () {
  const e = D("stopComms");
  e.socketLoop.endWithValue();
  if (e.socket) {
    e.socket.close();
  }
  T = null;
};
exports.waitForConnection = function () {
  D("waitForConnection").sendPing();
  if (!M) {
    M = new _.Resolvable();
  }
  return M.promise;
};
var a = i(require("../vendor/73982.js"));
var o = i(require("../vendor/311504.js"));
var s = require("./108062.js");
var l = require("./125161.js");
var u = i(require("./415227.js"));
var c = require("./34113.js");
var d = require("./580591.js");
var p = require("./442971.js");
var f = require("./721569.js");
var _ = require("./950376.js");
var g = require("./135781.js");
var m = require("./685639.js");
var h = require("./37074.js");
var y = require("./746087.js");
var E = require("./686310.js");
var S = require("./632157.js");
var v = require("./716358.js");
let T = null;
let M = null;
let A = 1;
exports.DEFAULT_SOCKET_ID = 0;
class b {
  constructor(e, t, n) {
    var r;
    var i;
    this.nextSocketId = 1;
    this.pendingIqs = new Map();
    this.ackHandlers = [];
    this.pendingSmaxStanzas = new Map();
    this._recvBlocker = new _.Resolvable();
    this.socketAbortController = null;
    this.activePing = null;
    this._pending = new Set();
    this.socketId = 0;
    this.socket = null;
    this.softCloseSocket = null;
    this.handleStanza = (e, t, n) => {
      const r = (0, E.attrString)(e, "id");
      if (r.success && e.tag !== "receipt") {
        const t = r.value;
        const n = this.pendingSmaxStanzas.get(t);
        if (n) {
          this.pendingSmaxStanzas.delete(t);
          n.resolve(e);
          this.maybeScheduleHealthCheck();
          return "NO_ACK";
        }
      }
      const i = w(e);
      if (i != null) {
        const t = this.pendingIqs.get(i);
        if (t) {
          this.pendingIqs.delete(i);
          t.resolve(e);
          this.maybeScheduleHealthCheck();
        } else {
          __LOG__(3)`handleIq no handler for iq with id ${i}`;
          __LOG__(4, undefined, new Error())`handleIq no handler for iq`;
        }
      } else {
        if (e.tag !== "ack") {
          if (e.tag === "failure" && this.config.shouldBlockReceivingUntilSuccess) {
            return this._handleStanza(e, t, n);
          } else {
            return this._recvBlocker.promise.then(() => this._handleStanza(e, t, n));
          }
        }
        this.handleAck(e);
      }
      return "NO_ACK";
    };
    this.healthCheckTimer = new m.ShiftTimer(() => {
      if (this.socketId) {
        this.sendPing();
      }
    });
    this.deadSocketTimer = new m.ShiftTimer(e => {
      __LOG__(2)`Comms: Socket ${e} expired`;
      if (e === this.socketId && this.softCloseSocket) {
        this.softCloseSocket();
      }
    });
    this.sendPing = (0, o.default)(function* () {
      const e = D("sendPing");
      if (!e.socketId) {
        __LOG__(2)`sendPing when socket dead`;
        return Promise.resolve();
      }
      if (e.activePing && e.activePing.socketId === e.socketId) {
        __LOG__(2)`sendPing ping still pending`;
        return Promise.resolve();
      }
      if (e.activePing) {
        e.activePing.handler.resolve();
      }
      const t = (0, y.makeClientRequest)();
      const n = t.attrs.id;
      if (typeof n != "string") {
        __LOG__(4, undefined, new Error())`No stanzaId in ping request stanza`;
        return Promise.resolve();
      }
      const r = new _.Resolvable();
      e.activePing = {
        socketId: e.socketId,
        stanzaId: n,
        handler: r
      };
      e.callStanza(t);
      const i = yield r.promise;
      if (i) {
        const n = (0, h.parseClientResponseServerResponse)(i, t);
        if (n.success) {
          var a;
          var o;
          const t = (0, S.castToUnixTime)(n.value.t);
          const r = Math.round(Date.now() / 1000 - t);
          if (!((a = (o = e.config.handlers).onClockSkewUpdate) === null || a === undefined)) {
            a.call(o, r);
          }
        }
      }
    });
    this._handleStanza = e;
    this.onConnectionChange = (0, d.notifyConnectionChangeFactory)((r = t.handlers.onConnectionChange) !== null && r !== undefined ? r : () => {}, (i = t.handlers.onOptimisticConnectionChange) !== null && i !== undefined ? i : () => {});
    this.gzipInflate = n;
    this.config = t;
    this.socketLoop = new f.PromiseRetryLoop({
      name: "MainSocketLoop",
      code: O,
      timer: {
        jitter: 0.1,
        max: t.maxSocketLoopWaitTime,
        algo: {
          type: "fibonacci",
          first: 10000,
          second: 10000
        },
        relativeDelay: true
      },
      resetDelay: 30000
    });
  }
  filterPending(e) {
    const t = [];
    function n(n) {
      if (e(n)) {
        t.push(n);
      }
    }
    this.pendingIqs.forEach(n);
    this.ackHandlers.forEach(n);
    this.pendingSmaxStanzas.forEach(n);
    return t;
  }
  sendPendingStanza(e) {
    var t;
    if (!((t = e.cleanup) === null || t === undefined)) {
      t.call(e);
    }
    e.cleanup = undefined;
    this.callStanza(e.stanza);
  }
  maybeSendPendingStanza(e) {
    var t;
    var n;
    var r;
    if (e.attempt >= this.config.maxRetries) {
      if (!((t = (n = this.config.handlers).onDropStanza) === null || t === undefined)) {
        t.call(n, e);
      }
      if (!((r = e.cleanup) === null || r === undefined)) {
        r.call(e);
      }
      e.cleanup = undefined;
      this.removeHandler(e, "max-retries");
    } else if (this.socket) {
      e.attempt += 1;
      this.sendPendingStanza(e);
    } else {
      __LOG__(2)`Comms has no open socket, will resend stanza when socket opens`;
    }
  }
  callStanzaAsync(e, t) {
    var n = this;
    return (0, o.default)(function* () {
      return yield n.callStanza(e, t);
    })();
  }
  callStanza(e, t) {
    const n = this.castStanza(e, t);
    this.deadSocketTimer.onOrBefore(this.config.deadSocketTime, this.socketId);
    this.healthCheckTimer.cancel();
    return n;
  }
  castStanzaAsync(e) {
    var t = this;
    return (0, o.default)(function* () {
      return yield t.castStanza(e);
    })();
  }
  castStanza(e, t) {
    try {
      var n;
      var r;
      const i = (n = (r = this.config.handlers).onBeforeCastStanzaForE2E) === null || n === undefined ? undefined : n.call(r, e, t);
      if (i != null) {
        __LOG__(4, undefined, new Error())`Dropping stanza since onBeforeCastStanza matched. (This is not expected in a non-E2E build!)`;
        if (Array.isArray(i)) {
          return Promise.all(i.map(e => Promise.resolve(this.handleStanza(e, this.socketId, 0))));
        } else {
          this.handleStanza(i, this.socketId, 0);
          return Promise.resolve();
        }
      }
    } catch (e) {}
    const i = this.socketOrThrow("castStanza");
    try {
      return i.sendFrame((0, v.encodeStanza)(e)).then(() => {
        var n;
        var r;
        if (!((n = (r = this.config.handlers).onCastStanza) === null || n === undefined)) {
          n.call(r, e, t);
        }
      }).catch(e => {
        __LOG__(4, undefined, new Error())`castStanza async error ${e}`;
        if (e instanceof c.BufferTooLargeError) {
          return Promise.reject(e);
        }
      });
    } catch (e) {
      __LOG__(4, undefined, new Error())`castStanza error ${e}`;
    }
    return Promise.resolve();
  }
  socketOrThrow(e) {
    const t = this.socket;
    if (t) {
      return t;
    }
    throw (0, u.default)(`Comms.${e} called while no socket`);
  }
  startHandlingRequests() {
    __LOG__(2)`Comms.startHandlingRequests`;
    this._recvBlocker.resolve();
    return this._recvBlocker.promise.then(() => {});
  }
  parseAndHandleStanza(e, t) {
    if (e === this.socketId) {
      this.deadSocketTimer.cancel();
      if (M) {
        M.resolve();
        M = null;
      }
    }
    const n = (0, v.decodeStanza)(t, this.gzipInflate).catch(e => {
      __LOG__(4, undefined, new Error())`Failure parsing stanza!`;
      throw e;
    }).then(n => {
      var r;
      var i;
      if (!((r = (i = this.config.handlers).onHandleStanza) === null || r === undefined)) {
        r.call(i, n, e, t.byteLength);
      }
      const a = this.activePing;
      if (a && a.socketId === e && a.stanzaId === w(n)) {
        this.activePing = null;
        a.handler.resolve(n);
        this.maybeScheduleHealthCheck();
        return "NO_ACK";
      } else {
        return this.handleStanza(n, e, t.byteLength);
      }
    }).then(t => {
      if (e === this.socketId) {
        if (t === "CLOSE_SOCKET") {
          __LOG__(2)`Comms: job response is CLOSE_SOCKET`;
          const e = this.socket;
          if (e) {
            e.close();
          }
        } else if (!(t === "NO_ACK")) {
          this.castStanza(t);
        }
        return "NO_ACK";
      }
    });
    this._pending.add(n);
    n.finally(() => {
      this._pending.delete(n);
    });
  }
  handleAck(e) {
    const t = this.ackHandlers;
    let n = -1;
    let r = null;
    for (; !r && ++n < t.length;) {
      r = t[n].parseAndTest(e);
    }
    if (r) {
      var i;
      var a;
      const o = t[n];
      (0, l.removeIndexWithoutPreservingOrder)(t, n);
      if (!((i = (a = this.config.handlers).onHandleAck) === null || i === undefined)) {
        i.call(a, e);
      }
      o.resolve(r);
      this.maybeScheduleHealthCheck();
    } else {
      __LOG__(3)`handleAck: unrecognized ${e}`;
    }
  }
  removeHandler(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "disconnect";
    if (e.type === "iq" || e.type === "smax") {
      const t = e.stanza.attrs.id;
      if (!t || typeof t != "string") {
        return;
      }
      if (e.type === "iq" && !this.pendingIqs.delete(t) || e.type === "smax" && !this.pendingSmaxStanzas.delete(t)) {
        return;
      }
    } else {
      e.type;
      const t = this.ackHandlers.indexOf(e);
      if (t === -1) {
        return;
      }
      (0, l.removeIndexWithoutPreservingOrder)(this.ackHandlers, t);
    }
    if (t === "disconnect") {
      e.resolve(Promise.reject(new c.Disconnected()));
    } else {
      e.resolve(Promise.reject(new c.MaxRetries()));
    }
  }
  maybeScheduleHealthCheck() {
    if (this.healthCheckTimer.isScheduled()) {
      return;
    }
    if (this.activePing || this.ackHandlers.length || this.pendingIqs.size || this.pendingSmaxStanzas.size) {
      return;
    }
    const e = this.config.healthCheckInterval;
    const t = Math.ceil(e * 1000 * (1 + Math.random()));
    this.healthCheckTimer.onOrBefore(t);
  }
}
function C() {
  D("openSocketLoop").socketLoop.start();
}
function P() {
  var e;
  return !!((e = T) === null || e === undefined ? undefined : e.socket);
}
function O() {
  var e;
  var t;
  var n;
  const i = D("socketLoopIteration");
  if (typeof r == "function") {
    i.socketAbortController = new r();
  }
  const a = i.nextSocketId++;
  __LOG__(2)`Comms: Socket ${a} opening`;
  if (!((e = (t = i.config.handlers).onSocketLoopIteration) === null || e === undefined)) {
    e.call(t);
  }
  return i.config.openChatSocket(() => {
    i.onConnectionChange("in_handshake");
  }, (n = i.socketAbortController) === null || n === undefined ? undefined : n.signal).then((0, g.onResult)(e => {
    var t;
    var n;
    var r;
    var o;
    if (!((t = (n = i.config.handlers).onSocketOpen) === null || t === undefined)) {
      t.call(n);
    }
    const s = new _.Resolvable();
    __LOG__(2)`Comms: Socket ${a} opened`;
    i.socketId = a;
    i.socket = e;
    i.softCloseSocket = () => {
      i.softCloseSocket = null;
      if (i.socket && i.config.shouldCloseStaleSocket) {
        i.socket.close();
        i.socket = null;
      }
      s.resolve();
    };
    i.socketLoop.resetTimeoutAfter(10000);
    i.deadSocketTimer.cancel();
    i.maybeScheduleHealthCheck();
    e.setOnFrame(e => i.parseAndHandleStanza(a, e));
    e.setOnClose(() => {
      var e;
      var t;
      __LOG__(2)`Comms: Socket ${a} closed`;
      if (i.activePing && a === i.activePing.socketId) {
        i.activePing.handler.resolve();
        i.activePing = null;
      }
      i.filterPending(e => e.attachedToSocketId === a).forEach(e => {
        i.removeHandler(e);
      });
      if (a === i.socketId) {
        i.socketId = 0;
        i.socket = null;
        i.onConnectionChange("disconnected");
        if (!((e = (t = i.config.handlers).onDisconnect) === null || e === undefined)) {
          e.call(t);
        }
        s.resolve();
      }
    });
    i.onConnectionChange("connected");
    if (!((r = (o = i.config.handlers).onConnect) === null || r === undefined)) {
      r.call(o);
    }
    i.filterPending(e => !e.attachedToSocketId).sort((e, t) => e.orderedId - t.orderedId).forEach(e => {
      switch (e.type) {
        case "smax":
        case "iq":
          i.maybeSendPendingStanza(e);
          break;
        case "ack":
          i.callStanza(e.stanza);
          break;
        default:
          e.type;
      }
    });
    return s.promise;
  })).then((0, g.catchError)(e => {
    switch (e) {
      case "max-hunters":
        __LOG__(3)`socketLoopIteration socket closed while in noise handshake using treasureHunt strategy`;
        break;
      case "disconnected":
        __LOG__(3)`socketLoopIteration socket disconnected while in noise handshake`;
    }
  })).catch(e => {
    if (e instanceof c.Disconnected) {
      __LOG__(2)`socketLoopIteration socket closed while in noise handshake`;
    } else {
      __LOG__(4, undefined, new Error())`socketLoopIteration failed ${e}`;
    }
  });
}
function I(e, t) {
  return new Promise(n => {
    const r = D("deprecatedSendStanzaAndReturnAck");
    const i = {
      type: "ack",
      parseAndTest: e => {
        const n = s.AckParser.parse(e);
        if (!n.error && (0, s.ackMatchesTemplate)(n.success, t)) {
          return e;
        } else {
          return null;
        }
      },
      resolve: n,
      stanza: e,
      attachedToSocketId: 0,
      orderedId: A++
    };
    r.ackHandlers.push(i);
    if (r.socket) {
      r.callStanza(e).catch(e => {
        const t = r.ackHandlers.indexOf(i);
        if (t !== -1) {
          (0, l.removeIndexWithoutPreservingOrder)(r.ackHandlers, t);
          i.resolve(Promise.reject(e));
        }
      });
    } else {
      __LOG__(2)`Comms has no open socket, will send stanza when socket opens`;
    }
  });
}
function R(e, t) {
  const n = D("castStanza");
  if (n.socket) {
    n.castStanza(e, t);
  } else {
    __LOG__(2)`Comms has no open socket`;
  }
}
function N(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let r = arguments.length > 3 ? arguments[3] : undefined;
  let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "iq";
  return new Promise(o => {
    const s = D("sendIq");
    const l = e.attrs.id;
    if (!l || typeof l != "string") {
      throw (0, u.default)(`Comms:sendIq given iq without id: ${String(e)}`);
    }
    const d = s.socketId;
    if (t && !d) {
      return void o(Promise.reject(new c.Offline()));
    }
    const p = () => {
      const e = i === "iq" ? s.pendingIqs.get(l) : s.pendingSmaxStanzas.get(l);
      if (e) {
        s.removeHandler(e);
      } else {
        o(Promise.reject((0, u.default)(`Comms:_sendIq unexisting stanza to be cancelled: ${l}`)));
      }
    };
    let f = null;
    if (n > 0) {
      const e = setTimeout(p, n * 1000);
      f = () => {
        clearTimeout(e);
      };
    }
    if (r != null) {
      if (r.aborted) {
        return void o(Promise.reject(new c.Disconnected()));
      }
      r.addEventListener("abort", p);
      f = () => {
        r.removeEventListener("abort", p);
      };
    }
    const _ = {
      resolve: o,
      stanza: e,
      attachedToSocketId: t ? d : 0,
      orderedId: A++,
      attempt: 0,
      cleanup: f
    };
    if (i === "iq") {
      var g;
      var m;
      const t = (0, a.default)({
        type: i
      }, _);
      s.pendingIqs.set(l, t);
      if (!((g = (m = s.config.handlers).onSendIq) === null || g === undefined)) {
        g.call(m, e);
      }
      s.maybeSendPendingStanza(t);
    } else {
      const e = (0, a.default)({
        type: i
      }, _);
      s.pendingSmaxStanzas.set(l, e);
      s.maybeSendPendingStanza(e);
    }
  });
}
function D(e) {
  if (T) {
    return T;
  }
  throw (0, u.default)(`Comms::${e} called before startComms`);
}
function w(e) {
  if (e.tag === "iq") {
    const t = e.attrs.type;
    if (t === "result" || t === "error") {
      return (0, v.decodeAsString)(e.attrs.id) || null;
    }
  }
  return null;
}