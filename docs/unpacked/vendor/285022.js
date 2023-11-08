var r = require("./626393.js");
module.exports = function (e, t, n) {
  for (var i = -1, a = e.criteria, o = t.criteria, s = a.length, u = n.length; ++i < s;) {
    var l = r(a[i], o[i]);
    if (l) {
      if (i >= u) {
        return l;
      } else {
        return l * (n[i] == "desc" ? -1 : 1);
      }
    }
  }
  return e.index - t.index;
};