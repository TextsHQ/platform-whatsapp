var n = require("../vendor/829932.js");
var a = require("../vendor/247556.js");
var o = require("../vendor/105976.js");
var i = require("../vendor/24387.js");
var u = require("../vendor/610928.js");
var c = o(function (e) {
  var t = u(e);
  var r = n(e, i);
  if (t = typeof t == "function" ? t : undefined) {
    r.pop();
  }
  if (r.length && r[0] === e[0]) {
    return a(r, undefined, t);
  } else {
    return [];
  }
});
module.exports = c;