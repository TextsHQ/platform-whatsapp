var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const [e, t] = (0, o.useState)(() => s().getValue());
  (0, o.useEffect)(() => s().subscribe(e => {
    t(e);
  }), []);
  return e;
};
var i = r(require("../vendor/751463.js"));
var a = r(require("./556869.js"));
var o = require("../vendor/667294.js");
const s = (0, i.default)(() => new l());
class l {
  constructor() {
    this._subscribers = new Set();
  }
  subscribe(e) {
    if (this._subscribers.has(e)) {
      throw (0, a.default)("Callback can only be added once.");
    }
    this._subscribers.add(e);
    this._updateListener();
    return () => {
      this._subscribers.delete(e);
      this._updateListener();
    };
  }
  getValue() {
    var e;
    if ((e = window.devicePixelRatio) !== null && e !== undefined) {
      return e;
    } else {
      return 1;
    }
  }
  _updateListener() {
    var e;
    if (this._subscribers.size === 0) {
      return void ((e = this._destroyListener) === null || e === undefined || e.call(this));
    }
    if (this._destroyListener != null) {
      return;
    }
    const t = matchMedia(`(resolution: ${this.getValue()}dppx)`);
    const n = () => {
      var e;
      if (!((e = this._destroyListener) === null || e === undefined)) {
        e.call(this);
      }
      const t = this.getValue();
      this._subscribers.forEach(e => {
        e(t);
      });
      this._updateListener();
    };
    t.addListener(n);
    this._destroyListener = () => {
      t.removeListener(n);
      this._destroyListener = null;
    };
  }
}