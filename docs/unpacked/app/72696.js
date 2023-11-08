var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUICK_PAY_PRODUCT_TYPE_GATING = undefined;
exports.adManagementActionsDisplayingEnabled = function () {
  return b() && (0, a.getABPropConfigValue)("ctwa_manage_ads_tab_web_ad_actions_menu");
};
exports.adManagementEnabled = b;
exports.adManagementMetricsDisplayingEnabled = function () {
  return b() && (0, a.getABPropConfigValue)("ctwa_manage_ads_tab_web_ad_metrics");
};
exports.adsActionBannersEnabled = M;
exports.adsActionBannersEnabledOnStartup = undefined;
exports.adsActionBannersLoggingEnabled = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("wa_ctwa_action_banner_logging_enabled_web");
};
exports.adsActionManageAdsBannerEnabled = function () {
  return M() && (0, a.getABPropConfigValue)("in_app_comms_manage_ads_web_banner_campaign_enabled");
};
exports.bannedShopsEnabled = function () {
  return (0, a.getABPropConfigValue)("banned_shops_ux_enabled");
};
exports.billingEnabled = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("smb_billing_enabled");
};
exports.bizLinkedAccountsEnabled = function () {
  return (0, a.getABPropConfigValue)("web_abprop_business_profile_refresh_linked_accounts_killswitch");
};
exports.blockCatalogCreationECommerceComplianceIndia = function (e) {
  var t;
  return E(e == null ? undefined : e.id, () => (0, a.getABPropConfigValue)("web_abprop_block_catalog_creation_ecommerce_compliance_india"), () => _.ServerProps.blockCatalogCreationEcommerceComplianceIndia) && (e == null || (t = e.profileOptions) === null || t === undefined ? undefined : t.commerceExperience) === s.COMMERCE_EXPERIENCE_TYPES.NONE;
};
exports.btmThreadsLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("btm_threads_logging_enabled");
};
exports.canAppealCollections = function () {
  return (0, a.getABPropConfigValue)("smb_collections_appeal_flow_enabled");
};
exports.canDisplayLabel = function () {
  return (0, p.isSMB)();
};
exports.canEditLabelAssociation = function () {
  return (0, p.isSMB)();
};
exports.canManageCollections = function () {
  return (0, a.getABPropConfigValue)("smb_collections_enabled");
};
exports.canSeeBizProfileV3 = function () {
  return (0, a.getABPropConfigValue)("business_profile_refresh_m1_enabled");
};
exports.canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney = function (e) {
  return E(e, () => (0, a.getABPropConfigValue)("smb_ecommerce_compliance_india_m4_5"), () => _.ServerProps.smbEcommerceComplianceIndiaM4_5);
};
exports.canSeeECommerceComplianceIndiaHardEnforcementBusinessJourney = function (e) {
  return E(e, () => (0, a.getABPropConfigValue)("smb_ecommerce_compliance_india_m4"), () => _.ServerProps.smbEcommerceComplianceIndiaM4);
};
exports.canSeeECommerceComplianceIndiaSoftEnforcement = function (e) {
  let t;
  if (e != null) {
    var n;
    t = e.isLid() ? (n = (0, o.getPhoneNumber)(e)) === null || n === undefined ? undefined : n.user : e.user;
    if (e.isLid() && t == null) {
      return true;
    }
  }
  return y(t);
};
exports.canSendQuickReply = h;
exports.canSendQuickReplyInChat = function (e) {
  var t;
  return !e.isNewsletter && h() && !((t = e.contact.businessProfile) === null || t === undefined ? undefined : t.isBizBot3p);
};
exports.canViewBizLinkedAccounts = function () {
  return (0, a.getABPropConfigValue)("web_abprop_business_profile_refresh_linked_account_enabled");
};
exports.carouselsEnabled = function () {
  return (0, a.getABPropConfigValue)("carousel_message_client_enabled");
};
exports.catalogCategoriesEnabled = function () {
  return (0, a.getABPropConfigValue)("catalog_categories_enabled");
};
exports.chatAssignmentEnabled = T;
exports.chatAssignmentMaxNuxImpressions = function () {
  if (!T()) {
    return 0;
  }
  return (0, a.getABPropConfigValue)("smb_md_agent_chat_assignment_nux_impressions");
};
exports.chatAssignmentNewChatlistLabelEnabled = function () {
  return (0, a.getABPropConfigValue)("smb_md_agent_chat_assignment_chat_list_new_label_enabled");
};
exports.chatAssignmentNotificationsEnabled = function () {
  return (0, a.getABPropConfigValue)("smb_md_agent_chat_assignment_notifications_enabled");
};
exports.chatAssignmentSystemMessagesEnabled = function () {
  return T() && (0, a.getABPropConfigValue)("smb_md_agent_chat_assignment_system_messages_enabled");
};
exports.commerceFeaturesDisabledBySanctions = function () {
  return (0, a.getABPropConfigValue)("commerce_sanctioned");
};
exports.commerceThreadsLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("native_commerce_threads_logging_enabled");
};
exports.countryGatingEnabled = function () {
  return (0, a.getABPropConfigValue)("country_client_gating_enabled");
};
exports.coverPhotoPrivacyMessagingEnabled = function () {
  return (0, a.getABPropConfigValue)("smb_temp_cover_photo_privacy_messaging");
};
exports.getBillingPremiumAccessConfig = function () {
  if (!(0, p.isSMB)()) {
    return "{}";
  }
  return (0, a.getABPropConfigValue)("smb_billing_premium_access_config");
};
exports.getOrdersExpansionAllowedCurrencies = exports.getOrdersExpansionAllowedCountries = exports.getConsumerOrdersExpansionAllowedCountries = undefined;
exports.graphQLForCatalogM1Enabled = function () {
  return (0, a.getABPropConfigValue)("graphql_privacy_imp_m1");
};
exports.graphQLForCollectionM2Enabled = function () {
  return (0, a.getABPropConfigValue)("graphql_privacy_imp_m2");
};
exports.hideUnsupportedCurrency = function () {
  return (0, a.getABPropConfigValue)("smb_hide_unsupported_currency_price");
};
exports.inOrderMessagesEphemeralExceptionEnabled = undefined;
exports.interactiveNativeFlowMessagesEnabled = function () {
  return !(0, a.getABPropConfigValue)("interactive_message_native_flow_killswitch");
};
exports.interactiveNativeFlowResponseMessagesEnabled = function () {
  return !(0, a.getABPropConfigValue)("interactive_response_message_native_flow_killswitch");
};
exports.interactiveResponseMessagesEnabled = function () {
  return !(0, a.getABPropConfigValue)("interactive_response_message_killswitch");
};
exports.isAdsAttributionEnabled = function () {
  return (0, a.getABPropConfigValue)("wa_ctwa_web_thread_ad_attribution_enabled");
};
exports.isBizCoverPhotoEditEnabled = function () {
  return (0, a.getABPropConfigValue)("web_abprop_business_profile_refresh_edit_cover_photo_enabled");
};
exports.isBizCoverPhotoViewEnabled = function () {
  return (0, a.getABPropConfigValue)("web_abprop_business_profile_refresh_cover_photo_view_enabled");
};
exports.isBrazilToBrazilOrder = D;
exports.isBuyerOrderRequestVariantEnabled = function () {
  return N() && (0, a.getABPropConfigValue)("buyer_initiated_order_request_variant_enabled");
};
exports.isBuyerOrderRevampEnabled = N;
exports.isCallingToPrimarySMBLimitEnabled = function () {
  return (0, a.getABPropConfigValue)("call_only_primary_device_limit_exceeded");
};
exports.isCollectionReorderingEnabled = function () {
  return (0, a.getABPropConfigValue)("smb_catalog_collections_reordering_enabled");
};
exports.isConsumerTransparencyEnabled = function () {
  return (0, a.getABPropConfigValue)("ctwa_consumer_data_sharing_consent");
};
exports.isCustomURLViaBizProfileEnabled = function () {
  return (0, a.getABPropConfigValue)("smb_biz_profile_custom_url");
};
exports.isInteractiveCtaMessageEnabled = function (e, t) {
  if (t !== "smb_promo" && e !== true) {
    return false;
  }
  return (0, a.getABPropConfigValue)("web_premium_messages_interactivity_rendering_enabled");
};
exports.isMessageWithLinkNfmEnabled = function () {
  return (0, a.getABPropConfigValue)("payments_link_to_lite_consumer_enabled");
};
exports.isMultiDeviceAgentsLoggingEnabled = function () {
  return v() && (0, a.getABPropConfigValue)("smb_multi_device_agents_logging_V2_enabled");
};
exports.isMultiDeviceMessageAttributionEnabled = v;
exports.isOrderContentOptimizationEnabled = R;
exports.isOrderDetailsQuickPayEnabled = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : S.NONE;
  try {
    const {
      allowed_product_type: t
    } = JSON.parse((0, a.getABPropConfigValue)("order_details_quick_pay"));
    if (t && t !== S.NONE) {
      return t === S.ANY || t === e;
    }
  } catch (e) {
    __LOG__(3)`isOrderDetailsQuickPayEnabled failed to parse config json: error ${e}`;
  }
  return false;
};
exports.isOrderExpansionBannerEnabled = function () {
  var e;
  var t;
  return ((e = (t = O()) === null || t === undefined ? undefined : t.length) !== null && e !== undefined ? e : 0) > 0 && (0, a.getABPropConfigValue)("payments_merchant_global_orders_value_props_banner_enabled");
};
exports.isOrderStatusM1Enabled = function () {
  return (0, a.getABPropConfigValue)("order_statuses_revamp_m1_enabled");
};
exports.isPSForCatalogViewEnabled = function () {
  return (0, a.getABPropConfigValue)("web_enable_biz_catalog_view_ps_logging");
};
exports.isPremiumMessagesClickLoggingEnabled = function () {
  return (0, a.getABPropConfigValue)("smb_premium_messages_click_logging_enabled");
};
exports.isPremiumMessagesUrlCtaDialogEnabled = function () {
  return (0, a.getABPropConfigValue)("smb_premium_messages_url_cta_alert_dialog_enabled");
};
exports.isQuantityControlsFeatureEnabled = function () {
  return (0, a.getABPropConfigValue)("web_quantity_controls_enabled");
};
exports.isSMBDataSharingOrderCopyOptimizationEnabled = function () {
  return (0, p.isSMB)() && R();
};
exports.isSMBEnhancedLoggingEnabled = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("business_tool_enhanced_logging");
};
exports.isSMBLabelsDataSharingEnabledForChats = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("smb_labels_ctwa_data_sharing");
};
exports.isSMBLabelsDataSharingEnabledForMessages = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("smb_message_labels_ctwa_data_sharing");
};
exports.isSMBMMSpamReportEnabled = function () {
  return (0, a.getABPropConfigValue)("smb_premium_messages_spam_report_enabled");
};
exports.isSellerOrderRevampEnabled = function () {
  return (0, a.getABPropConfigValue)("seller_orders_management_revamp");
};
exports.isSmbOrangeEnabled = function () {
  if (!(0, p.isSMB)()) {
    return false;
  }
  return (0, a.getABPropConfigValue)("smb_orange_enabled");
};
exports.isUtmTrackingEnabled = function () {
  return (0, a.getABPropConfigValue)("utm_tracking_enabled");
};
exports.isWidInPaymentsCountry = function (e) {
  var t;
  if (!e) {
    return false;
  }
  const n = e.isLid() ? (t = (0, o.getPhoneNumber)(e)) === null || t === undefined ? undefined : t.user : e.user;
  if (n == null) {
    return false;
  }
  return y(n) || function (e) {
    return (0, d.getCountryShortcodeByPhone)(e || "") === "BR";
  }(n);
};
exports.labelsEditingEnabled = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("web_labels_editing_enabled");
};
exports.messageQuickReplyEnabled = function () {
  return (0, a.getABPropConfigValue)("message_quick_reply");
};
exports.nativeFlowMessagesEnabled = function () {
  return (0, a.getABPropConfigValue)("nfm_rendering_enabled");
};
exports.orderDetailsCustomItemEnabled = function () {
  return (0, a.getABPropConfigValue)("order_details_custom_item_enabled");
};
exports.orderDetailsFromCartEnabled = function () {
  return (0, a.getABPropConfigValue)("order_details_from_cart_enabled");
};
exports.orderDetailsFromCatalogEnabled = function () {
  return (0, a.getABPropConfigValue)("order_details_from_catalog_enabled");
};
exports.orderDetailsTotalMaxValue = function (e) {
  if (D(e)) {
    return 5000;
  } else {
    return (0, a.getABPropConfigValue)("order_details_total_maximum_value");
  }
};
exports.orderDetailsTotalOrderMinimumValue = function () {
  return (0, a.getABPropConfigValue)("order_details_total_order_minimum_value");
};
exports.orderManagementEnabled = function () {
  return (0, a.getABPropConfigValue)("order_management_enabled");
};
exports.qpCampaignsEnabled = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("qp_campaign_client_enabled");
};
exports.qpSDKProcessingEnabled = function () {
  return (0, a.getABPropConfigValue)("quick_promotion_banner_client_enabled");
};
exports.quickRepliesManagementEnabled = function () {
  return (0, p.isSMB)() && (0, f.primaryFeatureEnabled)("companion_biz_quick_reply_sync_support") && (0, a.getABPropConfigValue)("web_quick_reply_authoring");
};
exports.shopsInteractiveMessageEnabled = function () {
  return (0, a.getABPropConfigValue)("web_shop_storefront_message");
};
exports.shouldFetchLinkedAccounts = undefined;
exports.shouldReorderChatOnAssignment = function (e) {
  if (e) {
    return (0, a.getABPropConfigValue)("smb_md_agent_chat_assignment_chats_reorder_on_chat_unassignment_enabled");
  }
  return (0, a.getABPropConfigValue)("smb_md_agent_chat_assignment_chats_reorder_on_chat_assignment_enabled");
};
exports.shouldShowManageAdsDropdown = exports.shouldShowAdCreationIcon = exports.shouldShowAdCreationDropdown = undefined;
exports.shouldShowSMBDataSharingSettings = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("ctwa_smb_data_sharing_settings_killswitch") === false;
};
exports.smartFiltersEnabled = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("smart_filters_enabled") || !(0, p.isSMB)() && (0, a.getABPropConfigValue)("smart_filters_enabled_consumer");
};
exports.smbBizProfileLoggingEnabled = function () {
  if ((0, p.isSMB)()) {
    return (0, a.getABPropConfigValue)("smb_biz_profile_logging_enabled");
  }
  return false;
};
exports.smbClickToChatLoggingEnabled = function () {
  if ((0, p.isSMB)()) {
    return (0, a.getABPropConfigValue)("smb_click_to_chat_logging_enabled");
  }
  return false;
};
exports.smbDataSharingConsentEnabled = function () {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("ctwa_smb_data_sharing_consent");
};
exports.smbDataSharingOptInCoolOffSeconds = function () {
  return (0, a.getABPropConfigValue)("ctwa_smb_data_sharing_opt_in_cool_off_period");
};
exports.subscriptionFetchEnabled = function () {
  if (!(0, p.isSMB)()) {
    return false;
  }
  return (0, a.getABPropConfigValue)("smb_dcp_enabled");
};
exports.tos3GatingEnabled = function () {
  if (!(0, p.isSMB)()) {
    return (0, a.getABPropConfigValue)("tos_3_client_gating_enabled");
  }
  return false;
};
exports.tosFetchEnabled = function () {
  if (!(0, p.isSMB)()) {
    return (0, a.getABPropConfigValue)("tos_client_state_fetch_enabled");
  }
  return false;
};
exports.tosFetchIteration = function () {
  return (0, a.getABPropConfigValue)("tos_client_state_fetch_iteration");
};
exports.utmTrackingExpirationInHours = function () {
  return (0, a.getABPropConfigValue)("utm_tracking_expiration_hours");
};
var i = r(require("../vendor/288306.js"));
var a = require("./287461.js");
var o = require("./12643.js");
var s = require("./817649.js");
var l = require("./650201.js");
var u = require("./676594.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./27578.js"));
var d = require("./486392.js");
var p = require("./94602.js");
var f = require("./233137.js");
var _ = require("./937001.js");
var g = require("./459857.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function h() {
  return (0, p.isSMB)();
}
function y(e) {
  return (0, d.getCountryShortcodeByPhone)(e || "") === u.COMPLIANCE_INFO_CODES.INDIA || (0, l.isFeatureEnabled)("skip_compliance_phone_check");
}
function E(e) {
  let t;
  let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : () => false;
  var r;
  if (e != null && (t = e.isLid() ? (r = (0, o.getPhoneNumber)(e)) === null || r === undefined ? undefined : r.user : e.user, e.isLid() && t == null)) {
    return true;
  }
  return !!y(t) && n();
}
const S = require("../vendor/76672.js")({
  DIGITAL_GOODS: "digital-goods",
  PHYSICAL_GOODS: "physical-goods",
  ANY: "any",
  NONE: "none"
});
function v() {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("smb_multi_device_message_attribution_enabled");
}
function T() {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("smb_md_agent_chat_assignment_enabled");
}
function M() {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("wa_ctwa_ads_action_banner_enabled_web");
}
exports.QUICK_PAY_PRODUCT_TYPE_GATING = S;
const A = p.isSMB;
exports.adsActionBannersEnabledOnStartup = A;
exports.shouldShowAdCreationIcon = () => (0, p.isSMB)() && (0, a.getABPropConfigValue)("wa_ctwa_web_entrypoint_home_header_enabled");
exports.shouldShowAdCreationDropdown = () => (0, p.isSMB)() && (0, a.getABPropConfigValue)("wa_ctwa_web_entrypoint_home_header_dropdown_enabled");
exports.shouldShowManageAdsDropdown = e => (0, p.isSMB)() && (e == null ? undefined : e.hasCreatedAd) === true && (0, a.getABPropConfigValue)("wa_ctwa_web_entrypoint_manage_ads_home_header_dropdown_enabled");
function b() {
  return (0, p.isSMB)() && (0, a.getABPropConfigValue)("ctwa_manage_ads_tab_web");
}
exports.shouldFetchLinkedAccounts = () => (0, p.isSMB)() && (0, a.getABPropConfigValue)("wa_ctwa_web_fetch_linked_accounts_enabled");
const C = (0, i.default)(e => {
  var t;
  if ((t = e == null ? undefined : e.split(",")) !== null && t !== undefined) {
    return t;
  } else {
    return [];
  }
});
const P = () => {
  const e = (0, a.getABPropConfigValue)("orders_expansion_receiver_countries_allowed");
  if (e == null ? undefined : e.length) {
    return C(e);
  } else {
    return null;
  }
};
exports.getConsumerOrdersExpansionAllowedCountries = P;
const O = () => (0, p.isSMB)() ? P() : null;
exports.getOrdersExpansionAllowedCountries = O;
const I = (0, i.default)((e, t) => {
  let n = [];
  if (t.length === 0) {
    return n;
  }
  const r = (0, d.getCountryShortcodeByPhone)(e);
  const i = (0, d.getCountryShortcodeByPhone)((0, g.getMeUser)().user);
  n = t.filter(e => e === r || e === i).map(e => c.currencyForCountryShortcode(e));
  return Array.from(new Set(n).values());
});
exports.getOrdersExpansionAllowedCurrencies = e => {
  var t;
  return I(e, (t = O()) !== null && t !== undefined ? t : []);
};
function R() {
  return (0, a.getABPropConfigValue)("payments_br_content_optimization_variant") !== 0;
}
function N() {
  return (0, a.getABPropConfigValue)("row_buyer_order_revamp_m0_enabled");
}
function D(e) {
  const t = (0, g.getMeUser)();
  const n = (0, d.getCountryShortcodeByPhone)(t.user);
  const r = (0, d.getCountryShortcodeByPhone)(e.contact.id.user);
  return n === "BR" && r === "BR";
}
exports.inOrderMessagesEphemeralExceptionEnabled = () => (0, a.getABPropConfigValue)("order_messages_ephemeral_exception_enabled");