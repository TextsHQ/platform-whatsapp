Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcProgressiveImageWamEvent = undefined;
var r = require("./901032.js");
const {
  INTEGER: i,
  TIMER: a
} = r.TYPES;
const o = (0, r.defineEvents)({
  WebcProgressiveImage: [2226, {
    webcFirstRenderScans: [1, i],
    webcFirstRenderT: [2, a],
    webcFullQualityT: [4, a],
    webcMidQualityT: [3, a]
  }, [1, 1, 10], "regular"]
});
exports.WebcProgressiveImageWamEvent = o;