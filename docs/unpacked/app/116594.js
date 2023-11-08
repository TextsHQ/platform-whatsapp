var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LargeEmoji = function (e) {
  const {
    emoji: t,
    size: n = v.MEDIUM,
    animation: r = false,
    element: l = "div",
    selectable: c,
    xstyle: m
  } = e;
  const T = (0, g.default)();
  const M = (0, f.useCallback)(() => {
    const t = h(e.emoji);
    return Boolean(t != null && S(t));
  }, [e.emoji]);
  const [A, b] = (0, f.useState)(M);
  (0, f.useEffect)(() => {
    b(M());
  }, [T, M]);
  const C = (0, a.classnamesConvertMeToStylexPlease)({
    [p.default.medium]: n === v.MEDIUM,
    [p.default.large]: n === v.LARGE,
    [p.default.xlarge]: n === v.XLARGE
  });
  let P;
  P = n === v.XLARGE || i.default.currentRes === "high" ? 64 : 40;
  const O = y(t, P);
  if (O == null) {
    return null;
  }
  if (A && r) {
    return f.default.createElement(l, {
      className: (0, a.classnamesConvertMeToStylexPlease)(p.default.animation, (0, _.default)(m))
    }, f.default.createElement(s.SelectableImg, {
      alt: t,
      className: (0, a.classnamesConvertMeToStylexPlease)(p.default.highRes, C),
      draggable: false,
      plainText: t,
      selectable: Boolean(c),
      src: o.default.ONE_BY_ONE_TRANS_GIF
    }), f.default.createElement(d.default, {
      className: (0, a.classnamesConvertMeToStylexPlease)(p.default.highRes, C, p.default.heartbeat),
      draggable: false,
      selectable: false,
      src: O
    }));
  }
  const I = A ? undefined : f.default.createElement(u.default, {
    key: "low-res",
    className: (0, a.classnamesConvertMeToStylexPlease)(p.default.lowRes, C),
    emoji: t,
    xstyle: m,
    selectable: c
  });
  const R = f.default.createElement(u.default, {
    key: "high-res",
    className: (0, a.classnamesConvertMeToStylexPlease)({
      [p.default.invisible]: !A,
      [p.default.highRes]: true,
      [C]: true
    }),
    emoji: t,
    xstyle: m,
    selectable: c,
    src: O,
    onLoad: () => {
      const e = h(t);
      if (e != null) {
        E(e);
      }
      b(true);
    }
  });
  return f.default.createElement("span", {
    className: p.default.wrapper
  }, I, R);
};
exports.SIZE = undefined;
var i = r(require("./861474.js"));
var a = require("./396574.js");
var o = r(require("./846870.js"));
var s = require("./306703.js");
var l = require("./70354.js");
var u = r(require("./225148.js"));
var c = require("./708733.js");
var d = r(require("./488922.js"));
var p = r(require("./178684.js"));
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
var _ = r(require("./156720.js"));
var g = r(require("./643934.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const {
  getGlyphId: h,
  getGlyphPath: y,
  markGlyphCached: E,
  isGlyphCached: S
} = l.EmojiUtil;
const v = c.LARGE_EMOJI_SIZE;
exports.SIZE = v;