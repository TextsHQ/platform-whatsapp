Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGroupSizeBypassingSampling = function () {
  var e;
  if ((e = (0, r.getABPropConfigValue)("group_size_bypassing_sampling")) !== null && e !== undefined) {
    return e;
  } else {
    return 100000;
  }
};
exports.isDeviceSyncManagerEnabled = function () {
  return (0, r.getABPropConfigValue)("web_device_sync_manager_enabled");
};
exports.isDeviceSyncManagerGroupEnabled = function () {
  return (0, r.getABPropConfigValue)("web_device_sync_manager_group_enabled");
};
exports.isMediaretryNotificationNackEnabled = function () {
  return (0, r.getABPropConfigValue)("web_mediaretry_notification_nack_enabled");
};
exports.isMsgTypeValidationDropMsgEnabled = function () {
  return i() && (0, r.getABPropConfigValue)("rt_drop_message_invalid_type");
};
exports.isMsgTypeValidationEnabled = i;
exports.isReportTokenReceivingEnabled = function () {
  return (0, r.getABPropConfigValue)("rt_receive_reporting_tag");
};
exports.isReportTokenSendingEnabled = function () {
  return (0, r.getABPropConfigValue)("rt_send_reporting_tag");
};
exports.isRetryReceiptErrorCodeEnabled = function () {
  return (0, r.getABPropConfigValue)("retry_receipt_error_code_enabled");
};
exports.isSendMessageDropNackEnabled = function () {
  return (0, r.getABPropConfigValue)("send_message_drop_nack_enabled");
};
exports.isSendMessageDropOldCounterNackEnabled = function () {
  return (0, r.getABPropConfigValue)("send_message_drop_old_couter_nack_enabled");
};
exports.isVIdDeprecationEnabled = function () {
  return (0, r.getABPropConfigValue)("v_id_deprecation_enabled");
};
exports.sendKeyDistributionMsgMaxGroupSize = function () {
  return (0, r.getABPropConfigValue)("web_send_invisible_msg_max_group_size");
};
exports.sendKeyDistributionMsgMinGroupSize = function () {
  return (0, r.getABPropConfigValue)("web_send_invisible_msg_min_group_size");
};
exports.sendKeyDistributionMsgToNewGroups = function () {
  return (0, r.getABPropConfigValue)("web_send_invisible_msg_to_new_groups");
};
exports.sendOnlyActiveReceiptsEnabled = function () {
  return (0, r.getABPropConfigValue)("web_send_only_active_receipts");
};
var r = require("./287461.js");
function i() {
  return (0, r.getABPropConfigValue)("rt_validate_message_type");
}