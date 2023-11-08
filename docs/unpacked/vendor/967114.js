var r = require("./288668.js");
var i = require("./282908.js");
var a = require("./274757.js");
module.exports = function (e, t, n, o, s, u) {
  var l = n & 1;
  var c = e.length;
  var f = t.length;
  if (c != f && !(l && f > c)) {
    return false;
  }
  var d = u.get(e);
  var h = u.get(t);
  if (d && h) {
    return d == t && h == e;
  }
  var p = -1;
  var m = true;
  var v = n & 2 ? new r() : undefined;
  u.set(e, t);
  u.set(t, e);
  for (; ++p < c;) {
    var g = e[p];
    var y = t[p];
    if (o) {
      var b = l ? o(y, g, p, t, e, u) : o(g, y, p, e, t, u);
    }
    if (b !== undefined) {
      if (b) {
        continue;
      }
      m = false;
      break;
    }
    if (v) {
      if (!i(t, function (e, t) {
        if (!a(v, t) && (g === e || s(g, e, n, o, u))) {
          return v.push(t);
        }
      })) {
        m = false;
        break;
      }
    } else if (g !== y && !s(g, y, n, o, u)) {
      m = false;
      break;
    }
  }
  u.delete(e);
  u.delete(t);
  return m;
};