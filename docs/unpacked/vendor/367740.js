var r = require("./267206.js");
var i = require("./498612.js");
var a = require("./3674.js");
module.exports = function (e) {
  return function (t, n, o) {
    var s = Object(t);
    if (!i(t)) {
      var u = r(n, 3);
      t = a(t);
      n = function (e) {
        return u(s[e], e, s);
      };
    }
    var l = e(t, n, o);
    if (l > -1) {
      return s[u ? t[l] : l];
    } else {
      return undefined;
    }
  };
};