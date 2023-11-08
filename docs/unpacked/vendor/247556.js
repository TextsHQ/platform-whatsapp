var r = require("./288668.js");
var i = require("./447443.js");
var a = require("./301196.js");
var o = require("./829932.js");
var s = require("./307518.js");
var u = require("./274757.js");
var l = Math.min;
module.exports = function (e, t, n) {
  for (var c = n ? a : i, f = e[0].length, d = e.length, h = d, p = Array(d), m = 1 / 0, v = []; h--;) {
    var g = e[h];
    if (h && t) {
      g = o(g, s(t));
    }
    m = l(g.length, m);
    p[h] = !n && (t || f >= 120 && g.length >= 120) ? new r(h && g) : undefined;
  }
  g = e[0];
  var y = -1;
  var b = p[0];
  e: for (; ++y < f && v.length < m;) {
    var w = g[y];
    var _ = t ? t(w) : w;
    w = n || w !== 0 ? w : 0;
    if (!(b ? u(b, _) : c(v, _, n))) {
      for (h = d; --h;) {
        var x = p[h];
        if (!(x ? u(x, _) : c(e[h], _, n))) {
          continue e;
        }
      }
      if (b) {
        b.push(_);
      }
      v.push(w);
    }
  }
  return v;
};