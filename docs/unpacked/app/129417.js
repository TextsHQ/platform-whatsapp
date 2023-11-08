Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.username1on1ChatCreationEnabled = function () {
  return Boolean((0, r.getABPropConfigValue)("username_1on1_chat"));
};
exports.usernameChangeEnabled = function () {
  return Boolean((0, r.getABPropConfigValue)("username_change"));
};
exports.usernameContactlessChatEnabled = function () {
  return Boolean((0, r.getABPropConfigValue)("username_contact_display")) && Boolean((0, r.getABPropConfigValue)("username_1on1_chat")) && Boolean((0, r.getABPropConfigValue)("username_usync"));
};
exports.usernameDisplayedEnabled = function () {
  return Boolean((0, r.getABPropConfigValue)("username_contact_display"));
};
exports.usernameSupported = function () {
  return (0, r.getABPropConfigValue)("username_creation") && (0, i.primaryFeatureEnabled)("username_supported");
};
exports.usernameUsyncEnabled = function () {
  return Boolean((0, r.getABPropConfigValue)("username_usync"));
};
var r = require("./287461.js");
var i = require("./233137.js");