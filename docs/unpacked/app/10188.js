Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParentGroupMixin = function (e) {
  const t = (0, i.attrGroupJid)(e, "parent_group_jid");
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    parentGroupJid: t.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");