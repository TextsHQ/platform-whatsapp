module.exports = function (e, t, n, r) {
  for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) {
    if (t(e[a], a, e)) {
      return a;
    }
  }
  return -1;
};