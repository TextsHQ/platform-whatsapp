var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/122583.js");
var o = a(require("../app/229922.js"));
var l = require("../app/15842.js");
var i = require("../app/724976.js");
var u = require("../app/984330.js");
var s = require("../app/713464.js");
var c = require("./811720.js");
var d = require("./512938.js");
var f = a(require("./495012.js"));
var p = a(require("../app/335540.js"));
var m = require("../app/914368.js");
var h = a(require("../main-chunk/258146.js"));
var g = require("../app/899841.js");
var E = a(require("./313292.js"));
var v = require("../app/459857.js");
var _ = require("./887222.js");
var y = require("../app/669050.js");
var C = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
var b = a(require("../app/895851.js"));
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const S = (0, d.FlatListFactory)();
function T(e, t) {
  const {
    active: n,
    selections: a,
    onSelectionChanged: d,
    onProductsLoaded: M,
    flatListController: T
  } = e;
  const w = (0, b.default)();
  const A = (0, C.useRef)(null);
  const P = (0, C.useRef)(null);
  const O = () => {
    const e = (0, v.getMaybeMeUser)();
    const t = (0, i.isString)(e) ? (0, y.createWid)(e) : e;
    return s.CatalogCollection.get(t);
  };
  const k = () => {
    const e = O();
    if (e != null) {
      return e.productCollection.getProductModels();
    } else {
      return [];
    }
  };
  const [D, I] = (0, C.useState)(k);
  const [R, N] = (0, C.useState)(false);
  const [x, L] = (0, C.useState)(() => k().length);
  const [j, B] = (0, C.useState)(true);
  const [F, G] = (0, C.useState)(true);
  const U = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const t = O();
    if (!t) {
      return;
    }
    const a = !t.afterCursor || !j;
    if (e) {
      (0, _.qplAnnotateCatalogView)(a);
    }
    if (a) {
      const n = t.productCollection.getProductModels();
      I(n);
      N(false);
      B(false);
      if (M) {
        M(n);
      }
      if (e) {
        (0, _.qplEndCatalogView)(l.QuickLogActionType.SUCCESS);
      }
    } else {
      N(true);
      (0, o.default)(s.CatalogCollection.findNextProductPage(t.id, e), w).then(t => {
        const a = t.length;
        I(t);
        N(false);
        L(a);
        B(x !== a);
        if (M) {
          M(t);
        }
        n.init(t);
        if (e) {
          (0, _.qplEndCatalogView)(l.QuickLogActionType.SUCCESS);
        }
      }).catch(() => {
        N(false);
        B(true);
        if (e) {
          (0, _.qplEndCatalogView)(l.QuickLogActionType.FAIL);
        }
      });
    }
  };
  (0, C.useEffect)(() => {
    n.init(D);
    N(true);
    s.CatalogCollection.find((0, v.getMaybeMeUser)()).catch((0, r.filteredCatch)(u.ServerStatusCodeError, () => {
      N(false);
      B(false);
      G(false);
      (0, _.qplDropCatalogView)();
    })).then(() => U(true));
  }, []);
  const W = e => {
    const t = e.currentTarget;
    const {
      scrollTop: n,
      clientHeight: a,
      scrollHeight: r
    } = t;
    if (r - a - n < m.SCROLL_FUDGE && !R) {
      U();
    }
  };
  const H = (e, t, r) => {
    a.setVal(e, t, r);
    n.setVal(e, r);
    if (d) {
      d(e, t);
    }
  };
  const V = e => {
    const t = a.isSelected(e);
    H(e, !t, false);
  };
  const q = e => {
    if (D.length === 0) {
      return;
    }
    const t = D[0];
    const n = !a.isSelected(t);
    H(t, n, e);
  };
  const Y = () => {
    if (A.current) {
      p.default.focus(A.current);
    }
  };
  (0, C.useImperativeHandle)(t, () => ({
    focus: Y,
    toggleFirst: q,
    updateForScrollEvent: W
  }));
  return C.default.createElement(h.default, {
    active: e.active,
    onEnter: e => {
      e.stopPropagation();
      e.preventDefault();
      if (n.value) {
        V(n.value);
      }
    },
    onLeave: e.onLeaveList,
    ref: A,
    onIndexChange: e => {
      var t;
      if (!((t = P.current) === null || t === undefined)) {
        t.scrollIntoViewIfNeeded(e);
      }
    }
  }, D.length !== 0 || R || j ? C.default.createElement(S, {
    ref: P,
    direction: "vertical",
    forceConsistentRenderCount: false,
    data: D.map(e => ({
      itemKey: e.id.toString(),
      data: e
    })),
    renderItem: e => {
      let {
        data: t
      } = e;
      return C.default.createElement(E.default, {
        key: t.id.toString(),
        product: t,
        selections: a,
        onClick: () => V(t),
        active: n
      });
    },
    flatListController: T,
    defaultItemHeight: g.PRODUCT_LIST_ITEM_HEIGHT
  }) : C.default.createElement(c.ListProducts, {
    hasCatalog: F
  }), R && C.default.createElement(f.default, null));
}
var w = (0, C.forwardRef)(T);
exports.default = w;