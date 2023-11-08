var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationDailyCountKind = undefined;
exports.incrementNotificationDailyCount = function (e, t) {
  const n = o.DailyAggregatedStatsCollection.gaddForToday();
  switch (t) {
    case r.ChatKindType.Chat:
      if (e === i.KIC_NOTIFICATION) {
        n.kicNotifications++;
      } else {
        if (e !== i.KIC_NOTIFICATION_TAP) {
          throw (0, l.default)(`Invalid count kind ${e}`);
        }
        n.kicNotificationTaps++;
      }
      break;
    case r.ChatKindType.Group:
      if (e === i.KIC_NOTIFICATION) {
        n.kicNotifications++;
        n.kicGroupNotifications++;
      } else {
        if (e !== i.KIC_NOTIFICATION_TAP) {
          throw (0, l.default)(`Invalid count kind ${e}`);
        }
        n.kicNotificationTaps++;
        n.kicGroupNotificationTaps++;
      }
      break;
    case r.ChatKindType.Broadcast:
    case r.ChatKindType.Community:
    case r.ChatKindType.Newsletter:
  }
};
var r = require("../app/953213.js");
var o = require("../app/355135.js");
var l = a(require("../app/556869.js"));
const i = require("../vendor/76672.js").Mirrored(["KIC_NOTIFICATION", "KIC_NOTIFICATION_TAP"]);
exports.NotificationDailyCountKind = i;