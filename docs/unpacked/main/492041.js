Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetPropertyRequest = function (e) {
  const {
    hasLocked: t,
    hasAnnouncement: n,
    hasNoFrequentlyForwarded: l,
    ephemeralArgs: i,
    hasUnlocked: M,
    hasNotAnnouncement: S,
    hasFrequentlyForwardedOk: T,
    hasNotEphemeral: w,
    membershipApprovalModeArgs: A,
    hasAllowAdminReports: P,
    hasNotAllowAdminReports: O,
    hasAllowNonAdminSubGroupCreation: k,
    hasNotAllowNonAdminSubGroupCreation: D,
    hasGroupHistory: I,
    hasNoGroupHistory: R
  } = e;
  return (0, o.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, a.HAS_OPTIONAL_CHILD)(u, t), (0, a.HAS_OPTIONAL_CHILD)(s, n), (0, a.HAS_OPTIONAL_CHILD)(c, l), (0, a.OPTIONAL_CHILD)(d, i), (0, a.HAS_OPTIONAL_CHILD)(f, M), (0, a.HAS_OPTIONAL_CHILD)(p, S), (0, a.HAS_OPTIONAL_CHILD)(m, T), (0, a.HAS_OPTIONAL_CHILD)(h, w), (0, a.OPTIONAL_CHILD)(g, A), (0, a.HAS_OPTIONAL_CHILD)(E, P), (0, a.HAS_OPTIONAL_CHILD)(v, O), (0, a.HAS_OPTIONAL_CHILD)(_, k), (0, a.HAS_OPTIONAL_CHILD)(y, D), (0, a.HAS_OPTIONAL_CHILD)(C, I), (0, a.HAS_OPTIONAL_CHILD)(b, R)), e);
};
exports.makeSetPropertyRequestAllowAdminReports = E;
exports.makeSetPropertyRequestAllowNonAdminSubGroupCreation = _;
exports.makeSetPropertyRequestAnnouncement = s;
exports.makeSetPropertyRequestEphemeral = d;
exports.makeSetPropertyRequestFrequentlyForwardedOk = m;
exports.makeSetPropertyRequestGroupHistory = C;
exports.makeSetPropertyRequestLocked = u;
exports.makeSetPropertyRequestMembershipApprovalMode = g;
exports.makeSetPropertyRequestNoFrequentlyForwarded = c;
exports.makeSetPropertyRequestNoGroupHistory = b;
exports.makeSetPropertyRequestNotAllowAdminReports = v;
exports.makeSetPropertyRequestNotAllowNonAdminSubGroupCreation = y;
exports.makeSetPropertyRequestNotAnnouncement = p;
exports.makeSetPropertyRequestNotEphemeral = h;
exports.makeSetPropertyRequestUnlocked = f;
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/667149.js");
var l = require("./494640.js");
var i = require("../app/716358.js");
function u() {
  return (0, r.smax)("locked", null);
}
function s() {
  return (0, r.smax)("announcement", null);
}
function c() {
  return (0, r.smax)("no_frequently_forwarded", null);
}
function d(e) {
  const {
    ephemeralExpiration: t
  } = e;
  return (0, r.smax)("ephemeral", {
    expiration: (0, i.INT)(t)
  });
}
function f() {
  return (0, r.smax)("unlocked", null);
}
function p() {
  return (0, r.smax)("not_announcement", null);
}
function m() {
  return (0, r.smax)("frequently_forwarded_ok", null);
}
function h() {
  return (0, r.smax)("not_ephemeral", null);
}
function g(e) {
  return (0, l.mergeMembershipApprovalGroupJoinModeMixin)((0, r.smax)("membership_approval_mode", null), e);
}
function E() {
  return (0, r.smax)("allow_admin_reports", null);
}
function v() {
  return (0, r.smax)("not_allow_admin_reports", null);
}
function _() {
  return (0, r.smax)("allow_non_admin_sub_group_creation", null);
}
function y() {
  return (0, r.smax)("not_allow_non_admin_sub_group_creation", null);
}
function C() {
  return (0, r.smax)("group_history", null);
}
function b() {
  return (0, r.smax)("no_group_history", null);
}