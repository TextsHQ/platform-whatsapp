var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./556869.js"));
exports.default = class {
  constructor(e) {
    let {
      name: t,
      handler: n = null,
      interval: r = 3600,
      restingInterval: i = 18000,
      sleepWhileResting: o = false,
      randomIntervalExtension: s = 0
    } = e;
    this._running = false;
    this._slowDown = false;
    this._name = t;
    this._interval = r * 1000;
    this._restingInterval = i * 1000;
    this._sleepWhileResting = o;
    this._randomIntervalExtension = s * 1000;
    this._rest();
    if (typeof n == "function") {
      this.poll(n);
    } else if (n != null) {
      throw (0, a.default)("Poll handler must be a function or null");
    }
  }
  _getRandomExtension() {
    return Math.ceil(Math.random() * this._randomIntervalExtension);
  }
  _getInterval() {
    return (this._slowDown ? this._restingInterval : this._interval) + this._getRandomExtension();
  }
  _rest() {
    document.addEventListener("visibilitychange", () => {
      if (!this._lock) {
        if (document.hidden) {
          if (this._sleepWhileResting) {
            __LOG__(2)`LazyPoll[${this._name}]: Inactive paused`;
            this._pause();
          } else {
            __LOG__(2)`LazyPoll[${this._name}]: Inactive slowing down`;
            this._slowDown = true;
          }
        } else if (this._callback) {
          __LOG__(2)`LazyPoll[${this._name}]: Active Resuming`;
          this._resume();
        }
      }
    }, false);
  }
  _isDue() {
    if (!this._lastPoll) {
      return true;
    }
    return Date.now() - this._lastPoll >= this._getInterval();
  }
  _pause() {
    self.clearTimeout(this._timer);
    this._running = false;
  }
  _resume() {
    this._slowDown = false;
    this._running = true;
    this._cycle();
  }
  _cycle() {
    var e = this;
    return (0, i.default)(function* () {
      if (e._running) {
        if (e._isDue()) {
          __LOG__(2)`LazyPoll[${e._name}]: Polling...`;
          yield e._callback();
          e._lastPoll = Date.now();
        }
        self.clearTimeout(e._timer);
        e._timer = self.setTimeout(() => e._cycle(), e._getInterval());
      }
    })();
  }
  poll(e) {
    if (this._callback == null) {
      this._callback = e;
      this._running = true;
      this._cycle();
    } else {
      this.resume();
    }
  }
  pause() {
    __LOG__(2)`LazyPoll[${this._name}]: Manually Paused`;
    this._lock = true;
    this._pause();
  }
  resume() {
    __LOG__(2)`LazyPoll[${this._name}]: Manually Resumed`;
    this._lock = false;
    this._resume();
  }
};