var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATA_URL = exports.CANVAS = exports.BlackVideoThumbnailError = exports.BLOB = undefined;
exports.base64ImageToCanvas = function () {
  return F.apply(this, arguments);
};
exports.crop = function () {
  return N.apply(this, arguments);
};
exports.generateLinkPreview = function () {
  return w.apply(this, arguments);
};
exports.generateVideoThumbsAndDuration = function () {
  return R.apply(this, arguments);
};
exports.isCached = function (e) {
  if (!e) {
    return false;
  }
  const t = new Image();
  t.src = e;
  return !!t.complete;
};
exports.rotateAndResize = function (e, t, n, r) {
  const {
    transparency: i = false,
    fitToSquare: a = false,
    minDimension: o = 0
  } = r != null ? r : {};
  const s = new ArrayBuffer(0);
  let u;
  let g;
  let h;
  if (e instanceof HTMLCanvasElement) {
    g = Promise.resolve(e);
    h = Promise.resolve(s);
  } else {
    u = window.URL.createObjectURL(e);
    g = _.loadImage(u);
    h = (0, d.blobToArrayBuffer)(e).catch(e => {
      __LOG__(3)`ImageUtils::rotateAndResize error: ${e}`;
      return s;
    });
  }
  return (0, l.promiseProps)({
    buffer: h,
    image: g
  }).then(e => {
    var r;
    let {
      buffer: s,
      image: u
    } = e;
    let d = {};
    try {
      d = (0, S.default)(s);
    } catch (e) {}
    let _ = 0;
    if (!((r = (0, m.getModernizr)()) === null || r === undefined ? undefined : r.exiforientation)) {
      switch (d.orientation || "UNKNOWN") {
        case "right-top":
          _ = 1;
          break;
        case "left-bottom":
          _ = -1;
          break;
        case "bottom-right":
          _ = 2;
      }
    }
    const g = document.createElement("canvas");
    const h = u.naturalWidth || u.width;
    const y = u.naturalHeight || u.height;
    const E = Math.max(h, y);
    const v = g.getContext("2d");
    const T = {};
    if (!_) {
      const e = (0, p.boundHeightWidth)(y, h, t);
      let r;
      let d;
      let _ = n & C;
      if (s && _ && h === e.width && y === e.height) {
        try {
          const e = (0, f.cleanJPEG)(s);
          T.blob = e;
          _ = false;
          r = h;
          d = y;
        } catch (e) {
          __LOG__(2)`Could not parse JPEG: ${e.message}`;
        }
      }
      if (_ || n & ~C) {
        g.width = e.width;
        g.height = e.height;
        if (!i) {
          (0, c.fillBackgroundWithGray)(g);
        }
        v.drawImage(u, 0, 0, g.width, g.height);
        if (a) {
          (0, c.square)(g);
          T.blob = undefined;
        }
        if (E < o) {
          (0, c.scale)(g, o);
          T.blob = undefined;
        }
        r = g.width;
        d = g.height;
        B(T, g, n, i);
      }
      return (0, l.promiseProps)(T).then(e => ({
        width: r,
        height: d,
        images: e
      }));
    }
    switch (_) {
      case 1:
      case -1:
        {
          const e = Math.max(h, y);
          const r = e / 2;
          g.width = g.height = e;
          if (!i) {
            (0, c.fillBackgroundWithGray)(g);
          }
          (0, c.rotate)(v, {
            x: r,
            y: r,
            degrees: _ * 90
          });
          if (_ === 1) {
            v.drawImage(u, 0, e - y);
          } else {
            v.drawImage(u, e - h, 0);
          }
          (0, c.rotate)(v, {
            x: r,
            y: r,
            degrees: _ * -90
          });
          (0, c.resize)(g, y, h);
          if (a) {
            (0, c.square)(g);
          }
          if (E < o) {
            (0, c.scale)(g, o);
          }
          const s = (0, c.contain)(g, t);
          B(T, s, n, i);
          return (0, l.promiseProps)(T).then(e => ({
            width: s.width,
            height: s.height,
            images: e
          }));
        }
      case 2:
        {
          const e = (0, p.boundHeightWidth)(y, h, t);
          const r = g.width = e.width;
          const s = g.height = e.height;
          if (!i) {
            (0, c.fillBackgroundWithGray)(g);
          }
          (0, c.rotate)(v, {
            x: r / 2,
            y: s / 2,
            degrees: _ * 90
          });
          v.drawImage(u, 0, 0, r, s);
          (0, c.rotate)(v, {
            x: r / 2,
            y: s / 2,
            degrees: _ * -90
          });
          if (a) {
            (0, c.square)(g);
          }
          if (E < o) {
            (0, c.scale)(g, o);
          }
          B(T, g, n, i);
          return (0, l.promiseProps)(T).then(e => ({
            width: g.width,
            height: g.height,
            images: e
          }));
        }
    }
  }).finally(() => {});
};
exports.toDataUrl = function () {
  return L.apply(this, arguments);
};
exports.toDataUrlWithRoundedCorners = function () {
  return D.apply(this, arguments);
};
exports.toWebpSticker = function () {
  return U.apply(this, arguments);
};
exports.urlToFile = function () {
  return x.apply(this, arguments);
};
var a = i(require("../vendor/348926.js"));
var o = require("./477689.js");
var s = require("./672076.js");
var l = require("./423660.js");
var u = require("./389719.js");
var c = require("./588750.js");
var d = require("./698210.js");
var p = require("./172254.js");
var f = require("./176779.js");
var _ = T(require("./197636.js"));
var g = T(require("./288057.js"));
var m = require("./223713.js");
var h = require("./432938.js");
var y = require("./368170.js");
var E = i(require("./556869.js"));
var S = i(require("../vendor/326642.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function T(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}
const M = 2;
const A = 4;
const b = 1;
exports.DATA_URL = b;
const C = M;
exports.BLOB = C;
const P = A;
exports.CANVAS = P;
class O extends (0, o.customError)("BlackVideoThumbnailError") {}
exports.BlackVideoThumbnailError = O;
O.message = "Generated video thumbnail is black";
const I = e => {
  let {
    video: t,
    fullWidth: n,
    fullHeight: r,
    maxDimension: i
  } = e;
  const a = document.createElement("canvas");
  const {
    width: o,
    height: s
  } = (0, p.boundHeightWidth)(r, n, i);
  a.width = o;
  a.height = s;
  const l = a.getContext("2d");
  l.drawImage(t, 0, 0, o, s);
  const u = l.getImageData(0, 0, o, s);
  return {
    thumb: {
      url: a.toDataURL("image/jpeg"),
      width: o,
      height: s,
      fullWidth: n,
      fullHeight: r
    },
    imageData: u
  };
};
function R() {
  return (R = (0, a.default)(function* (e) {
    const {
      file: t,
      maxDimensions: n,
      debugHint: i,
      throwOnBlack: a = false
    } = e;
    const {
      video: o,
      fullWidth: l,
      fullHeight: u
    } = yield _.loadVideo(t);
    if (y.UA.isBuggyVideoLoad) {
      const e = 50;
      const t = 5000 / e;
      return (0, s.exponentialBackoff)({
        minTimeout: e,
        maxTimeout: e,
        retries: t,
        signal: new r().signal,
        factor: 1
      }, (e, r) => {
        const s = [];
        let c;
        for (c of n) {
          const {
            thumb: n,
            imageData: d
          } = I({
            video: o,
            fullHeight: u,
            fullWidth: l,
            maxDimension: c
          });
          if (j(d)) {
            if (r < t) {
              if (r === 0) {
                __LOG__(2)`generateVideoThumbsAndDuration: Setting video.currentTime to 0 to attempt to unblock the video`;
              }
              o.currentTime = 0;
              if (r === 0) {
                __LOG__(3)`generateVideoThumbsAndDuration: Thumb generation had to be retried, from ${i}`;
              }
              return e((0, E.default)("retry"));
            }
            __LOG__(4, undefined, new Error(), true)`generateVideoThumbsAndDuration: Failed to generate video thumbnail from ${i}`;
            SEND_LOGS(`thumbnail-generation-failed-${i}`, 0.001);
            if (a) {
              throw new O();
            }
          }
          s.push(n);
        }
        const d = {
          duration: ~~o.seekable.end(0),
          thumbs: s
        };
        _.disposeVideo(o);
        return Promise.resolve(d);
      });
    }
    try {
      const e = n.map(e => {
        const {
          thumb: t,
          imageData: n
        } = I({
          video: o,
          fullHeight: u,
          fullWidth: l,
          maxDimension: e
        });
        if (j(n) && (__LOG__(4, undefined, new Error(), true)`generateVideoThumbsAndDuration: Failed to generate video thumbnail from ${i}`, SEND_LOGS(`thumbnail-generation-failed-${i}`, 0.001), a)) {
          throw new O();
        }
        return t;
      });
      return {
        duration: ~~o.seekable.end(0),
        thumbs: e
      };
    } finally {
      _.disposeVideo(o);
    }
  })).apply(this, arguments);
}
function N() {
  return (N = (0, a.default)(function* (e, t, n, r, i, a, o) {
    let s = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : b;
    const u = e instanceof HTMLCanvasElement ? e : yield _.loadImage(e);
    const c = document.createElement("canvas");
    const d = c.getContext("2d");
    if (a == null || o == null) {
      c.height = i;
      c.width = r;
      d.drawImage(u, t, n, r, i);
    } else {
      c.height = o;
      c.width = a;
      d.drawImage(u, t, n, r, i, 0, 0, a, o);
    }
    const p = {};
    B(p, c, s);
    const f = yield (0, l.promiseProps)(p);
    return {
      images: f,
      width: r,
      height: i
    };
  })).apply(this, arguments);
}
function D() {
  return (D = (0, a.default)(function* (e) {
    const t = e instanceof HTMLCanvasElement ? e : yield _.loadImage(e);
    const n = document.createElement("canvas");
    const r = n.getContext("2d");
    n.height = t.height;
    n.width = t.width;
    const i = Math.min(t.width, t.height);
    r.beginPath();
    r.arc(t.width / 2, t.height / 2, i / 2, 0, Math.PI * 2, true);
    r.clip();
    r.closePath();
    r.drawImage(t, 0, 0);
    return n.toDataURL("image/png");
  })).apply(this, arguments);
}
function w() {
  return (w = (0, a.default)(function* (e) {
    try {
      const t = yield _.loadImage(e);
      const n = 100;
      const r = 140;
      if (t.width < n || t.height < n) {
        __LOG__(2)`Image size too small for link preview`;
        return null;
      }
      const i = document.createElement("canvas");
      const a = i.getContext("2d");
      i.height = r;
      i.width = r;
      const o = Math.min(t.width, t.height);
      const s = (t.width - o) / 2;
      const l = (t.height - o) / 2;
      a.drawImage(t, s, l, o, o, 0, 0, r, r);
      return i.toDataURL("image/jpeg").replace(/^data:image\/jpeg;base64,/, "");
    } catch (e) {
      __LOG__(2)`link preview image generation failed: `;
      return null;
    }
  })).apply(this, arguments);
}
function L() {
  return (L = (0, a.default)(function* (e) {
    try {
      const t = yield _.loadImage(e);
      const n = document.createElement("canvas");
      const r = n.getContext("2d");
      n.height = t.height;
      n.width = t.width;
      r.drawImage(t, 0, 0);
      return n.toDataURL("image/jpeg").replace(/^data:image\/jpeg;base64,/, "");
    } catch (e) {
      __LOG__(2)`data URL conversion failed: `;
      return null;
    }
  })).apply(this, arguments);
}
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, a.default)(function* (e, t) {
    try {
      const n = yield e.arrayBuffer();
      const r = (0, u.addWebpMetadata)(n, t);
      const i = new Uint8Array(r);
      return new Blob([i], {
        type: "image/webp"
      });
    } catch (t) {
      __LOG__(4, undefined, new Error(), true)`addMetadataToSticker: Unable to add metadata to Sticker`;
      SEND_LOGS("unable-to-add-sticker-metadata");
      return e;
    }
  })).apply(this, arguments);
}
function U() {
  return (U = (0, a.default)(function* (e) {
    try {
      const t = window.URL.createObjectURL(e);
      const n = yield _.loadImage(t);
      window.URL.revokeObjectURL(t);
      const r = h.STICKER_DIMENSION;
      const i = (0, c.createCanvas)(r, r);
      const a = i.getContext("2d");
      const {
        width: o,
        height: s
      } = (0, p.aspectRatioScaled)(n.width / n.height, r);
      a.drawImage(n, (r - o) / 2, (r - s) / 2, o, s);
      const l = yield (0, c.canvasToWebp)(i);
      return yield k(l, {
        isFirstParty: false,
        isFromStickerMaker: true,
        emojis: [],
        stickerPackPublisher: "WhatsApp Sticker Maker"
      });
    } catch (e) {
      __LOG__(2)`Webp sticker file generation failed: `;
      throw e;
    }
  })).apply(this, arguments);
}
function x() {
  return (x = (0, a.default)(function* (e) {
    try {
      const t = yield _.loadImage(e);
      const n = document.createElement("canvas");
      n.width = t.naturalWidth;
      n.height = t.naturalHeight;
      const r = n.getContext("2d");
      (0, c.fillBackgroundWithGray)(n);
      r.drawImage(t, 0, 0);
      return (0, c.canvasToBlob)(n);
    } catch (t) {
      throw new g.MediaDragDropError("unable to render image", e);
    }
  })).apply(this, arguments);
}
function B(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
  const i = r ? "image/png" : "image/jpeg";
  if (!e.blob && n & C) {
    e.blob = (0, c.canvasToBlob)(t, i);
  }
  if (!e.dataUrl && n & b) {
    e.dataUrl = Promise.resolve(t.toDataURL(i));
  }
  if (!e.canvas && n & P) {
    e.canvas = Promise.resolve(t);
  }
}
function F() {
  return (F = (0, a.default)(function* (e) {
    const t = yield _.loadImage(e);
    const n = (0, c.createCanvas)(t.width, t.height);
    n.getContext("2d").drawImage(t, 0, 0);
    return n;
  })).apply(this, arguments);
}
function j(e) {
  const {
    data: t,
    width: n,
    height: r
  } = e;
  for (let i = 0; i < r; i++) {
    const a = (i * n + Math.round(i * (n / r))) * 4;
    if (t[a] !== 0) {
      return false;
    }
    if (t[a + 1] !== 0) {
      return false;
    }
    if (e.data[a + 2] !== 0) {
      return false;
    }
    const o = e.data[a + 3];
    if (o !== 0 && o !== 255) {
      return false;
    }
  }
  return true;
}