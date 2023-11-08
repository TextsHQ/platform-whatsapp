var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterMessageUpdatesQuery = function (e, t) {
  return (0, u.runWithBackoff)(() => function () {
    return c.apply(this, arguments);
  }(e, t));
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./766366.js");
var s = require("./632157.js");
var l = require("./984330.js");
var u = require("./408818.js");
function c() {
  return (c = (0, i.default)(function* (e, t) {
    const {
      since: n,
      count: r,
      cursor: i
    } = t;
    const a = yield (0, o.sendGetNewsletterMessageUpdatesRPC)({
      iqTo: e,
      messageUpdatesCount: r,
      messageUpdatesSince: n,
      messageUpdatesBeforeOrAfterMixinMixinGroupArgs: d(i)
    });
    switch (a.name) {
      case "GetNewsletterMessageUpdatesResponseSuccess":
        {
          var u;
          const {
            messageUpdatesMessagesNewsletterMessageResponsePayloadMixin: e
          } = a.value;
          return {
            updates: e.message,
            timestamp: (u = e.t) !== null && u !== undefined ? u : (0, s.unixTime)()
          };
        }
      case "GetNewsletterMessageUpdatesResponseServerError":
        {
          const {
            code: e,
            text: t
          } = a.value.errorIQErrorInternalServerErrorMixin;
          throw new l.ServerStatusCodeError(Number(e), t);
        }
      case "GetNewsletterMessageUpdatesResponseClientError":
        {
          const e = a.value.badRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorResponseMixinGroup;
          switch (e.name) {
            case "ItemNotFoundIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorItemNotFoundMixin;
                return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
              }
            case "RateLimitedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorRateOverlimitMixin;
                return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
              }
            case "BadRequestIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorBadRequestMixin;
                return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
              }
            case "SuspendedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorLockedMixin;
                return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
              }
            case "UnavailableForLegalReasonsResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorUnavailableForLegalReasonsGenericMixin;
                return Promise.reject(new l.ServerStatusCodeError(Number(t), n));
              }
          }
        }
    }
  })).apply(this, arguments);
}
function d(e) {
  if (e.after != null) {
    return {
      messageUpdatesAfterMixin: {
        messageUpdatesAfter: e.after
      }
    };
  } else {
    return {
      messageUpdatesBeforeMixin: {
        messageUpdatesBefore: (0, a.default)(e.before, "cursor.before")
      }
    };
  }
}