var r = require("./513218.js");
var i = require("./225726.js");
var a = require("./133498.js");
var o = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  if (!r(e)) {
    return a(e);
  }
  var t = i(e);
  var n = [];
  for (var s in e) {
    if (s != "constructor" || !t && o.call(e, s)) {
      n.push(s);
    }
  }
  return n;
};