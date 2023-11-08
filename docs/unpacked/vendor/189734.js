var r = require("./121078.js");
var i = require("./882689.js");
var a = require("./105976.js");
var o = require("./816612.js");
var s = a(function (e, t) {
  if (e == null) {
    return [];
  }
  var n = t.length;
  if (n > 1 && o(e, t[0], t[1])) {
    t = [];
  } else if (n > 2 && o(t[0], t[1], t[2])) {
    t = [t[0]];
  }
  return i(e, r(t, 1), []);
});
module.exports = s;