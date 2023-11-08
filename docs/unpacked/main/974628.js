var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsubscribeFromNewsletter = function (e) {
  const t = function () {
    var t = (0, r.default)(function* () {
      if ((0, u.getMexNewsletterSwitch)().isMexEnabledForNewsletterLeave()) {
        return function () {
          return d.apply(this, arguments);
        }(e);
      }
      const t = yield (0, o.sendUnsubscribeNewsletterRPC)({
        iqTo: e
      });
      switch (t.name) {
        case "UnsubscribeNewsletterResponseSuccess":
          return true;
        case "UnsubscribeNewsletterResponseClientError":
          {
            const e = t.value.badRequestOrRateLimitedOrNotAllowedIQErrorResponseMixinGroup;
            switch (e.name) {
              case "BadRequestIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorBadRequestMixin;
                  throw new l.ServerStatusCodeError(Number(t), n);
                }
              case "NotAllowedIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorNotAllowedMixin;
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
        case "UnsubscribeNewsletterResponseServerError":
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
var o = require("./667615.js");
var l = require("../app/984330.js");
var i = require("./231965.js");
var u = require("../app/573342.js");
var s = require("../app/716652.js");
var c = require("../app/408818.js");
function d() {
  return (d = (0, r.default)(function* (e) {
    const t = yield (0, s.runWithErrorHandler)(() => (0, i.mexLeaveNewsletter)(e));
    if ((t == null ? undefined : t.xwa2_newsletter_leave_v2) != null) {
      const e = t.xwa2_newsletter_leave_v2.newsletter_state.type;
      if (e === "DELETED" || e === "NON_EXISTING") {
        throw new l.ServerStatusCodeError(404, "newsletter-deleted-or-non-existing");
      }
      if (e === "SUSPENDED") {
        throw new l.ServerStatusCodeError(423, "newsletter-suspended");
      }
      return true;
    }
    throw new l.ServerStatusCodeError(500, "unexpected-null-mex-response");
  })).apply(this, arguments);
}