Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMembershipRequestsActionRejectParticipantMixins = function (e) {
  const t = (0, r.parseMembershipRequestsActionParticipantRequestNotFoundMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "MembershipRequestsActionParticipantRequestNotFound",
      value: t.value
    });
  }
  const n = (0, o.parseParticipantConflictMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "ParticipantConflict",
      value: n.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["ParticipantRequestNotFound", "ParticipantConflict"], [t, n]);
};
var a = require("../app/135781.js");
var r = require("./159523.js");
var o = require("./916631.js");
var l = require("../app/686310.js");