Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcMemoryStatWamEvent = undefined;
var a = require("../app/901032.js");
const {
  BOOLEAN: r,
  INTEGER: o,
  NUMBER: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  WebcMemoryStat: [1188, {
    hasVerifiedNumber: [12, r],
    jsHeapSizeLimit: [9, o],
    numMessages: [8, l],
    totalJsHeapSize: [10, o],
    uptime: [6, l],
    usedJsHeapSize: [11, o]
  }, [1, 1, 1], "regular"]
});
exports.WebcMemoryStatWamEvent = i;