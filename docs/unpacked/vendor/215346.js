var r;
var i = require("./614429.js");
var a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
module.exports = function (e) {
  return !!a && a in e;
};