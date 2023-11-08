Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcMediaAnalyzedWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  STRING: a,
  TIMER: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  WebcMediaAnalyzed: [912, {
    webcMediaAnalyzeT: [3, o],
    webcMediaExtensions: [2, a],
    webcMediaSupported: [1, i]
  }, [1, 1, 1], "regular"]
});
exports.WebcMediaAnalyzedWamEvent = s;