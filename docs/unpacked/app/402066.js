Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAppendMessageWhenForwardingMediaWithCaptionEnabled = i;
exports.isAppendMessageWhenForwardingMediaWithoutCaptionEnabled = function () {
  return i() && (0, r.getABPropConfigValue)("append_message_when_forwarding_media_without_caption");
};
exports.isForwardMediaWithCaptionsEnabled = function () {
  return (0, r.getABPropConfigValue)("forward_media_with_captions");
};
var r = require("./287461.js");
function i() {
  return (0, r.getABPropConfigValue)("append_message_when_forwarding_media") || false;
}