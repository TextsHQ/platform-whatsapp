var r = require("./909454.js");
var i = require("./637005.js");
var a = Object.prototype;
var o = a.hasOwnProperty;
var s = a.propertyIsEnumerable;
var u = r(function () {
  return arguments;
}()) ? r : function (e) {
  return i(e) && o.call(e, "callee") && !s.call(e, "callee");
};
module.exports = u;