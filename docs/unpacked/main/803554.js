var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    ariaLabel: t,
    value: n,
    valueText: a,
    min: f,
    max: m,
    smallSkip: h,
    largeSkip: g,
    onChange: E,
    onCommit: v,
    disabled: _,
    children: y,
    tabIndex: C,
    inset: b = [0, 0]
  } = e;
  const {
    isKeyboardUser: M
  } = (0, u.default)();
  const [S, T] = (0, s.useState)(false);
  const [w, A] = (0, s.useState)(false);
  const P = (0, s.useCallback)(() => {
    T(true);
  }, [T]);
  const O = (0, s.useCallback)(() => {
    T(false);
  }, [T]);
  const k = (0, s.useRef)();
  const D = (0, s.useRef)();
  const I = (0, s.useRef)();
  const R = e => {
    const t = (0, o.default)(D.current, "minPxRef.current");
    const n = (0, o.default)(I.current, "maxPxRef.current");
    const a = e.clientX;
    const l = (0, r.default)((a - t) / (n - t), 0, 1);
    return f + l * (m - f);
  };
  const N = (0, d.default)(e => {
    e.preventDefault();
    if (!(E == null)) {
      E(R(e));
    }
  });
  const x = (0, d.default)(e => {
    if (e.button !== 0) {
      return;
    }
    O();
    const t = R(e);
    if (!(E == null)) {
      E(t);
    }
    v(t);
  });
  (0, s.useEffect)(() => {
    if (S) {
      window.addEventListener("mousemove", N);
      window.addEventListener("mouseup", x);
      return () => {
        window.removeEventListener("mousemove", N);
        window.removeEventListener("mouseup", x);
      };
    }
  }, [N, x, S]);
  return s.default.createElement("div", {
    ref: k,
    className: (0, c.default)(p.base, _ === true && p.disabled, M && p.isKeyboardUser),
    onBlur: () => {
      A(false);
    },
    role: "slider",
    "aria-label": t,
    "aria-valuenow": n,
    "aria-valuetext": a,
    "aria-valuemin": f,
    "aria-valuemax": m,
    "data-tab": C,
    tabIndex: "0",
    onMouseDown: e => {
      var t;
      if (e.button !== 0) {
        return;
      }
      if (_) {
        return;
      }
      e.preventDefault();
      const n = (0, o.default)((t = k.current) === null || t === undefined ? undefined : t.getBoundingClientRect(), "containerRef.current?.getBoundingClientRect()");
      const [a, r] = b;
      D.current = n.left + a;
      I.current = n.left + n.width - r;
      P();
      if (!(E == null)) {
        E(R(e));
      }
    },
    onKeyDown: e => {
      if (_) {
        return;
      }
      let t;
      if ((0, i.messageListA11yRedesignEnabled)()) {
        switch (e.key) {
          case l.KEYBOARD_EVENT_KEY_VALUE.ARROW_RIGHT:
            if (w) {
              t = h;
              e.stopPropagation();
            }
            break;
          case l.KEYBOARD_EVENT_KEY_VALUE.ARROW_LEFT:
            if (w) {
              t = -h;
              e.stopPropagation();
            }
            break;
          case l.KEYBOARD_EVENT_KEY_VALUE.PAGE_UP:
            if (w) {
              t = g;
            }
            break;
          case l.KEYBOARD_EVENT_KEY_VALUE.PAGE_DOWN:
            if (w) {
              t = -g;
            }
            break;
          case l.KEYBOARD_EVENT_KEY_VALUE.ENTER:
          case l.KEYBOARD_EVENT_KEY_VALUE.SPACE:
            A(true);
            break;
          case l.KEYBOARD_EVENT_KEY_VALUE.ESCAPE:
            A(false);
            e.stopPropagation();
        }
      } else {
        switch (e.key) {
          case l.KEYBOARD_EVENT_KEY_VALUE.ARROW_RIGHT:
          case l.KEYBOARD_EVENT_KEY_VALUE.ARROW_UP:
            t = h;
            break;
          case l.KEYBOARD_EVENT_KEY_VALUE.ARROW_LEFT:
          case l.KEYBOARD_EVENT_KEY_VALUE.ARROW_DOWN:
            t = -h;
            break;
          case l.KEYBOARD_EVENT_KEY_VALUE.PAGE_UP:
            t = g;
            break;
          case l.KEYBOARD_EVENT_KEY_VALUE.PAGE_DOWN:
            t = -g;
        }
      }
      if (t != null) {
        e.preventDefault();
        const a = (0, r.default)(n + t, f, m);
        v(a);
      }
    }
  }, y);
};
var r = a(require("../vendors-main/974691.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/368156.js");
var i = require("../app/97858.js");
var u = a(require("../app/395967.js"));
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
var c = a(require("../app/156720.js"));
var d = a(require("../app/17533.js"));
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
const p = {
  base: {
    cursor: "ajgl1lbb"
  },
  disabled: {
    cursor: "h2qzpyga"
  },
  isKeyboardUser: {
    ":focus": {
      borderTopStartRadius: "mmjxyicr",
      borderTopEndRadius: "r1jx4bdh",
      borderBottomEndRadius: "f9yclydc",
      borderBottomStartRadius: "mtzt60z0",
      boxShadow: "esbo3we0"
    }
  }
};