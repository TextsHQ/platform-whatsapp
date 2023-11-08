Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupSuggestionWithoutCreatorMixin = function (e) {
  const t = (0, a.assertTag)(e, "sub_group_suggestion");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrGroupJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    jid: n.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./686310.js");