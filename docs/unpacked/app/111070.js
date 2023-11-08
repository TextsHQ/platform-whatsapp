var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GROUP_NOTIFICATION_TAG = undefined;
exports.getIsIncognitoCagById = v;
exports.notAlreadyInGroup = function () {
  return S.apply(this, arguments);
};
exports.shouldSkipGenMsg = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./827467.js");
var l = require("./359987.js");
var u = require("./174834.js");
var c = require("./185212.js");
var d = require("./242382.js");
var p = require("./862159.js");
var f = require("./755985.js");
var _ = require("./459857.js");
var g = r(require("./124928.js"));
const m = Object.freeze({
  REMOVE: "remove",
  ADD: "add",
  DEMOTE: "demote",
  DELETE: "delete",
  PROMOTE: "promote",
  MODIFY: "modify",
  CREATE: "create",
  SUBJECT: "subject",
  DESC: "description",
  LOCKED: "locked",
  UNLOCKED: "unlocked",
  ANNOUNCE: "announcement",
  NOT_ANNOUNCE: "not_announcement",
  NO_FREQUENTLY_FORWARDED: "no_frequently_forwarded",
  FREQUENTLY_FORWARDED_OK: "frequently_forwarded_ok",
  INVITE: "invite",
  EPHEMERAL: "ephemeral",
  NOT_EPHEMERAL: "not_ephemeral",
  REVOKE_INVITE: "revoke",
  SUSPENDED: "suspended",
  UNSUSPENDED: "unsuspended",
  GROWTH_LOCKED: "growth_locked",
  GROWTH_UNLOCKED: "growth_unlocked",
  LINK: "link",
  UNLINK: "unlink",
  LINKED_GROUP_PROMOTE: "linked_group_promote",
  LINKED_GROUP_DEMOTE: "linked_group_demote",
  MEMBERSHIP_APPROVAL_MODE: "membership_approval_mode",
  MEMBERSHIP_APPROVAL_REQUEST: "membership_approval_request",
  CREATED_MEMBERSHIP_REQUESTS: "created_membership_requests",
  REVOKED_MEMBERSHIP_REQUESTS: "revoked_membership_requests",
  ALLOW_NON_ADMIN_SUB_GROUP_CREATION: "allow_non_admin_sub_group_creation",
  NOT_ALLOW_NON_ADMIN_SUB_GROUP_CREATION: "not_allow_non_admin_sub_group_creation",
  ALLOW_ADMIN_REPORTS: "allow_admin_reports",
  NOT_ALLOW_ADMIN_REPORTS: "not_allow_admin_reports",
  REPORTS: "reports",
  CREATED_SUBGROUP_SUGGESTION: "created_sub_group_suggestion",
  REVOKED_SUB_GROUP_SUGGESTIONS: "revoked_sub_group_suggestions",
  CHANGE_NUMBER: "change_number",
  MEMBER_ADD_MODE: "member_add_mode",
  AUTO_ADD_DISABLED: "auto_add_disabled"
});
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e, t) {
    var n;
    const r = yield (0, c.getGroupMetadata)(e);
    return !!r && r.growthLockType === t && ((n = r.growthLockExpiration) !== null && n !== undefined ? n : 0) > (0, a.unixTime)();
  })).apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    if (t.actionType === p.GROUP_ACTIONS.REVOKE_INVITE || t.actionType === p.GROUP_ACTIONS.SUSPEND || t.actionType === p.GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS || t.actionType === p.GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS || t.actionType === p.GROUP_ACTIONS.SUBGROUP_SUGGESTIONS_CHANGE_NUMBER) {
      return true;
    }
    if (t.actionType === p.GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION && !(0, u.memberAddedGroupsM1Enabled)()) {
      return true;
    }
    if (t.actionType === p.GROUP_ACTIONS.GROWTH_LOCKED || t.actionType === p.GROUP_ACTIONS.GROWTH_UNLOCKED) {
      if (t.actionType === p.GROUP_ACTIONS.GROWTH_LOCKED) {
        if (t.type !== "invite") {
          return true;
        }
        if (yield h(e.chatId, t.type)) {
          return true;
        }
      }
      return !(yield (0, s.isCurrentUserGroupAdmin)(e.chatId.toString()));
    }
    if ((t.actionType === p.GROUP_ACTIONS.SUB_GROUP_LINK || t.actionType === p.GROUP_ACTIONS.PARENT_GROUP_LINK || t.actionType === p.GROUP_ACTIONS.SIBLING_GROUP_LINK || t.actionType === p.GROUP_ACTIONS.SUB_GROUP_UNLINK || t.actionType === p.GROUP_ACTIONS.SIBLING_GROUP_UNLINK || t.actionType === p.GROUP_ACTIONS.PARENT_GROUP_UNLINK || t.actionType === p.GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK || t.actionType === p.GROUP_ACTIONS.DELETE_PARENT_GROUP || t.actionType === p.GROUP_ACTIONS.LINKED_GROUP_PROMOTE || t.actionType === p.GROUP_ACTIONS.LINKED_GROUP_DEMOTE) && !(0, u.communitiesEnabled)()) {
      return true;
    }
    if ((0, u.communitiesEnabled)() && (t.actionType === p.GROUP_ACTIONS.PROMOTE || t.actionType === p.GROUP_ACTIONS.DEMOTE) && (yield v(e.chatId)) === true) {
      return true;
    }
    if (t.actionType === p.GROUP_ACTIONS.PROMOTE || t.actionType === p.GROUP_ACTIONS.DEMOTE) {
      if (!(t.participants.length === 1 && (0, _.isMeAccount)(t.participants[0].id))) {
        return true;
      }
    }
    if (t.actionType === p.GROUP_ACTIONS.LINKED_GROUP_DEMOTE && t.participants.length === 1 && !(0, _.isMeAccount)(t.participants[0].id)) {
      if (!(yield (0, s.isCurrentUserGroupAdmin)(e.chatId.toString()))) {
        return true;
      }
    }
    if (t.actionType === p.GROUP_ACTIONS.REMOVE && t.participants.length === 1 && g.default.equals(e.author, t.participants[0].id)) {
      const t = yield (0, s.isCurrentUserGroupAdmin)(e.chatId.toString());
      const n = (0, _.isMeAccount)(e.author);
      if (!t || n) {
        return true;
      }
    }
    if (t.actionType === p.GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION) {
      if (!(yield (0, s.isCurrentUserGroupAdmin)(e.chatId.toString())) || t.isExistingGroup === true && !(0, u.memberSuggestedGroupsM3ReceiverEnabled)()) {
        return true;
      }
    }
    if (t.actionType === p.GROUP_ACTIONS.DELETE) {
      const n = yield (0, c.getGroupMetadata)(e.chatId);
      const r = n != null ? (0, p.getGroupTypeFromGroupMetadata)(n) : null;
      return (t.reason !== p.DELETE_REASON.INTEGRITY_DELETE_PARENT || r !== p.GroupType.LINKED_ANNOUNCEMENT_GROUP || !(0, o.getABPropConfigValue)("community_suspend_v0_enabled")) && (t.reason === p.DELETE_REASON.DELETE_PARENT && p.GroupType.LINKED_ANNOUNCEMENT_GROUP, true);
    }
    if (t.actionType === ((0, o.getABPropConfigValue)("group_join_request_m3") ? p.GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST : p.GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS)) {
      return true;
    }
    if (t.actionType === p.GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS && t.skipGenMsg) {
      return true;
    }
    if (t.actionType === p.GROUP_ACTIONS.ALLOW_ADMIN_REPORTS && t.shouldSkipGenMsg === true) {
      return true;
    }
    if (t.actionType === p.GROUP_ACTIONS.ADMIN_REPORT_RECIEVED && t.shouldSkipGenMsg === true) {
      return true;
    }
    if ((t.actionType === p.GROUP_ACTIONS.REMOVE || t.actionType === p.GROUP_ACTIONS.PROMOTE || t.actionType === p.GROUP_ACTIONS.DEMOTE || t.actionType === p.GROUP_ACTIONS.MODIFY) && (yield v(e.chatId)) === true) {
      return true;
    }
    if (t.actionType === p.GROUP_ACTIONS.LINKED_GROUP_PROMOTE || t.actionType === p.GROUP_ACTIONS.LINKED_GROUP_DEMOTE) {
      if (t.participants.every(e => {
        let {
          id: t
        } = e;
        return t.isLid();
      })) {
        return true;
      }
    }
    return false;
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    var n;
    var r;
    if (!(0, f.isWorker)()) {
      return (0, l.frontendSendAndReceive)("notAlreadyInGroup", {
        groupId: e,
        participants: t
      });
    }
    const i = new Set((n = (r = yield (0, d.getParticipants)(e)) === null || r === undefined ? undefined : r.participants) !== null && n !== undefined ? n : []);
    return t.filter(e => {
      let {
        id: t
      } = e;
      return !i.has(String(t));
    });
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = yield (0, c.getGroupMetadata)(e);
    return t != null && t.defaultSubgroup === true && t.incognito === true;
  })).apply(this, arguments);
}
exports.GROUP_NOTIFICATION_TAG = m;