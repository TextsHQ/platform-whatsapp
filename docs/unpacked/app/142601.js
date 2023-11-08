Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecentSyncMessageProcessingBreakIteration = function () {
  return (0, r.getABPropConfigValue)("web_noncritical_history_sync_message_processing_break_iteration");
};
exports.isHistorySyncHandlingRestartEnabled = function () {
  return (0, r.getABPropConfigValue)("web_recent_sync_handling_loop_restart_enabled");
};
exports.isHistorySyncNotificationHandlingV2Enabled = function () {
  return (0, r.getABPropConfigValue)("web_history_sync_notification_handling_queue_v2");
};
exports.isHistorySyncOnDemandEnabled = function () {
  if (!a.PrimaryFeatures.historySyncOnDemand) {
    return false;
  }
  const e = (0, o.getInitialHistorySyncCompleteLocalStorage)();
  const t = (0, o.getHistoryInitialSyncBoundary)();
  if (e && (t == null || Object.keys(t).length === 0)) {
    __LOG__(2)`[rdu] History sync on demand feature is disabled as initial sync is incomplete or initial sync boundary is not available`;
    return false;
  }
  if (((0, i.getMobilePlatform)() === i.PLATFORMS.ANDROID || (0, i.getMobilePlatform)() === i.PLATFORMS.SMBA) && a.PrimaryFeatures.isPrimaryBetaBuild && (0, r.getABPropConfigValue)("history_sync_on_demand_with_android_beta")) {
    return true;
  }
  return (0, r.getABPropConfigValue)("history_sync_on_demand");
};
exports.isHistorySyncWithoutMmsEnabled = function () {
  return true;
};
exports.isInitialSyncMessageStoringOptimizationEnabled = function () {
  return (0, r.getABPropConfigValue)("web_initial_sync_encrypted_msgs_storing");
};
exports.isMessagePlaceholderResendNseSupportEnabled = function () {
  return a.PrimaryFeatures.messagePlaceholderResendNseSupport;
};
exports.isPlaceholderMessageResendEnabled = function () {
  return (0, r.getABPropConfigValue)("placeholder_message_resend");
};
exports.isWebLinkPreviewNseSupportEnabled = function () {
  return a.PrimaryFeatures.webLinkPreviewNseSupport;
};
exports.shouldPopulateStarMessageWithTimestamp = function () {
  return a.PrimaryFeatures.historySyncOnDemand;
};
var r = require("./287461.js");
var i = require("./94602.js");
var a = require("./805617.js");
var o = require("./157942.js");