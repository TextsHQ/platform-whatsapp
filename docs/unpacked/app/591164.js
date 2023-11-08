Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMembershipMetadataMixin = function (e) {
  const t = (0, a.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "membership");
  if (!n.success) {
    return n;
  }
  const o = (0, a.attrStringEnum)(n.value, "type", i.ENUM_ADMIN_GUEST_OWNER_SUBSCRIBER);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    membershipType: o.value
  });
};
var r = require("./135781.js");
var i = require("./684781.js");
var a = require("./686310.js");