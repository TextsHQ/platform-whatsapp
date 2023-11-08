var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAdminNotificationRequest = function (e) {
  const t = (0, l.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, l.flattenedChildWithTag)(e, "admin");
  if (!n.success) {
    return n;
  }
  const r = (0, o.parseAdminGeosuspendNotificationPayloadMixin)(n.value);
  const u = (0, s.parseCommonNotificationMixin)(e);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)({
    adminAdminGeosuspendNotificationPayloadMixin: r.success ? r.value : null
  }, u.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./163516.js");
var s = require("./202550.js");
var l = require("./686310.js");