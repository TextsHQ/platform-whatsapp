var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSetMetadataNotificationRequest = function (e) {
  const t = (0, u.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, u.flattenedChildWithTag)(e, "metadata");
  if (!n.success) {
    return n;
  }
  const r = (0, o.parseCommonNewsletterMetadataMixin)(n.value);
  if (!r.success) {
    return r;
  }
  const c = (0, l.parseNewsletterSettingsMetadataMixin)(n.value);
  const d = (0, s.parseCommonNotificationMixin)(e);
  if (!d.success) {
    return d;
  }
  return (0, a.makeResult)((0, i.default)({
    metadataCommonNewsletterMetadataMixin: r.value,
    metadataNewsletterSettingsMetadataMixin: c.success ? c.value : null
  }, d.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./738162.js");
var s = require("./202550.js");
var l = require("./864408.js");
var u = require("./686310.js");