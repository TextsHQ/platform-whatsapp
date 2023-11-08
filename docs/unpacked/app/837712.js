var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMessageDeliveryUpdateNotificationRequest = function (e) {
  const t = (0, l.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, l.flattenedChildWithTag)(e, "message_delivery_updates");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(n.value, "messages");
  if (!r.success) {
    return r;
  }
  const s = (0, o.parseCommonNotificationMixin)(e);
  if (!s.success) {
    return s;
  }
  const c = (0, l.mapChildrenWithTag)(r.value, "message", 1, 300, u);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, s.value), {}, {
    messageDeliveryUpdatesMessagesMessage: c.value
  }));
};
exports.parseMessageDeliveryUpdateNotificationRequestMessageDeliveryUpdatesMessagesMessage = u;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./202550.js");
var s = require("./848049.js");
var l = require("./686310.js");
function u(e) {
  const t = (0, l.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, s.parseNewsletterMessageDeliveryUpdateMixin)(e);
  n.success;
  return n;
}