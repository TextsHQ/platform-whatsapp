Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterCreationTimeMetadataMixin = function (e) {
  const t = (0, i.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "creation_time");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrIntRange)(n.value, "value", 0, undefined);
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    creationTimeValue: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");