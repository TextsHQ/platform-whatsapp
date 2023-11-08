Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParentGroupDefaultMembershipApprovalModeMixin = function (e) {
  const t = (0, i.assertTag)(e, "parent");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrString, e, "default_membership_approval_mode", "request_required");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    defaultMembershipApprovalMode: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");