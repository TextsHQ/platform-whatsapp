Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAddParticipantsRequest = function (e) {
  const {
    participantArgs: t
  } = e;
  return (0, l.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, r.smax)("add", null, (0, a.REPEATED_CHILD)(s, t, 1, 1024))), e);
};
exports.makeAddParticipantsRequestAddParticipant = s;
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/770006.js");
var l = require("../app/667149.js");
var i = require("./632912.js");
var u = require("../app/716358.js");
function s(e) {
  const {
    participantJid: t,
    phoneNumberMixinArgs: n
  } = e;
  return (0, o.optionalMerge)(i.mergePhoneNumberMixin, (0, r.smax)("participant", {
    jid: (0, u.USER_JID)(t)
  }), n);
}