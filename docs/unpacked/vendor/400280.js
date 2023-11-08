var r = require("./225726.js");
var i = require("./86916.js");
var a = Object.prototype.hasOwnProperty;
module.exports = function (e) {
  if (!r(e)) {
    return i(e);
  }
  var t = [];
  for (var n in Object(e)) {
    if (a.call(e, n) && n != "constructor") {
      t.push(n);
    }
  }
  return t;
};