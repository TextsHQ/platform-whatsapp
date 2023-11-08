var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractDescription = h;
exports.extractLinkedParent = y;
exports.parseGroupNode = E;
exports.parseGroupSmax = function (e) {
  var t;
  var n;
  var r;
  var i;
  var o;
  const {
    groupAddressingModeMixin: l,
    creator: u,
    creation: c,
    id: d,
    hasLocked: p,
    hasAnnouncement: h,
    hasNoFrequentlyForwarded: y,
    pVId: E,
    hasSupport: S,
    hasSuspended: v,
    parent: T,
    hasDefaultSubGroup: M,
    hasGeneralChat: A,
    hasIncognito: b,
    membershipApprovalMode: C,
    membershipApprovalRequest: P,
    hasAllowAdminReports: O,
    ephemeral: I,
    growthLocked: R,
    linkedParent: N,
    description: D,
    descriptionGroupInfoDescriptionMixin: w,
    namedSubjectOrUnnamedSubjectFallbackMixinGroup: L,
    participant: k,
    sT: G,
    size: U,
    groupMemberAddModeMixin: x,
    hasAllowNonAdminSubGroupCreation: B,
    hasAutoAddDisabled: F
  } = e;
  K = k;
  const j = K.map(e => {
    if (e.groupInfoParticipantMixins.name === "GroupInfoParticipantAdmin") {
      const {
        type: t,
        groupInfoParticipantAdminMixins: n
      } = e.groupInfoParticipantMixins.value;
      const r = t === "admin" || t === "superadmin";
      const i = t === "superadmin";
      if (n.name === "ParticipantWithJid" || n.name === "ParticipantWithJidAndPn") {
        return {
          isAdmin: r,
          isSuperAdmin: i,
          id: (0, f.userJidToUserWid)(n.value.jid),
          displayName: null,
          lid: null
        };
      } else if (n.name === "ParticipantWithJidAndLid") {
        return {
          isAdmin: r,
          isSuperAdmin: i,
          id: (0, f.userJidToUserWid)(n.value.jid),
          lid: (0, f.userJidToUserWid)(n.value.lid),
          displayName: null
        };
      } else {
        n.name;
        return {
          isAdmin: r,
          isSuperAdmin: i,
          id: (0, f.userJidToUserWid)(n.value.jid),
          lid: (0, f.userJidToUserWid)(n.value.lid),
          displayName: n.value.displayName
        };
      }
    }
    e.groupInfoParticipantMixins.name;
    const t = e.groupInfoParticipantMixins.value.participantMixins;
    if (t.name === "ParticipantWithJid" || t.name === "ParticipantWithJidAndPn") {
      return {
        isAdmin: false,
        isSuperAdmin: false,
        id: (0, f.userJidToUserWid)(t.value.jid),
        displayName: null,
        lid: null
      };
    } else if (t.name === "ParticipantWithJidAndLid") {
      return {
        isAdmin: false,
        isSuperAdmin: false,
        id: (0, f.userJidToUserWid)(t.value.jid),
        lid: (0, f.userJidToUserWid)(t.value.lid),
        displayName: null
      };
    } else if (t.name === "ParticipantWithJidContainingLidAndDisplayName") {
      return {
        isAdmin: false,
        isSuperAdmin: false,
        id: (0, f.userJidToUserWid)(t.value.jid),
        displayName: t.value.displayName,
        lid: null
      };
    } else {
      t.name;
      return {
        isAdmin: false,
        isSuperAdmin: false,
        id: (0, f.userJidToUserWid)(t.value.jid),
        lid: (0, f.userJidToUserWid)(t.value.lid),
        displayName: t.value.displayName
      };
    }
  });
  const Y = L.value.subject;
  var K;
  if (Y == null) {
    throw (0, m.default)("parseGroupSmax: invalid group subject");
  }
  const W = (t = C == null || (n = C.membershipApprovalGroupJoinModeEnabledMixin) === null || n === undefined ? undefined : n.state) !== null && t !== undefined ? t : C == null ? undefined : C.state;
  const V = _.MEMBER_ADD_MODE.cast(x == null || (r = x.memberAddModeAdminOrAllMembersOrUnknownAddModeMixinGroup) === null || r === undefined ? undefined : r.value.elementValue);
  const H = (i = D == null ? undefined : D.groupInfoDescriptionMixin) !== null && i !== undefined ? i : w;
  return (0, a.default)((0, a.default)((0, a.default)((0, a.default)((0, a.default)({
    id: (0, g.createWid)(`${d}@g.us`),
    owner: u != null ? (0, f.userJidToUserWid)(u) : undefined,
    creation: c,
    restrict: Boolean(p),
    announce: Boolean(h),
    noFrequentlyForwarded: Boolean(y),
    pvId: E != null ? Number(E) : undefined,
    support: S,
    suspended: v,
    isParentGroup: T != null,
    numSubgroups: T == null ? undefined : T.numSubGroups,
    participants: j,
    isParentGroupClosed: (T == null || (o = T.parentGroupDefaultMembershipApprovalModeMixin) === null || o === undefined ? undefined : o.defaultMembershipApprovalMode) === "request_required",
    defaultSubgroup: M,
    generalSubgroup: A,
    incognito: b,
    membershipApprovalMode: W === "on",
    reportToAdminMode: O,
    membershipApprovalRequest: P,
    isLidAddressingMode: (l == null ? undefined : l.addressingMode) === "lid",
    memberAddMode: V,
    allowNonAdminSubGroupCreation: B
  }, H && function (e) {
    if (!e) {
      return null;
    }
    const {
      bodyElementValue: t,
      id: n,
      participant: r,
      t: i
    } = e;
    return {
      desc: t,
      descId: n,
      descOwner: r != null ? (0, f.userJidToUserWid)(r) : undefined,
      descTime: (0, s.castToUnixTime)(i)
    };
  }(H)), I && function (e) {
    if (!e) {
      return null;
    }
    const {
      expiration: t
    } = e;
    return {
      ephemeralDuration: t
    };
  }(I)), function (e) {
    if (e == null) {
      return null;
    }
    const {
      expiration: t,
      type: n
    } = e;
    return {
      growthLockExpiration: t,
      growthLockType: n
    };
  }(R)), function (e) {
    if (e == null) {
      return null;
    }
    return {
      parentGroup: (0, f.groupJidToWid)(e.jid),
      parentGroupSubject: e.subject
    };
  }(N)), {}, {
    subject: Y,
    subjectTime: G,
    size: U,
    generalChatAutoAddDisabled: Boolean(F)
  });
};
exports.queryGroup = function () {
  return v.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./250281.js");
var s = require("./632157.js");
var l = require("./716358.js");
var u = require("./347387.js");
var c = require("./984330.js");
var d = require("./355813.js");
var p = require("./529921.js");
var f = require("./854379.js");
var _ = require("./98742.js");
var g = require("./669050.js");
var m = r(require("./556869.js"));
function h(e) {
  if (e.hasChild("description")) {
    const t = e.child("description");
    if (t.hasChild("body")) {
      const e = t.child("body");
      if (e.hasContent()) {
        const n = {
          desc: e.contentString(),
          descId: t.attrString("id")
        };
        if (t.hasAttr("participant")) {
          n.descOwner = (0, f.userJidToUserWid)(t.attrUserJid("participant"));
        }
        if (t.hasAttr("t")) {
          n.descTime = t.attrTime("t");
        }
        return n;
      }
    }
  }
  return null;
}
function y(e) {
  const t = e.maybeChild("linked_parent");
  const n = t == null ? undefined : t.maybeAttrGroupJid("jid");
  if (n == null) {
    return null;
  } else {
    return {
      parentGroup: (0, f.groupJidToWid)(n),
      parentGroupSubject: t == null ? undefined : t.maybeAttrString("subject")
    };
  }
}
function E(e) {
  var t;
  var n;
  var r;
  var i;
  var o;
  var s;
  var l;
  var u;
  var c;
  const d = h(e);
  const E = function (e) {
    const t = {
      subject: e.attrString("subject")
    };
    if (e.hasAttr("s_o")) {
      t.subjectOwner = (0, f.userJidToUserWid)(e.attrUserJid("s_o"));
    }
    if (e.hasAttr("s_t")) {
      t.subjectTime = e.attrTime("s_t");
    }
    return t;
  }(e);
  const S = function (e) {
    if (e.hasChild("ephemeral")) {
      const t = e.child("ephemeral");
      if (t.hasAttr("expiration")) {
        return {
          ephemeralDuration: t.attrInt("expiration")
        };
      }
    }
    return null;
  }(e);
  const v = function (e) {
    const t = e.maybeChild("growth_locked");
    const n = t == null ? undefined : t.maybeAttrInt("expiration");
    const r = t == null ? undefined : t.maybeAttrString("type");
    if (n == null || r == null) {
      return null;
    } else {
      return {
        growthLockExpiration: n,
        growthLockType: r
      };
    }
  }(e);
  const T = y(e);
  let M;
  let A;
  try {
    M = (0, g.createWid)(`${e.attrString("id")}@g.us`);
  } catch (e) {}
  if (!((t = M) === null || t === undefined ? undefined : t.isGroup)) {
    throw (0, m.default)("createGroupReplyParser: invalid group id");
  }
  if (e.hasChild("member_add_mode")) {
    A = _.MEMBER_ADD_MODE.cast(e.child("member_add_mode").contentString());
  }
  const b = e.mapChildrenWithTag("participant", e => {
    const t = e.attrEnumOrDefault("type", p.GROUP_PARTICIPANT_TYPES, p.GROUP_PARTICIPANT_TYPES.participant);
    const n = e.maybeAttrLidUserJid("lid");
    const r = e.maybeAttrPhoneUserJid("phone_number");
    return {
      displayName: e.maybeAttrString("display_name"),
      id: (0, f.userJidToUserWid)(e.attrUserJid("jid")),
      isSuperAdmin: t === p.GROUP_PARTICIPANT_TYPES.superadmin,
      isAdmin: t === p.GROUP_PARTICIPANT_TYPES.admin || t === p.GROUP_PARTICIPANT_TYPES.superadmin,
      lid: n != null ? (0, f.userJidToUserWid)(n) : null,
      phoneNumber: r != null ? (0, f.userJidToUserWid)(r) : null
    };
  });
  const C = (0, a.default)((0, a.default)((0, a.default)((0, a.default)((0, a.default)({
    id: M,
    owner: e.hasAttr("creator") ? (0, f.userJidToUserWid)(e.attrUserJid("creator")) : undefined,
    creation: e.attrTime("creation"),
    restrict: e.hasChild("locked"),
    announce: e.hasChild("announcement"),
    noFrequentlyForwarded: e.hasChild("no_frequently_forwarded"),
    participants: b,
    pvId: e.hasAttr("p_v_id") ? e.attrInt("p_v_id") : undefined,
    support: e.hasChild("support"),
    size: e.hasAttr("size") ? e.attrInt("size") : undefined,
    suspended: e.hasChild("suspended"),
    isParentGroup: (n = e.hasChild("parent")) !== null && n !== undefined ? n : undefined,
    isParentGroupClosed: ((r = e.maybeChild("parent")) === null || r === undefined ? undefined : r.maybeAttrString("default_membership_approval_mode")) === "request_required",
    numSubgroups: (i = (o = e.maybeChild("parent")) === null || o === undefined ? undefined : o.maybeAttrInt("num_sub_groups")) !== null && i !== undefined ? i : 0,
    defaultSubgroup: (s = e.hasChild("default_sub_group")) !== null && s !== undefined ? s : undefined,
    generalSubgroup: (l = e.hasChild("general_chat")) !== null && l !== undefined ? l : undefined,
    generalChatAutoAddDisabled: e.hasChild("auto_add_disabled"),
    incognito: e.hasChild("incognito"),
    isLidAddressingMode: !!e.maybeAttrString("addressing_mode") && e.attrString("addressing_mode") === "lid",
    membershipApprovalMode: (e == null || (u = e.maybeChild("membership_approval_mode")) === null || u === undefined || (c = u.maybeChild("group_join")) === null || c === undefined ? undefined : c.maybeAttrString("state")) === "on",
    memberAddMode: A,
    membershipApprovalRequest: e.hasChild("membership_approval_request"),
    reportToAdminMode: e.hasChild("allow_admin_reports"),
    allowNonAdminSubGroupCreation: e.hasChild("allow_non_admin_sub_group_creation")
  }, d), S), v), E), T);
  const P = C.defaultSubgroup && C.incognito;
  const O = C.isLidAddressingMode;
  if (P === false && O === false) {
    C.participants = C.participants.filter(e => {
      let {
        id: t
      } = e;
      return !t.isLid();
    });
  }
  return C;
}
const S = new u.WapParser("queryGroupParser", e => e.hasChild("group") ? E(e.child("group")) : {
  phashMatch: true
});
function v() {
  return (v = (0, i.default)(function* (e) {
    const {
      groupWid: t,
      request: n,
      phash: r
    } = e;
    const i = (0, l.wap)("iq", {
      to: (0, d.GROUP_JID)(t),
      type: "get",
      xmlns: "w:g2",
      id: (0, l.generateId)()
    }, (0, l.wap)("query", {
      request: n || l.DROP_ATTR,
      phash: (0, l.MAYBE_CUSTOM_STRING)(r)
    }));
    const a = yield (0, o.deprecatedSendIq)(i, S);
    if (!a.success) {
      __LOG__(2)`queryGroup failed: ${a.errorCode}:${a.errorType}`;
      throw new c.ServerStatusCodeError(a.errorCode, a.errorText);
    }
    return a.result;
  })).apply(this, arguments);
}