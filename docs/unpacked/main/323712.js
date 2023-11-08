Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup = function (e, t) {
  if (t.isGroupJoinMembershipApprovalModeEnabled) {
    return (0, o.mergeGroupJoinMembershipApprovalModeEnabledMixin)(e);
  }
  if (t.isGroupJoinMembershipApprovalModeDisabled) {
    return (0, r.mergeGroupJoinMembershipApprovalModeDisabledMixin)(e);
  }
  throw new a.SmaxMixinGroupExhaustiveError();
};
var a = require("../app/715626.js");
var r = require("./217013.js");
var o = require("./203646.js");