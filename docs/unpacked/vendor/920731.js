var r = require("./288668.js");
var i = require("./447443.js");
var a = require("./301196.js");
var o = require("./829932.js");
var s = require("./307518.js");
var u = require("./274757.js");
module.exports = function (e, t, n, l) {
  var c = -1;
  var f = i;
  var d = true;
  var h = e.length;
  var p = [];
  var m = t.length;
  if (!h) {
    return p;
  }
  if (n) {
    t = o(t, s(n));
  }
  if (l) {
    f = a;
    d = false;
  } else if (t.length >= 200) {
    f = u;
    d = false;
    t = new r(t);
  }
  e: for (; ++c < h;) {
    var v = e[c];
    var g = n == null ? v : n(v);
    v = l || v !== 0 ? v : 0;
    if (d && g == g) {
      for (var y = m; y--;) {
        if (t[y] === g) {
          continue e;
        }
      }
      p.push(v);
    } else if (!f(t, g, l)) {
      p.push(v);
    }
  }
  return p;
};