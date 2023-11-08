Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLinkedGroupInfoGroupMembershipApprovalMode = d;
exports.parseLinkedGroupInfoGroupMembershipApprovalRequest = f;
exports.parseLinkedGroupInfoGroupParticipant = c;
exports.parseLinkedGroupInfoMixin = function (e) {
  const t = (0, s.assertTag)(e, "linked_group");
  if (!t.success) {
    return t;
  }
  const n = (0, s.flattenedChildWithTag)(e, "group");
  if (!n.success) {
    return n;
  }
  const l = (0, s.flattenedChildWithTag)(n.value, "description");
  if (!l.success) {
    return l;
  }
  const i = (0, s.optionalChildWithTag)(n.value, "membership_approval_mode", d);
  if (!i.success) {
    return i;
  }
  const p = (0, s.optionalChildWithTag)(n.value, "membership_approval_request", f);
  if (!p.success) {
    return p;
  }
  const m = (0, s.optionalChild)(n.value, "admin_request_required");
  if (!m.success) {
    return m;
  }
  const h = (0, u.attrGroupJid)(e, "jid");
  if (!h.success) {
    return h;
  }
  const g = (0, s.attrIntRange)(n.value, "size", 1, 19999);
  if (!g.success) {
    return g;
  }
  const E = (0, o.parseGroupInfoDescriptionMixin)(l.value);
  const v = (0, r.parseGroupInfoAttributesMixin)(n.value);
  if (!v.success) {
    return v;
  }
  const _ = (0, s.mapChildrenWithTag)(n.value, "participant", 0, 19999, c);
  if (!_.success) {
    return _;
  }
  return (0, a.makeResult)({
    jid: h.value,
    groupSize: g.value,
    groupDescriptionGroupInfoDescriptionMixin: E.success ? E.value : null,
    groupGroupInfoAttributesMixin: v.value,
    groupMembershipApprovalMode: i.value,
    groupMembershipApprovalRequest: p.value,
    hasGroupAdminRequestRequired: m.value != null,
    groupParticipant: _.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/188798.js");
var o = require("../app/522878.js");
var l = require("../app/986986.js");
var i = require("../app/261918.js");
var u = require("../app/568113.js");
var s = require("../app/686310.js");
function c(e) {
  const t = (0, s.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, l.parseGroupInfoParticipantMixin)(e);
  n.success;
  return n;
}
function d(e) {
  const t = (0, s.assertTag)(e, "membership_approval_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseMembershipApprovalGroupJoinModeEnabledMixin)(e);
  n.success;
  return n;
}
function f(e) {
  const t = (0, s.assertTag)(e, "membership_approval_request");
  if (!t.success) {
    return t;
  }
  const n = (0, s.optionalLiteral)(s.attrString, e, "error", "304");
  if (n.success) {
    return (0, a.makeResult)({
      error: n.value
    });
  } else {
    return n;
  }
}