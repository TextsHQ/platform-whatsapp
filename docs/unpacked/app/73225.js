var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterViewCountGating = exports.NewsletterCompanionGating = exports.NewsletterABPropConfig = undefined;
exports.getMaxMsgCountFromServer = function () {
  return (0, a.getABPropConfigValue)("channels_max_messages_batch_pull");
};
exports.getMaxSubscriberNumber = function () {
  return 5000;
};
exports.getNewsletterConsumerTos = function () {
  if ((0, c.isSMB)()) {
    return (0, a.getABPropConfigValue)("newsletter_tos_notice_id_smb_web");
  } else {
    return (0, a.getABPropConfigValue)("newsletter_tos_notice_id");
  }
};
exports.getNewsletterDeeplinkGating = function () {
  const e = h.cast((0, a.getABPropConfigValue)("channels_enabled"));
  if (e == null) {
    return y.Disabled;
  }
  if (!S()) {
    return y.Disabled;
  }
  switch (e) {
    case h.Disabled:
      return y.AvailableOnPhone;
    case h.Enabled:
      return y.Enabled;
    case h.NeedsUpgrade:
      return y.NeedsUpgrade;
  }
};
exports.getNewsletterDirectoryPageRefreshInterval = function () {
  return (0, a.getABPropConfigValue)("channels_directory_v2_cache_refresh_interval_ms");
};
exports.getNewsletterDirectoryPageSize = function () {
  return (0, a.getABPropConfigValue)("channels_directory_page_size");
};
exports.getNewsletterDirectorySearchDebounce = function () {
  return (0, a.getABPropConfigValue)("channels_directory_search_debounce_ms");
};
exports.getNewsletterDirectoryV2FilterTypes = function () {
  const e = (0, a.getABPropConfigValue)("channels_directory_v2_filter_types");
  return (0, s.getNewsletterDirectoryFilterTypesFromConfig)(e);
};
exports.getNewsletterProducerNux = function () {
  return (0, a.getABPropConfigValue)("newsletter_creation_nux_id");
};
exports.getNewsletterProducerTos = function () {
  if ((0, c.isSMB)()) {
    return (0, a.getABPropConfigValue)("newsletter_creation_tos_id_smb_web");
  } else {
    return (0, a.getABPropConfigValue)("newsletter_creation_tos_id");
  }
};
exports.getNewsletterSubscriberListCacheRefreshInSeconds = function () {
  return (0, a.getABPropConfigValue)("channels_followers_list_cache_refresh_seconds");
};
exports.getRecommendedNewslettersRefreshInterval = function () {
  return (0, a.getABPropConfigValue)("recommended_channels_background_refresh");
};
exports.isFilteringOutSubscribedNewslettersFromDirectoryListEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_filter_out_subscribed_in_directory_null_state");
};
exports.isLargeNumberFormatEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_large_number_format_enabled");
};
exports.isLargeNumberRoundingEnabled = function () {
  return (0, a.getABPropConfigValue)("large_number_format_uses_generic_plural");
};
exports.isNavigationToForwardedNewsletterMessageEnabled = function () {
  return (0, a.getABPropConfigValue)("channel_forward_to_chat_v2_message_navigation_enabled");
};
exports.isNewsletterAdminContextCardEnabled = function (e) {
  return v() && (e === o.NewsletterMembershipType.Owner || e === o.NewsletterMembershipType.Admin) && (0, a.getABPropConfigValue)("channels_admin_context_card_enabled");
};
exports.isNewsletterAdminMetadataFetchingEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channel_info_admin_metadata_fetching_enabled");
};
exports.isNewsletterBackwardsMessageEditingEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_edit_backwards_compatibility");
};
exports.isNewsletterChannelLinkPageEnabled = function (e) {
  return v() && (0, f.iAmAdminOrOwner)(e.newsletterMetadata) && (0, a.getABPropConfigValue)("channel_link_in_nav_bar_enabled");
};
exports.isNewsletterCreationEnabled = function () {
  if (!v()) {
    return false;
  }
  return (0, a.getABPropConfigValue)("channels_creation_enabled") === y.Enabled;
};
exports.isNewsletterCreationLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_creation_logging_enabled");
};
exports.isNewsletterDYILoggingEnabled = function (e) {
  return e === u.ReportType.Newsletters && (0, a.getABPropConfigValue)("channels_dyi_logging_enabled");
};
exports.isNewsletterDirectoryEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_directory_enabled") === h.Enabled;
};
exports.isNewsletterDirectoryLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_directory_logging_enabled");
};
exports.isNewsletterDirectoryPaginationEnabled = function () {
  return A() && (0, a.getABPropConfigValue)("channels_directory_pagination_enabled");
};
exports.isNewsletterDirectoryV2Enabled = A;
exports.isNewsletterDirectoryV2LoggingEnabled = function () {
  return A() && (0, a.getABPropConfigValue)("channels_directory_v2_logging_enabled");
};
exports.isNewsletterDiyEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_dyi_enabled");
};
exports.isNewsletterEnabled = v;
exports.isNewsletterEnabledOnPrimary = S;
exports.isNewsletterGeosuspendAdminAlertsEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_geosuspend_admin_alerts_enabled");
};
exports.isNewsletterGeosuspendAppealsEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_geosuspend_appeals_enabled");
};
exports.isNewsletterGeosuspendEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_geosuspend_enabled");
};
exports.isNewsletterHideNewsUrlPreviewEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_hide_news_url_preview");
};
exports.isNewsletterInboxFiltersEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_inbox_filters_web_enabled");
};
exports.isNewsletterInboxSearchDirectoryIntegrationEnabled = function () {
  return v() && b() && (0, a.getABPropConfigValue)("channels_inbox_directory_search_web_enabled");
};
exports.isNewsletterInboxSearchEnabled = b;
exports.isNewsletterInboxSearchLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("updates_tab_search_logging_enabled");
};
exports.isNewsletterLinkPreviewEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_hq_link_preview");
};
exports.isNewsletterLinkShareLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_share_link_logging_enabled");
};
exports.isNewsletterMediaAlbumUploadEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_send_album_enabled");
};
exports.isNewsletterMessageDeliveryUpdatesEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_restricted_updates_enabled");
};
exports.isNewsletterMessageEditingEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_message_edit_enabled");
};
exports.isNewsletterMessageForwardLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_forward_logging_v2_enabled");
};
exports.isNewsletterMessageForwardReceivingEnabled = function () {
  return (0, a.getABPropConfigValue)("channel_forward_to_chat_link_enabled");
};
exports.isNewsletterMessageForwardSendingEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channel_forward_to_chat_enabled");
};
exports.isNewsletterMessageLinkEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_message_link_enabled");
};
exports.isNewsletterMultiAdminEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_multi_admin_enabled");
};
exports.isNewsletterPTTLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_ptt_logging_enabled");
};
exports.isNewsletterPTTReceivingEnabled = C;
exports.isNewsletterPTTSendingEnabled = function () {
  return C() && (0, a.getABPropConfigValue)("channels_ptt_sender_enabled");
};
exports.isNewsletterPTTTranscriptionBlocked = function () {
  return (0, a.getABPropConfigValue)("channels_ptt_transcription_blocked");
};
exports.isNewsletterPollsCreationEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_poll_creation_enabled");
};
exports.isNewsletterPollsReceivingEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_poll_receive_enabled");
};
exports.isNewsletterPollsSingleOptionEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_poll_single_option_control_enable");
};
exports.isNewsletterReactionEnabled = T;
exports.isNewsletterReactionSenderListEnabled = function (e, t) {
  return T() && !t && (0, f.iAmAdminOrOwner)(e == null ? undefined : e.newsletterMetadata) && (0, a.getABPropConfigValue)("channel_reactions_sender_list_enabled");
};
exports.isNewsletterReactionSendingEnabled = function () {
  return T() && (0, a.getABPropConfigValue)("channel_reactions_sending_enabled");
};
exports.isNewsletterReactionSettingForNoneEnabled = function () {
  return T() && (0, a.getABPropConfigValue)("channel_reactions_settings_none_option_enabled");
};
exports.isNewsletterReactionSettingsEnabled = M;
exports.isNewsletterReparseEnabled = function () {
  return (0, a.getABPropConfigValue)("channel_web_reparse_enabled");
};
exports.isNewsletterReportingEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("newsletter_reporting_enabled");
};
exports.isNewsletterSendingNonBasicStickersEnabled = function () {
  return P() && (0, a.getABPropConfigValue)("channels_non_basic_stickers_enabled");
};
exports.isNewsletterStickerReceivingEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_sticker_receiving_enabled");
};
exports.isNewsletterStickerSendingEnabled = P;
exports.isNewsletterSubscriberListEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channel_follower_list_enabled");
};
exports.isNewsletterSuspendEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("newsletter_suspend_enabled");
};
exports.isNewsletterSuspensionAppealsEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_suspend_appeals_enabled");
};
exports.isNewsletterTSLEnabled = function () {
  return (0, a.getABPropConfigValue)("ts_navigation_channels_enabled");
};
exports.isNewsletterViewCountEnabled = function (e) {
  let t = false;
  if (e == null) {
    return false;
  }
  switch (e) {
    case o.NewsletterMembershipType.Owner:
    case o.NewsletterMembershipType.Admin:
      t = (0, a.getABPropConfigValue)("channel_view_counts_enabled") >= E.EnabledAdminsOnly;
      break;
    case o.NewsletterMembershipType.Subscriber:
      t = (0, a.getABPropConfigValue)("channel_view_counts_enabled") >= E.EnabledAdminsAndFollowers;
      break;
    case o.NewsletterMembershipType.Guest:
      t = (0, a.getABPropConfigValue)("channel_view_counts_enabled") === E.EnabledEveryone;
  }
  return v() && t;
};
exports.isNewsletterViewCountSendEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_send_view_receipt_enabled");
};
exports.isNewsletterViolatingMessageAppealsEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_violating_message_appeals_enabled");
};
exports.isProactiveGapFillingEnabled = function () {
  return (0, a.getABPropConfigValue)("channels_proactive_message_gap_handling_enabled");
};
exports.isRecommendedNewslettersEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_recommended_enabled") === h.Enabled;
};
exports.isRecommendedUnitV2Enabled = function () {
  return v() && (0, a.getABPropConfigValue)("channels_recommended_v2_ui_enabled");
};
exports.shouldHideProducerNewsletterDisclosure = function () {
  return false;
};
exports.shouldShowAllReactionsForNewsletter = function (e) {
  var t;
  return ((t = e.newsletterMetadata) === null || t === undefined ? undefined : t.reactionCodesSetting) === o.NewsletterReactionCodesSetting.All && M();
};
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = require("./927531.js");
var s = require("./937069.js");
var l = r(require("./555470.js"));
var u = require("./135001.js");
var c = require("./94602.js");
var d = require("./373070.js");
var p = require("./916330.js");
var f = require("./751460.js");
var _ = require("./233137.js");
var g = require("./918475.js");
var m = require("./459857.js");
const h = require("../vendor/76672.js")({
  Disabled: 0,
  NeedsUpgrade: 1,
  Enabled: 2
});
exports.NewsletterABPropConfig = h;
const y = require("../vendor/76672.js")({
  Disabled: 0,
  NeedsUpgrade: 1,
  Enabled: 2,
  AvailableOnPhone: 3
});
exports.NewsletterCompanionGating = y;
const E = require("../vendor/76672.js")({
  Disabled: 0,
  EnabledAdminsOnly: 1,
  EnabledAdminsAndFollowers: 2,
  EnabledEveryone: 3
});
exports.NewsletterViewCountGating = E;
new class {
  constructor() {
    this.isNewsletterCreationGroupMember = false;
  }
  init() {
    var e = this;
    return (0, i.default)(function* () {
      yield (0, l.default)();
      e.isNewsletterCreationGroupMember = yield e.isPartOfDogfoodingGroup("nl_crt_df_gid");
    })();
  }
  isPartOfDogfoodingGroup(e) {
    return (0, i.default)(function* () {
      const t = (0, a.getABPropConfigValue)(e);
      if (t == null || t === "" || typeof t != "string") {
        return false;
      }
      const n = yield (0, g.getParticipantTable)().get(`${t}@g.us`);
      return !!(n == null ? undefined : n.participants.includes((0, m.getMeUser)().toString()));
    })();
  }
}();
function S() {
  return (0, _.primaryFeatureEnabled)("newsletter");
}
function v() {
  return (0, a.getABPropConfigValue)("channels_enabled") === y.Enabled;
}
function T() {
  return v() && (0, a.getABPropConfigValue)("channel_reactions_enabled") && (0, p.isMsgTypeSupported)(d.MSG_TYPE.REACTION);
}
function M() {
  return T() && (0, a.getABPropConfigValue)("channel_reactions_settings_enabled");
}
function A() {
  return (0, a.getABPropConfigValue)("channels_directory_v2_enabled");
}
function b() {
  return (0, a.getABPropConfigValue)("updates_search_enabled");
}
function C() {
  return v() && (0, a.getABPropConfigValue)("channels_ptt_receiver_enabled");
}
function P() {
  return v() && (0, a.getABPropConfigValue)("channels_sticker_sending_enabled");
}