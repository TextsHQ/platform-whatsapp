var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawLayerType = exports.DrawLayer = undefined;
var i = r(require("./256883.js"));
var a = r(require("./31579.js"));
var o = r(require("./780246.js"));
var s = require("./674394.js");
const l = require("../vendor/76672.js").Mirrored(["Paint", "Outline"]);
exports.DrawLayerType = l;
class u {
  constructor(e) {
    this._type = e.type;
    if (e.size != null) {
      const t = e.size;
      this._frame = new o.default({
        origin: new a.default({
          x: 0,
          y: 0
        }),
        size: t,
        rotation: 0,
        scale: 1
      });
      this._paths = [];
    } else if (e.frame != null && e.paths != null) {
      this._frame = e.frame;
      this._paths = e.paths;
    }
    if (e.id) {
      this._id = e.id;
    } else {
      this._id = (0, s.generateLayerId)(e.type);
    }
    Object.freeze(this);
  }
  delete() {}
  _update(e) {
    let t = this._paths;
    if (e.paths != null) {
      t = e.paths;
    }
    const n = this._frame;
    const r = this._type;
    return new u({
      id: this.id,
      paths: t,
      frame: n,
      type: r
    });
  }
  setOrigin() {
    throw new TypeError("MediaEditor:DrawLayer resetting origin is not allowed");
  }
  setRotation() {
    throw new TypeError("MediaEditor:DrawLayer resetting rotation is not allowed");
  }
  setScale() {
    throw new TypeError("MediaEditor:DrawLayer resetting scale is not allowed");
  }
  addPath(e) {
    const t = new i.default(e);
    const n = [...this._paths, t];
    return this._update({
      paths: n
    });
  }
  clearPaths() {
    return this._update({
      paths: []
    });
  }
  isEmpty() {
    return this._paths.length === 0;
  }
  getAllPoints() {
    return this.paths.reduce((e, t) => {
      if (!t.smoothing && e.length) {
        e.push(e[e.length - 1]);
      }
      if (t.isDrag()) {
        e.push(t.points[0]);
      }
      e.push(...t.points.flatMap(e => t.isSmooth() ? [e] : [e, e]));
      return e;
    }, []);
  }
  get paths() {
    return this._paths;
  }
  get editable() {
    return false;
  }
  get id() {
    return this._id;
  }
  get type() {
    return this._type;
  }
  get frame() {
    return this._frame;
  }
  get origin() {
    return this._frame.origin;
  }
  get size() {
    return this._frame.size;
  }
  get x() {
    return this._frame.x;
  }
  get y() {
    return this._frame.y;
  }
  get width() {
    return this._frame.width;
  }
  get height() {
    return this._frame.height;
  }
  get rotation() {
    return this._frame.rotation;
  }
  get scale() {
    return this._frame.scale;
  }
}
exports.DrawLayer = u;