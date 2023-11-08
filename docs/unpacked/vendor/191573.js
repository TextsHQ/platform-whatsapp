var r = require("./702958.js");
var i = require("./301499.js");
var a = require("./542634.js");
module.exports = function (e) {
  var t = i(e);
  if (t.length == 1 && t[0][2]) {
    return a(t[0][0], t[0][1]);
  } else {
    return function (n) {
      return n === e || r(n, e, t);
    };
  }
};