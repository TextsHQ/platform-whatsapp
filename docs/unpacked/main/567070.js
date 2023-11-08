var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNewsletterAction = function (e) {
  return l.newsletterDeleteQueue.enqueue((0, r.default)(function* () {
    if (!e.isNewsletter) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][deleteNewsletterAction] called with a non-newsletter chat`;
      return void SEND_LOGS("delete-not-a-newsletter", 1, "newsletter");
    }
    const t = (0, o.toNewsletterJid)(e.id.toJid());
    try {
      yield (0, u.deleteNewsletter)(t);
      i.NewsletterBridgeApi.deleteNewsletter({
        id: e.id,
        keep: false
      });
    } catch (e) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletters][deleteNewsletterAction] Failed to delete`;
      SEND_LOGS("newsletter-failed-to-delete", 1, "newsletter");
      throw e;
    }
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/418987.js");
var l = require("../app/309570.js");
var i = require("../app/549142.js");
var u = require("./698436.js");