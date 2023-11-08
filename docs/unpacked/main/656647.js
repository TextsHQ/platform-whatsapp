Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup = function (e) {
  const t = (0, l.parseParticipantNotInGroupMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotInGroup",
      value: t.value
    });
  }
  const n = (0, o.parseParticipantNotAllowedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAllowed",
      value: n.value
    });
  }
  const s = (0, r.parseParticipantNotAcceptableMixin)(e);
  if (s.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAcceptable",
      value: s.value
    });
  }
  const c = (0, i.parseRemoveParticipantsLinkedGroupsServerErrorMixin)(e);
  if (c.success) {
    return (0, a.makeResult)({
      name: "RemoveParticipantsLinkedGroupsServerError",
      value: c.value
    });
  }
  return (0, u.errorMixinDisjunction)(e, ["ParticipantNotInGroup", "ParticipantNotAllowed", "ParticipantNotAcceptable", "RemoveParticipantsLinkedGroupsServerError"], [t, n, s, c]);
};
var a = require("../app/135781.js");
var r = require("./428182.js");
var o = require("./80719.js");
var l = require("./294784.js");
var i = require("./924772.js");
var u = require("../app/686310.js");