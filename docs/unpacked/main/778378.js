var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.otherPromotionEventFilter = undefined;
var r = require("../app/632157.js");
var o = require("./834322.js");
var l = require("./352224.js");
var i = require("./748860.js");
var u = a(require("../app/556869.js"));
function s(e) {
  if (e) {
    return o.RESULT_TRUE;
  } else {
    return o.RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT;
  }
}
const c = {
  name: "other_promotion_event",
  filter: function (e, t) {
    const n = (0, i.convertFilterParametersIntoMap)(t);
    const a = n.get("event");
    if (a == null) {
      __LOG__(4, undefined, new Error(), true)`otherPromotionEventFilter: missing "event"`;
      SEND_LOGS("quick-promotion-filter-missing-parameter");
      throw (0, u.default)("otherPromotionEventFilter: missing \"event\"");
    }
    const c = function (e) {
      switch (e) {
        case "impression":
        case "primary_action":
        case "dismiss_action":
          return e;
        default:
          return null;
      }
    }(a);
    if (c == null) {
      __LOG__(4, undefined, new Error(), true)`otherPromotionEventFilter: unknown event`;
      SEND_LOGS("quick-promotion-filter-parameter-incorrect");
      throw (0, u.default)("otherPromotionEventFilter: unknown event");
    }
    const d = n.get("promo_id");
    if (d == null) {
      __LOG__(4, undefined, new Error(), true)`otherPromotionEventFilter: missing "promo_id"`;
      SEND_LOGS("quick-promotion-filter-missing-parameter");
      throw (0, u.default)("otherPromotionEventFilter: missing \"promo_id\"");
    }
    const f = n.get("metric");
    if (f == null) {
      __LOG__(4, undefined, new Error(), true)`otherPromotionEventFilter: missing "metric"`;
      SEND_LOGS("quick-promotion-filter-missing-parameter");
      throw (0, u.default)("otherPromotionEventFilter: missing \"metric\"");
    }
    if (n.get("nux_id") == null) {
      __LOG__(4, undefined, new Error(), true)`otherPromotionEventFilter: missing "nux_id"`;
      SEND_LOGS("quick-promotion-filter-missing-parameter");
      throw (0, u.default)("otherPromotionEventFilter: missing \"nux_id\"");
    }
    const p = parseInt(n.get("event_count"), 10);
    if (Number.isNaN(p)) {
      __LOG__(4, undefined, new Error(), true)`otherPromotionEventFilter: missing "event_count"`;
      SEND_LOGS("quick-promotion-filter-missing-parameter");
      throw (0, u.default)("otherPromotionEventFilter: missing \"event_count\"");
    }
    if (e.id === d && c === "impression") {
      var m;
      const t = (m = e.tracking.lastImpressionTs) !== null && m !== undefined ? m : e.ts;
      if ((0, i.checkIsWithinEligibilityWindow)(t, e.data.qpConfigEligibilityDurationMs)) {
        return o.RESULT_TRUE;
      }
    }
    const h = function (e) {
      switch (e) {
        case "count_at_most":
        case "count_at_least":
        case "seconds_since_greater_than":
        case "seconds_since_less_than":
          return e;
        default:
          return null;
      }
    }(f);
    if (h == null) {
      __LOG__(4, undefined, new Error(), true)`otherPromotionEventFilter: unknown metric`;
      SEND_LOGS("quick-promotion-filter-parameter-incorrect");
      throw (0, u.default)("otherPromotionEventFilter: unknown metric");
    }
    const g = l.QuickPromotionCollection.get(d);
    if (h === "count_at_most" || h === "count_at_least") {
      let e;
      if (g != null) {
        switch (c) {
          case "impression":
            e = g.promotion.tracking.impressions;
            break;
          case "primary_action":
            e = g.promotion.tracking.primaryClicks;
            break;
          default:
            e = g.promotion.tracking.dismisses;
        }
      } else {
        e = 0;
      }
      return s(h === "count_at_most" ? e <= p : e >= p);
    }
    let E;
    switch (c) {
      case "impression":
        E = g == null ? undefined : g.promotion.tracking.lastImpressionTs;
        break;
      case "primary_action":
        E = g == null ? undefined : g.promotion.tracking.lastPrimaryClickTs;
        break;
      default:
        E = g == null ? undefined : g.promotion.tracking.lastDismissTs;
    }
    if (h === "seconds_since_greater_than") {
      if (E == null) {
        return o.RESULT_TRUE;
      }
      const e = (0, r.futureUnixTime)(p, E);
      return s(!(0, r.isInFuture)(e));
    }
    if (E == null) {
      return o.RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT;
    }
    const v = (0, r.futureUnixTime)(p, E);
    return s(v === (0, r.unixTime)() || (0, r.isInFuture)(v));
  }
};
exports.otherPromotionEventFilter = c;