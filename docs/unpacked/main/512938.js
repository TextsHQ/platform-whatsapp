var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_ITEM_WIDTH = exports.DEFAULT_ITEM_HEIGHT = undefined;
exports.FlatListFactory = function () {
  return (0, g.forwardRef)(T);
};
exports.UnknownDataError = undefined;
var r = a(require("../vendor/81109.js"));
var o = require("../app/477689.js");
var l = require("../app/396574.js");
var i = a(require("./486981.js"));
var u = a(require("../app/335540.js"));
var s = require("../app/806279.js");
var c = require("../app/81644.js");
var d = require("./824331.js");
var f = a(require("./588418.js"));
var p = require("./390185.js");
var m = a(require("../app/844453.js"));
var h = a(require("../app/556869.js"));
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
var E = a(require("./805956.js"));
var v = a(require("../app/710629.js"));
var _ = a(require("../app/637660.js"));
var y = a(require("../app/17533.js"));
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const b = 72;
exports.DEFAULT_ITEM_WIDTH = b;
const M = 72;
exports.DEFAULT_ITEM_HEIGHT = M;
class S extends (0, o.customError)("UnknownDataError") {
  constructor(e) {
    super(`Unknown data encountered while rendering. Item key: ${e.itemKey}`);
  }
}
function T(e, t) {
  const {
    role: n,
    flatListController: a,
    direction: o,
    itemEnterAnimationsEnabled: C = false,
    onPointerEventsOff: S,
    onPointerEventsOn: T,
    disablePointerEventsOnScroll: O = true,
    reorderAnimationsEnabled: k = true,
    renderItem: D,
    defaultItemWidth: I = b,
    defaultItemHeight: R = M,
    extraItems: N = 5,
    forceConsistentRenderCount: x = true,
    keyOrder: L = p.KeyOrder.NORMAL,
    testid: j,
    className: B,
    recycleKeys: F = true,
    handleKeyboardNavigation: G = false,
    focusableItemSelector: U
  } = e;
  const {
    enhancedData: W,
    listLength: H
  } = function (e, t, n, a) {
    let o = 0;
    let l = 0;
    return {
      enhancedData: e.map(e => {
        const i = (0, r.default)((0, r.default)({}, e), {}, {
          offset: o,
          dataIndex: l
        });
        const u = w(e, t, n, a);
        o += u;
        l++;
        return i;
      }),
      listLength: o
    };
  }(e.data, o, I, R);
  const V = (0, g.useRef)(null);
  const q = (0, _.default)(() => new p.KeyPool());
  const Y = (0, g.useRef)(true);
  const z = (0, g.useRef)(null);
  const [K, Q] = (0, g.useState)(0);
  const [X, Z] = (0, g.useState)(0);
  const [J, $] = (0, g.useState)(0);
  const [ee, te] = (0, g.useState)(0);
  const [ne, ae] = (0, g.useState)(0);
  const [re, oe] = (0, g.useState)(H);
  const le = (0, g.useRef)(0);
  const ie = e => {
    const {
      scrollFromStart: t = J,
      offsetFromStart: n = ee,
      bodyDimension: a = ne
    } = e != null ? e : {};
    if (a === undefined || n === undefined) {
      throw (0, h.default)("FlatList:Computing FlatList without a valid Container");
    }
    let r = 0;
    for (let e = 0; e < W.length; e++) {
      const a = W[e];
      const l = w(a, o, I, R);
      if (n + a.offset + l > t) {
        r = e;
        break;
      }
    }
    let l = W.length - 1;
    let i = 0;
    if (W.length > 0) {
      i = x ? Math.min(W[r].offset + a, H) : Math.min(t + a, H + n);
    }
    for (let e = r; e < W.length; e++) {
      const t = W[e];
      const a = w(t, o, I, R);
      if (n + t.offset + a >= i) {
        l = e;
        break;
      }
    }
    let u = N;
    const s = N - r;
    if (s > 0) {
      u += s;
    }
    let c = N;
    const d = l + N - W.length;
    if (d > 0) {
      c += d;
    }
    return {
      firstIndex: Math.max(r - c, 0),
      lastIndex: Math.min(l + u, W.length - 1)
    };
  };
  const ue = (0, y.default)(e => {
    const t = V.current;
    if (!t) {
      return;
    }
    const n = o === "horizontal" ? t.getBoundingClientRect().left - e.position.left : t.getBoundingClientRect().top - e.position.top;
    const a = Math.max(n, 0);
    const r = o === "horizontal" ? e.width : e.height;
    const l = ie({
      offsetFromStart: a,
      bodyDimension: r
    });
    Q(l.firstIndex);
    Z(l.lastIndex);
    te(a);
    ae(r);
  });
  const [se, ce] = (0, g.useState)(false);
  const de = (0, g.useRef)(false);
  const fe = (0, v.default)(() => {
    if (se) {
      return fe();
    }
    if (z.current != null) {
      s.UIBusyTasks.clearBusy(z.current);
      z.current = null;
    }
    if (!(T == null)) {
      T();
    }
    const e = V.current;
    if (e) {
      e.style.pointerEvents = "auto";
    }
    Y.current = false;
  }, 150);
  (0, E.default)(() => {
    if (O === true) {
      (() => {
        z.current = s.UIBusyTasks.setBusy(z.current);
        if (Y.current) {
          return;
        }
        if (!(S == null)) {
          S();
        }
        const e = V.current;
        if (e) {
          e.style.pointerEvents = "none";
        }
        Y.current = true;
      })();
    }
    const e = a.getScrollFromStart();
    if (e == null) {
      throw (0, h.default)("FlatList:ScrollEvent thrown while container is unmounted");
    }
    const t = Math.max(e, 0);
    const n = ie({
      scrollFromStart: t
    });
    Q(n.firstIndex);
    Z(n.lastIndex);
    $(t);
    if (!de.current) {
      ce(false);
      if (O === true) {
        fe();
      }
    }
  }, {
    active: se
  });
  const pe = () => {
    if (se) {
      de.current = true;
    } else {
      de.current = false;
      ce(true);
    }
  };
  (0, g.useLayoutEffect)(() => {
    a.registerList({
      handleLayout: ue,
      handleScroll: pe
    });
    return () => {
      a.unregisterList();
    };
  }, []);
  const me = ie();
  if (me.firstIndex !== K) {
    Q(me.firstIndex);
  }
  if (me.lastIndex !== X) {
    Z(me.lastIndex);
  }
  if (H !== re && (!C || H > re)) {
    oe(H);
  }
  (0, g.useImperativeHandle)(t, () => ({
    scrollIntoViewIfNeeded(e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (e < 0 || e >= W.length) {
        throw (0, h.default)("Invalid Index.");
      }
      const n = W[e].offset;
      if (n < J - t || n > J + ne + t) {
        a.setScrollFromStart(n);
      }
    }
  }));
  const he = o === "horizontal" ? {
    width: re
  } : {
    height: re
  };
  const ge = (0, g.useRef)(new Map());
  const Ee = (t, n, a) => {
    const l = o === "horizontal" ? {
      width: A(n, I)
    } : {
      height: P(n, R)
    };
    const i = (0, g.createRef)();
    if (e.handleKeyboardNavigation === true) {
      ge.current.set(n.dataIndex, i);
    }
    return g.default.createElement(f.default, {
      ref: i,
      key: t,
      data: (0, r.default)((0, r.default)({}, n), l),
      animate: !!k && (0, d.shouldAnimate)(),
      zIndex: W.length - a - 1,
      renderItem: D,
      listDirection: o,
      testid: `list-item-${a}`,
      role: "listitem",
      onFocus: () => {
        le.current = n.dataIndex;
      }
    });
  };
  const ve = W.slice(K, X + 1);
  const _e = F === true ? q.current.recycleKeysAndMap(ve, L) : null;
  const ye = _e ? _e.map((e, t) => {
    let {
      rctKey: n,
      data: a
    } = e;
    return Ee(n, a, t);
  }) : ve.map((e, t) => Ee(e.itemKey, e, t));
  const Ce = e => {
    var t;
    if (((t = V.current) === null || t === undefined ? undefined : t.contains(document.activeElement)) && document.activeElement !== V.current) {
      return le.current + e;
    } else {
      return 0;
    }
  };
  const be = e => {
    if (typeof U == "string") {
      const t = e.querySelector(U);
      u.default.focus(t);
    }
  };
  const Me = e => {
    e.preventDefault();
    const t = Ce(-1);
    const n = ge.current.get(t);
    if (n == null ? undefined : n.current) {
      be(n.current);
    }
  };
  const Se = e => {
    e.preventDefault();
    const t = Ce(1);
    const n = ge.current.get(t);
    if (n == null ? undefined : n.current) {
      be(n.current);
    }
  };
  let Te = {};
  if (G && o === "vertical") {
    Te = {
      up: Me,
      down: Se
    };
  } else if (G && o === "horizontal") {
    Te = {
      left: Me,
      right: Se
    };
  }
  return g.default.createElement(c.HotKeys, {
    tabIndex: G ? 0 : -1,
    handlers: Te,
    className: B,
    onFocus: () => {
      if (G && V.current === document.activeElement) {
        const e = ge.current.get(le.current);
        if (e == null ? undefined : e.current) {
          be(e.current);
        }
      }
    },
    ref: V
  }, g.default.createElement("div", {
    "aria-label": e["aria-label"],
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [i.default.horizontalListViewport]: o === "horizontal",
      [i.default.verticalListViewport]: o === "vertical",
      [i.default.viewport]: true
    }),
    role: n,
    "aria-rowcount": e["aria-rowcount"],
    style: he
  }, C ? g.default.createElement(m.default, {
    transitionName: "fade",
    onAnimationComplete: () => {
      oe(H);
    }
  }, ye) : ye));
}
function w(e, t, n, a) {
  if (t === "horizontal") {
    return A(e, n);
  } else {
    return P(e, a);
  }
}
function A(e, t) {
  if (e.width != null && e.width > 0) {
    return e.width;
  } else {
    return t;
  }
}
function P(e, t) {
  if (e.height != null && e.height > 0) {
    return e.height;
  } else {
    return t;
  }
}
exports.UnknownDataError = S;