Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processReplyMessagesEnabled = function () {
  return (0, r.getABPropConfigValue)("web_message_edit_processing_reply_messages");
};
exports.receiveCaptionEditEnabled = function () {
  return (0, r.getABPropConfigValue)("caption_edit_receive") || a();
};
exports.receiveTextEditEnabled = function () {
  return (0, r.getABPropConfigValue)("message_edit_receive") || i() || false;
};
exports.sendCagMsgEditEnabled = function () {
  return (0, r.getABPropConfigValue)("cag_message_edit_send");
};
exports.sendCaptionEditEnabled = a;
exports.sendTextEditEnabled = i;
var r = require("./287461.js");
function i() {
  return (0, r.getABPropConfigValue)("message_edit_send") || false;
}
function a() {
  return (0, r.getABPropConfigValue)("caption_edit_send");
}