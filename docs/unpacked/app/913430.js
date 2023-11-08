Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  switch (e) {
    case r.VERIFIED_LEVEL.HIGH:
      return "high";
    case r.VERIFIED_LEVEL.LOW:
      return "low";
    case r.VERIFIED_LEVEL.UNKNOWN:
    default:
      return "unknown";
  }
};
var r = require("./817649.js");