var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = a(require("./258054.js"));
var l = require("../app/180519.js");
var i = require("../app/667738.js");
var u = function (e, t) {
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
var s = a(require("../app/156720.js"));
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
const d = {
  position: "g0rxnol2",
  flexGrow: "tvf2evcx",
  flexShrink: "oq44ahr5",
  flexBasis: "lb5m6g5c",
  marginBottom: "brac1wpa",
  backgroundColor: "lkjmyc96"
};
const f = {
  paddingTop: "b8cdf3jl",
  paddingEnd: "bcymb0na",
  paddingBottom: "myel2vfb",
  paddingStart: "e8k79tju"
};
const p = {
  paddingTop: "b8cdf3jl",
  paddingEnd: "jaoskmb8",
  paddingBottom: "myel2vfb",
  paddingStart: "ddw6s8x9"
};
const m = {
  paddingTop: "gaujl5hk",
  paddingEnd: "bcymb0na",
  paddingBottom: "aiput80m",
  paddingStart: "e8k79tju",
  marginBottom: "mpdn4nr2"
};
const h = {
  paddingTop: "a4bywxmn",
  paddingEnd: "bcymb0na",
  paddingBottom: "lzi2pvmc",
  paddingStart: "e8k79tju",
  marginBottom: "bvhm1occ"
};
const g = {
  marginBottom: "bvhm1occ"
};
const E = {
  paddingTop: "gaujl5hk",
  paddingEnd: "bcymb0na",
  paddingBottom: "aiput80m",
  paddingStart: "e8k79tju"
};
const v = {
  paddingTop: "i5tg98hk",
  paddingEnd: "bcymb0na",
  paddingBottom: "przvwfww",
  paddingStart: "e8k79tju"
};
const _ = {
  paddingTop: "gaujl5hk",
  paddingEnd: "bcymb0na",
  paddingBottom: "aiput80m",
  paddingStart: "e8k79tju"
};
const y = {
  paddingTop: "i5tg98hk",
  paddingEnd: "f9ovudaz",
  paddingBottom: "przvwfww",
  paddingStart: "gx1rr48f"
};
const C = {
  paddingTop: "b8cdf3jl",
  paddingEnd: "bcymb0na",
  paddingBottom: "q1tx93la",
  paddingStart: "e8k79tju",
  marginBottom: "mpdn4nr2"
};
const b = {
  width: "tcisnlar",
  marginTop: "tt8xd2xn",
  marginEnd: "k1jo73ug",
  marginStart: "isfiuinm",
  marginBottom: "brac1wpa"
};
const M = {
  flexGrow: "ggj6brxn",
  flexShrink: "m0h2a7mj",
  flexBasis: "rjo8vgbg"
};
const S = {
  marginBottom: "mpdn4nr2"
};
const T = {
  marginBottom: "mpdn4nr2"
};
const w = {
  zIndex: "ntz4oiyn",
  boxSizing: "cm280p3y",
  paddingTop: "a71rq12o",
  paddingEnd: "h1a80dm5",
  paddingBottom: "pcbmd69e",
  paddingStart: "sta02ykp",
  marginBottom: "mpdn4nr2"
};
const A = {
  backgroundColor: "thr4l2wc"
};
const P = {
  marginBottom: "mpdn4nr2",
  flexGrow: "ggj6brxn",
  flexShrink: "m0h2a7mj",
  flexBasis: "rjo8vgbg"
};
const O = {
  defaultTitle: {
    paddingTop: "gaujl5hk",
    paddingEnd: "bcymb0na",
    paddingBottom: "p9a4hubg",
    paddingStart: "e8k79tju"
  },
  refreshTitle: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    marginBottom: "oqp0d33z"
  },
  refreshPaddingTitleTitle: {
    paddingTop: "a4bywxmn",
    paddingEnd: "bcymb0na",
    paddingBottom: "lzi2pvmc",
    paddingStart: "e8k79tju"
  },
  groupDescriptionPaddingTitle: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    marginBottom: "inww9tbj"
  },
  noPaddingTitle: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  titleLargerTitle: {
    paddingTop: "bay3hw0d",
    paddingEnd: "rmtqb32e",
    paddingBottom: "n3bptxsn",
    paddingStart: "hmkl5ysc"
  },
  paddingTitle: {
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    marginBottom: "k0lnf8n4"
  },
  listSectionTitle: {
    paddingTop: "msavwer2",
    paddingEnd: "l9g3jx6n",
    paddingBottom: "gjfcmax9",
    paddingStart: "lyvj5e2u"
  },
  animate: {
    animationName: "gsqs0kct",
    animationDuration: "oauresqk",
    animationTimingFunction: "efgp0a3n"
  },
  shadow: {
    boxShadow: "tio0brup"
  },
  shadowDarkMode: {
    boxShadow: "h3bz2vby"
  }
};
function k(e, t) {
  let {
    children: n,
    title: a,
    titleXStyle: c,
    titleTextXStyle: k,
    subtitle: D,
    titleOnClick: R,
    titleTestId: N,
    testid: x,
    "data-list-scroll-offset": L,
    theme: j,
    animation: B = true,
    className: F,
    xstyle: G,
    ellipsify: U = true,
    shadow: W = true
  } = e;
  const {
    theme: H
  } = (0, u.useContext)(i.ThemeContext);
  const V = (0, s.default)(B && O.animate, W && O.shadow, W && H === "dark" && O.shadowDarkMode, d, j && function (e) {
    switch (e) {
      case "chat-info":
        return null;
      case "center-column-fixed-width":
        return b;
      case "padding":
        return E;
      case "padding-large":
        return f;
      case "padding-product":
        return C;
      case "padding-small":
        return p;
      case "padding-no-margin":
        return m;
      case "padding-no-vertical":
        return v;
      case "expand-height":
        return M;
      case "sticky-button-section":
        return w;
      case "refresh":
        return h;
      case "refresh-padding-title":
        return g;
      case "group-desc-padding":
        return _;
      case "no-padding":
        return y;
      case "list-section":
        return S;
      case "title-larger":
        return T;
      case "transparent":
        return A;
      case "full-height":
        return P;
    }
  }(j), G);
  let q;
  if (a != null) {
    let e = "sectionTitle";
    if (j === "list-section" || j === "title-larger") {
      e = "sectionTitleLarger";
    } else if (j === "chat-info") {
      e = "chatInfoSectionTitle";
    }
    q = u.default.createElement(o.default, {
      side: D,
      onClick: R,
      ellipsify: U,
      xstyle: [I(j), c],
      testid: N
    }, u.default.createElement(l.TextSpan, {
      xstyle: k,
      theme: e
    }, a));
  }
  return u.default.createElement("div", {
    ref: t,
    className: (0, r.classnamesConvertMeToStylexPlease)(F, V),
    "data-list-scroll-offset": L
  }, q, n);
}
var D = (0, u.forwardRef)(k);
function I(e) {
  switch (e) {
    case "padding-large":
    case "padding-product":
    case "padding-small":
    case "padding-no-margin":
    case "padding-no-vertical":
    case "expand-height":
    case "sticky-button-section":
    case "chat-info":
    case "center-column-fixed-width":
      return O.defaultTitle;
    case "padding":
      return O.paddingTitle;
    case "refresh":
      return O.refreshTitle;
    case "refresh-padding-title":
      return O.refreshPaddingTitleTitle;
    case "group-desc-padding":
      return O.groupDescriptionPaddingTitle;
    case "no-padding":
      return O.noPaddingTitle;
    case "list-section":
      return O.listSectionTitle;
    case "title-larger":
      return O.titleLargerTitle;
    default:
      return O.defaultTitle;
  }
}
exports.default = D;