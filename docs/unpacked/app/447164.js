Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLidContactAddToGroupEnabled = function () {
  return (0, r.getABPropConfigValue)("allow_lid_contacts_add_to_group");
};
exports.isLidContactOneOnOneChatEnabled = function () {
  return (0, r.getABPropConfigValue)("allow_lid_contacts_new_1on1_chat");
};
exports.isLidStorageEnabled = function () {
  return (0, r.getABPropConfigValue)("allow_lid_contacts_storage");
};
exports.isLidVcardSharingEnabled = function () {
  return (0, r.getABPropConfigValue)("allow_share_lid_contacts_vcard");
};
var r = require("./287461.js");