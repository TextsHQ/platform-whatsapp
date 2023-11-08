Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMyAddonsClientErrors = function (e, t) {
  const n = (0, i.parseBadRequestIQErrorResponseMixin)(e, t);
  if (n.success) {
    return (0, r.makeResult)({
      name: "BadRequestIQErrorResponse",
      value: n.value
    });
  }
  const u = (0, s.parseUnauthorizedIQErrorResponseMixin)(e, t);
  if (u.success) {
    return (0, r.makeResult)({
      name: "UnauthorizedIQErrorResponse",
      value: u.value
    });
  }
  const c = (0, a.parseItemNotFoundIQErrorResponseMixin)(e, t);
  if (c.success) {
    return (0, r.makeResult)({
      name: "ItemNotFoundIQErrorResponse",
      value: c.value
    });
  }
  const d = (0, o.parseRateLimitedIQErrorResponseMixin)(e, t);
  if (d.success) {
    return (0, r.makeResult)({
      name: "RateLimitedIQErrorResponse",
      value: d.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["BadRequestIQErrorResponse", "UnauthorizedIQErrorResponse", "ItemNotFoundIQErrorResponse", "RateLimitedIQErrorResponse"], [n, u, c, d]);
};
var r = require("./135781.js");
var i = require("./704663.js");
var a = require("./238929.js");
var o = require("./565914.js");
var s = require("./220472.js");
var l = require("./686310.js");