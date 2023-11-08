var r = require("./989881.js");
var i = require("./498612.js");
module.exports = function (e, t) {
  var n = -1;
  var a = i(e) ? Array(e.length) : [];
  r(e, function (e, r, i) {
    a[++n] = t(e, r, i);
  });
  return a;
};