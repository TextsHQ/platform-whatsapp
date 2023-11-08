Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeepInChatNotifWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  KeepInChatNotif: [3484, {
    kicGroupNotificationTaps: [3, i],
    kicGroupNotifications: [4, i],
    kicNotificationTaps: [5, i],
    kicNotifications: [6, i]
  }, [1, 1, 1], "regular"]
});
exports.KeepInChatNotifWamEvent = a;