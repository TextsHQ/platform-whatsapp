Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCryptoLibraryEnabled = i;
exports.isCryptoLibraryVerificationEnabled = function () {
  return !i() && (0, r.getABPropConfigValue)("web_crypto_library_verification_enabled");
};
exports.isCryptoLibraryWithQueuesEnabled = function () {
  return i() && (0, r.getABPropConfigValue)("web_crypto_library_with_queues_enabled");
};
var r = require("./287461.js");
function i() {
  return (0, r.getABPropConfigValue)("web_crypto_library_enabled");
}