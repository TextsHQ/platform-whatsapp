var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, d.useRef)(null);
  const n = (0, d.useRef)(true);
  const [a, p] = (0, d.useState)(false);
  let h;
  let g;
  (0, d.useEffect)(() => {
    if (n.current === false && e.checked === true) {
      u.default.focus(t.current);
    }
    n.current = false;
  }, [e.checked]);
  if (e.checked) {
    g = e.radio === true ? l.CheckboxRoundRadioCheckedIcon : r.CheckboxRoundCheckedIcon;
    h = "checked";
  } else {
    h = "unchecked";
    g = e.hover ? i.CheckboxRoundUncheckedIcon : o.CheckboxRoundPassiveIcon;
  }
  const E = e.checked ? [] : [m.uncheckedSvgStyle, e.systemUncheckedColor === true ? m.iconPathFillSecondary : m.iconPathFillWhite, a && !(e.systemUncheckedColor === true) && m.uncheckedSvgHoverStyle];
  const v = (0, d.useCallback)(() => p(true), []);
  const _ = (0, d.useCallback)(() => p(false), []);
  const {
    isKeyboardUser: y
  } = (0, s.default)();
  return d.default.createElement(c.default, {
    className: (0, f.default)(m.container),
    transitionName: "pop"
  }, d.default.createElement("button", {
    ref: t,
    role: e.radio === true ? "radio" : "checkbox",
    className: (0, f.default)(m.roundIcon, y && m.isKeyboardUser),
    "aria-checked": e.checked,
    "aria-label": e.ariaLabel || "",
    key: h,
    onClick: t => {
      if (t) {
        t.stopPropagation();
      }
      e.onChange();
    },
    onMouseEnter: v,
    onFocus: v,
    onMouseLeave: _,
    onBlur: _
  }, d.default.createElement(g, {
    iconXstyle: E
  })));
};
var r = require("./412938.js");
var o = require("./502288.js");
var l = require("./207044.js");
var i = require("./378762.js");
var u = a(require("../app/335540.js"));
var s = a(require("../app/395967.js"));
var c = a(require("../app/844453.js"));
var d = function (e, t) {
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
var f = a(require("../app/156720.js"));
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
const m = {
  container: {
    position: "g0rxnol2",
    display: "l7jjieqr",
    width: "m0s4cjtr",
    height: "jdwybkuq",
    verticalAlign: "neme6l2y",
    cursor: "ajgl1lbb",
    transform: "qlxkrvdn"
  },
  roundIcon: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx"
  },
  uncheckedSvgStyle: {
    fillOpacity: "hdyxztb8",
    transitionDuration: "slppp3mo",
    transitionProperty: "ec3rya3v",
    transitionTimingFunction: "pu4k07i0"
  },
  uncheckedSvgHoverStyle: {
    fillOpacity: "io7enyfj"
  },
  iconPathFillWhite: {
    color: "qiqvuef5"
  },
  iconPathFillSecondary: {
    color: "pm5hny62"
  },
  isKeyboardUser: {
    ":focus": {
      boxShadow: "e1xl1dja"
    }
  }
};