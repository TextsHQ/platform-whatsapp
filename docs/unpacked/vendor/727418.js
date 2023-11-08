/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty;
var r = Object.prototype.propertyIsEnumerable;
function i(e) {
  if (e == null) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(e);
}
module.exports = function () {
  try {
    if (!Object.assign) {
      return false;
    }
    var e = new String("abc");
    e[5] = "de";
    if (Object.getOwnPropertyNames(e)[0] === "5") {
      return false;
    }
    for (var t = {}, n = 0; n < 10; n++) {
      t["_" + String.fromCharCode(n)] = n;
    }
    if (Object.getOwnPropertyNames(t).map(function (e) {
      return t[e];
    }).join("") !== "0123456789") {
      return false;
    }
    var r = {};
    "abcdefghijklmnopqrst".split("").forEach(function (e) {
      r[e] = e;
    });
    return Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
  } catch (e) {
    return false;
  }
}() ? Object.assign : function (e, a) {
  for (var o, s, u = i(e), l = 1; l < arguments.length; l++) {
    for (var c in o = Object(arguments[l])) {
      if (n.call(o, c)) {
        u[c] = o[c];
      }
    }
    if (t) {
      s = t(o);
      for (var f = 0; f < s.length; f++) {
        if (r.call(o, s[f])) {
          u[s[f]] = o[s[f]];
        }
      }
    }
  }
  return u;
};