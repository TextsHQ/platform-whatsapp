Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterDescriptionMetadataMixin = function (e) {
  const t = (0, a.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "description");
  if (!n.success) {
    return n;
  }
  const o = (0, i.parseQueryDescriptionResponseMixin)(n.value);
  return (0, r.makeResult)({
    descriptionQueryDescriptionResponseMixin: o.success ? o.value : null
  });
};
var r = require("./135781.js");
var i = require("./726324.js");
var a = require("./686310.js");