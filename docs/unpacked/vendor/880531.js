var r = require("./562705.js");
var i = require("./829932.js");
var a = require("./701469.js");
var o = require("./733448.js");
var s = r ? r.prototype : undefined;
var u = s ? s.toString : undefined;
module.exports = function e(t) {
  if (typeof t == "string") {
    return t;
  }
  if (a(t)) {
    return i(t, e) + "";
  }
  if (o(t)) {
    if (u) {
      return u.call(t);
    } else {
      return "";
    }
  }
  var n = t + "";
  if (n == "0" && 1 / t == -Infinity) {
    return "-0";
  } else {
    return n;
  }
};