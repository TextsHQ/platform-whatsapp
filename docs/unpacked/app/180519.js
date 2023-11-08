var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = {
  Text: true,
  TextHeader: true,
  TextParagraph: true,
  TextDiv: true,
  TextSpan: true,
  TextLabel: true
};
exports.TextSpan = exports.TextParagraph = exports.TextLabel = exports.TextHeader = exports.TextDiv = exports.Text = undefined;
var a = r(require("../vendor/506479.js"));
var o = r(require("../vendor/967154.js"));
var s = require("./396574.js");
var l = require("./572946.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var c = r(require("./156720.js"));
var d = require("./140455.js");
var p = require("./851488.js");
Object.keys(p).forEach(function (e) {
  if (e !== "default" && e !== "__esModule") {
    if (!(Object.prototype.hasOwnProperty.call(i, e) || e in exports && exports[e] === p[e])) {
      Object.defineProperty(exports, e, {
        enumerable: true,
        get: function () {
          return p[e];
        }
      });
    }
  }
});
const f = ["level"];
const _ = ["htmlFor"];
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = {
  10: {
    fontSize: "r8knbtme"
  },
  12: {
    fontSize: "dsh4tgtl"
  },
  13: {
    fontSize: "ovllcyds"
  },
  14: {
    fontSize: "f8jlpxt4"
  },
  15: {
    fontSize: "bze30y65"
  },
  16: {
    fontSize: "enbbiyaj"
  },
  18: {
    fontSize: "cqiun4t2"
  },
  20: {
    fontSize: "p9fp32ui"
  },
  24: {
    fontSize: "q9lllk4z"
  },
  28: {
    fontSize: "dupc5dfw"
  },
  32: {
    fontSize: "lymqd4c5"
  },
  inherit: {
    fontSize: "mrcito7c"
  }
};
const h = {
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
const y = {
  accent: {
    color: "jq3rn4u7"
  },
  danger: {
    color: "mvxzr2tb"
  },
  dark: {
    color: "tl2vja3b"
  },
  primary: {
    color: "tviruh8d"
  },
  secondary: {
    color: "hp667wtd"
  },
  muted: {
    color: "pm5hny62"
  },
  success: {
    color: "j5au4wul"
  },
  disabled: {
    color: "baku5n5n"
  },
  link: {
    color: "o0rubyzf"
  }
};
const E = {
  large: {
    fontSize: "iqrewfee",
    lineHeight: "fjqzsdta",
    color: "tl2vja3b"
  },
  title: {
    fontSize: "fe5nidar",
    lineHeight: "fs7pz031",
    color: "tl2vja3b"
  },
  muted: {
    fontSize: "f8jlpxt4",
    lineHeight: "e4qy2s3t",
    color: "pm5hny62"
  },
  sectionTitle: {
    fontSize: "f8jlpxt4",
    lineHeight: "tkq7s68q",
    color: "jq3rn4u7"
  },
  small: {
    fontSize: "ovllcyds",
    lineHeight: "l0vqccxk",
    color: "hp667wtd"
  },
  sectionTitleLarger: {
    fontSize: "enbbiyaj",
    lineHeight: "tkq7s68q",
    color: "jq3rn4u7"
  },
  chatInfoSectionTitle: {
    fontSize: "f8jlpxt4",
    lineHeight: "tkq7s68q",
    color: "k06jqncy"
  },
  mutedSmall: {
    fontSize: "ovllcyds",
    lineHeight: "l0vqccxk",
    color: "hp667wtd"
  },
  plain: {
    fontSize: "f8jlpxt4",
    lineHeight: "e4qy2s3t"
  },
  popupTitle: {
    fontSize: "p9fp32ui",
    fontWeight: "m1e7cby3",
    lineHeight: "tkq7s68q"
  }
};
const S = {
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
const v = (0, u.forwardRef)((e, t) => {
  var n;
  var r;
  const {
    weight: i = "normal",
    as: a = "span",
    size: p = "14",
    theme: f
  } = e;
  const _ = e.color ? y[e.color] : null;
  const g = h[i];
  const v = ((n = e.xstyle) !== null && n !== undefined ? n : {}).fontSize != null ? null : p;
  const T = v != null ? m[v] : null;
  const M = (0, d.useElectronCompatibleStyles)().classnameCamelCase;
  let A;
  if (f) {
    A = f === "title" ? [E.title, l.isOSMac ? S.isOSMac : null, S[M]] : E[f];
  }
  return u.default.createElement(a, (0, o.default)({}, e.extras, {
    ref: t,
    className: (0, s.classnamesConvertMeToStylexPlease)((0, c.default)([T, A, g, _, e.xstyle]), e.className),
    "aria-label": (r = e.ariaLabel) !== null && r !== undefined ? r : ""
  }), e.children);
});
exports.Text = v;
v.displayName = "Text";
const T = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6"
};
const M = (0, u.forwardRef)((e, t) => {
  const {
    level: n = "1"
  } = e;
  const r = (0, a.default)(e, f);
  return u.default.createElement(v, (0, o.default)({
    ref: t,
    as: T[n]
  }, r));
});
exports.TextHeader = M;
M.displayName = "TextHeader";
const A = (0, u.forwardRef)((e, t) => u.default.createElement(v, (0, o.default)({
  ref: t,
  as: "p"
}, e)));
exports.TextParagraph = A;
A.displayName = "TextParagraph";
const b = (0, u.forwardRef)((e, t) => u.default.createElement(v, (0, o.default)({
  ref: t,
  as: "div"
}, e)));
exports.TextDiv = b;
b.displayName = "TextDiv";
const C = (0, u.forwardRef)((e, t) => u.default.createElement(v, (0, o.default)({
  ref: t,
  as: "span"
}, e)));
exports.TextSpan = C;
C.displayName = "TextSpan";
const P = (0, u.forwardRef)((e, t) => {
  const {
    htmlFor: n
  } = e;
  const r = (0, a.default)(e, _);
  return u.default.createElement(v, (0, o.default)({
    ref: t,
    as: "label"
  }, r, {
    extras: {
      htmlFor: n
    }
  }));
});
exports.TextLabel = P;
P.displayName = "TextLabel";