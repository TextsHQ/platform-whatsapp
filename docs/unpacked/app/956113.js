var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.RADIUS = undefined;
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = o(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, a, s);
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
var a = r(require("./156720.js"));
function o(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (o = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = {
  accent: {
    stroke: "dba1p600"
  },
  container: {
    animationName: "gdrnme8s",
    animationDuration: "hbnrezoj",
    animationTimingFunction: "f8mos8ky",
    animationIterationCount: "tkmeqcnu",
    zIndex: "b9fczbqn"
  },
  default: {
    stroke: "a5uym4to"
  },
  wdsSecondaryLighter: {
    stroke: "ml8t9l8k"
  },
  highlight: {
    stroke: "sku37djt"
  },
  progress: {
    stroke: "gibn6ev6"
  },
  in: {
    stroke: "ptcoeott"
  },
  noop: {
    visibility: "g5crjs6l"
  },
  out: {
    stroke: "mbixqzja"
  },
  rounded: {
    strokeLinecap: "bvgz89zs"
  },
  square: {
    strokeLinecap: "ci2qccu2"
  },
  path: {
    animationName: "nmreelbr",
    animationDuration: "sw4r90y6",
    animationTimingFunction: "gaqnkt02",
    animationIterationCount: "tkmeqcnu",
    strokeDasharray: "kzgl1sas",
    strokeDashoffset: "fwna6xbl"
  },
  solidwhite: {
    stroke: "ad0o4787"
  },
  white: {
    stroke: "qaop2s2o"
  },
  rotate: {
    transform: "bwjm0vhl",
    transformOrigin: "sx61ek5s"
  },
  transparent: {
    stroke: "qu2d81nr"
  },
  incoming: {
    stroke: "szgwhms5"
  },
  outgoing: {
    stroke: "rkxod6u5"
  }
};
function l(e) {
  if (e == null) {
    return null;
  }
  const t = Math.ceil(Math.PI * 40);
  return {
    strokeDasharray: `${t} ${t}`,
    strokeDashoffset: t - e / 100 * t
  };
}
function u(e) {
  let {
    color: t,
    stroke: n,
    strokeLinecap: r = "round",
    viewBoxSide: o,
    progress: u,
    outgoingMsg: c
  } = e;
  return i.default.createElement("circle", {
    style: l(u),
    className: (0, a.default)(r === "round" && s.rounded, r === "square" && s.square, u == null && s.path, typeof t != "string" ? t : s[t], c === false && s.in, c && s.out),
    cx: o / 2,
    cy: o / 2,
    r: 20,
    fill: "none",
    strokeWidth: n
  });
}
exports.RADIUS = 20;
const c = (0, i.forwardRef)((e, t) => {
  const {
    size: n = 65,
    stroke: r = 4,
    strokeLinecap: o = "round",
    progressContainerColor: l = "default",
    xstyle: c,
    color: d = "default",
    outgoingMsg: p,
    max: f = 100,
    value: _
  } = e;
  const g = function (e, t) {
    if (e == null) {
      return null;
    } else {
      return Math.max(Math.min(e, t), 0) * 100 / t;
    }
  }(_, f);
  const m = 40 + r;
  return i.default.createElement("span", {
    ref: t
  }, i.default.createElement("svg", {
    className: (0, a.default)(g == null && s.container || s.rotate, c),
    width: n,
    height: n,
    viewBox: `0 0 ${m} ${m}`,
    role: "status"
  }, g != null ? i.default.createElement(u, {
    viewBoxSide: m,
    stroke: r,
    strokeLinecap: o,
    outgoingMsg: p,
    color: l,
    progress: 100
  }) : null, i.default.createElement(u, {
    progress: g,
    viewBoxSide: m,
    stroke: r,
    strokeLinecap: o,
    outgoingMsg: p,
    color: d
  })));
});
exports.Spinner = c;
c.displayName = "Spinner";