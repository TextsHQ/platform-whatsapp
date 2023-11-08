Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupMixin = function (e) {
  const t = (0, i.attrGroupJid)(e, "sub_group_jid");
  if (!t.success) {
    return t;
  }
  return (0, r.makeResult)({
    subGroupJid: t.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");