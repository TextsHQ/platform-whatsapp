Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBadRequestOrRateLimitedOrNotAllowedIQErrorResponseMixinGroup = function (e, t) {
  const n = (0, r.parseBadRequestIQErrorResponseMixin)(e, t);
  if (n.success) {
    return (0, a.makeResult)({
      name: "BadRequestIQErrorResponse",
      value: n.value
    });
  }
  const u = (0, l.parseRateLimitedIQErrorResponseMixin)(e, t);
  if (u.success) {
    return (0, a.makeResult)({
      name: "RateLimitedIQErrorResponse",
      value: u.value
    });
  }
  const s = (0, o.parseNotAllowedIQErrorResponseMixin)(e, t);
  if (s.success) {
    return (0, a.makeResult)({
      name: "NotAllowedIQErrorResponse",
      value: s.value
    });
  }
  return (0, i.errorMixinDisjunction)(e, ["BadRequestIQErrorResponse", "RateLimitedIQErrorResponse", "NotAllowedIQErrorResponse"], [n, u, s]);
};
var a = require("../app/135781.js");
var r = require("../app/704663.js");
var o = require("../app/458534.js");
var l = require("../app/565914.js");
var i = require("../app/686310.js");