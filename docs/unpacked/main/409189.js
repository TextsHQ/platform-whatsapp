Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUnlinkGroupsRequest = function (e) {
  const {
    groupArgs: t
  } = e;
  return (0, l.mergeBaseSetGroupMixin)((0, o.smax)("iq", null, (0, o.smax)("unlink", {
    unlink_type: "sub_group"
  }, (0, r.REPEATED_CHILD)(u, t, 1, 1000))), e);
};
exports.makeUnlinkGroupsRequestUnlinkGroup = u;
var a = require("../app/93864.js");
var r = require("../app/974339.js");
var o = require("../app/758616.js");
var l = require("../app/667149.js");
var i = require("../app/716358.js");
function u(e) {
  const {
    groupJid: t,
    hasGroupRemoveOrphanedMembersTrue: n
  } = e;
  return (0, o.smax)("group", {
    jid: (0, i.GROUP_JID)(t),
    remove_orphaned_members: (0, a.OPTIONAL_LITERAL)("true", n)
  });
}