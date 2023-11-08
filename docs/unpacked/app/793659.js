var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseInviteLinkGroupInfoLinkedParent = g;
exports.parseInviteLinkGroupInfoMembershipApprovalMode = m;
exports.parseInviteLinkGroupInfoMembershipApprovalRequest = h;
exports.parseInviteLinkGroupInfoMixin = function (e) {
  const t = (0, p.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, p.flattenedChildWithTag)(e, "description");
  if (!n.success) {
    return n;
  }
  const r = (0, p.optionalChildWithTag)(e, "parent", _);
  if (!r.success) {
    return r;
  }
  const l = (0, p.optionalChildWithTag)(e, "linked_parent", g);
  if (!l.success) {
    return l;
  }
  const u = (0, p.optionalChild)(e, "default_sub_group");
  if (!u.success) {
    return u;
  }
  const c = (0, p.optionalChild)(e, "general_chat");
  if (!c.success) {
    return c;
  }
  const d = (0, p.optionalChildWithTag)(e, "membership_approval_mode", m);
  if (!d.success) {
    return d;
  }
  const y = (0, p.optionalChildWithTag)(e, "membership_approval_request", h);
  if (!y.success) {
    return y;
  }
  const E = (0, p.attrIntRange)(e, "size", 0, 19999);
  if (!E.success) {
    return E;
  }
  const S = (0, s.parseGroupInfoDescriptionMixin)(n.value);
  const v = (0, o.parseGroupInfoAttributesMixin)(e);
  if (!v.success) {
    return v;
  }
  const T = (0, p.mapChildrenWithTag)(e, "participant", 0, 19999, f);
  if (!T.success) {
    return T;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    size: E.value,
    descriptionGroupInfoDescriptionMixin: S.success ? S.value : null
  }, v.value), {}, {
    parent: r.value,
    linkedParent: l.value,
    hasDefaultSubGroup: u.value != null,
    hasGeneralChat: c.value != null,
    membershipApprovalMode: d.value,
    membershipApprovalRequest: y.value,
    participant: T.value
  }));
};
exports.parseInviteLinkGroupInfoParent = _;
exports.parseInviteLinkGroupInfoParticipant = f;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./188798.js");
var s = require("./522878.js");
var l = require("./986986.js");
var u = require("./261918.js");
var c = require("./373556.js");
var d = require("./568113.js");
var p = require("./686310.js");
function f(e) {
  const t = (0, p.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, l.parseGroupInfoParticipantMixin)(e);
  n.success;
  return n;
}
function _(e) {
  const t = (0, p.assertTag)(e, "parent");
  if (!t.success) {
    return t;
  }
  const n = (0, p.attrIntRange)(e, "num_sub_groups", 1, 1000);
  if (n.success) {
    return (0, a.makeResult)({
      numSubGroups: n.value
    });
  } else {
    return n;
  }
}
function g(e) {
  const t = (0, p.assertTag)(e, "linked_parent");
  if (!t.success) {
    return t;
  }
  const n = (0, d.attrGroupJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, c.parseNamedSubjectMixin)(e);
  if (r.success) {
    return (0, a.makeResult)((0, i.default)({
      jid: n.value
    }, r.value));
  } else {
    return r;
  }
}
function m(e) {
  const t = (0, p.assertTag)(e, "membership_approval_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, u.parseMembershipApprovalGroupJoinModeEnabledMixin)(e);
  n.success;
  return n;
}
function h(e) {
  const t = (0, p.assertTag)(e, "membership_approval_request");
  if (!t.success) {
    return t;
  }
  const n = (0, p.optionalLiteral)(p.attrString, e, "error", "304");
  if (n.success) {
    return (0, a.makeResult)({
      error: n.value
    });
  } else {
    return n;
  }
}