var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebSelectDropdown = undefined;
var r = o(require("../vendor/967154.js"));
var a = o(require("../app/670983.js"));
var l = require("./282227.js");
var i = o(require("./170206.js"));
var s = require("./409623.js");
var u = require("./465113.js");
var d = o(require("../app/988410.js"));
var c = o(require("../app/335540.js"));
var f = o(require("./258146.js"));
var m = o(require("./604469.js"));
var p = require("./268755.js");
var h = o(require("../app/237889.js"));
var E = require("../app/238669.js");
var g = require("../app/392632.js");
var C = require("../app/676345.js");
var _ = require("../app/851488.js");
var T = require("../vendor/548360.js");
var S = o(require("../vendor/441143.js"));
var N = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = x(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(o, a, l);
      } else {
        o[a] = e[a];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}(require("../vendor/667294.js"));
var v = o(require("../app/156720.js"));
var b = o(require("./928361.js"));
var y = o(require("../app/576191.js"));
var M = o(require("../app/637660.js"));
var O = o(require("../app/38085.js"));
var A = o(require("../app/83233.js"));
function x(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (x = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const R = {
  selectDropdownContainer: {
    position: "g0rxnol2",
    color: "k2bacm8l"
  },
  select: {
    position: "g0rxnol2",
    paddingTop: "e8jx7scp",
    paddingBottom: "fcet0162",
    minWidth: "ap4g2m8t",
    backgroundColor: "f6cvynhn",
    borderTop: "kagi745y",
    borderEnd: "evq3mrnv",
    borderBottom: "daad4uqs",
    borderStart: "jdssz2gn",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    whiteSpace: "le5p0ye3",
    textOverflow: "lhj4utae",
    cursor: "ajgl1lbb",
    userSelect: "rkxvyd19"
  },
  selectFocused: {
    borderTop: "ggk2mtcd",
    borderEnd: "c4hi5cu5",
    borderBottom: "dorenqkw",
    borderStart: "pidw8noc"
  },
  selectWithImageLabel: {
    lineHeight: "tkq7s68q"
  },
  caretIcon: {
    position: "lhggkp7q",
    end: "knkhrgyh",
    top: "cndwxb6x"
  },
  dropdownMenu: {
    boxSizing: "cm280p3y",
    position: "lhggkp7q",
    top: "s1302b61",
    start: "tkdu00h0",
    width: "ln8gz9je",
    backgroundColor: "p51fsnpc",
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    boxShadow: "r3d5i8t6",
    zIndex: "nbczt5ty"
  },
  dropdownMenuOptionContainer: {
    overflowY: "ag5g9lrv",
    maxHeight: "owfawvgq"
  },
  dropdownMenuOption: {
    height: "r1dtxudv",
    minHeight: "jejlwtnt"
  }
};
function P(e, t) {
  var n;
  var o;
  const {
    items: i,
    selectedItemId: s,
    defaultLabel: u,
    ariaLabel: d,
    showImageWithSelectedItem: f = false,
    showSearchFilter: m = false,
    onChangeSelectedItem: p,
    testid: h
  } = e;
  let T = null;
  if (s != null) {
    T = i.find(e => e.id === s);
  }
  (0, S.default)(T != null || u != null, "Select Dropdown requires either a valid selected item or a default display label");
  const b = T ? T.primary : (0, a.default)(u, "defaultLabel");
  const M = T && f === true ? N.default.createElement("span", {
    className: (0, v.default)(C.uiMargin.end12)
  }, T.image) : null;
  const [x, P] = (0, N.useState)(false);
  (0, N.useImperativeHandle)(t, () => ({
    open: () => P(true),
    close: () => P(false),
    isOpen: () => x
  }));
  const [L, I] = (0, A.default)(() => {
    P(!x);
  });
  const [D, k] = (0, y.default)();
  const j = (0, N.useRef)(null);
  const F = (0, O.default)(L, D, j);
  const [B, H] = (0, N.useState)(false);
  if (!(B || !k && !x)) {
    H(true);
  }
  return N.default.createElement(g.UIE, {
    displayName: "SelectDropdownContainer",
    requestFocus: () => {
      c.default.focus(j.current);
    },
    uimState: B ? E.UIMState.ACTIVE : E.UIMState.INACTIVE
  }, N.default.createElement("div", {
    className: (0, v.default)(R.selectDropdownContainer)
  }, N.default.createElement("div", (0, r.default)({}, I, {
    ref: F,
    "aria-label": (n = (o = T) === null || o === undefined ? undefined : o.ariaLabel) !== null && n !== undefined ? n : d,
    "date-testid": h != null ? h : "select-dropdown",
    className: (0, v.default)(R.select, M != null && R.selectWithImageLabel, C.uiPadding.start24, C.uiPadding.end36, (k || x) && R.selectFocused)
  }), M, N.default.createElement(_.WDSTextTitle, {
    as: "span"
  }, b), N.default.createElement(l.CaretDownIcon, {
    xstyle: R.caretIcon
  })), x ? N.default.createElement(w, {
    items: i,
    selectedItem: T,
    showSearchFilter: m,
    onSelect: e => {
      p(e);
      P(false);
    },
    onDismiss: () => {
      P(false);
    },
    testid: h != null ? h : "select-dropdown"
  }) : null));
}
const L = (0, N.forwardRef)(P);
function w(e) {
  const {
    items: t,
    selectedItem: n,
    showSearchFilter: o,
    onSelect: r,
    onDismiss: a,
    testid: l
  } = e;
  const i = (0, N.useRef)(null);
  const E = (0, M.default)(() => new h.default([], e => e.id));
  const _ = (0, N.useRef)(null);
  const [S, b] = (0, N.useState)(() => t);
  (0, N.useEffect)(() => {
    E.current.init(S, true);
  }, [S]);
  const y = e => {
    if (e >= 0 && e < S.length && _.current) {
      const t = _.current.children[e];
      (0, u.scrollIntoViewIfNeeded)(t, false, _.current);
      c.default.focus(t);
    }
  };
  const O = e => {
    if (!(e == null)) {
      e.preventDefault();
    }
    if (S.length > 0) {
      E.current.setFirst(true);
      y(0);
    }
  };
  const A = () => {
    if (o) {
      E.current.unset();
      d.default.shouldIndicateFocus();
      c.default.focus(i.current);
    }
  };
  (0, N.useEffect)(() => {
    if (o) {
      A();
    } else {
      O();
    }
  }, []);
  return N.default.createElement(g.UIE, {
    displayName: "SelectDropdownMenu",
    escapable: true,
    popable: true,
    requestDismiss: a
  }, N.default.createElement("div", {
    className: (0, v.default)(R.dropdownMenu)
  }, N.default.createElement(m.default, {
    ref: i,
    setSearchText: e => {
      b(e === "" ? t : t.filter(t => {
        var n;
        return (0, p.simpleSearch)(e, [t.primary.toString(), t.secondary, ...((n = t.additionalSearchFilterMetadata) !== null && n !== undefined ? n : [])]);
      }));
    },
    enabled: o,
    onDown: O,
    onEnter: O,
    onFocus: A,
    type: s.ListSearchType.SELECT_DROPDOWN_SEARCH,
    backIcon: false,
    chatlistFilterEnabled: false,
    borderBottom: false,
    placeholder: T.fbt._("Search", null, {
      hk: "2gzUFp"
    }),
    xstyle: [C.uiMargin.horiz12, C.uiMargin.top15, C.uiMargin.bottom5]
  }), N.default.createElement(f.default, {
    ref: _,
    active: E.current,
    onLeave: o ? A : undefined,
    onEnter: () => {
      var e;
      const t = (e = E.current.getVal()) === null || e === undefined ? undefined : e.id;
      if (t != null) {
        r(t);
      }
    },
    onIndexChange: y,
    role: "listbox",
    xstyle: [R.dropdownMenuOptionContainer, C.uiPadding.bottom1]
  }, S.map(e => N.default.createElement(I, {
    key: e.id,
    item: e,
    selected: (n == null ? undefined : n.id) === e.id,
    active: E.current,
    onSelect: r,
    testIdPrefix: l != null ? l : "select-dropdown"
  })))));
}
function I(e) {
  const {
    item: t,
    selected: n,
    active: o,
    onSelect: a,
    testIdPrefix: l
  } = e;
  const [s, u] = (0, b.default)(o, t.id);
  return N.default.createElement("div", {
    ref: s,
    role: "option",
    "aria-selected": n,
    tabIndex: -1
  }, N.default.createElement(i.default, (0, r.default)({
    className: (0, v.default)(R.dropdownMenuOption, C.uiPadding.horiz24, C.uiPadding.vert12),
    theme: "select-dropdown-item",
    onClick: e => {
      e.stopPropagation();
      a(t.id);
    },
    active: u
  }, t)));
}
exports.WAWebSelectDropdown = L;
L.displayName = "WAWebSelectDropdown";