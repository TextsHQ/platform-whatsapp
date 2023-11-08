var r = require("./844174.js");
var i = require("./481119.js");
var a = require("./267206.js");
var o = require("./701469.js");
module.exports = function (e, t) {
  return function (n, s) {
    var u = o(n) ? r : i;
    var l = t ? t() : {};
    return u(n, e, a(s, 2), l);
  };
};