Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionLimitRuleValidator = undefined;
var a = require("./834322.js");
var r = require("./748860.js");
exports.actionLimitRuleValidator = e => {
  var t;
  const n = (t = e.data.qpConfigPacing) === null || t === undefined ? undefined : t.promotionConfig;
  if (n != null) {
    var o;
    const {
      maxDismisses: t
    } = n;
    if (t > 0 && e.tracking.dismisses >= t) {
      return a.RESULT_FALSE_ACTION_LIMIT_DISMISS_LIMIT_REACHED;
    }
    const {
      maxPrimaryClicks: l
    } = n;
    if (l > 0 && e.tracking.primaryClicks >= l) {
      return a.RESULT_FALSE_ACTION_LIMIT_PRIMARY_CLICK_LIMIT_REACHED;
    }
    const i = (o = e.tracking.lastImpressionTs) !== null && o !== undefined ? o : e.ts;
    const u = (0, r.checkIsWithinEligibilityWindow)(i, e.data.qpConfigEligibilityDurationMs);
    const {
      maxImpressions: s
    } = n;
    if (s > 0 && e.tracking.impressions >= s && !u) {
      return a.RESULT_FALSE_ACTION_LIMIT_IMPRESSION_LIMIT_REACHED;
    }
  }
  return a.RESULT_TRUE;
};