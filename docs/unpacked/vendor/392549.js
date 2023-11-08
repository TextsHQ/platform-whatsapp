module.exports = function (e, t, n, r) {
  var i = e == null ? 0 : e.length;
  for (r && i && (n = e[--i]); i--;) {
    n = t(n, e[i], i, e);
  }
  return n;
};