var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = function (e) {
  let {
    checked: t,
    onChange: n,
    tabIndex: o,
    id: d,
    testid: f = "visual-switch",
    ariaLabel: m
  } = e;
  const p = (0, l.useRef)(null);
  const [h, E] = (0, s.default)();
  const g = (0, u.default)(p, h);
  function C() {
    const e = p.current;
    if (e != null) {
      e.click();
    }
  }
  return l.default.createElement(r.HotKeys, {
    handlers: {
      enter: C
    }
  }, l.default.createElement("input", {
    ref: g,
    className: (0, i.default)(c.hiddenInput),
    checked: t,
    onChange: function (e) {
      e.stopPropagation();
      const t = p.current;
      if (t != null) {
        t.focus();
      }
      n(e);
    },
    type: "checkbox",
    role: "switch",
    tabIndex: o != null ? o : 0,
    "aria-label": m != null ? m : a.fbt._("Toggle setting", null, {
      hk: "KwvAU"
    }),
    id: d
  }), l.default.createElement("div", {
    className: (0, i.default)(c.container),
    onClick: C,
    tabIndex: -1,
    "aria-hidden": "true"
  }, l.default.createElement("div", {
    className: (0, i.default)(c.button, t && c.buttonChecked, E && c.buttonFocused)
  }), l.default.createElement("div", {
    className: (0, i.default)(c.track, t && c.trackChecked)
  })));
};
var r = require("../app/81644.js");
var a = require("../vendor/548360.js");
var l = function (e, t) {
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
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(o, a, l);
      } else {
        o[a] = e[a];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}(require("../vendor/667294.js"));
var i = o(require("../app/156720.js"));
var s = o(require("../app/576191.js"));
var u = o(require("../app/38085.js"));
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
const c = {
  container: {
    display: "i86elurf",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n",
    width: "tknnhhou",
    height: "jdwybkuq",
    marginTop: "g1eqewly",
    marginEnd: "kjemk6od",
    marginBottom: "kzyzudjh",
    marginStart: "k6y3xtnu",
    position: "g0rxnol2",
    cursor: "ajgl1lbb"
  },
  button: {
    height: "jdwybkuq",
    width: "m0s4cjtr",
    borderTopStartRadius: "ikqdvm1y",
    borderTopEndRadius: "m3qqxsiz",
    borderBottomEndRadius: "r1ncx0sg",
    borderBottomStartRadius: "mmj7r7ye",
    backgroundColor: "lbj9vhti",
    position: "lhggkp7q",
    left: "tukmaf4q",
    transitionProperty: "bo8jc6qi",
    transitionDuration: "nbciif1m",
    transitionTimingFunction: "oa9ii99z",
    boxShadow: "hjje1qk3"
  },
  buttonChecked: {
    transform: "e95mh68g",
    backgroundColor: "my8w5w2u"
  },
  buttonFocused: {
    boxShadow: "r6unq4of"
  },
  track: {
    width: "tknnhhou",
    height: "icj6mcig",
    backgroundColor: "masnrobp",
    borderTopStartRadius: "i3rsbmdh",
    borderTopEndRadius: "d6h2ibm4",
    borderBottomEndRadius: "rh5xaqwm",
    borderBottomStartRadius: "e6tbvuqx"
  },
  trackChecked: {
    backgroundColor: "hza3nq4c"
  },
  hiddenInput: {
    position: "lhggkp7q",
    width: "cxec7x23",
    height: "kanlod6e",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    clip: "nmeg1xfo",
    clipPath: "okm7a8wg",
    whiteSpace: "le5p0ye3"
  }
};