var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/618446.js"));
var o = r(require("./31579.js"));
var s = r(require("./527539.js"));
class l {
  static create(e) {
    return new l({
      origin: new o.default({
        x: e.x,
        y: e.y
      }),
      size: new s.default({
        width: e.width,
        height: e.height
      }),
      rotation: e.rotation,
      scale: e.scale
    });
  }
  constructor(e) {
    this._props = Object.freeze((0, i.default)({}, e));
    Object.freeze(this);
  }
  updateXYWidthHeight(e) {
    const t = (0, i.default)({}, this._props);
    if (!(e.x == null && e.y == null)) {
      t.origin = t.origin.update({
        x: e.x,
        y: e.y
      });
    }
    if (!(e.width == null && e.height == null)) {
      t.size = t.size.update({
        width: e.width,
        height: e.height
      });
    }
    if (e.rotation != null) {
      t.rotation = e.rotation;
    }
    if (e.scale != null) {
      t.scale = e.scale;
    }
    return this.update(t);
  }
  update(e) {
    const t = (0, i.default)({}, this._props);
    if (e.origin != null) {
      t.origin = e.origin;
    }
    if (e.size != null) {
      t.size = e.size;
    }
    if (e.rotation != null) {
      t.rotation = e.rotation;
    }
    if (e.scale != null && Math.abs(t.scale - e.scale) > 0.000001) {
      t.scale = e.scale;
    }
    if ((0, a.default)(this._props, t)) {
      return this;
    } else {
      return new l(t);
    }
  }
  clone() {
    return new l(this._props);
  }
  addPadding(e, t) {
    const n = this.getTopLeft();
    const r = t.getTopLeft();
    const i = new o.default({
      x: Math.max(r.x, n.x - e),
      y: Math.max(r.y, n.y - e)
    });
    const a = this.getBottomRight();
    const s = t.getBottomRight();
    const l = new o.default({
      x: Math.min(s.x, a.x + e),
      y: Math.min(s.y, a.y + e)
    });
    const u = l.x - i.x;
    const c = l.y - i.y;
    return this.updateXYWidthHeight({
      x: i.x,
      y: i.y,
      width: u,
      height: c
    });
  }
  toString() {
    return `(${this.origin.toString()}, ${this.size.toString()}, ${this.rotation}r)`;
  }
  equals(e) {
    return this.origin.equals(e.origin) && this.size.equals(e.size) && this.rotation === e.rotation && this.scale === e.scale;
  }
  contains(e) {
    return e.x >= this.x && e.y >= this.y && e.x < this.x + this.width && e.y < this.y + this.height;
  }
  getTopLeft() {
    return new o.default({
      x: this.x,
      y: this.y
    });
  }
  getTopCenter() {
    return new o.default({
      x: this.x + this.width / 2,
      y: this.y
    });
  }
  getTopRight() {
    return new o.default({
      x: this.x + this.width,
      y: this.y
    });
  }
  getLeftCenter() {
    return new o.default({
      x: this.x,
      y: this.y + this.height / 2
    });
  }
  getCenter() {
    return new o.default({
      x: this.x + this.width / 2,
      y: this.y + this.height / 2
    });
  }
  getRightCenter() {
    return new o.default({
      x: this.x + this.width,
      y: this.y + this.height / 2
    });
  }
  getBottomLeft() {
    return new o.default({
      x: this.x,
      y: this.y + this.height
    });
  }
  getBottomCenter() {
    return new o.default({
      x: this.x + this.width / 2,
      y: this.y + this.height
    });
  }
  getBottomRight() {
    return new o.default({
      x: this.x + this.width,
      y: this.y + this.height
    });
  }
  get origin() {
    return this._props.origin;
  }
  get size() {
    return this._props.size;
  }
  get x() {
    return this.origin.x;
  }
  get y() {
    return this.origin.y;
  }
  get width() {
    return this.size.width;
  }
  get height() {
    return this.size.height;
  }
  get rotation() {
    return this._props.rotation;
  }
  get scale() {
    return this._props.scale;
  }
  get dimension() {
    return this.size.dimension;
  }
}
exports.default = l;