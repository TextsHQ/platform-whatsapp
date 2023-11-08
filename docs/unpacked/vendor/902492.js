var r = require("./646384.js");
var i = require("./967114.js");
var a = require("./518351.js");
var o = require("./916096.js");
var s = require("./664160.js");
var u = require("./701469.js");
var l = require("./644144.js");
var c = require("./936719.js");
var f = "[object Arguments]";
var d = "[object Array]";
var h = "[object Object]";
var p = Object.prototype.hasOwnProperty;
module.exports = function (e, t, n, m, v, g) {
  var y = u(e);
  var b = u(t);
  var w = y ? d : s(e);
  var _ = b ? d : s(t);
  var x = (w = w == f ? h : w) == h;
  var S = (_ = _ == f ? h : _) == h;
  var E = w == _;
  if (E && l(e)) {
    if (!l(t)) {
      return false;
    }
    y = true;
    x = false;
  }
  if (E && !x) {
    if (!g) {
      g = new r();
    }
    if (y || c(e)) {
      return i(e, t, n, m, v, g);
    } else {
      return a(e, t, w, n, m, v, g);
    }
  }
  if (!(n & 1)) {
    var k = x && p.call(e, "__wrapped__");
    var O = S && p.call(t, "__wrapped__");
    if (k || O) {
      var N = k ? e.value() : e;
      var T = O ? t.value() : t;
      if (!g) {
        g = new r();
      }
      return v(N, T, n, m, g);
    }
  }
  return !!E && (g || (g = new r()), o(e, t, n, m, v, g));
};