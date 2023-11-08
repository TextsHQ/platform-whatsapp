Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MdAppStateOfflineNotificationsWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  MdAppStateOfflineNotifications: [2602, {
    redundantCount: [1, i]
  }, [1, 20, 1000], "regular"]
});
exports.MdAppStateOfflineNotificationsWamEvent = a;