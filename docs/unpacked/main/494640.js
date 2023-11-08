Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMembershipApprovalGroupJoinModeMixin = function (e, t) {
  const n = function (e) {
    const {
      groupJoinMembershipApprovalModeEnabledOrDisabledMixinGroupArgs: t
    } = e;
    return (0, a.smax)("membership_approval_mode", null, (0, o.mergeGroupJoinMembershipApprovalModeEnabledOrDisabledMixinGroup)((0, a.smax)("group_join", null), t));
  }(t);
  return (0, r.mergeStanzas)(e, n);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("./323712.js");