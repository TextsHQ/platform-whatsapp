Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcResourceLoadWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  STRING: a,
  TIMER: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  WebcResourceLoad: [688, {
    webcResourceCached: [3, i],
    webcResourceDuration: [2, o],
    webcResourceName: [1, a]
  }, [1, 1, 1], "regular"]
});
exports.WebcResourceLoadWamEvent = s;