Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCancelGroupMembershipRequestsRequest = function (e) {
  const {
    participantArgs: t
  } = e;
  return (0, o.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, r.smax)("cancel_membership_requests", null, (0, a.REPEATED_CHILD)(i, t, 1, 19999))), e);
};
exports.makeCancelGroupMembershipRequestsRequestCancelMembershipRequestsParticipant = i;
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