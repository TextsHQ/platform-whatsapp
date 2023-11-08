var r = require("./457406.js");
var i = require("./565776.js");
var a = Array.prototype.splice;
module.exports = function (e, t) {
  for (var n = e ? t.length : 0, o = n - 1; n--;) {
    var s = t[n];
    if (n == o || s !== u) {
      var u = s;
      if (i(s)) {
        a.call(e, s, 1);
      } else {
        r(e, s);
      }
    }
  }
  return e;
};