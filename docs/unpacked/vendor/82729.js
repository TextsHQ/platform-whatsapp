var r = require("./267206.js");
var i = require("./15742.js");
module.exports = function (e, t) {
  var n = [];
  if (!e || !e.length) {
    return n;
  }
  var a = -1;
  var o = [];
  var s = e.length;
  for (t = r(t, 3); ++a < s;) {
    var u = e[a];
    if (t(u, a, e)) {
      n.push(u);
      o.push(a);
    }
  }
  i(e, o);
  return n;
};