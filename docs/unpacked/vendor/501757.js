module.exports = function (e, t, n) {
  for (var r = -1, i = e.length, a = t.length, o = {}; ++r < i;) {
    var s = r < a ? t[r] : undefined;
    n(o, e[r], s);
  }
  return o;
};