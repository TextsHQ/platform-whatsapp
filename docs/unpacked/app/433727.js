Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationEngagementWamEvent = undefined;
var r = require("./901032.js");
var i = require("./749286.js");
var a = require("./560588.js");
const {
  BOOLEAN: o,
  INTEGER: s,
  STRING: l,
  TIMER: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  NotificationEngagement: [3796, {
    avgNotifEngagementT: [1, u],
    groupSizeBucket: [2, i.CLIENT_GROUP_SIZE_BUCKET],
    groupTypeClient: [3, a.GROUP_TYPE_CLIENT],
    isAGroup: [4, o],
    isWebBackgroundSyncNotif: [18, o],
    threadId: [5, l],
    totalMessageReminderNotifShown: [16, s],
    totalMessageReminderNotifTapToOpen: [17, s],
    totalNotifMarkAsRead: [6, s],
    totalNotifMissedCallVoipCallback: [7, s],
    totalNotifMissedCallVoipMessage: [8, s],
    totalNotifOthers: [9, s],
    totalNotifReply: [10, s],
    totalNotifRtcVoipAccept: [11, s],
    totalNotifRtcVoipDecline: [12, s],
    totalNotifShowPreview: [13, s],
    totalNotifShown: [14, s],
    totalNotifTapToOpen: [15, s]
  }, [1, 1, 1], "regular"]
});
exports.NotificationEngagementWamEvent = c;