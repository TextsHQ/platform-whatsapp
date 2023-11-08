var r;
var i = require("./325612.js");
if (r = require("./441143.js")) {
  r.__esModule;
}
Object.prototype.hasOwnProperty;
var a = new RegExp("\\{([^}]+)\\}(" + i.PUNCT_CHAR_CLASS + "*)", "g");
module.exports = function (e, t) {
  if (t == null) {
    return e;
  }
  if (typeof t != "object") {
    invariant(false);
  }
  var n = [];
  var r = [];
  var o = e.replace(a, function (e, a, o) {
    var s = t[a];
    if (s != null && typeof s == "object") {
      n.push(s);
      r.push(a);
      return "" + o;
    } else if (s === null) {
      return "";
    } else {
      return String(s) + (0, i.dedupeStops)(String(s), o);
    }
  }).split("").map(i.applyPhonologicalRules);
  if (o.length === 1) {
    return o[0];
  }
  for (var s = o[0] !== "" ? [o[0]] : [], u = 0; u < n.length; u++) {
    s.push(n[u]);
    if (o[u + 1] !== "") {
      s.push(o[u + 1]);
    }
  }
  return s;
};