var r = require("./530066.js").default;
var i = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = i(require("./415227.js"));
exports.default = class {
  constructor() {
    this._disposed = false;
    this._controller = new r();
    this._signals = new Set();
    this.signal = this._controller.signal;
    this._handleAbort = e => {
      this.delete(e.currentTarget);
      this._checkAborted();
    };
  }
  add() {
    this._throwIfDisposed();
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }
    for (const e of t) {
      if (!e.aborted) {
        e.addEventListener("abort", this._handleAbort);
        this._signals.add(e);
      }
    }
    this._checkAborted();
  }
  _checkAborted() {
    if (this._disposed) {
      return;
    }
    if (Array.from(this._signals).every(e => e.aborted)) {
      this.dispose();
      this._controller.abort();
    }
  }
  delete() {
    this._throwIfDisposed();
    this._delete(...arguments);
  }
  _delete() {
    let e = false;
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
      n[r] = arguments[r];
    }
    for (const t of n) {
      if (this._signals.delete(t)) {
        e = true;
        t.removeEventListener("abort", this._handleAbort);
      }
    }
    if (e) {
      this._checkAborted();
    }
  }
  _throwIfDisposed() {
    if (this._disposed) {
      throw (0, a.default)("Attempt to modify disposed SignalAggregator");
    }
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      for (const e of this._signals) {
        this._delete(e);
      }
    }
  }
  getSignals__INTERNAL() {
    return this._signals;
  }
};