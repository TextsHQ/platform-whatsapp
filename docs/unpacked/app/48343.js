Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaybeStrictMode = undefined;
!function (e, t) {
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
  var i = {};
  var a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(i, o, s);
      } else {
        i[o] = e[o];
      }
    }
  }
  i.default = e;
  if (n) {
    n.set(e, i);
  }
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
exports.MaybeStrictMode = e => {
  let {
    children: t
  } = e;
  return t;
};