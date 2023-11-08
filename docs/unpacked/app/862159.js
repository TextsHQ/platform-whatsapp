Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REVOKED_SUB_GROUP_SUGGESTION_REASON = exports.REMOVE_REASON = exports.GroupType = exports.GroupSettingChangeSystemMessageToggleEnabled = exports.GroupSettingChangeSystemMessageIsAdmin = exports.GROUP_ACTIONS = exports.DELETE_REASON = exports.ADD_REASON = undefined;
exports.getGroupTypeFromGroupMetadata = function (e) {
  if (e.defaultSubgroup === true) {
    return d.LINKED_ANNOUNCEMENT_GROUP;
  }
  if (e.generalSubgroup === true) {
    return d.LINKED_GENERAL_GROUP;
  }
  if (e.parentGroup != null) {
    return d.LINKED_SUBGROUP;
  }
  if (e.isParentGroup === true) {
    return d.COMMUNITY;
  }
  return d.DEFAULT;
};
exports.groupTypeToWamEnum = function (e) {
  switch (e) {
    case d.LINKED_ANNOUNCEMENT_GROUP:
      return r.TYPE_OF_GROUP_ENUM.DEFAULT_SUBGROUP;
    case d.LINKED_SUBGROUP:
      return r.TYPE_OF_GROUP_ENUM.SUBGROUP;
    default:
      return r.TYPE_OF_GROUP_ENUM.GROUP;
  }
};
var r = require("./21008.js");
const i = require("../vendor/76672.js")({
  On: "on",
  Off: "off"
});
exports.GroupSettingChangeSystemMessageToggleEnabled = i;
const a = require("../vendor/76672.js")({
  Admin: "admin",
  Regular: "regular"
});
exports.GroupSettingChangeSystemMessageIsAdmin = a;
const o = Object.freeze({
  SUBJECT: "subject",
  ADD: "add",
  PROMOTE: "promote",
  DEMOTE: "demote",
  DELETE: "delete",
  REMOVE: "remove",
  MODIFY: "modify",
  INVITE_CODE: "invite",
  DESC_ADD: "desc_add",
  DESC_REMOVE: "desc_remove",
  RESTRICT: "restrict",
  ANNOUNCE: "announce",
  NO_FORWARD: "no_frequently_forwarded",
  EPHEMERAL: "ephemeral",
  REVOKE_INVITE: "revoke_invite",
  SUSPEND: "suspend",
  GROWTH_LOCKED: "growth_locked",
  GROWTH_UNLOCKED: "growth_unlocked",
  SUB_GROUP_LINK: "sub_group_link",
  PARENT_GROUP_LINK: "parent_group_link",
  PARENT_GROUP_LINK_MEMBERSHIP_APPROVAL: "parent_group_link_membership_approval",
  SIBLING_GROUP_LINK: "sibling_group_link",
  SUB_GROUP_UNLINK: "sub_group_unlink",
  PARENT_GROUP_UNLINK: "parent_group_unlink",
  SIBLING_GROUP_UNLINK: "sibling_group_unlink",
  DELETE_PARENT_GROUP: "delete_parent_group",
  DELETE_PARENT_GROUP_UNLINK: "delete_parent_group_unlink",
  DELETE_PARENT_SUB_GROUP_UNLINK: "delete_parent_sub_group_unlink",
  INTEGRITY_PARENT_GROUP_UNLINK: "integrity_parent_group_unlink",
  INTEGRITY_SUB_GROUP_UNLINK: "integrity_sub_group_unlink",
  LINKED_GROUP_PROMOTE: "linked_group_promote",
  LINKED_GROUP_DEMOTE: "linked_group_demote",
  MEMBERSHIP_APPROVAL_MODE: "membership_approval_mode",
  MEMBERSHIP_APPROVAL_REQUEST: "membership_approval_request",
  CREATED_MEMBERSHIP_REQUESTS: "created_membership_requests",
  REVOKED_MEMBERSHIP_REQUESTS: "revoked_membership_requests",
  ALLOW_NON_ADMIN_SUB_GROUP_CREATION: "allow_non_admin_sub_group_creation",
  ALLOW_ADMIN_REPORTS: "allow_admin_reports",
  ADMIN_REPORT_RECIEVED: "admin_report_received",
  CREATED_SUBGROUP_SUGGESTION: "created_subgroup_suggestion",
  REVOKED_SUB_GROUP_SUGGESTIONS: "revoked_sub_group_suggestions",
  SUBGROUP_SUGGESTIONS_CHANGE_NUMBER: "subgroup_suggestions_change_number",
  MEMBER_ADD_MODE: "member_add_mode",
  GENERAL_CHAT_AUTO_ADD_DISABLED: "general_chat_auto_add_disabled"
});
exports.GROUP_ACTIONS = o;
const s = Object.freeze({
  INTEGRITY_DELETE_PARENT: "integrity_delete_parent",
  DELETE_PARENT: "delete_parent"
});
exports.DELETE_REASON = s;
const l = Object.freeze({
  INVITE: "invite",
  LINKED_GROUP_JOIN: "linked_group_join",
  AUTO_ADD: "auto_add",
  DEFAULT_SUBGROUP_ADMIN_ADD: "default_subgroup_admin_add",
  DEFAULT_SUBGROUP_PROMOTE: "default_sub_group_promote",
  INVITE_AUTO_ADD: "invite_auto_add",
  GENERAL_CHAT_AUTO_ADD: "general_chat_auto_add"
});
exports.ADD_REASON = l;
const u = Object.freeze({
  DEFAULT_SUBGROUP_DEMOTE: "default_sub_group_demote"
});
exports.REMOVE_REASON = u;
const c = require("../vendor/76672.js")({
  APPROVED: "approved",
  REJECTED: "rejected",
  CANCELLED: "cancelled"
});
exports.REVOKED_SUB_GROUP_SUGGESTION_REASON = c;
const d = require("../vendor/76672.js").Mirrored(["DEFAULT", "COMMUNITY", "LINKED_SUBGROUP", "LINKED_ANNOUNCEMENT_GROUP", "LINKED_GENERAL_GROUP"]);
exports.GroupType = d;