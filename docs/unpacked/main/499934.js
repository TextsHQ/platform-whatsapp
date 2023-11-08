Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSubGroupSuggestionWithoutCreatorMixin = function (e, t) {
  const n = function (e) {
    const {
      subGroupSuggestionJid: t
    } = e;
    return (0, a.smax)("sub_group_suggestion", {
      jid: (0, o.GROUP_JID)(t)
    });
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("../app/716358.js");