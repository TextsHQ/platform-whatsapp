var n = require("../vendor/880531.js");
var a = require("../vendor/440180.js");
var o = require("./105512.js");
var i = require("../vendor/683140.js");
var u = require("../vendor/479833.js");
var c = require("../vendor/567990.js");
module.exports = function (e, t, r) {
  if ((e = u(e)) && (r || t === undefined)) {
    return e.slice(0, c(e) + 1);
  }
  if (!e || !(t = n(t))) {
    return e;
  }
  var s = i(e);
  var l = o(s, i(t)) + 1;
  return a(s, 0, l).join("");
};