Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMessageResponsePayloadMessage = s;
exports.parseNewsletterMessageResponsePayloadMixin = function (e) {
  const t = (0, o.assertTag)(e, "messages");
  if (!t.success) {
    return t;
  }
  const n = (0, o.optional)(a.attrNewsletterJid, e, "jid");
  if (!n.success) {
    return n;
  }
  const i = (0, o.optional)(o.attrIntRange, e, "t", 0, undefined);
  if (!i.success) {
    return i;
  }
  const l = (0, o.mapChildrenWithTag)(e, "message", 0, 300, s);
  if (!l.success) {
    return l;
  }
  return (0, r.makeResult)({
    jid: n.value,
    t: i.value,
    message: l.value
  });
};
var r = require("./135781.js");
var i = require("./625780.js");
var a = require("./568113.js");
var o = require("./686310.js");
function s(e) {
  const t = (0, o.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseNewsletterMessageHistoryWithAddOnsMixin)(e);
  n.success;
  return n;
}