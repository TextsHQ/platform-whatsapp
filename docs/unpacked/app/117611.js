var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsletterUnmuteQuery = function (e) {
  if ((0, s.getMexNewsletterSwitch)().isMexEnabledForNewsletterUnmute()) {
    return function () {
      return d.apply(this, arguments);
    }(e);
  }
  const t = function () {
    var t = (0, i.default)(function* () {
      const t = yield (0, a.sendUnmuteRPC)({
        newsletterArgs: e.map(e => ({
          newsletterJid: e
        }))
      });
      switch (t.name) {
        case "UnmuteResponseSuccess":
          return t.value.unmuteNewsletter;
        case "UnmuteResponseClientError":
          {
            const e = t.value.badRequestOrRateLimitedIQErrorResponseMixinGroup;
            switch (e.name) {
              case "BadRequestIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorBadRequestMixin;
                  throw new o.ServerStatusCodeError(Number(t), n);
                }
              case "RateLimitedIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorRateOverlimitMixin;
                  throw new o.ServerStatusCodeError(Number(t), n);
                }
            }
            break;
          }
        case "UnmuteResponseServerError":
          {
            const {
              code: e,
              text: n
            } = t.value.errorIQErrorInternalServerErrorMixin;
            throw new o.ServerStatusCodeError(Number(e), n);
          }
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  return (0, c.runWithBackoff)(t);
};
var i = r(require("../vendor/348926.js"));
var a = require("./249621.js");
var o = require("./984330.js");
var s = require("./573342.js");
var l = require("./716652.js");
var u = require("./339132.js");
var c = require("./408818.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = e[0];
    const n = yield (0, c.runWithBackoff)(() => (0, l.runWithErrorHandler)(() => (0, u.mexUnmuteNewsletter)(t)));
    return [(0, l.convertMutationResponse)(n.xwa2_newsletter_unmute_v2)];
  })).apply(this, arguments);
}