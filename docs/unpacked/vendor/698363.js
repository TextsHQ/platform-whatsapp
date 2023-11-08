var r = require("./234865.js");
var i = require("./789465.js");
module.exports = function (e, t, n, a) {
  var o = !n;
  if (!n) {
    n = {};
  }
  for (var s = -1, u = t.length; ++s < u;) {
    var l = t[s];
    var c = a ? a(n[l], e[l], l, n, e) : undefined;
    if (c === undefined) {
      c = e[l];
    }
    if (o) {
      i(n, l, c);
    } else {
      r(n, l, c);
    }
  }
  return n;
};