Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUnauthorizedOrBadRequestOrRateLimitedIQErrorResponseMixinGroup = function (e, t) {
  const n = (0, l.parseUnauthorizedIQErrorResponseMixin)(e, t);
  if (n.success) {
    return (0, a.makeResult)({
      name: "UnauthorizedIQErrorResponse",
      value: n.value
    });
  }
  const u = (0, r.parseBadRequestIQErrorResponseMixin)(e, t);
  if (u.success) {
    return (0, a.makeResult)({
      name: "BadRequestIQErrorResponse",
      value: u.value
    });
  }
  const s = (0, o.parseRateLimitedIQErrorResponseMixin)(e, t);
  if (s.success) {
    return (0, a.makeResult)({
      name: "RateLimitedIQErrorResponse",
      value: s.value
    });
  }
  return (0, i.errorMixinDisjunction)(e, ["UnauthorizedIQErrorResponse", "BadRequestIQErrorResponse", "RateLimitedIQErrorResponse"], [n, u, s]);
};
var a = require("../app/135781.js");
var r = require("../app/704663.js");
var o = require("../app/565914.js");
var l = require("../app/220472.js");
var i = require("../app/686310.js");