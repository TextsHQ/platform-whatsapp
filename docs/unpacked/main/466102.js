Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMembershipRequestsActionRequest = function (e) {
  const {
    approveArgs: t,
    rejectArgs: n
  } = e;
  return (0, o.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, r.smax)("membership_requests_action", null, (0, a.OPTIONAL_CHILD)(u, t), (0, a.OPTIONAL_CHILD)(c, n))), e);
};
exports.makeMembershipRequestsActionRequestMembershipRequestsActionApprove = u;
exports.makeMembershipRequestsActionRequestMembershipRequestsActionApproveParticipant = i;
exports.makeMembershipRequestsActionRequestMembershipRequestsActionReject = c;
exports.makeMembershipRequestsActionRequestMembershipRequestsActionRejectParticipant = s;
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/667149.js");
var l = require("../app/716358.js");
function i(e) {
  const {
    participantJid: t
  } = e;
  return (0, r.smax)("participant", {
    jid: (0, l.USER_JID)(t)
  });
}
function u(e) {
  const {
    participantArgs: t
  } = e;
  return (0, r.smax)("approve", null, (0, a.REPEATED_CHILD)(i, t, 1, 19999));
}
function s(e) {
  const {
    participantJid: t
  } = e;
  return (0, r.smax)("participant", {
    jid: (0, l.USER_JID)(t)
  });
}
function c(e) {
  const {
    participantArgs: t
  } = e;
  return (0, r.smax)("reject", null, (0, a.REPEATED_CHILD)(s, t, 1, 19999));
}