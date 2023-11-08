Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupInfoParticipantNonAdminMixin = function (e) {
  const t = (0, i.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, r.parseParticipantMixin)(e);
  if (!n.success) {
    return n;
  }
  return n;
};
var r = require("./87722.js");
var i = require("./686310.js");