var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNonceNotificationRequest = function (e) {
  const t = (0, l.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, l.flattenedChildWithTag)(e, "wa_ad_account_nonce");
  if (!n.success) {
    return n;
  }
  const r = (0, s.literalJid)(s.attrDomainJid, e, "from", "s.whatsapp.net");
  if (!r.success) {
    return r;
  }
  const u = (0, l.optional)(s.attrUserJid, e, "to");
  if (!u.success) {
    return u;
  }
  const c = (0, l.literal)(l.attrString, e, "type", "business");
  if (!c.success) {
    return c;
  }
  const d = (0, l.contentString)(n.value);
  if (!d.success) {
    return d;
  }
  const p = (0, o.parseServerNotificationMixin)(e);
  if (!p.success) {
    return p;
  }
  return (0, a.makeResult)((0, i.default)({
    from: r.value,
    to: u.value,
    type: c.value,
    waAdAccountNonceElementValue: d.value
  }, p.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./993167.js");
var s = require("./568113.js");
var l = require("./686310.js");