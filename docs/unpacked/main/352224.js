Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickPromotionCollectionImpl = exports.QuickPromotionCollection = undefined;
var a = require("../app/392125.js");
var r = require("./839637.js");
var o = require("./330093.js");
class l extends a.BaseCollection {
  refreshPromotions(e) {
    this.reset();
    this.initializeFromCache(e.map(e => new o.QuickPromotionModel({
      id: e.id,
      promotion: e
    })));
    __LOG__(2)`Refreshed quick promotions cache`;
  }
  bestPromotionForSurface(e) {
    return this.findFirst(t => {
      let {
        promotion: n
      } = t;
      return (0, r.checkPromotionEligible)(n, e);
    });
  }
  getPromotionWithLastImpressionOnSurface(e) {
    return this.reduce((t, n) => {
      const {
        promotion: a
      } = n;
      const {
        surfaceId: r
      } = a;
      if (e !== r) {
        return t;
      }
      const {
        lastImpressionTs: o
      } = a.tracking;
      if (o == null) {
        return t;
      } else if (t == null) {
        return {
          promotion: n,
          lastImpressionTs: o
        };
      } else if (t.lastImpressionTs >= o) {
        return t;
      } else {
        return {
          promotion: n,
          lastImpressionTs: o
        };
      }
    }, null);
  }
  promotionDismissed(e) {
    const t = this.get(e);
    if (t != null) {
      t.dismiss();
    } else {
      __LOG__(3)`promotionDismissed: promotion not found`;
    }
  }
  promotionPrimaryActionClicked(e) {
    const t = this.get(e);
    if (t != null) {
      t.primaryActionClick();
    } else {
      __LOG__(3)`promotionPrimaryActionClicked: promotion not found`;
    }
  }
  promotionShown(e) {
    const t = this.get(e);
    if (t != null) {
      t.impression();
    } else {
      __LOG__(3)`promotionShown: promotion not found`;
    }
  }
}
exports.QuickPromotionCollectionImpl = l;
l.model = o.QuickPromotionModel;
const i = new l();
exports.QuickPromotionCollection = i;