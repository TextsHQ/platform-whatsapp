Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEventSampling = function () {
  return (0, r.getABPropConfigValue)("qpl_sampling_as_string");
};
exports.getInitialUploadDelayInSeconds = function () {
  return (0, r.getABPropConfigValue)("qpl_initial_upload_delay") * 60;
};
exports.getUploadIntervalInSeconds = function () {
  return (0, r.getABPropConfigValue)("qpl_upload_delay") * 60;
};
exports.isQplEnabled = function () {
  return (0, r.getABPropConfigValue)("qpl_enabled");
};
var r = require("./287461.js");