Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPinnedMessagesM1ReceiverEnabled = function () {
  return (0, r.getABPropConfigValue)("pinned_messages_m1_receiver");
};
exports.isPinnedMessagesM1SenderEnabled = function () {
  return (0, r.getABPropConfigValue)("pinned_messages_m1_sender");
};
exports.isPinnedMessagesM2Enabled = function () {
  return (0, r.getABPropConfigValue)("pinned_messages_m2");
};
var r = require("./287461.js");