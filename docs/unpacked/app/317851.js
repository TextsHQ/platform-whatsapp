Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUnifiedInfraEnabledForType = function (e) {
  switch (e) {
    case a.MSG_TYPE.PIN_MESSAGE:
      return (0, o.isPinnedMessagesM1ReceiverEnabled)() && s();
    case a.MSG_TYPE.POLL_UPDATE:
      return l();
    case a.MSG_TYPE.COMMENT:
      return (0, i.isCommentMessageReceiverEnabled)();
    default:
      return false;
  }
};
exports.isUnifiedPinAddonInfraEnabled = s;
exports.isUnifiedPollAddonInfraEnabled = l;
var r = require("./287461.js");
var i = require("./174834.js");
var a = require("./373070.js");
var o = require("./591800.js");
function s() {
  return (0, r.getABPropConfigValue)("unified_pin_addon_infra_enabled");
}
function l() {
  return (0, r.getABPropConfigValue)("unified_poll_vote_addon_infra_enabled");
}