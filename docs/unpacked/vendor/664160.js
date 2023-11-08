var r = require("./618552.js");
var i = require("./357071.js");
var a = require("./853818.js");
var o = require("./458525.js");
var s = require("./70577.js");
var u = require("./644239.js");
var l = require("./680346.js");
var c = "[object Map]";
var f = "[object Promise]";
var d = "[object Set]";
var h = "[object WeakMap]";
var p = "[object DataView]";
var m = l(r);
var v = l(i);
var g = l(a);
var y = l(o);
var b = l(s);
var w = u;
if (r && w(new r(new ArrayBuffer(1))) != p || i && w(new i()) != c || a && w(a.resolve()) != f || o && w(new o()) != d || s && w(new s()) != h) {
  w = function (e) {
    var t = u(e);
    var n = t == "[object Object]" ? e.constructor : undefined;
    var r = n ? l(n) : "";
    if (r) {
      switch (r) {
        case m:
          return p;
        case v:
          return c;
        case g:
          return f;
        case y:
          return d;
        case b:
          return h;
      }
    }
    return t;
  };
}
module.exports = w;