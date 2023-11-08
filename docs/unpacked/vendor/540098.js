var t = Math.ceil;
var n = Math.max;
module.exports = function (e, r, i, a) {
  for (var o = -1, s = n(t((r - e) / (i || 1)), 0), u = Array(s); s--;) {
    u[a ? s : ++o] = e;
    e += i;
  }
  return u;
};