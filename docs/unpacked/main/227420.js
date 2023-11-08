var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderableList = function (e) {
  const {
    items: t,
    renderItem: n,
    onReordered: a
  } = e;
  const c = (0, o.useRef)(null);
  const f = (0, u.default)(() => new Map());
  const p = (0, o.useRef)(0);
  const [m, h] = (0, o.useState)();
  const [g, E] = (0, o.useState)(null);
  const [v, _] = (0, o.useState)(null);
  const [y, C] = (0, o.useState)(null);
  const b = y != null;
  const M = y == null || v == null || m == null ? t : function (e) {
    let {
      items: t,
      draggedItemKey: n,
      getItemHeight: a,
      dragPosition: r
    } = e;
    const o = n != null ? t.find(e => e.key === n) : null;
    if (o == null || r == null) {
      return t;
    }
    const l = [...t];
    const i = l.findIndex(e => e.key === n);
    l.splice(i, 1);
    let u = 0;
    let s = 0;
    let c = 0;
    for (const e of t) {
      if (r > u) {
        c = s;
      }
      u += a(e);
      s++;
    }
    l.splice(c, 0, o);
    return l;
  }({
    items: y,
    draggedItemKey: g,
    getItemHeight: e => {
      var t;
      var n;
      if ((t = (n = m.get(e.key)) === null || n === undefined ? undefined : n.height) !== null && t !== undefined) {
        return t;
      } else {
        return 0;
      }
    },
    dragPosition: v
  });
  const S = e => {
    const t = c.current;
    if (t == null) {
      return null;
    }
    const n = f.current.get(e);
    if (n == null) {
      return null;
    }
    const a = t.getBoundingClientRect().y;
    const r = n.getBoundingClientRect();
    return {
      clientTop: r.top,
      startTop: r.top - a,
      height: r.height
    };
  };
  (0, s.useListener)(g == null ? null : document, "mousemove", e => {
    const t = c.current;
    if (t == null) {
      return;
    }
    const n = e.clientY - t.getBoundingClientRect().y;
    _(n);
  });
  const T = (0, i.default)(() => {
    C(null);
    h(null);
  }, 300);
  const w = (e, n) => {
    var a;
    if (y != null) {
      return;
    }
    const r = (a = S(e)) === null || a === undefined ? undefined : a.clientTop;
    if (r != null) {
      p.current = r - n.clientY;
      (() => {
        const e = new Map();
        for (const n of t) {
          e.set(n.key, S(n.key));
        }
        h(e);
      })();
      E(e);
      C(t);
    }
  };
  (0, s.useListener)(g == null ? null : document, "mouseup", () => {
    T();
    a(M);
    E(null);
    _(null);
  });
  A = g != null;
  (0, o.useEffect)(() => {
    if (!A) {
      return;
    }
    const {
      body: e
    } = document;
    if (e == null) {
      return;
    }
    const t = document.createElement("div");
    t.className = (0, l.default)(d.draggingCursorOverlay);
    e.appendChild(t);
    return () => {
      t.remove();
    };
  }, [A]);
  var A;
  let P = null;
  let O = 0;
  if (m != null) {
    P = new Map();
    let e = 0;
    for (const t of M) {
      const n = m.get(t.key);
      if (n == null) {
        continue;
      }
      const a = e;
      P.set(t.key, a);
      O = a;
      e += n.height;
    }
  }
  const k = (y != null ? y : t).map((e, t) => {
    const a = m == null ? undefined : m.get(e.key);
    let i;
    if (e.key === g && v != null) {
      var u;
      const e = (0, r.default)(a == null ? undefined : a.startTop, "bounds?.startTop");
      const t = (u = p.current) !== null && u !== undefined ? u : 0;
      i = Math.min(Math.max(0, v + t), O) - e;
    } else {
      var s;
      const t = a == null ? undefined : a.startTop;
      const n = (s = P) === null || s === undefined ? undefined : s.get(e.key);
      i = b && n != null && t != null ? n - t : 0;
    }
    return o.default.createElement("div", {
      key: e.key,
      ref: t => {
        if (t == null) {
          f.current.delete(e.key);
        } else {
          f.current.set(e.key, t);
        }
      },
      className: (0, l.default)(d.itemWrapper, g !== e.key && b ? d.itemWrapperEasing : undefined),
      style: {
        transform: `translateY(${i}px)`
      }
    }, n({
      item: e,
      startDrag: w,
      index: t
    }));
  });
  return o.default.createElement("div", {
    ref: c,
    className: (0, l.default)(d.container)
  }, k);
};
var r = a(require("../app/670983.js"));
var o = function (e, t) {
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
var l = a(require("../app/156720.js"));
var i = a(require("../app/710629.js"));
var u = a(require("../app/637660.js"));
var s = require("../app/808446.js");
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
  container: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh"
  },
  itemWrapper: {
    width: "ln8gz9je"
  },
  itemWrapperEasing: {
    transitionProperty: "bo8jc6qi",
    transitionDuration: "hswow7x1",
    transitionTimingFunction: "mks54fll"
  },
  draggingCursorOverlay: {
    cursor: "kvmx9pbu",
    position: "snyj76hw",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    zIndex: "ity2ubfj"
  }
};