Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeGroupJoinMembershipApprovalModeDisabledMixin = function (e) {
  const t = (0, a.smax)("group_join", {
    state: "off"
  });
  return (0, r.mergeStanzas)(e, t);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");