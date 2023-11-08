var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToLiveUpdatesQuery = function (e) {
  return (0, i.runWithBackoff)(() => function () {
    return u.apply(this, arguments);
  }(e));
};
var r = a(require("../vendor/348926.js"));
var o = require("./262598.js");
var l = require("../app/984330.js");
var i = require("../app/408818.js");
function u() {
  return (u = (0, r.default)(function* (e) {
    const t = yield (0, o.sendSubscribeToLiveUpdatesRPC)({
      iqTo: e
    });
    switch (t.name) {
      case "SubscribeToLiveUpdatesResponseSuccess":
        return {
          duration: t.value.liveUpdatesDuration * 1000
        };
      case "SubscribeToLiveUpdatesResponseServerError":
        {
          const {
            code: e,
            text: n
          } = t.value.errorIQErrorInternalServerErrorMixin;
          throw new l.ServerStatusCodeError(e, n);
        }
      case "SubscribeToLiveUpdatesResponseClientError":
        {
          const e = t.value.badRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorResponseMixinGroup;
          switch (e.name) {
            case "ItemNotFoundIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorItemNotFoundMixin;
                throw new l.ServerStatusCodeError(n, t);
              }
            case "RateLimitedIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorRateOverlimitMixin;
                throw new l.ServerStatusCodeError(n, t);
              }
            case "BadRequestIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorBadRequestMixin;
                throw new l.ServerStatusCodeError(n, t);
              }
            case "SuspendedIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorLockedMixin;
                throw new l.ServerStatusCodeError(n, t);
              }
            case "UnavailableForLegalReasonsResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorUnavailableForLegalReasonsGenericMixin;
                throw new l.ServerStatusCodeError(n, t);
              }
          }
        }
    }
  })).apply(this, arguments);
}