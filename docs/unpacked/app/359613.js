Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetNewsletterMessageUpdatesResponseClientError = function (e, t) {
  const n = (0, a.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, i.parseBadRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorResponseMixinGroup)(e, t);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    badRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorResponseMixinGroup: o.value
  });
};
var r = require("./135781.js");
var i = require("./531455.js");
var a = require("./686310.js");