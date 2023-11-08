var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToLiveUpdates = function () {
  return c.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/418987.js");
var l = require("../app/549142.js");
var i = require("../app/787671.js");
var u = require("./416958.js");
var s = require("../app/263318.js");
function c() {
  return (c = (0, r.default)(function* (e) {
    try {
      return yield (0, u.subscribeToLiveUpdatesJob)((0, s.toNewsletterJidOrThrow)(e.toJid()));
    } catch (t) {
      if ((t == null ? undefined : t.status) === 423) {
        try {
          yield (0, i.suspendNewsletter)((0, o.toNewsletterJid)(e.toJid()));
          l.NewsletterBridgeApi.suspendNewsletter({
            id: e
          });
        } catch (t) {
          __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][subscribeToLiveUpdatesJob] Failed to suspend channel ${e.toString()} on receiving 423 error - ${t.name}`;
          return void SEND_LOGS("newsletter-subscribe-to-live-updates-suspend-error", 1, "newsletter");
        }
      } else if ((t == null ? undefined : t.status) === 451) {
        try {
          yield (0, i.geosuspendNewsletter)((0, o.toNewsletterJid)(e.toJid()));
          l.NewsletterBridgeApi.geosuspendNewsletter({
            id: e
          });
        } catch (t) {
          __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter][subscribeToLiveUpdatesJob] Failed to geosuspend channel ${e.toString()} on receiving 451 error - ${t.name}`;
          return void SEND_LOGS("newsletter-subscribe-to-live-updates-geosuspend-error", 1, "newsletter");
        }
      }
      __LOG__(4, undefined, new Error())`[subscribeToLiveUpdatesJob] Failed to subscribe to live updates`;
    }
  })).apply(this, arguments);
}