Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePromoteDemoteRequest = function (e) {
  const {
    promoteArgs: t,
    demoteArgs: n
  } = e;
  return (0, o.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, a.OPTIONAL_CHILD)(u, t), (0, a.OPTIONAL_CHILD)(c, n)), e);
};
exports.makePromoteDemoteRequestDemote = c;
exports.makePromoteDemoteRequestDemoteParticipant = s;
exports.makePromoteDemoteRequestPromote = u;
exports.makePromoteDemoteRequestPromoteParticipant = i;
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
  return (0, r.smax)("promote", null, (0, a.REPEATED_CHILD)(i, t, 0, 1024));
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
  return (0, r.smax)("demote", null, (0, a.REPEATED_CHILD)(s, t, 0, 1024));
}