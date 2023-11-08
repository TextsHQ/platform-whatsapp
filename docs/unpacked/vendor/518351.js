var r = require("./562705.js");
var i = require("./611149.js");
var a = require("./977813.js");
var o = require("./967114.js");
var s = require("./668776.js");
var u = require("./321814.js");
var l = r ? r.prototype : undefined;
var c = l ? l.valueOf : undefined;
module.exports = function (e, t, n, r, l, f, d) {
  switch (n) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
        return false;
      }
      e = e.buffer;
      t = t.buffer;
    case "[object ArrayBuffer]":
      return !(e.byteLength != t.byteLength || !f(new i(e), new i(t)));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return a(+e, +t);
    case "[object Error]":
      return e.name == t.name && e.message == t.message;
    case "[object RegExp]":
    case "[object String]":
      return e == t + "";
    case "[object Map]":
      var h = s;
    case "[object Set]":
      var p = r & 1;
      if (!h) {
        h = u;
      }
      if (e.size != t.size && !p) {
        return false;
      }
      var m = d.get(e);
      if (m) {
        return m == t;
      }
      r |= 2;
      d.set(e, t);
      var v = o(h(e), h(t), r, l, f, d);
      d.delete(e);
      return v;
    case "[object Symbol]":
      if (c) {
        return c.call(e) == c.call(t);
      }
  }
  return false;
};