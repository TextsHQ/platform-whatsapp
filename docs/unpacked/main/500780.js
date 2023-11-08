Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHasShowOnProfileMixin = function (e) {
  const t = (0, o.flattenedChildWithTag)(e, "show_on_profile");
  if (!t.success) {
    return t;
  }
  const n = (0, o.contentStringEnum)(t.value, r.ENUM_FALSE_TRUE);
  if (!n.success) {
    return n;
  }
  return (0, a.makeResult)({
    showOnProfileElementValue: n.value
  });
};
var a = require("../app/135781.js");
var r = require("./592099.js");
var o = require("../app/686310.js");