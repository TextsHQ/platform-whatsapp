Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterNameMetadataMixin = function (e) {
  const t = (0, i.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "name");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(n.value, "id");
  if (!a.success) {
    return a;
  }
  const o = (0, i.attrIntRange)(n.value, "update_time", 0, undefined);
  if (!o.success) {
    return o;
  }
  const s = (0, i.contentString)(n.value);
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    nameId: a.value,
    nameUpdateTime: o.value,
    nameElementValue: s.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");