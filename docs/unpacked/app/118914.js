var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImgWithFallback = function (e) {
  const {
    size: t = p.SMALL,
    fallbackSVG: n,
    className: r,
    loader: d = false,
    wrapOptions: g = {},
    transition: m,
    imgProps: h,
    theme: y,
    shape: E = s.DetailImageShape.Circle
  } = e;
  const [S, v] = (0, c.useState)(false);
  const {
    src: T,
    alt: M,
    crossOrigin: A,
    draggable: b
  } = h;
  const {
    centerWrapperChild: C,
    wrapperClassName: P
  } = g;
  const O = (0, o.classnamesConvertMeToStylexPlease)(u.default.avatarImage, {
    [u.default.isLoaded]: S,
    [u.default.transition]: m
  });
  const I = {
    height: _(t),
    width: _(t)
  };
  let R;
  if (d && !S) {
    R = c.default.createElement(a.default, null);
  }
  const N = c.default.createElement(l.default, {
    src: T,
    className: O,
    onLoad: () => {
      v(true);
    },
    alt: M,
    crossOrigin: A,
    draggable: b
  });
  const D = (0, i.default)(g) ? N : c.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(P, u.default.avatarWrapper, u.default.avatarImageWrapper, {
      [u.default.centerChild]: C,
      [u.default.isLoaded]: S,
      [u.default.transparent]: y === f.Transparent
    })
  }, N);
  const w = T !== "" ? c.default.createElement(c.default.Fragment, null, R, D) : null;
  return c.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(u.default.avatar, r, {
      [u.default.roundBorder]: E === s.DetailImageShape.Circle,
      [u.default.transparent]: y === f.Transparent,
      [u.default.avatarSquircle]: E === s.DetailImageShape.Squircle
    }),
    style: I
  }, w, !S && c.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)(P, u.default.avatarWrapper, u.default.avatarSvgWrapper, {
      [u.default.centerChild]: C,
      [u.default.transition]: m,
      [u.default.transparent]: y === f.Transparent
    })
  }, n));
};
exports.Theme = undefined;
var i = r(require("../vendor/441609.js"));
var a = r(require("./731792.js"));
var o = require("./396574.js");
var s = require("./23641.js");
var l = r(require("./488922.js"));
var u = r(require("./464261.js"));
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
}(require("../vendor/667294.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
  AUTO: "AUTO",
  NONE: "NONE"
};
const f = require("../vendor/76672.js").Mirrored(["Default", "Transparent"]);
function _(e) {
  switch (e) {
    case p.SMALL:
      return 49;
    case p.MEDIUM:
      return 100;
    case p.LARGE:
      return 200;
    case p.NONE:
      return;
    default:
      return e;
  }
}
exports.Theme = f;