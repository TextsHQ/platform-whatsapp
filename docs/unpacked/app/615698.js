Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TsBitArrayWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i
} = r.TYPES;
const a = (0, r.defineEvents)({
  TsBitArray: [4332, {
    bitarrayHigh: [1, i],
    bitarrayLength: [2, i],
    bitarrayLow: [3, i],
    cumulativeBits: [4, i],
    relativeTimestampMs: [5, i],
    sessionSeq: [6, i],
    tsSessionId: [7, i]
  }, [1, 1, 1], "regular"]
});
exports.TsBitArrayWamEvent = a;