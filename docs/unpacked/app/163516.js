Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAdminGeosuspendNotificationPayloadMixin = function (e) {
  const t = (0, a.assertTag)(e, "admin");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseAdminNotificationGeosuspendedOrGeounsuspendedStateMixinMixinGroup)(e);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    adminNotificationGeosuspendedOrGeounsuspendedStateMixinMixinGroup: n.value
  });
};
var r = require("./135781.js");
var i = require("./53035.js");
var a = require("./686310.js");