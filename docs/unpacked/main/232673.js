Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubscribeNewsletterClientErrors = function (e, t) {
  const n = (0, r.parseBadRequestIQErrorResponseMixin)(e, t);
  if (n.success) {
    return (0, a.makeResult)({
      name: "BadRequestIQErrorResponse",
      value: n.value
    });
  }
  const d = (0, o.parseItemNotFoundIQErrorResponseMixin)(e, t);
  if (d.success) {
    return (0, a.makeResult)({
      name: "ItemNotFoundIQErrorResponse",
      value: d.value
    });
  }
  const f = (0, u.parseResourceLimitIQErrorResponseMixin)(e, t);
  if (f.success) {
    return (0, a.makeResult)({
      name: "ResourceLimitIQErrorResponse",
      value: f.value
    });
  }
  const p = (0, i.parseRateLimitedIQErrorResponseMixin)(e, t);
  if (p.success) {
    return (0, a.makeResult)({
      name: "RateLimitedIQErrorResponse",
      value: p.value
    });
  }
  const m = (0, s.parseSuspendedIQErrorResponseMixin)(e, t);
  if (m.success) {
    return (0, a.makeResult)({
      name: "SuspendedIQErrorResponse",
      value: m.value
    });
  }
  const h = (0, l.parseNotAllowedIQErrorResponseMixin)(e, t);
  if (h.success) {
    return (0, a.makeResult)({
      name: "NotAllowedIQErrorResponse",
      value: h.value
    });
  }
  return (0, c.errorMixinDisjunction)(e, ["BadRequestIQErrorResponse", "ItemNotFoundIQErrorResponse", "ResourceLimitIQErrorResponse", "RateLimitedIQErrorResponse", "SuspendedIQErrorResponse", "NotAllowedIQErrorResponse"], [n, d, f, p, m, h]);
};
var a = require("../app/135781.js");
var r = require("../app/704663.js");
var o = require("../app/238929.js");
var l = require("../app/458534.js");
var i = require("../app/565914.js");
var u = require("./720504.js");
var s = require("../app/270663.js");
var c = require("../app/686310.js");