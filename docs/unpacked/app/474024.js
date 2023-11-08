Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryPictureDirectPathResponseMixin = function (e) {
  const t = (0, a.assertTag)(e, "picture");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrString)(e, "id");
  if (!n.success) {
    return n;
  }
  const o = (0, a.attrStringEnum)(e, "type", i.ENUM_IMAGE_PREVIEW);
  if (!o.success) {
    return o;
  }
  const s = (0, a.attrString)(e, "direct_path");
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    id: n.value,
    type: o.value,
    directPath: s.value
  });
};
var r = require("./135781.js");
var i = require("./684781.js");
var a = require("./686310.js");