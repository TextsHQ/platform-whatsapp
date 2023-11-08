var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDeleteNotificationRequest = function (e) {
  const t = (0, s.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, s.flattenedChildWithTag)(e, "delete");
  if (!n.success) {
    return n;
  }
  const r = (0, s.optionalLiteral)(s.attrString, e, "is_sender", "true");
  if (!r.success) {
    return r;
  }
  const l = (0, o.parseCommonNotificationMixin)(e);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)((0, i.default)({
    isSender: r.value
  }, l.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./202550.js");
var s = require("./686310.js");