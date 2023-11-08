module.exports = function (e, t, n, r) {
  for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
    var o = e[i];
    t(r, o, n(o), e);
  }
  return r;
};