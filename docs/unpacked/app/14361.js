var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JS_HALT_EVENT = exports.CLOCK_CHANGE_BACKWARDS_EVENT = exports.BaseJsHaltDetector = undefined;
var i = r(require("./395654.js"));
const a = "js_halt";
exports.JS_HALT_EVENT = a;
const o = "clock_change_backwards";
exports.CLOCK_CHANGE_BACKWARDS_EVENT = o;
class s extends i.default {
  constructor(e, t) {
    super();
    this._interval = e;
    this._threshold = t;
  }
  startDetection() {
    if (this._intervalId) {
      return;
    }
    let e = Date.now();
    this._intervalId = self.setInterval(() => {
      const t = Date.now();
      const n = t - e - this._interval;
      if (n > this._threshold) {
        this.trigger(a, n);
      } else if (n < -this._threshold) {
        this.trigger(o, n);
      }
      e = t;
    }, this._interval);
    __LOG__(2)`JsHaltDetector:detection started`;
  }
  stopDetection() {
    if (this._intervalId) {
      self.clearInterval(this._intervalId);
      this._intervalId = null;
      __LOG__(2)`JsHaltDetector:detection stopped`;
    }
  }
  restartDetection() {
    this.stopDetection();
    this.startDetection();
    __LOG__(2)`JsHaltDetector:detection restarted`;
  }
}
exports.BaseJsHaltDetector = s;