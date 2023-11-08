Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantRequestCodeCanBeSentOrCannotBeCreatedForLegalConcernsMixinGroup = function (e) {
  const t = (0, r.parseParticipantRequestCodeCanBeSentMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "ParticipantRequestCodeCanBeSent",
      value: t.value
    });
  }
  const n = (0, o.parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
      value: n.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["ParticipantRequestCodeCanBeSent", "ParticipantRequestCodeCannotBeCreatedForLegalConcerns"], [t, n]);
};
var a = require("../app/135781.js");
var r = require("./842705.js");
var o = require("./489227.js");
var l = require("../app/686310.js");