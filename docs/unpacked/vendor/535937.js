var r = require("./829932.js");
var i = require("./267206.js");
var a = require("./863012.js");
var o = require("./946904.js");
module.exports = function (e, t) {
  if (e == null) {
    return {};
  }
  var n = r(o(e), function (e) {
    return [e];
  });
  t = i(t);
  return a(e, n, function (e, n) {
    return t(e, n[0]);
  });
};