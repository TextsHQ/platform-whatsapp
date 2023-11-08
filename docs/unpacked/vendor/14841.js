var r = require("./727561.js");
var i = require("./513218.js");
var a = require("./733448.js");
var o = /^[-+]0x[0-9a-f]+$/i;
var s = /^0b[01]+$/i;
var u = /^0o[0-7]+$/i;
var l = parseInt;
module.exports = function (e) {
  if (typeof e == "number") {
    return e;
  }
  if (a(e)) {
    return NaN;
  }
  if (i(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = i(t) ? t + "" : t;
  }
  if (typeof e != "string") {
    if (e === 0) {
      return e;
    } else {
      return +e;
    }
  }
  e = r(e);
  var n = s.test(e);
  if (n || u.test(e)) {
    return l(e.slice(2), n ? 2 : 8);
  } else if (o.test(e)) {
    return NaN;
  } else {
    return +e;
  }
};