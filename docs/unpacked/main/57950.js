Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMembershipRequestsActionAcceptParticipantMixins = function (e) {
  const t = (0, u.parseParticipantNotFoundMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotFound",
      value: t.value
    });
  }
  const n = (0, i.parseParticipantNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAuthorized",
      value: n.value
    });
  }
  const p = (0, l.parseParticipantForbiddenMixin)(e);
  if (p.success) {
    return (0, a.makeResult)({
      name: "ParticipantForbidden",
      value: p.value
    });
  }
  const m = (0, r.parseMembershipRequestsActionParticipantRequestNotFoundMixin)(e);
  if (m.success) {
    return (0, a.makeResult)({
      name: "MembershipRequestsActionParticipantRequestNotFound",
      value: m.value
    });
  }
  const h = (0, d.parseParticipantTemporarilyBlockedMixin)(e);
  if (h.success) {
    return (0, a.makeResult)({
      name: "ParticipantTemporarilyBlocked",
      value: h.value
    });
  }
  const g = (0, o.parseParticipantConflictMixin)(e);
  if (g.success) {
    return (0, a.makeResult)({
      name: "ParticipantConflict",
      value: g.value
    });
  }
  const E = (0, c.parseParticipantResourceConstraintMixin)(e);
  if (E.success) {
    return (0, a.makeResult)({
      name: "ParticipantResourceConstraint",
      value: E.value
    });
  }
  const v = (0, s.parseParticipantParentLinkedGroupsResourceConstraintMixin)(e);
  if (v.success) {
    return (0, a.makeResult)({
      name: "ParticipantParentLinkedGroupsResourceConstraint",
      value: v.value
    });
  }
  return (0, f.errorMixinDisjunction)(e, ["ParticipantNotFound", "ParticipantNotAuthorized", "ParticipantForbidden", "ParticipantRequestNotFound", "ParticipantTemporarilyBlocked", "ParticipantConflict", "ParticipantResourceConstraint", "ParticipantParentLinkedGroupsResourceConstraint"], [t, n, p, m, h, g, E, v]);
};
var a = require("../app/135781.js");
var r = require("./159523.js");
var o = require("./916631.js");
var l = require("./667758.js");
var i = require("./812414.js");
var u = require("./556306.js");
var s = require("./703087.js");
var c = require("./843326.js");
var d = require("./501354.js");
var f = require("../app/686310.js");