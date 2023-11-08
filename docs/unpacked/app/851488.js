var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WDSTextTitle = exports.WDSTextSmall = exports.WDSTextSectionTitle = exports.WDSTextMuted = exports.WDSTextLarge = exports.WDSClickableText = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./58972.js");
var s = require("./572946.js");
var l = r(require("./625903.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
r(require("./156720.js"));
var c = require("./140455.js");
const d = ["weight", "color", "xstyle"];
const p = ["xstyle"];
const f = ["xstyle"];
const _ = ["xstyle"];
const g = ["xstyle"];
const m = ["xstyle"];
const h = ["color", "highlightOnHover", "xstyle", "className", "xstyle"];
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = {
  light: {
    fontWeight: "bcr6az0x"
  },
  normal: {
    fontWeight: "e1gr2w1z"
  },
  medium: {
    fontWeight: "hnx8ox4h"
  },
  semibold: {
    fontWeight: "sy6s5v3r"
  },
  bold: {
    fontWeight: "nbipi2bn"
  },
  inherit: {
    fontWeight: "r96muop5"
  }
};
const S = {
  teal: {
    color: "al27ra41"
  },
  critical: {
    color: "ne5ytom7"
  },
  primary: {
    color: "p5g9vl8k"
  },
  secondary: {
    color: "i8b0kslj"
  },
  secondaryEmphasized: {
    color: "b40j3n3c"
  },
  success: {
    color: "ldq9hvzn"
  },
  secondaryLighter: {
    color: "hp667wtd"
  },
  link: {
    color: "o0rubyzf"
  }
};
const v = {
  textSizeXXLarge: {
    fontSize: "fe5nidar",
    lineHeight: "mkbhkxnz"
  },
  textSizeXLarge: {
    fontSize: "fe5nidar",
    lineHeight: "sfxjp386"
  },
  textSizeLarge: {
    fontSize: "enbbiyaj",
    lineHeight: "kp6ezq1y"
  },
  textSizeSmall: {
    fontSize: "bze30y65",
    lineHeight: "rwg48p7b"
  },
  textSizeXSmall: {
    fontSize: "bze30y65",
    lineHeight: "a0nywpav"
  },
  textSizeXXSmall: {
    fontSize: "f8jlpxt4",
    lineHeight: "c10c160o"
  },
  isOSMac: {
    fontSize: "enbbiyaj",
    lineHeight: "n5p9w1es"
  }
};
const T = (0, u.forwardRef)((e, t) => {
  var n;
  const {
    weight: r = "normal",
    color: s,
    xstyle: l
  } = e;
  const c = (0, a.default)(e, d);
  const p = s != null ? S[s] : null;
  const f = E[r];
  return u.default.createElement(o.Box, (0, i.default)({}, c, {
    as: (n = c.as) !== null && n !== undefined ? n : "div",
    ref: t,
    xstyle: [l, f, p]
  }));
});
T.displayName = "WDSText";
const M = {
  large: {
    fontSize: "iqrewfee",
    lineHeight: "fjqzsdta"
  }
};
const A = (0, u.forwardRef)((e, t) => {
  var n;
  const {
    xstyle: r
  } = e;
  const o = (0, a.default)(e, p);
  return u.default.createElement(T, (0, i.default)({}, o, {
    color: (n = e.color) !== null && n !== undefined ? n : "primary",
    ref: t,
    xstyle: [r, M.large]
  }));
});
exports.WDSTextLarge = A;
A.displayName = "WDSTextLarge";
const b = {
  title: {
    fontSize: "fe5nidar",
    lineHeight: "fs7pz031"
  }
};
const C = (0, u.forwardRef)((e, t) => {
  var n;
  const {
    xstyle: r
  } = e;
  const o = (0, a.default)(e, f);
  const l = (0, c.useElectronCompatibleStyles)().classnameCamelCase;
  return u.default.createElement(T, (0, i.default)({}, o, {
    color: (n = e.color) !== null && n !== undefined ? n : "primary",
    ref: t,
    xstyle: [r, b.title, s.isOSMac ? v.isOSMac : null, v[l]]
  }));
});
exports.WDSTextTitle = C;
C.displayName = "WDSTextTitle";
const P = {
  muted: {
    fontSize: "f8jlpxt4",
    lineHeight: "e4qy2s3t"
  }
};
const O = (0, u.forwardRef)((e, t) => {
  var n;
  const {
    xstyle: r
  } = e;
  const o = (0, a.default)(e, _);
  return u.default.createElement(T, (0, i.default)({}, o, {
    color: (n = e.color) !== null && n !== undefined ? n : "secondaryEmphasized",
    ref: t,
    xstyle: [r, P.muted]
  }));
});
exports.WDSTextMuted = O;
O.displayName = "WDSTextMuted";
const I = {
  sectionTitle: {
    fontSize: "f8jlpxt4",
    lineHeight: "tkq7s68q"
  }
};
const R = (0, u.forwardRef)((e, t) => {
  var n;
  const {
    xstyle: r
  } = e;
  const o = (0, a.default)(e, g);
  return u.default.createElement(T, (0, i.default)({}, o, {
    color: (n = e.color) !== null && n !== undefined ? n : "teal",
    ref: t,
    xstyle: [r, I.sectionTitle]
  }));
});
exports.WDSTextSectionTitle = R;
R.displayName = "WDSTextSectionTitle";
const N = {
  small: {
    fontSize: "ovllcyds",
    lineHeight: "l0vqccxk"
  }
};
const D = (0, u.forwardRef)((e, t) => {
  var n;
  const {
    xstyle: r
  } = e;
  const o = (0, a.default)(e, m);
  return u.default.createElement(T, (0, i.default)({}, o, {
    color: (n = e.color) !== null && n !== undefined ? n : "secondary",
    ref: t,
    xstyle: [r, N.small]
  }));
});
exports.WDSTextSmall = D;
D.displayName = "WDSTextSmall";
const w = {
  teal: {
    color: "jq3rn4u7"
  },
  blue: {
    color: "o0rubyzf"
  }
};
const L = {
  teal: {
    ":hover": {
      color: "c7hh7l4h"
    }
  },
  blue: {
    ":hover": {
      color: "a1thzbi1"
    }
  }
};
const k = (0, u.forwardRef)((e, t) => {
  const {
    color: n = "blue",
    highlightOnHover: r,
    xstyle: o,
    className: s,
    xstyle: c
  } = e;
  const d = (0, a.default)(e, h);
  return u.default.createElement(l.default, (0, i.default)({}, d, {
    xstyle: [c, r === true ? L[n] : w[n]],
    ref: t
  }));
});
exports.WDSClickableText = k;
k.displayName = "WDSClickableText";