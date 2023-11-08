Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeParentGroupDefaultMembershipApprovalModeMixin = function (e) {
  const t = (0, a.smax)("parent", {
    default_membership_approval_mode: "request_required"
  });
  return (0, r.mergeStanzas)(e, t);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");