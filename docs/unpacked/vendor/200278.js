module.exports = function (e, t) {
  var n = -1;
  var r = e.length;
  for (t || (t = Array(r)); ++n < r;) {
    t[n] = e[n];
  }
  return t;
};