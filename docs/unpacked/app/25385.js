var r = require("./530066.js").default;
var i = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("./898817.js");
var o = i(require("./229922.js"));
exports.default = class {
  constructor() {
    this._lastPromise = Promise.resolve();
    this._controller = new r();
    this._pending = [];
  }
  enqueue(e) {
    e.catch(() => {});
    const t = () => e;
    const n = this._controller.signal;
    this._lastPromise = this._lastPromise.then(t, t);
    const r = (0, o.default)(this._lastPromise, n).catch((0, a.catchAbort)(e => {
      var t;
      throw (t = this._cancellationError) !== null && t !== undefined ? t : e;
    }));
    this._pending.push(r);
    return r.finally(() => {
      if (this._pending.length > 0 && this._pending[0] === r) {
        this._pending.shift();
      }
    });
  }
  cancelAll(e) {
    this._cancellationError = e;
    this._pending = [];
    this._controller.abort();
    this._controller = new r();
  }
};