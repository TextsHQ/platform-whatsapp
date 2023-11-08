Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendChatStateComposing = function (e) {
  return (0, r.sendChatStateProtocol)((0, i.widToChatJid)(e), "typing");
};
exports.sendChatStatePaused = function (e) {
  return (0, r.sendChatStateProtocol)((0, i.widToChatJid)(e), "idle");
};
exports.sendChatStateRecording = function (e) {
  return (0, r.sendChatStateProtocol)((0, i.widToChatJid)(e), "recording_audio");
};
var r = require("./693172.js");
var i = require("./574819.js");