var r = require("./297786.js");
var i = require("./10611.js");
var a = require("./671811.js");
module.exports = function (e, t, n) {
  for (var o = -1, s = t.length, u = {}; ++o < s;) {
    var l = t[o];
    var c = r(e, l);
    if (n(c, l)) {
      i(u, a(l, e), c);
    }
  }
  return u;
};