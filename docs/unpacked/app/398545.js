var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMyNewsletterAddOnsRPC = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./204099.js");
var o = require("./984330.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    const {
      count: t,
      newsletterJid: n
    } = e;
    const r = yield (0, a.sendMyAddOnsRPC)({
      myAddonsLimit: t,
      myAddonsJid: n
    });
    switch (r.name) {
      case "MyAddOnsResponseSuccess":
        return {
          messagesByNewsletter: r.value.myAddonsMessages
        };
      case "MyAddOnsResponseServerError":
        {
          const {
            code: e,
            text: t
          } = r.value.errorIQErrorInternalServerErrorMixin;
          throw new o.ServerStatusCodeError(Number(e), t);
        }
      case "MyAddOnsResponseClientError":
        {
          const e = r.value.myAddonsClientErrors;
          switch (e.name) {
            case "ItemNotFoundIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorItemNotFoundMixin;
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
            case "BadRequestIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorBadRequestMixin;
                throw new o.ServerStatusCodeError(Number(t), n);
              }
            case "UnauthorizedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorNotAuthorizedMixin;
                throw new o.ServerStatusCodeError(Number(t), n);
              }
          }
        }
    }
  })).apply(this, arguments);
}