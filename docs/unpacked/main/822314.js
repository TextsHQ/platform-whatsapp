Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMembershipApprovalPropertyResponseMixinMixin = function (e) {
  const t = (0, o.assertTag)(e, "membership_approval_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, o.flattenedChildWithTag)(e, "group_join");
  if (!n.success) {
    return n;
  }
  const l = (0, r.parseGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup)(n.value);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)({
    groupJoinGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup: l.value
  });
};
var a = require("../app/135781.js");
var r = require("./758618.js");
var o = require("../app/686310.js");