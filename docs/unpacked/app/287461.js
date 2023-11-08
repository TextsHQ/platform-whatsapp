Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getABPropConfigValue = function (e) {
  var t;
  const n = r.ABPropConfigs[e];
  if (n == null) {
    __LOG__(4, undefined, new Error())`[ABProps] config not defined, config name: ${e}.`;
  }
  const [a, o, s, l] = n;
  const u = s;
  if (i == null) {
    return u;
  }
  if ((t = i(e)) !== null && t !== undefined) {
    return t;
  } else {
    return u;
  }
};
exports.setGetABPropConfigValueImpl = function (e) {
  i = e;
};
exports.usedBeforeInitializationConfigs = undefined;
var r = require("./94728.js");
exports.usedBeforeInitializationConfigs = ["parent_group_view_enabled", "in_app_support_v2_number_prefixes", "web_2fa", "web_abprop_screen_lock_enabled", "web_abprop_core_wam_runtime", "web_offline_resume_qpl_enabled", "disable_auto_download", "direct_connection_business_numbers", "community_admin_promotion_one_time_prompt", "web_enable_profile_pic_thumb_db_caching", "web_crypto_library_enabled", "web_media_auto_download_enabled", "web_native_fetch_media_download", "web_image_max_edge", "web_store_quota_manager_enabled", "wds_radius_and_casing", "non_blocking_resume_from_open_tab_enabled", "community_announcement_improvement_m2", "column_serialization_perf_impact_test"];
let i = null;