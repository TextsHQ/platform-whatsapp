var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    base: t,
    unicode: n,
    children: a,
    action: u,
    preVariant: h
  } = e;
  const g = l.Children.toArray(a);
  const E = l.Children.count(a);
  const v = Math.sqrt(E);
  const _ = g.filter((e, t) => t % v === Math.floor(t / v));
  const y = g.indexOf(h);
  const [C, b] = (0, l.useState)(y === -1 ? null : Math.floor(y / v));
  const [M, S] = (0, l.useState)(y === -1 ? null : y % v);
  const [T, w] = (0, l.useState)(C != null && M != null ? C * v + M : null);
  const A = (e, t, n) => (C != null || M != null) && (n === t || n === h ? (u(e, t, n), true) : C != null && M != null && u(e, t, n));
  return l.default.createElement("div", {
    className: (0, i.default)(s)
  }, l.default.createElement("div", {
    className: (0, i.default)(m)
  }, _.map((e, n) => l.default.createElement(r.default, {
    key: e + n,
    testid: `left-option-${n}`,
    base: t,
    leftEmojiVariation: true,
    action: e => ((e, t) => {
      (0, o.stopEvent)(e);
      b(t);
      w(M != null ? t * v + M : t * v);
      return false;
    })(e, n),
    emoji: e,
    selected: n === C
  }))), l.default.createElement("div", {
    className: (0, i.default)(m)
  }, _.map((e, n) => l.default.createElement(r.default, {
    key: e + n,
    testid: `right-option-${n}`,
    base: t,
    rightEmojiVariation: true,
    selected: n === M,
    action: e => ((e, t) => {
      (0, o.stopEvent)(e);
      S(t);
      w(C != null ? C * v + t : t);
      return false;
    })(e, n),
    emoji: e
  }))), l.default.createElement("div", {
    className: (0, i.default)(d, c)
  }, l.default.createElement("span", {
    className: (0, i.default)(f)
  }, l.default.createElement(r.default, {
    base: t,
    action: e => u(e, n, t),
    emoji: t,
    showBaseEmoji: true,
    testid: "preview-base"
  })), l.default.createElement("span", {
    className: (0, i.default)(p)
  }, T == null ? l.default.createElement(r.default, {
    base: t,
    action: e => A(e, n, h),
    emoji: h,
    testid: "preview-none"
  }) : C != null && M != null ? l.default.createElement(r.default, {
    base: t,
    action: e => A(e, n, g[T]),
    emoji: g[T],
    testid: "preview-complete"
  }) : l.default.createElement(r.default, {
    base: t,
    leftEmojiVariation: C != null && M == null,
    rightEmojiVariation: C == null && M != null,
    emoji: g[T],
    testid: "preview-partial"
  }))));
};
var r = a(require("./155202.js"));
var o = require("./414493.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
var i = a(require("../app/156720.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = {
  width: "hp5m5kpu",
  display: "p357zi0d",
  flexDirection: "f8m0rgwh",
  justifyContent: "ac2vgrno",
  marginTop: "tt8xd2xn",
  marginEnd: "jnwc1y2a",
  marginBottom: "mpdn4nr2",
  marginStart: "svoq16ka",
  paddingTop: "i5tg98hk",
  paddingEnd: "f9ovudaz",
  paddingBottom: "przvwfww",
  paddingStart: "gx1rr48f"
};
const c = {
  borderTop: "g80wewbe"
};
const d = {
  display: "p357zi0d",
  flexDirection: "sap93d0t",
  justifyContent: "s1e5xcja",
  paddingTop: "a71rq12o"
};
const f = {
  width: "tddarlmj",
  textAlign: "qfejxiq4",
  paddingEnd: "fhfm09ip"
};
const p = {
  width: "tddarlmj",
  textAlign: "qfejxiq4",
  paddingStart: "mjn2akup"
};
const m = {
  display: "p357zi0d",
  flexWrap: "lkhkxwyq",
  justifyContent: "o4u7okr9",
  maxWidth: "iaxh5e60",
  maxHeight: "e90a4zdp",
  marginTop: "tt8xd2xn",
  marginEnd: "om6y7gxh",
  marginBottom: "mpdn4nr2",
  marginStart: "gj5xqxfh"
};