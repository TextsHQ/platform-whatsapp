var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIZES = exports.PanelsMenuButton = undefined;
var r = require("../app/81644.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = i(t);
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
var l = a(require("../app/156720.js"));
function i(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (i = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const u = {
  SQUARE24: "SQUARE24",
  SQUARE26: "SQUARE26"
};
exports.SIZES = u;
const s = {
  container: {
    position: "lhggkp7q",
    bottom: "mvj9yovn",
    display: "f804f6gw",
    width: "fyy3ld6e",
    color: "svlsagor",
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    transform: "bxpi4b5r",
    ":focus": {
      boxShadow: "esbo3we0"
    }
  },
  containerActive: {
    color: "jq3rn4u7"
  },
  square24Svg: {
    marginTop: "b9l0eqez",
    marginEnd: "ojci89ib",
    marginBottom: "inogquss",
    marginStart: "akljc1zx"
  },
  square26Svg: {
    width: "ekdr8vow",
    height: "dhq51u3o"
  },
  containerTop: {
    zIndex: "b9fczbqn"
  },
  containerPadding: {
    position: "g0rxnol2",
    bottom: "jxacihee",
    display: "p357zi0d"
  },
  containerPaddingSquare24: {
    top: "eg0stril"
  },
  containerPaddingSquare26: {
    top: "oybnjv0e"
  }
};
const c = (e, t) => {
  const n = t => {
    t.stopPropagation();
    t.preventDefault();
    e.onClick();
  };
  return o.default.createElement(r.HotKeys, {
    component: "button",
    className: (0, l.default)(s.container, e.xstyle, e.isActive && s.containerActive, (e.isMain || e.singleButton) && s.containerTop, e.singleButton && s.containerPadding, e.size === u.SQUARE24 ? s.containerPaddingSquare24 : s.containerPaddingSquare26),
    "aria-label": e["aria-label"],
    "data-tab": e["data-tab"],
    onClick: t => {
      t.stopPropagation();
      t.preventDefault();
      e.onClick();
    },
    ref: t,
    handlers: {
      enter: n,
      space: n
    },
    style: e.style
  }, o.default.createElement("div", {
    className: (0, l.default)(e.size === u.SQUARE24 && s.square24Svg)
  }, o.default.createElement(e.Icon, {
    iconXstyle: e.size === u.SQUARE26 && s.square26Svg
  })));
};
const d = (0, o.memo)((0, o.forwardRef)(c));
exports.PanelsMenuButton = d;
d.displayName = "PanelsMenuButton";