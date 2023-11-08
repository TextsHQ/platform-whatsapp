var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    focusOnMount: t = false,
    enableShowPassword: n = false
  } = e;
  const [r, h] = (0, m.default)(false);
  const E = (0, p.useRef)(null);
  const [S, v] = (0, p.useState)(false);
  const T = (0, _.default)({
    onFocusChange: v
  });
  const M = (0, g.default)(E, T);
  (0, p.useEffect)(() => {
    var e;
    if (t) {
      if (!((e = E.current) === null || e === undefined)) {
        e.focus();
      }
    }
  }, [t]);
  return p.default.createElement("div", {
    className: (0, f.default)([y.container, S && y.focusedContainer])
  }, p.default.createElement("input", {
    className: (0, a.classnamesConvertMeToStylexPlease)(o.SELECTABLE_CSS_CLASS, (0, f.default)(y.inputField, l.uiPadding.all6)),
    ref: M,
    type: r ? "text" : "password",
    value: e.value,
    onChange: e.onChange,
    onBlur: e.onBlur,
    onKeyDown: e.onKeyDown,
    required: e.required,
    pattern: e.pattern,
    title: e.title,
    placeholder: e.placeholder
  }), n && p.default.createElement(i.default, {
    xstyle: y.toggleButton,
    onClick: h,
    type: "simplified"
  }, r ? p.default.createElement(c.VisibilityOnIcon, {
    "aria-label": d.fbt._("hide", null, {
      hk: "4vBEPy"
    }),
    color: s.SvgColorProp.TEAL
  }) : p.default.createElement(u.VisibilityOffIcon, {
    "aria-label": d.fbt._("show", null, {
      hk: "1KeKfP"
    }),
    color: s.SvgColorProp.TEAL
  })));
};
var i = r(require("./692629.js"));
var a = require("./396574.js");
var o = require("./306703.js");
var s = require("./220584.js");
var l = require("./676345.js");
var u = require("./54052.js");
var c = require("./442176.js");
var d = require("../vendor/548360.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var f = r(require("./156720.js"));
var _ = r(require("./102811.js"));
var g = r(require("./38085.js"));
var m = r(require("./305988.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const y = {
  container: {
    position: "g0rxnol2",
    display: "p357zi0d",
    backgroundColor: "f6cvynhn",
    minWidth: "lu4oe39f",
    borderBottom: "d311eqfx",
    paddingBottom: "a15vwmim"
  },
  focusedContainer: {
    borderBottom: "ggdspdaz",
    paddingBottom: "przvwfww"
  },
  inputField: {
    fontSize: "enbbiyaj",
    color: "tviruh8d",
    flexGrow: "ggj6brxn",
    borderTop: "d27kr2rt",
    borderEnd: "q2i1o5qz",
    borderBottom: "r40aedaz",
    borderStart: "g9ebf9yp",
    outline: "gk6igrwd",
    backgroundColor: "f6cvynhn",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  toggleButton: {
    minWidth: "h3jhcnxg",
    color: "kzxpayn5",
    ":hover": {
      color: "glk0grvq"
    }
  }
};