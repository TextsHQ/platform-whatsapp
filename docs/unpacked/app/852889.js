Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MexEventWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  INTEGER: a,
  STRING: o,
  TIMER: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  MexEvent: [3782, {
    isMex: [1, i],
    mexEventData: [2, o],
    mexEventDurationT: [12, s],
    mexEventEndTime: [3, a],
    mexEventEnvelopeResponseStatus: [13, a],
    mexEventOperation: [7, o],
    mexEventPayloadResponseStatus: [14, a],
    mexEventRequestSize: [8, a],
    mexEventResponseSize: [9, a],
    mexEventRetries: [10, a],
    mexEventStartTime: [11, a]
  }, [1, 1, 1], "regular"]
});
exports.MexEventWamEvent = l;