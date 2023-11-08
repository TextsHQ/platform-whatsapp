Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeJoinLinkedGroupRequest = function (e) {
  const {
    joinLinkedGroupType: t,
    joinLinkedGroupJid: n
  } = e;
  return (0, o.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, r.smax)("join_linked_group", {
    type: (0, a.OPTIONAL)(l.CUSTOM_STRING, t),
    jid: (0, l.GROUP_JID)(n)
  })), e);
};
var a = require("../app/93864.js");
var r = require("../app/758616.js");
var o = require("../app/667149.js");
var l = require("../app/716358.js");