Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStringOrFbt = function (e) {
  return (0, r.isString)(e) || i.fbt.isFbtInstance(e);
};
exports.toProductionString = function (e) {
  return e.toString();
};
var r = require("./724976.js");
var i = require("../vendor/548360.js");