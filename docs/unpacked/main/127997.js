var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateModelForGroupAction = function (e, t) {
  const {
    chatId: n
  } = e;
  const a = i.ChatCollection.get(n);
  if (!a) {
    return Promise.resolve();
  }
  const C = (0, r.default)(a.groupMetadata, "chat.groupMetadata");
  const {
    author: b,
    ts: M
  } = e;
  switch (t.actionType) {
    case m.GROUP_ACTIONS.SUBJECT:
      {
        const e = {
          name: t.subject
        };
        a.contact.set(e);
        C.set("subject", t.subject);
        break;
      }
    case m.GROUP_ACTIONS.LINKED_GROUP_DEMOTE:
      {
        if (!t.jid) {
          break;
        }
        const e = p.default.assertGet(t.jid);
        if (e.participants.iAmAdmin()) {
          const n = t.participants.map(e => {
            let {
              id: t
            } = e;
            return {
              id: t,
              isAdmin: false
            };
          });
          e.participants.add(n, {
            merge: true
          });
        } else {
          e.participants.remove(t.participants.map(e => e.id));
        }
        if (t.participants.find(e => (0, y.isMeAccount)(e.id))) {
          const t = e.participants.filter(e => !e.isAdmin).map(e => e.id);
          e.participants.remove(t);
        }
        break;
      }
    case m.GROUP_ACTIONS.LINKED_GROUP_PROMOTE:
      {
        if (!t.jid) {
          break;
        }
        const e = p.default.assertGet(t.jid);
        const n = t.participants.map(e => {
          let {
            id: t
          } = e;
          return {
            id: t,
            isAdmin: true
          };
        });
        e.participants.add(n, {
          merge: true
        });
        break;
      }
    case m.GROUP_ACTIONS.ADD:
    case m.GROUP_ACTIONS.PROMOTE:
    case m.GROUP_ACTIONS.DEMOTE:
      {
        if (t.actionType === m.GROUP_ACTIONS.ADD) {
          const e = t.participants.some(e => e.id.isLid());
          const n = C.groupType === m.GroupType.LINKED_ANNOUNCEMENT_GROUP && Boolean(C.incognito);
          const a = C.isLidAddressingMode === true;
          if (e && !n && !a) {
            break;
          }
        }
        let e = [];
        const r = new Set();
        if (C.participants.iAmAdmin() || t.actionType === m.GROUP_ACTIONS.ADD || t.actionType === m.GROUP_ACTIONS.PROMOTE) {
          e = t.participants.map(e => {
            let {
              id: t
            } = e;
            return t;
          });
          t.participants.forEach(e => {
            let {
              lid: t,
              id: n,
              isAdmin: a
            } = e;
            if (a) {
              r.add(n.toString());
            }
            if (!(t == null || n.isLid())) {
              C.participants.remove(t);
            }
          });
        } else if (t.actionType === m.GROUP_ACTIONS.DEMOTE) {
          e = t.participants.map(e => {
            let {
              lid: t,
              id: n
            } = e;
            if (t == null || n.isLid()) {
              return n;
            } else {
              return t;
            }
          });
          t.participants.forEach(e => {
            let {
              lid: t,
              id: n
            } = e;
            if (!(t == null || n.isLid())) {
              C.participants.remove(n);
            }
          });
        }
        const i = e.map(e => ({
          id: e,
          isAdmin: t.actionType === m.GROUP_ACTIONS.PROMOTE || t.actionType === m.GROUP_ACTIONS.ADD && r.has(e.toString())
        }));
        C.participants.add(i, {
          merge: true
        });
        if (t.actionType === m.GROUP_ACTIONS.ADD) {
          e.forEach(e => {
            C.pastParticipants.remove(e);
            if ((0, y.isMeAccount)(e)) {
              C.pastParticipants.reset();
            }
          });
          if (C.membershipApprovalMode && (0, l.getABPropConfigValue)("group_join_request_m2")) {
            e.forEach(e => {
              C.membershipApprovalRequests.remove(e);
            });
          }
          e.forEach(e => {
            p.default.trigger(`group_participant_change_${e.toString()}`, a.id);
          });
          if (t.isParentGroup === true) {
            u.default.add({
              id: n.toString(),
              communityId: n,
              type: s.ActivityTypeType.NEW_COMMUNITY,
              timestamp: M != null ? M : (0, o.unixTime)()
            });
          }
        }
        if (e.find(e => (0, y.isMeAccount)(e))) {
          if (t.actionType === m.GROUP_ACTIONS.PROMOTE) {
            if ((0, c.communityAdminPromotionOneTimePromptEnabled)() && C.groupType === m.GroupType.COMMUNITY) {
              const e = (0, g.getCommunityAdminPromotionNuxKey)(C.id.toString());
              (0, E.resetNux)(e);
            }
            if (C.membershipApprovalMode && (0, l.getABPropConfigValue)("group_join_request_m2")) {
              (0, f.queryAndUpdateGroupMembershipApprovalRequests)(a.id);
            }
          } else if (t.actionType === m.GROUP_ACTIONS.DEMOTE && (0, l.getABPropConfigValue)("group_join_request_m2")) {
            C.membershipApprovalRequests.reset();
          }
        }
        break;
      }
    case m.GROUP_ACTIONS.REMOVE:
      {
        let n = false;
        const r = [];
        const o = [];
        const l = (0, y.getMeUser)();
        t.participants.forEach(t => {
          let {
            id: a,
            lid: i,
            isAdmin: u
          } = t;
          const s = l.equals(a);
          if (i != null && s && u === true) {
            r.push(i);
            r.push(a);
          } else {
            r.push(a);
          }
          o.push({
            id: a,
            leaveTs: M,
            leaveReason: a.equals(e.author) ? h.LeaveReason.Left : h.LeaveReason.Removed
          });
          if ((0, y.isMeAccount)(a)) {
            n = true;
          }
        });
        C.participants.remove(r);
        C.pastParticipants.add(o);
        if (t.reason === m.REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
          C.participants.add(t.participants.map(e => {
            let {
              lid: t,
              id: n
            } = e;
            if (t == null || n.isLid()) {
              return {
                id: n
              };
            } else {
              return {
                id: t
              };
            }
          }), {
            merge: true
          });
        }
        t.participants.forEach(e => {
          p.default.trigger(`group_participant_change_${e.id.toString()}`, a.id);
        });
        if (n) {
          (0, v.invalidateChatPollMsgs)(a);
        }
        if (!C.isParentGroupParticipant() && C.parentGroup) {
          var S;
          const e = C.getParentGroupChat();
          if (!(e == null || (S = e.groupMetadata) === null || S === undefined)) {
            S.trigger("exitParentGroup");
          }
          (0, _.updateModelsForExitedCommunity)(C.parentGroup);
        }
        break;
      }
    case m.GROUP_ACTIONS.MODIFY:
      if (b && t.participants && t.participants.length > 0) {
        const e = t.participants[0].id;
        const n = C.participants.remove(b);
        let a = false;
        let r = false;
        if (n.length && n[0]) {
          a = n[0].isAdmin;
          r = n[0].isSuperAdmin;
        }
        const o = {
          id: e,
          isAdmin: a,
          isSuperAdmin: r
        };
        C.participants.add(o);
      }
      break;
    case m.GROUP_ACTIONS.INVITE_CODE:
      if (t.code) {
        C.inviteCode = t.code;
      } else {
        __LOG__(3)`model:chat:handleGroupAction:invalid invite code: ${t.code} for ${a.id.toString()}`;
      }
      break;
    case m.GROUP_ACTIONS.DESC_ADD:
      C.set({
        desc: t.desc,
        descId: t.descId,
        descTime: t.descTime,
        descOwner: b == null ? undefined : b.toString()
      });
      break;
    case m.GROUP_ACTIONS.DESC_REMOVE:
      if (C.descId === t.descId) {
        C.set({
          desc: undefined,
          descId: undefined,
          descTime: undefined,
          descOwner: undefined
        });
        break;
      }
      break;
    case m.GROUP_ACTIONS.RESTRICT:
      C.restrict = !!t.value;
      break;
    case m.GROUP_ACTIONS.SUSPEND:
      C.suspended = !!t.value;
      break;
    case m.GROUP_ACTIONS.ANNOUNCE:
      C.announce = !!t.value;
      break;
    case m.GROUP_ACTIONS.NO_FORWARD:
      C.noFrequentlyForwarded = !!t.value;
      break;
    case m.GROUP_ACTIONS.EPHEMERAL:
      C.ephemeralDuration = t.duration;
      break;
    case m.GROUP_ACTIONS.REVOKE_INVITE:
      {
        const e = [];
        t.participants.forEach(t => {
          let {
            id: n
          } = t;
          if (C.pendingParticipants.get(n)) {
            e.push(n);
          }
        });
        C.pendingParticipants.remove(e);
        break;
      }
    case m.GROUP_ACTIONS.DELETE:
      if (t.reason === m.DELETE_REASON.INTEGRITY_DELETE_PARENT) {
        (0, _.updateModelsForIntegrityDeactivateCommunity)(n);
      } else if (t.reason === m.DELETE_REASON.DELETE_PARENT) {
        (0, _.updateModelsForDeactivateCommunity)(n);
      } else {
        C.terminated = true;
      }
      break;
    case m.GROUP_ACTIONS.GROWTH_UNLOCKED:
      C.growthLockExpiration = undefined;
      C.growthLockType = undefined;
      break;
    case m.GROUP_ACTIONS.GROWTH_LOCKED:
      if (t.type === "invite") {
        C.growthLockExpiration = t.expiration;
        C.growthLockType = t.type;
      }
      break;
    case m.GROUP_ACTIONS.PARENT_GROUP_LINK:
      C.parentGroup = t.groupDatas[0].id;
      break;
    case m.GROUP_ACTIONS.SUB_GROUP_LINK:
      (0, _.updateModelsForSubgroupLink)({
        parentGroupId: a.id,
        subgroups: t.groupDatas,
        timestamp: M,
        author: e.author
      });
      break;
    case m.GROUP_ACTIONS.SIBLING_GROUP_LINK:
      if (C.parentGroup) {
        (0, _.updateModelsForSubgroupLink)({
          parentGroupId: C.parentGroup,
          subgroups: t.groupDatas,
          timestamp: M,
          author: e.author
        });
      }
      break;
    case m.GROUP_ACTIONS.PARENT_GROUP_UNLINK:
      C.parentGroup = undefined;
      break;
    case m.GROUP_ACTIONS.SUB_GROUP_UNLINK:
      (0, _.updateModelsForSubgroupUnlink)(a.id, t.groupDatas);
      break;
    case m.GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
      if (C.parentGroup) {
        (0, _.updateModelsForSubgroupUnlink)(C.parentGroup, t.groupDatas);
      }
      break;
    case m.GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
      if ((0, l.getABPropConfigValue)("group_join_request_m2")) {
        C.membershipApprovalMode = !!t.value;
        if (!t.value) {
          C.membershipApprovalRequests.reset();
        }
      }
      break;
    case m.GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
      C.set("reportToAdminMode", t.value);
      if (!t.value) {
        C.set("lastReportToAdminTimestamp", null);
      }
      break;
    case m.GROUP_ACTIONS.ADMIN_REPORT_RECIEVED:
      C.set("lastReportToAdminTimestamp", t.value);
      break;
    case m.GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
      if ((0, l.getABPropConfigValue)("group_join_request_m2") && !(0, l.getABPropConfigValue)("group_join_request_m3")) {
        const e = (0, r.default)(b, "author");
        C.membershipApprovalRequests.add({
          id: e,
          t: M,
          addedBy: e,
          requestMethod: t.requestMethod,
          parentGroupId: t.parentGroupId
        });
      }
      break;
    case m.GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
      if ((0, l.getABPropConfigValue)("group_join_request_m2") && (0, l.getABPropConfigValue)("group_join_request_m3")) {
        const e = t.requests.map(e => ({
          id: e,
          t: M,
          addedBy: (0, r.default)(b, "author"),
          requestMethod: t.requestMethod,
          parentGroupId: t.parentGroupId
        }));
        C.membershipApprovalRequests.add(e);
      }
      break;
    case m.GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
      if ((0, l.getABPropConfigValue)("group_join_request_m2")) {
        t.requests.forEach(e => {
          C.membershipApprovalRequests.remove(e);
        });
      }
      break;
    case m.GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
      C.allowNonAdminSubGroupCreation = !!t.value;
      break;
    case m.GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
      C.subgroupSuggestions.add({
        id: (0, d.getSubgroupSuggestionId)(t.id, t.owner),
        groupId: t.id,
        parentGroupId: t.parentGroupId,
        subject: t.subject,
        desc: t.description,
        owner: t.owner,
        t: t.t,
        isExistingGroup: t.isExistingGroup,
        participantCount: t.participantCount
      }, {
        merge: true
      });
      break;
    case m.GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS:
      C.subgroupSuggestions.remove(t.subgroupSuggestions.map(e => {
        let {
          id: t,
          owner: n
        } = e;
        return (0, d.getSubgroupSuggestionId)(t, n);
      }));
      break;
    case m.GROUP_ACTIONS.SUBGROUP_SUGGESTIONS_CHANGE_NUMBER:
      {
        const e = t.subgroupSuggestions.map(e => C.subgroupSuggestions.get((0, d.getSubgroupSuggestionId)(e, t.oldOwner))).filter(Boolean);
        C.subgroupSuggestions.remove(e);
        C.subgroupSuggestions.add(e.map(e => ({
          id: (0, d.getSubgroupSuggestionId)(e.groupId, t.newOwner),
          groupId: e.groupId,
          parentGroupId: e.parentGroupId,
          subject: e.subject,
          desc: e.desc,
          owner: t.newOwner,
          t: e.t,
          isExistingGroup: e.isExistingGroup,
          participantCount: e.participantCount
        })), {
          merge: true
        });
        break;
      }
    case m.GROUP_ACTIONS.MEMBER_ADD_MODE:
      if ((0, l.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
        C.memberAddMode = t.memberAddMode;
      }
      break;
    case m.GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED:
      C.generalChatAutoAddDisabled = true;
      break;
    default:
      __LOG__(4, undefined, new Error(), undefined, ["groups"])`unhandled group notif action in handleGroupAction`;
  }
  return Promise.resolve();
};
var r = a(require("../app/670983.js"));
var o = require("../app/632157.js");
var l = require("../app/287461.js");
var i = require("../app/351053.js");
var u = a(require("../app/806711.js"));
var s = require("../app/255131.js");
var c = require("../app/174834.js");
var d = require("../app/369461.js");
var f = require("../app/198111.js");
var p = a(require("../app/667845.js"));
var m = require("../app/862159.js");
var h = require("../app/687352.js");
var g = require("../app/95589.js");
var E = require("../app/763219.js");
var v = require("../app/295217.js");
var _ = require("./612180.js");
var y = require("../app/459857.js");