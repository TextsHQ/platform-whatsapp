Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemMessageActionTextStylingEnabled = function () {
  return Boolean((0, r.getABPropConfigValue)("system_msg_text_styling"));
};
exports.systemMessageTextTruncationEnabled = function () {
  return Boolean((0, r.getABPropConfigValue)("system_msg_truncation"));
};
var r = require("./287461.js");