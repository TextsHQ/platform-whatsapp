var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlurMode = exports.BlurLayer = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/618446.js"));
var o = r(require("./780246.js"));
var s = require("./674394.js");
var l = r(require("./556869.js"));
const u = require("../vendor/76672.js").Mirrored(["Pixelate", "Smooth"]);
exports.BlurMode = u;
class c {
  static create(e) {
    const t = e.image.width;
    const n = e.image.height;
    if (!t || !n) {
      throw (0, l.default)("Image must have valid width and height");
    }
    return new c({
      id: (0, s.generateLayerId)("blur"),
      image: e.image,
      editable: true,
      frame: new o.default({
        origin: e.origin,
        size: e.size,
        rotation: 0,
        scale: 1
      }),
      radius: e.radius,
      mode: e.mode,
      backgroundFrame: e.backgroundFrame,
      confirmed: false
    });
  }
  constructor(e) {
    this._props = Object.freeze((0, i.default)({}, e));
    Object.freeze(this);
  }
  delete() {}
  setOrigin(e) {
    return this._update({
      frame: this.frame.update({
        origin: e
      })
    });
  }
  setRotation(e) {
    return this._update({
      frame: this.frame.update({
        rotation: e
      })
    });
  }
  setScale(e) {
    return this._update({
      frame: this.frame.update({
        scale: e
      })
    });
  }
  setFrame(e) {
    return this._update({
      frame: e
    });
  }
  setImage(e) {
    return this._update({
      image: e
    });
  }
  setEditable(e) {
    return this._update({
      editable: e
    });
  }
  setBlurMode(e) {
    return this._update({
      mode: e
    });
  }
  setBlurRadius(e) {
    return this._update({
      radius: e
    });
  }
  setBlurBackgroundFrame(e) {
    return this._update({
      backgroundFrame: e
    });
  }
  setConfirmed() {
    return this._update({
      confirmed: true
    });
  }
  _update(e) {
    const t = (0, i.default)({}, this._props);
    if (e.image != null) {
      t.image = e.image;
    }
    if (e.editable != null) {
      t.editable = e.editable;
    }
    if (e.frame != null) {
      t.frame = e.frame;
    }
    if (e.radius != null) {
      t.radius = e.radius;
    }
    if (e.mode != null) {
      t.mode = e.mode;
    }
    if (e.backgroundFrame != null) {
      t.backgroundFrame = e.backgroundFrame;
    }
    if (e.confirmed != null) {
      t.confirmed = e.confirmed;
    }
    if ((0, a.default)(this._props, t)) {
      return this;
    } else {
      return new c(t).setConfirmed();
    }
  }
  get image() {
    return this._props.image;
  }
  get editable() {
    return this._props.editable;
  }
  get id() {
    return this._props.id;
  }
  get frame() {
    return this._props.frame;
  }
  get origin() {
    return this._props.frame.origin;
  }
  get size() {
    return this._props.frame.size;
  }
  get x() {
    return this._props.frame.x;
  }
  get y() {
    return this._props.frame.y;
  }
  get width() {
    return this._props.frame.width;
  }
  get height() {
    return this._props.frame.height;
  }
  get rotation() {
    return this._props.frame.rotation;
  }
  get scale() {
    return this._props.frame.scale;
  }
  get mode() {
    return this._props.mode;
  }
  get radius() {
    return this._props.radius;
  }
  get backgroundFrame() {
    return this._props.backgroundFrame;
  }
  get confirmed() {
    return this._props.confirmed;
  }
}
exports.BlurLayer = c;