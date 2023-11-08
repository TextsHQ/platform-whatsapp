var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/81644.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
var i = a(require("../app/576191.js"));
var u = a(require("../app/38085.js"));
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const c = {
  tabContainer: {
    display: "p357zi0d",
    backgroundColor: "rv6u8h8g"
  },
  tab: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexGrow: "ggj6brxn",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    height: "qmp0wt83",
    color: "a633jkfz",
    textTransform: "aprpv14t",
    fontSize: "f8jlpxt4"
  },
  focused: {
    boxShadow: "hfhevcd9"
  },
  selected: {
    paddingTop: "eujn52yf",
    color: "ky3f94nk",
    borderBottom: "qldwl5fi"
  }
};
var d = e => {
  let {
    tabConfigs: t,
    selectedId: n,
    onSelect: a,
    tabXstyle: i,
    xstyle: u,
    activateTabOnKeyboardNavigation: s = false,
    testIdPrefix: d
  } = e;
  const p = (0, o.useRef)(n);
  const m = (0, o.useRef)([]);
  const h = t.map(e => {
    let {
      id: t
    } = e;
    return t;
  });
  const g = h.length - 1;
  return o.default.createElement(r.HotKeys, {
    handlers: {
      right: () => {
        const e = h.indexOf(p.current);
        const t = e === g ? 0 : e + 1;
        const n = m.current[t];
        if (n) {
          n.focus();
        }
        if (s) {
          a(h[t]);
        }
      },
      left: () => {
        const e = h.indexOf(p.current);
        const t = e === 0 ? g : e - 1;
        const n = m.current[t];
        if (n) {
          n.focus();
        }
        if (s) {
          a(h[t]);
        }
      }
    }
  }, o.default.createElement("div", {
    role: "tablist",
    className: (0, l.default)(c.tabContainer, u)
  }, t.map((e, t) => {
    let {
      title: r,
      id: l
    } = e;
    return o.default.createElement(f, {
      key: r,
      ref: e => {
        m.current[t] = e;
      },
      selected: l === n,
      onSelect: () => a(l),
      onFocus: () => {
        p.current = l;
      },
      xstyle: i,
      testid: `${d != null ? d : "tab"}-${l}`
    }, r);
  })));
};
exports.default = d;
const f = (0, o.forwardRef)((e, t) => {
  let {
    selected: n,
    onSelect: a,
    onFocus: r,
    children: s,
    xstyle: d,
    testid: f
  } = e;
  const [p, m] = (0, i.default)();
  const h = (0, u.default)(t, p);
  return o.default.createElement("button", {
    ref: h,
    role: "tab",
    tabIndex: n ? 0 : -1,
    "aria-selected": Boolean(n),
    title: s,
    className: (0, l.default)(c.tab, m && c.focused, n && c.selected, d),
    onClick: () => {
      if (!n) {
        a();
      }
    },
    onFocus: r
  }, s);
});
f.displayName = "Tab";