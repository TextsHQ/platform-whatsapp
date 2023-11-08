Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRemoveParticipantsRequest = function (e) {
  const {
    participantArgs: t,
    hasRemoveLinkedGroupsTrue: n
  } = e;
  return (0, l.mergeBaseSetGroupMixin)((0, o.smax)("iq", null, (0, o.smax)("remove", {
    linked_groups: (0, a.OPTIONAL_LITERAL)("true", n)
  }, (0, r.REPEATED_CHILD)(u, t, 1, 1024))), e);
};
exports.makeRemoveParticipantsRequestRemoveParticipant = u;
var a = require("../app/93864.js");
var r = require("../app/974339.js");
var o = require("../app/758616.js");
var l = require("../app/667149.js");
var i = require("../app/716358.js");
function u(e) {
  const {
    participantJid: t
  } = e;
  return (0, o.smax)("participant", {
    jid: (0, i.USER_JID)(t)
  });
}