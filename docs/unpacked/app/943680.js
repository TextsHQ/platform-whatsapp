Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockEventsFsWamEvent = undefined;
var r = require("./901032.js");
var i = require("./13370.js");
var a = require("./273821.js");
var o = require("./172780.js");
const {
  BOOLEAN: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  BlockEventsFs: [4288, {
    blockEntryPoint: [1, i.BLOCK_ENTRY_POINT],
    blockEventActionType: [2, a.BLOCK_EVENT_ACTION_TYPE],
    blockEventIsSuspicious: [3, s],
    blockEventIsUnsub: [4, s],
    pastCall: [5, s],
    pastCallResult: [6, o.CALL_RESULT_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.BlockEventsFsWamEvent = l;