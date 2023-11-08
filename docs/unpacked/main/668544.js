Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PttWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./117548.js");
var o = require("./933606.js");
const {
  BOOLEAN: l,
  INTEGER: i,
  NUMBER: u,
  TIMER: s
} = a.TYPES;
const c = (0, a.defineEvents)({
  Ptt: [458, {
    pttDraftPlayCnt: [7, i],
    pttDraftSeekCnt: [8, i],
    pttDuration: [5, s],
    pttLock: [4, l],
    pttPauseCnt: [9, i],
    pttResult: [1, r.PTT_RESULT_TYPE],
    pttSize: [3, u],
    pttSource: [2, o.PTT_SOURCE_TYPE],
    pttStop: [6, l],
    pttStopTapCnt: [10, i]
  }, [1, 1, 1], "regular"]
});
exports.PttWamEvent = c;