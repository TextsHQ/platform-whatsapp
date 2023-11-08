var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusV3LinkPreview = function (e) {
  let {
    msg: t,
    length: n
  } = e;
  const a = n < 250;
  const c = (0, l.displayHighQualityLinkPreview)(t.unsafe());
  const [f, p] = (0, i.useState)(false);
  const m = (0, s.default)();
  const {
    thumbnail: h
  } = t;
  (0, i.useEffect)(() => {
    if (c && a || !h) {
      return;
    }
    const e = new Image();
    e.onload = () => {
      if (m.aborted) {
        return;
      }
      const t = e.width > 300;
      p(t);
    };
    e.src = `data:image/jpeg;base64,${h}`;
  }, [h, c, a]);
  return i.default.createElement("div", {
    className: (0, u.default)(d.linkPreview, n <= 250 && d.smallLinkPreview)
  }, i.default.createElement(o.default, {
    msg: t,
    theme: a && (c || f) ? "high-quality" : undefined,
    displayType: r.DISPLAY_TYPE.STATUS
  }));
};
var r = require("../app/356097.js");
var o = a(require("./965854.js"));
var l = require("../app/860888.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var u = a(require("../app/156720.js"));
var s = a(require("../app/895851.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = {
  linkPreview: {
    display: "p357zi0d",
    flexShrink: "m0h2a7mj",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    pointerEvents: "jv8uhy2r",
    width: "ln8gz9je",
    marginBottom: "iyjcf3gk",
    textAlign: "rk2490ta"
  },
  smallLinkPreview: {
    maxWidth: "c6qoq7mr"
  }
};