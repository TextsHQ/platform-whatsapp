Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBadRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorOrNotAllowedIQErrorResponseMixinGroup = function (e, t) {
  const n = (0, i.parseBadRequestIQErrorResponseMixin)(e, t);
  if (n.success) {
    return (0, r.makeResult)({
      name: "BadRequestIQErrorResponse",
      value: n.value
    });
  }
  const d = (0, u.parseUnavailableForLegalReasonsResponseMixin)(e, t);
  if (d.success) {
    return (0, r.makeResult)({
      name: "UnavailableForLegalReasonsResponse",
      value: d.value
    });
  }
  const p = (0, a.parseItemNotFoundIQErrorResponseMixin)(e, t);
  if (p.success) {
    return (0, r.makeResult)({
      name: "ItemNotFoundIQErrorResponse",
      value: p.value
    });
  }
  const f = (0, l.parseSuspendedIQErrorResponseMixin)(e, t);
  if (f.success) {
    return (0, r.makeResult)({
      name: "SuspendedIQErrorResponse",
      value: f.value
    });
  }
  const _ = (0, s.parseRateLimitedIQErrorResponseMixin)(e, t);
  if (_.success) {
    return (0, r.makeResult)({
      name: "RateLimitedIQErrorResponse",
      value: _.value
    });
  }
  const g = (0, o.parseNotAllowedIQErrorResponseMixin)(e, t);
  if (g.success) {
    return (0, r.makeResult)({
      name: "NotAllowedIQErrorResponse",
      value: g.value
    });
  }
  return (0, c.errorMixinDisjunction)(e, ["BadRequestIQErrorResponse", "UnavailableForLegalReasonsResponse", "ItemNotFoundIQErrorResponse", "SuspendedIQErrorResponse", "RateLimitedIQErrorResponse", "NotAllowedIQErrorResponse"], [n, d, p, f, _, g]);
};
var r = require("./135781.js");
var i = require("./704663.js");
var a = require("./238929.js");
var o = require("./458534.js");
var s = require("./565914.js");
var l = require("./270663.js");
var u = require("./818128.js");
var c = require("./686310.js");