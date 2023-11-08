Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Watchdog = undefined;
exports.fibonacci = function (e, t, n) {
  if (typeof n == "number") {
    const r = n;
    return function (n) {
      switch (n.failGeneration) {
        case 0:
          return Math.min(r, t);
        case 1:
          return Math.min(r, e + t);
        default:
          return Math.min(r, n.waitDuration + n.prevWaitDuration);
      }
    };
  }
  return function (n) {
    switch (n.failGeneration) {
      case 0:
        return t;
      case 1:
        return e + t;
      default:
        return n.waitDuration + n.prevWaitDuration;
    }
  };
};
var r = require("./685639.js");
var i = require("./481173.js");
class a extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.failGeneration = (0, i.session)(0);
    this.ts = (0, i.session)();
    this.waitDuration = (0, i.session)(0);
    this.prevWaitDuration = (0, i.session)(0);
    this.jitter = (0, i.session)(0);
    this.shiftTimer = (0, i.session)();
    this.waitAlgorithm = (0, i.session)();
    this.onActivated = (0, i.session)();
    this.onDeactivated = (0, i.session)();
    this.onFed = (0, i.session)();
    this.onTimeout = (0, i.session)();
  }
  initialize() {
    this.shiftTimer = new r.ShiftTimer(() => s.call(this));
  }
  activate() {
    if (!this.shiftTimer.isScheduled()) {
      this._run(true);
      if (this.onActivated) {
        this.onActivated(this);
      }
    }
  }
  deactivate() {
    if (this.shiftTimer.isScheduled()) {
      this.shiftTimer.cancel();
      if (this.onDeactivated) {
        this.onDeactivated(this);
      }
    }
  }
  feed() {
    if (this.shiftTimer.isScheduled()) {
      this._run(true);
      if (this.onFed) {
        this.onFed(this);
      }
    }
  }
  forceTimeout(e) {
    if (this.shiftTimer.isScheduled()) {
      if (e != null && e !== 0) {
        this.shiftTimer.onOrBefore(e);
        this.ts = this.shiftTimer.ts;
      } else {
        this.shiftTimer.forceRunNow();
      }
    } else {
      __LOG__(3)`forced non-running watchdog!`;
    }
  }
  poke() {
    this.forceTimeout.apply(this, arguments);
  }
  resetGeneration() {
    this.failGeneration = 0;
  }
  _run(e) {
    if (e) {
      this.resetGeneration();
    }
    const t = this.waitAlgorithm(this);
    const n = this.jitter * Math.random() * t;
    this.shiftTimer.debounce(t + n);
    this.set({
      ts: this.shiftTimer.ts,
      waitDuration: t,
      prevWaitDuration: this.waitDuration
    });
  }
}
const o = (0, i.defineModel)(a);
function s() {
  const e = this.onTimeout;
  if (!e) {
    __LOG__(3, undefined, undefined, true)`Watchdog timed-out without handler!`;
    return void SEND_LOGS("watchdog-no-handler");
  }
  this.failGeneration++;
  if (e(this)) {
    this._run(false);
  }
}
exports.Watchdog = o;