var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = a(require("../app/988410.js"));
var l = a(require("./927327.js"));
var i = function (e, t) {
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
function s(e, t) {
  const n = (0, i.useRef)(null);
  const a = (0, r.classnamesConvertMeToStylexPlease)({
    [l.default.hover]: e.hover,
    [l.default.current]: e.current,
    [l.default.active]: e.active,
    [l.default.msg]: true
  });
  const u = () => {
    o.default.maybeIndicateFocus(n.current, l.default.focusAnimation);
  };
  (0, i.useImperativeHandle)(t, () => ({
    indicateFocus: u
  }));
  const s = i.default.createElement("div", {
    ref: n,
    className: a,
    onClick: e.onClick,
    onMouseEnter: e.onMouseEnter,
    onMouseOver: e.onMouseOver,
    onMouseLeave: e.onMouseLeave
  }, e.children);
  return i.default.createElement(i.default.Fragment, null, s, e.footer);
}
var c = (0, i.forwardRef)(s);
exports.default = c;