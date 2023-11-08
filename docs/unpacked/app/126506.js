Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSpamSupportedForMessageType = function (e) {
  return r.SPAM_REPORT_SUPPORTED_MESSAGE_TYPES.has(e);
};
var r = require("./453603.js");