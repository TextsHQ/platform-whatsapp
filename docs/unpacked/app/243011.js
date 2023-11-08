Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantMixins = function (e) {
  const t = (0, s.parseParticipantWithJidLidAndDisplayNameMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJidLidAndDisplayName",
      value: t.value
    });
  }
  const n = (0, o.parseParticipantWithJidContainingLidAndDisplayNameMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJidContainingLidAndDisplayName",
      value: n.value
    });
  }
  const c = (0, i.parseParticipantWithJidAndLidMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJidAndLid",
      value: c.value
    });
  }
  const d = (0, a.parseParticipantWithJidAndPnMixin)(e);
  if (d.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJidAndPn",
      value: d.value
    });
  }
  const p = (0, l.parseParticipantWithJidMixin)(e);
  if (p.success) {
    return (0, r.makeResult)({
      name: "ParticipantWithJid",
      value: p.value
    });
  }
  return (0, u.errorMixinDisjunction)(e, ["ParticipantWithJidLidAndDisplayName", "ParticipantWithJidContainingLidAndDisplayName", "ParticipantWithJidAndLid", "ParticipantWithJidAndPn", "ParticipantWithJid"], [t, n, c, d, p]);
};
var r = require("./135781.js");
var i = require("./249609.js");
var a = require("./907573.js");
var o = require("./682409.js");
var s = require("./16062.js");
var l = require("./94750.js");
var u = require("./686310.js");