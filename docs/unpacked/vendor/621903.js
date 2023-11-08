var t = "[\\ud800-\\udfff]";
var n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
var r = "\\ud83c[\\udffb-\\udfff]";
var i = "[^\\ud800-\\udfff]";
var a = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var o = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var s = "(?:" + n + "|" + r + ")?";
var u = "[\\ufe0e\\ufe0f]?";
var l = u + s + ("(?:\\u200d(?:" + [i, a, o].join("|") + ")" + u + s + ")*");
var c = "(?:" + [i + n + "?", n, a, o, t].join("|") + ")";
var f = RegExp(r + "(?=" + r + ")|" + c + l, "g");
module.exports = function (e) {
  for (var t = f.lastIndex = 0; f.test(e);) {
    ++t;
  }
  return t;
};