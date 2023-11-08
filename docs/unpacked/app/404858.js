Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRevokeRequestCodeRequest = function (e) {
  const {
    participantArgs: t
  } = e;
  return (0, a.mergeBaseSetGroupMixin)((0, i.smax)("iq", null, (0, i.smax)("revoke", null, (0, r.REPEATED_CHILD)(s, t, 1, 1000))), e);
};
exports.makeRevokeRequestCodeRequestRevokeParticipant = s;
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./667149.js");
var o = require("./716358.js");
function s(e) {
  const {
    participantJid: t
  } = e;
  return (0, i.smax)("participant", {
    jid: (0, o.USER_JID)(t)
  });
}