var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  (t = class extends u.WrappedComponent {
    constructor() {
      var e;
      super(...arguments);
      e = this;
      this._timers = new Map();
      this._timerId = 0;
      this._unmounted = false;
      this.setInterval = (e, t) => {
        if (this._unmounted) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("Setting interval after unmount");
        }
        const n = ++this._timerId;
        const a = self.setInterval(e, t);
        this._timers.set(n, () => {
          self.clearInterval(a);
          this._timers.delete(n);
        });
        return n;
      };
      this.clearInterval = e => {
        const t = this._timers.get(e);
        if (t) {
          t();
        }
      };
      this.setTimeout = (e, t) => {
        if (this._unmounted) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("Setting timeout after unmount");
        }
        const [n, a] = this._cbWrapper(e);
        const r = self.setTimeout(a, t);
        this._timers.set(n, () => {
          self.clearTimeout(r);
          this._timers.delete(n);
        });
        return n;
      };
      this.clearTimeout = e => {
        const t = this._timers.get(e);
        if (t) {
          t();
        }
      };
      this.requestAnimationFrame = e => {
        if (this._unmounted) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("Requesting animation frame after unmount");
        }
        const [t, n] = this._cbWrapper(e);
        const a = window.requestAnimationFrame(n);
        this._timers.set(t, () => {
          window.cancelAnimationFrame(a);
          this._timers.delete(t);
        });
        return t;
      };
      this.cancelAnimationFrame = e => {
        const t = this._timers.get(e);
        if (t) {
          t();
        }
      };
      this.throttle = (t, n, a) => {
        if (this._unmounted) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("Throttling after unmount");
        }
        const [r, o] = this._cbWrapper(t);
        const i = (0, l.default)(o, n, a);
        const u = i.cancel.bind(i);
        i.cancel = () => {
          u();
          this._timers.delete(r);
        };
        const s = function () {
          if (!e._unmounted) {
            e._timers.set(r, i.cancel);
            i(...arguments);
          }
        };
        s.cancel = i.cancel;
        s.flush = i.flush;
        return s;
      };
      this.debounce = (t, n, a) => {
        if (this._unmounted) {
          __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
          SEND_LOGS("Debouncing after unmount");
        }
        const [r, l] = this._cbWrapper(t);
        const i = (0, o.default)(l, n, a);
        const u = i.cancel.bind(i);
        const s = i.flush.bind(i);
        i.cancel = () => {
          u();
          this._timers.delete(r);
        };
        i.flush = () => {
          s();
        };
        const c = function () {
          if (!e._unmounted) {
            e._timers.set(r, i.cancel);
            i(...arguments);
          }
        };
        c.cancel = i.cancel;
        c.flush = i.flush;
        return c;
      };
      this._cbWrapper = t => {
        const n = ++this._timerId;
        return [n, function () {
          e._timers.delete(n);
          t(...arguments);
        }];
      };
    }
    _getComponent() {
      return u._getComponent.call(this);
    }
    componentWillUnmount() {
      this._unmounted = true;
      this._timers.forEach(e => e());
    }
    render() {
      return s.default.createElement(e, (0, r.default)({
        ref: this.setComponent,
        setInterval: this.setInterval,
        clearInterval: this.clearInterval,
        setTimeout: this.setTimeout,
        clearTimeout: this.clearTimeout,
        requestAnimationFrame: this.requestAnimationFrame,
        cancelAnimationFrame: this.cancelAnimationFrame,
        debounce: this.debounce,
        throttle: this.throttle
      }, this.props));
    }
  }).displayName = `Timer(${(0, i.default)(e)})`;
  t.wrappedComponent = null;
  return t;
};
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/23279.js"));
var l = a(require("../vendor/823493.js"));
var i = a(require("../app/107153.js"));
var u = require("../app/12.js");
var s = a(require("../vendor/667294.js"));