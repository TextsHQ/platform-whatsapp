var r = require("./977813.js");
var i = require("./498612.js");
var a = require("./565776.js");
var o = require("./513218.js");
module.exports = function (e, t, n) {
  if (!o(n)) {
    return false;
  }
  var s = typeof t;
  return !!(s == "number" ? i(n) && a(t, n.length) : s == "string" && t in n) && r(n[t], e);
};