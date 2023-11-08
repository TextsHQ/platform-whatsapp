Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSetNewsletterMetadataResponseClientError = function (e, t) {
  const n = (0, a.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, i.parseSetNewsletterMetadataClientErrors)(e, t);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    setNewsletterMetadataClientErrors: o.value
  });
};
var r = require("./135781.js");
var i = require("./801206.js");
var a = require("./686310.js");