Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.default = class {
  constructor(e) {
    const t = [];
    this._toNormalizedFormMap = new Map();
    e.forEach(e => {
      let [n, a] = e;
      this._toNormalizedFormMap.set(n, a);
      t.push(n);
    });
    this._regex = new RegExp(t.join("|"), "g");
  }
  normalize() {
    return (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "").replace(this._regex, e => {
      const t = this._toNormalizedFormMap.get(e);
      if (t != null) {
        return t;
      } else {
        return e;
      }
    });
  }
};