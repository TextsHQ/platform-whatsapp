Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupInfoParticipantAdminMixins = function (e) {
  const t = (0, o.parseParticipantWithJidLidAndDisplayNameMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJidLidAndDisplayName",
      value: t.value
    });
  }
  const n = (0, i.parseParticipantWithJidAndLidMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJidAndLid",
      value: n.value
    });
  }
  const u = (0, a.parseParticipantWithJidAndPnMixin)(e);
  if (u.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJidAndPn",
      value: u.value
    });
  }
  const c = (0, s.parseParticipantWithJidMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJid",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["ParticipantWithJidLidAndDisplayName", "ParticipantWithJidAndLid", "ParticipantWithJidAndPn", "ParticipantWithJid"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./249609.js");
var a = require("./907573.js");
var o = require("./16062.js");
var s = require("./94750.js");
var l = require("./686310.js");