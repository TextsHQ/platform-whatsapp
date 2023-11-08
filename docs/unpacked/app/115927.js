Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStatusDrawerEnabled = function () {
  return (0, r.getABPropConfigValue)("web_status_drawer_enabled");
};
exports.isStatusPostingEnabled = function () {
  return false;
};
var r = require("./287461.js");