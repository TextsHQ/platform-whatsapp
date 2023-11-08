Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NuxSyncKey = exports.NuxKeyTypes = exports.NUX = exports.CoolOffPeriodKeys = undefined;
exports.asCoolOffNuxType = function (e) {
  return `${e}_cool_off`;
};
exports.asViewCountNuxType = function (e) {
  return `${e}_view_count`;
};
exports.getChatAutoMutedNuxKey = a;
exports.getCommunityAdminPromotionNuxKey = i;
exports.getMembershipApprovalRequestsBannerNuxKey = function (e) {
  return `membership_approval_requests_banner_${e}`;
};
exports.getNewsletterAlertsBannerNuxKey = function (e) {
  return `newsletter_alerts_${e}`;
};
exports.getNuxSyncKey = function (e) {
  switch (e) {
    case r.EPHEMERAL:
      return o.EPHEMERAL;
    case r.EPHEMERAL_VIEW_ONCE:
      return o.EPHEMERAL_VIEW_ONCE;
    case r.EPHEMERAL_VIEW_ONCE_RECEIVER:
      return o.EPHEMERAL_VIEW_ONCE_RECEIVER;
    case r.STATUS_QUICK_REPLIES:
      return o.STATUS_QUICK_REPLIES;
    case r.COMMUNITY:
      return o.COMMUNITY;
    case r.COMMUNITY_HOME:
      return o.COMMUNITY_HOME;
    case r.KEEP_IN_CHAT:
      return o.KEEP_IN_CHAT;
    case r.KEEP_IN_CHAT_SYSTEM_MESSAGE:
      return o.KEEP_IN_CHAT_SYSTEM_MESSAGE;
    case r.FORWARD_MEDIA_WITH_CAPTION:
      return o.FORWARD_MEDIA_WITH_CAPTION;
    case r.MESSAGE_EDIT:
      return o.MESSAGE_EDIT;
    default:
      if (e.includes(i("")) || e.includes(a(""))) {
        return e;
      } else {
        return null;
      }
  }
};
exports.getSubgroupSuggestionsBannerNuxKey = function (e) {
  return `subgroup_suggestions_banner_${e}`;
};
const r = {
  SAFARI_LIMITED_SUPPORT: "safari_limited_support",
  SENDER_REVOKE_LEGAL_DISCLAIMER_NUX: "revoke_legal_disclaimer_nux",
  SENDER_REVOKE_LEGAL_DISCLAIMER_NUX_NEW: "sender_revoke_legal_disclaimer_nux",
  ADMIN_REVOKE_LEGAL_DISCLAIMER_NUX: "admin_revoke_legal_disclaimer_nux",
  EPHEMERAL: "ephemeral",
  EPHEMERAL_VIEW_ONCE: "ephemeral_view_once",
  EPHEMERAL_VIEW_ONCE_RECEIVER: "ephemeral_view_once_receiver",
  COMMUNITY: "community",
  COMMUNITY_HOME: "community_home",
  STATUS_QUICK_REPLIES: "status_quick_replies",
  KEEP_IN_CHAT: "keep_in_chat",
  CHAT_ASSIGNMENT: "chat_assignment",
  TOOLTIP_AD_CREATION: "tooltip_ad_creation",
  DESKTOP_UPSELL: "desktop_upsell",
  KEEP_IN_CHAT_SYSTEM_MESSAGE: "keep_in_chat_system_message",
  FORWARD_MEDIA_WITH_CAPTION: "forward_media_with_caption",
  MESSAGE_EDIT: "message_edit",
  BOT_INVOKE_UPSELL: "bot_invoke_upsell",
  ORDER_REQUEST_EDUCATION: "order_request_education"
};
function i(e) {
  return `community_admin_promote_${e}`;
}
function a(e) {
  return `chat_auto_muted_${e}`;
}
exports.NUX = r;
const o = require("../vendor/76672.js")({
  EPHEMERAL: "ephemeral",
  EPHEMERAL_VIEW_ONCE: "ephemeral_view_once",
  EPHEMERAL_VIEW_ONCE_RECEIVER: "ephemeral_view_once_receiver",
  ARCHIVE: "archive",
  STATUS_QUICK_REPLIES: "status_quick_replies",
  COMMUNITY: "community",
  COMMUNITY_HOME: "community_home",
  KEEP_IN_CHAT: "keep_in_chat",
  KEEP_IN_CHAT_SYSTEM_MESSAGE: "keep_in_chat_system_message",
  FORWARD_MEDIA_WITH_CAPTION: "forward_media_with_caption",
  MESSAGE_EDIT: "message_edit"
});
exports.NuxSyncKey = o;
exports.NuxKeyTypes = {
  COOL_OFF_NUX: {
    INCOMPLETE_BUSINESS_PROFILE_BANNER: "incomplete_business_profile_banner",
    PRODUCT_CATALOG_BANNER: "product_catalog_banner",
    COLLECTIONS: "collections_banner",
    CART_INTERSTITIAL: "cart_interstitial",
    CTWA_SUGGESTION: "ctwa_suggestion",
    ORDER_EXPANSION: "order_expansion"
  },
  VIEW_COUNT_NUX: {
    SAFARI_LIMITED_SUPPORT: "safari_limited_support",
    SENDER_REVOKE_LEGAL_DISCLAIMER_NUX: "revoke_legal_disclaimer_nux",
    ADMIN_REVOKE_LEGAL_DISCLAIMER_NUX: "admin_revoke_legal_disclaimer_nux",
    EPHEMERAL: "ephemeral",
    EPHEMERAL_VIEW_ONCE: "ephemeral_view_once",
    EPHEMERAL_VIEW_ONCE_RECEIVER: "ephemeral_view_once_receiver",
    COMMUNITY: "community",
    COMMUNITY_HOME: "community_home",
    KEEP_IN_CHAT: "keep_in_chat",
    CHAT_ASSIGNMENT: "chat_assignment",
    TOOLTIP_AD_CREATION: "tooltip_ad_creation",
    DESKTOP_UPSELL: "desktop_upsell",
    KEEP_IN_CHAT_SYSTEM_MESSAGE: "keep_in_chat_system_message",
    FORWARD_MEDIA_WITH_CAPTION: "forward_media_with_caption",
    MESSAGE_EDIT: "message_edit",
    ORDER_REQUEST_EDUCATION: "order_request_education"
  }
};
exports.CoolOffPeriodKeys = {
  DEFAULT: "default_cool_off_banners_key",
  CATALOG: "catalog_banners_key",
  CTWA_SUGGESTION: "ctwa_suggestion_banners_key",
  ORDER_EXPANSION: "order_expansion_banner_key"
};