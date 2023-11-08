var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accidentalDeleteMessageEnabled = function () {
  return (0, i.getABPropConfigValue)("web_accidental_delete_for_me") || false;
};
exports.archiveV2Supported = function () {
  return (0, i.getABPropConfigValue)("sync_archive_v2_setting");
};
exports.bonsaiReceiverEnabled = function () {
  return (0, i.getABPropConfigValue)("bonsai_receiver_enabled");
};
exports.cagReactionsReceive = function () {
  return (0, i.getABPropConfigValue)("cag_reactions_receive");
};
exports.cagReactionsSend = function (e) {
  if (e >= (0, i.getABPropConfigValue)("pnh_cag_disable_reactions_group_size")) {
    return false;
  }
  if ((0, s.isSMB)()) {
    return (0, i.getABPropConfigValue)("cag_reactions_send") && (0, i.getABPropConfigValue)("parent_group_view_enabled_for_smb_on_web");
  }
  return (0, i.getABPropConfigValue)("cag_reactions_send");
};
exports.documentWithCaptionsSendEnabled = function () {
  return (0, i.getABPropConfigValue)("documents_with_captions_send");
};
exports.experimentalEmojiAPIEnabled = function () {
  return (0, i.getABPropConfigValue)("web_abprop_emoji_experimental_api");
};
exports.fourReactionsInBubbleEnabled = function () {
  return (0, i.getABPropConfigValue)("four_reactions_in_bubble_enabled");
};
exports.futureproofReparsingNonAddOnsEnabled = function () {
  return (0, i.getABPropConfigValue)("web_fp_reparsing_for_non_add_ons");
};
exports.getGraphqlLocaleRemapping = function () {
  return (0, i.getABPropConfigValue)("graphql_locale_remapping");
};
exports.getGroupSizeLimit = function (e) {
  let t;
  t = e === o.GroupType.LINKED_ANNOUNCEMENT_GROUP ? (0, i.getABPropConfigValue)("community_announcement_group_size_limit") : (0, i.getABPropConfigValue)("group_size_limit") - 1;
  if (t == null || t <= 0 || Number.isNaN(t)) {
    t = c.ServerProps.maxParticipants;
  }
  return t;
};
exports.groupProfileEditorEnabled = function () {
  return (0, i.getABPropConfigValue)("web_group_profile_editor");
};
exports.isAdminHfmToggleEnabled = function () {
  var e;
  return (e = (0, i.getABPropConfigValue)("admin_hfm_toggle")) !== null && e !== undefined && e;
};
exports.isAutoMuteConfirmationDialogEnabled = function () {
  return (0, i.getABPropConfigValue)("web_auto_mute_256_groups_confirmation");
};
exports.isBlueEducationEnabled = function () {
  return (0, i.getABPropConfigValue)("blue_education_enabled");
};
exports.isBlueEnabled = function () {
  return (0, i.getABPropConfigValue)("blue_enabled");
};
exports.isBlueLockingEnabled = function () {
  if (!(0, s.isSMB)()) {
    return false;
  }
  return (0, i.getABPropConfigValue)("blue_profile_locked_ui_enabled");
};
exports.isBlueP0LoggingEnabled = function () {
  return (0, i.getABPropConfigValue)("blue_client_p0_logging_enabled");
};
exports.isBlueStringsEnabled = function () {
  return (0, i.getABPropConfigValue)("blue_strings_enabled");
};
exports.isDefaultDisappearingMessagesEnabled = function () {
  return (0, u.primaryFeatureEnabled)("ddm_settings") && (0, i.getABPropConfigValue)("web_privacy_settings_v2");
};
exports.isDropLastNameEnabled = function () {
  var e;
  return (e = (0, i.getABPropConfigValue)("drop_last_name")) !== null && e !== undefined && e;
};
exports.isFavoriteStickersEnabled = function () {
  return (0, u.primaryFeatureEnabled)("favorite_sticker");
};
exports.isGroupSuspendV2Enabled = function () {
  return (0, i.getABPropConfigValue)("group_suspend_v2_enabled");
};
exports.isHighQualityVideoThumbnailsEnabled = function () {
  const {
    UA: e
  } = require("./368170.js");
  const t = (0, l.getModernizr)();
  if (e.isGecko && !(t == null ? undefined : t.exiforientation)) {
    return false;
  }
  return true;
};
exports.isInAppSupportEnabled = function () {
  if (!(0, i.getABPropConfigValue)("in_app_support_v2_enabled")) {
    return false;
  }
  const e = (0, i.getABPropConfigValue)("in_app_support_v2_locale_langs");
  if (e === "") {
    return true;
  }
  const t = new Set(e.split(","));
  const r = (0, a.default)(require("./932325.js"));
  return t.has(r.getLocale());
};
exports.isPrivacyNarrativeV1Enabled = function () {
  return !(0, s.isSMB)();
};
exports.isRambutanEnabled = function () {
  return (0, s.isSMB)() && (0, i.getABPropConfigValue)("smb_rambutan_enabled");
};
exports.isRecentStickersMDEnabled = function () {
  return (0, i.getABPropConfigValue)("recent_sticker_rollout_phase") >= 3 && (0, u.primaryFeatureEnabled)("recent_sticker");
};
exports.isStickerRmrSyncEnabled = function () {
  return (0, i.getABPropConfigValue)("recent_sticker_rollout_phase") >= 4 || (0, i.getABPropConfigValue)("favorite_sticker_rmr_sync_enabled");
};
exports.isViewOnceSunsetEnabled = function () {
  return (0, u.primaryFeatureEnabled)("vo_sp_receiver") && (0, i.getABPropConfigValue)("view_once_sp_receiver");
};
exports.mediaEditorBlurToolEnabled = function () {
  return (0, i.getABPropConfigValue)("web_media_editor_blur_tool");
};
exports.mediaLinksDocsFilteringEnabled = function () {
  return (0, i.getABPropConfigValue)("web_abprop_media_links_docs_search");
};
exports.messageCustomAriaLabelEnabled = function () {
  return (0, i.getABPropConfigValue)("web_message_custom_aria_label");
};
exports.messageLevelReportingEnabled = function () {
  return (0, i.getABPropConfigValue)("message_level_reporting");
};
exports.messageListA11yRedesignEnabled = function () {
  return (0, i.getABPropConfigValue)("web_message_list_a11y_redesign");
};
exports.messagePluginFrontendRegistrationEnabled = function () {
  return (0, i.getABPropConfigValue)("web_message_plugin_frontend_registration_enabled");
};
exports.multiSkinToneEmojiPickerEnabled = function () {
  return (0, i.getABPropConfigValue)("web_multi_skin_toned_emoji_picker") || false;
};
exports.newStatusReplyInputEnabled = function () {
  return (0, i.getABPropConfigValue)("web_new_status_reply_input");
};
exports.paymentBackgroundEnabled = function () {
  if (c.ServerProps.webPaymentBackgroundEnabled) {
    return true;
  }
  return false;
};
exports.pinChatSyncEnabled = function () {
  if (c.ServerProps.syncdPinChatEnabled) {
    return !!((0, s.getMobilePlatform)() !== s.PLATFORMS.ANDROID && (0, s.getMobilePlatform)() !== s.PLATFORMS.SMBA || (0, d.getPrimaryAllowsAllMutations)());
  }
  return false;
};
exports.pnhCagBlockLidInLimbo = function () {
  return (0, i.getABPropConfigValue)("pnh_cag_block_lid_in_limbo");
};
exports.pnhCagShowMaskedMembersEnabled = function () {
  return (0, i.getABPropConfigValue)("pnh_cag_show_masked_members");
};
exports.prekeyFetchForMessageResendEnabled = function () {
  return (0, i.getABPropConfigValue)("prekey_fetch_iq_for_missing_devices_enabled");
};
exports.queryVerifiedNameWhenMsgDiffers = function () {
  return (0, i.getABPropConfigValue)("query_verified_name_when_msg_differs");
};
exports.screenLockFeatureSupported = function () {
  return (0, i.getABPropConfigValue)("web_abprop_screen_lock_enabled");
};
exports.web2FAEnabled = function () {
  return (0, i.getABPropConfigValue)("web_2fa");
};
exports.webMediaAutoDownloadEnabled = function () {
  return !(0, i.getABPropConfigValue)("disable_auto_download");
};
var i = require("./287461.js");
var a = r(require("./97359.js"));
var o = require("./862159.js");
var s = require("./94602.js");
var l = require("./223713.js");
var u = require("./233137.js");
var c = require("./937001.js");
var d = require("./960523.js");