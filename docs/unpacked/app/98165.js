var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./174285.js"));
var a = require("./94872.js");
var o = require("./599225.js");
var s = require("./3973.js");
var l = require("./555984.js");
function u(e) {
  let t = e;
  if (Object.values(a.HASHED_KEYS).some(t => t === e)) {
    t = (0, l.hashUserPrefKey)(e);
  }
  return t;
}
var c = new class {
  constructor() {
    this._cachedLocalStorageValues = {};
  }
  setItemToLocalStorage(e, t) {
    if (i.default == null) {
      return;
    }
    const n = u(e);
    if (n == null) {
      return;
    }
    const r = JSON.stringify((0, s.preProcessUserPref)(e, t));
    if (r != null) {
      this._cachedLocalStorageValues[n] = r;
      i.default.setItem(n, r);
    }
  }
  getItemFromLocalStorage(e) {
    const t = u(e);
    if (t == null) {
      return;
    }
    let n;
    let r = this._cachedLocalStorageValues[t];
    if (r == null && i.default != null) {
      r = i.default.getItem(t);
    }
    if (r == null) {
      return null;
    }
    this._cachedLocalStorageValues[t] = r;
    try {
      n = JSON.parse(r);
    } catch (t) {
      this.removeItemFromLocalStorage(e);
      return null;
    }
    return (0, o.postProcessUserPref)(e, n);
  }
  removeItemFromLocalStorage(e) {
    const t = u(e);
    if (t != null) {
      delete this._cachedLocalStorageValues[t];
      if (i.default != null) {
        i.default.removeItem(t);
      }
    }
  }
  clearLocalStorage() {
    this._cachedLocalStorageValues = {};
    if (i.default != null) {
      i.default.clear();
    }
  }
}();
exports.default = c;