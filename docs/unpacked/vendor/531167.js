module = require.nmd(module);
var r = require("./431957.js");
var i = exports && !exports.nodeType && exports;
var a = i && module && !module.nodeType && module;
var o = a && a.exports === i && r.process;
var s = function () {
  try {
    var e = a && a.require && a.require("util").types;
    return e || o && o.binding && o.binding("util");
  } catch (e) {}
}();
module.exports = s;