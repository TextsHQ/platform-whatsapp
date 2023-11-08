Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterWithMetadataIQResponsePayloadMixin = function (e) {
  const t = (0, i.assertTag)(e, "newsletter");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "metadata");
  if (!n.success) {
    return n;
  }
  const a = (0, r.parseNewsletterMetadataIQResponsePayloadMixin)(n.value);
  if (!a.success) {
    return a;
  }
  return a;
};
var r = require("./470368.js");
var i = require("./686310.js");