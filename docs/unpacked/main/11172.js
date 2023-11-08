var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./958548.js");
var o = require("./397454.js");
var l = require("./599456.js");
var i = require("./414493.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var c = a(require("./805956.js"));
var d = a(require("./265817.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  display: "l7jjieqr",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex"
};
const m = {
  display: "l7jjieqr"
};
const h = {
  position: "g0rxnol2",
  width: "ln8gz9je"
};
const g = {
  position: "g0rxnol2",
  width: "ln8gz9je",
  overflowX: "ormcsqwh",
  overflowY: "rpvcun8f",
  scrollbarWidth: "kmer8oxg",
  "::-webkit-scrollbar": {
    display: "prbp9wo9"
  }
};
const E = {
  position: "g0rxnol2",
  display: "i86elurf",
  flexDirection: "sap93d0t",
  flexGrow: "ggj6brxn"
};
const v = {
  position: "lhggkp7q",
  zIndex: "ercejckq",
  top: "bqyx5xwx",
  borderTopStartRadius: "lqxn65m8",
  borderTopEndRadius: "aqkazoap",
  borderBottomEndRadius: "o0zo6k6a",
  borderBottomStartRadius: "pcwnqdp4",
  height: "ohuqqxaf",
  width: "qsdp9nde",
  backgroundColor: "jc68m8r9",
  cursor: "ajgl1lbb",
  ":hover": {
    backgroundColor: "ozgtawnr"
  },
  ":active": {
    backgroundColor: "qtmwicl4"
  }
};
const _ = {
  left: "jj8pz1c1"
};
const y = {
  right: "lah86wmf"
};
const C = {
  position: "g0rxnol2",
  start: "p2ethjgi",
  top: "hd6b059k"
};
const b = {
  position: "g0rxnol2",
  start: "axtsy33i",
  top: "hd6b059k"
};
function M(e, t) {
  let {
    children: n,
    cardWidth: a,
    spacing: r,
    carouselMargins: o,
    isRTL: f
  } = e;
  const p = (0, u.useRef)();
  const v = function (e, t) {
    return (0, u.useMemo)(() => ({
      getScrollLeft: () => {
        const n = e.current;
        if (n == null) {
          return null;
        } else if (t) {
          return -n.scrollLeft;
        } else {
          return n.scrollLeft;
        }
      },
      scrollTo: n => {
        let {
          left: a,
          behavior: r
        } = n;
        const o = e.current;
        if (o != null) {
          o.scrollTo({
            left: t ? -a : a,
            behavior: r
          });
        }
      }
    }), [t, e]);
  }(p, f);
  const [_, y] = function (e) {
    const [t, n] = (0, u.useState)(null);
    const [a, r] = (0, u.useState)(false);
    const o = (0, u.useRef)(null);
    const l = (0, u.useCallback)(() => {
      const n = e.getScrollLeft();
      if (n == null || t == null) {
        return void r(false);
      }
      const a = t;
      const l = n;
      if (l === a) {
        return void r(false);
      }
      const i = Math.abs(a - l) < 20 ? a : l + Math.sign(a - l) * 20;
      e.scrollTo({
        left: i,
        behavior: "instant"
      });
      const u = o.current == null || e.getScrollLeft() !== o.current;
      o.current = e.getScrollLeft();
      if (!u) {
        r(false);
      }
    }, [e, t]);
    (0, c.default)(l, {
      active: a
    });
    const i = (0, u.useCallback)(e => {
      n(e);
      r(true);
    }, []);
    return [t, e => i(e)];
  }(v);
  const [C, b] = (0, u.useState)(false);
  const [M, S] = (0, u.useState)(true);
  const A = (0, u.useRef)();
  const P = (0, d.default)(t);
  const O = (0, u.useCallback)(e => {
    A.current = e;
    P(e);
  }, [P, A]);
  const k = a + r;
  const D = (0, u.useCallback)(() => {
    var e;
    var t;
    const n = p.current;
    if (n == null) {
      return null;
    } else {
      return n.clientWidth - ((e = o == null ? undefined : o.left) !== null && e !== undefined ? e : r / 2) - ((t = o == null ? undefined : o.right) !== null && t !== undefined ? t : r / 2);
    }
  }, [o == null ? undefined : o.left, o == null ? undefined : o.right, r]);
  const I = (0, u.useCallback)(e => {
    const t = v.getScrollLeft();
    const n = D();
    if (t == null || n == null) {
      return;
    }
    const a = Math.ceil((t - 25) / k);
    const r = Math.floor((n + 25) / k);
    y((a - r) * k);
    (0, i.stopPropagation)(e);
  }, [v, D, k, y]);
  const R = (0, u.useCallback)(e => {
    const t = v.getScrollLeft();
    const n = D();
    if (t == null || n == null) {
      return;
    }
    const a = Math.floor((t + n + 25) / k);
    y(a * k);
    (0, i.stopPropagation)(e);
  }, [v, D, k, y]);
  const N = (0, u.useCallback)(e => {
    y(0);
    (0, i.stopPropagation)(e);
  }, [y]);
  const x = (0, u.useCallback)(e => {
    y(1 / 0);
    (0, i.stopPropagation)(e);
  }, [y]);
  const L = n.map((e, t) => u.default.createElement(T, {
    key: t,
    width: a
  }, e));
  const j = [];
  for (let e = 0; e < L.length; e++) {
    const t = e === 0 && o != null ? o.left : r / 2;
    const n = e === L.length - 1 && o != null ? o.right : r / 2;
    j.push(u.default.createElement("div", {
      key: "spacer-pre" + e,
      className: (0, s.default)(m),
      style: {
        width: t + "px"
      }
    }));
    j.push(L[e]);
    j.push(u.default.createElement("div", {
      key: "spacer-post-" + e,
      className: (0, s.default)(m),
      style: {
        width: n + "px"
      }
    }));
  }
  const B = (0, u.useCallback)(() => {
    const e = v.getScrollLeft();
    const t = p.current;
    if (e == null || t == null) {
      return;
    }
    const n = t.scrollWidth - t.clientWidth - e > 25;
    const a = e > 25;
    b(f ? n : a);
    S(f ? a : n);
  }, [f, v]);
  (0, u.useLayoutEffect)(() => {
    if (A.current == null) {
      return;
    }
    const e = A.current;
    return (0, l.observe)(e, B);
  }, [A, B]);
  return u.default.createElement("div", {
    className: (0, s.default)(h),
    ref: O
  }, C && u.default.createElement(w, {
    direction: "left",
    onClick: f ? R : I,
    onDoubleClick: f ? x : N
  }), M && u.default.createElement(w, {
    direction: "right",
    onClick: f ? I : R,
    onDoubleClick: f ? N : x
  }), u.default.createElement("div", {
    ref: p,
    className: (0, s.default)(g),
    onWheel: () => y(null),
    onScroll: B
  }, u.default.createElement("div", {
    className: (0, s.default)(E)
  }, j)));
}
var S = (0, u.forwardRef)(M);
function T(e) {
  let {
    children: t,
    width: n
  } = e;
  return u.default.createElement("div", {
    className: (0, s.default)(p),
    style: {
      width: n + "px"
    }
  }, t);
}
function w(e) {
  let {
    direction: t,
    onClick: n,
    onDoubleClick: a
  } = e;
  if (t === "left") {
    return u.default.createElement("button", {
      className: (0, s.default)(v, _),
      onClick: n,
      onDoubleClick: a
    }, u.default.createElement(r.ChevronLeftIcon, {
      className: (0, s.default)(C)
    }));
  } else {
    return u.default.createElement("button", {
      className: (0, s.default)(v, y),
      onClick: n,
      onDoubleClick: a
    }, u.default.createElement(o.ChevronRightIcon, {
      className: (0, s.default)(b)
    }));
  }
}
exports.default = S;