var r = require("./701469.js");
var i = require("./733448.js");
var a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var o = /^\w*$/;
module.exports = function (e, t) {
  if (r(e)) {
    return false;
  }
  var n = typeof e;
  return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !i(e)) || o.test(e) || !a.test(e) || t != null && e in Object(t);
};