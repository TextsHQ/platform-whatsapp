var r = require("./880531.js");
var i = require("./440180.js");
var a = require("./862689.js");
var o = require("./513218.js");
var s = require("./796347.js");
var u = require("./788016.js");
var l = require("./683140.js");
var c = require("./640554.js");
var f = require("./479833.js");
var d = /\w*$/;
module.exports = function (e, t) {
  var n = 30;
  var h = "...";
  if (o(t)) {
    var p = "separator" in t ? t.separator : p;
    n = "length" in t ? c(t.length) : n;
    h = "omission" in t ? r(t.omission) : h;
  }
  var m = (e = f(e)).length;
  if (a(e)) {
    var v = l(e);
    m = v.length;
  }
  if (n >= m) {
    return e;
  }
  var g = n - u(h);
  if (g < 1) {
    return h;
  }
  var y = v ? i(v, 0, g).join("") : e.slice(0, g);
  if (p === undefined) {
    return y + h;
  }
  if (v) {
    g += y.length - g;
  }
  if (s(p)) {
    if (e.slice(g).search(p)) {
      var b;
      var w = y;
      if (!p.global) {
        p = RegExp(p.source, f(d.exec(p)) + "g");
      }
      p.lastIndex = 0;
      for (; b = p.exec(w);) {
        var _ = b.index;
      }
      y = y.slice(0, _ === undefined ? g : _);
    }
  } else if (e.indexOf(r(p), g) != g) {
    var x = y.lastIndexOf(p);
    if (x > -1) {
      y = y.slice(0, x);
    }
  }
  return y + h;
};