var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexHandleNewsletterLeave = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./359987.js");
var s = require("./854379.js");
var l = require("./727615.js");
var u = require("./362626.js");
var c = require("./424091.js");
var d = require("./787671.js");
var p = r(require("./556869.js"));
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const {
      id: n
    } = t.xwa2_notify_newsletter_on_leave;
    if (n == null) {
      throw (0, p.default)("unexpected null id in xwa2_notify_newsletter_on_leave");
    }
    const r = (0, a.toNewsletterJid)(n);
    const i = (0, s.newsletterJidToWid)(r);
    if (yield (0, l.doesNewsletterExistInStorage)(r)) {
      try {
        yield (0, d.deleteNewsletterMetadata)(r);
        yield (0, c.deleteNewsletterMessageAddOns)(r);
        yield (0, u.deleteNewsletterChat)(i);
        (0, o.frontendFireAndForget)("deleteNewsletter", {
          id: i,
          keep: true
        });
      } catch (e) {
        __LOG__(4, undefined, new Error(), true, ["mex", "newsletter"])`[mex][newsletter][notification][leave]`;
        SEND_LOGS("mex-newsletter-notification-leave-fail", 1, "mex", "newsletter");
      }
    } else {
      (0, o.frontendFireAndForget)("updateNewsletterSubscriberCount", {
        id: i,
        update: {
          increment: -1
        }
      });
    }
  })).apply(this, arguments);
}