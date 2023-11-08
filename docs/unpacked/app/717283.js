Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserNoticeErrorWamEvent = undefined;
var r = require("./901032.js");
var i = require("./327696.js");
var a = require("./740122.js");
const {
  INTEGER: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  UserNoticeError: [2474, {
    noticeType: [4, i.NOTICE_TYPE],
    userNoticeContentVersion: [2, o],
    userNoticeErrorEvent: [3, a.USER_NOTICE_ERROR_EVENT],
    userNoticeId: [1, o]
  }, [1, 1, 1], "regular"]
});
exports.UserNoticeErrorWamEvent = s;