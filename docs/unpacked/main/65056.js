Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupJoinMembershipApprovalModeDisabledMixin = function (e) {
  const t = (0, r.assertTag)(e, "group_join");
  if (!t.success) {
    return t;
  }
  const n = (0, r.literal)(r.attrString, e, "state", "off");
  if (!n.success) {
    return n;
  }
  return (0, a.makeResult)({
    state: n.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/686310.js");