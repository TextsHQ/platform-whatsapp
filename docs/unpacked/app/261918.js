Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMembershipApprovalGroupJoinModeEnabledMixin = function (e) {
  const t = (0, i.assertTag)(e, "membership_approval_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "group_join");
  if (!n.success) {
    return n;
  }
  const a = (0, r.parseGroupJoinMembershipApprovalModeEnabledMixin)(n.value);
  if (!a.success) {
    return a;
  }
  return a;
};
var r = require("./779247.js");
var i = require("./686310.js");