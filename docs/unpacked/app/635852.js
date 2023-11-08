var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseJoinNotificationRequest = function (e) {
  const t = (0, u.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, u.flattenedChildWithTag)(e, "join");
  if (!n.success) {
    return n;
  }
  const r = (0, u.flattenedChildWithTag)(n.value, "metadata");
  if (!r.success) {
    return r;
  }
  const c = (0, o.parseCommonNewsletterMetadataMixin)(r.value);
  if (!c.success) {
    return c;
  }
  const d = (0, l.parseNewsletterSettingsMetadataMixin)(r.value);
  const p = (0, s.parseCommonNotificationMixin)(e);
  if (!p.success) {
    return p;
  }
  return (0, a.makeResult)((0, i.default)({
    joinMetadataCommonNewsletterMetadataMixin: c.value,
    joinMetadataNewsletterSettingsMetadataMixin: d.success ? d.value : null
  }, p.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./738162.js");
var s = require("./202550.js");
var l = require("./864408.js");
var u = require("./686310.js");