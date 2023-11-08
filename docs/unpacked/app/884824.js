Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetNewsletterMessagesResponseClientError = function (e, t) {
  const n = (0, a.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, i.parseBadRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorOrNotAllowedIQErrorResponseMixinGroup)(e, t);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    badRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorOrNotAllowedIQErrorResponseMixinGroup: o.value
  });
};
var r = require("./135781.js");
var i = require("./770900.js");
var a = require("./686310.js");