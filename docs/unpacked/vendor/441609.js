var r = require("./400280.js");
var i = require("./664160.js");
var a = require("./135694.js");
var o = require("./701469.js");
var s = require("./498612.js");
var u = require("./644144.js");
var l = require("./225726.js");
var c = require("./936719.js");
var f = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  if (e == null) {
    return true;
  }
  if (s(e) && (o(e) || typeof e == "string" || typeof e.splice == "function" || u(e) || c(e) || a(e))) {
    return !e.length;
  }
  var t = i(e);
  if (t == "[object Map]" || t == "[object Set]") {
    return !e.size;
  }
  if (l(e)) {
    return !r(e).length;
  }
  for (var n in e) {
    if (f.call(e, n)) {
      return false;
    }
  }
  return true;
};