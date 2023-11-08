var r = require("./458234.js");
var i = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n, a, o, s) {
  var u = n & 1;
  var l = r(e);
  var c = l.length;
  if (c != r(t).length && !u) {
    return false;
  }
  for (var f = c; f--;) {
    var d = l[f];
    if (!(u ? d in t : i.call(t, d))) {
      return false;
    }
  }
  var h = s.get(e);
  var p = s.get(t);
  if (h && p) {
    return h == t && p == e;
  }
  var m = true;
  s.set(e, t);
  s.set(t, e);
  for (var v = u; ++f < c;) {
    var g = e[d = l[f]];
    var y = t[d];
    if (a) {
      var b = u ? a(y, g, d, t, e, s) : a(g, y, d, e, t, s);
    }
    if (!(b === undefined ? g === y || o(g, y, n, a, s) : b)) {
      m = false;
      break;
    }
    if (!v) {
      v = d == "constructor";
    }
  }
  if (m && !v) {
    var w = e.constructor;
    var _ = t.constructor;
    if (!(w == _ || !("constructor" in e) || !("constructor" in t) || typeof w == "function" && w instanceof w && typeof _ == "function" && _ instanceof _)) {
      m = false;
    }
  }
  s.delete(e);
  s.delete(t);
  return m;
};