var r = require("./644239.js");
var i = require("./385924.js");
var a = require("./637005.js");
var o = Function.prototype;
var s = Object.prototype;
var u = o.toString;
var l = s.hasOwnProperty;
var c = u.call(Object);
module.exports = function (e) {
  if (!a(e) || r(e) != "[object Object]") {
    return false;
  }
  var t = i(e);
  if (t === null) {
    return true;
  }
  var n = l.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && u.call(n) == c;
};