var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSyncPrivacySettingRequest = function (e) {
  const t = (0, u.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, u.flattenedChildWithTag)(e, "privacy");
  if (!n.success) {
    return n;
  }
  const r = (0, l.literalJid)(l.attrDomainJid, e, "from", "s.whatsapp.net");
  if (!r.success) {
    return r;
  }
  const c = (0, u.optional)(l.attrUserJid, e, "to");
  if (!c.success) {
    return c;
  }
  const d = (0, u.literal)(u.attrString, e, "type", "business");
  if (!d.success) {
    return d;
  }
  const p = (0, s.parseSmbDataSharingSettingMixin)(n.value);
  const f = (0, o.parseServerNotificationMixin)(e);
  if (!f.success) {
    return f;
  }
  return (0, a.makeResult)((0, i.default)({
    from: r.value,
    to: c.value,
    type: d.value,
    privacySmbDataSharingSettingMixin: p.success ? p.value : null
  }, f.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./46531.js");
var s = require("./410477.js");
var l = require("./568113.js");
var u = require("./686310.js");