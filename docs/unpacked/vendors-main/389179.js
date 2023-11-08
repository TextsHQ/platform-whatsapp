var n = require("../vendor/555639.js");
var a = require("../vendor/640554.js");
var o = require("../vendor/14841.js");
var i = require("../vendor/479833.js");
var u = n.isFinite;
var c = Math.min;
module.exports = function (e) {
  var t = Math[e];
  return function (e, r) {
    e = o(e);
    if ((r = r == null ? 0 : c(a(r), 292)) && u(e)) {
      var n = (i(e) + "e").split("e");
      var s = t(n[0] + "e" + (+n[1] + r));
      return +((n = (i(s) + "e").split("e"))[0] + "e" + (+n[1] - r));
    }
    return t(e);
  };
};