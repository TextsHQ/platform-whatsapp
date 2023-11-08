var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIST_FOCUSABLE_ITEM_CLASS_NAME = undefined;
exports.ListHotKeys = function (e) {
  const {
    "aria-label": t,
    className: n,
    children: a,
    dataTab: f,
    handlers: m,
    role: h,
    onBeforeEnd: g,
    getPriorityFocusItem: E
  } = e;
  const {
    isKeyboardUser: v
  } = (0, c.default)();
  const _ = (0, d.useRef)(null);
  const y = (0, d.useRef)(null);
  const C = (0, d.useRef)(null);
  const b = (0, d.useRef)(false);
  const M = (0, d.useRef)(false);
  const S = (0, d.useRef)(false);
  const T = () => _.current ? Array.from(_.current.getElementsByClassName(p)) : [];
  const w = e => {
    const t = E == null ? undefined : E();
    if (t && t === e) {
      S.current = true;
    }
    l.default.focus(e, {
      preventScroll: false
    });
  };
  const A = e => {
    const t = T();
    if (t.length === 0) {
      return;
    }
    let n;
    if (C.current) {
      const a = t.indexOf(C.current);
      if (a !== -1) {
        n = a + e < 0 ? t[0] : t[a + e];
      }
    }
    if (!n) {
      n = t[t.length - 1];
    }
    const a = n;
    if (!a.hasAttribute("tabIndex")) {
      __LOG__(3)`Focusable list items should have \`tabIndex\` attribute (that makes it programmatically focusable), but this element did not have it:`;
      (function (e) {
        e.setAttribute("tabIndex", "-1");
      })(a);
    }
    w(a);
  };
  const P = function () {
    var e = (0, o.default)(function* () {
      if (g) {
        yield g();
      }
      const e = (() => {
        const e = T();
        if (e.length > 0) {
          return e[e.length - 1];
        } else {
          return null;
        }
      })();
      const t = E == null ? undefined : E();
      if (t && !S.current) {
        w(t);
      } else if (e) {
        w(e);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const O = e => {
    e.preventDefault();
    P();
  };
  (0, d.useEffect)(() => {
    S.current = false;
    if (b.current && C.current && _.current && !_.current.contains(C.current)) {
      l.default.focus(_.current);
    }
  });
  const k = (0, r.default)((0, r.default)({}, m), {}, {
    up: e => {
      e.preventDefault();
      A(-1);
    },
    down: e => {
      e.preventDefault();
      A(1);
    },
    end: O,
    "command+down": O
  });
  return d.default.createElement(s.UIE, {
    displayName: "ListHotKeys",
    ref: y,
    uimState: u.UIMState.PASSIVE,
    requestFocus: v ? null : () => {
      if (_.current && !_.current.contains(document.activeElement)) {
        l.default.focus(_.current);
      }
    }
  }, d.default.createElement(i.HotKeys, {
    handlers: k,
    className: n,
    "data-tab": f,
    onFocus: t => {
      if (_.current === t.target) {
        var n;
        if (v) {
          const e = E == null ? undefined : E();
          if (!M.current && e) {
            w(e);
          } else {
            A(0);
          }
        }
        if (!((n = y.current) === null || n === undefined)) {
          n.activate();
        }
      } else if (t.target instanceof HTMLElement && t.target.classList.contains(p)) {
        (a = t.target).setAttribute("tabIndex", "0");
        if (e.removeTabIndexFocusInside === true) {
          a.addEventListener("focusin", e => {
            if (e.target !== a) {
              a.setAttribute("tabIndex", "-1");
            }
          });
        }
        if (C.current && C.current !== a) {
          C.current.setAttribute("tabIndex", "-1");
        }
        C.current = a;
      }
      var a;
      b.current = true;
      M.current = true;
    },
    onBlur: () => {
      b.current = false;
    },
    ref: _,
    role: h,
    "aria-label": t
  }, a));
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../app/335540.js"));
var i = require("../app/81644.js");
var u = require("../app/238669.js");
var s = require("../app/392632.js");
var c = a(require("../app/395967.js"));
var d = function (e, t) {
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
const p = "focusable-list-item";
exports.LIST_FOCUSABLE_ITEM_CLASS_NAME = p;