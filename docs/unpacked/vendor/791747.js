var r = require("./105976.js");
var i = require("./977813.js");
var a = require("./816612.js");
var o = require("./481704.js");
var s = Object.prototype;
var u = s.hasOwnProperty;
var l = r(function (e, t) {
  e = Object(e);
  var n = -1;
  var r = t.length;
  var l = r > 2 ? t[2] : undefined;
  for (l && a(t[0], t[1], l) && (r = 1); ++n < r;) {
    for (var c = t[n], f = o(c), d = -1, h = f.length; ++d < h;) {
      var p = f[d];
      var m = e[p];
      if (m === undefined || i(m, s[p]) && !u.call(e, p)) {
        e[p] = c[p];
      }
    }
  }
  return e;
});
module.exports = l;