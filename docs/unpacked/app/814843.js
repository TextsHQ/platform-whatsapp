Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callSilencingEnabled = function () {
  return (0, r.getABPropConfigValue)("calling_privacy_callee");
};
exports.callSilencingEnabledInElectron = function () {
  return false;
};
var r = require("./287461.js");