Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationDeliveryWamEvent = undefined;
var r = require("./901032.js");
var i = require("./723126.js");
var a = require("./467004.js");
var o = require("./702085.js");
var s = require("./410615.js");
const {
  INTEGER: l,
  STRING: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  NotificationDelivery: [3748, {
    clientMessageId: [1, u],
    notificationAction: [2, i.NOTIFICATION_ACTION_TYPE],
    notificationDeliveryT: [3, l],
    notificationDestination: [4, a.NOTIFICATION_DESTINATION_TYPE],
    notificationId: [5, u],
    notificationSource: [6, o.NOTIFICATION_SOURCE_TYPE],
    threadId: [7, u],
    uiNotificationType: [8, s.NOTIFICATION_TYPE_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.NotificationDeliveryWamEvent = c;