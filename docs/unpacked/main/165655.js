Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaFsGroupJoinRequestActionWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./81430.js");
const {
  BOOLEAN: o,
  INTEGER: l,
  STRING: i,
  TIMER: u
} = a.TYPES;
const s = (0, a.defineEvents)({
  WaFsGroupJoinRequestAction: [3944, {
    groupJid: [1, i],
    groupJoinRequestAction: [2, r.GROUP_JOIN_REQUEST_ACTION_TYPE],
    groupJoinRequestGroupsInCommon: [5, l],
    isSuccessful: [3, o],
    serverResponseTime: [4, u]
  }, [1, 1, 1], "regular"]
});
exports.WaFsGroupJoinRequestActionWamEvent = s;