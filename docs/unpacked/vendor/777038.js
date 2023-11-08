var r = require("./441143.js");
var i = {
  ARG: {
    INDEX: 0,
    SUBSTITUTION: 1
  },
  access: function (e, t, n) {
    if (n >= t.length) {
      if (!(typeof e == "string" || Array.isArray(e))) {
        r(false);
      }
      return e;
    }
    var a = t[n][i.ARG.INDEX];
    if (a == null) {
      return i.access(e, t, n + 1);
    }
    if (typeof e == "string" || Array.isArray(e)) {
      r(false);
    }
    for (var o = 0; o < a.length; ++o) {
      var s = e[a[o]];
      if (s != null) {
        var u = i.access(s, t, n + 1);
        if (u != null) {
          return u;
        }
      }
    }
    return null;
  }
};
module.exports = i;