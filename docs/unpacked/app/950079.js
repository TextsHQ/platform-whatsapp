var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageLayerType = exports.ImageLayer = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/618446.js"));
var o = r(require("./780246.js"));
var s = r(require("./527539.js"));
var l = require("./674394.js");
var u = r(require("./556869.js"));
const c = require("../vendor/76672.js").Mirrored(["Image", "Emoji", "Sticker", "Background"]);
exports.ImageLayerType = c;
class d {
  static create(e) {
    var t;
    const n = e.image.width;
    const r = e.image.height;
    if (!n || !r) {
      throw (0, u.default)("Image must have valid width and height");
    }
    return new d({
      id: (0, l.generateLayerId)("image"),
      type: e.type,
      image: e.image,
      editable: e.editable,
      frame: new o.default({
        origin: e.origin,
        size: new s.default({
          width: n,
          height: r
        }),
        rotation: (t = e.rotation) !== null && t !== undefined ? t : 0,
        scale: e.scale
      })
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
  _update(e) {
    const t = (0, i.default)({}, this._props);
    if (e.image != null) {
      const n = e.image.width;
      const r = e.image.height;
      if (!n || !r) {
        throw (0, u.default)("Image must have valid width and height");
      }
      t.image = e.image;
      t.frame = new o.default({
        origin: this.frame.origin,
        size: new s.default({
          width: n,
          height: r
        }),
        rotation: this.frame.rotation,
        scale: this.frame.scale
      });
    }
    if (e.editable != null) {
      t.editable = e.editable;
    }
    if (e.frame != null) {
      t.frame = e.frame;
    }
    if ((0, a.default)(this._props, t)) {
      return this;
    } else {
      return new d(t);
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
  isSticker() {
    return this._props.type === c.Sticker;
  }
  isEmoji() {
    return this._props.type === c.Emoji;
  }
  isBackground() {
    return this._props.type === c.Background;
  }
}
exports.ImageLayer = d;