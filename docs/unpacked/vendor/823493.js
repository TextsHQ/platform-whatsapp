var r = require("./23279.js");
var i = require("./513218.js");
module.exports = function (e, t, n) {
  var a = true;
  var o = true;
  if (typeof e != "function") {
    throw new TypeError("Expected a function");
  }
  if (i(n)) {
    a = "leading" in n ? !!n.leading : a;
    o = "trailing" in n ? !!n.trailing : o;
  }
  return r(e, t, {
    leading: a,
    maxWait: t,
    trailing: o
  });
};