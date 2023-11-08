Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantGroupJoinRequestMixin = function (e) {
  const t = (0, o.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, o.flattenedChildWithTag)(e, "membership_approval_request");
  if (!n.success) {
    return n;
  }
  const l = (0, o.literal)(o.attrString, e, "error", "421");
  if (!l.success) {
    return l;
  }
  const i = (0, o.optional)(o.attrStringEnum, n.value, "error", r.ENUM_304_419);
  if (!i.success) {
    return i;
  }
  return (0, a.makeResult)({
    error: l.value,
    membershipApprovalRequestError: i.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/699342.js");
var o = require("../app/686310.js");