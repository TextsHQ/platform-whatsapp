var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDBForGroupAction = function () {
  return w.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./122583.js");
var s = r(require("./670983.js"));
var l = require("./632157.js");
var u = require("./287461.js");
var c = require("./779423.js");
var d = require("./827467.js");
var p = require("./900890.js");
var f = require("./359987.js");
var _ = require("./174834.js");
var g = require("./35665.js");
var m = require("./667662.js");
var h = require("./185212.js");
var y = require("./209639.js");
var E = require("./287708.js");
var S = require("./297031.js");
var v = require("./54149.js");
var T = require("./660913.js");
var M = require("./853441.js");
var A = require("./862159.js");
var b = require("./789375.js");
var C = require("./95589.js");
var P = require("./763219.js");
var O = require("./596441.js");
var I = require("./858029.js");
var R = require("./757453.js");
var N = require("./459857.js");
var D = require("./669050.js");
function w() {
  return (w = (0, a.default)(function* (e, t) {
    var n;
    var r;
    let a = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    __LOG__(2, undefined, undefined, undefined, ["groups"])`inside _handleGroupActionMD`;
    const {
      chatId: f,
      author: M,
      pushname: w,
      ts: k = Date.now() / 1000
    } = e;
    if (M && w) {
      (0, b.updatePushname)(M, w, a);
    }
    const U = [];
    switch (t.actionType) {
      case A.GROUP_ACTIONS.ADD:
        U.push((0, T.addParticipantsJob)(f, t.participants, t.version, t.prevVersion, a, t.reason).catch((0, o.filteredCatch)(y.GroupUnSyncedError, () => {
          __LOG__(3)`addParticipants: out-of-sync group notification`;
          G(f, a);
        })));
        if ((0, u.getABPropConfigValue)("group_join_request_m2")) {
          U.push((0, v.removeMembershipApprovalRequestsJob)(e.chatId, t.participants.map(e => e.id), a));
        }
        break;
      case A.GROUP_ACTIONS.REMOVE:
        {
          const n = yield (0, h.getGroupMetadata)(f);
          if (n == null) {
            break;
          }
          const r = t.reason !== A.REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE && t.participants.some(e => {
            let {
              id: t
            } = e;
            return (0, N.isMeAccount)(t);
          }) && (yield (0, g.isLastJoinedSubgroup)(n));
          U.push((0, T.removeParticipantsJob)(f, t.participants, k, e.author, t.version, t.prevVersion, t.reason, n, a).catch((0, o.filteredCatch)(y.GroupUnSyncedError, () => {
            __LOG__(3)`removeParticipants: out-of-sync group notification`;
            G(f, a);
          })));
          const i = (0, N.getMaybeMeUser)();
          if (i && t.participants.find(e => {
            let {
              id: t
            } = e;
            return t.equals(i);
          })) {
            (0, R.removeUserSentMessageToChat)(f);
            (0, d.setAdminshipCache)(f.toString(), false);
          }
          if (r) {
            const e = n == null ? undefined : n.parentGroup;
            const t = yield (0, I.databaseUpdatesForExitedCommunity)(e != null ? (0, D.createWid)(e) : null);
            U.push(...t);
          }
          break;
        }
      case A.GROUP_ACTIONS.DEMOTE:
        {
          const e = yield (0, h.getGroupMetadata)(f);
          if (e == null) {
            break;
          }
          const n = (0, N.getMaybeMeUser)();
          if (n && t.participants.find(e => {
            let {
              id: t
            } = e;
            return t.equals(n);
          })) {
            (0, d.setAdminshipCache)(f.toString(), false);
            if ((0, u.getABPropConfigValue)("group_join_request_m2")) {
              U.push((0, c.removeAllMembershipApprovalRequests)(f));
            }
            yield L(e, f);
          }
          U.push((0, T.demoteParticipantsJob)(f, t.participants, t.version, t.prevVersion, e, a).catch((0, o.filteredCatch)(y.GroupUnSyncedError, () => {
            __LOG__(3)`removeParticipants: out-of-sync group notification`;
            G(f, a);
          })));
          break;
        }
      case A.GROUP_ACTIONS.PROMOTE:
        {
          const e = yield (0, h.getGroupMetadata)(f);
          if (e == null) {
            break;
          }
          const n = (0, N.getMaybeMeUser)();
          if (n && t.participants.find(e => {
            let {
              id: t
            } = e;
            return t.equals(n);
          })) {
            if ((0, _.communityAdminPromotionOneTimePromptEnabled)() && e != null && (0, A.getGroupTypeFromGroupMetadata)(e) === A.GroupType.COMMUNITY) {
              const t = (0, C.getCommunityAdminPromotionNuxKey)(e.id.toString());
              (0, P.resetNux)(t);
            }
            (0, d.setAdminshipCache)(f.toString(), true);
            yield L(e, f);
          }
          U.push((0, T.promoteParticipantsJob)(f, t.participants, t.version, t.prevVersion, e, a).catch((0, o.filteredCatch)(y.GroupUnSyncedError, () => {
            __LOG__(3)`removeParticipants: out-of-sync group notification`;
            G(f, a);
          })));
          break;
        }
      case A.GROUP_ACTIONS.LINKED_GROUP_PROMOTE:
        {
          if (!t.jid) {
            break;
          }
          const e = t.jid;
          if (!(yield (0, d.isCurrentUserGroupAdmin)(e.toString()))) {
            U.push((0, T.promoteCommunityParticipantsJob)(e, t.participants, a).catch((0, o.filteredCatch)(y.GroupUnSyncedError, () => {
              __LOG__(3)`linkedGroupPromote: out-of-sync group notification`;
              G(e, a);
            })));
          }
          break;
        }
      case A.GROUP_ACTIONS.LINKED_GROUP_DEMOTE:
        {
          if (!t.jid) {
            break;
          }
          const e = t.jid;
          if (!(yield (0, d.isCurrentUserGroupAdmin)(e.toString()))) {
            U.push((0, T.demoteCommunityParticipantsJob)(e, t.participants, a).catch((0, o.filteredCatch)(y.GroupUnSyncedError, () => {
              __LOG__(3)`linkedGroupDemote: out-of-sync group notification`;
              G(e, a);
            })));
          }
          break;
        }
      case A.GROUP_ACTIONS.REVOKE_INVITE:
        {
          var x;
          const e = (x = (0, N.getMaybeMeUser)()) === null || x === undefined ? undefined : x.toString();
          if (!e) {
            return void __LOG__(3)`getMaybeMeUser returned null, can't process action ${t}`;
          }
          const n = M == null ? undefined : M.toString();
          let r = [];
          if (n == null) {
            return void __LOG__(3)`Received revoke without an admin jid ${t}`;
          }
          if (n === e) {
            r = t.participants.map(t => ({
              from: e,
              to: t.id.toString(),
              groupId: f.toString(),
              expiration: t.expiration
            }));
          } else {
            const i = t.participants.find(t => t.id.toString() === e);
            if (!i) {
              __LOG__(4, undefined, new Error(), true)`Received group invite revokation from ${n}, but user not in participants list`;
              return void SEND_LOGS("bad-revoke");
            }
            r = [{
              from: n,
              to: e,
              groupId: f.toString(),
              expiration: i.expiration
            }];
          }
          yield Promise.all(r.map(e => (0, E.revokeGroupInviteV4)(e.from, e.to, e.groupId, e.expiration)));
          break;
        }
      case A.GROUP_ACTIONS.MODIFY:
        if (t.participants.length !== 1) {
          __LOG__(3)`_handleGroupActionMD: participants length should be 1, but is ${t.participants.length}`;
          break;
        }
        U.push((0, S.modifyGroupParticipantJob)(f, (0, s.default)(M, "author"), t.participants[0].id, (n = t.prevVersion) !== null && n !== undefined ? n : -1, (r = t.version) !== null && r !== undefined ? r : -1).catch((0, o.filteredCatch)(y.GroupUnSyncedError, () => {
          __LOG__(3)`modifyGroupParticipant: out-of-sync group notification`;
          G(f, a);
        })));
        break;
      case A.GROUP_ACTIONS.SUBJECT:
        U.push((0, h.persistGroupMetadata)(f, {
          subject: t.subject
        }, a));
        break;
      case A.GROUP_ACTIONS.DESC_ADD:
        U.push((0, h.persistGroupMetadata)(f, {
          desc: t.desc,
          descId: t.descId,
          descTime: t.descTime,
          descOwner: M == null ? undefined : M.toString()
        }, a));
        break;
      case A.GROUP_ACTIONS.DESC_REMOVE:
        U.push((0, h.persistGroupMetadata)(f, {
          desc: undefined,
          descId: undefined,
          descTime: undefined,
          descOwner: undefined
        }, a));
        break;
      case A.GROUP_ACTIONS.RESTRICT:
        U.push((0, h.persistGroupMetadata)(f, {
          restrict: !!t.value
        }, a));
        break;
      case A.GROUP_ACTIONS.SUSPEND:
        U.push((0, h.persistGroupMetadata)(f, {
          suspended: !!t.value
        }, a));
        break;
      case A.GROUP_ACTIONS.ANNOUNCE:
        U.push((0, h.persistGroupMetadata)(f, {
          announce: !!t.value
        }, a));
        break;
      case A.GROUP_ACTIONS.NO_FORWARD:
        U.push((0, h.persistGroupMetadata)(f, {
          noFrequentlyForwarded: !!t.value
        }, a));
        break;
      case A.GROUP_ACTIONS.EPHEMERAL:
        U.push((0, h.persistGroupMetadata)(f, {
          ephemeralDuration: t.duration
        }, a));
        break;
      case A.GROUP_ACTIONS.INVITE_CODE:
      case A.GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK:
        break;
      case A.GROUP_ACTIONS.DELETE:
        if (t.reason === A.DELETE_REASON.INTEGRITY_DELETE_PARENT) {
          const e = yield (0, I.databaseUpdatesForIntegrityDeactivateCommunity)(f, a);
          U.push(...e);
        } else if (t.reason === A.DELETE_REASON.DELETE_PARENT) {
          const e = yield (0, I.databaseUpdatesForDeactivateCommunity)(f, a);
          U.push(...e);
        } else {
          U.push((0, h.persistGroupMetadata)(f, {
            terminated: true
          }, a));
        }
        break;
      case A.GROUP_ACTIONS.GROWTH_UNLOCKED:
        U.push((0, h.persistGroupMetadata)(f, {
          growthLockExpiration: undefined,
          growthLockType: undefined
        }, a));
        break;
      case A.GROUP_ACTIONS.GROWTH_LOCKED:
        if (t.type === "invite") {
          U.push((0, h.persistGroupMetadata)(f, {
            growthLockExpiration: t.expiration,
            growthLockType: t.type
          }, a));
        }
        break;
      case A.GROUP_ACTIONS.PARENT_GROUP_LINK:
        {
          const e = t.groupDatas[0].id;
          U.push((0, h.persistGroupMetadata)(f, {
            parentGroup: e.toString()
          }, a));
          break;
        }
      case A.GROUP_ACTIONS.SUB_GROUP_LINK:
        U.push((0, g.persistCommunityLink)(f, t.groupDatas, m.CommunityLinkOperation.SubGroupLink, a), (0, h.persistGroupMetadata)(f, {
          lastActivityTimestamp: (0, l.unixTime)()
        }, a));
        break;
      case A.GROUP_ACTIONS.SIBLING_GROUP_LINK:
        U.push((0, g.persistCommunityLink)(f, t.groupDatas, m.CommunityLinkOperation.SiblingGroupLink, a));
        break;
      case A.GROUP_ACTIONS.PARENT_GROUP_UNLINK:
        U.push((0, h.persistGroupMetadata)(f, {
          parentGroup: undefined
        }, a));
        break;
      case A.GROUP_ACTIONS.SUB_GROUP_UNLINK:
        U.push((0, g.persistCommunityLink)(f, t.groupDatas, m.CommunityLinkOperation.SubGroupUnlink, a));
        break;
      case A.GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
        U.push((0, g.persistCommunityLink)(f, t.groupDatas, m.CommunityLinkOperation.SiblingGroupUnlink, a));
        break;
      case A.GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
        if ((0, u.getABPropConfigValue)("group_join_request_m2")) {
          U.push((0, h.persistGroupMetadata)(f, {
            membershipApprovalMode: t.value
          }, a));
          if (!t.value) {
            U.push((0, c.removeAllMembershipApprovalRequests)(f));
          }
        }
        break;
      case A.GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
        if ((0, u.getABPropConfigValue)("group_join_request_m2") && !(0, u.getABPropConfigValue)("group_join_request_m3")) {
          U.push((0, c.addMembershipApprovalRequests)(e.chatId, [{
            id: (0, s.default)(M, "author"),
            t: k,
            addedBy: (0, s.default)(M, "author"),
            requestMethod: t.requestMethod,
            parentGroupId: t.parentGroupId
          }]));
          const n = (0, C.getMembershipApprovalRequestsBannerNuxKey)(e.chatId.toString());
          (0, P.resetNux)(n);
        }
        break;
      case A.GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
        U.push((0, h.persistGroupMetadata)(f, (0, i.default)({
          reportToAdminMode: t.value
        }, !t.value && {
          lastReportToAdminTimestamp: null
        }), a));
        break;
      case A.GROUP_ACTIONS.ADMIN_REPORT_RECIEVED:
        U.push((0, h.persistGroupMetadata)(f, {
          lastReportToAdminTimestamp: t.value
        }, a));
        break;
      case A.GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
        if ((0, u.getABPropConfigValue)("group_join_request_m2") && (0, u.getABPropConfigValue)("group_join_request_m3")) {
          U.push((0, c.addMembershipApprovalRequests)(e.chatId, t.requests.map(e => ({
            id: e,
            t: k,
            addedBy: (0, s.default)(M, "author"),
            requestMethod: t.requestMethod,
            parentGroupId: t.parentGroupId
          }))));
          const n = (0, C.getMembershipApprovalRequestsBannerNuxKey)(e.chatId.toString());
          (0, P.resetNux)(n);
        }
        break;
      case A.GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
        if ((0, u.getABPropConfigValue)("group_join_request_m2")) {
          U.push((0, v.removeMembershipApprovalRequestsJob)(e.chatId, t.requests, a));
        }
        break;
      case A.GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
        U.push((0, h.persistGroupMetadata)(f, {
          allowNonAdminSubGroupCreation: !!t.value
        }, a));
        break;
      case A.GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
        {
          var B;
          U.push((0, p.addSubgroupSuggestions)(e.chatId, [{
            id: t.id,
            parentGroupId: t.parentGroupId,
            subject: t.subject,
            desc: t.description,
            owner: t.owner,
            t: t.t,
            isExistingGroup: (B = t.isExistingGroup) !== null && B !== undefined && B,
            participantCount: t.participantCount
          }]));
          const n = (0, C.getSubgroupSuggestionsBannerNuxKey)(e.chatId.toString());
          (0, P.resetNux)(n);
          break;
        }
      case A.GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS:
        U.push((0, O.removeSubgroupSuggestionsJob)(t.subgroupSuggestions.map(e => {
          let {
            id: n,
            owner: r
          } = e;
          return {
            parentGroupId: t.parentGroupId,
            id: n,
            owner: r
          };
        }), a));
        break;
      case A.GROUP_ACTIONS.SUBGROUP_SUGGESTIONS_CHANGE_NUMBER:
        U.push((0, p.updateOwnerInSubgroupSuggestions)(t.parentGroupId, t.subgroupSuggestions, t.oldOwner, t.newOwner));
        break;
      case A.GROUP_ACTIONS.MEMBER_ADD_MODE:
        if ((0, u.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
          U.push((0, h.persistGroupMetadata)(f, {
            memberAddMode: t.memberAddMode
          }, a));
        }
        break;
      case A.GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED:
        U.push((0, h.persistGroupMetadata)(f, {
          generalChatAutoAddDisabled: true
        }, a));
        break;
      default:
        __LOG__(4, undefined, new Error(), undefined, ["groups"])`unhandled group notif action in handleGroupActionMD for action ${JSON.stringify(t)}`;
    }
    yield Promise.all(U);
    __LOG__(2, undefined, undefined, undefined, ["groups"])`finished all storageTasks`;
  })).apply(this, arguments);
}
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, a.default)(function* (e, t) {
    if (e.isParentGroup === true && e.allowNonAdminSubGroupCreation !== true && (0, _.memberSuggestedGroupsEnabled)()) {
      const e = yield (0, g.getJoinedSubgroups)(t);
      if (e[0]) {
        (0, f.frontendFireAndForget)("queryAndUpdateSubgroupSuggestions", {
          id: t,
          subgroupId: e[0]
        });
      }
    }
  })).apply(this, arguments);
}
function G(e, t) {
  if (t) {
    return (0, S.markGroupParticipantStaleJob)(e);
  } else {
    return (0, M.sendQueryGroup)(e);
  }
}