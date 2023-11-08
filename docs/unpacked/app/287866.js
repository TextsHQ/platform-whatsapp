var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/530988.js"));
var o = r(require("../vendor/618446.js"));
var s = require("./490836.js");
var l = r(require("./31579.js"));
var u = r(require("./780246.js"));
var c = r(require("./527539.js"));
var d = require("./477540.js");
var p = require("./427698.js");
var f = require("./950079.js");
var _ = require("./272802.js");
var g = require("./319983.js");
var m = r(require("./556869.js"));
class h {
  static create() {
    const {
      backgroundColor: e,
      tintColor: t
    } = g.DEFAULT_DOMINANT_COLOR.getBackgroundAndTintColors();
    return new h({
      id: Math.random(),
      frame: new u.default({
        origin: new l.default({
          x: 0,
          y: 0
        }),
        size: new c.default({
          width: 0,
          height: 0
        }),
        rotation: 0,
        scale: 0
      }),
      layers: [],
      paintLayer: new p.DrawLayer({
        size: c.default.empty(),
        type: p.DrawLayerType.Paint
      }),
      outlineLayer: new p.DrawLayer({
        size: c.default.empty(),
        type: p.DrawLayerType.Outline
      }),
      background: null,
      selectedLayer: null,
      backgroundColor: e,
      tintColor: t,
      rotation: 0,
      cropFrame: new u.default({
        origin: new l.default({
          x: 0,
          y: 0
        }),
        size: new c.default({
          width: 0,
          height: 0
        }),
        rotation: 0,
        scale: 0
      })
    });
  }
  constructor(e) {
    this._props = Object.freeze((0, i.default)({}, e));
    Object.freeze(this);
  }
  _update(e) {
    const t = (0, i.default)({}, this._props);
    if (e.layers != null) {
      t.layers = e.layers;
    }
    if (e.paintLayer !== undefined) {
      t.paintLayer = e.paintLayer;
    }
    if (e.outlineLayer !== undefined) {
      t.outlineLayer = e.outlineLayer;
    }
    if (e.background !== undefined) {
      t.background = e.background;
    }
    if (e.frame !== undefined) {
      t.frame = e.frame;
      if (t.frame) {
        t.cropFrame = t.cropFrame.updateXYWidthHeight({
          x: 0,
          y: 0,
          width: t.frame.width,
          height: t.frame.height
        });
      }
    }
    if (e.cropFrame !== undefined) {
      t.cropFrame = e.cropFrame;
    }
    if (e.selectedLayer !== undefined) {
      t.selectedLayer = e.selectedLayer;
    }
    if (e.backgroundColor != null) {
      t.backgroundColor = e.backgroundColor;
    }
    if (e.tintColor != null) {
      t.tintColor = e.tintColor;
    }
    if (e.rotation != null) {
      t.rotation = e.rotation;
    }
    if ((0, o.default)(this._props, t)) {
      return this;
    } else {
      return new h(t);
    }
  }
  updateLayer(e, t) {
    if (e instanceof _.TextLayer && !(t instanceof _.TextLayer) || e instanceof f.ImageLayer && !(t instanceof f.ImageLayer)) {
      throw new TypeError("MediaEditorData: calling _updateLayer with two different layer types");
    }
    if (e === t) {
      return this;
    }
    const n = this.layers.map(n => n === e ? t : n);
    let r = this.selectedLayer;
    if (r === e) {
      r = t;
    }
    return this._update({
      layers: n,
      selectedLayer: r
    });
  }
  setBackground(e, t) {
    const {
      fitToSquare: n = false,
      scale: r = 1
    } = t != null ? t : {};
    const i = f.ImageLayer.create({
      type: f.ImageLayerType.Background,
      origin: new l.default({
        x: 0,
        y: 0
      }),
      image: e,
      editable: true,
      scale: r
    });
    const a = i.frame.dimension;
    const o = n ? u.default.create({
      x: 0,
      y: 0,
      width: a,
      height: a,
      scale: 1,
      rotation: 0
    }) : i.frame;
    const s = new l.default({
      x: (o.width - i.width) / 2,
      y: (o.height - i.height) / 2
    });
    const c = i.setScale(r).setOrigin(s);
    const d = (0, g.getDominantColor)(e);
    const {
      backgroundColor: _,
      tintColor: m
    } = d.getBackgroundAndTintColors();
    const h = new p.DrawLayer({
      size: o.size,
      type: p.DrawLayerType.Paint
    });
    const y = new p.DrawLayer({
      size: o.size,
      type: p.DrawLayerType.Outline
    });
    return this._update({
      background: c,
      frame: o,
      backgroundColor: _,
      tintColor: m,
      paintLayer: h,
      outlineLayer: y
    });
  }
  updateBackground(e, t, n, r) {
    var i;
    const a = (i = this.background) === null || i === undefined ? undefined : i.setImage(e).setOrigin(t).setRotation(n).setScale(r);
    return this._update({
      background: a,
      selectedLayer: a
    }).setBlurLayerBackground(a == null ? undefined : a.frame, e);
  }
  addImageLayer(e) {
    const t = f.ImageLayer.create(e);
    const n = [...this.layers, t];
    return this._update({
      layers: n,
      selectedLayer: t
    });
  }
  addImageLayerToCenter(e) {
    const t = this.toCanvasPoint(new l.default({
      x: this.screenWidth / 2,
      y: this.screenHeight / 2
    }));
    const n = new l.default({
      x: t.x - e.image.width / 2,
      y: t.y - e.image.height / 2
    });
    const r = (0, i.default)({
      origin: n,
      rotation: -this.rotation
    }, e);
    return this.addImageLayer(r);
  }
  addBlurLayer(e) {
    const t = d.BlurLayer.create(e);
    const n = [...this.layers, t];
    return this._update({
      layers: n,
      selectedLayer: t
    });
  }
  addBlurLayerToCenter(e) {
    var t;
    var n;
    var r;
    var a;
    const o = this.toCanvasPoint(new l.default({
      x: this.screenWidth / 2,
      y: this.screenHeight / 2
    }));
    const s = new l.default({
      x: o.x - ((t = (n = e.size) === null || n === undefined ? undefined : n.width) !== null && t !== undefined ? t : e.image.width) / 2,
      y: o.y - ((r = (a = e.size) === null || a === undefined ? undefined : a.height) !== null && r !== undefined ? r : e.image.height) / 2
    });
    const u = (0, i.default)({
      origin: s
    }, e);
    return this.addBlurLayer(u);
  }
  setBlurLayerBackground(e, t) {
    const n = this.layers.map(n => {
      let r = n;
      if (r instanceof d.BlurLayer) {
        if (t != null) {
          r = r.setImage(t);
        }
        if (e != null) {
          r = r.setBlurBackgroundFrame(e);
        }
      }
      return r;
    });
    return this._update({
      layers: n
    });
  }
  addTextLayer(e) {
    const t = e instanceof _.TextLayer ? e : _.TextLayer.create((0, i.default)((0, i.default)({}, e), {}, {
      rotation: -this.rotation
    }));
    const n = [...this.layers, t];
    return this._update({
      layers: n,
      selectedLayer: t
    });
  }
  setText(e, t) {
    return this.updateLayer(e, e.setText(t));
  }
  setTextColor(e, t) {
    return this.updateLayer(e, e.setTextColor(t));
  }
  setTextBackground(e, t) {
    return this.updateLayer(e, e.setTextBackground(t));
  }
  setFont(e, t) {
    return this.updateLayer(e, e.setFont(t));
  }
  setAlignment(e, t) {
    return this.updateLayer(e, e.setAlignment(t));
  }
  setBlurMode(e, t) {
    return this.updateLayer(e, e.setBlurMode(t));
  }
  setBlurRadius(e, t) {
    return this.updateLayer(e, e.setBlurRadius(t));
  }
  setBlurBackgroundFrame(e, t) {
    return this.updateLayer(e, e.setBlurBackgroundFrame(t));
  }
  setRotation(e) {
    if (e % 90 != 0) {
      throw (0, m.default)("canvas can only be rotated at a 90 degrees interval");
    }
    return this._update({
      rotation: e % 360
    });
  }
  setCrop(e, t) {
    if (e.x < 0 || e.y < 0 || e.x + t.width > this.width || e.y + t.height > this.height) {
      throw (0, m.default)("canvas crop must stays within the frame bound");
    }
    const n = new u.default({
      origin: e,
      size: t,
      rotation: 0,
      scale: 0
    });
    return this._update({
      cropFrame: n
    });
  }
  addEmptyTextLayer(e, t) {
    const n = {
      origin: new l.default({
        x: this.width / 4,
        y: this.height / 2
      }),
      text: "",
      textColor: e,
      textBackground: false,
      font: t,
      alignment: s.TextAlignment.CENTER
    };
    return this.addTextLayer(n);
  }
  addPaintPath(e) {
    const t = this.paintLayer.addPath(e);
    return this._update({
      paintLayer: t
    });
  }
  addOutlinePath(e) {
    const t = this.outlineLayer.addPath(e);
    return this._update({
      outlineLayer: t
    });
  }
  clearOutlinePaths() {
    const e = this.outlineLayer.clearPaths();
    return this._update({
      outlineLayer: e
    });
  }
  translateLayer(e, t) {
    return this.updateLayer(e, e.setOrigin(t));
  }
  translateBackground(e) {
    var t;
    const n = (t = this.background) === null || t === undefined ? undefined : t.setOrigin(e);
    return this._update({
      background: n,
      selectedLayer: n
    }).setBlurLayerBackground(n == null ? undefined : n.frame);
  }
  transformLayer(e, t, n, r) {
    let i = e;
    if (r != null && e instanceof d.BlurLayer) {
      i = e.setFrame(r);
    }
    i = i.setRotation(t).setScale(n);
    return this.updateLayer(e, i);
  }
  transformBackground(e, t) {
    var n;
    const r = (n = this.background) === null || n === undefined ? undefined : n.setRotation(e).setScale(t);
    return this._update({
      background: r,
      selectedLayer: r
    }).setBlurLayerBackground(r == null ? undefined : r.frame);
  }
  setSelectedLayer(e) {
    return this._update({
      selectedLayer: e
    });
  }
  clearSelectedLayer() {
    return this._update({
      selectedLayer: null
    });
  }
  deleteLayer(e) {
    e.delete();
    let t = {
      layers: this.layers.filter(t => t !== e)
    };
    if (e === this.selectedLayer) {
      t = (0, i.default)((0, i.default)({}, t), {}, {
        selectedLayer: null
      });
    }
    return this._update(t);
  }
  deleteAllLayers() {
    this.layers.forEach(e => e.delete());
    return this._update({
      layers: [],
      paintLayer: new p.DrawLayer({
        size: this.size,
        type: p.DrawLayerType.Paint
      }),
      outlineLayer: new p.DrawLayer({
        size: this.size,
        type: p.DrawLayerType.Outline
      }),
      selectedLayer: null
    });
  }
  hasEdits() {
    return !this.paintLayer.isEmpty() || !this.outlineLayer.isEmpty() || this.layers.length > 0 || this.rotation !== 0 || !this.size.equals(this._props.cropFrame.size);
  }
  get layers() {
    return this._props.layers;
  }
  get lastTextLayer() {
    const e = (0, a.default)(this.layers, e => e instanceof _.TextLayer);
    if (e instanceof _.TextLayer) {
      return e;
    } else {
      return null;
    }
  }
  get paintLayer() {
    return this._props.paintLayer;
  }
  get outlineLayer() {
    return this._props.outlineLayer;
  }
  get background() {
    return this._props.background;
  }
  get selectedLayer() {
    return this._props.selectedLayer;
  }
  get backgroundColor() {
    return this._props.backgroundColor;
  }
  get tintColor() {
    return this._props.tintColor;
  }
  get size() {
    return this._props.frame.size;
  }
  get frame() {
    return this._props.frame;
  }
  get width() {
    return this._props.frame.width;
  }
  get height() {
    return this._props.frame.height;
  }
  get cropWidth() {
    return this._props.cropFrame.width;
  }
  get cropHeight() {
    return this._props.cropFrame.height;
  }
  get cropOrigin() {
    return this._props.cropFrame.origin;
  }
  get cropSize() {
    return this._props.cropFrame.size;
  }
  get cropCenter() {
    return this._props.cropFrame.getCenter();
  }
  get screenWidth() {
    if (this.rotation % 180 == 0) {
      return this.cropWidth;
    } else {
      return this.cropHeight;
    }
  }
  get screenHeight() {
    if (this.rotation % 180 == 0) {
      return this.cropHeight;
    } else {
      return this.cropWidth;
    }
  }
  get canvasCenter() {
    return new l.default({
      x: this.width / 2,
      y: this.height / 2
    });
  }
  get rotation() {
    return this._props.rotation;
  }
  get id() {
    return this._props.id;
  }
  toScreenPoint(e) {
    const t = Math.max(this.width, this.height);
    const n = new l.default({
      x: t / 2,
      y: t / 2
    });
    const r = new l.default({
      x: e.x + (t - this.width) / 2,
      y: e.y + (t - this.height) / 2
    }).rotate(n, this.rotation);
    const i = new l.default({
      x: this.cropCenter.x + (t - this.width) / 2,
      y: this.cropCenter.y + (t - this.height) / 2
    }).rotate(n, this.rotation);
    const a = new l.default({
      x: i.x - this.screenWidth / 2,
      y: i.y - this.screenHeight / 2
    });
    return new l.default({
      x: r.x - a.x,
      y: r.y - a.y
    });
  }
  toCanvasPoint(e) {
    const t = Math.max(this.width, this.height);
    const n = new l.default({
      x: t / 2,
      y: t / 2
    });
    const r = this.cropCenter.rotate(n, this.rotation);
    const i = new l.default({
      x: r.x - this.screenWidth / 2,
      y: r.y - this.screenHeight / 2
    });
    const a = new l.default({
      x: e.x + i.x,
      y: e.y + i.y
    }).rotate(n, -this.rotation);
    return new l.default({
      x: a.x,
      y: a.y
    });
  }
  resetCropRotate() {
    return this.setRotation(0).setCrop(new l.default({
      x: 0,
      y: 0
    }), new c.default({
      width: this.width,
      height: this.height
    }));
  }
  isRotated() {
    return this.rotation !== 0;
  }
  isCropped() {
    return !this.cropOrigin.equals(new l.default({
      x: 0,
      y: 0
    })) || !this.cropSize.equals(this.size);
  }
  isOutlined() {
    return !this.outlineLayer.isEmpty();
  }
}
exports.default = h;