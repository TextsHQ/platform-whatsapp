module.exports = function (e, t, n, r, i) {
  i(e, function (e, i, a) {
    n = r ? (r = false, e) : t(n, e, i, a);
  });
  return n;
};