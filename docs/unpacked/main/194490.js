Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.surfaceDelayRuleValidator = undefined;
var a = require("../app/632157.js");
var r = require("./834322.js");
var o = require("./352224.js");
var l = require("./748860.js");
exports.surfaceDelayRuleValidator = e => {
  var t;
  const {
    qpConfigSurfaceDelayTimeSeconds: n
  } = e.data;
  if (n <= 0) {
    return r.RESULT_TRUE;
  }
  const i = o.QuickPromotionCollection.getPromotionWithLastImpressionOnSurface(e.surfaceId);
  if (i == null) {
    return r.RESULT_TRUE;
  }
  if (!(0, a.isInFuture)((0, a.futureUnixTime)(n, i.lastImpressionTs))) {
    return r.RESULT_TRUE;
  }
  if (i.promotion.promotion.id !== e.id) {
    return r.RESULT_FALSE_SURFACE_DELAY_RECENTLY_USED;
  }
  const u = (t = e.tracking.lastImpressionTs) !== null && t !== undefined ? t : e.ts;
  if ((0, l.checkIsWithinEligibilityWindow)(u, e.data.qpConfigEligibilityDurationMs)) {
    return r.RESULT_TRUE;
  } else {
    return r.RESULT_FALSE_SURFACE_DELAY_OUTSIDE_ELIGIBILITY_DURATION;
  }
};