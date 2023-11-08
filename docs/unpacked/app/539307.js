Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProfilePictureIdMixin = function (e) {
  const t = (0, i.assertTag)(e, "picture");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "id");
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    id: n.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");