Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESULT_TRUE = exports.RESULT_FALSE_SURFACE_INCORRECT_SURFACE = exports.RESULT_FALSE_SURFACE_DELAY_RECENTLY_USED = exports.RESULT_FALSE_SURFACE_DELAY_OUTSIDE_ELIGIBILITY_DURATION = exports.RESULT_FALSE_HOLDOUT_IN_HOLDOUT = exports.RESULT_FALSE_FILTERS_UNKNOWN = exports.RESULT_FALSE_FILTERS_SECONDS_SINCE_LAST_IMPRESSION = exports.RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT = exports.RESULT_FALSE_FILTERS_CHECK_FAILED = exports.RESULT_FALSE_FILTERS_CHECK_EXCEPTION = exports.RESULT_FALSE_ENABLED_TIME_START_TIME_IN_FUTURE = exports.RESULT_FALSE_ENABLED_TIME_END_TIME_IN_PAST = exports.RESULT_FALSE_CONTENT_MISSING_ACTION_LINK = exports.RESULT_FALSE_CLIENT_TTL_PROMOTION_TOO_OLD = exports.RESULT_FALSE_ACTION_LIMIT_PRIMARY_CLICK_LIMIT_REACHED = exports.RESULT_FALSE_ACTION_LIMIT_IMPRESSION_LIMIT_REACHED = exports.RESULT_FALSE_ACTION_LIMIT_DISMISS_LIMIT_REACHED = undefined;
exports.RESULT_TRUE = {
  result: true
};
exports.RESULT_FALSE_ACTION_LIMIT_DISMISS_LIMIT_REACHED = {
  reason: "actionLimitRuleValidator: dissmiss limit reached"
};
exports.RESULT_FALSE_ACTION_LIMIT_PRIMARY_CLICK_LIMIT_REACHED = {
  reason: "actionLimitRuleValidator: primary click limit reached"
};
exports.RESULT_FALSE_ACTION_LIMIT_IMPRESSION_LIMIT_REACHED = {
  reason: "actionLimitRuleValidator: impression limit reached"
};
exports.RESULT_FALSE_CLIENT_TTL_PROMOTION_TOO_OLD = {
  reason: "clientTtlRuleValidator: promotion too old"
};
exports.RESULT_FALSE_CONTENT_MISSING_ACTION_LINK = {
  reason: "contentRuleValidator: missing action link"
};
exports.RESULT_FALSE_ENABLED_TIME_START_TIME_IN_FUTURE = {
  reason: "enabledTimeRuleValidator: start time in future"
};
exports.RESULT_FALSE_ENABLED_TIME_END_TIME_IN_PAST = {
  reason: "enabledTimeRuleValidator: end time in past"
};
exports.RESULT_FALSE_FILTERS_CHECK_FAILED = {
  reason: "filtersRuleValidator: filter check failed"
};
exports.RESULT_FALSE_FILTERS_CHECK_EXCEPTION = {
  reason: "filtersRuleValidator: filter check exception"
};
exports.RESULT_FALSE_FILTERS_UNKNOWN = {
  reason: "filtersRuleValidator: unknown filter failed default check"
};
exports.RESULT_FALSE_FILTERS_SECONDS_SINCE_LAST_IMPRESSION = {
  reason: "filtersRuleValidator: seconds since last impression check failed"
};
exports.RESULT_FALSE_FILTERS_OTHER_PROMOTION_EVENT = {
  reason: "filtersRuleValidator: other promotion event check failed"
};
exports.RESULT_FALSE_HOLDOUT_IN_HOLDOUT = {
  reason: "holdoutRuleValidator: in holdout"
};
exports.RESULT_FALSE_SURFACE_DELAY_RECENTLY_USED = {
  reason: "surfaceDelayRuleValidator: surface recently used"
};
exports.RESULT_FALSE_SURFACE_DELAY_OUTSIDE_ELIGIBILITY_DURATION = {
  reason: "surfaceDelayRuleValidator: outside eligibility duration"
};
exports.RESULT_FALSE_SURFACE_INCORRECT_SURFACE = {
  reason: "surfaceRuleValidator: incorrect surface"
};