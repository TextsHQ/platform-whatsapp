Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserActivityWamEvent = undefined;
var a = require("../app/901032.js");
const {
  INTEGER: r,
  STRING: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  UserActivity: [1384, {
    userActivityBitmapHigh: [4, r],
    userActivityBitmapLen: [5, r],
    userActivityBitmapLow: [3, r],
    userActivitySessionCum: [7, r],
    userActivitySessionId: [1, o],
    userActivitySessionSeq: [6, r],
    userActivityStartTime: [2, r]
  }, [1, 1, 1], "regular"]
});
exports.UserActivityWamEvent = l;