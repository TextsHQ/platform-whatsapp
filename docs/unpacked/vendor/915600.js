module.exports = function (e, t) {
  if (e == null) {
    return {};
  }
  var n;
  var r;
  var i = {};
  var a = Object.keys(e);
  for (r = 0; r < a.length; r++) {
    n = a[r];
    if (!(t.indexOf(n) >= 0)) {
      i[n] = e[n];
    }
  }
  return i;
};