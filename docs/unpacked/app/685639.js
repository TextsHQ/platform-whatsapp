var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShiftTimer = undefined;
var i = r(require("./415227.js"));
function a(e) {
  if (!(e >= 0)) {
    throw (0, i.default)("ShiftTimer must be given delay >= 0");
  }
}
exports.ShiftTimer = class {
  constructor(e) {
    this._timer = 0;
    this._rafId = 0;
    this.ts = 0;
    this._timerTs = 0;
    this._upperBound = 0;
    this._lowerBound = 0;
    this._arg = undefined;
    this._run = () => {
      const e = this._arg;
      const t = this._foo;
      this._rafId = 0;
      this._timer = 0;
      this.ts = 0;
      this._timerTs = 0;
      this._upperBound = 0;
      this._lowerBound = 0;
      this._arg = undefined;
      t(e);
    };
    this.onOrBefore = (e, t) => {
      a(e);
      const n = Date.now() + e;
      const r = this._upperBound;
      if (r !== 0 && r < n) {
        return;
      }
      const i = this._lowerBound;
      if (!(i !== 0 && n < i)) {
        this._upperBound = n;
        if (!(this._rafId || this._timer && !(n < this.ts))) {
          this._setDelay(n, e, t);
        }
      }
    };
    this.forceRunNow = e => {
      if (this._timer) {
        clearTimeout(this._timer);
      }
      if (this._rafId) {
        cancelAnimationFrame(this._rafId);
      }
      this._arg = e;
      this._run();
    };
    this.cancel = () => {
      if (this._timer) {
        clearTimeout(this._timer);
      }
      if (this._rafId) {
        cancelAnimationFrame(this._rafId);
      }
      this._timer = 0;
      this._rafId = 0;
      this.ts = 0;
      this._timerTs = 0;
      this._upperBound = 0;
      this._lowerBound = 0;
      this._arg = undefined;
    };
    this._foo = e;
  }
  onOrBeforeRepaint(e) {
    if (this._rafId) {
      return;
    }
    const t = Date.now();
    const n = this._lowerBound;
    if (n !== 0 && t < n) {
      return;
    }
    const r = this._upperBound;
    if (r === 0 || t < r) {
      this._upperBound = t;
    }
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = 0;
    }
    if (!this.ts || this.ts > t) {
      this.ts = t;
    }
    this._arg = e;
    this._rafId = requestAnimationFrame(this._run);
  }
  onOrAfter(e, t) {
    a(e);
    const n = Date.now() + e;
    const r = this._lowerBound;
    if (r !== 0 && n < r) {
      return;
    }
    const i = this._upperBound;
    if (!(i !== 0 && i < n)) {
      this._lowerBound = n;
      if (!this._timer || this.ts < n) {
        this._setDelay(n, e, t);
      }
    }
  }
  debounce(e, t) {
    a(e);
    this._debounce(Date.now(), e, t);
  }
  debounceAndCap(e, t, n) {
    a(e);
    a(t);
    const r = Date.now();
    const i = r + t;
    const o = this._lowerBound;
    const s = this._upperBound;
    if ((o === 0 || o <= i) && (s === 0 || i < s)) {
      this._upperBound = i;
    }
    this._debounce(r, e, n);
  }
  forceRunNowIfScheduled() {
    if (this._timer) {
      clearTimeout(this._timer);
      this._run();
    } else if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._run();
    }
  }
  isScheduled() {
    return this._timer !== 0 || this._rafId !== 0;
  }
  _debounce(e, t, n) {
    const r = e + t;
    const i = this._lowerBound;
    if (i !== 0 && r < i) {
      return;
    }
    const a = this.ts;
    const o = this._upperBound;
    if (o !== 0 && o < r) {
      if (a < o) {
        this._setDelay(o, o - e, n);
      }
    } else if (a < r) {
      this._setDelay(r, t, n);
    }
  }
  _setDelay(e, t, n) {
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = 0;
    }
    this._arg = n;
    this.ts = e;
    if (this._timer) {
      const t = e - this._timerTs;
      if (t > -16 && t < 16) {
        return;
      }
      clearTimeout(this._timer);
    }
    this._timer = setTimeout(this._run, t);
    this._timerTs = e;
  }
};