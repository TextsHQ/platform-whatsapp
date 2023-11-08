Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcStatusSessionWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  WebcStatusSession: [1880, {
    webcStatusMutedItemCount: [4, i],
    webcStatusMutedRowCount: [7, i],
    webcStatusRecentItemCount: [2, i],
    webcStatusRecentRowCount: [5, i],
    webcStatusSessionId: [1, i],
    webcStatusViewedItemCount: [3, i],
    webcStatusViewedRowCount: [6, i]
  }, [1, 1, 1], "regular"]
});
exports.WebcStatusSessionWamEvent = a;