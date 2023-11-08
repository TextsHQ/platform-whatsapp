Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSubscribeToLiveUpdatesResponseClientError = function (e, t) {
  const n = (0, o.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const l = (0, r.parseBadRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorResponseMixinGroup)(e, t);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)({
    badRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorResponseMixinGroup: l.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/531455.js");
var o = require("../app/686310.js");