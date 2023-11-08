var r = require("./513218.js");
var i = Object.create;
var a = function () {
  function e() {}
  return function (t) {
    if (!r(t)) {
      return {};
    }
    if (i) {
      return i(t);
    }
    e.prototype = t;
    var n = new e();
    e.prototype = undefined;
    return n;
  };
}();
module.exports = a;