var r = require("./896874.js");
var i = Math.max;
module.exports = function (e, t, n) {
  t = i(t === undefined ? e.length - 1 : t, 0);
  return function () {
    for (var a = arguments, o = -1, s = i(a.length - t, 0), u = Array(s); ++o < s;) {
      u[o] = a[t + o];
    }
    o = -1;
    for (var l = Array(t + 1); ++o < t;) {
      l[o] = a[o];
    }
    l[t] = n(u);
    return r(e, this, l);
  };
};