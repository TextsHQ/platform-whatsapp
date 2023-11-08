var r = require("./422545.js");
var i = require("./135694.js");
var a = require("./701469.js");
var o = require("./644144.js");
var s = require("./565776.js");
var u = require("./936719.js");
var l = Object.prototype.hasOwnProperty;
module.exports = function (e, t) {
  var n = a(e);
  var c = !n && i(e);
  var f = !n && !c && o(e);
  var d = !n && !c && !f && u(e);
  var h = n || c || f || d;
  var p = h ? r(e.length, String) : [];
  var m = p.length;
  for (var v in e) {
    if (!(!t && !l.call(e, v) || h && (v == "length" || f && (v == "offset" || v == "parent") || d && (v == "buffer" || v == "byteLength" || v == "byteOffset") || s(v, m)))) {
      p.push(v);
    }
  }
  return p;
};