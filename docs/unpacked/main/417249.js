Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateSubGroupSuggestionSuggestionForExistingGroupsGroup = i;
exports.mergeCreateSubGroupSuggestionSuggestionForExistingGroupsMixin = function (e, t) {
  const n = function (e) {
    const {
      groupArgs: t
    } = e;
    return (0, r.smax)("sub_group_suggestion", null, (0, a.REPEATED_CHILD)(i, t, 1, 1000));
  }(t);
  return (0, o.mergeStanzas)(e, n);
};
var a = require("../app/974339.js");
var r = require("../app/758616.js");
var o = require("../app/770006.js");
var l = require("../app/716358.js");
function i(e) {
  const {
    groupJid: t
  } = e;
  return (0, r.smax)("group", {
    jid: (0, l.GROUP_JID)(t)
  });
}