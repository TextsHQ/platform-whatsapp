var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, c.useContext)(l.InitialEmojisCompletionContext);
  (0, c.useEffect)(() => {
    const n = f(e.emoji);
    if (n != null) {
      t.incrementLoadingEmojisCount();
      a.AssetLoader.loadEmoji(n, i.LOAD_PRIORITY.LAZY_LOAD_EMOJI).finally(() => {
        t.decrementLoadingEmojisCount();
      });
    }
  }, [t, e.emoji]);
  const {
    className: n,
    element: r,
    emoji: s,
    selectable: p,
    selected: m,
    size: h,
    src: y,
    onLoad: E,
    tabIndex: S,
    xstyle: v
  } = e;
  const T = f(s);
  if (T == null) {
    return null;
  }
  let M;
  let A;
  if (!y) {
    M = _(T, h);
    A = g(T, h);
  }
  const b = (0, o.classnamesConvertMeToStylexPlease)(n, A, {
    selected: m
  }, (0, d.default)(v));
  if (r === "span") {
    return c.default.createElement("span", {
      "data-emoji": s,
      className: b,
      "aria-label": s,
      style: M,
      onLoad: E,
      tabIndex: S,
      "data-unicode": e["data-unicode"],
      "data-variant": e["data-variant"],
      "data-emoji-index": e["data-emoji-index"]
    });
  }
  return c.default.createElement(u.default, {
    alt: s,
    className: b,
    draggable: false,
    onLoad: E,
    plainText: s,
    selectable: p,
    style: M,
    src: y
  });
};
var i = require("./135630.js");
var a = require("./789379.js");
var o = require("./396574.js");
var s = require("./70354.js");
var l = require("./413677.js");
var u = r(require("./488922.js"));
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var d = r(require("./156720.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const {
  getGlyphId: f,
  getStyle: _,
  getCssClasses: g
} = s.EmojiUtil;