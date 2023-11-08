var r = require("./644239.js");
var i = require("./637005.js");
module.exports = function (e) {
  return typeof e == "symbol" || i(e) && r(e) == "[object Symbol]";
};