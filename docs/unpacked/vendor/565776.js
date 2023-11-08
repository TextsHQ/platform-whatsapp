var t = /^(?:0|[1-9]\d*)$/;
module.exports = function (e, n) {
  var r = typeof e;
  return !!(n = n == null ? 9007199254740991 : n) && (r == "number" || r != "symbol" && t.test(e)) && e > -1 && e % 1 == 0 && e < n;
};