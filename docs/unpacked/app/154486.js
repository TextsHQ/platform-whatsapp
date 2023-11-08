Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryPictureEmptyResponseMixin = function (e) {
  const t = (0, a.assertTag)(e, "picture");
  if (!t.success) {
    return t;
  }
  const n = (0, a.attrStringEnum)(e, "type", i.ENUM_IMAGE_PREVIEW);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    type: n.value
  });
};
var r = require("./135781.js");
var i = require("./684781.js");
var a = require("./686310.js");