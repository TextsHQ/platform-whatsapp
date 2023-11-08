Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantParentLinkedGroupsResourceConstraintMixin = function (e) {
  const t = (0, r.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, r.literal)(r.attrString, e, "error", "412");
  if (!n.success) {
    return n;
  }
  return (0, a.makeResult)({
    error: n.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/686310.js");