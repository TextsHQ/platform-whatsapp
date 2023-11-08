var r = require("./234963.js");
var i = require("./829932.js");
var a = require("./840371.js");
var o = require("./422545.js");
var s = require("./229246.js");
var u = Math.max;
module.exports = function (e) {
  if (!e || !e.length) {
    return [];
  }
  var t = 0;
  e = r(e, function (e) {
    if (s(e)) {
      t = u(e.length, t);
      return true;
    }
  });
  return o(t, function (t) {
    return i(e, a(t));
  });
};