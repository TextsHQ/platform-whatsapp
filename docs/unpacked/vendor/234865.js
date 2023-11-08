var r = require("./789465.js");
var i = require("./977813.js");
var a = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n) {
  var o = e[t];
  if (!(a.call(e, t) && i(o, n) && (n !== undefined || t in e))) {
    r(e, t, n);
  }
};