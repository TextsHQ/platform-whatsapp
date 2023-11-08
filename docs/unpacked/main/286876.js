Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupCatchUpWamEvent = undefined;
var a = require("../app/901032.js");
const {
  INTEGER: r
} = a.TYPES;
const o = (0, a.defineEvents)({
  GroupCatchUp: [3058, {
    mentionsCountPendingPercentage: [4, r]
  }, [1, 1, 1], "regular"]
});
exports.GroupCatchUpWamEvent = o;