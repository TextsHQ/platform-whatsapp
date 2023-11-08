var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickersScrollGridPresentational = undefined;
var r = a(require("../vendors-main/133856.js"));
var o = require("../app/287461.js");
var l = require("../app/707529.js");
var i = require("../app/81644.js");
var u = require("./833654.js");
var s = a(require("./929796.js"));
var c = require("../app/745482.js");
var d = a(require("./767569.js"));
var f = require("./187961.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var m = a(require("../app/156720.js"));
var h = a(require("../app/637660.js"));
var g = a(require("../app/49710.js"));
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = (0, p.forwardRef)((e, t) => {
  let {
    onFocusPrev: n,
    onScroll: a,
    resetScroll: E,
    onStickerClick: v,
    onStickerEnter: _,
    selectedTab: C,
    stickers: b,
    theme: M,
    loadOneRow: S = false,
    displayLocation: T
  } = e;
  const w = (0, p.useRef)();
  const A = (0, h.default)(() => new Map());
  const P = (0, p.useRef)(new Set());
  const [O, k] = (0, p.useState)(y(T));
  const [D, I] = (0, p.useState)(function (e) {
    if (e !== u.DisplayLocation.ExpressionsPanel) {
      return 6;
    }
    if ((0, o.getABPropConfigValue)("web_expression_panels_show_less_stickers")) {
      return 3;
    } else {
      return 4;
    }
  }(T));
  const R = (0, g.default)(b);
  (0, p.useImperativeHandle)(t, () => ({
    focus(e) {
      const t = A.current;
      let n = e || 0;
      n = Math.min(n, t.size);
      n = Math.max(n, 0);
      const a = t.get(n);
      if (a) {
        a.focus();
      }
    },
    scrollToTop() {
      const e = w.current;
      if (e) {
        e.scrollTop = 0;
      }
    }
  }));
  const N = (0, p.useCallback)(() => {
    const e = A.current;
    const t = e.get(0);
    if (t == null) {
      return void I(1);
    }
    const n = t.getOffsetTop();
    const a = e.size;
    for (let t = 0; t < a; t++) {
      const a = e.get(t);
      if (a && a.getOffsetTop() !== n) {
        return void I(t);
      }
    }
    I(e.size);
  }, [A]);
  (0, p.useEffect)(() => {
    const e = (0, r.default)(b, R, (e, t) => e.id === t.id);
    if (e.length !== b.length && R !== b) {
      P.current = new Set(e.map(e => e.id));
      k(y(T));
    }
  }, [b, R, T]);
  const x = () => {
    const e = A.current;
    const t = e.size;
    for (let n = 0; n < t; n++) {
      const t = e.get(n);
      if (t && t.hasFocus()) {
        return n;
      }
    }
    return -1;
  };
  const L = e => {
    var t;
    if (e === 0) {
      return;
    }
    const a = x();
    if (a === -1) {
      return;
    }
    let r = a + e;
    if (r < 0) {
      return void (n == null || n());
    }
    const o = (t = w.current) === null || t === undefined ? undefined : t.parentElement;
    if (r < D && o) {
      o.scrollTop = 0;
      if (!(E == null)) {
        E();
      }
    }
    const l = A.current;
    r = Math.min(r, l.size - 1);
    const i = l.get(r);
    if (i) {
      i.focus();
    }
  };
  const j = e => {
    L(0 - e);
  };
  const B = e => {
    if (e != null) {
      P.current.add(e);
      if (P.current.size >= O * D) {
        k(O + function (e) {
          if (e !== u.DisplayLocation.ExpressionsPanel) {
            return 2;
          }
          if ((0, o.getABPropConfigValue)("web_expression_panels_show_less_stickers")) {
            return 3;
          } else {
            return 4;
          }
        }(T));
      }
      N();
    }
  };
  (0, p.useEffect)(() => {
    if (b.length >= O * D) {
      k(Math.ceil(b.length / D));
    }
  }, [b.length]);
  const F = (S ? b.slice(0, D * O) : b).map((e, t) => {
    const n = A.current;
    const a = e.isPlaceholder || e.isCreateButton || e.id == null ? `${c.PRE_PLACEHOLDER_ID}${t}` : e.id;
    return p.default.createElement(l.ErrorBoundary, {
      key: a,
      name: "sticker-item"
    }, p.default.createElement(d.default, {
      onClick: v,
      onEnter: _,
      onDownload: B,
      ref: e => {
        if (e) {
          n.set(t, e);
        } else {
          n.delete(t);
        }
      },
      selectedTab: C,
      sticker: e,
      downloadErrorShouldThrow: false,
      theme: T === u.DisplayLocation.ExpressionsPanel ? "stickerExpressionsPanel" : undefined
    }));
  });
  return p.default.createElement(s.default, {
    onResize: N,
    className: (0, m.default)(f.stickersScrollGridPresentationalStyles.fullHeight)
  }, p.default.createElement(i.HotKeys, {
    ref: w,
    className: (0, m.default)(M === "searchable" && f.stickersScrollGridPresentationalStyles.unscrollable, f.stickersScrollGridPresentationalStyles.container),
    handlers: {
      up: e => {
        e.stopPropagation();
        e.preventDefault();
        j(D);
      },
      down: e => {
        e.stopPropagation();
        e.preventDefault();
        const t = x();
        const n = A.current;
        const a = Math.min(t + D, n.size - 1);
        if (Math.floor(t / D) !== Math.floor(a / D)) {
          L(D);
        }
      },
      left: e => {
        e.stopPropagation();
        e.preventDefault();
        j(1);
      },
      right: e => {
        e.stopPropagation();
        e.preventDefault();
        L(1);
      }
    },
    onScroll: () => {
      const e = w.current;
      if (e) {
        if (!(a == null)) {
          a(e);
        }
      }
    }
  }, F));
});
v.displayName = "StickersScrollGridPresentationalImpl";
const _ = v;
function y(e) {
  if (e !== u.DisplayLocation.ExpressionsPanel) {
    return 2;
  } else if ((0, o.getABPropConfigValue)("web_expression_panels_show_less_stickers")) {
    return 4;
  } else {
    return 6;
  }
}
exports.StickersScrollGridPresentational = _;