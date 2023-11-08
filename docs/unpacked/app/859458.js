Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageChatTypeFromWid = function (e) {
  if (e.isUser()) {
    return r.MESSAGE_CHAT_TYPE.INDIVIDUAL;
  }
  if (e.isGroup()) {
    return r.MESSAGE_CHAT_TYPE.GROUP;
  }
  if (e.isBroadcast()) {
    return r.MESSAGE_CHAT_TYPE.BROADCAST;
  }
  if (e.isStatusV3()) {
    return r.MESSAGE_CHAT_TYPE.STATUS;
  }
  if (e.isNewsletter()) {
    return r.MESSAGE_CHAT_TYPE.CHANNEL;
  }
  return r.MESSAGE_CHAT_TYPE.OTHER;
};
var r = require("./244186.js");