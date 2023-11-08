var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = require("../app/690495.js");
var l = require("../app/676345.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var s = a(require("../app/576191.js"));
var c = a(require("../app/38085.js"));
var d = a(require("../app/83233.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  chat: {
    position: "g0rxnol2",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    pointerEvents: "jzetg1s3",
    backgroundColor: "ihvf49ua",
    minHeight: "a9wlzsxf",
    cursor: "ajgl1lbb",
    ":hover": {
      backgroundColor: "os03hap6"
    }
  },
  active: {
    backgroundColor: "i16jpgpt"
  },
  border: {
    borderTop: "swyb62mu"
  },
  chatTitle: {
    display: "p357zi0d",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "enbbiyaj",
    lineHeight: "erpdyial",
    color: "tl2vja3b",
    overflowWrap: "fd365im1"
  },
  chatStatus: {
    fontSize: "f8jlpxt4",
    lineHeight: "r5qsrrlp",
    whiteSpace: "bbv8nyr4",
    color: "pm5hny62",
    fontWeight: "e1gr2w1z",
    width: "ln8gz9je"
  },
  chatTimestamp: {
    fontSize: "dsh4tgtl",
    lineHeight: "omzt3tek",
    color: "q70jrbp7"
  },
  heightStyleSmall: {
    minHeight: "mmm5sce3"
  },
  heightStyleMedium: {
    minHeight: "jfhvckv6"
  },
  heightStyleLarge: {
    minHeight: "aq3cbhnq"
  },
  heightStyleXLarge: {
    minHeight: "a9wlzsxf"
  }
};
const m = (0, i.forwardRef)((e, t) => {
  const {
    image: n,
    primary: a,
    primaryDetail: f,
    secondary: m,
    secondaryDetail: h,
    active: g,
    focusable: E = false,
    onClick: v,
    onMouseDown: _,
    onMouseEnter: y,
    onMouseOver: C,
    onMouseLeave: b,
    onContextMenu: M,
    testid: S,
    ariaLabel: T,
    heightStyle: w,
    mediaPreview: A,
    hideMeta: P = false,
    firstCellInList: O
  } = e;
  const [k, D] = (0, d.default)(v);
  const [I, R] = (0, s.default)();
  const N = (0, c.default)(t, k, I);
  const x = i.default.createElement("div", {
    className: (0, u.default)(l.uiMargin.end12)
  }, n);
  const L = i.default.createElement("div", {
    className: (0, u.default)(p.chatTitle)
  }, a);
  const j = i.default.createElement("div", {
    className: (0, u.default)([p.chatStatus, l.uiMargin.bottom12])
  }, m);
  const B = i.default.createElement("div", {
    className: (0, u.default)(p.chatTimestamp)
  }, f);
  const F = P ? null : i.default.createElement(o.FlexRow, {
    align: "center"
  }, h, B);
  const G = P ? null : A;
  return i.default.createElement("div", (0, r.default)({
    ref: N
  }, E && g == null && D, {
    className: (0, u.default)([p.chat, (g === true || R) && p.active, (w == null || w === "small") && p.heightStyleSmall, w === "medium" && p.heightStyleMedium, w === "large" && p.heightStyleLarge, w === "xlarge" && p.heightStyleXLarge]),
    onClick: v,
    onMouseDown: _,
    onMouseEnter: y,
    onMouseOver: C,
    onMouseLeave: b,
    onContextMenu: M,
    "aria-label": T
  }), i.default.createElement(o.FlexRow, {
    align: "center",
    xstyle: [l.uiMargin.horiz13, l.uiPadding.vert12, O !== true && p.border]
  }, x, L), i.default.createElement(o.FlexRow, {
    align: "start",
    justify: "all",
    xstyle: l.uiMargin.horiz13
  }, i.default.createElement(o.FlexColumn, {
    align: "start",
    grow: 1
  }, j, F), G));
});
m.displayName = "CellFrame";
var h = m;
exports.default = h;