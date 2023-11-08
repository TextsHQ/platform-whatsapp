Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMembershipRequestsCancellationParticipantMixins = function (e) {
  const t = (0, r.parseCancelGroupMembershipRequestsParticipantRequestNotFoundMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "CancelGroupMembershipRequestsParticipantRequestNotFound",
      value: t.value
    });
  }
  const n = (0, o.parseParticipantNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAuthorized",
      value: n.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["ParticipantRequestNotFound", "ParticipantNotAuthorized"], [t, n]);
};
var a = require("../app/135781.js");
var r = require("./343649.js");
var o = require("./812414.js");
var l = require("../app/686310.js");