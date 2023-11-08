var r = require("./422545.js");
var i = require("./554290.js");
var a = require("./640554.js");
var o = 4294967295;
var s = Math.min;
module.exports = function (e, t) {
  if ((e = a(e)) < 1 || e > 9007199254740991) {
    return [];
  }
  var n = o;
  var u = s(e, o);
  t = i(t);
  e -= o;
  for (var l = r(u, t); ++n < e;) {
    t(n);
  }
  return l;
};