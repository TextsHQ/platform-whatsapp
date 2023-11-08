var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToNewsletter = function (e) {
  const t = function () {
    var t = (0, r.default)(function* () {
      if ((0, u.getMexNewsletterSwitch)().isMexEnabledForNewsletterJoin()) {
        return function () {
          return d.apply(this, arguments);
        }(e);
      }
      const t = yield (0, o.sendSubscribeNewsletterRPC)({
        iqTo: e
      });
      switch (t.name) {
        case "SubscribeNewsletterResponseSuccess":
          return true;
        case "SubscribeNewsletterResponseClientError":
          {
            const e = t.value.subscribeNewsletterClientErrors;
            switch (e.name) {
              case "SuspendedIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorLockedMixin;
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
              case "ItemNotFoundIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorItemNotFoundMixin;
                  throw new l.ServerStatusCodeError(Number(t), n);
                }
              case "ResourceLimitIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorResourceLimitMixin;
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
            }
            break;
          }
        case "SubscribeNewsletterResponseServerError":
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
var o = require("./500873.js");
var l = require("../app/984330.js");
var i = require("./780534.js");
var u = require("../app/573342.js");
var s = require("../app/716652.js");
var c = require("../app/408818.js");
function d() {
  return (d = (0, r.default)(function* (e) {
    const t = yield (0, s.runWithErrorHandler)(() => (0, i.mexJoinNewsletter)(e));
    if ((t == null ? undefined : t.xwa2_newsletter_join_v2) != null) {
      const e = t.xwa2_newsletter_join_v2.newsletter_state.type;
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