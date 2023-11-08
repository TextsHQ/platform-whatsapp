Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexEventV2WamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  INTEGER: a,
  STRING: o,
  TIMER: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  MexEventV2: [4336, {
    mexEventV2DurationMs: [1, s],
    mexEventV2EndTime: [2, a],
    mexEventV2ErrorCodes: [3, o],
    mexEventV2Errors: [4, o],
    mexEventV2HasData: [5, i],
    mexEventV2IsMex: [6, i],
    mexEventV2OperationName: [7, o],
    mexEventV2QueryId: [8, o],
    mexEventV2StartTime: [9, a]
  }, [1, 1, 1], "regular"]
});
exports.MexEventV2WamEvent = l;