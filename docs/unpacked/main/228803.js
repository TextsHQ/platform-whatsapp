Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  switch (e) {
    case "non_verified_transition":
      return (0, a.getNonVerifiedTransitionFaqUrl)();
    case "unverified_transition":
      return (0, a.getUnverifiedTransitionFaqUrl)();
    case "verified_transition":
      return (0, a.getE2EEnterpriseFaqUrl)();
    case "verified_low_unknown":
      return (0, a.getVerifiedLowUnknownFaqUrl)();
    case "verified_high":
      return (0, a.getVerifiedHighFaqUrl)();
    case "biz_intro_top":
    case "biz_intro_bottom":
    case "biz_two_tier_migration_bottom":
    case "biz_name_change":
    case "biz_verified_transition_top_to_bottom":
    case "verified_initial_unknown":
    case "verified_initial_low":
    case "verified_initial_high":
    case "verified_transition_any_to_none":
    case "verified_transition_any_to_high":
    case "verified_transition_high_to_low":
    case "verified_transition_high_to_unknown":
    case "verified_transition_unknown_to_low":
    case "verified_transition_low_to_unknown":
    case "verified_transition_none_to_low":
    case "verified_transition_none_to_unknown":
      return (0, a.getBusinessFaqUrl)();
    case "blue_msg_bsp_fb_to_bsp_premise":
    case "blue_msg_bsp_fb_to_self_fb":
    case "blue_msg_bsp_fb_to_self_premise":
    case "blue_msg_bsp_fb_unverified":
    case "blue_msg_bsp_fb_unverified_to_bsp_premise_verified":
    case "blue_msg_bsp_fb_unverified_to_self_fb_verified":
    case "blue_msg_bsp_fb_unverified_to_self_premise_verified":
    case "blue_msg_bsp_fb_verified":
    case "blue_msg_bsp_fb_verified_to_bsp_premise_unverified":
    case "blue_msg_bsp_fb_verified_to_self_fb_unverified":
    case "blue_msg_bsp_fb_verified_to_self_premise_unverified":
    case "blue_msg_bsp_premise_to_self_premise":
    case "blue_msg_bsp_premise_unverified":
    case "blue_msg_bsp_premise_unverified_to_self_premise_verified":
    case "blue_msg_bsp_premise_verified":
    case "blue_msg_bsp_premise_verified_to_self_premise_unverified":
    case "blue_msg_consumer_to_bsp_fb_unverified":
    case "blue_msg_consumer_to_bsp_premise_unverified":
    case "blue_msg_consumer_to_self_fb_unverified":
    case "blue_msg_consumer_to_self_premise_unverified":
    case "blue_msg_self_fb_to_bsp_premise":
    case "blue_msg_self_fb_to_self_premise":
    case "blue_msg_self_fb_unverified":
    case "blue_msg_self_fb_unverified_to_bsp_premise_verified":
    case "blue_msg_self_fb_unverified_to_self_premise_verified":
    case "blue_msg_self_fb_verified":
    case "blue_msg_self_fb_verified_to_bsp_premise_unverified":
    case "blue_msg_self_fb_verified_to_self_premise_unverified":
    case "blue_msg_self_premise_to_bsp_premise":
    case "blue_msg_self_premise_unverified":
    case "blue_msg_self_premise_verified":
    case "blue_msg_to_bsp_fb":
    case "blue_msg_to_consumer":
    case "blue_msg_to_self_fb":
    case "blue_msg_unverified_to_bsp_fb_verified":
    case "blue_msg_unverified_to_bsp_premise_verified":
    case "blue_msg_unverified_to_self_fb_verified":
    case "blue_msg_unverified_to_verified":
    case "blue_msg_verified_to_bsp_fb_unverified":
    case "blue_msg_verified_to_bsp_premise_unverified":
    case "blue_msg_verified_to_self_fb_unverified":
    case "blue_msg_verified_to_unverified":
      return (0, a.getE2EEnterpriseFaqUrl)();
    case "biz_privacy_mode_init_fb":
    case "biz_privacy_mode_to_fb":
    case "biz_privacy_mode_init_bsp":
    case "biz_privacy_mode_to_bsp":
    case "biz_me_account_type_is_hosted":
      if (t.isCAPISupportAccount()) {
        return (0, a.getSupportChatSafetyFaqUrl)();
      } else {
        return (0, a.getE2EEnterpriseFaqUrl)();
      }
    case "order_ephemeral_exemption":
      return (0, a.getOrderEphemeralExemptionUrl)();
    default:
      return (0, a.getFaqUrl)();
  }
};
var a = require("../app/258105.js");