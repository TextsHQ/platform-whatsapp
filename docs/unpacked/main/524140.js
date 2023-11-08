var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondsSinceLastImpressionFilter = undefined;
exports.secondsSinceLastImpressionFilterImpl = i;
var r = require("./834322.js");
var o = require("./748860.js");
var l = a(require("../app/556869.js"));
function i(e, t) {
  const {
    lastImpressionTs: n
  } = e.tracking;
  const a = n != null ? n : e.ts;
  if ((0, o.checkIsWithinEligibilityWindow)(a, e.data.qpConfigEligibilityDurationMs)) {
    return r.RESULT_TRUE;
  }
  if (n == null) {
    return r.RESULT_TRUE;
  }
  const i = (0, o.convertFilterParametersIntoMap)(t).get("param");
  if (i == null) {
    __LOG__(4, undefined, new Error(), true)`secondsSinceLastImpressionFilter: missing "param"`;
    SEND_LOGS("quick-promotion-filter-missing-parameter");
    throw (0, l.default)("secondsSinceLastImpressionFilter: missing \"param\"");
  }
  const u = parseInt(i, 10);
  if (Number.isNaN(u)) {
    __LOG__(4, undefined, new Error(), true)`secondsSinceLastImpressionFilter: "param" is not an integer`;
    SEND_LOGS("quick-promotion-filter-parameter-incorrect");
    throw (0, l.default)("secondsSinceLastImpressionFilter: \"param\" is not an integer");
  }
  if (!(0, o.checkIsWithinEligibilityWindow)(n, u * 1000)) {
    return r.RESULT_TRUE;
  } else {
    return r.RESULT_FALSE_FILTERS_SECONDS_SINCE_LAST_IMPRESSION;
  }
}
const u = {
  name: "seconds_since_last_impression",
  filter: i
};
exports.secondsSinceLastImpressionFilter = u;