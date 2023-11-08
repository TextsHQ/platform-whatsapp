var r = require("./646384.js");
var i = require("./690939.js");
module.exports = function (e, t, n, a) {
  var o = n.length;
  var s = o;
  var u = !a;
  if (e == null) {
    return !s;
  }
  for (e = Object(e); o--;) {
    var l = n[o];
    if (u && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) {
      return false;
    }
  }
  for (; ++o < s;) {
    var c = (l = n[o])[0];
    var f = e[c];
    var d = l[1];
    if (u && l[2]) {
      if (f === undefined && !(c in e)) {
        return false;
      }
    } else {
      var h = new r();
      if (a) {
        var p = a(f, d, c, e, t, h);
      }
      if (!(p === undefined ? i(d, f, 3, a, h) : p)) {
        return false;
      }
    }
  }
  return true;
};