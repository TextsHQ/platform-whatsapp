Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAdStatusMixin = function (e) {
  const t = (0, o.flattenedChildWithTag)(e, "ad_status");
  if (!t.success) {
    return t;
  }
  const n = (0, o.attrStringEnum)(t.value, "has_created_ad", r.ENUM_FALSE_TRUE);
  if (!n.success) {
    return n;
  }
  const l = (0, o.attrStringEnum)(t.value, "has_active_ctwa_ad", r.ENUM_FALSE_TRUE);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)({
    adStatusHasCreatedAd: n.value,
    adStatusHasActiveCtwaAd: l.value
  });
};
var a = require("../app/135781.js");
var r = require("./592099.js");
var o = require("../app/686310.js");