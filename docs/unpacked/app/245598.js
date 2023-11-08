Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPerformanceExperimentEnabled = function () {
  if (a()) {
    return true;
  }
  return (0, r.getABPropConfigValue)("web_abprop_large_files_encryption_optimization");
};
exports.shouldEncryptInChunks = function (e) {
  return a() && e > i.DEFAULT_MAX_FILE_SIZE_BYTES;
};
var r = require("./287461.js");
var i = require("./937001.js");
function a() {
  return i.ServerProps.maxFileSize > i.DEFAULT_MAX_FILE_SIZE_BYTES || i.ServerProps.maxElectronFileSize > i.DEFAULT_MAX_FILE_SIZE_BYTES;
}