Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientTtlRuleValidator = undefined;
var a = require("../app/632157.js");
var r = require("./834322.js");
exports.clientTtlRuleValidator = e => {
  const {
    qpConfigTtlSeconds: t
  } = e.data;
  const n = (0, a.castToUnixTime)(t);
  if ((0, a.isInFuture)((0, a.futureUnixTime)(n, e.ts))) {
    return r.RESULT_TRUE;
  } else {
    return r.RESULT_FALSE_CLIENT_TTL_PROMOTION_TOO_OLD;
  }
};