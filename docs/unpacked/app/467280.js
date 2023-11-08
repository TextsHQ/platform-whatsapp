Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBadLinkedGroupProfilePictureErrorMixin = function (e) {
  const t = (0, i.assertTag)(e, "picture");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrString, e, "status", "405");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    status: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");