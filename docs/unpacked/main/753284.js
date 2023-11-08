Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callersPrivacyTipsEnabled = function () {
  return r() && (0, a.getABPropConfigValue)("privacy_tips_callers_build");
};
exports.groupsPrivacyTipsEnabled = function () {
  return r() && (0, a.getABPropConfigValue)("privacy_tips_groups_build");
};
exports.privacyTipsEnabled = r;
exports.profilePrivacyTipsEnabled = function () {
  return r() && (0, a.getABPropConfigValue)("privacy_tips_profile_build");
};
var a = require("../app/287461.js");
function r() {
  return !(0, a.getABPropConfigValue)("privacy_tips_killswitch");
}