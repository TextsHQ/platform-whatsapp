var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextLayer = exports.DEFAULT_FONT_SIZE = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/618446.js"));
var o = require("./358369.js");
var s = r(require("./31579.js"));
var l = r(require("./780246.js"));
var u = r(require("./527539.js"));
var c = require("./102826.js");
var d = require("./674394.js");
var p = require("./385323.js");
var f = require("./920202.js");
exports.DEFAULT_FONT_SIZE = 18;
const _ = {
  lineVerticalPadding: 6,
  lineHorizontalPadding: 8,
  layerPadding: 6,
  backgroundBorderRadius: 5,
  backgroundShadow: {
    offsetX: 0,
    offsetY: 1,
    radius: 6,
    spread: 0,
    color: new c.Color(0, 0, 0, 0.32)
  }
};
class g {
  static create(e) {
    var t;
    const n = [];
    const r = m(n, _);
    let i = 0;
    if (e.rotation != null) {
      i = e.rotation;
    }
    return new g({
      id: (0, d.generateLayerId)("text"),
      text: "",
      textColor: e.textColor,
      textBackground: e.textBackground,
      font: e.font,
      alignment: e.alignment,
      lines: n,
      frame: new l.default({
        origin: new s.default({
          x: e.origin.x - r.width / 2,
          y: e.origin.y - r.height / 2
        }),
        size: r,
        rotation: i,
        scale: (t = e.scale) !== null && t !== undefined ? t : 1
      }),
      maxWidth: 0,
      backgroundPath: ""
    }).setText(e.text);
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
  setText(e) {
    return this._update({
      text: e
    });
  }
  setTextColor(e) {
    return this._update({
      textColor: e
    });
  }
  setTextBackground(e) {
    return this._update({
      textBackground: e
    });
  }
  setFont(e) {
    return this._update({
      font: e
    });
  }
  setAlignment(e) {
    return this._update({
      alignment: e
    });
  }
  _update(e) {
    const t = (0, i.default)({}, this._props);
    if (e.frame != null) {
      t.frame = e.frame;
    }
    if (e.textColor != null) {
      t.textColor = e.textColor;
    }
    if (e.textBackground != null) {
      t.textBackground = e.textBackground;
    }
    if (e.text != null && e.text !== t.text || e.font != null && e.font !== t.font) {
      var n;
      var r;
      t.text = (n = e.text) !== null && n !== undefined ? n : t.text;
      t.font = (r = e.font) !== null && r !== undefined ? r : t.font;
      t.lines = (0, f.getLines)(t.text, t.font, 18, this._props.maxWidth);
      const i = m(t.lines, _);
      const a = t.frame.size;
      const o = t.frame.origin;
      const l = new s.default({
        x: o.x + a.width / 2 - i.width / 2,
        y: o.y + a.height / 2 - i.height / 2
      });
      t.frame = t.frame.update({
        origin: l,
        size: i
      });
    }
    if (e.alignment != null) {
      t.alignment = e.alignment;
    }
    if (this.font !== t.font || this.text !== t.text || this.alignment !== t.alignment) {
      const e = t.lines.map(e => e.width);
      t.backgroundPath = (0, p.generateTextBackgroundPath)(e, t.alignment, {
        lineVerticalPadding: this.styles.lineVerticalPadding,
        lineHorizontalPadding: this.styles.lineHorizontalPadding,
        lineHeight: this.lineHeight,
        arcSize: this.styles.backgroundBorderRadius
      });
    }
    if ((0, a.default)(this._props, t)) {
      return this;
    } else {
      return new g(t);
    }
  }
  get lines() {
    return this._props.lines;
  }
  get linesOfText() {
    return this.lines.map(e => e.text);
  }
  get lineWidths() {
    return this.lines.map(e => e.width);
  }
  get numberOfLines() {
    return this.lines.length;
  }
  get fontSize() {
    return 18;
  }
  get lineHeight() {
    return this.fontSize;
  }
  get styles() {
    return _;
  }
  get text() {
    return this._props.text;
  }
  get textColor() {
    return this._props.textColor;
  }
  get textBackgroundColor() {
    if (this.textColor.isLight()) {
      return (0, o.getColorValue)(o.ColorType.BLACK);
    } else {
      return (0, o.getColorValue)(o.ColorType.WHITE);
    }
  }
  get textBackground() {
    return this._props.textBackground;
  }
  get font() {
    return this._props.font;
  }
  get editable() {
    return true;
  }
  get id() {
    return this._props.id;
  }
  get alignment() {
    return this._props.alignment;
  }
  get frame() {
    return this._props.frame;
  }
  get origin() {
    return this.frame.origin;
  }
  get size() {
    return this.frame.size;
  }
  get x() {
    return this.frame.x;
  }
  get y() {
    return this.frame.y;
  }
  get width() {
    return this.frame.width;
  }
  get height() {
    return this.frame.height;
  }
  get rotation() {
    return this.frame.rotation;
  }
  get scale() {
    return this.frame.scale;
  }
  get backgroundPath() {
    return this._props.backgroundPath;
  }
}
function m(e, t) {
  const n = Math.max(...e.map(e => e.width), 0) + t.lineHorizontalPadding * 2 + t.layerPadding * 2;
  const r = e.length * (18 + t.lineVerticalPadding * 2) + t.layerPadding * 2;
  return new u.default({
    width: n,
    height: r
  });
}
exports.TextLayer = g;