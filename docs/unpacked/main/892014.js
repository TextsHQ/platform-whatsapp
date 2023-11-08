var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSetPropertyResponseSuccess = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, u.optionalChild)(e, "locked");
  if (!a.success) {
    return a;
  }
  const i = (0, u.optionalChild)(e, "announcement");
  if (!i.success) {
    return i;
  }
  const d = (0, u.optionalChild)(e, "no_frequently_forwarded");
  if (!d.success) {
    return d;
  }
  const f = (0, u.optionalChildWithTag)(e, "ephemeral", s);
  if (!f.success) {
    return f;
  }
  const p = (0, u.optionalChild)(e, "unlocked");
  if (!p.success) {
    return p;
  }
  const m = (0, u.optionalChild)(e, "not_announcement");
  if (!m.success) {
    return m;
  }
  const h = (0, u.optionalChild)(e, "frequently_forwarded_ok");
  if (!h.success) {
    return h;
  }
  const g = (0, u.optionalChild)(e, "not_ephemeral");
  if (!g.success) {
    return g;
  }
  const E = (0, u.optionalChildWithTag)(e, "membership_approval_mode", c);
  if (!E.success) {
    return E;
  }
  const v = (0, u.optionalChild)(e, "allow_admin_reports");
  if (!v.success) {
    return v;
  }
  const _ = (0, u.optionalChild)(e, "not_allow_admin_reports");
  if (!_.success) {
    return _;
  }
  const y = (0, u.optionalChild)(e, "allow_non_admin_sub_group_creation");
  if (!y.success) {
    return y;
  }
  const C = (0, u.optionalChild)(e, "not_allow_non_admin_sub_group_creation");
  if (!C.success) {
    return C;
  }
  const b = (0, u.optionalChild)(e, "group_history");
  if (!b.success) {
    return b;
  }
  const M = (0, u.optionalChild)(e, "no_group_history");
  if (!M.success) {
    return M;
  }
  const S = (0, l.parseIQResultResponseMixin)(e, t);
  if (!S.success) {
    return S;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, S.value), {}, {
    hasLocked: a.value != null,
    hasAnnouncement: i.value != null,
    hasNoFrequentlyForwarded: d.value != null,
    ephemeral: f.value,
    hasUnlocked: p.value != null,
    hasNotAnnouncement: m.value != null,
    hasFrequentlyForwardedOk: h.value != null,
    hasNotEphemeral: g.value != null,
    membershipApprovalMode: E.value,
    hasAllowAdminReports: v.value != null,
    hasNotAllowAdminReports: _.value != null,
    hasAllowNonAdminSubGroupCreation: y.value != null,
    hasNotAllowNonAdminSubGroupCreation: C.value != null,
    hasGroupHistory: b.value != null,
    hasNoGroupHistory: M.value != null
  }));
};
exports.parseSetPropertyResponseSuccessEphemeral = s;
exports.parseSetPropertyResponseSuccessMembershipApprovalMode = c;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("./822314.js");
var u = require("../app/686310.js");
function s(e) {
  const t = (0, u.assertTag)(e, "ephemeral");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrIntRange)(e, "expiration", 0, 2147483647);
  if (n.success) {
    return (0, o.makeResult)({
      expiration: n.value
    });
  } else {
    return n;
  }
}
function c(e) {
  const t = (0, u.assertTag)(e, "membership_approval_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseMembershipApprovalPropertyResponseMixinMixin)(e);
  return (0, o.makeResult)({
    membershipApprovalPropertyResponseMixinMixin: n.success ? n.value : null
  });
}