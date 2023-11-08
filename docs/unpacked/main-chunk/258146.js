Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var o = require("../app/81644.js");
var r = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = a(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e) {
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, l) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(o, l, i);
      } else {
        o[l] = e[l];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}(require("../vendor/667294.js"));
function a(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (a = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function l(e, t) {
  const {
    active: n,
    role: a,
    xstyle: l,
    onIndexChange: i,
    onLeave: s,
    onEnter: u
  } = e;
  const d = e => {
    if (!(u == null)) {
      u(e);
    }
  };
  const c = e => {
    const t = e.relatedTarget;
    return t instanceof HTMLElement && e.currentTarget instanceof HTMLElement && !e.currentTarget.contains(t);
  };
  return r.default.createElement(o.HotKeys, {
    handlers: {
      down: e => {
        e.preventDefault();
        e.stopPropagation();
        n.setNext(true);
        if (!(i == null)) {
          i(n.index);
        }
      },
      up: e => {
        e.stopPropagation();
        e.preventDefault();
        if (n.prev() > -1) {
          n.setPrev(true);
          if (!(i == null)) {
            i(n.index);
          }
        } else if (s) {
          s(e);
          n.unset();
        }
      },
      enter: d,
      space: d
    },
    ref: t,
    onFocus: e => {
      if (c(e)) {
        n.setFirst(true);
      }
    },
    onBlur: e => {
      if (c(e)) {
        n.unset();
      }
    },
    tabIndex: 0,
    xstyle: l,
    role: a
  }, e.children);
}
var i = (0, r.forwardRef)(l);
exports.default = i;