var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/618446.js"));
class o {
  constructor(e) {
    this._props = Object.freeze((0, i.default)({}, e));
    Object.freeze(this);
  }
  update(e) {
    const t = (0, i.default)({}, this._props);
    if (e.x != null) {
      t.x = e.x;
    }
    if (e.y != null) {
      t.y = e.y;
    }
    if ((0, a.default)(this._props, t)) {
      return this;
    } else {
      return new o(t);
    }
  }
  clone() {
    return new o(this._props);
  }
  toString() {
    return `(${this.x}x, ${this.y}y)`;
  }
  equals(e) {
    return Math.abs(this.x - e.x) < Number.EPSILON && Math.abs(this.y - e.y) < Number.EPSILON;
  }
  distance(e) {
    return Math.sqrt((e.x - this.x) ** 2 + (e.y - this.y) ** 2);
  }
  rotate(e, t) {
    const n = t * Math.PI / 180;
    const r = this.x - e.x;
    const i = this.y - e.y;
    const a = Math.cos(n) * r - Math.sin(n) * i + e.x;
    const s = Math.sin(n) * r + Math.cos(n) * i + e.y;
    return new o({
      x: Math.round(a * 100) / 100,
      y: Math.round(s * 100) / 100
    });
  }
  get x() {
    return this._props.x;
  }
  get y() {
    return this._props.y;
  }
}
exports.default = o;