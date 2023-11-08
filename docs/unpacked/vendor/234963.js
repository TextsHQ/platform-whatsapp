module.exports = function (e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
    var o = e[n];
    if (t(o, n, e)) {
      a[i++] = o;
    }
  }
  return a;
};