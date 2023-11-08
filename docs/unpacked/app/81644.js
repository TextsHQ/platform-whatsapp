var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecialKeyMap = exports.HotKeys = undefined;
var i = r(require("../vendor/967154.js"));
var a = r(require("../vendor/506479.js"));
var o = r(require("../vendor/252628.js"));
var s = require("./238669.js");
var l = function (e, t) {
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
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var u = r(require("./156720.js"));
var c = r(require("./38085.js"));
var d = r(require("./558532.js"));
const p = ["component", "handlers", "children", "xstyle", "onFocus", "onBlur", "onKeyDown"];
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
const _ = {
  alt: "Alt",
  ctrl: "Control",
  meta: "Meta",
  shift: "Shift"
};
const g = (0, o.default)(_);
const m = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  capslock: 20,
  esc: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  ins: 45,
  del: 46,
  meta: 224
};
exports.SpecialKeyMap = m;
const h = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "ctrl",
  18: "alt",
  20: "capslock",
  27: "esc",
  32: "space",
  33: "pageup",
  34: "pagedown",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  45: "ins",
  46: "del",
  91: "meta",
  93: "meta",
  224: "meta"
};
const y = {
  option: "alt",
  command: "meta",
  return: "enter",
  escape: "esc",
  plus: "+"
};
const E = (0, l.forwardRef)((e, t) => {
  const {
    component: n = "div",
    handlers: r,
    children: o,
    xstyle: f,
    onFocus: _ = () => {},
    onBlur: g = () => {},
    onKeyDown: m
  } = e;
  const y = (0, a.default)(e, p);
  const E = (0, l.useRef)(false);
  const T = (0, l.useRef)(null);
  const M = (0, c.default)(t, T);
  (0, d.default)(() => {
    if (E.current) {
      const e = document.activeElement;
      if (T.current === e) {
        s.UIM.Manager.refocusTopUie();
      }
    }
  });
  const A = r && Object.keys(r).some(e => r[e] != null);
  return l.default.createElement(n, (0, i.default)({
    ref: M,
    tabIndex: "-1",
    onKeyPress: A ? e => {
      if (r) {
        Object.keys(r).forEach(t => {
          const n = r[t];
          if (n == null) {
            return;
          }
          const i = v(t);
          const [a] = i;
          if (!h[a]) {
            if (S(i, e)) {
              n(e);
            }
          }
        });
      }
    } : null,
    onKeyDown: A ? e => {
      if (m != null) {
        m(e);
      }
      if (r) {
        Object.keys(r).forEach(t => {
          const n = r[t];
          if (n == null) {
            return;
          }
          const i = v(t);
          const [a] = i;
          if (h[a] && S(i, e)) {
            n(e);
          }
        });
      }
    } : null,
    className: (0, u.default)(f)
  }, y, {
    onFocus: e => {
      E.current = true;
      _(e);
    },
    onBlur: e => {
      E.current = false;
      g(e);
    }
  }), o);
});
function S(e, t) {
  let [n, r] = e;
  return n === t.which && g.every(e => r && e === r ? t.getModifierState(r) : !t.getModifierState(e));
}
function v(e) {
  let [t, n] = e.toLowerCase().split("+");
  if (y[t]) {
    t = y[t];
  }
  if (y[n]) {
    n = y[n];
  }
  let r;
  let i = t;
  if (n) {
    i = n;
    r = _[t];
    if (r === undefined) {
      __LOG__(3)`Invalid HotKey Modifier: ${t}`;
    } else if (i === undefined) {
      __LOG__(3)`Invalid HotKey Key: ${n}`;
    }
  } else if (i === undefined) {
    __LOG__(3)`Invalid HotKey Key: ${t}`;
  }
  return [m[i] || i.charCodeAt(0), r];
}
exports.HotKeys = E;
E.displayName = "HotKeys";