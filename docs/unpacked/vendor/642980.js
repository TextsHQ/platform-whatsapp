var r = require("./646384.js");
var i = require("./286556.js");
var a = require("./228483.js");
var o = require("./559783.js");
var s = require("./513218.js");
var u = require("./481704.js");
var l = require("./636390.js");
module.exports = function e(t, n, c, f, d) {
  if (t !== n) {
    a(n, function (a, u) {
      if (!d) {
        d = new r();
      }
      if (s(a)) {
        o(t, n, u, c, e, f, d);
      } else {
        var h = f ? f(l(t, u), a, u + "", t, n, d) : undefined;
        if (h === undefined) {
          h = a;
        }
        i(t, u, h);
      }
    }, u);
  }
};