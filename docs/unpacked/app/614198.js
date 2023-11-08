var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genAllowNonAdminSubGroupCreationNotificationMsg = function () {
  return N.apply(this, arguments);
};
exports.genCreatedSubgroupSuggestionNotificationMsg = function () {
  return D.apply(this, arguments);
};
exports.genDescriptionNotificationMsg = function () {
  return R.apply(this, arguments);
};
exports.genGroupCreationMsg = v;
exports.genGroupEphemeralSettingMsg = P;
exports.genGroupNotificationMsg = b;
exports.genGroupPicChangeNotificationMsg = function (e, t, n, r) {
  return {
    type: "gp2",
    self: "in",
    subtype: "picture",
    t: n,
    author: r,
    body: t,
    recipients: [],
    from: e,
    id: new m.default({
      remote: e,
      fromMe: false,
      id: m.default.newId_DEPRECATED()
    })
  };
};
exports.genInitialPhashMismatchMsg = function (e, t) {
  return {
    id: new m.default({
      remote: e,
      fromMe: false,
      id: m.default.newId_DEPRECATED()
    }),
    from: e,
    recipients: [],
    self: "in",
    subtype: "initial_pHash_mismatch",
    t,
    type: "gp2"
  };
};
exports.genIntegrityDeleteParentNotificationMsgs = function () {
  return I.apply(this, arguments);
};
exports.genMsgsForGroupCreation = function () {
  return T.apply(this, arguments);
};
exports.genParentGroupLinkMembershipApprovalNotif = L;
exports.generateDeleteParentNotificationMessages = function () {
  return O.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./827467.js");
var u = require("./174834.js");
var c = require("./389293.js");
var d = require("./35665.js");
var p = require("./185212.js");
var f = require("./242382.js");
var _ = require("./862159.js");
var g = require("./97858.js");
var m = r(require("./565754.js"));
var h = require("./628199.js");
var y = require("./98742.js");
var E = require("./459857.js");
var S = require("./669050.js");
function v(e, t) {
  var n;
  var r;
  var i;
  const {
    chatId: a
  } = e;
  let o = (n = (r = t.owner) !== null && r !== undefined ? r : e.author) !== null && n !== undefined ? n : (0, E.getMaybeMeUser)();
  const s = t.participants.some(e => {
    let {
      isAdmin: t,
      id: n
    } = e;
    return (0, E.isMeAccount)(n) && t;
  });
  const l = t.subject;
  let c;
  let d;
  var p;
  if ((0, u.communitiesEnabled)() && t.defaultSubgroup === true) {
    c = "community_create";
    if (t.parentGroup) {
      d = [t.parentGroup, t.subject];
    }
    o = (p = t.owner) !== null && p !== undefined ? p : e.author;
  } else if (t.generalSubgroup === true && s && (0, u.communityGeneralChatUIEnabled)()) {
    var f;
    c = "general_chat_add";
    d = ["created", t.subject];
    o = (f = t.owner) !== null && f !== undefined ? f : e.author;
  } else {
    var _;
    o = (_ = t.owner) !== null && _ !== undefined ? _ : e.author;
    if (t.parentGroup && t.participants.length === 1 && (0, u.communityShortGroupCreationEnabled)()) {
      d = [t.parentGroup, t.parentGroupSubject, t.subject];
      c = "empty_subgroup_create";
    } else {
      c = "create";
    }
  }
  return {
    id: new m.default({
      remote: a,
      fromMe: false,
      participant: o,
      id: w(e, c)
    }),
    author: o,
    body: l,
    from: a,
    recipients: [],
    self: "in",
    subtype: c,
    t: (i = t.creation) !== null && i !== undefined ? i : e.ts,
    type: "gp2",
    templateParams: d
  };
}
function T() {
  return (T = (0, a.default)(function* (e, t, n, r) {
    const i = t.participants.find(e => {
      let {
        isAdmin: t,
        id: n
      } = e;
      return (0, E.isMeAccount)(n) && t;
    });
    return (yield Promise.all([n || i || !(0, g.cagReactionsReceive)() || t.defaultSubgroup !== true || t.incognito !== true ? [] : [(0, c.genNotificationMsg)(t.id, {
      type: "notification_template",
      subtype: "cag_masked_thread_created",
      templateParams: []
    })], n ? [] : [v(e, t)], function () {
      const {
        ephemeralDuration: n
      } = t;
      if (e.author && e.ts != null && n != null && n > 0) {
        return [P(e.chatId, e.ts, e.author, n)];
      } else {
        return [];
      }
    }(), function () {
      return o.apply(this, arguments);
    }(), function () {
      return d.apply(this, arguments);
    }()])).flat();
    function o() {
      return (o = (0, a.default)(function* () {
        const r = [];
        const {
          defaultSubgroup: i,
          parentGroup: a
        } = t;
        if (a != null && i !== true && !n && (0, u.communitiesEnabled)()) {
          const n = {
            actionType: _.GROUP_ACTIONS.PARENT_GROUP_LINK,
            groupDatas: [{
              id: a,
              subject: ""
            }]
          };
          if (!(0, u.communityRichSystemMessageEnabled)()) {
            r.push(yield b(e, n, t.creation));
          }
          if ((0, s.getABPropConfigValue)("group_join_request_m0_anyone_can_join") || (0, s.getABPropConfigValue)("group_join_request_m2_setting")) {
            const t = yield (0, l.isCurrentUserGroupAdmin)(e.chatId.toString());
            r.push(yield L(e, n.groupDatas, t));
          }
        }
        return r;
      })).apply(this, arguments);
    }
    function d() {
      return (d = (0, a.default)(function* () {
        if (r == null) {
          return [];
        } else {
          return [yield b(e, r)];
        }
      })).apply(this, arguments);
    }
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, a.default)(function* (e, t) {
    const n = e.parentGroupId;
    if (!n) {
      return false;
    }
    const r = yield (0, p.getGroupMetadata)(n);
    return !r || r != null && (yield (0, d.getJoinedSubgroups)((0, S.createWid)(r.id))).length <= t;
  })).apply(this, arguments);
}
function b() {
  return C.apply(this, arguments);
}
function C() {
  return (C = (0, a.default)(function* (e, t, n) {
    const {
      chatId: r,
      isAdmin: i = false
    } = e;
    let a;
    let o = e.author && (0, S.toUserWid)(e.author) || undefined;
    let c = null;
    let d = [];
    let f = o;
    let g = t.actionType;
    let v = null;
    const T = t.parentGroupId;
    switch (t.actionType) {
      case _.GROUP_ACTIONS.SUBJECT:
        c = t.subject;
        break;
      case _.GROUP_ACTIONS.MODIFY:
        d = t.participants.map(e => {
          let {
            id: t
          } = e;
          return t;
        });
        break;
      case _.GROUP_ACTIONS.ADD:
        var A;
        if (t.reason === _.ADD_REASON.INVITE) {
          if (T && t.participants.some(e => {
            let {
              id: t
            } = e;
            return (0, E.isMeAccount)(t);
          }) && (0, u.communitiesEnabled)() && (0, u.communityRichSystemMessageEnabled)()) {
            if (t.generalSubgroup === true && (0, u.communityGeneralChatUIEnabled)()) {
              g = "general_chat_add";
              v = ["linked_group_join", (A = t.groupName) !== null && A !== undefined ? A : ""];
            } else if (t.defaultSubgroup === true) {
              var b;
              g = "community_invite_rich";
              v = [T, (b = t.groupName) !== null && b !== undefined ? b : ""];
            } else {
              var C;
              g = "sub_group_invite_rich";
              const e = yield (0, p.getGroupMetadata)(T);
              v = [T, (C = e == null ? undefined : e.subject) !== null && C !== undefined ? C : ""];
            }
          } else {
            g = "invite";
          }
        } else if ((0, u.communitiesEnabled)()) {
          var P;
          if (t.reason === _.ADD_REASON.LINKED_GROUP_JOIN) {
            if (t.generalSubgroup === true && T != null && t.participants.some(e => {
              let {
                id: t
              } = e;
              return (0, E.isMeAccount)(t);
            }) && (0, u.communityGeneralChatUIEnabled)()) {
              g = "general_chat_add";
              v = ["linked_group_join", (P = t.groupName) !== null && P !== undefined ? P : ""];
            } else {
              g = "linked_group_join";
            }
          } else if (t.reason === _.ADD_REASON.AUTO_ADD) {
            var O;
            var I;
            var R;
            if (T) {
              v = [T, (O = t.groupName) !== null && O !== undefined ? O : ""];
              if ((0, u.communityAnnouncementImprovementM3Enabled)()) {
                v.push((I = t.contextGroupId) !== null && I !== undefined ? I : "");
                g = "subgroup_admin_triggered_auto_add";
              } else {
                g = "community_participant_add_rich";
              }
            } else {
              g = "auto_add";
              if (yield M(t, 2)) {
                v = [t.parentGroupId, (R = t.groupName) !== null && R !== undefined ? R : ""];
              }
            }
          } else if (t.reason === _.ADD_REASON.DEFAULT_SUBGROUP_ADMIN_ADD) {
            var N;
            var D;
            if (T && (0, u.communityRichSystemMessageEnabled)()) {
              g = "community_participant_add_rich";
              v = [T, (N = t.groupName) !== null && N !== undefined ? N : ""];
            } else {
              g = "default_sub_group_admin_add";
              if (yield M(t, 1)) {
                v = [t.parentGroupId, (D = t.groupName) !== null && D !== undefined ? D : ""];
              }
            }
          } else if (t.reason === _.ADD_REASON.DEFAULT_SUBGROUP_PROMOTE) {
            g = "default_sub_group_promote";
          } else if (t.reason === _.ADD_REASON.INVITE_AUTO_ADD) {
            var L;
            var k;
            if (T && Boolean(t.defaultSubgroup) && t.participants.some(e => {
              let {
                id: t
              } = e;
              return (0, E.isMeAccount)(t);
            })) {
              v = [T, (L = t.groupName) !== null && L !== undefined ? L : ""];
              if ((0, u.communityAnnouncementImprovementM3Enabled)()) {
                g = "subgroup_admin_triggered_invite_auto_add";
                v.push((k = t.contextGroupId) !== null && k !== undefined ? k : "");
              } else {
                g = "community_invite_auto_add_rich";
              }
            } else {
              g = "invite_auto_add";
              if (t.contextGroupId) {
                v = [t.contextGroupId, ""];
                if (yield M(t, 2)) {
                  v.push("false");
                } else {
                  v.push("true");
                }
              }
            }
          } else if (t.participants.some(e => {
            let {
              id: t
            } = e;
            return (0, E.isMeAccount)(t);
          }) && t.reason === _.ADD_REASON.GENERAL_CHAT_AUTO_ADD && (0, u.communityGeneralChatUIEnabled)()) {
            g = "general_chat_add";
            v = ["general_chat_auto_add", t.groupName];
          } else if (t.reason == null && T && t.participants.some(e => {
            let {
              id: t
            } = e;
            return (0, E.isMeAccount)(t);
          }) && t.generalSubgroup === true && (0, u.communityGeneralChatUIEnabled)()) {
            var G;
            g = "general_chat_add";
            v = ["", (G = t.groupName) !== null && G !== undefined ? G : ""];
          } else if (T && t.participants.some(e => {
            let {
              id: t
            } = e;
            return (0, E.isMeAccount)(t);
          }) && (0, u.communityRichSystemMessageEnabled)()) {
            var U;
            const e = yield (0, p.getGroupMetadata)(T);
            v = [T, (U = e == null ? undefined : e.subject) !== null && U !== undefined ? U : ""];
            g = t.defaultSubgroup === true ? "community_participant_add_rich" : "sub_group_participant_add_rich";
          }
        }
      case _.GROUP_ACTIONS.PROMOTE:
      case _.GROUP_ACTIONS.DEMOTE:
      case _.GROUP_ACTIONS.REMOVE:
      case _.GROUP_ACTIONS.LINKED_GROUP_PROMOTE:
      case _.GROUP_ACTIONS.LINKED_GROUP_DEMOTE:
        if (t.actionType === _.GROUP_ACTIONS.REMOVE && t.reason === _.REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE) {
          g = "default_sub_group_demote";
          break;
        }
        d = t.participants.map(e => {
          let {
            id: t
          } = e;
          return t;
        });
        if (d.length === 1) {
          f = d[0];
        }
        if (t.actionType === _.GROUP_ACTIONS.REMOVE && d.length === 1 && o === f) {
          g = "leave";
        }
        break;
      case _.GROUP_ACTIONS.INVITE_CODE:
        g = "revoke_invite";
        break;
      case _.GROUP_ACTIONS.DESC_ADD:
        g = t.isParentGroup === true ? "parent_group_description" : "description";
        c = t.desc;
        break;
      case _.GROUP_ACTIONS.DESC_REMOVE:
        g = t.isParentGroup === true ? "parent_group_description" : "description";
        break;
      case _.GROUP_ACTIONS.RESTRICT:
        v = [t.value ? _.GroupSettingChangeSystemMessageToggleEnabled.On : _.GroupSettingChangeSystemMessageToggleEnabled.Off];
        c = v[0];
        if (t.threshold != null) {
          v.push(t.threshold);
        }
        break;
      case _.GROUP_ACTIONS.ANNOUNCE:
      case _.GROUP_ACTIONS.NO_FORWARD:
        v = [t.value ? _.GroupSettingChangeSystemMessageToggleEnabled.On : _.GroupSettingChangeSystemMessageToggleEnabled.Off];
        c = v[0];
        break;
      case _.GROUP_ACTIONS.EPHEMERAL:
        if (o) {
          v = [`${t.duration}`, o];
        }
        break;
      case _.GROUP_ACTIONS.GROWTH_LOCKED:
        v = [t.type];
        c = v[0];
        break;
      case _.GROUP_ACTIONS.SUB_GROUP_LINK:
      case _.GROUP_ACTIONS.SIBLING_GROUP_LINK:
      case _.GROUP_ACTIONS.SUB_GROUP_UNLINK:
      case _.GROUP_ACTIONS.PARENT_GROUP_UNLINK:
      case _.GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
      case _.GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK:
      case _.GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK:
        v = (0, h.flattenPairList)(t.groupDatas.map(e => [e.id, e.subject]));
        break;
      case _.GROUP_ACTIONS.PARENT_GROUP_LINK:
        v = (0, h.flattenPairList)(t.groupDatas.map(e => [e.id, e.subject]));
        if ((0, u.communityRichSystemMessageEnabled)()) {
          g = "community_link_parent_group_rich";
        }
        a = "parentGroupLink";
        break;
      case _.GROUP_ACTIONS.PARENT_GROUP_LINK_MEMBERSHIP_APPROVAL:
        {
          const e = t.groupDatas[0];
          const n = i ? _.GroupSettingChangeSystemMessageIsAdmin.Admin : _.GroupSettingChangeSystemMessageIsAdmin.Regular;
          const r = t.membershipApprovalMode;
          v = [e.id, e.subject, n, r.toString()];
          a = "parentGroupLinkMembershipApproval";
          break;
        }
      case _.GROUP_ACTIONS.DELETE_PARENT_GROUP:
        v = [t.communityTitle];
        break;
      case _.GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
        v = [t.value ? _.GroupSettingChangeSystemMessageToggleEnabled.On : _.GroupSettingChangeSystemMessageToggleEnabled.Off, i ? _.GroupSettingChangeSystemMessageIsAdmin.Admin : _.GroupSettingChangeSystemMessageIsAdmin.Regular];
        if (t.triggered === "server") {
          o = undefined;
        }
        break;
      case _.GROUP_ACTIONS.MEMBER_ADD_MODE:
        {
          if (!(0, s.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled")) {
            break;
          }
          const e = t.memberAddMode;
          if (e != null) {
            v = [e === y.MEMBER_ADD_MODE.ALL_MEMBER_ADD ? _.GroupSettingChangeSystemMessageToggleEnabled.On : _.GroupSettingChangeSystemMessageToggleEnabled.Off];
          }
          break;
        }
      case _.GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
        {
          v = [t.value ? _.GroupSettingChangeSystemMessageToggleEnabled.On : _.GroupSettingChangeSystemMessageToggleEnabled.Off];
          const n = yield (0, l.isCurrentUserGroupAdmin)(e.chatId.toString());
          v.push(n ? _.GroupSettingChangeSystemMessageIsAdmin.Admin : _.GroupSettingChangeSystemMessageIsAdmin.Regular);
        }
        break;
      case _.GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
        v = [t.value ? _.GroupSettingChangeSystemMessageToggleEnabled.On : _.GroupSettingChangeSystemMessageToggleEnabled.Off];
        break;
      case _.GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
        g = "created_subgroup_suggestion";
        v = [t.subject];
        break;
      case _.GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED:
        g = "general_chat_auto_add_disabled";
    }
    return {
      id: new m.default({
        remote: r,
        fromMe: false,
        participant: f,
        id: w(e, a)
      }),
      body: c || undefined,
      author: o,
      from: r,
      recipients: d.map(S.toUserWid) || [],
      self: "in",
      subtype: g,
      t: n != null ? n : e.ts,
      type: "gp2",
      templateParams: v || undefined
    };
  })).apply(this, arguments);
}
function P(e, t, n, r) {
  return {
    id: new m.default({
      remote: e,
      fromMe: false,
      participant: n,
      id: m.default.newId_DEPRECATED()
    }),
    author: n,
    from: e,
    recipients: [],
    self: "in",
    subtype: "ephemeral",
    t,
    type: "gp2",
    templateParams: [`${r}`]
  };
}
function O() {
  return (O = (0, a.default)(function* (e) {
    var t;
    var n;
    const r = [];
    const {
      chatId: i
    } = e;
    const s = yield (0, p.getGroupMetadata)(i);
    if (s == null || s.isParentGroup === false) {
      return r;
    }
    const l = yield (0, d.getDefaultSubgroup)(i);
    const u = (t = s == null ? undefined : s.subject) !== null && t !== undefined ? t : "";
    const c = (0, o.unixTime)();
    if (l != null && (yield (0, f.checkMyMembership)(l))) {
      r.push(yield b({
        chatId: l,
        author: e.author,
        ts: c
      }, {
        actionType: _.GROUP_ACTIONS.DELETE_PARENT_GROUP,
        communityTitle: u
      }));
    }
    yield Promise.all(((n = yield (0, d.getJoinedSubgroups)((0, S.createWid)(s.id))) !== null && n !== undefined ? n : []).filter(e => !(l != null && l.equals(e))).map(function () {
      var t = (0, a.default)(function* (t) {
        r.push(yield b({
          chatId: t,
          author: e.author,
          ts: c
        }, {
          actionType: _.GROUP_ACTIONS.DELETE_PARENT_GROUP,
          communityTitle: u
        }));
        r.push(yield b({
          chatId: t,
          author: e.author,
          ts: c
        }, {
          actionType: _.GROUP_ACTIONS.PARENT_GROUP_UNLINK,
          groupDatas: [{
            id: i,
            subject: u
          }]
        }));
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()));
    return r;
  })).apply(this, arguments);
}
function I() {
  return (I = (0, a.default)(function* (e) {
    var t;
    const n = [];
    const {
      chatId: r
    } = e;
    const i = yield (0, p.getGroupMetadata)(r);
    if (i == null) {
      __LOG__(4, undefined, new Error())`genIntegrityDelteteParentNotificationMsgs: missing parentGroupMetadata`;
      return [];
    }
    const s = yield (0, d.getDefaultSubgroup)(r);
    var l;
    if (s != null && (yield (0, f.checkMyMembership)(s))) {
      n.push(yield b({
        chatId: s,
        author: undefined,
        ts: (0, o.unixTime)()
      }, {
        actionType: _.GROUP_ACTIONS.DELETE,
        reason: _.DELETE_REASON.INTEGRITY_DELETE_PARENT,
        groupDatas: [{
          id: r,
          subject: (l = i == null ? undefined : i.subject) !== null && l !== undefined ? l : ""
        }]
      }));
    }
    yield Promise.all(((t = yield (0, d.getJoinedSubgroups)(r)) !== null && t !== undefined ? t : []).filter(e => !(s != null && s.equals(e))).map(function () {
      var e = (0, a.default)(function* (e) {
        var t;
        return n.push(yield b({
          chatId: e,
          author: undefined,
          ts: (0, o.unixTime)()
        }, {
          actionType: _.GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK,
          groupDatas: [{
            id: r,
            subject: (t = i == null ? undefined : i.subject) !== null && t !== undefined ? t : ""
          }]
        }));
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    return n;
  })).apply(this, arguments);
}
function R() {
  return (R = (0, a.default)(function* (e, t) {
    const {
      chatId: n
    } = e;
    const r = yield (0, p.getGroupMetadata)(n);
    if ((r == null ? undefined : r.isParentGroup) === true && (0, u.communitiesEnabled)()) {
      const r = yield (0, d.getDefaultSubgroup)(n);
      if (r && (t.actionType === _.GROUP_ACTIONS.DESC_ADD || t.actionType === _.GROUP_ACTIONS.DESC_REMOVE)) {
        return b((0, i.default)((0, i.default)({}, e), {}, {
          chatId: r
        }), (0, i.default)((0, i.default)({}, t), {}, {
          isParentGroup: true
        }));
      }
    }
    return b(e, t);
  })).apply(this, arguments);
}
function N() {
  return (N = (0, a.default)(function* (e, t) {
    const {
      chatId: n
    } = e;
    const r = yield (0, d.getDefaultSubgroup)(n);
    if (!r) {
      return;
    }
    const a = yield (0, f.getParticipants)(r);
    if (Boolean(a == null ? undefined : a.participants.find(e => (0, E.isMeAccount)((0, S.createWid)(e))))) {
      return b((0, i.default)((0, i.default)({}, e), {}, {
        chatId: r
      }), t);
    } else {
      return undefined;
    }
  })).apply(this, arguments);
}
function D() {
  return (D = (0, a.default)(function* (e, t) {
    const {
      chatId: n
    } = e;
    const r = yield (0, d.getDefaultSubgroup)(n);
    if (r && t.actionType === _.GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION && (0, u.communitiesEnabled)()) {
      return b((0, i.default)((0, i.default)({}, e), {}, {
        chatId: r
      }), t);
    }
  })).apply(this, arguments);
}
function w(e, t) {
  var n;
  var r;
  let i = (n = e.externalId) !== null && n !== undefined ? n : m.default.newId_DEPRECATED();
  if (t != null) {
    i = `${i}${t}`;
  }
  return `${i}${(r = e.ts) !== null && r !== undefined ? r : ""}`;
}
function L() {
  return k.apply(this, arguments);
}
function k() {
  return (k = (0, a.default)(function* (e, t, n) {
    const r = yield function () {
      return o.apply(this, arguments);
    }(e.chatId);
    return b((0, i.default)((0, i.default)({}, e), {}, {
      isAdmin: n
    }), {
      actionType: _.GROUP_ACTIONS.PARENT_GROUP_LINK_MEMBERSHIP_APPROVAL,
      membershipApprovalMode: r,
      groupDatas: t
    });
    function o() {
      return (o = (0, a.default)(function* (e) {
        var t;
        const n = yield (0, p.getGroupMetadata)(e);
        return (t = n == null ? undefined : n.membershipApprovalMode) !== null && t !== undefined && t;
      })).apply(this, arguments);
    }
  })).apply(this, arguments);
}