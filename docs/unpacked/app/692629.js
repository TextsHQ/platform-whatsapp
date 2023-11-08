var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/967154.js"));
var a = require("./287461.js");
var o = r(require("./944475.js"));
var s = require("./396574.js");
var l = require("./690495.js");
var u = r(require("./469733.js"));
var c = require("./956113.js");
var d = require("./617425.js");
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
var _ = r(require("./576191.js"));
var g = r(require("./38085.js"));
var m = r(require("./83233.js"));
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
  spinner: {
    paddingStart: "mhcwslh8"
  }
};
function E(e, t) {
  let {
    testid: n,
    children: r,
    className: h,
    xstyle: E,
    disabled: S,
    onClick: v,
    nowrap: T,
    spinner: M,
    type: A,
    buttonType: b,
    stretch: C
  } = e;
  const [P, O] = (0, m.default)(v, {
    disabled: S
  });
  const [I, R] = (0, _.default)();
  const N = (0, g.default)(t, P, I);
  if (h == null && E == null && (0, a.getABPropConfigValue)("wds_radius_and_casing")) {
    let e = null;
    switch (A) {
      case "primary":
      case "strong-primary":
        e = d.WDSButtonPrimary;
        break;
      case "secondary":
        e = d.WDSButtonSecondary;
        break;
      case "plain-white":
        e = d.WDSButtonPlainWhite;
        break;
      case "solidWarning":
        e = d.WDSButtonPrimaryDestructive;
        break;
      case "warning":
      case "warning-secondary":
        e = d.WDSButtonSecondaryDestructive;
        break;
      case "simplified":
      case "strong":
        e = d.WDSButtonSimplified;
    }
    if (e != null) {
      return p.default.createElement(e, {
        ref: t,
        testid: n,
        children: r,
        disabled: S,
        onClick: v,
        nowrap: T,
        spinner: M,
        stretch: C,
        buttonType: b
      });
    }
  }
  let D;
  switch (A) {
    case "primary":
      D = "white";
      break;
    case "secondary":
    case "plain-white":
    case "simplified":
      D = "highlight";
      break;
    default:
      D = "default";
  }
  if (S) {
    D = "default";
  }
  return p.default.createElement("div", (0, i.default)({}, O, {
    className: (0, s.classnamesConvertMeToStylexPlease)(o.default.button, {
      [o.default.primary]: A === "primary",
      [o.default.secondary]: A === "secondary",
      [o.default.plainWhite]: A === "plain-white",
      [o.default.disabled]: S,
      [o.default.nowrap]: T,
      [o.default.simplified]: A === "simplified",
      [o.default.warning]: A === "warning",
      [o.default.solidWarning]: A === "solidWarning",
      [o.default.strong]: A === "strong",
      [o.default.strongPrimary]: A === "strong-primary",
      [o.default.warningSecondary]: A === "warning-secondary",
      [o.default.itemFocused]: R
    }, h, (0, f.default)(E)),
    ref: N
  }), p.default.createElement(l.FlexRow, {
    align: "center",
    justify: "center"
  }, p.default.createElement(u.default, {
    testid: "content"
  }, r != null ? r : null), M ? p.default.createElement(u.default, {
    testid: "spinner",
    xstyle: y.spinner
  }, p.default.createElement(c.Spinner, {
    color: D,
    size: 16
  })) : null));
}
var S = (0, p.forwardRef)(E);
exports.default = S;