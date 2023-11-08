module = require.nmd(module);
var r = require("./555639.js");
var i = exports && !exports.nodeType && exports;
var a = i && module && !module.nodeType && module;
var o = a && a.exports === i ? r.Buffer : undefined;
var s = o ? o.allocUnsafe : undefined;
module.exports = function (e, t) {
  if (t) {
    return e.slice();
  }
  var n = e.length;
  var r = s ? s(n) : new e.constructor(n);
  e.copy(r);
  return r;
};