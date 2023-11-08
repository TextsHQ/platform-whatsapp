var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("./898817.js");
var o = require("./477689.js");
var s = require("./396621.js");
var l = require("./8304.js");
var u = require("./14361.js");
var c = require("./481173.js");
var d = i(require("./799132.js"));
var p = require("./689434.js");
var f = require("./150204.js");
var _ = i(require("./99398.js"));
var g = require("./61939.js");
var m = require("./940494.js");
const h = "wss://web.whatsapp.com/ws/chat";
const y = 300000;
const E = 180000;
const S = (0, g.fibonacci)(8000, 4000, 300000);
class v extends c.BaseModel {
  constructor() {
    super(...arguments);
    this.active = (0, c.prop)(true);
    this.socket = (0, c.prop)();
    this.sockets = (0, c.prop)();
    this.pendingSocketPromiseCount = (0, c.prop)(0);
    this.attempts = (0, c.prop)(0);
    this.controller = (0, c.prop)();
    this.retryTimestamp = (0, c.prop)();
    this.tsListener = (0, c.prop)();
    this.onerror = (0, c.prop)();
  }
  initialize() {
    this.sockets = [];
    new Promise((e, t) => {
      this._resolve = e;
      this._reject = t;
    }).then(e => {
      __LOG__(2)`SocketOpenerMD set to socket ${e.id}`;
      this.set({
        active: false,
        socket: e
      });
      _.default.online = true;
    }).finally(() => {
      this.stopListening();
      __LOG__(2)`SocketOpenerMD closing socket opener`;
      this.active = false;
      this.sockets.forEach(e => {
        e.cancel();
      });
      const e = this.controller;
      if (e) {
        e.deactivate();
        this.controller = null;
      }
    }).catch((0, a.catchAbort)(() => {})).catch(e => {
      __LOG__(3)`SocketOpenerMD deadly error! ${String(e)}`;
      if (!this.onerror) {
        throw e;
      }
      this.onerror(e);
    });
    this.tsListener = e => {
      this.retryTimestamp = e.ts;
    };
    this.listenTo(_.default, "change:online", this._handleOnlineChange);
    this.listenTo(f.jsHaltDetector, u.JS_HALT_EVENT, this._handleJsHalt);
    self.addEventListener("online", () => {
      this._handleOnlineChange();
    });
    this._handleOnlineChange();
  }
  attemptOpen() {
    if (!this.active) {
      return void __LOG__(2)`attemptOpen called while not active!`;
    }
    const e = (0, m.open)(this.routingToken ? `${h}?ED=${this.routingToken}` : h);
    this.attempts = this.sockets.push(e);
    this.pendingSocketPromiseCount++;
    let t = false;
    const n = function () {
      if (t) {
        return Promise.resolve();
      }
      t = true;
      const e = new r().signal;
      return _.default.checkOnline({
        signal: e
      });
    };
    const i = new r();
    (0, l.delayMs)(6000, i.signal).then(() => n()).catch(() => {});
    e.then(this._resolve).finally(() => {
      this.pendingSocketPromiseCount--;
      i.abort();
    }).catch((0, a.catchAbort)(() => {})).catch(() => n());
  }
  poke() {
    if (this.controller) {
      this.controller.forceTimeout();
    }
  }
  _handleOnlineChange() {
    if (!this.active) {
      return;
    }
    const e = this.controller;
    const t = _.default.online ? this.onlineController() : this.offlineController();
    if (e) {
      e.off("change:ts", this.tsListener);
      e.deactivate();
    }
    t.on("change:ts", this.tsListener);
    t.activate();
    this.controller = t;
  }
  onlineController() {
    __LOG__(2)`SocketOpenerMD:onlineController activating`;
    return new g.Watchdog({
      waitAlgorithm: S,
      jitter: 0.2,
      onActivated: () => {
        this.attemptOpen();
      },
      onTimeout: () => {
        this.attemptOpen();
        return true;
      }
    });
  }
  offlineController() {
    __LOG__(2)`SocketOpenerMD:offlineController activating`;
    let e;
    let t = 0;
    return new g.Watchdog({
      waitAlgorithm: i => {
        if (e) {
          e.abort();
        }
        e = new r();
        const a = e.signal;
        if (navigator.onLine) {
          if (t++ < 2) {
            __LOG__(2)`SocketOpenerMD:offline... quick poll`;
            return 6000;
          } else {
            __LOG__(2)`SocketOpenerMD:offline... heuristic poll`;
            T(i, [(0, p.waitForOnlineNaive)(a), (0, d.default)(f.jsHaltDetector, u.JS_HALT_EVENT, undefined, a), (0, d.default)(require("./973981.js").Stream, "change:available", undefined, a)], e);
            return y;
          }
        } else {
          __LOG__(2)`SocketOpenerMD:offline... wait for navigator`;
          t = 0;
          T(i, [(0, p.waitForOnlineNaive)(a)], e);
          return y;
        }
      },
      jitter: 0.2,
      onActivated: () => {
        if (this.pendingAttempts() === 0) {
          this.attemptOpen();
        }
      },
      onDeactivated: () => {
        if (e) {
          e.abort();
        }
      },
      onTimeout: () => {
        this.attemptOpen();
        return true;
      }
    });
  }
  deactivate() {
    this._reject(new a.AbortError());
  }
  pendingAttempts() {
    return this.pendingSocketPromiseCount;
  }
  _handleJsHalt(e) {
    const t = this.controller;
    if (t && e > E) {
      __LOG__(2)`js halt longer than ${E} ms detected, resetting watchdog fail generation`;
      t.resetGeneration();
    }
  }
}
function T(e, t, n) {
  return (0, s.promiseAny)(t).then(() => {
    e.forceTimeout();
  }).finally(() => {
    n.abort();
  }).catch((0, a.catchAbort)(() => {})).catch(e => {
    if (!(e instanceof o.AggregateError && e.errors.every(e => e.name === a.ABORT_ERROR))) {
      throw e;
    }
  });
}
var M = (0, c.defineModel)(v);
exports.default = M;