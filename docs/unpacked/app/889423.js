var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./477689.js");
var o = require("./122583.js");
var s = require("./434517.js");
var l = r(require("./164325.js"));
var u = r(require("./845294.js"));
var c = r(require("./987009.js"));
var d = require("./38878.js");
var p = require("./173077.js");
const f = 600000;
const _ = "init";
const g = "ping";
const m = "pong";
const h = "local-takeover";
var y = new class {
  constructor() {
    this._updateMutex = () => {
      this._clearMutexTimer();
      const e = Date.now();
      (0, p.setMutex)(this._ourMutex = _ + "_" + e);
      this._updateMutexTimerID = l.default.setLocalTimeout(this._updateMutex, e + f);
    };
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return (0, i.default)(function* () {
      const n = t + 1;
      if (n > 3) {
        return true;
      }
      const r = (0, p.getNoTakeover)();
      (0, p.setNoTakeover)();
      if (yield e._pingForOtherLocalSession()) {
        e._updateMutex();
        yield (0, c.default)(!r);
        return false;
      }
      if (r) {
        return true;
      }
      throw n;
    })();
  }
  takeoverLocal(e) {
    if ((0, p.getMutex)()) {
      (0, p.setMutex)(h);
      return (0, s.promiseTimeout)((0, u.default)(window, "storage", p.takeoverFilter), 30000, "takeoverLocalTimeout").then(() => {
        d.Socket.mustExitLoop = false;
        (0, p.removeMutex)();
        return this.init(e);
      }).catch((0, o.filteredCatch)(a.TimeoutError, () => {
        __LOG__(3)`app:takeoverLocal timeout`;
        d.Socket.mustExitLoop = false;
        (0, p.removeMutex)();
        return this.init(e);
      }));
    } else {
      return this.init(e);
    }
  }
  unloadMutex() {
    const e = (0, p.getMutex)();
    if (e && this._ourMutex && e.includes(this._ourMutex)) {
      (0, p.removeMutex)();
    }
  }
  storagePong(e) {
    if (!(0, p.mutexFilter)(e)) {
      return;
    }
    const t = (0, p.parseMutex)(e.newValue);
    if (t) {
      if (t === h) {
        this._clearMutexTimer();
        d.Socket.exitLoop();
        (0, p.localTakeoverSuccess)();
        return true;
      } else {
        return void (t.indexOf(g) === 0 && (0, p.setMutex)(m + Math.random()));
      }
    } else {
      return undefined;
    }
  }
  _clearMutexTimer() {
    if (this._updateMutexTimerID) {
      l.default.clearTimeout(this._updateMutexTimerID);
    }
  }
  _pingForOtherLocalSession() {
    let e = (0, p.getMutex)();
    if (e) {
      e += "";
      let t = 10000;
      if (e.indexOf("_") > 0) {
        const n = e.split(".");
        const r = parseInt(n[n.length - 1], 10);
        if (Number.isFinite(r)) {
          if (r < Date.now() - 900000) {
            __LOG__(2)`app:_pingForOtherLocalSession stale mutex`;
            t = 1000;
          }
        }
      }
      const n = (0, s.promiseTimeout)((0, u.default)(window, "storage", p.mutexFilter), t, "waitForOtherLocalSessionTimeout").then(() => false).catch((0, o.filteredCatch)(a.TimeoutError, () => {
        __LOG__(3)`app:_pingForOtherLocalSession mutex timeout`;
        return true;
      }));
      (0, p.setMutex)(g + Math.random());
      return n;
    }
    return Promise.resolve(true);
  }
}();
exports.default = y;