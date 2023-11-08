Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterHandleMetadataMixin = function (e) {
  const t = (0, i.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "handle");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(n.value, "text");
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    handleText: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");