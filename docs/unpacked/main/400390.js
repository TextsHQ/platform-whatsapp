var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/988410.js"));
var o = a(require("../app/335540.js"));
var l = require("../app/81644.js");
var i = require("../app/299950.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
var s = a(require("../app/38085.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function d(e, t) {
  const {
    className: n,
    children: a,
    onBlur: c,
    skipNode: d
  } = e;
  const f = (0, u.useRef)(null);
  const p = (0, s.default)(t, f);
  (0, u.useEffect)(() => {
    o.default.focus(f.current);
  }, []);
  const m = e => {
    if (!f.current) {
      return;
    }
    let t = i.TabDirection.FORWARD;
    if (e) {
      e.preventDefault();
      t = e.shiftKey ? i.TabDirection.BACKWARD : i.TabDirection.FORWARD;
      r.default.shouldIndicateFocus();
    }
    const n = (0, i.getNextTabbableElement)(f.current, t, i.FocusType.CUSTOM, e => !d(e));
    if (n != null) {
      r.default.shouldIndicateFocus();
      if (n.restoreFocus) {
        n.restoreFocus();
      } else {
        o.default.focus(n);
      }
    }
  };
  const h = {
    tab: m,
    "shift+tab": m,
    "shift+?": e.onShowKeyboardShortcuts
  };
  return u.default.createElement(l.HotKeys, {
    handlers: h,
    className: n,
    onBlur: c,
    ref: p
  }, a);
}
var f = (0, u.forwardRef)(d);
exports.default = f;