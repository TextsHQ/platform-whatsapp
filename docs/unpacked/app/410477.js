Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSmbDataSharingSettingMixin = function (e) {
  const t = (0, i.assertTag)(e, "privacy");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "smb_data_sharing_with_meta_consent");
  if (!n.success) {
    return n;
  }
  const a = (0, r.parseSmbDataSharingSettingValueMixin)(n.value);
  if (!a.success) {
    return a;
  }
  return a;
};
var r = require("./376909.js");
var i = require("./686310.js");