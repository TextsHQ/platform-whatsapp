Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TsExternalWamEvent = undefined;
var r = require("./901032.js");
var i = require("./370959.js");
const {
  INTEGER: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  TsExternal: [4574, {
    relativeTimestampMs: [1, a],
    tsDuration: [2, a],
    tsExternalEventSource: [3, i.TS_EXTERNAL_EVENT_SOURCE],
    tsSessionId: [4, a]
  }, [1, 1, 1], "regular"]
});
exports.TsExternalWamEvent = o;