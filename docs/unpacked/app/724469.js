Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNonBlockingOfflineResumeMaxMessageCount = function () {
  return (0, r.getABPropConfigValue)("web_non_blocking_offline_resume_max_message_count");
};
exports.getOfflineDynamicBatchConfig = function () {
  const e = JSON.parse((0, r.getABPropConfigValue)("web_offline_dynamic_batch_config"));
  const t = parseFloat(e.multiplier);
  const n = e.version || "default";
  return {
    multiplier: Number.isNaN(t) ? 0.2 : t,
    version: n
  };
};
exports.isActiveRefreshEnabled = function () {
  return (0, r.getABPropConfigValue)("web_electron_active_reload");
};
exports.isLazyPullEnabled = function () {
  return (0, r.getABPropConfigValue)("web_lazy_pull");
};
exports.isNonBlockingResumeFromOpenTabEnabled = function () {
  return (0, r.getABPropConfigValue)("non_blocking_resume_from_open_tab_enabled") && (0, r.getABPropConfigValue)("non_blocking_resume_from_open_tab_signal_enabled");
};
exports.isOfflineDynamicBatchSizeEnabled = function () {
  return (0, r.getABPropConfigValue)("web_offline_dynamic_batch_size_enabled");
};
exports.isOfflinePriorityBucketEnabled = function () {
  return (0, r.getABPropConfigValue)("web_offline_notification_priority");
};
exports.isOfflineProgressToastbarEnabled = function () {
  return (0, r.getABPropConfigValue)("web_offline_progress_toastbar");
};
exports.isOptimizedMessagePostProcessingEnabled = function () {
  return (0, r.getABPropConfigValue)("web_resume_optimized_message_post_processing_enabled");
};
exports.isPreAckM2Enabled = function () {
  return (0, r.getABPropConfigValue)("web_pre_acks_m2_enabled");
};
exports.isResetStateAfterIBPreviewEnabled = function () {
  return (0, r.getABPropConfigValue)("web_reset_offline_batch_state");
};
var r = require("./287461.js");