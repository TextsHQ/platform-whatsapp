var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./396574.js");
var s = r(require("./83162.js"));
var l = function (e, t) {
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
var u = r(require("./156720.js"));
var c = r(require("./576191.js"));
var d = r(require("./38085.js"));
const p = ["testid", "className", "children", "dataTab", "role", "disabled", "onClick", "onMouseEnter", "onMouseLeave", "onMouseDown", "title", "type", "onFocus", "onBlur", "xstyle", "tabIndex"];
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
const _ = {
  button: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    fontFamily: "shdiholb",
    fontSize: "phqmzxqs",
    color: "gtscxtjd",
    cursor: "ajgl1lbb",
    backgroundColor: "thr4l2wc",
    borderTop: "cc8mgx9x",
    borderEnd: "eta5aym1",
    borderBottom: "d9802myq",
    borderStart: "e4xiuwjv"
  },
  focused: {
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    boxShadow: "lgxs6e1q"
  },
  disabled: {
    cursor: "rcg4vxlo"
  }
};
function g(e, t) {
  let {
    testid: n,
    className: r,
    children: f,
    dataTab: g,
    role: m,
    disabled: h,
    onClick: y,
    onMouseEnter: E,
    onMouseLeave: S,
    onMouseDown: v,
    title: T,
    type: M = "button",
    onFocus: A,
    onBlur: b,
    xstyle: C,
    tabIndex: P = 0
  } = e;
  let O = (0, a.default)(e, p);
  const I = (0, l.useRef)(null);
  const [R, N] = (0, c.default)();
  const D = (0, d.default)(t, R, I);
  const w = {};
  if (O["aria-label"] != null) {
    w["aria-label"] = O["aria-label"];
  }
  if (O["aria-pressed"] != null) {
    w["aria-pressed"] = O["aria-pressed"];
  }
  if (O["aria-checked"] != null) {
    w["aria-checked"] = O["aria-checked"];
  }
  return l.default.createElement("button", (0, i.default)({
    className: (0, o.classnamesConvertMeToStylexPlease)((0, u.default)(_.button, N && _.focused, h && _.disabled, C), r),
    tabIndex: P,
    "data-tab": g != null ? g : undefined,
    disabled: h === true,
    onClick: y,
    onMouseEnter: E,
    onMouseLeave: S,
    onMouseDown: v,
    onKeyPress: function (e) {
      var t;
      if ((0, s.default)(e)) {
        e.stopPropagation();
        e.preventDefault();
        if (!((t = I.current) === null || t === undefined)) {
          t.click();
        }
      }
    },
    onFocus: A,
    onBlur: b,
    ref: D,
    title: T,
    type: M,
    role: m
  }, w), f);
}
var m = (0, l.forwardRef)(g);
exports.default = m;