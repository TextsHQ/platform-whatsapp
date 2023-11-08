var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LidPnCache = undefined;
var i = require("./669050.js");
var a = r(require("./556869.js"));
exports.LidPnCache = class {
  constructor() {
    this._lidMap = new Map();
    this._pnMap = new Map();
  }
  getPhoneNumber(e) {
    if (!e.isUser() || !e.isLid()) {
      throw (0, a.default)("WaWebLidPnCache - Invalid get call");
    }
    const t = e.toString();
    var n;
    if (this._lidMap.has(t)) {
      if ((n = this._lidMap.get(t)) === null || n === undefined) {
        return undefined;
      } else {
        return n.phoneNumber;
      }
    }
  }
  getCurrentLid(e) {
    if (!e.isUser() || e.isLid()) {
      throw (0, a.default)("WaWebLidPnCache - Invalid get call");
    }
    const t = e.toString();
    var n;
    if (this._pnMap.has(t)) {
      if ((n = this._pnMap.get(t)) === null || n === undefined) {
        return undefined;
      } else {
        return n.lid;
      }
    }
  }
  add(e, t) {
    if (!e.isLid()) {
      throw (0, a.default)("WaWebLidPnCache - Invalid add call");
    }
    const n = e.toString();
    this._lidMap.set(n, t);
    const {
      phoneNumber: r
    } = t;
    if (r != null) {
      this._addInvertedIndex(r, t);
    }
  }
  _addInvertedIndex(e, t) {
    if (e.isLid()) {
      throw (0, a.default)("WaWebLidPnCache - Invalid _updatePnMap call");
    }
    const n = e.toString();
    if (this._pnMap.has(n)) {
      const e = this._pnMap.get(n);
      if (e != null && (e == null ? undefined : e.phoneNumberCreatedAt) < t.phoneNumberCreatedAt) {
        this._pnMap.set(n, t);
      }
    } else {
      this._pnMap.set(n, t);
    }
  }
  getAllLids() {
    return Array.from(this._lidMap.keys()).sort().map(e => (0, i.createWid)(e));
  }
  clear() {
    this._lidMap.clear();
    this._pnMap.clear();
  }
};