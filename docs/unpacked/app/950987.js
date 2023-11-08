var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FocusTheme = exports.Clickable = undefined;
var i = require("./396574.js");
var a = r(require("./83162.js"));
var o = r(require("./395967.js"));
var s = function (e, t) {
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
var l = r(require("./156720.js"));
var u = r(require("./38085.js"));
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
const d = require("../vendor/76672.js").Mirrored(["Default", "Image"]);
exports.FocusTheme = d;
const p = {
  imageFocus: {
    ":focus": {
      borderTopStartRadius: "mmjxyicr",
      borderTopEndRadius: "r1jx4bdh",
      borderBottomEndRadius: "f9yclydc",
      borderBottomStartRadius: "mtzt60z0",
      boxShadow: "esbo3we0",
      filter: "gegvef6x"
    }
  },
  defaultFocus: {
    ":focus": {
      borderTopStartRadius: "mmjxyicr",
      borderTopEndRadius: "r1jx4bdh",
      borderBottomEndRadius: "f9yclydc",
      borderBottomStartRadius: "mtzt60z0",
      boxShadow: "esbo3we0"
    }
  }
};
function f(e, t) {
  const {
    as: n = "div",
    onClick: r,
    dataTestId: c,
    className: f,
    children: _,
    inlineStyle: g,
    preventDefaultKeyboard: m = false,
    xstyle: h
  } = e;
  const {
    isKeyboardUser: y
  } = (0, o.default)();
  const E = (0, s.useRef)(null);
  const S = (0, u.default)(t, E);
  let v;
  let T;
  let M;
  let A;
  let b;
  let C;
  var P;
  var O;
  var I;
  if (r) {
    v = (P = e.role) !== null && P !== undefined ? P : "button";
    T = e.ariaLabel;
    M = (O = e.tabIndex) !== null && O !== undefined ? O : 0;
    A = (I = e.focusTheme) !== null && I !== undefined ? I : d.Default;
    b = e.title;
    C = e["data-tab"];
  }
  return s.default.createElement(n, {
    onClick: r,
    role: v,
    tabIndex: M,
    "aria-label": T,
    title: b,
    "data-tab": C,
    ref: S,
    className: (0, i.classnamesConvertMeToStylexPlease)(f, (0, l.default)(h, y && d.Default === A && p.defaultFocus, y && d.Image === A && p.imageFocus)),
    onKeyDown: e => {
      var t;
      if ((0, a.default)(e) && r) {
        if (!((t = E.current) === null || t === undefined)) {
          t.click();
        }
        if (m) {
          e.preventDefault();
        }
      }
    },
    style: g
  }, _);
}
const _ = (0, s.forwardRef)(f);
exports.Clickable = _;
_.displayName = "Clickable";