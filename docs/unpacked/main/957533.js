var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WDSMenuItem = undefined;
exports.useMenuItem = p;
var r = require("../app/180519.js");
var o = a(require("../app/625903.js"));
var l = require("./219753.js");
var i = require("./268541.js");
var u = a(require("../app/556869.js"));
var s = function (e, t) {
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
a(require("../app/156720.js"));
var c = a(require("../app/38085.js"));
var d = a(require("../app/49710.js"));
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
function p(e, t) {
  (0, i.useRegisterItem)(e, t);
  const n = (0, i.useMenu)();
  if (n == null) {
    throw (0, u.default)("[Menu] MenuItem must be a child of a MenuItemList");
  }
  return {
    menu: n,
    colorScheme: n.colorScheme,
    size: n.size,
    isActive: (n == null ? undefined : n.activeItemId) === e,
    isFiltered: n.filteredItems != null && n.filteredItems.has(e) === false,
    material: n.material,
    allowTabNavigation: n.allowTabNavigation,
    border: n.border
  };
}
const m = {
  container: {
    textAlign: "ljrqcn24",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    alignSelf: "l33m68ws",
    width: "ln8gz9je"
  },
  disabled: {
    cursor: "h2qzpyga"
  }
};
const h = (0, s.forwardRef)((e, t) => {
  const {
    optionId: n,
    primary: a,
    detailRight: i,
    secondary: u,
    primaryRight: f,
    secondaryRight: h,
    detailLeft: g,
    disabled: E,
    children: v,
    type: _,
    onSelect: y,
    searchCriteria: C,
    size: b,
    testid: M,
    border: S,
    onActive: T,
    onInactive: w
  } = e;
  const A = (0, s.useRef)(null);
  const P = (0, c.default)(A, t);
  const {
    menu: O,
    isActive: k,
    isFiltered: D,
    colorScheme: I,
    size: R,
    material: N,
    allowTabNavigation: x,
    border: L
  } = p(n, {
    id: n,
    type: _,
    label: a,
    searchCriteria: C,
    onSelect: E !== true ? y : () => {},
    ref: A
  });
  const j = (0, d.default)(k);
  (0, s.useEffect)(() => {
    if (k === true && j !== true) {
      if (!(T == null)) {
        T();
      }
    } else if (k === false && j === true) {
      if (!(w == null)) {
        w();
      }
    }
  }, [k, j, T, w]);
  if (D === true) {
    return null;
  } else {
    return s.default.createElement(o.default, {
      ref: P,
      role: "listitem",
      xstyle: [m.container, E === true && m.disabled],
      onClick: E !== true ? e => {
        e.stopPropagation();
        O.selectItem(n);
      } : null,
      tabIndex: x ? 0 : -1,
      dataTab: x ? 0 : -1,
      testid: M,
      onFocus: x ? () => {
        O.activateItem(n);
      } : null,
      onBlur: x ? () => {
        O.activateItem(null);
      } : null
    }, s.default.createElement(l.WDSCell, {
      size: b != null ? b : R,
      colorScheme: I,
      material: N,
      disabled: E,
      primary: a != null ? s.default.createElement(r.WDSTextTitle, null, a) : null,
      primaryRight: f,
      secondary: u != null ? s.default.createElement(r.WDSTextMuted, {
        textWrap: "ellipsis"
      }, u) : null,
      secondaryRight: h,
      detailLeft: g,
      detailRight: i,
      active: k,
      tabIndex: -1,
      testid: M,
      border: S || L
    }), v);
  }
});
exports.WDSMenuItem = h;
h.displayName = "WDSMenuItem";