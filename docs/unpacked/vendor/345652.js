var r = require("./288668.js");
var i = require("./447443.js");
var a = require("./301196.js");
var o = require("./274757.js");
var s = require("./23593.js");
var u = require("./321814.js");
module.exports = function (e, t, n) {
  var l = -1;
  var c = i;
  var f = e.length;
  var d = true;
  var h = [];
  var p = h;
  if (n) {
    d = false;
    c = a;
  } else if (f >= 200) {
    var m = t ? null : s(e);
    if (m) {
      return u(m);
    }
    d = false;
    c = o;
    p = new r();
  } else {
    p = t ? [] : h;
  }
  e: for (; ++l < f;) {
    var v = e[l];
    var g = t ? t(v) : v;
    v = n || v !== 0 ? v : 0;
    if (d && g == g) {
      for (var y = p.length; y--;) {
        if (p[y] === g) {
          continue e;
        }
      }
      if (t) {
        p.push(g);
      }
      h.push(v);
    } else if (!c(p, g, n)) {
      if (p !== h) {
        p.push(g);
      }
      h.push(v);
    }
  }
  return h;
};