Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhatsappQuickPromotionClientEligibilityWaterfallWamEvent = undefined;
var a = require("../app/901032.js");
const {
  BOOLEAN: r,
  STRING: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  WhatsappQuickPromotionClientEligibilityWaterfall: [4360, {
    eligibilityStatus: [1, r],
    instanceLogData: [5, o],
    promotionId: [2, o],
    qpFailureReason: [3, o],
    step: [4, o]
  }, [1, 1, 1], "regular"]
});
exports.WhatsappQuickPromotionClientEligibilityWaterfallWamEvent = l;