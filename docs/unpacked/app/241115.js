var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./368156.js");
var a = require("./299950.js");
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
var s = r(require("./156720.js"));
var l = r(require("./38085.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const c = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  end: "ebjesfe0",
  bottom: "jxacihee",
  start: "tkdu00h0"
};
function d(e, t) {
  const n = (0, o.useRef)(null);
  const r = (0, l.default)(t, n);
  return o.default.createElement("div", {
    ref: r,
    className: (0, s.default)(c, e.xstyle),
    onKeyDown: e => {
      if (!e.metaKey && !e.ctrlKey) {
        if (e.key === i.KEYBOARD_EVENT_KEY_VALUE.TAB) {
          return (e => {
            const t = n.current;
            if (!t) {
              return;
            }
            const r = e.shiftKey ? a.TabDirection.BACKWARD : a.TabDirection.FORWARD;
            const i = (0, a.getNextTabbableElement)(t, r, a.FocusType.TABBABLE);
            if (i != null) {
              e.preventDefault();
              i.focus();
            }
          })(e);
        } else {
          return undefined;
        }
      }
    },
    tabIndex: "-1",
    onBlur: e.onBlur
  }, e.children);
}
var p = (0, o.forwardRef)(d);
exports.default = p;