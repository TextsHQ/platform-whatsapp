var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBorder = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "white";
  const r = document.createElement("canvas");
  const i = r.getContext("2d");
  const a = document.createElement("canvas");
  const o = a.getContext("2d");
  const s = t * 2;
  r.width = a.width = e.width + s * 2;
  r.height = a.height = e.height + s * 2;
  i.drawImage(e, s, s);
  o.shadowColor = n;
  o.shadowBlur = 1;
  for (let e = 0; e < s; e++) {
    o.drawImage(r, 0, 0);
    i.drawImage(a, 0, 0);
  }
  o.shadowColor = "rgba(0,0,0,0)";
  o.drawImage(e, s, s);
  return a;
};
exports.canvasToBlob = u;
exports.canvasToWebp = function (e) {
  if (l.default) {
    const t = e.getContext("2d").getImageData(0, 0, e.width, e.height);
    return (0, l.default)(t.data, e.width, e.height, {
      ensureExtendedFormat: true
    });
  }
  return u(e, "image/webp");
};
exports.contain = function (e, t) {
  const {
    width: n,
    height: r
  } = (0, o.boundHeightWidth)(e.height, e.width, t);
  if (n > e.width && r > e.height) {
    return e;
  }
  const i = document.createElement("canvas");
  const a = i.getContext("2d");
  i.width = n;
  i.height = r;
  a.drawImage(e, 0, 0, n, r);
  return i;
};
exports.copy = p;
exports.createCanvas = d;
exports.fillBackgroundWithGray = function (e) {
  const t = e.getContext("2d");
  t.fillStyle = "rgb(247,247,247)";
  t.fillRect(0, 0, e.width, e.height);
};
exports.generateMicroThumb = function () {
  return c.apply(this, arguments);
};
exports.getResizedDataUrl = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "image/jpeg";
  let n = arguments.length > 2 ? arguments[2] : undefined;
  const r = e.toDataURL(t);
  const i = (0, a.dataURLtoBlob)(r);
  if (i.size <= n) {
    return e.toDataURL(t);
  }
  for (let r = 0.9; r >= 0.1; r -= 0.1) {
    const i = e.toDataURL(t, r);
    if ((0, a.dataURLtoBlob)(i).size <= n) {
      return i;
    }
  }
  return null;
};
exports.resize = function (e, t, n) {
  const r = e.getContext("2d");
  const i = r.getImageData(0, 0, t, n);
  e.width = t;
  e.height = n;
  r.putImageData(i, 0, 0);
};
exports.rotate = function (e, t) {
  const n = t.x || 0;
  const r = t.y || 0;
  if (t.degrees) {
    t.radians = t.degrees * (Math.PI / 180);
  }
  e.translate(n, r);
  e.rotate(t.radians);
  e.translate(-n, -r);
};
exports.scale = function (e, t) {
  const n = e.getContext("2d");
  const r = p(e);
  const {
    width: i,
    height: a
  } = (0, o.aspectRatioScaled)(e.width / e.height, t);
  e.width = i;
  e.height = a;
  n.drawImage(r, 0, 0, i, a);
};
exports.square = function (e) {
  const t = e.getContext("2d");
  const n = e.width;
  const r = e.height;
  const i = t.getImageData(0, 0, n, r);
  const a = Math.max(n, r);
  e.width = a;
  e.height = a;
  t.clearRect(0, 0, n, r);
  t.putImageData(i, (a - n) / 2, (a - r) / 2, 0, 0, n, r);
};
exports.trim = function (e) {
  if (function (e) {
    const t = e.getContext("2d").getImageData(0, 0, e.width, e.height);
    const n = t.data.length / 4;
    let r;
    for (r = 0; r < n; r++) {
      if (t.data[r * 4 + 3] !== 0) {
        return false;
      }
    }
    return true;
  }(e)) {
    return;
  }
  const {
    left: t,
    top: n,
    right: r,
    bottom: i
  } = function (e) {
    const t = e.getContext("2d").getImageData(0, 0, e.width, e.height);
    const n = t.data.length / 4;
    let r;
    let i = 1 / 0;
    let a = 1 / 0;
    let o = 0;
    let s = 0;
    for (r = 0; r < n; r++) {
      if (t.data[r * 4 + 3] === 0) {
        continue;
      }
      const n = r % e.width;
      const l = Math.floor(r / e.width);
      if (n < i) {
        i = n;
      }
      if (n > o) {
        o = n;
      }
      if (l < a) {
        a = l;
      }
      if (l > s) {
        s = l;
      }
    }
    return {
      left: i,
      top: a,
      right: o,
      bottom: s
    };
  }(e);
  const a = i - n;
  const o = r - t;
  const s = e.getContext("2d").getImageData(t, n, o, a);
  const l = d(o, a);
  l.getContext("2d").putImageData(s, 0, 0);
  return l;
};
var i = r(require("../vendor/348926.js"));
var a = require("./437362.js");
var o = require("./172254.js");
var s = r(require("./756680.js"));
var l = r(require("./191687.js"));
function u(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "image/jpeg";
  if (e.toBlob) {
    return new Promise(function (n) {
      e.toBlob(n, t);
    });
  } else {
    return Promise.resolve((0, a.dataURLtoBlob)(e.toDataURL(t)));
  }
}
function c() {
  return (c = (0, i.default)(function* (e, t, n) {
    var r;
    var i;
    const a = n || {};
    const o = (r = a.mimetype) !== null && r !== undefined ? r : "image/jpeg";
    const l = (i = a.maxAttempts) !== null && i !== undefined ? i : 10;
    let c = 0.5;
    let p = e;
    let f = yield u(p, o);
    for (let n = 0; n < l && !(f.size <= t); n++) {
      const t = Math.floor(e.width * c);
      const n = Math.floor(e.height * c);
      p = d(t, n);
      p.getContext("2d").drawImage(e, 0, 0, t, n);
      f = yield u(p, o);
      c *= 0.5;
    }
    return {
      opaqueData: yield s.default.createFromData(f, o),
      width: p.width,
      height: p.height,
      dataUrl: p.toDataURL("image/jpeg")
    };
  })).apply(this, arguments);
}
function d(e, t) {
  const n = document.createElement("canvas");
  n.width = e;
  n.height = t;
  return n;
}
function p(e) {
  const t = d(e.width, e.height);
  t.getContext("2d").drawImage(e, 0, 0);
  return t;
}