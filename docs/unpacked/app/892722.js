var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLiveUpdatesNotificationRequest = function (e) {
  const t = (0, l.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, l.flattenedChildWithTag)(e, "live_updates");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(n.value, "messages");
  if (!r.success) {
    return r;
  }
  const u = (0, s.parseNewsletterMessageResponsePayloadMixin)(r.value);
  if (!u.success) {
    return u;
  }
  const c = (0, o.parseCommonNotificationMixin)(e);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)({
    liveUpdatesMessagesNewsletterMessageResponsePayloadMixin: u.value
  }, c.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./202550.js");
var s = require("./776118.js");
var l = require("./686310.js");