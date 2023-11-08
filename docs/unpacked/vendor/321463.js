var r = require("./105976.js");
var i = require("./816612.js");
module.exports = function (e) {
  return r(function (t, n) {
    var r = -1;
    var a = n.length;
    var o = a > 1 ? n[a - 1] : undefined;
    var s = a > 2 ? n[2] : undefined;
    o = e.length > 3 && typeof o == "function" ? (a--, o) : undefined;
    if (s && i(n[0], n[1], s)) {
      o = a < 3 ? undefined : o;
      a = 1;
    }
    t = Object(t);
    for (; ++r < a;) {
      var u = n[r];
      if (u) {
        e(t, u, r, o);
      }
    }
    return t;
  });
};