var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupChatProfilePictureV2Enabled = o;
exports.shouldDisplayInitialsInProfilePicture = function (e) {
  return o() && e != null && a.default.isUser(e) && !a.default.isPSA(e);
};
var i = require("./287461.js");
var a = r(require("./124928.js"));
function o() {
  return (0, i.getABPropConfigValue)("group_chat_profile_pictures_v2_enabled");
}