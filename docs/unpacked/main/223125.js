Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLinkSubGroupsRequest = function (e) {
  const {
    groupArgs: t
  } = e;
  return (0, o.mergeBaseSetGroupMixin)((0, r.smax)("iq", null, (0, r.smax)("links", null, (0, r.smax)("link", {
    link_type: "sub_group"
  }, (0, a.REPEATED_CHILD)(i, t, 1, 1000)))), e);
};
exports.makeLinkSubGroupsRequestLinksLinkGroup = i;
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/667149.js");
var l = require("../app/716358.js");
function i(e) {
  const {
    groupJid: t
  } = e;
  return (0, r.smax)("group", {
    jid: (0, l.GROUP_JID)(t)
  });
}