Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDeleteResponseClientError = function (e, t) {
  const n = (0, o.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const l = (0, r.parseUnauthorizedOrBadRequestOrRateLimitedIQErrorResponseMixinGroup)(e, t);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)({
    unauthorizedOrBadRequestOrRateLimitedIQErrorResponseMixinGroup: l.value
  });
};
var a = require("../app/135781.js");
var r = require("./111609.js");
var o = require("../app/686310.js");