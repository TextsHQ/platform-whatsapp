Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup = function (e) {
  const t = (0, o.parseGroupJoinMembershipApprovalModeEnabledMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "GroupJoinMembershipApprovalModeEnabled",
      value: t.value
    });
  }
  const n = (0, r.parseGroupJoinMembershipApprovalModeDisabledMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "GroupJoinMembershipApprovalModeDisabled",
      value: n.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["GroupJoinMembershipApprovalModeEnabled", "GroupJoinMembershipApprovalModeDisabled"], [t, n]);
};
var a = require("../app/135781.js");
var r = require("./65056.js");
var o = require("../app/779247.js");
var l = require("../app/686310.js");