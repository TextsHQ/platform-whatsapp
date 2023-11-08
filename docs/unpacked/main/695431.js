var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = g;
exports.RadioGroup = function (e) {
  const {
    name: t,
    options: n,
    theme: a,
    onChange: o,
    testid: i,
    checkedValue: u
  } = e;
  return s.default.createElement(l.FlexColumn, {
    testid: i
  }, n.map((e, n) => s.default.createElement(_, (0, r.default)({}, e, {
    name: t,
    checked: u === e.value,
    tabIndex: u === e.value || !u && n === 0 ? "0" : "-1",
    key: e.value,
    onChange: t => ((e, t, n) => {
      if (t != null) {
        t(e, n.value);
      }
      if (o != null) {
        o(e, n.value);
      }
    })(t, e.onChange, e),
    theme: a
  }))));
};
exports.RadioWithLabel = _;
exports.RadioWithLabelThemeEnum = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/506479.js"));
var l = require("../app/690495.js");
var i = require("../app/180519.js");
var u = require("../app/676345.js");
var s = function (e, t) {
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
var c = a(require("../app/156720.js"));
var d = a(require("../app/576191.js"));
var f = a(require("../app/38085.js"));
const p = ["label", "secondaryLabel", "isHovered", "xstyle", "testid", "theme", "hoverIcon"];
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
const h = {
  container: {
    display: "p357zi0d"
  },
  a11yHidden: {
    position: "lhggkp7q",
    width: "cxec7x23",
    height: "kanlod6e",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    clip: "nmeg1xfo",
    clipPath: "okm7a8wg",
    whiteSpace: "le5p0ye3"
  },
  radio: {
    width: "jte5jbqx",
    height: "sea3ypdp",
    backgroundColor: "thr4l2wc",
    outline: "fwpivmx1",
    outlineOffset: "lmtc6f36",
    borderTopStartRadius: "ig3kka7n",
    borderTopEndRadius: "a57u14ck",
    borderBottomEndRadius: "a4bg1r4i",
    borderBottomStartRadius: "h1a3x9ys",
    opacity: "brh521k9"
  },
  radioChecked: {
    opacity: "bs7a17vp",
    backgroundColor: "bn27j4ou",
    outlineColor: "mm2g5uxv"
  },
  radioFocused: {
    opacity: "bs7a17vp",
    outlineColor: "mm2g5uxv"
  },
  radioOptionKeyboardFocus: {
    boxShadow: "r6unq4of"
  },
  radioHovered: {
    opacity: "bs7a17vp"
  }
};
function g(e) {
  var t;
  var n;
  const a = (0, s.useRef)(null);
  const [r, o] = (0, d.default)();
  const l = (0, f.default)(a, r);
  return s.default.createElement("div", {
    className: (0, c.default)(h.container, o && h.radioOptionKeyboardFocus)
  }, s.default.createElement("input", {
    type: "radio",
    ref: l,
    name: e.name,
    value: e.value,
    checked: e.checked,
    onChange: e.onChange,
    className: (0, c.default)(h.a11yHidden),
    tabIndex: (t = e.tabIndex) !== null && t !== undefined ? t : "-1",
    "data-tab": (n = e.tabIndex) !== null && n !== undefined ? n : "-1"
  }), s.default.createElement("div", {
    className: (0, c.default)(h.radio, u.uiMargin.all5, e.isHovered === true && h.radioHovered, o && h.radioFocused, e.checked === true && h.radioChecked),
    onClick: function () {
      var e;
      var t;
      if (!((e = a.current) === null || e === undefined)) {
        e.click();
      }
      if (!((t = a.current) === null || t === undefined)) {
        t.focus();
      }
    },
    tabIndex: "-1",
    "aria-hidden": "true",
    "aria-checked": e.checked,
    role: "radio"
  }));
}
const E = {
  option: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    cursor: "ajgl1lbb"
  },
  optionWithHoverIcon: {
    width: "ln8gz9je"
  },
  optionText: {
    lineHeight: "htjsae3x",
    display: "l7jjieqr"
  },
  optionTextWithHoverIcon: {
    width: "ln8gz9je"
  },
  themeNormal: {
    fontSize: "f8jlpxt4",
    minHeight: "gc15jzxb"
  },
  themeLarge: {
    fontSize: "enbbiyaj",
    minHeight: "pazt69qo"
  }
};
const v = require("../vendor/76672.js")({
  NORMAL: "normal",
  LARGE: "large"
});
function _(e) {
  const {
    label: t,
    secondaryLabel: n,
    isHovered: a,
    xstyle: l,
    testid: d,
    theme: f = n != null ? v.LARGE : v.NORMAL,
    hoverIcon: m
  } = e;
  const h = (0, o.default)(e, p);
  const [_, y] = (0, s.useState)(a);
  const C = () => {
    y(true);
  };
  const b = () => {
    y(false);
  };
  let M;
  let S;
  switch (f) {
    case v.LARGE:
      M = [E.themeLarge];
      S = u.uiPadding.start20;
      break;
    case v.NORMAL:
      M = [E.themeNormal];
      S = u.uiPadding.start12;
  }
  return s.default.createElement("label", {
    className: (0, c.default)(E.option, m != null && E.optionWithHoverIcon, M, l),
    onMouseOver: C,
    onMouseOut: b,
    onFocus: C,
    onBlur: b
  }, s.default.createElement(g, (0, r.default)({}, h, {
    isHovered: _
  })), s.default.createElement("span", {
    className: (0, c.default)(E.optionText, m != null && E.optionTextWithHoverIcon, u.uiPadding.start20, S)
  }, t, s.default.createElement(i.WDSTextMuted, {
    color: "secondary",
    as: "div"
  }, n)), _ === true ? m : null);
}
exports.RadioWithLabelThemeEnum = v;