Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debugDisableFeatureFlag = function (e) {
  n[e] = false;
};
exports.debugEnableFeatureFlag = function (e) {
  n[e] = true;
};
exports.isFeatureEnabled = function (e) {
  return n[e];
};
exports.overwriteDebugFeatures = function () {};
const n = {
  a11y_block: false,
  lid_debug: false,
  media_existence_check: false,
  web_voip_voice_call: false,
  web_voip_video_call: false,
  youtube_video_preview_without_blur: false,
  message_add_ons: false,
  reactions_filter_problematic_flags: true,
  skip_compliance_phone_check: false,
  debug_commands: false
};