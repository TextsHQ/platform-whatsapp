var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetNewsletterMessageUpdatesResponseSuccess = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(e, "message_updates");
  if (!r.success) {
    return r;
  }
  const u = (0, l.flattenedChildWithTag)(r.value, "messages");
  if (!u.success) {
    return u;
  }
  const c = (0, s.parseNewsletterMessageResponsePayloadMixin)(u.value);
  if (!c.success) {
    return c;
  }
  const d = (0, o.parseIQResultResponseMixin)(e, t);
  if (!d.success) {
    return d;
  }
  return (0, a.makeResult)((0, i.default)({
    messageUpdatesMessagesNewsletterMessageResponsePayloadMixin: c.value
  }, d.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./822591.js");
var s = require("./776118.js");
var l = require("./686310.js");