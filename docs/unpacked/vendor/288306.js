var r = require("./883369.js");
function i(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") {
    throw new TypeError("Expected a function");
  }
  var n = function () {
    var r = arguments;
    var i = t ? t.apply(this, r) : r[0];
    var a = n.cache;
    if (a.has(i)) {
      return a.get(i);
    }
    var o = e.apply(this, r);
    n.cache = a.set(i, o) || a;
    return o;
  };
  n.cache = new (i.Cache || r)();
  return n;
}
i.Cache = r;
module.exports = i;