Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIGProfessionalResponseBaseMixin = function (e) {
  const t = (0, r.assertTag)(e, "ig_professional");
  if (!t.success) {
    return t;
  }
  const n = (0, r.flattenedChildWithTag)(e, "ig_handle");
  if (!n.success) {
    return n;
  }
  const o = (0, r.contentString)(n.value);
  if (!o.success) {
    return o;
  }
  return (0, a.makeResult)({
    igHandleElementValue: o.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/686310.js");