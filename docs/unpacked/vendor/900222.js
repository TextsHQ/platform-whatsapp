var r = require("./671811.js");
var i = require("./135694.js");
var a = require("./701469.js");
var o = require("./565776.js");
var s = require("./541780.js");
var u = require("./240327.js");
module.exports = function (e, t, n) {
  for (var l = -1, c = (t = r(t, e)).length, f = false; ++l < c;) {
    var d = u(t[l]);
    if (!(f = e != null && n(e, d))) {
      break;
    }
    e = e[d];
  }
  if (f || ++l != c) {
    return f;
  } else {
    return !!(c = e == null ? 0 : e.length) && s(c) && o(d, c) && (a(e) || i(e));
  }
};