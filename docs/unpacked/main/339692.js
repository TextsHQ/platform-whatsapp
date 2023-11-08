var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/498913.js"));
var o = a(require("../vendors-main/974691.js"));
var l = a(require("./423713.js"));
var i = require("./958548.js");
var u = require("./397454.js");
var s = require("../app/81644.js");
var c = a(require("../app/932325.js"));
var d = require("./150396.js");
var f = require("./468878.js");
var p = a(require("./929796.js"));
var m = a(require("../app/625903.js"));
var h = a(require("../app/395967.js"));
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var E = a(require("../app/156720.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = require("../vendor/76672.js").Mirrored(["Left", "Right"]);
const y = {
  button: {
    position: "lhggkp7q",
    zIndex: "jnl3jror",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    height: "ppled2lx",
    backgroundColor: "jfnhg5wd"
  },
  buttonIcon: {
    color: "a633jkfz"
  },
  floatRight: {
    top: "qq0sjtgm",
    right: "grt5ktjy"
  },
  floatLeft: {
    top: "qq0sjtgm",
    left: "tukmaf4q"
  },
  resizeContainer: {
    height: "ppled2lx",
    width: "ln8gz9je",
    backgroundColor: "jfnhg5wd"
  },
  tabItem: {
    display: "l7jjieqr",
    marginStart: "fooq7fky",
    marginEnd: "bugiwsl0"
  },
  tabContainer: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    whiteSpace: "le5p0ye3"
  },
  tabList: {
    transitionProperty: "bo8jc6qi",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "pu4k07i0"
  }
};
const C = (e, t, n, a) => {
  if (!e || !t) {
    return false;
  }
  const r = e.getBoundingClientRect();
  const o = t.getBoundingClientRect();
  const l = (n == null ? undefined : n.clientWidth) || 0;
  const i = (a == null ? undefined : a.clientWidth) || 0;
  return o.right > r.right - (c.default.isRTL() ? i : l) || o.left < r.left + (c.default.isRTL() ? l : i);
};
function b(e) {
  let {
    xstyle: t,
    direction: n,
    onClick: a,
    onRef: r
  } = e;
  const o = n === _.Left ? g.default.createElement(i.ChevronLeftIcon, {
    xstyle: y.buttonIcon
  }) : g.default.createElement(u.ChevronRightIcon, {
    xstyle: y.buttonIcon
  });
  return g.default.createElement(m.default, {
    ref: r,
    xstyle: [y.button, t],
    onClick: a
  }, o);
}
function M(e, t) {
  const [n, a] = (0, g.useState)(0);
  const [i, u] = (0, g.useState)(0);
  const [m, v] = (0, g.useState)(0);
  const [M, S] = (0, g.useState)(false);
  const [T, w] = (0, g.useState)(0);
  const [A, P] = (0, g.useState)(0);
  const {
    isKeyboardUser: O
  } = (0, h.default)();
  const {
    onItemClick: k,
    numItems: D,
    renderItem: I,
    selectedIndex: R,
    buttonStyle: N
  } = e;
  const x = (0, g.useRef)([]);
  const L = (0, g.useRef)([]);
  const j = (0, g.useRef)(null);
  const B = (0, g.useRef)(null);
  const F = (0, g.useRef)(null);
  (0, g.useEffect)(() => {
    if (!k) {
      return;
    }
    const e = (0, o.default)(R, 0, D);
    if (e !== R) {
      k(e);
      __LOG__(4, undefined, new Error(), true)`Selection out of bounds`;
      SEND_LOGS(`auto_carousel_menu: selectedIndex (${R}) is out of bounds (0-${D})`);
    }
    if (R > D) {
      k(D);
    } else if (R < 0) {
      k(0);
    }
  }, [R, D, k]);
  (0, g.useLayoutEffect)(() => {
    var e;
    const t = e => e ? c.default.isRTL() ? n - e.offsetLeft - e.clientWidth : e.offsetLeft : 0;
    const a = x.current[R];
    const r = x.current[i];
    const o = x.current[x.current.length - 1];
    const l = t(r);
    const u = ((e, n) => e ? t(e) + e.clientWidth - n : 0)(o, l);
    w((a == null ? undefined : a.clientWidth) || 0);
    P((a == null ? undefined : a.offsetLeft) || 0);
    v(l);
    S(u <= n);
    if (!((e = L.current[R]) === null || e === undefined)) {
      e.focus();
    }
  }, [x, R, i, n, D]);
  const G = (e, t) => {
    if (k) {
      k(e, t);
    }
  };
  const U = () => {
    if (!M) {
      u((0, o.default)(i + 3, 0, D));
    }
  };
  const W = () => {
    if (i !== 0) {
      u((0, o.default)(i - 3, 0, D));
    }
  };
  const H = (0, g.useCallback)(() => {
    var e;
    if (!((e = L.current[R]) === null || e === undefined)) {
      e.focus();
    }
  }, [R]);
  const [V, q] = c.default.isRTL() ? [y.floatRight, y.floatLeft] : [y.floatLeft, y.floatRight];
  const [Y, z] = c.default.isRTL() ? [_.Right, _.Left] : [_.Left, _.Right];
  const K = g.default.createElement(b, {
    xstyle: [N, V],
    direction: Y,
    onClick: W,
    onRef: e => {
      F.current = e;
    }
  });
  const Q = g.default.createElement(b, {
    xstyle: [N, q],
    direction: z,
    onClick: U,
    onRef: e => {
      B.current = e;
    }
  });
  const X = (c.default.isRTL() ? 1 : -1) * m;
  const Z = () => {
    var e;
    return ((e = j.current) === null || e === undefined ? undefined : e.contains(document.activeElement)) || false;
  };
  (0, g.useImperativeHandle)(t, () => ({
    focus: H,
    hasFocus: Z
  }));
  return g.default.createElement(d.MenuContainer, {
    theme: e.theme
  }, g.default.createElement(p.default, {
    className: (0, E.default)(y.resizeContainer),
    onResize: e => {
      let {
        width: t
      } = e;
      a(t);
    }
  }, !(i <= 0) && K, g.default.createElement("div", {
    ref: j,
    className: (0, E.default)(y.tabContainer)
  }, g.default.createElement(s.HotKeys, {
    className: (0, E.default)(y.tabList),
    style: {
      transform: "translateX(" + X + "px)"
    },
    role: "tablist",
    handlers: {
      left: e => {
        const t = c.default.isRTL() ? 1 : -1;
        const n = (0, o.default)(R + t, 0, D - 1);
        const a = L.current[n];
        if (C(j.current, a, B.current, F.current)) {
          if (c.default.isRTL()) {
            U();
          } else {
            W();
          }
        }
        G(n, e);
        e.preventDefault();
      },
      right: e => {
        const t = c.default.isRTL() ? -1 : 1;
        const n = (0, o.default)(R + t, 0, D - 1);
        const a = L.current[n];
        if (C(j.current, a, B.current, F.current)) {
          if (c.default.isRTL()) {
            W();
          } else {
            U();
          }
        }
        G(n, e);
        e.preventDefault();
      }
    },
    tabIndex: null
  }, (0, r.default)(D, e => {
    t = e;
    n = R === e;
    return g.default.createElement("div", {
      key: t,
      className: (0, E.default)(y.tabItem),
      ref: e => {
        x.current[t] = e;
      }
    }, g.default.createElement(f.MenuTab, {
      key: t,
      role: "tab",
      onRef: e => {
        L.current[t] = e;
      },
      onClick: G,
      sectionId: t,
      selected: n,
      showFocusIndicator: O,
      theme: f.THEMES.NONE
    }, I(t)));
    var t;
    var n;
  }), g.default.createElement(l.default, {
    selectedTabIndex: R,
    width: T,
    offsetPx: A,
    hide: false,
    animate: true
  }))), !M && Q));
}
var S = (0, g.forwardRef)(M);
exports.default = S;