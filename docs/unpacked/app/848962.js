Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterVerificationMetadataMixin = function (e) {
  const t = (0, a.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "verification");
  if (!n.success) {
    return n;
  }
  const o = (0, a.attrStringEnum)(n.value, "state", i.ENUM_UNVERIFIED_VERIFIED);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    verificationState: o.value
  });
};
var r = require("./135781.js");
var i = require("./684781.js");
var a = require("./686310.js");