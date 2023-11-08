Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupMemberAddModeMixin = function (e) {
  const t = (0, a.flattenedChildWithTag)(e, "member_add_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseAdminOrAllMembersOrUnknownAddModeMixinGroup)(t.value);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    memberAddModeAdminOrAllMembersOrUnknownAddModeMixinGroup: n.value
  });
};
var r = require("./135781.js");
var i = require("./928016.js");
var a = require("./686310.js");