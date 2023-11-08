var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WDSMenuController = exports.Register = undefined;
exports.useMenu = function () {
  const e = (0, f.useContext)(g);
  if (e == null) {
    throw (0, d.default)("[Menu] useMenu must be used in a child of a MenuList component");
  }
  return e;
};
exports.useRegisterItem = exports.useRegister = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../main-chunk/465113.js");
var l = a(require("../app/395654.js"));
var i = require("../app/690495.js");
var u = require("./281309.js");
var s = require("../app/676345.js");
var c = require("./470855.js");
var d = a(require("../app/556869.js"));
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
var p = a(require("../app/156720.js"));
var m = require("./739783.js");
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const g = (0, f.createContext)(null);
const {
  useRegisterItem: E,
  useRegister: v,
  Register: _
} = (0, u.createRegister)();
exports.Register = _;
exports.useRegister = v;
exports.useRegisterItem = E;
const y = {
  container: {
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    overflowX: "i44ccddp",
    overflowY: "ag5g9lrv"
  },
  listContainer: {
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    flexGrow: "ggj6brxn",
    flexShrink: "oq44ahr5",
    flexBasis: "lb5m6g5c",
    overflowY: "ag5g9lrv",
    width: "ln8gz9je"
  }
};
const C = (0, f.forwardRef)((e, t) => {
  const {
    data: n,
    children: a,
    onSelect: u,
    forceSelection: d,
    initialActiveOptionId: h,
    maxHeight: E,
    minWidth: v,
    colorScheme: _ = "lighter",
    size: C = "small",
    menuControllerRef: b,
    focusOnMount: M = false,
    material: S = false,
    allowTabNavigation: T = false,
    border: w
  } = e;
  const A = n;
  const P = (0, f.useRef)();
  const [O, k] = (0, f.useState)();
  const D = (0, f.useMemo)(() => new l.default(), []);
  const I = (0, f.useMemo)(() => O != null ? O : Array.from(A.keys()), [O, A]);
  const {
    activeItem: R,
    listSelection: N,
    NavigatableList: x
  } = (0, m.useNavigatableList)(I);
  const L = function () {
    var e = (0, r.default)(function* (e) {
      yield k(e);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const j = e => {
    const t = A.get(e);
    if (t != null && t.current != null) {
      var n;
      const a = t.current;
      if (!((n = a.onSelect) === null || n === undefined)) {
        n.call(a);
      }
      D.trigger("select", e, a, A);
      if (!(u == null)) {
        u(e, a, A);
      }
    } else {
      __LOG__(3)`[Menu] Trying to handle onSelect without a valid option '${e}'`;
    }
  };
  const B = e => {
    e.stopPropagation();
    e.preventDefault();
  };
  const F = (0, f.useCallback)(e => {
    const t = A.get(e);
    if (P.current != null && (t == null ? undefined : t.current) != null) {
      const e = t.current.ref.current;
      if (e != null) {
        (0, o.scrollIntoViewIfNeeded)(e, false, P.current);
      }
    }
  }, [A, P]);
  (0, f.useEffect)(() => {
    if (R != null) {
      F(R);
    }
  }, [R, F]);
  (0, f.useEffect)(() => {
    if (M === true && P.current != null) {
      P.current.focus();
    }
  }, []);
  const G = {
    items: A,
    events: D,
    activeItemId: R,
    filteredItems: O != null ? new Set(O) : null,
    filterItems: L,
    selectItem: j,
    activateItem: e => {
      if (e != null) {
        N.setVal(e);
      } else {
        N.set(-1, false);
      }
    },
    colorScheme: _,
    size: C,
    material: S,
    allowTabNavigation: T,
    border: w
  };
  return f.default.createElement(g.Provider, {
    value: G
  }, f.default.createElement("div", {
    ref: t,
    role: "listbox",
    className: (0, p.default)([y.container, (S || (0, c.supportsMaterialDesign)()) && s.uiPadding.all8]),
    style: {
      maxHeight: E,
      minWidth: v
    }
  }, f.default.createElement(x, {
    listControllerRef: b,
    xstyle: y.listContainer,
    items: N,
    onSelect: j,
    handlers: {
      down: B,
      up: B,
      enter: B
    },
    forceSelection: d,
    initialActiveItem: h,
    rotate: true
  }, f.default.createElement(i.FlexColumn, {
    align: "stretch",
    tabIndex: 0,
    "data-tab": 0,
    ref: P
  }, a))));
});
exports.WDSMenuController = C;
C.displayName = "WDSMenuController";