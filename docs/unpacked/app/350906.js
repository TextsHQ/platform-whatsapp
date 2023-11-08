Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWamPlatform = function () {
  if ((0, r.isCurrentWebSessionInsidePwa)()) {
    return "PWA";
  }
  return "WEB";
};
var r = require("./311057.js");