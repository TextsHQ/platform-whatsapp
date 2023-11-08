Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisappearingMessageChatPickerWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./123965.js");
var o = require("./145454.js");
const {
  INTEGER: l,
  STRING: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  DisappearingMessageChatPicker: [3398, {
    chatsSelected: [1, l],
    dmChatPickerEntryPoint: [2, r.DM_CHAT_PICKER_ENTRY_POINT_TYPE],
    dmChatPickerEventName: [3, o.DM_CHAT_PICKER_EVENT_NAME_TYPE],
    ephemeralityDuration: [4, l],
    groupChatsSelected: [5, l],
    groupSizeDistributionJson: [9, i],
    newlyEphemeralChats: [7, l],
    totalChatsInChatPicker: [8, l]
  }, [1, 1, 1], "regular"]
});
exports.DisappearingMessageChatPickerWamEvent = u;