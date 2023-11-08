Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryPictureMatchedResponseMixin = function (e) {
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
  return (0, r.makeResult)({
    id: n.value,
    type: o.value
  });
};
var r = require("./135781.js");
var i = require("./684781.js");
var a = require("./686310.js");