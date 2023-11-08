Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseComposingMixin = function (e) {
  const t = (0, i.assertTag)(e, "chatstate");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "composing");
  if (!n.success) {
    return n;
  }
  const a = (0, i.optionalLiteral)(i.attrString, n.value, "media", "audio");
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    composingMedia: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");