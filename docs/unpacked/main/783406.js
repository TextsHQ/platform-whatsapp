Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAddParticipantsParticipantMixins = function (e) {
  const t = (0, o.parseParticipantGroupJoinRequestMixin)(e);
  if (t.success) {
    return (0, a.makeResult)({
      name: "ParticipantGroupJoinRequest",
      value: t.value
    });
  }
  const n = (0, s.parseParticipantNotAuthorizedMixin)(e);
  if (n.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAuthorized",
      value: n.value
    });
  }
  const E = (0, l.parseParticipantInBanListMixin)(e);
  if (E.success) {
    return (0, a.makeResult)({
      name: "ParticipantInBanList",
      value: E.value
    });
  }
  const v = (0, c.parseParticipantRequestCodeCanBeSentMixin)(e);
  if (v.success) {
    return (0, a.makeResult)({
      name: "ParticipantRequestCodeCanBeSent",
      value: v.value
    });
  }
  const _ = (0, d.parseParticipantRequestCodeCannotBeCreatedForLegalConcernsMixin)(e);
  if (_.success) {
    return (0, a.makeResult)({
      name: "ParticipantRequestCodeCannotBeCreatedForLegalConcerns",
      value: _.value
    });
  }
  const y = (0, h.parseParticipantTemporarilyBlockedMixin)(e);
  if (y.success) {
    return (0, a.makeResult)({
      name: "ParticipantTemporarilyBlocked",
      value: y.value
    });
  }
  const C = (0, r.parseParticipantConflictMixin)(e);
  if (C.success) {
    return (0, a.makeResult)({
      name: "ParticipantConflict",
      value: C.value
    });
  }
  const b = (0, p.parseParticipantResourceLimitMixin)(e);
  if (b.success) {
    return (0, a.makeResult)({
      name: "ParticipantResourceLimit",
      value: b.value
    });
  }
  const M = (0, f.parseParticipantResourceConstraintMixin)(e);
  if (M.success) {
    return (0, a.makeResult)({
      name: "ParticipantResourceConstraint",
      value: M.value
    });
  }
  const S = (0, i.parseParticipantNotAcceptableMixin)(e);
  if (S.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAcceptable",
      value: S.value
    });
  }
  const T = (0, u.parseParticipantNotAddressableMixin)(e);
  if (T.success) {
    return (0, a.makeResult)({
      name: "ParticipantNotAddressable",
      value: T.value
    });
  }
  const w = (0, m.parseParticipantTemporarilyBlockedFromDefaultSubGroupMixin)(e);
  if (w.success) {
    return (0, a.makeResult)({
      name: "ParticipantTemporarilyBlockedFromDefaultSubGroup",
      value: w.value
    });
  }
  return (0, g.errorMixinDisjunction)(e, ["ParticipantGroupJoinRequest", "ParticipantNotAuthorized", "ParticipantInBanList", "ParticipantRequestCodeCanBeSent", "ParticipantRequestCodeCannotBeCreatedForLegalConcerns", "ParticipantTemporarilyBlocked", "ParticipantConflict", "ParticipantResourceLimit", "ParticipantResourceConstraint", "ParticipantNotAcceptable", "ParticipantNotAddressable", "ParticipantTemporarilyBlockedFromDefaultSubGroup"], [t, n, E, v, _, y, C, b, M, S, T, w]);
};
var a = require("../app/135781.js");
var r = require("./916631.js");
var o = require("./271137.js");
var l = require("./225680.js");
var i = require("./428182.js");
var u = require("../app/37772.js");
var s = require("./812414.js");
var c = require("./842705.js");
var d = require("./489227.js");
var f = require("./843326.js");
var p = require("./351028.js");
var m = require("./164024.js");
var h = require("./501354.js");
var g = require("../app/686310.js");