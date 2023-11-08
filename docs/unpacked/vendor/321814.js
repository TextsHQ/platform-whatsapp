module.exports = function (e) {
  var t = -1;
  var n = Array(e.size);
  e.forEach(function (e) {
    n[++t] = e;
  });
  return n;
};