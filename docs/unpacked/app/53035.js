Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAdminNotificationGeosuspendedOrGeounsuspendedStateMixinMixinGroup = function (e) {
  const t = (0, i.parseAdminNotificationGeosuspendedStateMixinMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "AdminNotificationGeosuspendedStateMixin",
      value: t.value
    });
  }
  const n = (0, a.parseAdminNotificationGeounsuspendedStateMixinMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "AdminNotificationGeounsuspendedStateMixin",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["AdminNotificationGeosuspendedStateMixin", "AdminNotificationGeounsuspendedStateMixin"], [t, n]);
};
var r = require("./135781.js");
var i = require("./182239.js");
var a = require("./298105.js");
var o = require("./686310.js");