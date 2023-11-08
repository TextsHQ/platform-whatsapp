Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentMessageParticipantLimit = function () {
  return (0, r.getABPropConfigValue)("parent_group_announcement_comments_participant_limit");
};
exports.communitiesCreationEnabled = function () {
  if ((0, a.isSMB)()) {
    return (0, r.getABPropConfigValue)("parent_group_create_enabled_for_smb_on_web");
  }
  return true;
};
exports.communitiesEnabled = o;
exports.communitiesEnabledSmb = function () {
  return (0, a.isSMB)() && (0, r.getABPropConfigValue)("parent_group_view_enabled_for_smb_on_web");
};
exports.communityAdminPromotionOneTimePromptEnabled = function () {
  return o() && (0, r.getABPropConfigValue)("community_admin_promotion_one_time_prompt");
};
exports.communityAnnouncementImprovementM3Enabled = function () {
  return (0, r.getABPropConfigValue)("community_announcement_improvement_m3");
};
exports.communityChatListNestingEnabled = function () {
  return (0, r.getABPropConfigValue)("community_groups_navigation");
};
exports.communityCreatePrivacyEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_create_privacy");
};
exports.communityCreationNoAddGroupsScreenEnabled = function () {
  return (0, r.getABPropConfigValue)("community_creation_no_add_groups_screen");
};
exports.communityExamplesEnabled = function () {
  return (0, r.getABPropConfigValue)("community_examples");
};
exports.communityGeneralChatCreateEnabled = function () {
  return (0, r.getABPropConfigValue)("community_general_chat_create_enabled");
};
exports.communityGeneralChatUIEnabled = function () {
  return (0, r.getABPropConfigValue)("community_general_chat_UI_enabled");
};
exports.communityGroupDirectoryEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_directory_enabled");
};
exports.communityHistoryReceiveEnabled = function () {
  return (0, r.getABPropConfigValue)("community_history_receive");
};
exports.communityHomeHeaderActionsEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_home_header_actions_enabled");
};
exports.communityNavigationEnabled = function () {
  return (0, r.getABPropConfigValue)("community_navigation");
};
exports.communityRichSystemMessageEnabled = function () {
  return (0, r.getABPropConfigValue)("community_rich_system_message_enabled");
};
exports.communityShortGroupCreationEnabled = function () {
  return (0, r.getABPropConfigValue)("community_shorter_group_creation_enabled");
};
exports.communitySubgroupIdentityV2Enabled = s;
exports.communitySubgroupSwitcherEntrypointEnabled = function () {
  return (0, r.getABPropConfigValue)("community_subgroup_switcher_entrypoint_enabled");
};
exports.communityTabbedInfoEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_info_updates_enabled");
};
exports.getParentGroupLinkLimit = function () {
  return (0, r.getABPropConfigValue)("parent_group_link_limit") + 1;
};
exports.getParentGroupLinkLimitCommunityCreation = function () {
  return (0, r.getABPropConfigValue)("parent_group_link_limit_community_creation") + 1;
};
exports.groupMentionsInSubgroupsEnabled = function () {
  return (0, r.getABPropConfigValue)("group_mentions_in_subgroups");
};
exports.isCommentMessageHistorySyncReceiverEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_announcement_comments_history_sync_receiver_enabled");
};
exports.isCommentMessageReceiverEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_announcement_comments_receiver_enabled");
};
exports.isCommentMessageSubscriptionEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_announcement_comment_subscription_enabled");
};
exports.isCommentMessagesEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_announcement_comments_enabled");
};
exports.memberAddedGroupsM1Enabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_allow_member_added_groups_m1");
};
exports.memberSuggestedGroupsEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_allow_member_added_groups_m2");
};
exports.memberSuggestedGroupsM3ReceiverEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_allow_member_suggest_existing_m3_receiver");
};
exports.memberSuggestedGroupsM3SenderEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_allow_member_suggest_existing_m3_sender");
};
exports.newCommunityAnnouncementBubbleEnabled = function () {
  return (0, r.getABPropConfigValue)("community_announcement_improvement_m1");
};
exports.noSubgroupRequirementEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_no_subgroup_requirement");
};
exports.reportCommunityExitUpsellEnabled = function () {
  return (0, r.getABPropConfigValue)("community_reporting_ui_upsell_exit");
};
exports.richCommunityDescriptionEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_enhanced_description_enabled");
};
exports.shouldShowNewSubgroupIdentity = function (e) {
  if (e == null) {
    return false;
  }
  return (e.groupType === i.GroupType.LINKED_SUBGROUP || e.groupType === i.GroupType.LINKED_GENERAL_GROUP) && e.getParentGroupChat() != null && o() && s();
};
exports.subgroupFilterEnabled = function () {
  return (0, r.getABPropConfigValue)("parent_group_subgroup_filter");
};
var r = require("./287461.js");
var i = require("./862159.js");
var a = require("./94602.js");
function o() {
  if ((0, a.isSMB)()) {
    return (0, r.getABPropConfigValue)("parent_group_view_enabled_for_smb_on_web");
  } else {
    return (0, r.getABPropConfigValue)("parent_group_view_enabled");
  }
}
function s() {
  return (0, r.getABPropConfigValue)("community_subgroup_identity_v2");
}