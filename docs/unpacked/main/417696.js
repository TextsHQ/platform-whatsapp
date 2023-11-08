var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListModalFactory = function () {
  return (0, h.forwardRef)(_);
};
var r = require("../main-chunk/409623.js");
var o = a(require("./908081.js"));
var l = a(require("./324093.js"));
var i = require("./626194.js");
var u = require("./512938.js");
var s = a(require("./570834.js"));
var c = a(require("../app/988410.js"));
var d = a(require("../app/335540.js"));
var f = require("../app/81644.js");
var p = require("../app/317259.js");
var m = require("../app/118612.js");
var h = function (e, t) {
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
a(require("../app/156720.js"));
var g = a(require("../app/637660.js"));
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
const v = {
  newsletterBackgroundColor: {
    backgroundColor: "ihvf49ua"
  }
};
function _(e, t) {
  const {
    title: n,
    titleStr: a,
    tsNavigationData: E,
    onBack: _,
    onCancel: y,
    onSearch: C,
    searchPlaceholder: b,
    rotateList: M = false,
    renderItem: S,
    data: T,
    emptyState: w,
    selection: A,
    onSelect: P,
    firstRows: O,
    lastRow: k,
    isNewsletter: D = false,
    spinnerInHeader: I = false,
    testid: R,
    scrollToInitialSelection: N
  } = e;
  const x = (0, g.default)(() => new s.default());
  const L = (0, h.useRef)();
  const j = (0, h.useRef)(null);
  (0, h.useEffect)(() => {
    if (N === true) {
      (() => {
        if (L.current) {
          const t = A == null ? undefined : A.value;
          if (t == null || typeof t != "object") {
            return;
          }
          const n = t.itemKey;
          if (n == null) {
            __LOG__(4, undefined, new Error(), true)`ListModalImpl: passed scrollToInitialSelection with a selection that does not expose itemKey`;
            return void SEND_LOGS("ListModalImpl-missing-itemKey");
          }
          const a = T.findIndex(e => e.itemKey === n);
          var e;
          if (a !== -1) {
            if (!(L == null || (e = L.current) === null || e === undefined)) {
              e.scrollIntoViewIfNeeded(a, 100);
            }
          }
        }
      })();
    }
  }, []);
  const B = (0, h.useMemo)(() => (0, u.FlatListFactory)(), []);
  const F = e => {
    e.preventDefault();
    e.stopPropagation();
    const t = T[0];
    if (t) {
      if (!(P == null)) {
        P(e, t);
      }
    }
  };
  const G = e => {
    if (C) {
      C(e);
    }
  };
  const U = e => {
    const t = e.relatedTarget;
    return t instanceof HTMLElement && e.currentTarget instanceof HTMLElement && !e.currentTarget.contains(t);
  };
  const W = {
    down: e => {
      if (L.current) {
        e.preventDefault();
        e.stopPropagation();
        c.default.shouldIndicateFocus();
        if (!(A == null)) {
          A.setFirst(true);
        }
      }
    }
  };
  let H;
  if (C) {
    H = h.default.createElement(f.HotKeys, {
      handlers: W
    }, h.default.createElement(r.ListSearch, {
      ref: j,
      onSearch: G,
      onEnter: F,
      placeholder: b,
      focusOnMount: true
    }));
  }
  const V = T.length ? h.default.createElement(f.HotKeys, {
    handlers: {
      down: e => {
        e.preventDefault();
        e.stopPropagation();
        if (A) {
          A.setNext(true, M);
        }
      },
      up: e => {
        if (!A) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (A.prev(M) > -1) {
          A.setPrev(true, M);
        } else if (j.current) {
          A.unset();
          c.default.shouldIndicateFocus();
          d.default.focus(j.current);
        }
      }
    },
    onFocus: e => {
      if (U(e)) {
        if (!(A == null)) {
          A.setFirst(true);
        }
      }
    },
    onBlur: e => {
      if (U(e)) {
        if (!(A == null)) {
          A.unset();
        }
      }
    },
    tabIndex: 0
  }, h.default.createElement(B, {
    data: T,
    ref: L,
    flatListController: x.current,
    direction: "vertical",
    renderItem: S
  })) : w;
  const q = (0, p.isStringOrFbt)(n) ? n : undefined;
  return h.default.createElement(m.Modal, {
    ariaLabel: q,
    type: m.ModalTheme.Tower,
    ref: t,
    tsNavigationData: E
  }, h.default.createElement(o.default, {
    key: "contact-modal",
    testid: R,
    xstyle: D ? v.newsletterBackgroundColor : undefined
  }, h.default.createElement(i.DrawerHeader, {
    title: n,
    titleStr: a,
    type: i.DRAWER_HEADER_TYPE.POPUP,
    onBack: _,
    onCancel: y,
    spinner: I
  }), H, h.default.createElement(l.default, {
    flatListControllers: [x.current]
  }, O, V, k)));
}