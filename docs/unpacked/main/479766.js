Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enabledTimeRuleValidator = undefined;
var a = require("../app/632157.js");
var r = require("./834322.js");
exports.enabledTimeRuleValidator = e => {
  const {
    qpConfigStartTimeSeconds: t,
    qpConfigEndTimeSeconds: n
  } = e.data;
  const o = (0, a.unixTime)();
  if ((0, a.castToUnixTime)(t) > o) {
    return r.RESULT_FALSE_ENABLED_TIME_START_TIME_IN_FUTURE;
  }
  if ((0, a.castToUnixTime)(n) < o) {
    return r.RESULT_FALSE_ENABLED_TIME_END_TIME_IN_PAST;
  } else {
    return r.RESULT_TRUE;
  }
};