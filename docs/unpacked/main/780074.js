Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantAddedResponseParticipantMixinGroup = function (e) {
  const t = (0, d.parseParticipantTemporarilyBlockedFromDefaultSubGroupMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "ParticipantTemporarilyBlockedFromDefaultSubGroup",
      value: t.value
    });
  }
  const n = (0, l.parseParticipantNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAuthorized",
      value: n.value
    });
  }
  const p = (0, i.parseParticipantRequestCodeCanBeSentMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "ParticipantRequestCodeCanBeSent",
      value: p.value
    });
  }
  const m = (0, u.parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
      value: m.value
    });
  }
  const h = (0, s.parseParticipantResourceConstraintMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "ParticipantResourceConstraint",
      value: h.value
    });
  }
  const g = (0, o.parseParticipantNotAcceptableMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAcceptable",
      value: g.value
    });
  }
  const E = (0, c.parseParticipantResourceLimitMixin)(e);
  if (E.success) {
    return (0, a.makeResult)({
      name: "ParticipantResourceLimit",
      value: E.value
    });
  }
  const v = (0, r.parseCreateParticipantAddedMixin)(e);
  if (v.success) {
    return (0, a.makeResult)({
      name: "CreateParticipantAdded",
      value: v.value
    });
  }
  return (0, f.errorMixinDisjunction)(e, ["ParticipantTemporarilyBlockedFromDefaultSubGroup", "ParticipantNotAuthorized", "ParticipantRequestCodeCanBeSent", "ParticipantRequestCodeCannotBeCreatedForLegalConcerns", "ParticipantResourceConstraint", "ParticipantNotAcceptable", "ParticipantResourceLimit", "ParticipantAdded"], [t, n, p, m, h, g, E, v]);
};
var a = require("../app/135781.js");
var r = require("./80296.js");
var o = require("./428182.js");
var l = require("./812414.js");
var i = require("./842705.js");
var u = require("./489227.js");
var s = require("./843326.js");
var c = require("./351028.js");
var d = require("./164024.js");
var f = require("../app/686310.js");