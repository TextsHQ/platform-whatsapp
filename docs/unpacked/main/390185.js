var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyPool = exports.KeyOrder = undefined;
var r = a(require("../vendor/189734.js"));
var o = a(require("../app/670983.js"));
const l = require("../vendor/76672.js")({
  NORMAL: "NORMAL",
  INVERSE: "INVERSE"
});
exports.KeyOrder = l;
exports.KeyPool = class {
  constructor() {
    this._rctKeyToData = new Map();
    this._keyToRctKey = new Map();
  }
  _genNewKeys(e) {
    const t = e - this._rctKeyToData.size;
    if (t <= 0) {
      return [];
    }
    const n = [];
    for (let a = 0; a < e && (this._rctKeyToData.has(a) || (n.push(a), t !== n.length)); a++);
    return n;
  }
  recycleKeysAndMap(e, t) {
    const n = new Map();
    const a = new Map();
    const i = this._genNewKeys(e.length);
    const u = new Set(this._rctKeyToData.keys());
    const s = [];
    e.forEach(e => {
      const t = this._keyToRctKey.get(e.itemKey);
      if (t !== undefined) {
        a.set(e.itemKey, t);
        n.set(t, e);
        u.delete(t);
      } else {
        s.push(e);
      }
    });
    const c = [...i, ...Array.from(u)];
    s.forEach(e => {
      const r = t === l.NORMAL ? c.pop() : c.shift();
      a.set(e.itemKey, r);
      n.set(r, e);
    });
    const d = (0, r.default)(e, [e => a.get(e.itemKey)]).map(e => ({
      rctKey: (0, o.default)(a.get(e.itemKey), "keyToRctKey.get(item.itemKey)"),
      data: e
    }));
    this._rctKeyToData = n;
    this._keyToRctKey = a;
    return d;
  }
};