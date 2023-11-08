Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAdminNotificationGeosuspendedStateMixinGeosuspendedCountry = a;
exports.parseAdminNotificationGeosuspendedStateMixinMixin = function (e) {
  const t = (0, i.assertTag)(e, "admin");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "geosuspended");
  if (!n.success) {
    return n;
  }
  const o = (0, i.mapChildrenWithTag)(n.value, "country", 1, 250, a);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    geosuspendedCountry: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "country");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "iso_code");
  if (n.success) {
    return (0, r.makeResult)({
      isoCode: n.value
    });
  } else {
    return n;
  }
}