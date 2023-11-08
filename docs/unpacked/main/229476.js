var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsubscribeFromNewsletterAction = function () {
  return h.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/418987.js");
var l = require("../app/927531.js");
var i = require("../app/509169.js");
var u = require("../app/549142.js");
var s = require("../app/362626.js");
var c = require("../app/424091.js");
var d = require("../app/787671.js");
var f = require("../app/718561.js");
var p = require("./762348.js");
var m = require("../app/991547.js");
function h() {
  return (h = (0, r.default)(function* (e, t) {
    var n;
    if (!e.isNewsletter) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][unsubscribeFromNewsletterAction] called with a non-newsletter chat`;
      return void SEND_LOGS("unsubscribe-from-not-a-newsletter", 1, "newsletter");
    }
    const a = (0, o.toNewsletterJid)(e.id.toJid());
    const r = (n = t.deleteLocalModels) === null || n === undefined || n;
    i.NewsletterCoreEventLogger.log({
      cid: e.id,
      eventSurface: t.eventSurface,
      channelCoreEventType: m.CHANNEL_EVENT_TYPE.UNFOLLOW
    });
    try {
      var h;
      yield (0, p.unsubscribeFromNewsletter)(a);
      if (r) {
        yield (0, d.deleteNewsletterMetadata)(a);
        yield (0, c.deleteNewsletterMessageAddOns)(e.id);
        yield (0, s.deleteNewsletterChat)(e.id);
        u.NewsletterBridgeApi.deleteNewsletter({
          id: e.id,
          keep: false
        });
      } else {
        yield (0, d.updateNewsletterMetadata)((0, f.createNewsletterMetadataObjectForStorage)({
          id: e.id,
          membershipType: l.NewsletterMembershipType.Guest
        }));
        if (!((h = e.newsletterMetadata) === null || h === undefined)) {
          h.set("membershipType", l.NewsletterMembershipType.Guest);
        }
      }
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][unsubscribeFromNewsletterAction] Failed to unsubscribe`;
      SEND_LOGS("newsletter-failed-to-unsubscribe", 1, "newsletter");
      throw e;
    }
  })).apply(this, arguments);
}