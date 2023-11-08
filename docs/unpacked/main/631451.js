Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatActionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./936627.js");
var o = require("./659606.js");
var l = require("./104845.js");
const {
  TIMER: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  ChatAction: [2312, {
    chatActionChatType: [3, r.CHAT_ACTION_CHAT_TYPE],
    chatActionEntryPoint: [2, o.CHAT_ACTION_ENTRY_POINT],
    chatActionMuteDuration: [4, i],
    chatActionType: [1, l.CHAT_ACTION_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.ChatActionWamEvent = u;