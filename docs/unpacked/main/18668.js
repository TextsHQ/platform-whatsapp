Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logChatActionEvent = function (e) {
  if (!(0, a.getABPropConfigValue)("enable_logging_multi_select_from_chat_list")) {
    return;
  }
  const {
    chatActionEntryPoint: t,
    chatActionType: n
  } = e;
  new r.ChatActionWamEvent({
    chatActionEntryPoint: t,
    chatActionType: n
  }).commit();
};
var a = require("../app/287461.js");
var r = require("./631451.js");