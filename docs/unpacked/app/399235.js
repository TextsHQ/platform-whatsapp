Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubGroupSuggestionDescriptionMixin = function (e) {
  const t = (0, i.assertTag)(e, "description");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "body");
  if (!n.success) {
    return n;
  }
  const a = (0, i.contentString)(n.value);
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    bodyElementValue: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");