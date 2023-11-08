Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPtvAutoplayLoopLimit = function () {
  const e = (0, r.getABPropConfigValue)("ptv_autoplay_loop_limit");
  if (e === 0) {
    return 1 / 0;
  } else {
    return e;
  }
};
exports.getPtvMaxDurationSeconds = function () {
  return (0, r.getABPropConfigValue)("ptv_max_duration_seconds");
};
exports.isPtvAutoplayEnabled = function () {
  return (0, r.getABPropConfigValue)("ptv_autoplay_enabled");
};
exports.isPtvReceivingEnabled = function () {
  return (0, r.getABPropConfigValue)("ptv_receiving_enabled");
};
exports.isPtvSendingEnabled = function () {
  return (0, r.getABPropConfigValue)("ptv_sending_enabled");
};
var r = require("./287461.js");