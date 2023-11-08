module.exports = function (e, t) {
  for (var n, r = -1, i = e.length; ++r < i;) {
    var a = t(e[r]);
    if (a !== undefined) {
      n = n === undefined ? a : n + a;
    }
  }
  return n;
};