var r = require("./41848.js");
var i = require("./267206.js");
var a = require("./640554.js");
var o = Math.max;
var s = Math.min;
module.exports = function (e, t, n) {
  var u = e == null ? 0 : e.length;
  if (!u) {
    return -1;
  }
  var l = u - 1;
  if (n !== undefined) {
    l = a(n);
    l = n < 0 ? o(u + l, 0) : s(l, u - 1);
  }
  return r(e, i(t, 3), l, true);
};