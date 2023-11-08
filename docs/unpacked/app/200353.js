Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterInviteLinkMetadataMixin = function (e) {
  const t = (0, i.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "invite");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(n.value, "code");
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    inviteCode: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");