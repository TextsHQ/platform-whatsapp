module.exports = function (e, t, n) {
  for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) {
    if (n(t, e[r])) {
      return true;
    }
  }
  return false;
};