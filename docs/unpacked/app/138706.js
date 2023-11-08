Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Session = exports.Cipher = undefined;
var r = o(require("./697416.js"));
var i = o(require("./743275.js"));
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
function o(e, t) {
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
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (s && (s.get || s.set)) {
        Object.defineProperty(r, o, s);
      } else {
        r[o] = e[o];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}
const s = r;
exports.Cipher = s;
const l = i;
exports.Session = l;