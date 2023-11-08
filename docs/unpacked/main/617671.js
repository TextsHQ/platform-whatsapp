Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserNoticeWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./720967.js");
var o = require("../app/327696.js");
var l = require("./452704.js");
const {
  INTEGER: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  UserNotice: [2472, {
    noticeTriggeredBy: [5, r.NOTICE_TRIGGERED_BY],
    noticeType: [4, o.NOTICE_TYPE],
    userNoticeContentVersion: [2, i],
    userNoticeEvent: [3, l.USER_NOTICE_EVENT],
    userNoticeId: [1, i]
  }, [1, 1, 1], "regular"]
});
exports.UserNoticeWamEvent = u;