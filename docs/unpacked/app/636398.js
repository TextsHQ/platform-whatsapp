Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetNewsletterMessagesResponseSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const l = (0, s.flattenedChildWithTag)(e, "messages");
  if (!l.success) {
    return l;
  }
  const u = (0, o.attrStringFromReference)(t, ["id"]);
  if (!u.success) {
    return u;
  }
  const c = (0, s.literal)(s.attrString, e, "id", u.value);
  if (!c.success) {
    return c;
  }
  const d = (0, a.attrDomainJid)(e, "from");
  if (!d.success) {
    return d;
  }
  const p = (0, s.literal)(s.attrString, e, "type", "result");
  if (!p.success) {
    return p;
  }
  const f = (0, i.parseNewsletterMessageResponsePayloadMixin)(l.value);
  if (!f.success) {
    return f;
  }
  return (0, r.makeResult)({
    from: d.value,
    type: p.value,
    messagesNewsletterMessageResponsePayloadMixin: f.value
  });
};
var r = require("./135781.js");
var i = require("./776118.js");
var a = require("./568113.js");
var o = require("./591439.js");
var s = require("./686310.js");