var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryNewsletterMessages = d;
exports.queryNewsletterMessagesByInviteCode = function (e, t, n) {
  return d((0, u.getNewsletterMessagesQueryParams)(e), t, n);
};
exports.queryNewsletterMessagesByJid = function (e, t, n) {
  return d((0, u.getNewsletterMessagesQueryParams)(e), t, n);
};
var i = r(require("../vendor/348926.js"));
var a = require("./843074.js");
var o = require("./632157.js");
var s = require("./984330.js");
var l = require("./73225.js");
var u = require("./645149.js");
function c(e) {
  if ((e == null ? undefined : e.before) != null) {
    return {
      beforeMixin: {
        messagesBefore: e.before
      }
    };
  } else if ((e == null ? undefined : e.after) != null) {
    return {
      afterMixin: {
        messagesAfter: e.after
      }
    };
  } else {
    return undefined;
  }
}
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e, t, n) {
    const r = c(n);
    if (t > (0, l.getMaxMsgCountFromServer)()) {
      __LOG__(3, undefined, undefined, true, ["newsletter"])`[queryNewsletterMessages] ${t} messages requested`;
      SEND_LOGS("newsletter-server-msg-count-exceeded", 1, "newsletter");
    }
    const i = yield (0, a.sendGetNewsletterMessagesRPC)({
      queryNewsletterParamsMixinArgs: {
        queryNewsletterJIDOrInviteParamsMixinGroupArgs: e
      },
      newsletterMessageRequestPayloadMixinArgs: {
        messagesCount: Math.min(t, (0, l.getMaxMsgCountFromServer)()),
        beforeOrAfterMixinMixinGroupArgs: r
      }
    });
    switch (i.name) {
      case "GetNewsletterMessagesResponseSuccess":
        {
          const {
            message: e,
            t: n
          } = i.value.messagesNewsletterMessageResponsePayloadMixin;
          return {
            messages: e,
            end: e.length < t,
            timestamp: n != null ? n : (0, o.unixTime)()
          };
        }
      case "GetNewsletterMessagesResponseClientError":
        {
          const {
            badRequestIQErrorOrUnavailableForLegalReasonsOrItemNotFoundIQErrorOrSuspendedIQErrorOrRateLimitedIQErrorOrNotAllowedIQErrorResponseMixinGroup: e
          } = i.value;
          switch (e.name) {
            case "ItemNotFoundIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorItemNotFoundMixin;
                throw new s.ServerStatusCodeError(n, t);
              }
            case "RateLimitedIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorRateOverlimitMixin;
                throw new s.ServerStatusCodeError(n, t);
              }
            case "BadRequestIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorBadRequestMixin;
                throw new s.ServerStatusCodeError(n, t);
              }
            case "SuspendedIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorLockedMixin;
                throw new s.ServerStatusCodeError(n, t);
              }
            case "UnavailableForLegalReasonsResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorUnavailableForLegalReasonsGenericMixin;
                throw new s.ServerStatusCodeError(n, t);
              }
            case "NotAllowedIQErrorResponse":
              {
                const {
                  text: t,
                  code: n
                } = e.value.errorIQErrorNotAllowedMixin;
                throw new s.ServerStatusCodeError(n, t);
              }
          }
          break;
        }
      case "GetNewsletterMessagesResponseServerError":
        {
          const {
            code: e,
            text: t
          } = i.value.errorIQErrorInternalServerErrorMixin;
          return Promise.reject(new s.ServerStatusCodeError(Number(e), t));
        }
    }
  })).apply(this, arguments);
}