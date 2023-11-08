var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/335540.js"));
var o = require("../app/81644.js");
var l = require("../app/299950.js");
var i = a(require("../app/932325.js"));
var u = function (e, t) {
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
function c(e, t) {
  let {
    role: n = "dialog",
    children: a,
    onBlur: s,
    customSelector: c
  } = e;
  const d = (0, u.useRef)(null);
  const f = () => d.current;
  const p = e => {
    const t = d.current;
    if (!t) {
      return;
    }
    const n = c != null ? (0, l.getNextTabbableElement)(t, e, l.FocusType.CUSTOM_SELECTOR, () => true, c) : (0, l.getNextTabbableElement)(t, e, l.FocusType.TABBABLE);
    r.default.focus(n);
  };
  const m = () => {
    p(l.TabDirection.FORWARD);
  };
  (0, u.useImperativeHandle)(t, () => ({
    getElement: f,
    focusFirst: m
  }));
  return u.default.createElement(o.HotKeys, {
    handlers: {
      left: e => {
        const t = i.default.isRTL() ? l.TabDirection.FORWARD : l.TabDirection.BACKWARD;
        p(t);
        e.preventDefault();
      },
      right: e => {
        const t = i.default.isRTL() ? l.TabDirection.BACKWARD : l.TabDirection.FORWARD;
        p(t);
        e.preventDefault();
      }
    },
    ref: d,
    tabIndex: null,
    role: n
  }, a);
}
var d = (0, u.forwardRef)(c);
exports.default = d;