Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcLinkPreviewResponseHandleWamEvent = undefined;
var r = require("./901032.js");
const {
  BOOLEAN: i,
  INTEGER: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  WebcLinkPreviewResponseHandle: [3860, {
    didRespondHqPreview: [5, i],
    isPreviewSuccess: [2, i],
    previewDurationMs: [4, a],
    previewSessionId: [3, o]
  }, [1, 1, 1], "regular"]
});
exports.WebcLinkPreviewResponseHandleWamEvent = s;