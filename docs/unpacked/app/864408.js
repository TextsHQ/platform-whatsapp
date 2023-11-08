Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterSettingsMetadataMixin = function (e) {
  const t = (0, a.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "settings");
  if (!n.success) {
    return n;
  }
  const o = (0, i.parseNewsletterReactionSettingsMixin)(n.value);
  return (0, r.makeResult)({
    settingsNewsletterReactionSettingsMixin: o.success ? o.value : null
  });
};
var r = require("./135781.js");
var i = require("./172927.js");
var a = require("./686310.js");