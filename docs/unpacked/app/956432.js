var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsletterMuteQuery = function (e) {
  if ((0, l.getMexNewsletterSwitch)().isMexEnabledForNewsletterMute()) {
    return function () {
      return d.apply(this, arguments);
    }(e);
  }
  const t = function () {
    var t = (0, i.default)(function* () {
      const t = yield (0, a.sendMuteRPC)({
        newsletterArgs: e.map(e => ({
          newsletterJid: e
        }))
      });
      switch (t.name) {
        case "MuteResponseSuccess":
          return t.value.muteNewsletter;
        case "MuteResponseClientError":
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
        case "MuteResponseServerError":
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
var a = require("./250375.js");
var o = require("./984330.js");
var s = require("./697885.js");
var l = require("./573342.js");
var u = require("./716652.js");
var c = require("./408818.js");
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = e[0];
    const n = yield (0, c.runWithBackoff)(() => (0, u.runWithErrorHandler)(() => (0, s.mexMuteNewsletter)(t)));
    return [(0, u.convertMutationResponse)(n.xwa2_newsletter_mute_v2)];
  })).apply(this, arguments);
}