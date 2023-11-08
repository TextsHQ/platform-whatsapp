var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateFocus = undefined;
var r = a(require("../app/988410.js"));
var o = a(require("../app/335540.js"));
var l = require("../app/368156.js");
var i = require("../app/299950.js");
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
var d = a(require("../app/38085.js"));
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
  position: "lhggkp7q",
  top: "qq0sjtgm",
  end: "ebjesfe0",
  bottom: "jxacihee",
  start: "tkdu00h0"
};
function m(e, t) {
  const {
    focusType: n
  } = e;
  const a = (0, s.useRef)(null);
  const f = (0, d.default)(t, a);
  const {
    setIsKeyboardUser: m
  } = (0, u.default)();
  return s.default.createElement("div", {
    ref: f,
    style: e.style,
    className: (0, c.default)(p),
    onKeyDown: e => {
      if (e.metaKey || e.ctrlKey) {
        return;
      }
      const t = a.current;
      let u;
      var s;
      if (e.key === l.KEYBOARD_EVENT_KEY_VALUE.TAB) {
        e.stopPropagation();
        e.preventDefault();
        m(true);
        r.default.shouldIndicateFocus();
        if (t != null) {
          u = (0, i.getNextTabbableElement)(t, e.shiftKey ? i.TabDirection.BACKWARD : i.TabDirection.FORWARD, n);
        }
      } else if (t != null && t === document.activeElement) {
        u = (0, i.getNextTabbableElement)(t, i.TabDirection.FORWARD, n, e => e.nodeName.toLowerCase() === "input");
      }
      if (u != null) {
        r.default.shouldIndicateFocus();
        if ((s = u).restoreFocus) {
          s.restoreFocus();
        } else {
          o.default.focus(s);
        }
      }
    },
    tabIndex: "-1"
  }, e.children);
}
const h = (0, s.forwardRef)(m);
exports.RotateFocus = h;
h.displayName = "RotateFocus";