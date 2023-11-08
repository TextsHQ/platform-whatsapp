Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickPromotionModel = undefined;
var a = require("../app/632157.js");
var r = require("../app/481173.js");
var o = require("../app/323829.js");
var l = require("../app/628905.js");
var i = require("./831424.js");
class u extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.promotion = (0, r.prop)();
  }
  dismiss() {
    const {
      tracking: e
    } = this.promotion;
    e.dismisses += 1;
    e.lastDismissTs = (0, a.unixTime)();
    (0, l.getJobManager)().fireAndForget(o.jobSerializers.dismissQuickPromotion(this.promotion.id));
    (0, i.maybeExecuteQuickPromotionCustomHandlingSpec)(this.promotion, "dismiss");
  }
  primaryActionClick() {
    const {
      tracking: e
    } = this.promotion;
    e.primaryClicks += 1;
    e.lastPrimaryClickTs = (0, a.unixTime)();
    (0, l.getJobManager)().fireAndForget(o.jobSerializers.primaryActionClickInQuickPromotion(this.promotion.id));
    (0, i.maybeExecuteQuickPromotionCustomHandlingSpec)(this.promotion, "primaryActionClick");
  }
  impression() {
    const {
      promotion: e
    } = this;
    const {
      tracking: t
    } = e;
    const {
      lastImpressionTs: n
    } = t;
    if (n != null) {
      const {
        qpConfigEligibilityDurationMs: t
      } = e.data;
      if ((0, a.castUnixTimeToMillisTime)(n) + t >= (0, a.millisTime)()) {
        return;
      }
    }
    t.impressions += 1;
    t.lastImpressionTs = (0, a.unixTime)();
    (0, l.getJobManager)().fireAndForget(o.jobSerializers.impressionOnQuickPromotion(e.id));
    (0, i.maybeExecuteQuickPromotionCustomHandlingSpec)(this.promotion, "impression");
  }
}
u.Proxy = "QuickPromotion";
const s = (0, r.defineModel)(u);
exports.QuickPromotionModel = s;