var r = require("./862488.js");
var i = require("./137285.js");
module.exports = function e(t, n, a, o, s) {
  var u = -1;
  var l = t.length;
  if (!a) {
    a = i;
  }
  if (!s) {
    s = [];
  }
  for (; ++u < l;) {
    var c = t[u];
    if (n > 0 && a(c)) {
      if (n > 1) {
        e(c, n - 1, a, o, s);
      } else {
        r(s, c);
      }
    } else if (!o) {
      s[s.length] = c;
    }
  }
  return s;
};