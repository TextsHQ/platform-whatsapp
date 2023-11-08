Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcChatOpenWamEvent = undefined;
var a = require("../app/901032.js");
const {
  INTEGER: r,
  NUMBER: o,
  TIMER: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  WebcChatOpen: [864, {
    webcChatOpenBeforePaintT: [7, l],
    webcChatOpenPaintedT: [6, l],
    webcChatOpenT: [2, l],
    webcFinalRenderedMessageCount: [5, r],
    webcRenderedMessageCount: [4, r],
    webcUnreadCount: [1, o],
    webcWindowHeightFloat: [8, o]
  }, [1, 1, 1], "regular"]
});
exports.WebcChatOpenWamEvent = i;