var r = require("./733448.js");
module.exports = function (e, t) {
  if (e !== t) {
    var n = e !== undefined;
    var i = e === null;
    var a = e == e;
    var o = r(e);
    var s = t !== undefined;
    var u = t === null;
    var l = t == t;
    var c = r(t);
    if (!u && !c && !o && e > t || o && s && l && !u && !c || i && s && l || !n && l || !a) {
      return 1;
    }
    if (!i && !o && !c && e < t || c && n && a && !i && !o || u && n && a || !s && a || !l) {
      return -1;
    }
  }
  return 0;
};