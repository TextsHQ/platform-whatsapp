var r = require("./671811.js");
var i = require("./240327.js");
module.exports = function (e, t) {
  for (var n = 0, a = (t = r(t, e)).length; e != null && n < a;) {
    e = e[i(t[n++])];
  }
  if (n && n == a) {
    return e;
  } else {
    return undefined;
  }
};