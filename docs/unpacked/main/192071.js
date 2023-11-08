Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showForwarded = function (e) {
  const t = (0, o.unproxy)(e).unsafe();
  return (0, r.getNumTimesForwarded)(t) > 0 && !(0, a.getAsRevoked)(t);
};
var a = require("../app/163755.js");
var r = require("../app/787742.js");
var o = require("../app/163139.js");