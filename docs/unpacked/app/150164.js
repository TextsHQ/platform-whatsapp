Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcStatusSyncWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i,
  TIMER: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  WebcStatusSync: [1878, {
    webcStatusMutedItemCount: [4, i],
    webcStatusMutedRowCount: [7, i],
    webcStatusRecentItemCount: [2, i],
    webcStatusRecentRowCount: [5, i],
    webcStatusSyncT: [1, a],
    webcStatusViewedItemCount: [3, i],
    webcStatusViewedRowCount: [6, i]
  }, [1, 1, 1], "regular"]
});
exports.WebcStatusSyncWamEvent = o;