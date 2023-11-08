Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLeaveNotificationRequest = function (e) {
  const t = (0, i.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "leave");
  if (!n.success) {
    return n;
  }
  const a = (0, r.parseCommonNotificationMixin)(e);
  if (!a.success) {
    return a;
  }
  return a;
};
var r = require("./202550.js");
var i = require("./686310.js");