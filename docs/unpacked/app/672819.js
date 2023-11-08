var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupInfoDescription = m;
exports.parseGroupInfoEphemeral = y;
exports.parseGroupInfoGrowthLocked = E;
exports.parseGroupInfoLinkedParent = v;
exports.parseGroupInfoMembershipApprovalMode = S;
exports.parseGroupInfoMixin = function (e) {
  const t = (0, _.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, _.optionalChildWithTag)(e, "description", m);
  if (!n.success) {
    return n;
  }
  const r = (0, _.optionalChild)(e, "locked");
  if (!r.success) {
    return r;
  }
  const s = (0, _.optionalChild)(e, "announcement");
  if (!s.success) {
    return s;
  }
  const l = (0, _.optionalChildWithTag)(e, "parent", h);
  if (!l.success) {
    return l;
  }
  const c = (0, _.optionalChild)(e, "no_frequently_forwarded");
  if (!c.success) {
    return c;
  }
  const d = (0, _.optionalChild)(e, "support");
  if (!d.success) {
    return d;
  }
  const p = (0, _.optionalChildWithTag)(e, "ephemeral", y);
  if (!p.success) {
    return p;
  }
  const f = (0, _.optionalChild)(e, "suspended");
  if (!f.success) {
    return f;
  }
  const T = (0, _.optionalChildWithTag)(e, "growth_locked", E);
  if (!T.success) {
    return T;
  }
  const M = (0, _.optionalChild)(e, "default_sub_group");
  if (!M.success) {
    return M;
  }
  const A = (0, _.optionalChild)(e, "shadow");
  if (!A.success) {
    return A;
  }
  const b = (0, _.optionalChildWithTag)(e, "membership_approval_mode", S);
  if (!b.success) {
    return b;
  }
  const C = (0, _.optionalChild)(e, "incognito");
  if (!C.success) {
    return C;
  }
  const P = (0, _.optionalChild)(e, "allow_admin_reports");
  if (!P.success) {
    return P;
  }
  const O = (0, _.optionalChild)(e, "allow_non_admin_sub_group_creation");
  if (!O.success) {
    return O;
  }
  const I = (0, _.optionalChild)(e, "general_chat");
  if (!I.success) {
    return I;
  }
  const R = (0, _.optionalChild)(e, "auto_add_disabled");
  if (!R.success) {
    return R;
  }
  const N = (0, _.optionalChild)(e, "group_history");
  if (!N.success) {
    return N;
  }
  const D = (0, _.optionalChildWithTag)(e, "linked_parent", v);
  if (!D.success) {
    return D;
  }
  const w = (0, _.optionalLiteral)(_.attrString, e, "ack", "false");
  if (!w.success) {
    return w;
  }
  const L = (0, o.parseGroupInfoAttributesMixin)(e);
  if (!L.success) {
    return L;
  }
  const k = (0, u.parseGroupMemberAddModeMixin)(e);
  const G = (0, _.mapChildrenWithTag)(e, "participant", 0, 19999, g);
  if (!G.success) {
    return G;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    ack: w.value
  }, L.value), {}, {
    groupMemberAddModeMixin: k.success ? k.value : null,
    description: n.value,
    hasLocked: r.value != null,
    hasAnnouncement: s.value != null,
    parent: l.value,
    hasNoFrequentlyForwarded: c.value != null,
    hasSupport: d.value != null,
    ephemeral: p.value,
    hasSuspended: f.value != null,
    growthLocked: T.value,
    hasDefaultSubGroup: M.value != null,
    hasShadow: A.value != null,
    membershipApprovalMode: b.value,
    hasIncognito: C.value != null,
    hasAllowAdminReports: P.value != null,
    hasAllowNonAdminSubGroupCreation: O.value != null,
    hasGeneralChat: I.value != null,
    hasAutoAddDisabled: R.value != null,
    hasGroupHistory: N.value != null,
    linkedParent: D.value,
    participant: G.value
  }));
};
exports.parseGroupInfoParent = h;
exports.parseGroupInfoParticipant = g;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./188798.js");
var s = require("./522878.js");
var l = require("./986986.js");
var u = require("./131594.js");
var c = require("./261918.js");
var d = require("./665751.js");
var p = require("./37772.js");
var f = require("./568113.js");
var _ = require("./686310.js");
function g(e) {
  const t = (0, _.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, l.parseGroupInfoParticipantMixin)(e);
  if (!n.success) {
    return n;
  }
  const r = (0, p.parseParticipantNotAddressableMixin)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, n.value), {}, {
    participantNotAddressableMixin: r.success ? r.value : null
  }));
}
function m(e) {
  const t = (0, _.assertTag)(e, "description");
  if (!t.success) {
    return t;
  }
  const n = (0, s.parseGroupInfoDescriptionMixin)(e);
  return (0, a.makeResult)({
    groupInfoDescriptionMixin: n.success ? n.value : null
  });
}
function h(e) {
  const t = (0, _.assertTag)(e, "parent");
  if (!t.success) {
    return t;
  }
  const n = (0, d.parseParentGroupDefaultMembershipApprovalModeMixin)(e);
  return (0, a.makeResult)({
    parentGroupDefaultMembershipApprovalModeMixin: n.success ? n.value : null
  });
}
function y(e) {
  const t = (0, _.assertTag)(e, "ephemeral");
  if (!t.success) {
    return t;
  }
  const n = (0, _.attrIntRange)(e, "expiration", 0, 2147483647);
  if (n.success) {
    return (0, a.makeResult)({
      expiration: n.value
    });
  } else {
    return n;
  }
}
function E(e) {
  const t = (0, _.assertTag)(e, "growth_locked");
  if (!t.success) {
    return t;
  }
  const n = (0, _.literal)(_.attrString, e, "type", "invite");
  if (!n.success) {
    return n;
  }
  const r = (0, _.attrIntRange)(e, "expiration", 0, undefined);
  if (r.success) {
    return (0, a.makeResult)({
      type: n.value,
      expiration: r.value
    });
  } else {
    return r;
  }
}
function S(e) {
  const t = (0, _.assertTag)(e, "membership_approval_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, c.parseMembershipApprovalGroupJoinModeEnabledMixin)(e);
  return (0, a.makeResult)({
    membershipApprovalGroupJoinModeEnabledMixin: n.success ? n.value : null
  });
}
function v(e) {
  const t = (0, _.assertTag)(e, "linked_parent");
  if (!t.success) {
    return t;
  }
  const n = (0, f.attrGroupJid)(e, "jid");
  if (n.success) {
    return (0, a.makeResult)({
      jid: n.value
    });
  } else {
    return n;
  }
}