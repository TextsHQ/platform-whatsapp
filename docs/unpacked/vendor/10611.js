var r = require("./234865.js");
var i = require("./671811.js");
var a = require("./565776.js");
var o = require("./513218.js");
var s = require("./240327.js");
module.exports = function (e, t, n, u) {
  if (!o(e)) {
    return e;
  }
  for (var l = -1, c = (t = i(t, e)).length, f = c - 1, d = e; d != null && ++l < c;) {
    var h = s(t[l]);
    var p = n;
    if (h === "__proto__" || h === "constructor" || h === "prototype") {
      return e;
    }
    if (l != f) {
      var m = d[h];
      if ((p = u ? u(m, h, d) : undefined) === undefined) {
        p = o(m) ? m : a(t[l + 1]) ? [] : {};
      }
    }
    r(d, h, p);
    d = d[h];
  }
  return e;
};