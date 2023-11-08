Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVCFCopyBuildEnabled = function () {
  return (0, a.getABPropConfigValue)("unified_e2ee_copy_build");
};
exports.isVCFUIBuildEnabled = function () {
  return (0, a.getABPropConfigValue)("unified_e2ee_ui_build");
};
var a = require("../app/287461.js");