var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Listener = undefined;
exports.isEventsType = s;
var i = require("./474296.js");
var a = r(require("./395654.js"));
var o = r(require("./620993.js"));
function s(e) {
  return e instanceof a.default || e instanceof o.default || typeof e.on == "function" && typeof e.off == "function";
}
exports.Listener = class {
  constructor(e, t, n, r, a) {
    this._hasEngaged = false;
    this._hasDisengaged = false;
    this.source = e;
    this.cb = n;
    this.opts = r;
    this._cbIdentifier = a;
    if (s(e)) {
      this.event = t;
    } else {
      this.event = (0, i.compatPrefix)(t, e);
    }
  }
  engage() {
    if (this._hasEngaged || this._hasDisengaged) {
      return;
    }
    this._hasEngaged = true;
    const e = this.source;
    const t = this.event;
    if (s(e)) {
      e.on(t, this.cb);
      if (typeof e.incObservers == "function") {
        e.incObservers();
      }
    } else if (this.opts) {
      e.addEventListener(t, this.cb, this.opts);
    } else {
      e.addEventListener(t, this.cb);
    }
  }
  disengage() {
    if (this._hasDisengaged) {
      return;
    }
    this._hasDisengaged = true;
    if (!this._hasEngaged) {
      return;
    }
    const e = this.source;
    const t = this.event;
    if (s(e)) {
      e.off(this.event, this.cb);
      if (typeof e.decObservers == "function") {
        e.decObservers();
      }
    } else if (this.opts) {
      e.removeEventListener(t, this.cb, this.opts);
    } else {
      e.removeEventListener(t, this.cb);
    }
  }
  represents(e, t, n, r) {
    var i;
    if (this.source !== e) {
      return false;
    }
    if (this.event !== t) {
      return false;
    }
    if (this._cbIdentifier !== n) {
      return false;
    }
    const {
      capture: a = false,
      once: o = false,
      passive: s = false
    } = r != null ? r : {};
    const {
      capture: l = false,
      once: u = false,
      passive: c = false
    } = (i = this.opts) !== null && i !== undefined ? i : {};
    return a === l && o === u && s === c;
  }
};