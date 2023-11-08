Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationSettingWamEvent = undefined;
var r = require("./901032.js");
var i = require("./970656.js");
var a = require("./639614.js");
const {
  BOOLEAN: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  NotificationSetting: [3684, {
    groupReactionNotification: [1, o],
    groupShowNotification: [2, o],
    groupSoundTone: [3, a.NOTIFICATION_SOUND_TONE],
    inAppNotificationAlertStyle: [4, i.IN_APP_NOTIFICATION_ALERT_STYLE],
    inAppNotificationSound: [5, o],
    inAppNotificationVibrate: [6, o],
    messageReactionNotification: [7, o],
    messageShowNotification: [8, o],
    messageSoundTone: [9, a.NOTIFICATION_SOUND_TONE],
    offlineNotification: [11, o],
    showPreview: [10, o]
  }, [1, 1, 1], "regular"]
});
exports.NotificationSettingWamEvent = s;