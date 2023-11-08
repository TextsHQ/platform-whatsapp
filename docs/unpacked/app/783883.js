var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewsletterLiveUpdatesNotification = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./628785.js");
var l = require("./359987.js");
var u = require("./570057.js");
var c = require("./73225.js");
var d = require("./669050.js");
function p() {
  return (p = (0, a.default)(function* (e) {
    const {
      makeLiveUpdatesNotificationResponseAck: t,
      parsedRequest: n
    } = (0, s.receiveLiveUpdatesNotificationRPC)(e);
    try {
      if (!(0, c.isNewsletterReactionEnabled)()) {
        return t();
      }
      const {
        liveUpdatesMessagesNewsletterMessageResponsePayloadMixin: {
          message: e
        },
        from: r,
        t: a
      } = n;
      const s = yield (0, u.getMsgsAndAddOnsFromUpdates)(e, (0, d.createWid)((0, o.default)(r, "from")), a);
      yield (0, u.updateAddOnDbRecords)((0, i.default)((0, i.default)({}, s), {}, {
        timestamp: a
      }));
      (0, l.frontendFireAndForget)("updateNewsletterMessages", s);
      return t();
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][live-updates-notification] Failed to handle the notification`;
      SEND_LOGS("newsletter-live-updates-db", 1, "newsletter");
      return t();
    }
  })).apply(this, arguments);
}