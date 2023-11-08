module.exports = function (e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
    var a = e[t];
    if (a) {
      i[r++] = a;
    }
  }
  return i;
};