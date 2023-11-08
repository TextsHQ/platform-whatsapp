Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUndoKeepInChatExpiration = function () {
  return (0, r.getABPropConfigValue)("keep_in_chat_undo_duration_limit") || i.REVOKE_WINDOW;
};
exports.isKeepInChatInCAGEnabled = function () {
  return (0, r.getABPropConfigValue)("supports_keep_in_chat_in_cag");
};
var r = require("./287461.js");
var i = require("./140661.js");