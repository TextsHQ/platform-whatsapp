var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNewsletterQuery = function (e) {
  if ((0, u.getMexNewsletterSwitch)().isMexEnabledForNewsletterDeletion()) {
    return function () {
      return d.apply(this, arguments);
    }(e);
  }
  const t = function () {
    var t = (0, r.default)(function* () {
      const t = yield (0, o.sendDeleteRPC)({
        iqTo: e
      });
      switch (t.name) {
        case "DeleteResponseSuccess":
          return true;
        case "DeleteResponseClientError":
          {
            const e = t.value.unauthorizedOrBadRequestOrRateLimitedIQErrorResponseMixinGroup;
            switch (e.name) {
              case "UnauthorizedIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorNotAuthorizedMixin;
                  throw new l.ServerStatusCodeError(Number(t), n);
                }
              case "BadRequestIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorBadRequestMixin;
                  throw new l.ServerStatusCodeError(Number(t), n);
                }
              case "RateLimitedIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorRateOverlimitMixin;
                  throw new l.ServerStatusCodeError(Number(t), n);
                }
            }
            break;
          }
        case "DeleteResponseServerError":
          {
            const {
              code: e,
              text: n
            } = t.value.errorIQErrorInternalServerErrorMixin;
            throw new l.ServerStatusCodeError(Number(e), n);
          }
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  return (0, c.runWithBackoff)(t);
};
var r = a(require("../vendor/348926.js"));
var o = require("./197024.js");
var l = require("../app/984330.js");
var i = require("./780319.js");
var u = require("../app/573342.js");
var s = require("../app/716652.js");
var c = require("../app/408818.js");
function d() {
  return (d = (0, r.default)(function* (e) {
    if ((yield (0, c.runWithBackoff)(() => (0, s.runWithErrorHandler)(() => (0, i.mexDeleteNewsletter)(e)))).xwa2_newsletter_delete_v2 != null) {
      return true;
    }
    throw new l.ServerStatusCodeError(500, "xwa2_newsletter_delete_v2 is null");
  })).apply(this, arguments);
}