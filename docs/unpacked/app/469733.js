var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./396574.js");
var o = require("./839751.js");
var s = r(require("./731058.js"));
var l = function (e, t) {
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
var u = r(require("./156720.js"));
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
  flexItem: {
    flexGrow: "tvf2evcx",
    flexShrink: "m0h2a7mj",
    flexBasis: "lb5m6g5c",
    order: "j7l1k36l",
    minWidth: "ktfrpxia",
    minHeight: "nu7pwgvd"
  },
  displayFlex: {
    display: "p357zi0d"
  },
  displayInlineFlex: {
    display: "i86elurf"
  }
};
const p = {
  nowrap: {
    flexWrap: "dnb887gk"
  },
  wrap: {
    flexWrap: "lkhkxwyq"
  },
  wrapReverse: {
    flexWrap: "ns59xd2u"
  }
};
const f = {
  auto: {
    alignSelf: "gjuq5ydh"
  },
  start: {
    alignSelf: "ex3gcxaf"
  },
  center: {
    alignSelf: "o2es7gts"
  },
  end: {
    alignSelf: "rwlvdxyg"
  },
  stretch: {
    alignSelf: "l33m68ws"
  },
  baseline: {
    alignSelf: "syp6qgce"
  }
};
const _ = {
  auto: {
    justifySelf: "i2cterl7"
  },
  start: {
    justifySelf: "a4ki7vd9"
  },
  center: {
    justifySelf: "fzhgt5rc"
  },
  end: {
    justifySelf: "s5cppr1w"
  },
  stretch: {
    justifySelf: "cwelc83b"
  }
};
const g = (0, l.forwardRef)(function (e, t) {
  const {
    testid: n,
    align: r = "auto",
    justify: c = "auto",
    as: g = "div",
    basis: m,
    xstyle: h,
    children: y,
    order: E,
    grow: S,
    shrink: v,
    style: T,
    tabIndex: M,
    "data-tab": A,
    wrap: b = "nowrap",
    inline: C,
    isFlexContainer: P,
    className: O,
    "aria-label": I
  } = e;
  const R = {
    flexBasis: typeof m == "string" || m == null ? m : `${m}px`,
    flexGrow: S,
    flexShrink: v,
    order: E
  };
  const N = (0, o.getStructureStyles)(e);
  return l.default.createElement(g, {
    className: (0, a.classnamesConvertMeToStylexPlease)((0, u.default)(d.flexItem, P === true && d.displayFlex, C === true && d.displayInlineFlex, p[b], f[r], _[c], N, h), O),
    ref: t,
    style: (0, i.default)((0, i.default)({}, T), (0, s.default)(R)),
    tabIndex: M,
    "data-tab": A,
    "aria-label": I
  }, y);
});
g.displayName = "FlexItem";
var m = g;
exports.default = m;