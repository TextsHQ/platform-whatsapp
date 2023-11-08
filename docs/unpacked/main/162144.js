Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCreateParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup = function (e) {
  const t = (0, r.parseCreateParticipantAddedResponseMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "CreateParticipantAddedResponse",
      value: t.value
    });
  }
  const n = (0, o.parseNonRegisteredWaUserParticipantErrorLidResponseMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "NonRegisteredWaUserParticipantErrorLidResponse",
      value: n.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["ParticipantAddedResponse", "NonRegisteredWaUserParticipantErrorLidResponse"], [t, n]);
};
var a = require("../app/135781.js");
var r = require("./808955.js");
var o = require("./304413.js");
var l = require("../app/686310.js");