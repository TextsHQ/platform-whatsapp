var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/618446.js"));
class o {
  constructor(e) {
    const {
      width: t,
      height: n
    } = e;
    if (t < 0) {
      throw new RangeError("MediaEditor:Size width cannot be negative");
    }
    if (n < 0) {
      throw new RangeError("MediaEditor:Size height cannot be negative");
    }
    this._props = Object.freeze({
      width: t,
      height: n
    });
    Object.freeze(this);
  }
  update(e) {
    const t = (0, i.default)({}, this._props);
    if (e.width != null) {
      t.width = e.width;
    }
    if (e.height != null) {
      t.height = e.height;
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
    return `(${this.width}w, ${this.height}h)`;
  }
  equals(e) {
    return Math.abs(this.width - e.width) < Number.EPSILON && Math.abs(this.height - e.height) < Number.EPSILON;
  }
  isEmpty() {
    return this.equals(o.empty());
  }
  static empty() {
    return new o({
      width: 0,
      height: 0
    });
  }
  get width() {
    return this._props.width;
  }
  get height() {
    return this._props.height;
  }
  get dimension() {
    return Math.max(this.width, this.height);
  }
}
exports.default = o;