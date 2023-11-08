var r = require("./540098.js");
var i = require("./816612.js");
var a = require("./418601.js");
module.exports = function (e) {
  return function (t, n, o) {
    if (o && typeof o != "number" && i(t, n, o)) {
      n = o = undefined;
    }
    t = a(t);
    if (n === undefined) {
      n = t;
      t = 0;
    } else {
      n = a(n);
    }
    o = o === undefined ? t < n ? 1 : -1 : a(o);
    return r(t, n, o, e);
  };
};