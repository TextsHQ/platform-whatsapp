Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupInfoParticipantMixins = function (e) {
  const t = (0, i.parseGroupInfoParticipantAdminMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "GroupInfoParticipantAdmin",
      value: t.value
    });
  }
  const n = (0, a.parseGroupInfoParticipantNonAdminMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "GroupInfoParticipantNonAdmin",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["GroupInfoParticipantAdmin", "GroupInfoParticipantNonAdmin"], [t, n]);
};
var r = require("./135781.js");
var i = require("./38854.js");
var a = require("./696297.js");
var o = require("./686310.js");