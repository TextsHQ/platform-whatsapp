Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorNonSupportedPrimaryMixin = function (e) {
  const t = (0, i.assertTag)(e, "error");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrInt, e, "code", 452);
  if (!n.success) {
    return n;
  }
  const a = (0, i.literal)(i.attrString, e, "text", "primary-too-old");
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    code: n.value,
    text: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");