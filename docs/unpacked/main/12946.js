Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHasDisplayNameMixin = function (e) {
  const t = (0, r.flattenedChildWithTag)(e, "display_name");
  if (!t.success) {
    return t;
  }
  const n = (0, r.contentString)(t.value);
  if (!n.success) {
    return n;
  }
  return (0, a.makeResult)({
    displayNameElementValue: n.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/686310.js");