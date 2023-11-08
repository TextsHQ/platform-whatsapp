var r = require("./562705.js");
var i = Object.prototype;
var a = i.hasOwnProperty;
var o = i.toString;
var s = r ? r.toStringTag : undefined;
module.exports = function (e) {
  var t = a.call(e, s);
  var n = e[s];
  try {
    e[s] = undefined;
    var r = true;
  } catch (e) {}
  var i = o.call(e);
  if (r) {
    if (t) {
      e[s] = n;
    } else {
      delete e[s];
    }
  }
  return i;
};