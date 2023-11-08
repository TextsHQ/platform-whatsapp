Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatMuteWamEvent = undefined;
var r = require("./901032.js");
var i = require("./7101.js");
var a = require("./309483.js");
var o = require("./866736.js");
var s = require("./119550.js");
var l = require("./591077.js");
const {
  INTEGER: u,
  TIMER: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  ChatMute: [2280, {
    actionConducted: [3, i.ACTION_CONDUCTED],
    chatMuteNotificationChoice: [5, a.CHAT_MUTE_NOTIFICATION_CHOICE],
    muteChatType: [4, o.MUTE_CHAT_TYPE],
    muteDuration: [1, c],
    muteEntryPoint: [6, s.MUTE_ENTRY_POINT],
    muteGroupSize: [2, u],
    waOfficialAccountName: [7, l.WA_OFFICIAL_ACCOUNT_NAME]
  }, [1, 1, 1], "regular"]
});
exports.ChatMuteWamEvent = d;