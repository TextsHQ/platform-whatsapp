Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantMixin = function (e) {
  const t = (0, a.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseParticipantMixins)(e);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    participantMixins: n.value
  });
};
var r = require("./135781.js");
var i = require("./243011.js");
var a = require("./686310.js");