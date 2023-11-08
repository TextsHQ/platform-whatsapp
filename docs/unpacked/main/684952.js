Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateRequest = function (e) {
  const {
    participantArgs: t,
    descriptionArgs: n,
    hasLocked: s,
    hasAnnouncement: d,
    parentArgs: f,
    hasNoFrequentlyForwarded: p,
    ephemeralArgs: A,
    hasShadow: P,
    membershipApprovalModeArgs: O,
    hasBreakout: k,
    linkedParentArgs: D,
    hasAllowNonAdminSubGroupCreation: I,
    hasCreateGeneralChat: R,
    dedupAttrsMixinArgs: N,
    groupMemberAddModeMixinArgs: x,
    namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs: L
  } = e;
  return (0, l.mergeBaseSetServerMixin)((0, r.smax)("iq", null, (0, c.mergeNamedSubjectOrUnnamedSubjectFallbackMixinGroup)((0, o.optionalMerge)(u.mergeGroupMemberAddModeMixin, (0, o.optionalMerge)(i.mergeDedupAttrsMixin, (0, r.smax)("create", null, [...(0, a.REPEATED_CHILD)(m, t, 0, 19999), (0, a.OPTIONAL_CHILD)(h, n), (0, a.HAS_OPTIONAL_CHILD)(g, s), (0, a.HAS_OPTIONAL_CHILD)(E, d), (0, a.OPTIONAL_CHILD)(v, f), (0, a.HAS_OPTIONAL_CHILD)(_, p), (0, a.OPTIONAL_CHILD)(y, A), (0, a.HAS_OPTIONAL_CHILD)(C, P), (0, a.OPTIONAL_CHILD)(b, O), (0, a.HAS_OPTIONAL_CHILD)(M, k), (0, a.OPTIONAL_CHILD)(S, D), (0, a.HAS_OPTIONAL_CHILD)(T, I), (0, a.HAS_OPTIONAL_CHILD)(w, R)]), N), x), L)));
};
exports.makeCreateRequestCreateAllowNonAdminSubGroupCreation = T;
exports.makeCreateRequestCreateAnnouncement = E;
exports.makeCreateRequestCreateBreakout = M;
exports.makeCreateRequestCreateCreateGeneralChat = w;
exports.makeCreateRequestCreateDescription = h;
exports.makeCreateRequestCreateEphemeral = y;
exports.makeCreateRequestCreateLinkedParent = S;
exports.makeCreateRequestCreateLocked = g;
exports.makeCreateRequestCreateMembershipApprovalMode = b;
exports.makeCreateRequestCreateNoFrequentlyForwarded = _;
exports.makeCreateRequestCreateParent = v;
exports.makeCreateRequestCreateParticipant = m;
exports.makeCreateRequestCreateShadow = C;
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/770006.js");
var l = require("./766350.js");
var i = require("./212899.js");
var u = require("./900025.js");
var s = require("./494640.js");
var c = require("./722429.js");
var d = require("./60736.js");
var f = require("./632912.js");
var p = require("../app/716358.js");
function m(e) {
  const {
    participantJid: t,
    phoneNumberMixinArgs: n
  } = e;
  return (0, o.optionalMerge)(f.mergePhoneNumberMixin, (0, r.smax)("participant", {
    jid: (0, p.USER_JID)(t)
  }), n);
}
function h(e) {
  const {
    descriptionId: t,
    bodyElementValue: n
  } = e;
  return (0, r.smax)("description", {
    id: (0, p.CUSTOM_STRING)(t)
  }, (0, r.smax)("body", null, n));
}
function g() {
  return (0, r.smax)("locked", null);
}
function E() {
  return (0, r.smax)("announcement", null);
}
function v(e) {
  const {
    hasParentGroupDefaultMembershipApprovalMode: t
  } = e;
  return (0, o.optionalMerge)(d.mergeParentGroupDefaultMembershipApprovalModeMixin, (0, r.smax)("parent", null), t);
}
function _() {
  return (0, r.smax)("no_frequently_forwarded", null);
}
function y(e) {
  const {
    ephemeralExpiration: t
  } = e;
  return (0, r.smax)("ephemeral", {
    expiration: (0, p.INT)(t)
  });
}
function C() {
  return (0, r.smax)("shadow", null);
}
function b(e) {
  return (0, s.mergeMembershipApprovalGroupJoinModeMixin)((0, r.smax)("membership_approval_mode", null), e);
}
function M() {
  return (0, r.smax)("breakout", null);
}
function S(e) {
  const {
    linkedParentJid: t
  } = e;
  return (0, r.smax)("linked_parent", {
    jid: (0, p.GROUP_JID)(t)
  });
}
function T() {
  return (0, r.smax)("allow_non_admin_sub_group_creation", null);
}
function w() {
  return (0, r.smax)("create_general_chat", null);
}