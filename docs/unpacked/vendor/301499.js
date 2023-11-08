var r = require("./689162.js");
var i = require("./3674.js");
module.exports = function (e) {
  for (var t = i(e), n = t.length; n--;) {
    var a = t[n];
    var o = e[a];
    t[n] = [a, o, r(o)];
  }
  return t;
};