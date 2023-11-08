Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./60477.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = o(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, a, s);
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
var a = require("../vendor/756415.js");
function o(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (o = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function s(e, t) {
  const n = i.Children.toArray(e.children);
  const {
    transitionName: o = "default",
    delay: s,
    onAnimationComplete: l,
    className: u,
    component: c = "span",
    testid: d,
    appear: p,
    enter: f,
    exit: _,
    displayName: g
  } = e;
  return i.default.createElement(c, {
    ref: t,
    className: u
  }, i.default.createElement(a.TransitionGroup, {
    component: null,
    appear: p,
    enter: f,
    exit: _
  }, n == null ? undefined : n.map(e => i.default.createElement(r.VelocityTransition, {
    key: e.key,
    transitionName: o,
    delay: s,
    onAnimationComplete: l,
    displayName: g
  }, e))));
}
var l = (0, i.forwardRef)(s);
exports.default = l;