Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fmxCTWAKillSwitchEnabled = function () {
  return a() && (0, r.getABPropConfigValue)("fmx_ctwa_kill_switch");
};
exports.supportsFMX = i;
exports.supportsFMXV2 = a;
var r = require("./287461.js");
function i() {
  return (0, r.getABPropConfigValue)("first_message_experience");
}
function a() {
  return i() && (0, r.getABPropConfigValue)("first_message_experience_v2");
}