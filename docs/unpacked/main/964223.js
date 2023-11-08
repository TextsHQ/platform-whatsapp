var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../vendor/506479.js"));
var i = a(require("../app/670983.js"));
var u = a(require("./929796.js"));
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
var c = a(require("../app/38085.js"));
const d = ["children", "flatListControllers", "onScroll", "onLayout", "scrollOffset"];
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
function p(e, t) {
  const {
    children: n,
    flatListControllers: a,
    onScroll: f,
    onLayout: p,
    scrollOffset: m
  } = e;
  const h = (0, l.default)(e, d);
  const {
    children: g,
    direction: E,
    flatListControllers: v,
    onScroll: _,
    onLayout: y,
    scrollOffset: C
  } = e;
  const b = (0, s.useRef)(null);
  const M = (0, c.default)(t, b);
  const S = () => {
    const e = b.current;
    if (e) {
      if (E === "horizontal") {
        return e.scrollLeft;
      } else {
        return e.scrollTop;
      }
    }
  };
  const T = e => {
    const t = b.current;
    if (t) {
      if (E === "horizontal") {
        t.scrollLeft = e;
      } else {
        t.scrollTop = e;
      }
    }
  };
  const w = () => {
    const e = (0, i.default)(b.current, "observerRef.current");
    v.forEach(t => t.triggerLayout({
      position: e.getBoundingClientRect(),
      width: e.clientWidth,
      height: e.clientHeight
    }));
  };
  (0, s.useLayoutEffect)(() => {
    v.forEach(e => e.registerContainer({
      getScrollFromStart: S,
      setScrollFromStart: T,
      onRegisterList: w
    }));
    if (C !== undefined) {
      T(C);
    }
    return () => {
      v.forEach(e => e.unregisterContainer());
    };
  }, []);
  return s.default.createElement(u.default, (0, r.default)({}, h, {
    onResize: e => {
      const t = (0, i.default)(b.current, "observerRef.current");
      const n = (0, o.default)((0, o.default)({}, e), {}, {
        position: t.getBoundingClientRect()
      });
      v.forEach(e => e.triggerLayout(n));
      if (y) {
        y(n);
      }
    },
    onScroll: e => {
      if (_) {
        _(e);
      }
      v.forEach(e => e.triggerScroll());
    },
    ref: M
  }), g);
}
var m = (0, s.forwardRef)(p);
exports.default = m;