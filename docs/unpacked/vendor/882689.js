var r = require("./829932.js");
var i = require("./297786.js");
var a = require("./267206.js");
var o = require("./269199.js");
var s = require("./571131.js");
var u = require("./307518.js");
var l = require("./285022.js");
var c = require("./406557.js");
var f = require("./701469.js");
module.exports = function (e, t, n) {
  t = t.length ? r(t, function (e) {
    if (f(e)) {
      return function (t) {
        return i(t, e.length === 1 ? e[0] : e);
      };
    } else {
      return e;
    }
  }) : [c];
  var d = -1;
  t = r(t, u(a));
  var h = o(e, function (e, n, i) {
    return {
      criteria: r(t, function (t) {
        return t(e);
      }),
      index: ++d,
      value: e
    };
  });
  return s(h, function (e, t) {
    return l(e, t, n);
  });
};