var r = require("./829932.js");
var i = require("./285990.js");
var a = require("./457406.js");
var o = require("./671811.js");
var s = require("./698363.js");
var u = require("./360696.js");
var l = require("./499021.js");
var c = require("./946904.js");
var f = l(function (e, t) {
  var n = {};
  if (e == null) {
    return n;
  }
  var l = false;
  t = r(t, function (t) {
    t = o(t, e);
    if (!l) {
      l = t.length > 1;
    }
    return t;
  });
  s(e, c(e), n);
  if (l) {
    n = i(n, 7, u);
  }
  for (var f = t.length; f--;) {
    a(n, t[f]);
  }
  return n;
});
module.exports = f;