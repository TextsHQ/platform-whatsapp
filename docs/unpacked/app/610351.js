var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetNewsletterResponseSuccess = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(e, "newsletter");
  if (!r.success) {
    return r;
  }
  const s = (0, l.optionalChildWithTag)(r.value, "metadata", u);
  if (!s.success) {
    return s;
  }
  const c = (0, o.parseIQResultResponseMixin)(e, t);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, c.value), {}, {
    newsletterMetadata: s.value
  }));
};
exports.parseGetNewsletterResponseSuccessNewsletterMetadata = u;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./822591.js");
var s = require("./470368.js");
var l = require("./686310.js");
function u(e) {
  const t = (0, l.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, s.parseNewsletterMetadataIQResponsePayloadMixin)(e);
  n.success;
  return n;
}