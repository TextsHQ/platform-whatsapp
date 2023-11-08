var r = require("./915600.js");
module.exports = function (e, t) {
  if (e == null) {
    return {};
  }
  var n;
  var i;
  var a = r(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++) {
      n = o[i];
      if (!(t.indexOf(n) >= 0)) {
        if (Object.prototype.propertyIsEnumerable.call(e, n)) {
          a[n] = e[n];
        }
      }
    }
  }
  return a;
};