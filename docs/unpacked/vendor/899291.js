var r = require("./498612.js");
module.exports = function (e, t) {
  return function (n, i) {
    if (n == null) {
      return n;
    }
    if (!r(n)) {
      return e(n, i);
    }
    for (var a = n.length, o = t ? a : -1, s = Object(n); (t ? o-- : ++o < a) && i(s[o], o, s) !== false;);
    return n;
  };
};