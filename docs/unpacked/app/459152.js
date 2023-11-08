Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBadRequestOrRateLimitedIQErrorResponseMixinGroup = function (e, t) {
  const n = (0, i.parseBadRequestIQErrorResponseMixin)(e, t);
  if (n.success) {
    return (0, r.makeResult)({
      name: "BadRequestIQErrorResponse",
      value: n.value
    });
  }
  const s = (0, a.parseRateLimitedIQErrorResponseMixin)(e, t);
  if (s.success) {
    return (0, r.makeResult)({
      name: "RateLimitedIQErrorResponse",
      value: s.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["BadRequestIQErrorResponse", "RateLimitedIQErrorResponse"], [n, s]);
};
var r = require("./135781.js");
var i = require("./704663.js");
var a = require("./565914.js");
var o = require("./686310.js");