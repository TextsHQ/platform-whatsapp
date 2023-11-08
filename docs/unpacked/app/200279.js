var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGroupNotification = function (e) {
  const t = F.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  const n = t.success;
  const r = Boolean(n.offline) && !P.OfflineMessageHandler.isResumeFromRestartComplete();
  if ((0, M.isGroupNotificationOptimizationEligible)(n, r) && r) {
    return (0, M.handleGroupNotificationV2)(n, r);
  }
  return (0, b.handleMessage)(n.chatId.toString(), r, (0, i.default)(function* () {
    yield Promise.all(n.actions.map(e => function () {
      return H.apply(this, arguments);
    }(n, e, r)));
    return (0, s.wap)("ack", {
      to: (0, p.GROUP_JID)(n.chatId),
      id: (0, s.CUSTOM_STRING)(n.externalId),
      class: "notification",
      type: "w:gp2",
      participant: n.author ? (0, p.USER_JID)(n.author) : s.DROP_ATTR
    });
  }));
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = r(require("./670983.js"));
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./287461.js");
var c = require("./827467.js");
var d = require("./359987.js");
var p = require("./355813.js");
var f = require("./174834.js");
var _ = require("./588090.js");
var g = require("./800321.js");
var m = require("./529921.js");
var h = require("./113269.js");
var y = require("./429267.js");
var E = require("./614198.js");
var S = require("./862159.js");
var v = require("./143375.js");
var T = require("./111070.js");
var M = require("./225390.js");
var A = require("./854379.js");
var b = require("./412985.js");
var C = require("./700846.js");
var P = require("./359484.js");
var O = require("./130207.js");
var I = require("./61229.js");
var R = require("./98742.js");
var N = require("./439446.js");
var D = require("./193970.js");
var w = require("./459857.js");
function L(e) {
  return e.mapChildrenWithTag("participant", e => {
    const t = e.attrEnumOrDefault("type", m.GROUP_PARTICIPANT_TYPES, "participant");
    const n = e.maybeAttrLidUserJid("lid");
    const r = e.maybeAttrPhoneUserJid("phone_number");
    return {
      displayName: e.maybeAttrString("display_name"),
      id: (0, A.userJidToUserWid)(e.attrUserJid("jid")),
      isSuperAdmin: t === m.GROUP_PARTICIPANT_TYPES.superadmin,
      isAdmin: t === m.GROUP_PARTICIPANT_TYPES.admin || t === m.GROUP_PARTICIPANT_TYPES.superadmin,
      lid: n != null ? (0, A.userJidToUserWid)(n) : null,
      phoneNumber: r != null ? (0, A.userJidToUserWid)(r) : null
    };
  });
}
function k(e) {
  return {
    prevVersion: e.hasAttr("prev_v_id") ? e.attrInt("prev_v_id") : undefined,
    version: e.hasAttr("v_id") ? e.attrInt("v_id") : undefined
  };
}
const G = {
  invite: S.ADD_REASON.INVITE,
  linked_group_join: S.ADD_REASON.LINKED_GROUP_JOIN,
  auto_add: S.ADD_REASON.AUTO_ADD,
  default_sub_group_admin_add: S.ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD,
  default_sub_group_promote: S.ADD_REASON.DEFAULT_SUBGROUP_PROMOTE,
  invite_auto_add: S.ADD_REASON.INVITE_AUTO_ADD,
  general_chat_auto_add: S.ADD_REASON.GENERAL_CHAT_AUTO_ADD
};
const U = {
  default_sub_group_demote: S.REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE
};
const x = {
  invite_link: O.RequestMethod.InviteLink,
  linked_group_join: O.RequestMethod.LinkedGroupJoin,
  non_admin_add: O.RequestMethod.NonAdminAdd
};
const B = {
  approved: S.REVOKED_SUB_GROUP_SUGGESTION_REASON.APPROVED,
  rejected: S.REVOKED_SUB_GROUP_SUGGESTION_REASON.REJECTED,
  cancelled: S.REVOKED_SUB_GROUP_SUGGESTION_REASON.CANCELLED
};
const F = new l.WapParser("groupNotificationParser", e => {
  e.assertTag("notification");
  if (e.hasAttr("to")) {
    e.assertAttr("to", (0, w.assertGetMe)().toJid());
  }
  const t = (0, A.groupJidToWid)(e.attrGroupJid("from"));
  const n = e.hasAttr("participant") ? (0, A.userJidToUserWid)(e.attrUserJid("participant")) : null;
  let r = null;
  try {
    const t = e.maybeAttrPhoneUserJid("participant_pn");
    r = t != null ? (0, A.userJidToUserWid)(t) : null;
  } catch (e) {
    __LOG__(4, undefined, new Error())`Known error T150827746: ${e.toString()}`;
  }
  const i = e.attrTime("t");
  const s = !!e.hasAttr("addressing_mode") && e.attrString("addressing_mode") === "lid";
  function l(e) {
    return {
      jid: e.hasAttr("jid") ? (0, A.groupJidToWid)(e.attrGroupJid("jid")) : undefined
    };
  }
  const c = e.mapChildren(r => {
    var c;
    const d = r.tag();
    switch (d) {
      case T.GROUP_NOTIFICATION_TAG.CREATE:
        return function (e) {
          var t;
          var n;
          var r;
          var i;
          const a = e.child("group");
          const o = L(a);
          const s = function (e) {
            if (e.hasChild("description")) {
              const t = e.child("description");
              if (t.hasChild("body")) {
                const e = t.child("body");
                if (e.hasContent()) {
                  return {
                    content: e.contentString(),
                    id: t.attrString("id")
                  };
                }
              }
            }
            return null;
          }(a);
          const l = function (e) {
            if (e.hasChild("ephemeral")) {
              const t = e.child("ephemeral");
              if (t.hasAttr("expiration")) {
                return {
                  ephemeralDuration: t.attrInt("expiration")
                };
              }
            }
            return null;
          }(a);
          const u = (0, y.extractLinkedParent)(a);
          const c = {
            subject: a.attrString("subject"),
            restrict: a.hasChild("locked"),
            announce: a.hasChild("announcement"),
            noFrequentlyForwarded: a.hasChild("no_frequently_forwarded"),
            ephemeralDuration: l ? l.ephemeralDuration : undefined,
            owner: a.hasAttr("creator") ? (0, A.userJidToUserWid)(a.attrUserJid("creator")) : undefined,
            creation: a.attrTime("creation"),
            participants: o,
            desc: s ? s.content : undefined,
            descId: s ? s.id : undefined,
            subjectOwner: a.hasAttr("s_o") ? (0, A.userJidToUserWid)(a.attrUserJid("s_o")) : undefined,
            subjectTime: a.hasAttr("s_t") ? a.attrTime("s_t") : undefined,
            support: a.hasChild("support"),
            pvId: a.attrInt("p_v_id"),
            isParentGroup: a.hasChild("parent"),
            isParentGroupClosed: ((t = a.maybeChild("parent")) === null || t === undefined ? undefined : t.maybeAttrString("default_membership_approval_mode")) === "request_required",
            parentGroup: u ? u.parentGroup : undefined,
            defaultSubgroup: a.hasChild("default_sub_group"),
            generalSubgroup: a.hasChild("general_chat"),
            size: a.hasAttr("size") ? a.attrInt("size") : undefined,
            incognito: a.hasChild("incognito"),
            membershipApprovalMode: (a == null || (n = a.maybeChild("membership_approval_mode")) === null || n === undefined || (r = n.maybeChild("group_join")) === null || r === undefined ? undefined : r.maybeAttrString("state")) === "on",
            allowNonAdminSubGroupCreation: a == null ? undefined : a.hasChild("allow_non_admin_sub_group_creation"),
            generalChatAutoAddDisabled: (i = e.hasChild("auto_add_disabled")) !== null && i !== undefined ? i : undefined
          };
          return {
            actionType: T.GROUP_NOTIFICATION_TAG.CREATE,
            reason: e.hasAttr("reason") ? G[e.attrString("reason")] : null,
            contextGroupId: e.hasAttr("context_group_jid") ? (0, A.groupJidToWid)(e.attrGroupJid("context_group_jid")) : null,
            groupInfo: c
          };
        }(r);
      case T.GROUP_NOTIFICATION_TAG.ADD:
        return (0, a.default)((0, a.default)({
          actionType: S.GROUP_ACTIONS.ADD,
          participants: L(r)
        }, k(r)), {}, {
          reason: r.hasAttr("reason") ? G[r.attrString("reason")] : null,
          isLidAddressingMode: s
        });
      case T.GROUP_NOTIFICATION_TAG.DELETE:
        {
          const e = {
            integrity_delete_parent: S.DELETE_REASON.INTEGRITY_DELETE_PARENT,
            delete_parent: S.DELETE_REASON.DELETE_PARENT
          };
          return {
            actionType: S.GROUP_ACTIONS.DELETE,
            reason: r.hasAttr("reason") ? e[r.attrString("reason")] : null,
            groupDatas: [{
              id: t,
              subject: ""
            }]
          };
        }
      case T.GROUP_NOTIFICATION_TAG.REMOVE:
        return (0, a.default)((0, a.default)({
          actionType: T.GROUP_NOTIFICATION_TAG.REMOVE,
          participants: L(r)
        }, k(r)), {}, {
          reason: r.hasAttr("reason") ? U[r.attrString("reason")] : null,
          isLidAddressingMode: s
        });
      case T.GROUP_NOTIFICATION_TAG.PROMOTE:
        return (0, a.default)({
          actionType: T.GROUP_NOTIFICATION_TAG.PROMOTE,
          participants: L(r)
        }, k(r));
      case T.GROUP_NOTIFICATION_TAG.DEMOTE:
        return (0, a.default)({
          actionType: T.GROUP_NOTIFICATION_TAG.DEMOTE,
          participants: L(r)
        }, k(r));
      case T.GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE:
        return (0, a.default)((0, a.default)({
          actionType: T.GROUP_NOTIFICATION_TAG.LINKED_GROUP_PROMOTE,
          participants: L(r)
        }, k(r)), l(r));
      case T.GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE:
        return (0, a.default)((0, a.default)({
          actionType: T.GROUP_NOTIFICATION_TAG.LINKED_GROUP_DEMOTE,
          participants: L(r)
        }, k(r)), l(r));
      case T.GROUP_NOTIFICATION_TAG.MODIFY:
        return (0, a.default)({
          actionType: S.GROUP_ACTIONS.MODIFY,
          participants: L(r)
        }, k(r));
      case T.GROUP_NOTIFICATION_TAG.SUBJECT:
        return {
          actionType: S.GROUP_ACTIONS.SUBJECT,
          subject: r.attrString("subject"),
          s_o: r.hasAttr("s_o") ? (0, A.userJidToUserWid)(r.attrUserJid("s_o")) : null,
          s_t: r.hasAttr("s_t") ? r.attrTime("s_t") : null
        };
      case T.GROUP_NOTIFICATION_TAG.DESC:
        if (r.hasChild("delete")) {
          return {
            actionType: S.GROUP_ACTIONS.DESC_REMOVE,
            descId: r.attrString("id")
          };
        } else {
          return {
            actionType: S.GROUP_ACTIONS.DESC_ADD,
            descId: r.attrString("id"),
            desc: r.hasChild("body") ? r.child("body").contentString() : null,
            descTime: i
          };
        }
      case T.GROUP_NOTIFICATION_TAG.SUSPENDED:
        return {
          actionType: S.GROUP_ACTIONS.SUSPEND,
          value: true
        };
      case T.GROUP_NOTIFICATION_TAG.UNSUSPENDED:
        return {
          actionType: S.GROUP_ACTIONS.SUSPEND,
          value: false
        };
      case T.GROUP_NOTIFICATION_TAG.LOCKED:
        return {
          actionType: S.GROUP_ACTIONS.RESTRICT,
          value: true,
          threshold: (c = r.maybeAttrString("threshold")) !== null && c !== undefined ? c : undefined
        };
      case T.GROUP_NOTIFICATION_TAG.UNLOCKED:
        return {
          actionType: S.GROUP_ACTIONS.RESTRICT,
          value: false
        };
      case T.GROUP_NOTIFICATION_TAG.ANNOUNCE:
        return {
          actionType: S.GROUP_ACTIONS.ANNOUNCE,
          value: true
        };
      case T.GROUP_NOTIFICATION_TAG.NOT_ANNOUNCE:
        return {
          actionType: S.GROUP_ACTIONS.ANNOUNCE,
          value: false
        };
      case T.GROUP_NOTIFICATION_TAG.NO_FREQUENTLY_FORWARDED:
        return {
          actionType: S.GROUP_ACTIONS.NO_FORWARD,
          value: true
        };
      case T.GROUP_NOTIFICATION_TAG.FREQUENTLY_FORWARDED_OK:
        return {
          actionType: S.GROUP_ACTIONS.NO_FORWARD,
          value: false
        };
      case T.GROUP_NOTIFICATION_TAG.INVITE:
        return {
          actionType: S.GROUP_ACTIONS.INVITE_CODE,
          code: r.attrString("code")
        };
      case T.GROUP_NOTIFICATION_TAG.EPHEMERAL:
        return {
          actionType: S.GROUP_ACTIONS.EPHEMERAL,
          duration: r.attrInt("expiration")
        };
      case T.GROUP_NOTIFICATION_TAG.NOT_EPHEMERAL:
        return {
          actionType: S.GROUP_ACTIONS.EPHEMERAL,
          duration: 0
        };
      case T.GROUP_NOTIFICATION_TAG.REVOKE_INVITE:
        return {
          actionType: S.GROUP_ACTIONS.REVOKE_INVITE,
          participants: r.mapChildrenWithTag("participant", e => ({
            id: (0, A.userJidToUserWid)(e.attrUserJid("jid")),
            expiration: e.attrInt("expiration")
          }))
        };
      case T.GROUP_NOTIFICATION_TAG.GROWTH_UNLOCKED:
        return {
          actionType: S.GROUP_ACTIONS.GROWTH_UNLOCKED
        };
      case T.GROUP_NOTIFICATION_TAG.GROWTH_LOCKED:
        return {
          actionType: S.GROUP_ACTIONS.GROWTH_LOCKED,
          expiration: r.attrInt("expiration"),
          type: r.attrString("type")
        };
      case T.GROUP_NOTIFICATION_TAG.LINK:
        {
          const e = r.attrString("link_type");
          return {
            actionType: {
              sub_group: S.GROUP_ACTIONS.SUB_GROUP_LINK,
              parent_group: S.GROUP_ACTIONS.PARENT_GROUP_LINK,
              sibling_group: S.GROUP_ACTIONS.SIBLING_GROUP_LINK
            }[e],
            groupDatas: r.mapChildrenWithTag("group", e => ({
              id: (0, A.groupJidToWid)(e.attrGroupJid("jid")),
              subject: e.attrString("subject"),
              subjectTime: e.attrInt("s_t")
            }))
          };
        }
      case T.GROUP_NOTIFICATION_TAG.UNLINK:
        {
          const e = r.attrString("unlink_type");
          const t = r.hasAttr("unlink_reason") ? r.attrString("unlink_reason") : null;
          const n = r.mapChildrenWithTag("group", e => ({
            id: (0, A.groupJidToWid)(e.attrGroupJid("jid")),
            subject: e.attrString("subject"),
            subjectTime: e.attrInt("s_t")
          }));
          if (e === "parent_group") {
            if (t === S.DELETE_REASON.DELETE_PARENT) {
              return {
                actionType: S.GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK,
                groupDatas: n
              };
            }
            if (t === S.DELETE_REASON.INTEGRITY_DELETE_PARENT) {
              return {
                actionType: S.GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK,
                groupDatas: n
              };
            }
          } else if (e === "sub_group") {
            if (t === S.DELETE_REASON.DELETE_PARENT) {
              return {
                actionType: S.GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK,
                groupDatas: n
              };
            }
            if (t === S.DELETE_REASON.INTEGRITY_DELETE_PARENT) {
              return {
                actionType: S.GROUP_ACTIONS.INTEGRITY_SUB_GROUP_UNLINK,
                groupDatas: n
              };
            }
          }
          return {
            actionType: {
              sub_group: S.GROUP_ACTIONS.SUB_GROUP_UNLINK,
              parent_group: S.GROUP_ACTIONS.PARENT_GROUP_UNLINK,
              sibling_group: S.GROUP_ACTIONS.SIBLING_GROUP_UNLINK
            }[e],
            groupDatas: n
          };
        }
      case T.GROUP_NOTIFICATION_TAG.MEMBERSHIP_APPROVAL_MODE:
        var p;
        return {
          actionType: S.GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE,
          value: ((p = r.child("group_join")) === null || p === undefined ? undefined : p.attrString("state")) === "on",
          triggered: r.hasAttr("triggered") ? r.attrString("triggered") : undefined
        };
      case T.GROUP_NOTIFICATION_TAG.MEMBERSHIP_APPROVAL_REQUEST:
        var f;
        return {
          actionType: S.GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST,
          requestMethod: (f = x[r.attrString("request_method")]) !== null && f !== undefined ? f : O.RequestMethod.InviteLink,
          parentGroupId: r.hasAttr("parent_group_jid") ? (0, A.groupJidToWid)(r.attrGroupJid("parent_group_jid")) : undefined
        };
      case T.GROUP_NOTIFICATION_TAG.ALLOW_ADMIN_REPORTS:
        return {
          actionType: S.GROUP_ACTIONS.ALLOW_ADMIN_REPORTS,
          shouldSkipGenMsg: !(0, u.getABPropConfigValue)("report_to_admin_kill_switch"),
          value: true,
          author: n,
          triggered: r.hasAttr("triggered") ? r.attrString("triggered") : undefined
        };
      case T.GROUP_NOTIFICATION_TAG.NOT_ALLOW_ADMIN_REPORTS:
        return {
          actionType: S.GROUP_ACTIONS.ALLOW_ADMIN_REPORTS,
          shouldSkipGenMsg: !(0, u.getABPropConfigValue)("report_to_admin_kill_switch"),
          value: false,
          author: n,
          triggered: r.hasAttr("triggered") ? r.attrString("triggered") : undefined
        };
      case T.GROUP_NOTIFICATION_TAG.REPORTS:
        return {
          actionType: S.GROUP_ACTIONS.ADMIN_REPORT_RECIEVED,
          shouldSkipGenMsg: true,
          value: i
        };
      case T.GROUP_NOTIFICATION_TAG.CREATED_MEMBERSHIP_REQUESTS:
        var _;
        return {
          actionType: S.GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS,
          requestMethod: (_ = x[r.attrString("request_method")]) !== null && _ !== undefined ? _ : O.RequestMethod.InviteLink,
          parentGroupId: r.hasAttr("parent_group_jid") ? (0, A.groupJidToWid)(r.attrGroupJid("parent_group_jid")) : undefined,
          requests: r.hasChildren() ? r.mapChildrenWithTag("requested_user", e => (0, A.userJidToUserWid)(e.attrUserJid("jid"))) : [(0, o.default)(n, "author")],
          skipGenMsg: r.maybeAttrString("suppress_sys_msg") === "true"
        };
      case T.GROUP_NOTIFICATION_TAG.REVOKED_MEMBERSHIP_REQUESTS:
        return {
          actionType: S.GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS,
          requests: r.mapChildrenWithTag("participant", e => (0, A.userJidToUserWid)(e.attrUserJid("jid")))
        };
      case T.GROUP_NOTIFICATION_TAG.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
        return {
          actionType: S.GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
          value: true
        };
      case T.GROUP_NOTIFICATION_TAG.NOT_ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
        return {
          actionType: S.GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
          value: false
        };
      case T.GROUP_NOTIFICATION_TAG.CREATED_SUBGROUP_SUGGESTION:
        return (0, a.default)({
          actionType: S.GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION,
          parentGroupId: t
        }, function (e) {
          var t;
          const n = e.child("sub_group_suggestion");
          const r = (0, A.groupJidToWid)(n.attrGroupJid("jid"));
          const i = (0, A.userJidToUserWid)(n.attrUserJid("creator"));
          const a = n.attrTime("creation");
          const o = n.child("subject").contentString();
          let s;
          let l;
          let u;
          if (n.hasChild("description")) {
            const e = n.child("description");
            if (e.hasChild("body")) {
              const t = e.child("body");
              if (t.hasContent()) {
                s = t.contentString();
              }
            }
          }
          if (n.hasChild("is_existing_group")) {
            const e = n.child("is_existing_group");
            if (e.hasContent()) {
              l = e.contentString() === "true";
            }
          }
          if (n.hasChild("participant_count")) {
            const e = n.child("participant_count");
            if (e.hasContent()) {
              u = e.contentInt();
            }
          }
          return {
            id: r,
            owner: i,
            subject: o,
            description: s,
            t: a,
            isExistingGroup: (t = l) !== null && t !== undefined && t,
            participantCount: u
          };
        }(r));
      case T.GROUP_NOTIFICATION_TAG.REVOKED_SUB_GROUP_SUGGESTIONS:
        return {
          actionType: S.GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS,
          parentGroupId: t,
          subgroupSuggestions: r.mapChildrenWithTag("sub_group_suggestion", e => ({
            id: (0, A.groupJidToWid)(e.attrGroupJid("jid")),
            owner: (0, A.userJidToUserWid)(e.attrUserJid("creator")),
            reason: e.hasAttr("reason") ? B[e.attrString("reason")] : undefined
          }))
        };
      case T.GROUP_NOTIFICATION_TAG.CHANGE_NUMBER:
        return {
          actionType: S.GROUP_ACTIONS.SUBGROUP_SUGGESTIONS_CHANGE_NUMBER,
          subgroupSuggestions: r.mapChildrenWithTag("sub_group_suggestion", e => (0, A.groupJidToWid)(e.attrGroupJid("jid"))),
          parentGroupId: t,
          oldOwner: (0, A.userJidToUserWid)(e.attrUserJid("participant")),
          newOwner: (0, A.userJidToUserWid)(r.attrUserJid("jid"))
        };
      case T.GROUP_NOTIFICATION_TAG.MEMBER_ADD_MODE:
        if ((0, u.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
          return {
            actionType: S.GROUP_ACTIONS.MEMBER_ADD_MODE,
            memberAddMode: R.MEMBER_ADD_MODE.cast(r.contentString())
          };
        }
        throw e.createParseError(`Unrecognized group action ${d}`);
      case T.GROUP_NOTIFICATION_TAG.AUTO_ADD_DISABLED:
        return {
          actionType: S.GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED
        };
      default:
        throw e.createParseError(`Unrecognized group action ${d}`);
    }
  });
  return {
    externalId: e.attrString("id"),
    chatId: t,
    isLidAddressingMode: s,
    author: n,
    authorPhoneNumber: r,
    ts: e.attrTime("t"),
    pushname: e.hasAttr("notify") ? e.attrString("notify") : null,
    offline: e.hasAttr("offline") ? e.attrString("offline") : null,
    actions: c
  };
});
function j() {
  return Y.apply(this, arguments);
}
function Y() {
  return (Y = (0, i.default)(function* (e) {
    const [t, n] = yield Promise.all([(0, R.getGroupMetadataTable)().get(e.toString()), (0, I.getChatTable)().get(e.toString(), false)]);
    return !!t || !!n && !!n.t;
  })).apply(this, arguments);
}
function K() {
  return W.apply(this, arguments);
}
function W() {
  return (W = (0, i.default)(function* (e, t) {
    if (t.participants.some(e => {
      let {
        id: t
      } = e;
      return t.isLid();
    }) && (yield (0, T.getIsIncognitoCagById)(e.chatId)) === true) {
      return t.participants.filter(e => {
        let {
          id: t
        } = e;
        return !t.isLid();
      });
    } else {
      return t.participants;
    }
  })).apply(this, arguments);
}
function V(e) {
  let {
    author: t,
    authorPhoneNumber: n
  } = e;
  if (t != null) {
    return {
      id: t,
      phoneNumber: n
    };
  } else {
    return null;
  }
}
function H() {
  return (H = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    if (!t) {
      return;
    }
    __LOG__(2, undefined, undefined, undefined, ["groups"])`handle action ${t.actionType}`;
    const r = [];
    try {
      yield (0, _.createOrReplaceDisplayNamesAndLidPnMappings)([V(e)].concat(t.participants), !n);
      if (t.actionType === T.GROUP_NOTIFICATION_TAG.CREATE) {
        const i = (0, a.default)((0, a.default)({}, t.groupInfo), {}, {
          id: e.chatId,
          isLidAddressingMode: e.isLidAddressingMode
        });
        const o = J(e, t, i);
        const s = yield j(i.id);
        __LOG__(2, undefined, undefined, undefined, ["groups"])`group id ${i.id} exists in storage = ${s}`;
        yield z(e, i, n, o, t.reason === "invite");
        __LOG__(2, undefined, undefined, undefined, ["groups"])`handleGroupCreation done for group id ${i.id}`;
        const l = yield (0, E.genMsgsForGroupCreation)(e, i, s, o);
        r.push(...l);
      } else if (t.actionType === S.GROUP_ACTIONS.ADD) {
        const i = yield (0, T.notAlreadyInGroup)(e.chatId, t.participants);
        if (yield (0, N.shouldTriggerQueryGroupInfo)(e.chatId, t)) {
          yield (0, h.queryAndUpdateGroupMetadataById)(e.chatId);
        } else {
          yield (0, D.updateDBForGroupAction)(e, t, n);
          $(e, t);
          if (i.length || t.reason) {
            const n = yield K(e, t);
            if (n.length > 0) {
              r.push(yield (0, E.genGroupNotificationMsg)(e, (0, a.default)((0, a.default)({}, t), {}, {
                participants: n
              })));
            }
          }
        }
      } else if (t.actionType === S.GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK || t.actionType === S.GROUP_ACTIONS.INTEGRITY_SUB_GROUP_UNLINK) ;else if (t.actionType === S.GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK || t.actionType === S.GROUP_ACTIONS.DELETE_PARENT_SUB_GROUP_UNLINK) ;else if (t.actionType === S.GROUP_ACTIONS.DELETE && t.reason === S.DELETE_REASON.INTEGRITY_DELETE_PARENT) {
        if ((0, f.communitiesEnabled)()) {
          (yield (0, E.genIntegrityDeleteParentNotificationMsgs)(e, t)).forEach(e => {
            r.push(e);
          });
        }
        yield (0, D.updateDBForGroupAction)(e, t, n);
        $(e, t);
      } else if (t.actionType === S.GROUP_ACTIONS.DESC_ADD || t.actionType === S.GROUP_ACTIONS.DESC_REMOVE) {
        r.push(yield (0, E.genDescriptionNotificationMsg)(e, t));
        yield (0, D.updateDBForGroupAction)(e, t, n);
        $(e, t);
      } else if (t.actionType === S.GROUP_ACTIONS.DELETE && t.reason === S.DELETE_REASON.DELETE_PARENT) {
        if ((0, f.communitiesEnabled)()) {
          const t = yield (0, E.generateDeleteParentNotificationMessages)(e);
          if (t.length === 0) {
            return;
          }
          t.forEach(e => {
            r.push(e);
          });
        }
        yield (0, D.updateDBForGroupAction)(e, t, n);
        $(e, t);
      } else {
        let i = false;
        if (t.actionType === S.GROUP_ACTIONS.REMOVE && (yield (0, N.shouldTriggerQueryGroupInfo)(e.chatId, t))) {
          i = true;
          (0, h.queryAndUpdateGroupMetadataById)(e.chatId);
        }
        if (!i) {
          const i = yield (0, T.shouldSkipGenMsg)(e, t);
          yield (0, D.updateDBForGroupAction)(e, t, n);
          $(e, t);
          if (!i) {
            const n = yield (0, c.isCurrentUserGroupAdmin)(e.chatId.toString());
            if (t.actionType === S.GROUP_ACTIONS.REMOVE) {
              const i = yield K(e, t);
              if (i.length > 0) {
                r.push(yield (0, E.genGroupNotificationMsg)((0, a.default)((0, a.default)({}, e), {}, {
                  isAdmin: n
                }), (0, a.default)((0, a.default)({}, t), {}, {
                  participants: i
                })));
              }
            } else if (t.actionType === S.GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION) {
              const n = yield (0, E.genCreatedSubgroupSuggestionNotificationMsg)(e, t);
              if (n) {
                r.push(n);
              }
            } else if (t.actionType === S.GROUP_ACTIONS.PROMOTE || t.actionType === S.GROUP_ACTIONS.DEMOTE || t.actionType === S.GROUP_ACTIONS.MODIFY || t.actionType === S.GROUP_ACTIONS.LINKED_GROUP_PROMOTE || t.actionType === S.GROUP_ACTIONS.LINKED_GROUP_DEMOTE) {
              const i = yield K(e, t);
              if (i.length > 0) {
                r.push(yield (0, E.genGroupNotificationMsg)((0, a.default)((0, a.default)({}, e), {}, {
                  isAdmin: n
                }), (0, a.default)((0, a.default)({}, t), {}, {
                  participants: i
                })));
              }
            } else if (t.actionType === S.GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION) {
              const n = yield (0, E.genAllowNonAdminSubGroupCreationNotificationMsg)(e, t);
              if (n) {
                r.push(n);
              }
            } else {
              r.push(yield (0, E.genGroupNotificationMsg)((0, a.default)((0, a.default)({}, e), {}, {
                isAdmin: n
              }), t));
            }
            if (t.actionType === S.GROUP_ACTIONS.PARENT_GROUP_LINK && (0, u.getABPropConfigValue)("group_join_request_m0_anyone_can_join")) {
              r.push(yield (0, E.genParentGroupLinkMembershipApprovalNotif)(e, t.groupDatas, n));
            }
          }
        }
      }
      if (n) {
        (0, g.getMessageCache)().addMessages(r.map(e => ({
          msg: e
        })), false);
      } else {
        yield Promise.all(r.map(e => (0, C.handleSingleMsg)(e.from, e)));
      }
    } catch (e) {
      __LOG__(2)`handleGroupNotification: failed with ${e}`;
    }
  })).apply(this, arguments);
}
function $(e, t) {
  return (0, d.frontendSendAndReceive)("updateModelForGroupAction", {
    groupMeta: e,
    groupAction: t
  });
}
function z() {
  return q.apply(this, arguments);
}
function q() {
  return (q = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    let r = arguments.length > 3 ? arguments[3] : undefined;
    let i = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
    yield (0, v.handleGroupCreation)(e, t, n, i);
    if (r != null) {
      yield (0, D.updateDBForGroupAction)(e, r, n);
      $(e, r);
    }
  })).apply(this, arguments);
}
function J(e, t, n) {
  if (!(0, w.isMeAccount)(e.author) || t.reason === S.ADD_REASON.INVITE_AUTO_ADD) {
    var r;
    const e = (r = n.participants.find(e => e.id.equals((0, w.getMaybeMeUser)()))) === null || r === undefined ? undefined : r.isAdmin;
    return {
      actionType: S.GROUP_ACTIONS.ADD,
      version: n.pvId,
      participants: [{
        id: n.defaultSubgroup === true && n.incognito === true || n.isLidAddressingMode === true ? (0, w.getMaybeMeLidUser)() : (0, w.getMaybeMeUser)(),
        isAdmin: e,
        isSuperAdmin: false
      }],
      reason: t.reason,
      parentGroupId: n.parentGroup,
      isParentGroup: n.isParentGroup,
      contextGroupId: t.contextGroupId,
      groupName: n.subject,
      defaultSubgroup: n.defaultSubgroup,
      generalSubgroup: n.generalSubgroup
    };
  }
}