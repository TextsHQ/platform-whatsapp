Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCtwaConsumerUiEnabled = function () {
  return (0, r.getABPropConfigValue)("pnh_ctwa_consumer_ui");
};
exports.isMatCrashLogEnabled = function () {
  return (0, r.getABPropConfigValue)("pnh_ctwa_mat_crashlog");
};
exports.isMatFullyEnabled = function () {
  return (0, r.getABPropConfigValue)("pnh_split_threads_detection") && (0, r.getABPropConfigValue)("pnh_split_thread_case1_detection");
};
var r = require("./287461.js");