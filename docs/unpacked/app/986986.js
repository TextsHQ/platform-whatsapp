Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupInfoParticipantMixin = function (e) {
  const t = (0, a.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseGroupInfoParticipantMixins)(e);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    groupInfoParticipantMixins: n.value
  });
};
var r = require("./135781.js");
var i = require("./747103.js");
var a = require("./686310.js");