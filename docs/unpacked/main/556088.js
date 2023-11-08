Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = r(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e) {
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, l) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, l, i);
      } else {
        a[l] = e[l];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function r(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (r = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function o(e, t) {
  let {
    children: n
  } = e;
  return a.default.createElement("div", {
    ref: t
  }, n);
}
var l = (0, a.forwardRef)(o);
exports.default = l;