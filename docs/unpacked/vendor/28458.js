var r = require("./623560.js");
var i = require("./215346.js");
var a = require("./513218.js");
var o = require("./680346.js");
var s = /^\[object .+?Constructor\]$/;
var u = Function.prototype;
var l = Object.prototype;
var c = u.toString;
var f = l.hasOwnProperty;
var d = RegExp("^" + c.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (e) {
  return !(!a(e) || i(e)) && (r(e) ? d : s).test(o(e));
};