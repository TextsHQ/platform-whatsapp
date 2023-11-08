var r = require("./789465.js");
var i = require("./247816.js");
var a = require("./267206.js");
module.exports = function (e, t) {
  var n = {};
  t = a(t, 3);
  i(e, function (e, i, a) {
    r(n, i, t(e, i, a));
  });
  return n;
};