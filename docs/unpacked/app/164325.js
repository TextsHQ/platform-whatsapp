var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/873955.js"));
var a = require("./632157.js");
var o = require("./14361.js");
var s = require("./63014.js");
var l = require("./150204.js");
var u = new class {
  constructor() {
    this._alarms = new Map();
    const e = () => {
      if (this._alarms.size > 0) {
        this._validateTimeouts();
      }
    };
    l.jsHaltDetector.on(o.JS_HALT_EVENT, e);
    l.jsHaltDetector.on(o.CLOCK_CHANGE_BACKWARDS_EVENT, e);
    s.Clock.on(s.SKEW_CHANGE_EVENT, this._resetGlobalTimeouts.bind(this));
  }
  setLocalTimeout(e, t, n) {
    return this._setTimeout(false, e, t, n);
  }
  setGlobalTimeout(e, t, n) {
    return this._setTimeout(true, e, t, n);
  }
  clearTimeout(e) {
    if (!e) {
      return;
    }
    const t = this._alarms.get(e);
    if (t) {
      self.clearTimeout(t.timeoutId);
      this._alarms.delete(e);
    }
  }
  _setTimeout(e, t, n, r) {
    if (r) {
      this.clearTimeout(r);
    }
    const a = r || (0, i.default)("alarm_timer_");
    const o = n - this._getTimeInMS(e);
    const s = Math.min(o, 2147483647);
    if (o < 0) {
      __LOG__(2)`Alarm:setTimeout:Cannot set alarm in the past.`;
      t();
      return a;
    }
    const u = self.setTimeout(() => {
      if (n - this._getTimeInMS(e) < l.DEFAULT_THRESHOLD) {
        this._alarms.delete(a);
        t();
      } else {
        this._setTimeout(e, t, n, a);
      }
    }, s);
    this._alarms.set(a, {
      isGlobal: e,
      fn: t,
      expiration: n,
      timeoutId: u
    });
    return a;
  }
  _validateTimeouts() {
    new Map(this._alarms).forEach((e, t) => {
      const {
        isGlobal: n,
        fn: r,
        expiration: i
      } = e;
      if (i < this._getTimeInMS(n)) {
        this.clearTimeout(t);
        r();
      } else {
        this._setTimeout(n, r, i, t);
      }
    });
  }
  _resetGlobalTimeouts() {
    new Map(this._alarms).forEach((e, t) => {
      const {
        isGlobal: n,
        fn: r,
        expiration: i
      } = e;
      if (n) {
        this._setTimeout(n, r, i, t);
      }
    });
  }
  _getTimeInMS() {
    return (arguments.length > 0 && arguments[0] !== undefined && arguments[0] ? (0, a.unixTime)() : (0, a.unixTimeWithoutClockSkewCorrection)()) * 1000;
  }
}();
exports.default = u;