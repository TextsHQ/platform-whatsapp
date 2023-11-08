Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcLinkPreviewDisplayWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./420142.js");
const {
  BOOLEAN: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  WebcLinkPreviewDisplay: [3864, {
    didFallbackNonHq: [2, o],
    didRequestHq: [3, o],
    didRespondHqPreview: [4, o],
    webcDisplayStatus: [1, r.WEBC_DISPLAY_STATUS_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.WebcLinkPreviewDisplayWamEvent = l;