var r = require("./733448.js");
module.exports = function (e, t, n) {
  for (var i = -1, a = e.length; ++i < a;) {
    var o = e[i];
    var s = t(o);
    if (s != null && (u === undefined ? s == s && !r(s) : n(s, u))) {
      var u = s;
      var l = o;
    }
  }
  return l;
};